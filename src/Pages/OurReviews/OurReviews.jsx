import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const OurReviews = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch('https://i-avengers-toy-server.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <section>
      <h2 className='text-center md:text-5xl text-3xl py-5 capitalize'>
        Our Reviews
      </h2>
      <section className='allContainer'>
        <AutoplaySlider
          play={true}
          bullets={false}
          cancelOnInteraction={false}
          interval={4000}
          organicArrows={false}
        >
          {productData.map((product, i) => (
            <div
              key={i}
              className='md:w-3/4 text-center border-0'
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: 'transparent',
              }}
            >
              <p
                style={{
                  width: '180px',
                  height: `180px`,
                  backgroundImage: `url(${product.pictureUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                className='mx-auto rounded-full'
              ></p>
              <h5 className='pt-2 font-bold'>{product.name}</h5>

              <p>{product.details}</p>

              <p style={{ color: '#FFD700' }}>
                <Rating
                  placeholderRating={product.rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                  className='Icon text-3xl'
                  readonly
                />
              </p>
            </div>
          ))}
        </AutoplaySlider>
      </section>
    </section>
  );
};

export default OurReviews;
