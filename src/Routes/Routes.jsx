import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AllToys from '../Pages/AllToys/AllToys';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AboutUs from '../Pages/AboutUs/AboutUs';
import AddToys from '../Pages/AddToys/AddToys';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/addToys',
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: '/myToys',
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
