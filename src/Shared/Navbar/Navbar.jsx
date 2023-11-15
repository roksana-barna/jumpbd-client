import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/seed plant logo,drop plant logo,growing sprout logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  const navItems = <>
    <div className="dropdown hidden sm:block dropdown-hover">
      <label tabIndex={0} className=" bg-cyan-600 text-white px-4 font-serif  btn">Categories</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  sm:bg-white rounded-box w-52">
        {/* <li><Link to='/mens-fashion' className='text-black text-base'>Men's Fashion</Link></li>
        <li><Link to='/electronics-motor' className='text-black text-base'>Electronics/Motor</Link></li>
        <li><Link to='/accessories-shoes' className='text-black text-base'>Accessories/Shoes</Link></li>
        <li><Link to='/beauty-hair' className='text-black text-base'>Beauty/Hair</Link></li>
        <li><Link to='/baby-kids' className='text-black text-base'>Baby/Kids</Link></li>
        <li><Link to='/food' className='text-black text-base'>Food</Link></li>
        <li><Link to='/household-supplies' className='text-black text-base'>Household Supplies</Link></li>
        <li><Link to='/home-kitchen' className='text-black text-base'>Home/Kitchen</Link></li>
        <li><Link to='/sports-outdoor' className='text-black text-base'>Sports/Outdoor</Link></li>
        <li><Link to='/health-diet' className='text-black text-base'>Health/Diet</Link></li>
        <li><Link to='/hobbies-kpop' className='text-black text-base'>Hobbies/KPOP</Link></li>
        <li><Link to='/computer-digital' className='text-black text-base'>Computer/Digital</Link></li>
        <li><Link to='/smartphone-tablets' className='text-black text-base'>Smartphone & Tablets</Link></li> */}

        <li><Link to='/product-category/watches' className='text-black text-base'>Smart Watches</Link></li>
        <li><Link to='/product-category/sunglasses' className='text-black text-base'>Sunglasses</Link></li>
        <li><Link to='/product-category/bags-and-luggage' className='text-black text-base'>Bags And Luggage</Link></li>
        <li><Link to='/product-category/bluetooth-speaker' className='text-black text-base'>Bluetooth Speaker</Link></li>
        <li><Link to='/product-category/tws' className='text-black text-base'>TWS</Link></li>
        <li><Link to='/product-category/headphones' className='text-black text-base'>Headphones</Link></li>
        <li><Link to='/product-category/tripod' className='text-black text-base'>Tripod</Link></li>
        <li><Link to="/product-category/cable-fan" className='text-black text-base'>Cable Fan</Link></li>
        <li><Link to="/product-category/cable" className='text-black text-base'>Cable</Link></li>
        <li><Link to="/product-category/power-bank" className='text-black text-base'>Power Bank</Link></li>
        <li><Link to="/product-category/neckband" className='text-black text-base'>Neckband</Link></li>
        <li><Link to="/product-category/tripod" className='text-black text-base'>Tripod</Link></li>
        <li><Link to="/product-category/pen-drive" className='text-black text-base'>Pen Drive</Link></li>
        <li><Link to="/product-category/torch-light" className='text-black text-base'>Torch Light</Link></li>
        <li><Link to="/product-category/power-strip" className='text-black text-base'>Power Strip</Link></li>
        <li><Link to="/product-category/wifi-router" className='text-black text-base'>WiFi Router</Link></li>
        <li><Link to="/product-category/gaming-headphone" className='text-black text-base'>Gaming Headphone</Link></li>
        <li><Link to="/product-category/usb-hub" className='text-black text-base'>USB HUB</Link></li>
        <li><Link to="/product-category/mobile-charger" className='text-black text-base'>Mobile Charger</Link></li>
        <li><Link to="/product-category/ip-camera" className='text-black text-base'>IP Camera</Link></li>
        <li><Link to="/product-category/speaker" className='text-black text-base'>Speaker</Link></li>


      </ul>
    </div>
    <li><Link to="/" className="text-base text-black font-normal font-serif">Home</Link></li>



    <li className="dropdown hidden sm:block dropdown-hover"><Link to="/allcollection" className="text-base font-serif text-black font-normal">All Collections</Link>
      <ul tabIndex={0} className="dropdown-content z-[1] menu grid grid-cols-3 p-2 shadow bg-base-100 rounded-box md:w-[800px]">

        <div>
          <li><Link className='font-bold text-base font-serif'>Fashions</Link></li>
          <li><Link to='/womens-fashion' className='text-black text-base hover:bg-cyan-600'>Women's Fashion</Link></li>
          <li><Link to='/mens-fashion' className='text-black text-base'>Men's Fashion</Link></li>
          <li><Link to='/baby-kids' className='text-black text-base'>Baby/Kids</Link></li>
          <li><Link to='/accessories-shoes' className='text-black text-base'>Accessories/Shoes</Link></li>
          <li><Link to='/sports-outdoor' className='text-black text-base'>Sports/Outdoor</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'> Electronics</Link></li>
          <li><Link to='/computer-digital' className='text-black text-base'>Computer/Digital</Link></li>
          <li><Link to='/electronics-motor' className='text-black text-base'>Electronics/Motor</Link></li>
          <li><Link to='/smartphone-tablets' className='text-black text-base'>Smartphone & Tablets</Link></li>
          <li><Link to='/computer-networking' className='text-black text-base'>Computer Networking</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base font-serif'> Home/Gardens</Link></li>
          <li><Link to='/food' className='text-black text-base'>Food</Link></li>
          <li><Link to='/household-supplies' className='text-black text-base'>Household Supplies</Link></li>
          <li><Link to='/home-kitchen' className='text-black text-base'>Home/Kitchen</Link></li>
          <li><Link to='/health-diet' className='text-black text-base'>Health/Diet</Link></li>
          <li><Link to='/hobbies-kpop' className='text-black text-base'>Hobbies/KPOP</Link></li>
        </div>

      </ul>



    </li>


    <li><Link to="/shop-layout" className="text-base font-serif text-black font-normal">Shop Layout</Link></li>
    <li><Link to="/pages" className="text-base font-serif text-black font-normal">Pages</Link></li>
    <li><Link to="/blog" className="text-base font-serif text-black font-normal">Blog</Link></li>
    <li><Link to="/contact" className="text-base font-serif text-black font-normal">Contact Us</Link></li>

    <Link to='/dashboard/mycart'>
      <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
        {/* <div className="badge badge-secondary">+{cart?.length ||0}</div> */}

        <div className="badge bg-cyan-600 text-white">+{cart?.length || 0}</div>

      </button>
    </Link>


    {
      user ? <>
        <Link to='/profile'> <img className='w-10 h-10 ml-2 mr-2 rounded-2xl' src={user.photoURL} alt="" /></Link>
        <button onClick={handleLogOut} className=" text-white px-3 font-bold mr-2  rounded-xl font-serif bg-cyan-600">Logout</button>
      </> : <>
        <li><Link to="/login" className=" ml-5 text-white px-5 bg-cyan-600 font-serif mr-3">Login</Link></li>
      </>
    }
    <h1 className=' font-semibold'>Need Help? Call Us Now <br /><span className='text-cyan-600 font-serif text-xl'>(+84) 123 456 789</span></h1>



  </>
  return (
    <>

      <div className="navbar w-50">
        <div className="navbar-start">


          <div className=" dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <img className='w-24 h-24 ' src={logo} alt="" />
          <a href='/' className=" normal-case md:text-3xl sm:text-base text-cyan-600 font-serif">Jump BD</a>
        </div>
        {/* <form className='text-centerp-5 '>
          <input type='text' placeholder='Enter Your Keyword' name='search'

            className=' bg-transparent border-2 rounded-lg p-1 md:w-72  pl-2' />

          <button type='submit' className='bg-cyan-600 p-1  rounded-lg text-white font-serif' >Search</button>
        </form> */}
        <form className='text-center p-5 hidden sm:block'>
          <div className='flex items-center justify-center'>
            <input
              type='text'
              placeholder='Enter Your Keyword'
              name='search'
              className='bg-transparent border-2 rounded-lg p-1 sm:w-72 md:w-96 pl-2'
            />

            <button
              type='submit'
              className='bg-cyan-600 p-1 rounded-lg text-white font-serif mt-2 sm:mt-0 sm:ml-2'
            >
              Search
            </button>
          </div>
        </form>






      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>

          </div>
          <div className="divider"></div>

        </div>

      </div>



    </>
  );
};

export default Navbar;
