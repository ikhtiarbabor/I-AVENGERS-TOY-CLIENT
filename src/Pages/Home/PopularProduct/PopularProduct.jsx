// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const banner = 'https://www.shopdisney.in/media/June/MarvelFranchiseBanner.jpg';
const PopularProduct = ({ productData }) => {
  //   const [toys, setToys] = useState([]);

  //   useEffect(() => {
  //     fetch('https://i-avengers-toy-server.vercel.app/newArrives')
  //       .then((response) => response.json())
  //       .then((data) => setToys(data));
  //   }, []);
  const handleAddCart = () => {
    toast('🛒 you added this item!');
  };

    console.log(productData);
  return (
    <section
      className='bg-cover bg-center bg-repeat-no my-14 pb-12'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundColor: 'rgba(0,0,0,.7)',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2 className='text-center text-white md:text-5xl text-3xl py-5 underline capitalize'>
        Popular Toys
      </h2>

      <div className='md:grid md:grid-cols-4 allContainer gap-5'>
        {productData.map((toy) => (
          <>
            <div className='flex flex-col items-center justify-center my-5 md:my-0'>
              <div className='max-w-md w-full  bg-gray-900 shadow-lg rounded-xl p-6'>
                <div className='flex flex-col '>
                  <div className='relative h-62 w-full mb-3'>
                    <img
                      src={toy.pictureUrl}
                      alt='Just a flower'
                      className=' max-h-[171px] w-full object-fill  rounded-2xl'
                    />
                  </div>
                  <div className='flex-auto justify-evenly'>
                    <div className='flex flex-wrap '>
                      <div className='w-full flex-none text-sm flex items-center text-gray-600'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4 text-red-500 mr-1'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                        <span className='text-gray-400 whitespace-nowrap mr-3'>
                          {toy.rating}
                        </span>
                      </div>
                      <div className='flex items-center w-full justify-between min-w-0 '>
                        <h2 className='text-lg mr-auto cursor-pointer text-gray-200 hover:text-red-500 truncate '>
                          {toy.name}
                        </h2>
                        <div className='flex items-center w-[50px] bg-white text-red-500 text-xs px-2 py-1 ml-3 rounded-lg'>
                          Q :{toy.quantity || 1}
                        </div>
                      </div>
                    </div>
                    <div className='text-xl text-white font-semibold mt-1'>
                      ${toy.price}
                    </div>

                    <div className='flex space-x-2 text-sm font-medium justify-start'>
                      <button
                        className='transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-red-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-red-600 '
                        onClick={handleAddCart}
                      >
                        <span>Add Cart</span>
                      </button>
                      <Link to={`/toyDetails/${toy._id}`}>
                        <button className='transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className=''
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
