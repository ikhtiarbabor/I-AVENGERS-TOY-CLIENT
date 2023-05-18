import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

const Register = () => {
  const { signUp} = useContext(AuthContext);
  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    signUp(email, password)
      .then((res) => {
        res.photoURL = photo;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });

      })
      .catch((err) => err.message);
  };

  return (
    <section className='my-20'>
      <div className='allContainer flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2'>
          <form action='' onSubmit={handleLogin} className='w-2/3 mx-auto'>
            <div className='shadow-2xl bg-base-100 '>
              <div className='p-3 mx-auto'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Name'
                    className='input input-bordered'
                    name='name'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Photo URL</span>
                  </label>
                  <input
                    type='url'
                    placeholder='Photo URL'
                    className='input input-bordered'
                    name='photo'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    name='email'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    name='password'
                    required
                  />
                  <label className=''>
                    <small>Already have an account?</small>
                    <Link
                      to='/login'
                      className='label-text-alt link link-hover text-blue-600 roboto-font font-bold'
                    >
                      login
                    </Link>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center w-1/2'>
          <h2 className='text-3xl'>Register</h2>
          <p>Join Our Member</p>
        </div>
      </div>
    </section>
  );
};

export default Register;
