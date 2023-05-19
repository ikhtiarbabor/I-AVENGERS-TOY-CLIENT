import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';
import NoToyAdded from './NoToyAdded';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sellersData, setSellerData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const url = `https://i-avengers-toy-server.vercel.app/allToys?email=${user?.email}&sellerName=${user.displayName}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSellerData(data));
  }, [loadData, url]);
  return (
    <div>
      <CategoryBanner>My Toys</CategoryBanner>

      {sellersData.length === 0 ? (
        <NoToyAdded />
      ) : (
        <section className='allContainer grid md:grid-cols-4 gap-6 py-7'>
          {sellersData.map((sellerData) => (
            <MyToysCard
              key={sellerData._id}
              sellerData={sellerData}
              setLoadData={setLoadData}
              loadData={loadData}
              setSellerData={setSellerData}
              sellersData={sellersData}
            ></MyToysCard>
          ))}
        </section>
      )}
    </div>
  );
};

export default MyToys;
