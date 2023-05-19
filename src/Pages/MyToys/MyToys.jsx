import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sellerData, setSellerData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const url = `https://i-avengers-toy-server.vercel.app/allToys?email=${user?.email}&sellerName=${user?.displayName}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSellerData(data));
  }, [loadData,url]);
  console.log(sellerData);
  return (
    <div>
      {sellerData.map((sellerData) => (
        <MyToysCard key={sellerData._id} sellerData={sellerData} setLoadData={setLoadData}loadData={loadData}></MyToysCard>
      ))}
    </div>
  );
};

export default MyToys;
