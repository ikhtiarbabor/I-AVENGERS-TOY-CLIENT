import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(loading);
  if (loading) {
    return (
      <div className='allContainer mx-auto h-[500px] flex justify-center items-center'>
        <div
          className='inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-red-600 motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
