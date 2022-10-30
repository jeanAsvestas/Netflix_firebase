import './Home.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { Banner } from '../../components/banner/Banner';
import { Row } from '../../components/row/Row';
import { requests } from '../../services/requests-urls';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userActions } from '../../app/store/userReducer';
import { useEffect } from 'react';
import { auth } from '../../firebase';
import { Login } from '../login-page/Login';

export const Home = () => {
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
  return user ? (
    <div className="home">
      <NavBar />
      <Banner />
      <Row isPoster={false} request={requests.originals} />
      <Row isPoster={false} request={requests.topRated} />
      <Row isPoster={true} request={requests.trending} />
      <Row isPoster={false} request={requests.actionMovies} />
      <Row isPoster={false} request={requests.comedyMovies} />
      <Row isPoster={false} request={requests.horrorMovies} />
      <Row isPoster={false} request={requests.romanceMovies} />
      <Row isPoster={false} request={requests.documentaries} />
    </div>
  ) : (
    <Login />
  );
};
