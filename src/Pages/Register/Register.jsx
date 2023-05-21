import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const Register = () => {
  const [err, setErr] = useState(' ');
  const { signUp } = useContext(AuthContext);
  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const designation = form.designation.value;
    const confirmPass = form.confirmPass.value;
    const numberValid = /[0-9]/g.test(password);
    const capitalLetter = /[A-Z]/g.test(password);
    const specialChar = /[@#$%^&+!=]/g.test(password);
    let okPassword;
    if (password !== confirmPass) {
      return setErr("Password Doesn't match !");
    } else if (!numberValid) {
      return setErr('You Must Add A number !');
    } else if (!capitalLetter) {
      return setErr('You Must Add A capital letter !');
    } else if (!specialChar) {
      return setErr('You Must Add A special character!');
    } else if (password < 6) {
      return setErr('Need At Least 6 Character !');
    } else {
      okPassword = password;
      setErr('');
    }
    const user = {
      email,
      photo,
      name,
      designation,
    };
    console.log(user);
    signUp(email, okPassword)
      .then((result) => {
        result.photoURL = photo;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        const newUser = {
          email: result.user.email,
          name: result.user.displayName,
          designation,
        };
        fetch('https://i-avengers-toy-server.vercel.app/allUsers', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => err.message);
  };

  return (
    <>
      <CategoryBanner>Register</CategoryBanner>
      <section className='my-20'>
        <div className='allContainer flex flex-col-reverse md:flex-row'>
          <div className='w-full md:w-1/2 mx-auto'>
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
                      placeholder='https://photourl.com'
                      className='input input-bordered'
                      name='photo'
                      required
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>As A</span>
                    </label>
                    <select className='input input-bordered' name='designation'>
                      <option value='Customer'>Customer</option>
                      <option value='seller'>seller</option>
                    </select>
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
                      type='passWord'
                      placeholder='Password'
                      className='input input-bordered'
                      name='password'
                      required
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Confirm PassWord</span>
                    </label>
                    <input
                      type='password'
                      placeholder='password'
                      className='input input-bordered'
                      name='confirmPass'
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
                  <div className='form-control mt-3'>
                    <p className='text-xs pt-0 pb-3 font-bold text-red-700'>
                      {err}
                    </p>
                    <button className='btn bg-red-600 hover:bg-red-600 border-0'>
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
