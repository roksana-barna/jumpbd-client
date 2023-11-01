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
import ManageCustomer from './Layout/Dashboard/AdminDashboard/ManageCustomer.jsx'



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
        element: <AllCollection></AllCollection>
      },
      {
        path: '/womens-fashion',
        element: <WomensFashion></WomensFashion>
      },

      {
        path: '/register2',
        element: <Register2></Register2>
      },
      {
        path: '/register3',
        element: <Register3></Register3>

      },
      {
        path: '/register4',
        element: <Register4></Register4>

      },
      {
        path: '/profile',
        element: <Profile></Profile>

      },

    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: 'mycart',
        element: <MyCart></MyCart>,
      },


      {
        path: 'addproducts',
        element: <AddProduct></AddProduct>,
      },
      {
        path: 'managecustomer',
        element: <ManageCustomer></ManageCustomer>,
      },
      {
        path: 'subscriptions',
        element: <Subscriptions></Subscriptions>
      },
      {
        path: 'client',
        element: <ClientDashboard></ClientDashboard>
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
      {
        path: 'wishlist',
        element:<WishList></WishList>
      },
      {
        path: 'orders/:orderId',
        element:<OrderDetails></OrderDetails>
      },
      {
        path: 'ratings',
        element:<Ratings></Ratings>
      },
      {
        path: 'accountsettings',
        element:<AccountSettings></AccountSettings>
      },
      {
        path: 'contactsupport',
        element:<ContactSupport></ContactSupport>
      },


    ]
  },
  {
    path: '/dashboard/settings',
    element: <Settings></Settings>
  }

]);
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Subscriptions from './Layout/Dashboard/AdminDashboard/Subcriptions/Subscriptions.jsx'
import Profile from './Components/Profile/Profile.jsx'
import ClientDashboard from './Layout/Dashboard/ClientDashboard/ClientDashboard.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Orders from './Layout/Dashboard/ClientDashboard/Orders/Orders.jsx'
import WishList from './Layout/Dashboard/ClientDashboard/WishList.jsx'
import OrderDetails from './Layout/Dashboard/ClientDashboard/OderDetails/OrderDetails.jsx'
import Ratings from './Layout/Dashboard/ClientDashboard/Ratings/Ratings.jsx'
import AccountSettings from './Layout/Dashboard/ClientDashboard/Settings/AccountSettings.jsx'
import ContactSupport from './Layout/Dashboard/ClientDashboard/ContactSupport/ContactSupport.jsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-6xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
