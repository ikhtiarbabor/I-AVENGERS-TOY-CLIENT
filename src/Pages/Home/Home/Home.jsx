
import Banner from '../Banner/Banner';
import ChildWithOurToys from '../ChildWithOurToys/ChildWithOurToys';
import PopularProduct from '../PopularProduct/PopularProduct';
import SubCategory from '../SubCategory/SubCategory';
import OurReviews from '../../OurReviews/OurReviews';

const Home = () => {

  return (
    <>
      <Banner></Banner>
      <SubCategory></SubCategory>
      <ChildWithOurToys></ChildWithOurToys>
      <PopularProduct></PopularProduct>
      <OurReviews ></OurReviews>
    </>
  );
};

export default Home;
