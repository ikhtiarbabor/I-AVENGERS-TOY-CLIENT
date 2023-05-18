import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const AddToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    fetch('http://localhost:5000/allToys', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You Successfully added a new toy',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
    <section className='allContainer'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid md:grid-cols-2 max-w-3xl gap-y-2 gap-x-5 mx-auto'>
          <div className='w-full'>
            <label className='label'>
              <span className='label-text roboto-font font-bold'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered font-bold w-full'
              {...register('name')}
              required
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
              placeholder='photo url'
              className='input input-bordered font-bold w-full'
              {...register('pictureUrl')}
              required
            />
          </div>
          <div className='w-full'>
            <label className='label'>
              <span className='label-text roboto-font font-bold'>Price</span>
            </label>
            <input
              type='text'
              placeholder='$ 0.00'
              className='input input-bordered font-bold w-full'
              {...register('price')}
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
              {subCategory.map((subCategory, i) => (
                <option key={'subCate' + i} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
          </div>
          <div className='w-full'>
            <label className='label'>
              <span className='label-text roboto-font font-bold'>Rating</span>
            </label>
            <input
              type='text'
              placeholder='Toy rating'
              className='input input-bordered font-bold w-full'
              {...register('rating')}
              required
            />
          </div>
        </div>
        <div>
          <div className='max-w-3xl mx-auto'>
            <label className='label'>
              <span className='label-text roboto-font font-bold'>Details</span>
            </label>
            <input
              type='text'
              placeholder='Toy Details'
              className='input input-bordered font-bold w-full'
              {...register('details')}
              required
            />
          </div>
          <div className='max-w-3xl mx-auto'>
            <label className='label'>
              <span className='label-text roboto-font font-bold'>Email</span>
            </label>
            <input
              type='Email'
              placeholder='Type here'
              className='input input-bordered font-bold w-full bg-gray-200 focus:outline-0'
              {...register('email')}
              value={user?.email}
            />
          </div>
          <div className='max-w-3xl mx-auto'>
            <input
              type='submit'
              className='btn w-full bg-red-600 border-0 hover:bg-red-400 my-6'
            />
          </div>
        </div>

        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </section>
  );
};

export default AddToys;
