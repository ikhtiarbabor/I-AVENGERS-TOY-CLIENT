import { Outlet } from 'react-router-dom';
import Header from '../utilities/shared/Header/Header';
import Footer from '../utilities/shared/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <section className='outletMinW'>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
