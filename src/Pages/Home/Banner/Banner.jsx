import { Carousel } from 'flowbite-react';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  const slider1 =
    'https://www.practicalmoneyskills.com/assets/images/non-card/marvels_avengers_banner.jpg';
  const mainBanner =
    'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Toys/Avengers/MainBanner_1242x350._CB1198675309_.png';
  const slider2 =
    'https://cdn.vox-cdn.com/thumbor/ihv_rj6tSGCuSnCeYmOUzatOrd8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22536017/Avengers_Vol_8_1_Virgin_Variant.jpeg';
  const slider4 =
    'https://i0.wp.com/www.futurerulerofmidgard.com/wp-content/uploads/2019/04/Avengers-endgame-banner-200.jpg';
  const slider5 =
    'https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/1026748-review-lego-marvel-avengers.jpg?itok=JrptMYFV';
  return (
    <>
      <div
        className='h-56 sm:h-64 xl:h-80 2xl:h-96'
        style={{
          backgroundImage: `url(${mainBanner})`,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Carousel className='allContainer'>
          <div
            style={{
              backgroundImage: `url(${slider4})`,
              backgroundColor: 'rgba(0,0,0,.6)',
              backgroundBlendMode: 'multiply',
            }}
            className='flex h-full items-center justify-center dark:text-white bg-[url(${slider1 bg-center bg-cover'
          >
            <div className='text-white'>
              <h2 className='md:text-3xl text-1xl font-bold russo-font bottom-1 border-white bannerHeader 0 tracking-wider mx-auto text-red-700 uppercase'>
                I avengers Toy
              </h2>
              <p className='md:text-7xl text-3xl py-3'>BUY, PLAY, ENJOY!</p>
              <HashLink smooth to='/#getStarted'>
                <button className='btn bg-white text-red-700 hover:bg-slate-300 md:text-sm text-xs'>
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${slider5})`,
              backgroundColor: 'rgba(0,0,0,.6)',
              backgroundBlendMode: 'multiply',
            }}
            className='flex h-full items-center justify-center dark:text-white bg-[url(${slider1 bg-center bg-cover'
          >
            <div className='text-white'>
              <h2 className='md:text-3xl text-1xl font-bold russo-font bottom-1 border-white bannerHeader 0 tracking-wider mx-auto text-red-700 uppercase'>
                I avengers Toy
              </h2>
              <p className='md:text-7xl text-3xl py-3'>BUY, PLAY, ENJOY!</p>
              <HashLink smooth to='/#getStarted'>
                <button className='btn bg-white text-red-700 hover:bg-slate-300 md:text-sm text-xs'>
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundColor: 'rgba(0,0,0,.6)',
              backgroundBlendMode: 'multiply',
            }}
            className='flex h-full items-center justify-center dark:text-white bg-[url(${slider1 bg-center bg-cover'
          >
            <div className='text-white'>
              <h2 className='md:text-3xl text-1xl font-bold russo-font bottom-1 border-white bannerHeader 0 tracking-wider mx-auto text-red-700 uppercase'>
                I avengers Toy
              </h2>
              <p className='md:text-7xl text-3xl py-3'>BUY, PLAY, ENJOY!</p>
              <HashLink smooth to='/#getStarted'>
                <button className='btn bg-white text-red-700 hover:bg-slate-300 md:text-sm text-xs'>
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${slider5})`,
              backgroundColor: 'rgba(0,0,0,.6)',
              backgroundBlendMode: 'multiply',
            }}
            className='flex h-full items-center justify-center dark:text-white bg-[url(${slider1 bg-center bg-cover'
          >
            <div className='text-white'>
              <h2 className='md:text-3xl text-1xl font-bold russo-font bottom-1 border-white bannerHeader 0 tracking-wider mx-auto text-red-700 uppercase'>
                I avengers Toy
              </h2>
              <p className='md:text-7xl text-3xl py-3'>BUY, PLAY, ENJOY!</p>
              <HashLink smooth to='/#getStarted'>
                <button className='btn bg-white text-red-700 hover:bg-slate-300 md:text-sm text-xs'>
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundColor: 'rgba(0,0,0,.6)',
              backgroundBlendMode: 'multiply',
            }}
            className='flex h-full items-center justify-center dark:text-white bg-[url(${slider1 bg-center bg-cover'
          >
            <div className='text-white'>
              <h2 className='md:text-3xl text-1xl font-bold russo-font bottom-1 border-white bannerHeader 0 tracking-wider mx-auto text-red-700 uppercase'>
                I avengers Toy
              </h2>
              <p className='md:text-7xl text-3xl py-3'>BUY, PLAY, ENJOY!</p>
              <HashLink smooth to='/#getStarted'>
                <button className='btn bg-white text-red-700 hover:bg-slate-300 md:text-sm text-xs'>
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
