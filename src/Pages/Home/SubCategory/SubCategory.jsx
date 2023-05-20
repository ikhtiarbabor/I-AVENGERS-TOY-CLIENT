import { useState } from 'react';
import LoadData from '../../../utilities/LoadData/LoadData';
import { Link } from 'react-router-dom';

const SubCategory = () => {
  const [data, setData] = useState('Action Figures');
  const handleCategory = LoadData(
    `https://i-avengers-toy-server.vercel.app/allToys/subCat/${data
      .split(' ')
      .join('%20')}`,
    data
  );

  const handleSetData = (category) => {
    setData(category);
  };
  console.log(handleCategory);
  const subCategory = [
    'Action Figures',
    'Roleplay Accessories',
    'Playsets',
    'Plush Toys',
    'Avengers Battle Vehicles Set',
    'Avengers Motorcycle Helmet',
    'Costumes & Accessories',
    'Avengers Legends Series Figures',
  ];

  return (
    <section id='getStarted' className='py-12'>
      <h2 className='text-center text-5xl font-bold py-12  capitalize '>
        Choose Best options
      </h2>

      <div className='allContainer md:flex'>
        <div className='md:w-4/6 md:grid md:grid-cols-2 gap-5'>
          {handleCategory.map((toy) => (
            <div key={toy._id} className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img className='max-h-64' src={toy.pictureUrl} alt={toy.name} />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>
                  {toy.name}
                  <div className='badge bg-red-700 border-0'>NEW</div>
                </h2>
                <p>
                  {toy.details.length > 50
                    ? toy.details.slice(0, 50)
                    : toy.details}
                </p>
                <div className='card-actions justify-end'>
                  <Link
                    to={`/toyDetails/${toy._id}`}
                    className='badge badge-outline uppercase'
                  >
                    details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='md:w-2/6'>
          <ul className='border-1 border-gray-700 mx-6'>
            {subCategory.map((category, i) => (
              <li key={category + '3' + i}>
                <button
                  onClick={() => handleSetData(category)}
                  className={`text-left justify-start rounded-none btn hover:bg-red-600 hover:text-white  border-0 w-full ${
                    data === category
                      ? 'bg-red-600 text-white'
                      : ' text-black bg-white'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
