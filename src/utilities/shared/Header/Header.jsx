import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Tooltip } from 'flowbite-react';
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <header className='bg-[#202020]'>
      <div className='navbar max-w-7xl mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBars className='text-white'></FaBars>
            </label>
            <div
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#202020] text-white'
            >
              <NavLink to='/' className='mx-2'>
                Home
              </NavLink>

              <NavLink className='mx-2' to='/allToys' tabIndex={0}>
                All Toys
              </NavLink>
              {user && (
                <NavLink to='/myToys' className='mx-2'>
                  My Toys
                </NavLink>
              )}
              {user && (
                <NavLink to='/addToys' className='mx-2'>
                  Add Toys
                </NavLink>
              )}
              <NavLink className='mx-2' to='/blog' tabIndex={0}>
                Blog
              </NavLink>

              <NavLink className='mx-2' to='/aboutUs'>
                About Us
              </NavLink>
            </div>
          </div>
          <Link className='btn btn-ghost normal-case text-xl w-[80px] mb-2'>
            <img src={logo} alt='' className='w-full' />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex text-white'>
          <div className='menu menu-horizontal px-1'>
            <NavLink to='/' className='mx-2'>
              Home
            </NavLink>
            <NavLink className='mx-2' to='/allToys' tabIndex={0}>
              All Toys
            </NavLink>
            {user && (
              <NavLink to='/myToys' className='mx-2'>
                My Toys
              </NavLink>
            )}
            {user && (
              <NavLink to='/addToys' className='mx-2'>
                Add Toys
              </NavLink>
            )}
            <NavLink className='mx-2' to='/blog' tabIndex={0}>
              Blog
            </NavLink>
          </div>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <div className='dropdown dropdown-bottom dropdown-end'>
                <div tabIndex={0} className=' m-1'>
                  <Tooltip content={user.displayName} animation={false}>
                    <div
                      style={{ backgroundImage: `url(${user?.photoURL}` }}
                      className={`rounded-full w-10 h-10 bg-cover bg-center border-2 border-blue-400`}
                    ></div>
                  </Tooltip>
                </div>
                <div
                  tabIndex={0}
                  className='dropdown-content menu shadow text-white roboto-font px-3 rounded-box w-[140px] flex justify-center py-3 border-2 border-red-500 bg-[#202020]'
                >
                  <div className='pl-2 py-3 text-sm dark:text-white border-b-2 border-red-500'>
                    <div className='capitalize'>{user.displayName}</div>
                    <div className='font-medium truncate'>
                      <small className='text-xs'>{user?.email}</small>
                    </div>
                  </div>
                  <div
                    className='py-2 text-sm dark:text-gray-200'
                    aria-labelledby='avatarButton'
                  >
                    <a
                      href='#'
                      className='block pl-2 py-2 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white'
                    >
                      Dashboard
                    </a>

                    <a
                      href='#'
                      className='block pl-2 py-2 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white'
                    >
                      Settings
                    </a>

                    <a
                      href='#'
                      className='block pl-2 py-2 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white'
                    >
                      Earnings
                    </a>
                  </div>
                  <div className='py-1'>
                    <button
                      onClick={handleLogout}
                      className='block pl-2 py-2 text-sm bg-red-500 hover:bg-red-600 dark:hover:bg-red-600 dark:text-gray-200 dark:hover:text-white w-full'
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <NavLink
                className='mx-2 text-white font-semibold roboto-font'
                to='/login'
              >
                Login
              </NavLink>
              <NavLink
                className='mx-2 text-white font-semibold roboto-font'
                to='/register'
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
