import './Profile.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/store/userReducer';
import { auth } from '../../firebase';

export const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <NavBar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            className="profile__info-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar png"
          />
          <div className="profile__details">
            <h2>{user && user.email}</h2>
            <div className="profile__plans">
              <button
                onClick={() => auth.signOut()}
                className="profile__signout-button"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
