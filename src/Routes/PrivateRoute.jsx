import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    console.log(loading);
    return <p>loading</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>;
};

export default PrivateRoute;
