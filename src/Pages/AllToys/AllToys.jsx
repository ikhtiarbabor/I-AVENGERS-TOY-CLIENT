import { useEffect, useState } from 'react';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('https://i-avengers-toy-server.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <section className='allContainer'>
      <div className='overflow-x-auto w-full'>
        <table className='table md:w-full'>
          <thead>
            <tr className='text-2xl'>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Price ($)</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className='text roboto-font font-bold'>
            {toys.map((toy, i) => (
              <>
                <tr>
                  <th>{i + 1}</th>
                  <td>
                    <img src={toy.pictureUrl} alt='' className='w-[110px]' />
                  </td>
                  <td>{toy.name}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.subCategory}</td>
                  <td className='text-red-600'>${toy.price}</td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
