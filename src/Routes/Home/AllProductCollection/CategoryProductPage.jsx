
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useClient from '../../../Hooks/useClient';
import useAdmin from '../../../Hooks/useAdmin';

const CategoryProductPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isClient] = useClient();
  const [isAdmin] = useAdmin();


  useEffect(() => {
    // Fetch products from the backend and filter by the selected category
    fetch('http://localhost:5000/addproducts')
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === category);
        setCategoryProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  return (
    // <div>
    //   <h1>{category} Products</h1>
    // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    //   {categoryProducts.map((product) => (
    //     <div key={product._id} className="bg-white border p-4 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
    //       <Link to={`/addtocart/${product._id}`}>

    //         <div className="bg-white rounded-lg p-4">

    //           <h3 className="text-xl mt-2">{product.name}</h3>
    //           <p className="text-gray-600">Quantity: {product.quantity}</p>
    //           {
    //             isClient &&
    //             <p>Price: {product.price}</p>
    //           }

    //           {
    //             isAdmin &&
    //             <p>Price: {product.price}</p>

    //           }

    //         </div>
    //         </Link>

    //     </div>

    //   ))}
    //   </div>
    // </div>

    <div>
      <div className='text-center'>
        <h1 className='my-4 font-bold font-serif text-cyan-800 text-xl'><span className='text-black font-serif'> Various Types Of<br /> </span>{category}</h1>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">

        {categoryProducts.map((product) => (


          <div key={product._id} className="card w-80 h-80 bg-teal-100 shadow-xl my-5">

            <Link to={`/addtocart/${product._id}`}>
              <figure className="pt-4 bg-white">
              <img src={`http://localhost:5000/productImages/${product.productImages}`} alt={product.name} className="h-40 w-48" />


              </figure>

              <div className="card-body items-center text-center bg-teal-100">
                <h2 className="card-title font-serif">Name: {product.name}</h2>
                <h5>Quantity: {product.quantity}</h5>
                {isClient &&
               <>
                <p>Price: {product.price}</p>
                 <p> Suggest Minimum Price: {product.suggestprice}</p>
                 
               </>
                }
                {isAdmin && 
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

export default CategoryProductPage;

