import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
