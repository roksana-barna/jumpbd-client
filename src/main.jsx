import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './Main/Main.jsx'
import Home from './Routes/Home/Home.jsx'
import Login from './Pages/Login.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Dashboard from './Layout/Dashboard/Dashboard.jsx'
import MyCart from './Layout/Dashboard/MyCart/MyCart.jsx'
import Settings from './Layout/Dashboard/Settings/Settings.jsx'
import AddProduct from './Components/AddProduct/AddProduct.jsx'
import AllCollection from './Pages/AllCollection/AllCollection.jsx'
import WomensFashion from './Pages/AllCollection/WomensFashion/WomensFashion.jsx'
import Register2 from './Pages/Register2/Register2.jsx'
import Register3 from './Pages/Register2/Register3.jsx'
import Register4 from './Pages/Register2/Register4.jsx'
import Register from './Pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/allcollection',
        element:<AllCollection></AllCollection>
      },
      {
        path: '/womens-fashion',
        element:<WomensFashion></WomensFashion>
      },
     
      {
        path: '/register2',
        element:<Register2></Register2>
      },
      {
        path: '/register3',
        element:<Register3></Register3>

      },
      {
        path: '/register4',
        element:<Register4></Register4>
        
      },

    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
      path:'mycart',
      element:<MyCart></MyCart>
      },
      {
        path:'addproducts',
        element:<AddProduct></AddProduct>
        },

     
    ]
   },
   {
    path:'/dashboard/settings',
    element:<Settings></Settings>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <div className='max-w-6xl mx-auto'>
        <RouterProvider router={router} />

      </div>
    </AuthProvider>

  </React.StrictMode>,
)
