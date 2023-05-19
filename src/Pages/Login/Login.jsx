import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const location = useLocation();
  const redirect = useNavigate();
  const from = location?.state || '/';
  console.log(location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res.user);
        redirect(from);
      })
      .catch((err) => err.message);
  };

  return (
    <>
      {user ? (
        <Navigate to={from}></Navigate>
      ) : (
        <section className='my-20'>
          <div className='allContainer flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-1/2'>
              <form action='' onSubmit={handleLogin} className='w-2/3 mx-auto'>
                <div className='shadow-2xl bg-base-100 '>
                  <div className='p-3 mx-auto'>
                    <div className='form-control'>
                      <label className='label'>
                        <span className='label-text'>Email</span>
                      </label>
                      <input
                        type='text'
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
                      <label className='label'>
                        <p>
                          <small>New to IAT?</small>
                          <Link
                            to='/register'
                            className='label-text-alt link link-hover text-blue-600 roboto-font font-bold'
                          >
                            Register
                          </Link>
                        </p>
                        <a href='#' className='label-text-alt link link-hover'>
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className='form-control mt-6'>
                      <button className='btn btn-primary'>Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2'>
              <h2 className='text-3xl'>Login</h2>
              <p>Join Our Member</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
