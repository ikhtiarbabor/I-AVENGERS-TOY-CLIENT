import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sellerData, setSellerData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const url = `https://i-avengers-toy-server.vercel.app/allToys?email=${user?.email}&sellerName=${user.displayName}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSellerData(data));
  }, [loadData, url]);
  return (
    <div>
      <CategoryBanner></CategoryBanner>

      <section className='allContainer grid md:grid-cols-4 gap-6 py-7'>
        {sellerData.map((sellerData) => (
          <MyToysCard
            key={sellerData._id}
            sellerData={sellerData}
            setLoadData={setLoadData}
            loadData={loadData}
          ></MyToysCard>
        ))}
      </section>
    </div>
  );
};

export default MyToys;
