import { useEffect, useState } from 'react';
import './NavBar.scss';

export const NavBar = () => {
  const [show, handleShow] = useState(false);

  const navBarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
      return;
    }
    handleShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navBarTransition);
    return () => window.removeEventListener('scroll', navBarTransition);
  }, []);

  return (
    <div className={`navBar ${show && 'navBar__black'}`}>
      <div className="navBar__contents">
        <img
          className="navBar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <img
          className="navBar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar png"
        />
      </div>
    </div>
  );
};
