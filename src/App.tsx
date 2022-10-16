import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './protectedRoute/PrivateRoute';
import { useEffect } from 'react';
import { Home } from './pages/home-page/Home';
import { Login } from './pages/login-page/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userActions } from './app/store/userReducer';
import { Profile } from './pages/profile-page/Profile';

export const App = () => {
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

  return (
    <div className="app">
      {/* <React.StrictMode> */}
      <Router basename="">
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route
              path="*"
              element={<p style={{ color: 'white' }}>Not Found</p>}
            />
            <Route path="">
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="about"
                element={<p style={{ color: 'white' }}>About Page</p>}
              />
              <Route path="pbcomps">
                <Route index element={<p>Routes for components</p>} />
                <Route
                  path="component2"
                  element={
                    <PrivateRoute>
                      <p>ELement3</p>
                    </PrivateRoute>
                  }
                />
                <Route path="pb-parking/:assetId/:bayId">
                  <Route index element={<p>ELement3</p>} />
                  <Route
                    path=":countryId/:carPlates"
                    element={<p>ELement3</p>}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        )}
      </Router>
      {/* </React.StrictMode> */}
    </div>
  );
};

// const Web_App = reactToWebComponent(App, React, ReactDOM);
// customElements.define('pb-app', Web_App);
