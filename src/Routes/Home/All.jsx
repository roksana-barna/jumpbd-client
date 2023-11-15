import React, { useEffect, useState } from 'react';
import useClient from '../../Hooks/useClient';
import useAdmin from '../../Hooks/useAdmin';
import { Link } from 'react-router-dom';

const All = () => {
  const [products, setProducts] = useState([]);
  const [isClient] = useClient();
  const [isAdmin]=useAdmin();
  

  useEffect(() => {
    // Fetch products from your backend API
    fetch('https://dropzey-server.vercel.app/addproducts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold font-serif text-center mt-8 mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
           <Link to={`/addtocart/${product._id}`}>

            <img
               src={`https://dropzey-server.vercel.app/productImages/${product.productImages}`} alt={product.name} 

              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold font-serif">{product.name}</h2>
              <p className="text-gray-600 font-serif">Quantity: {product.quantity}</p>
              {
              isClient &&
              <>
              <p>Price: {product.price}</p>
               <p> Suggest Minimum Price: {product.suggestprice}</p>
               
             </>
            }

            {
              isAdmin &&
              <>
              <p>Price: {product.price}</p>
               <p> Suggest Minimum Price: {product.suggestprice}</p>
               
             </>
            }
            </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
