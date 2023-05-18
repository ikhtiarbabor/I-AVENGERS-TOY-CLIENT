import { Outlet } from 'react-router-dom';
import Header from '../../utilities/shared/Header/Header';
import Footer from '../../utilities/shared/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Home;
