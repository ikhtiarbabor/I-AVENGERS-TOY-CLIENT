import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const handelError = useRouteError('');
  const { error, status } = handelError;
  return (
    <section className='h-[100vh] text-center flex flex-col items-center justify-center'>
      <img
        src='https://i.ibb.co/dPBRMhs/22893-error-animation.gif'
        alt=''
        className='h-[200px] mx-auto'
      />
      <h2 className='text-7xl font-extrabold text-gray-400'>{status}</h2>
      <h2 className='mb-5'>{error?.message}</h2>
      <Link
        to='/'
        className='btn bg-red-500 hover:bg-red-700 border-0 text-white'
        style={{ maxWidth: '210px' }}
      >
        {' '}
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
