import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedProps {
  children: JSX.Element;
}
const PrivateRoute = ({ children }: ProtectedProps) => {
  if (new Date().getDay() === 2) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={{ pathname: '/' }} replace />;
  }
};

export default PrivateRoute;
