const CategoryBanner = ({ children }) => {
  return (
    <div className='categoryBanner  flex justify-center items-center'>
      <h2 className=' tracking-wider mx-auto text-red-700 uppercase text-center russo-font bottom-1 border-white bannerHeader md:text-6xl font-bold'>
        {children}
      </h2>
    </div>
  );
};

export default CategoryBanner;
