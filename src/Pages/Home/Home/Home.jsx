import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChildWithOurToys from '../ChildWithOurToys/ChildWithOurToys';
import PopularProduct from '../PopularProduct/PopularProduct';
import SubCategory from '../SubCategory/SubCategory';

const Home = () => {
  const productData = useLoaderData([]);
  console.log(productData);
  return (
    <>
      <Banner></Banner>
      <SubCategory></SubCategory>
      <ChildWithOurToys></ChildWithOurToys>
      <PopularProduct productData={productData}></PopularProduct>
    </>
  );
};

export default Home;
