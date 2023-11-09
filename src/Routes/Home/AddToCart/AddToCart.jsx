// import React from 'react';

import { Carousel } from "react-responsive-carousel";
import useAdmin from "../../../Hooks/useAdmin";
import useClient from "../../../Hooks/useClient";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddToCart = () => {
  const { user } = useAuth();


  const addtocart = useLoaderData();
  const { keyfeatures, price, description, category, name, productImages, quantity, rating } = addtocart;
  console.log(addtocart)
  console.log(productImages)
  const [isClient] = useClient();
  const [isAdmin] = useAdmin();

  const handleSelect = (addtocart) => {
    console.log('addtocart')
    console.log(user)

    const selectedProduct = {
      userName: user?.displayName,
      email: user?.email,
      name: addtocart?.name,
      price: addtocart?.price,
      productImages: addtocart?.productImages,
      instructor: addtocart?.instructor,
      quantity: addtocart?.quantity


    }
    console.log(selectedProduct)

    fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(selectedProduct)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: ' added to Cart successfully',
            showConfirmButton: false,
            timer: 1500
          })

        }
      })
  }






  // const [quantity, setQuantity] = useState(1);
  // const [categoryQuantity, setCategoryQuantity] = useState(100); // Replace with the actual category quantity

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //     setCategoryQuantity(categoryQuantity + 1); // Increment category quantity
  //   }
  // };

  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  //   setCategoryQuantity(categoryQuantity - 1); // Decrement category quantity
  // };
  // const img1 = 'https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9021-hd/m9021-hd-01-500x500.jpg';
  // const img2 = 'https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9021-hd/m9021-hd-01-500x500.jpg';
  // const img3 = 'https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9021-hd/m9021-hd-01-500x500.jpg';
  // const img4 = 'https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9021-hd/m9021-hd-01-500x500.jpg';
  // const img5 = 'https://www.startech.com.bd/image/cache/catalog/smart-watch/havit/m9021-hd/m9021-hd-01-500x500.jpg';

  // Sample product data
  console.log('addtocart')



  return (
    <div>
      <div className="flex">
        <div className="md:w-96">
          <Carousel className='' >
            <div className=''>
              <img className='' src={`http://localhost:5000/productImages/${addtocart.productImages}`} alt={addtocart.name} />
            </div>

            {/* <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
            <div>
              <img src={img4} />
            </div>
            <div>
              <img src={img5} />
            </div> */}

          </Carousel>

        </div>
        <div className="">

          <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold font-serif">{name}</h1>

              <div className="mt-4">
                <ul>
                  <li> key features: {keyfeatures}</li>

                </ul>
              </div>
              <div className="mt-4">
                {/* <p className="text-sm text-gray-700"> Description:{description}</p> */}
              </div>
              <p>Category Quantity: {quantity}</p>

              {/* <div className="mt-4">

                <label className="text-sm font-semibold">Quantity:{quantity}</label>
        <div className="flex items-center mt-2">
          <button
            className="px-3 py-2 border rounded text-gray-600 hover:text-gray-900 hover:border-gray-900"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <input
            type="text"
            className="w-10 text-center border mx-2"
            value={quantity}
          />
          <button
            className="px-3 py-2 border rounded text-gray-600 hover:text-gray-900 hover:border-gray-900"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

              </div> */}
             
              <div className="text-lg text-gray-600 mt-2">
                {isAdmin ? (
                  <>
                    <span className="text-red-500">Price: {price}</span>
                    <button onClick={() => handleSelect(addtocart)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 p-2 w-full">
                      Add to Cart
                    </button>

                  </>

                ) : isClient ? (
                  <>
                    <span className="text-red-500">Price: {price}</span>
                    <button onClick={() => handleSelect(addtocart)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 p-2 w-full">
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <p className="text-red-500">
                    Please join as a Dropshipper to know the price!!!{' '}
                    <Link className="text-blue text-blue-600 font-serif" to="/register2">
                      Buy Subscription
                    </Link>
                  </p>
                )}
              </div>

              {/*  */}

            </div>
          </div>
        </div>

      </div>
      <div className="text-center">
        <button className="btn btn-outline shadow-xl border-0  bg-gray-50 border-b-4 mb-5">Details</button>
        <p className="my-6">{description}</p>
      </div>
    </div>
  );
};

export default AddToCart;

