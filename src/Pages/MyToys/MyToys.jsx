import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';
import NoToyAdded from './NoToyAdded';
import { Link } from 'react-router-dom';
import MyToysModal from './MyToysModal';

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
  console.log(sellersData);
  return (
    <div>
      <CategoryBanner>My Toys</CategoryBanner>

      {sellersData.length === 0 ? (
        <NoToyAdded />
      ) : (
        <>
          <h2 className='text-center roboto-font py-4 text-4xl'>
            Your Total Toys : {sellersData.length}
          </h2>
          <section className='allContainer  py-7'>
            <table className='table md:w-full'>
              <thead>
                <tr className='text-2xl'>
                  <th>SL</th>
                  <th>Toy Image</th>
                  <th>Toy Name</th>

                  <th>Sub Category</th>
                  <th>Price ($)</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text roboto-font font-bold'>
                {sellersData.map((sellerData, i) => (
                  <tr key={sellerData._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={sellerData.pictureUrl}
                        alt=''
                        className='w-[110px]'
                      />
                    </td>
                    <td>
                      {sellerData.name.length > 110
                        ? sellerData.name.slice(0, 90)
                        : sellerData.name}
                    </td>

                    <td>{sellerData.subCategory}</td>
                    <td className='text-red-600'>${sellerData.price}</td>
                    <td>
                      <Link
                        className='btn bg-red-700 text-white border-0'
                        to={`/toyDetails/${sellerData._id}`}
                      >
                        Details
                      </Link>
                    </td>
                    <td>
                      <MyToysModal
                        sellerData={sellerData}
                        setLoadData={setLoadData}
                        loadData={loadData}
                        setSellerData={setSellerData}
                        sellersData={sellersData}
                      />
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </table>
          </section>
        </>
      )}
    </div>
  );
};

export default MyToys;
