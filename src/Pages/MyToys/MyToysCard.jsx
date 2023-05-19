import Rating from 'react-rating';
import MyToysModal from './MyToysModal';
import { RxStar, RxStarFilled } from 'react-icons/rx';

const MyToysCard = ({
  sellerData,
  setLoadData,
  loadData,
  setSellerData,
  sellersData,
}) => {
  const { pictureUrl, price, name, rating, quantity } = sellerData;
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between'>
      <img
        className='p-8 rounded-t-lg rounded'
        src={pictureUrl}
        alt='product image'
      />

      <div className='px-5 mb-3'>
        <div className='flex justify-between items-center'>
          <div>
            <a href='#'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {name}
              </h5>
            </a>
            <div className='flex items-center mt-2.5 mb-5'>
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
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                {rating}
              </span>
            </div>
          </div>
          <div>
            <div>
              <span className='text-xs'>Quantity</span>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                {quantity}
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            ${price}
          </span>

          <MyToysModal
            sellerData={sellerData}
            setLoadData={setLoadData}
            loadData={loadData}
            setSellerData={setSellerData}
            sellersData={sellersData}
          />
        </div>
      </div>
    </div>
  );
};

export default MyToysCard;
