import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './protectedRoute/PrivateRoute';
import React from 'react';
import { Home } from './pages/home-page/Home';

export const App = () => {
  return (
    <div className="app">
      {/* <React.StrictMode> */}
      <Router basename="">
        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="">
            <Route index element={<Home />} />
            <Route path="keypad-showcase" element={<p>ELement3</p>} />
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
              <Route path="component3" element={<p>ELement3</p>} />
              <Route path="component4" element={<p>ELement3</p>} />
              <Route path="component5" element={<p>ELement3</p>} />
              <Route path="media-page" element={<p>ELement3</p>} />
              <Route path="pb-parking/:assetId/:bayId">
                <Route index element={<p>ELement3</p>} />
                <Route path=":countryId/:carPlates" element={<p>ELement3</p>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
      {/* </React.StrictMode> */}
    </div>
  );
};

// const Web_App = reactToWebComponent(App, React, ReactDOM);
// customElements.define('pb-app', Web_App);
