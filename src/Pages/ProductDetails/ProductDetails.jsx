import { RxStar, RxStarFilled } from 'react-icons/rx';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const ProductDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const { name, price, details, pictureUrl, rating } = toyDetails;
  return (
    <>
      <CategoryBanner>{name} Details</CategoryBanner>
      <div className='min-w-screen min-h-screen bg-red-500 flex items-center p-5 lg:p-10 overflow-hidden relative'>
        <div className='w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left'>
          <div className='md:flex items-center -mx-10'>
            <div className='w-full md:w-1/2 px-10 mb-10 md:mb-0'>
              <div className='relative'>
                <img src={pictureUrl} className='w-full relative z-10' alt='' />
                <div className='border-4 border-red-600 border-rounded absolute top-0 bottom-0 left-0 right-0 z-10'></div>
              </div>
            </div>
            <div className='w-full md:w-1/2 px-10'>
              <div className='mb-10'>
                <h1 className='font-bold uppercase text-2xl mb-5'>{name}</h1>
                <p className='text-sm'>{details}</p>
                <p className='py-3 text-2xl'>
                  <Rating
                    placeholderRating={parseFloat(rating) || 3.5}
                    emptySymbol={<RxStar className='text-yellow-300'></RxStar>}
                    placeholderSymbol={
                      <RxStarFilled className='text-yellow-300'></RxStarFilled>
                    }
                    fullSymbol={
                      <RxStarFilled className='text-yellow-300'></RxStarFilled>
                    }
                    readonly
                  />
                </p>
              </div>
              <div>
                <div className='inline-block align-bottom mr-5'>
                  <span className='text-2xl leading-none align-baseline'>
                    $
                  </span>
                  <span className='font-bold text-5xl leading-none align-baseline'>
                    {String(price).split('.')[0]}
                  </span>
                  <span className='text-2xl leading-none align-baseline'>
                    .{String(price).split('.')[1]}
                  </span>
                </div>
                <div className='inline-block align-bottom'>
                  <button className='bg-red-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold'>
                    <i className='mdi mdi-cart -ml-2 mr-2'></i> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
