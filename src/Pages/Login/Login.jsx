import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const location = useLocation();
  const redirect = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res.user);
        redirect(from,{replace:true});
      })
      .catch((err) => err.message);
  };

  return (
    <>
      {user ? (
        <Navigate to={from}></Navigate>
      ) : (
        <>
          <CategoryBanner>Login</CategoryBanner>
          <section className='my-20'>
            <div className='allContainer flex flex-col-reverse md:flex-row'>
              <div className='w-full md:w-1/2 mx-auto'>
                <form
                  action=''
                  onSubmit={handleLogin}
                  className='w-2/3 mx-auto'
                >
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
                              className='label-text-alt link link-hover text-red-600 roboto-font font-bold'
                            >
                              Register
                            </Link>
                          </p>
                          <a
                            href='#'
                            className='label-text-alt link link-hover'
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className='form-control mt-6'>
                        <button className='btn bg-red-600 hover:bg-red-700 border-0'>
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
