import { useKeycloak } from '@react-keycloak/web';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedProps {
  children: JSX.Element;
}
const PrivateRoute = ({ children }: ProtectedProps) => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  if (isLoggedIn) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={{ pathname: '/' }} replace />;
  }
};

export default PrivateRoute;
