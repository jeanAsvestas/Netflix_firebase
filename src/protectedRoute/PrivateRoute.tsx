import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userActions } from '../app/store/userReducer';
import { useEffect } from 'react';
import { auth } from '../firebase';

interface ProtectedProps {
  children: JSX.Element;
}
const PrivateRoute = ({ children }: ProtectedProps) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(
          userActions.login({
            id: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });
    return unsubsrcibe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (user) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to={{ pathname: '/' }} replace />;
  }
};

export default PrivateRoute;
