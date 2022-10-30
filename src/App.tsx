import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './protectedRoute/PrivateRoute';
import { Home } from './pages/home-page/Home';
import { Profile } from './pages/profile-page/Profile';

export const App = () => {
  return (
    <div className="app">
      {/* <React.StrictMode> */}
      <Router basename="">
        <Routes>
          <Route
            path="*"
            element={<p style={{ color: 'white' }}>Not Found</p>}
          />
          <Route path="">
            <Route index element={<Home />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={<p style={{ color: 'white' }}>About Page</p>}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

// const Web_App = reactToWebComponent(App, React, ReactDOM);
// customElements.define('pb-app', Web_App);
