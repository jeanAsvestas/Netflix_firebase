import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './store/keycloak/Keycloak';
import { NavBar } from './components/navbar/navbar';
import { PB_Component2 } from './components/pb-component2/pb-component2';
import { PB_Component3 } from './components/pb-component3/pb-component3';
import PB_Component4 from './components/pb-component4/pb-component4';
import PrivateRoute from './protectedRoute/PrivateRoute';
import PB_Component5 from './components/pb-component5/pb-component5';
import { Media_Page } from './pages/media-page/media-page';
import { PB_Parking_Form } from './components/pb-parking/pb-parking-form';
import { PB_Parking_AdHoc } from './components/pb-parking/pb-parking-ad-hoc';
import { PB_Login } from './components/pb-login/pb-login';
import { Home } from './pages/home-page/Home';
import { Keypad_Showcase } from './pages/showcases/keypad-showcase/Keypad-showcase';
// import AuthProvider from './store/keycloak/Auth.context';

// import reactToWebComponent from 'react-to-webcomponent';
// import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: 'check-sso',
          // forces login on loading page if enabled
          // 'login-required'
        }}
        onEvent={(event, error) => {
          console.log('onKeycloakEvent', event, error);
          if (event === 'onAuthLogout')
            sessionStorage.removeItem('pb-kc-token');
        }}
        onTokens={({ token }) => {
          console.log('token received');
          if (token) {
            sessionStorage.setItem('pb-kc-token', token);
          }
        }}
      >
        <React.StrictMode>
          <Router basename="pb4-uicomponents">
            <NavBar />
            <PB_Login />
            <br />

            <Routes>
              <Route path="*" element={<p>Not Found</p>} />
              <Route path="">
                <Route index element={<Home />} />
                <Route path="keypad-showcase" element={<Keypad_Showcase />} />
                <Route path="pbcomps">
                  <Route index element={<p>Routes for components</p>} />
                  <Route
                    path="component2"
                    element={
                      <PrivateRoute>
                        <PB_Component2 />
                      </PrivateRoute>
                    }
                  />
                  <Route path="component3" element={<PB_Component3 />} />
                  <Route path="component4" element={<PB_Component4 />} />
                  <Route path="component5" element={<PB_Component5 />} />
                  <Route path="media-page" element={<Media_Page />} />
                  <Route path="pb-parking/:assetId/:bayId">
                    <Route index element={<PB_Parking_AdHoc />} />
                    <Route
                      path=":countryId/:carPlates"
                      element={<PB_Parking_Form />}
                    />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </React.StrictMode>
        {/* </AuthProvider> */}
      </ReactKeycloakProvider>
    </>
  );
};

// const Web_App = reactToWebComponent(App, React, ReactDOM);
// customElements.define('pb-app', Web_App);
