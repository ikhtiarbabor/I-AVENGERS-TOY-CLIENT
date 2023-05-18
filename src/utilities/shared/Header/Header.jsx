import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.svg';
import { FaBars } from 'react-icons/fa';
const Header = () => {
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
            <NavLink className='mx-2' to='/blog' tabIndex={0}>
              Blog
            </NavLink>
            <NavLink className='mx-2' to='/allToys' tabIndex={0}>
              All Toys
            </NavLink>

            <NavLink to='/aboutUs' className='mx-2'>
              About Us
            </NavLink>
          </div>
        </div>
        <div className='navbar-end'>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
