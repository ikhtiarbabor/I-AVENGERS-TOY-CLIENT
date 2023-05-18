import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
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
            <NavLink className='mx-2' to='/blog' tabIndex={0}>
              Blog
            </NavLink>

            <NavLink to='/aboutUs' className='mx-2'>
              About Us
            </NavLink>
          </div>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <div className='dropdown dropdown-bottom dropdown-end'>
                <div tabIndex={0} className=' m-1'>
                  <div
                    style={{ backgroundImage: `url(${user?.photoURL}` }}
                    className={`rounded-full w-10 h-10 bg-cover bg-center border-2 border-blue-400`}
                  ></div>
                </div>
                <div
                  tabIndex={0}
                  className='dropdown-content menu shadow text-white roboto-font px-3 rounded-box w-[140px] flex justify-center py-3 bg-[#202020]'
                >
                  <Link>Profile</Link>
                  <Link>Dashboard</Link>
                  <button onClick={handleLogout}>Log out</button>
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
