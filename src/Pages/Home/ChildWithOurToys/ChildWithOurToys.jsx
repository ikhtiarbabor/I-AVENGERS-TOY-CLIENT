const ChildWithOurToys = () => {
  return (
    <section className='py-7'>
      <h2 className='text-center text-5xl font-bold py-7'>
        Child With Our Toys
      </h2>
      <div className='allContainer md:flex '>
        <div className='md:w-1/2  md:relative flex items-center'>
          <div className='md:-mr-80 bg-white rounded-e py-7 px-8 md:pl-72 md:absolute z-30'>
            <h3 className='font-bold text-3xl md:text-4xl '>
              Toys are all your baby need better toys for better growth
            </h3>
            <p className='py-4 leading-loose'>
              A toy is an object which is made for the purpose of playing for
              kids. Toys are the major source of enjoyment for young children.
              Toys can be made up of different materials such as plastic, wood,
              paper, clay, etc.
            </p>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img
            className='block rounded-s '
            src='https://cdn.shopify.com/s/files/1/0064/6679/7632/articles/Genuine-Marvel-Super-Heroes-Avengers-Endgame-Iron-Man-Hulk-Captain-America-Spider-Man-Action-Figure-Model_480x540_crop_center.png?v=1618590731'
            alt=''
          />
        </div>
      </div>
      <div className='allContainer md:flex md:flex-row-reverse'>
        <div className='md:w-1/2  md:relative flex items-center'>
          <div className='md:-ml-80 bg-white rounded-e py-7 px-8 md:pr-72 md:absolute z-30'>
            <h3 className='font-bold text-3xl md:text-4xl leading-loose'>
              Creative modern wooden toys for kids development
            </h3>
            <p className='py-4 leading-loose'>
              A toy is an object which is made for the purpose of playing for
              kids. Toys are the major source of enjoyment for young children.
              Toys can be made up of different materials such as plastic, wood,
              paper, clay, etc.
            </p>
          </div>
        </div>
        <div className='md:w-1/2 md:text-left'>
          <img
            className='block rounded-s mx-auto h-[540px]'
            src='https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/461012490843-1?fmt=jpeg&qlt=90&wid=652&hei=652&defaultImage=no-image-image_uk'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default ChildWithOurToys;
