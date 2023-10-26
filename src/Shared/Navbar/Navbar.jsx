import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/seed plant logo,drop plant logo,growing sprout logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  const navItems = <>
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className=" bg-cyan-600 text-white px-10 btn">Categories</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/womens-fashion' className='text-black text-base'>Women's Fashion</Link></li>
        <li><Link to='/mens-fashion' className='text-black text-base'>Men's Fashion</Link></li>
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
        <li><Link to='/smartphone-tablets' className='text-black text-base'>Smartphone & Tablets</Link></li>
      </ul>
    </div>
    <li><Link to="/" className="text-base text-black font-normal">Home</Link></li>



    <li className="dropdown dropdown-hover"><Link to="/allcollection" className="text-base text-black font-normal">All Collections</Link>
      <ul tabIndex={0} className="dropdown-content z-[1] menu grid grid-cols-3 p-2 shadow bg-base-100 rounded-box md:w-[800px]">

        <div>
        <li><Link className='font-bold text-base'>Fashions</Link></li>
          <li><Link to='/womens-fashion' className='text-black text-base hover:bg-cyan-600'>Women's Fashion</Link></li>
          <li><Link to='/mens-fashion' className='text-black text-base'>Men's Fashion</Link></li>
          <li><Link to='/baby-kids' className='text-black text-base'>Baby/Kids</Link></li>
          <li><Link to='/accessories-shoes' className='text-black text-base'>Accessories/Shoes</Link></li>
          <li><Link to='/sports-outdoor' className='text-black text-base'>Sports/Outdoor</Link></li>
        </div>
        <div>
          <li><Link className='font-bold text-base'> Electronics</Link></li>
          <li><Link to='/computer-digital' className='text-black text-base'>Computer/Digital</Link></li>
          <li><Link to='/electronics-motor' className='text-black text-base'>Electronics/Motor</Link></li>
          <li><Link to='/smartphone-tablets' className='text-black text-base'>Smartphone & Tablets</Link></li>
          <li><Link to='/computer-networking' className='text-black text-base'>Computer Networking</Link></li>
        </div>
        <div>
        <li><Link className='font-bold text-base'> Home/Gardens</Link></li>
          <li><Link to='/food' className='text-black text-base'>Food</Link></li>
          <li><Link to='/household-supplies' className='text-black text-base'>Household Supplies</Link></li>
          <li><Link to='/home-kitchen' className='text-black text-base'>Home/Kitchen</Link></li>
          <li><Link to='/health-diet' className='text-black text-base'>Health/Diet</Link></li>
          <li><Link to='/hobbies-kpop' className='text-black text-base'>Hobbies/KPOP</Link></li>
        </div>

      </ul>



    </li>


    <li><Link to="/shop-layout" className="text-base text-black font-normal">Shop Layout</Link></li>
    <li><Link to="/pages" className="text-base text-black font-normal">Pages</Link></li>
    <li><Link to="/blog" className="text-base text-black font-normal">Blog</Link></li>
    <li><Link to="/contact" className="text-base text-black font-normal">Contact Us</Link></li>

    <Link to='/dashboard/mycart'>
      <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
        {/* <div className="badge badge-secondary">+{cart?.length ||0}</div> */}
        <div className="badge bg-cyan-600 text-white">+</div>

      </button>
    </Link>


    {
      user ? <>
        <img className='w-10 h-10 rounded-2xl' src={user.photoURL} alt="" />
        <button onClick={handleLogOut} className=" text-white px-3 font-bold mr-2  rounded-xl bg-cyan-600">Logout</button>
      </> : <>
        <li><Link to="/login" className=" ml-5 text-white px-5 bg-cyan-600 mr-3">Login</Link></li>
      </>
    }
    <h1 className=' font-semibold'>Need Help? Call Us Now <br /><span className='text-cyan-600 text-xl'>(+84) 123 456 789</span></h1>



  </>
  return (
    <>

      <div className="navbar w-50">
        <div className="navbar-start">


          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <img className='w-24 h-24' src={logo} alt="" />
          <a className=" normal-case text-3xl text-cyan-600">Dropzey</a>
        </div>
        <form className='text-center p-5'>
          <input type='text' placeholder='Enter Your Keyword' name='search'

            className=' bg-transparent border-2 rounded-lg p-1 md:w-72  pl-2' />

          <button type='submit' className='bg-cyan-600 p-1  rounded-lg text-white' >Search</button>
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
