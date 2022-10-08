import './Home.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { Banner } from '../../components/banner/Banner';

export const Home = () => {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
    </div>
  );
};
