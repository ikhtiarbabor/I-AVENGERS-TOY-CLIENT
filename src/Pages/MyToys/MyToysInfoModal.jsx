import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';
import Rating from 'react-rating';
import { RxStarFilled, RxStar } from 'react-icons/rx';

const MyToysInfoModal = ({ sellerData }) => {
  console.log(sellerData);
  const { pictureUrl, name, subCategory, rating, details, quantity, price } =
    sellerData;

  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <div>
      <button
        onClick={onClick}
        className='bg-sky-600 hover:bg-sky-700 mr-2 rounded-full text-white package-btn p-3'
      >
        <FaInfo className='text-white rounded'></FaInfo>
      </button>
      <Modal dismissible={true} show={open} onClose={onClose}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className='card card-side flex gap-4'>
            <figure className='w-1/3'>
              <img src={pictureUrl} alt='Movie' className='block' />
            </figure>
            <div className='w-2/3'>
              <h2 className='card-title roboto-font text-center tracking-wide block text-red-600'>
                Information
              </h2>
              <div className='grid grid-cols-2 roboto-font'>
                <div>
                  <span className='roboto-font'>Price :</span>
                </div>
                <div>
                  <span>${price}</span>
                </div>
                <div>
                  <p className='roboto-font'>Quantity :</p>
                </div>
                <div>
                  <p>{quantity || 1}</p>
                </div>
                <div>
                  <p className='roboto-font'>Rating :</p>
                </div>
                <div>
                  <p>
                    <Rating
                      placeholderRating={parseFloat(rating) || 3.5}
                      emptySymbol={
                        <RxStar className='text-yellow-300'></RxStar>
                      }
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
                  <p className='roboto-font'>sub Category :</p>
                </div>
                <div>
                  <p>{subCategory}</p>
                </div>
              </div>
              <div>
                <p>
                  <b className='roboto-font'>Details</b>
                </p>
                <p className='font-sans'>{details}</p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <button
          onClick={onClose}
          className='btn bg-red-600 text-white border-red-600 mx-3 mb-5'
        >
          Ok
        </button>
      </Modal>
    </div>
  );
};

export default MyToysInfoModal;
