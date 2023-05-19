import { useEffect, useState } from 'react';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [color, setColor] = useState('ol');
  const [url, setUrl] = useState([
    'https://i-avengers-toy-server.vercel.app/allToys',
  ]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleSort = (color) => {
    if (color === 'ol') {
      setColor('ol');
      setUrl('https://i-avengers-toy-server.vercel.app/allToys');
    } else if (color === 'lth') {
      setColor('lth');
      setUrl(`https://i-avengers-toy-server.vercel.app/allToys?ascending=true`);
    } else {
      setColor('htl');
      setUrl(
        `https://i-avengers-toy-server.vercel.app/allToys?ascending=false`
      );
    }
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setUrl(`http://localhost:5000/allToys?search=${e.target.value}`);
    console.log(`http://localhost:5000/allToys?search=${e.target.value}`);
  };
  return (
    <>
      <CategoryBanner>all toys</CategoryBanner>
      <section className='allContainer py-10'>
        <div>
          <input
            type='text'
            placeholder='Type here'
            className='input w-full max-w-xs'
            onChange={handleSearch}
          />
        </div>
        <div className='bg-gray-300 rounded my-5'>
          <button
            onClick={() => handleSort('lth')}
            className={`uppercase w-1/3 py-3 ${
              color === 'lth' ? 'bg-red-600 text-white rounded-s' : ''
            }`}
          >
            low to high Price
          </button>
          <button
            onClick={() => handleSort('htl')}
            className={`uppercase w-1/3 py-3 ${
              color === 'htl' ? 'bg-red-600 text-white' : ''
            }`}
          >
            high to low Price
          </button>
          <button
            onClick={() => handleSort('ol')}
            className={`uppercase w-1/3 py-3 ${
              color === 'ol' ? 'bg-red-600 text-white rounded-e' : ''
            }`}
          >
            over all
          </button>
        </div>
        <div className='overflow-x-auto w-full'>
          <table className='table md:w-full'>
            <thead>
              <tr className='text-2xl'>
                <th>SL</th>
                <th>Toy Image</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub Category</th>
                <th>Price ($)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className='text roboto-font font-bold'>
              {toys.map((toy, i) => (
                <>
                  <tr key={toy._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img src={toy.pictureUrl} alt='' className='w-[110px]' />
                    </td>
                    <td>
                      {toy.name.length > 110 ? toy.name.slice(0, 90) : toy.name}
                    </td>
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
    </>
  );
};

export default AllToys;
