import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ReviewUs = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <section className='md:w-1/2'>
      <form>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='focus:outline-0 focus:border-transparent border-red-700 rounded w-full md:w-1/2'
            value={user?.displayName}
          />
          <input
            type='email'
            placeholder='Email'
            className='focus:outline-0 focus:border-transparent border-red-700 rounded w-full md:w-1/2'
            value={user?.email}
          />
        </div>
        <textarea
          type='textarea'
          placeholder='Your Openions'
          className='focus:outline-0 focus:border-transparent border-red-700 w-full rounded text-xs font-bold resize-none'
        />
        <button className='btn bg-red-600 hover:bg-red-700 border-0 w-full'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ReviewUs;
