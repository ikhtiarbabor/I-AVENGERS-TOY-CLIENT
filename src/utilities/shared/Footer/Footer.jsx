import logo from '../../../../public/logo.svg';
import Flogo from '../../../../public/FooterLogo.svg';
import {
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterestSquare,
  FaYoutube,
  FaSnapchatGhost,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=''>
      <div className='bg-[#202020]'>
        <div className='flex items-center allContainer'>
          <div className='md:w-1/2 footBg'>
            <div className='w-1/2 mx-auto font-bold'>
              {' '}
              <img src={logo} alt='' className=' block' />
            </div>
          </div>
          <div className='w-1/2 font-bold text-center text-white'>
            <p className='text-red-600 font-bold text-4xl'>Toys</p>
            <h2 className='roboto-font text-white font-bold text-5xl'>
              BUY, PLAY, ENJOY!
            </h2>
            <p>Buy more toys and get coupon and redeem Coupon !</p>
          </div>
        </div>
      </div>
      <div className='bg-[#151515] py-5'>
        <div className='allContainer grid grid-cols-4 justify-center'>
          <div>
            <img src={Flogo} alt='' />
          </div>
          <div className='text-white flex flex-col justify-between roboto-font font-bold'>
            <p>ABOUT US</p>
            <p>BLOG</p>
            <p>ALL TOYS</p>
            <p>MEMBERSHIP</p>
          </div>
          <div></div>
          <div>
            <p className='text-white robot-font pb-3'>Follow Us</p>
            <div className='grid text-white grid-cols-4 text-1xl gap-7'>
              <p>
                <FaFacebookF></FaFacebookF>
              </p>
              <p>
                <FaTwitterSquare></FaTwitterSquare>
              </p>
              <p>
                {' '}
                <FaInstagram></FaInstagram>
              </p>
              <p>
                <FaLinkedin></FaLinkedin>
              </p>
              <p>
                <FaPinterestSquare></FaPinterestSquare>
              </p>
              <p>
                <FaYoutube></FaYoutube>
              </p>
              <p>
                <FaSnapchatGhost></FaSnapchatGhost>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center text-white py-4 gap-5 bg-[#202020]'>
        <p>&copy; Copyright iAvengers | Built with Ikhtiar by iAvengers.</p>
      </div>
    </footer>
  );
};

export default Footer;
