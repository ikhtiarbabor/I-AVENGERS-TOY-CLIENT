import { Link } from 'react-router-dom';

const NoToyAdded = () => {
  return (
    <section className='allContainer'>
      <div className='w-1/2 mx-auto text-center py-9 my-9'>
        <img
          src='https://i.ibb.co/hL9kFp4/Sorry.png'
          alt=''
          className='mx-auto block max-w-[200px]'
        />
        <h1 className='md:text-5xl roboto-font bold text-red-500 py-3'>
          You do not have any toy yet ❌
        </h1>
        <Link
          to='/addToys'
          className='btn bg-red-600 hover:bg-red-700 border-0 mt-3'
        >
          Add Some Toys
        </Link>
      </div>
    </section>
  );
};

export default NoToyAdded;
