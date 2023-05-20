import { createBrowserRouter } from 'react-router-dom';
import AllToys from '../Pages/AllToys/AllToys';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AboutUs from '../Pages/AboutUs/AboutUs';
import AddToys from '../Pages/AddToys/AddToys';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';
import ReviewUs from '../Pages/Home/Reviews/ReviewUs';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('https://i-avengers-toy-server.vercel.app/newArrives')
      },
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
      {
        path: '/test',
        element: <ReviewUs></ReviewUs>,
      },
      {
        path: '/toyDetails/:id',
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://i-avengers-toy-server.vercel.app/allToys/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
