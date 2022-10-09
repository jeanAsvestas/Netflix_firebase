import './Home.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { Banner } from '../../components/banner/Banner';
import { Row } from '../../components/row/Row';
import { requests } from '../../services/requests-urls';

export const Home = () => {
  return (
    <div className="homeScreen">
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
  );
};
