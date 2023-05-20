import { Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxUpdate, RxTrash } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysInfoModal from './MyToysInfoModal';
import { toast } from 'react-toastify';

const MyToysModal = ({ sellerData, setLoadData, loadData, sellersData }) => {
  const { user } = useContext(AuthContext);
  const {
    name,
    email,
    price,
    pictureUrl,
    rating,
    details,
    subCategory,
    _id,
    quantity,
  } = sellerData;

  const [show, setShow] = useState(false);
  const onClick = () => setShow(true);
  const onClose = () => setShow(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://i-avengers-toy-server.vercel.app/allToys/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLoadData(!loadData);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You Successfully added a new toy',
            showConfirmButton: false,
            timer: 1500,
          });
          onClose();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      })
      .catch((err) => {
        if (err) {
          toast('Wow so easy !');
        }
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://i-avengers-toy-server.vercel.app/allToys/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              setLoadData(!loadData);
              console.log(sellersData, loadData);
            }
          });
      }
    });
  };

  const subCategories = [
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
    <>
      <div className='flex'>
        <MyToysInfoModal sellerData={sellerData}></MyToysInfoModal>

        <button
          className='bg-red-600 hover:bg-red-700 mr-2 rounded-full text-white package-btn p-3'
          onClick={() => handleDelete()}
        >
          <RxTrash className='text-white rounded'></RxTrash>
        </button>
        <button
          onClick={onClick}
          className='bg-green-500 hover:bg-green-600 rounded-full text-white package-btn p-3'
        >
          <RxUpdate className='text-white rounded'></RxUpdate>
        </button>
      </div>
      <Modal show={show} size='md' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <section className='allContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid md:grid-cols-2 max-w-3xl gap-y-2 gap-x-5 mx-auto'>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Product Name
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='Product Name'
                    className='input input-bordered font-bold w-full'
                    {...register('name')}
                    required
                    defaultValue={name}
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Photo URL
                    </span>
                  </label>
                  <input
                    type='url'
                    placeholder='https://photourl.com'
                    className='input input-bordered font-bold w-full'
                    {...register('pictureUrl')}
                    defaultValue={pictureUrl}
                    required
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Price
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='$ 0.00'
                    className='input input-bordered font-bold w-full'
                    {...register('price')}
                    required
                    defaultValue={price}
                  />
                </div>

                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Quantity
                    </span>
                  </label>
                  <input
                    type='number'
                    placeholder='1,2,3'
                    className='input input-bordered font-bold w-full'
                    {...register('quantity')}
                    defaultValue={quantity || 1}
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Sub Category
                    </span>
                  </label>
                  <select
                    className='input input-bordered font-bold w-full'
                    {...register('subCategory')}
                    placeholder='Sub category'
                    required
                  >
                    {subCategories.map((subCate, i) => (
                      <>
                        <option value={subCategory} key={'defaultCategory' + 2}>
                          {subCategory}
                        </option>
                        <option key={'subCate' + i} value={subCate}>
                          {subCate}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Rating
                    </span>
                  </label>
                  <input
                    type='number'
                    placeholder='Toy rating'
                    className='input input-bordered font-bold w-full'
                    {...register('rating')}
                    defaultValue={rating}
                    max={5}
                    step={0.01}
                    required
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Seller Name
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='input input-bordered font-bold w-full bg-gray-200 focus:outline-0'
                    {...register('sellerName')}
                    value={user?.displayName}
                  />
                </div>
                <div className='w-full mx-auto'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Email
                    </span>
                  </label>
                  <input
                    type='Email'
                    placeholder='Type here'
                    className='input input-bordered font-bold w-full bg-gray-200 focus:outline-0'
                    {...register('email')}
                    value={email}
                  />
                </div>
              </div>

              <div>
                <div className='max-w-3xl mx-auto'>
                  <label className='label'>
                    <span className='label-text roboto-font font-bold'>
                      Details
                    </span>
                  </label>
                  <input
                    type='text'
                    placeholder='Toy Details'
                    className='input input-bordered font-bold w-full'
                    {...register('details')}
                    defaultValue={details}
                    required
                  />
                </div>

                <div className='max-w-3xl mx-auto'>
                  <input
                    type='submit'
                    className='btn w-full bg-red-600 border-0 hover:bg-red-400 my-6'
                    value='Update'
                  />
                </div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyToysModal;
