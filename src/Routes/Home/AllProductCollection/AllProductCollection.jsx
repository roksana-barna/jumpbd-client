// import React, { useState, useEffect } from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  './img.css';

const AllProductCollection = () => {
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState({});


    useEffect(() => {
        // Fetch products from the backend when the component mounts
        fetch('http://localhost:5000/addproducts')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);

                // Group products by category
                const groupedProducts = data.reduce((acc, product) => {
                    if (product.category in acc) {
                        acc[product.category].push(product);
                    } else {
                        acc[product.category] = [product];
                    }
                    return acc;
                }, {});
                setCategoryProducts(groupedProducts);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // The empty dependency array ensures this effect runs only once on mount
    console.log(products)
    return (
        <div>

            <div className="text-center">
                <h1 className="my-10 font-bold text-cyan-500 text-2xl italic">Exclusive Collection</h1>
            </div>
            {/* Category-wise Products */}
           <div >
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" >
                <Link to="/all" className="  border  p-4"style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530533718754-001d2668365a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8fDA%3D)' }} >
                    <p className="font-bold text-white mt-16 font-serif ">All Products: ({products.length})</p>
                </Link>
                {Object.entries(categoryProducts).map(([category, products]) => (
                    <div key={category} className=" border pt-14 p-2"  style={{ backgroundImage: 'url( https://imgv3.fotor.com/images/share/Free-blue-gradient-pattern-background-from-Fotor.jpg)' }}>
                        {/* <h2 className="bottom-0">{category}-({products.length})</h2> */}
                        <Link className="font-bold  text-black font-serif text-base" to={`/product-category/${category}`}>{category} - ({products.length})</Link>
                    </div>
                ))}
            </div>
           
           </div>

        </div>
    );
};

export default AllProductCollection;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const AllProductCollection = () => {
//   const [products, setProducts] = useState([]);
//   const [categoryProducts, setCategoryProducts] = useState({});
//   const categories = [
//     'Smartwatches',
//     'Bluetooth Speaker',
//     'TWS',
//     'Headphone',
//     'Microphone',
//     'Best Sellers',
//     'Rechargeable Fan',
//     'Cable',
//     'Power Bank',
//     'Neckband',
//     'Tripod',
//     'Pen Drive',
//     'Torch Light',
//     'Power Strip',
//     'WiFi Router',
//     'Gaming Headphone',
//     'USB HUB',
//     'Mobile Charger',
//     'IP Camera',
//     'Speaker',
//     'Smart TV Box',
//     'Selfie Stick',
//     'Electric Trimmer',
//   ];

//   useEffect(() => {
//     // Fetch products from the backend when the component mounts
//     fetch('http://localhost:5000/addproducts')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);

//         // Group products by category
//         const groupedProducts = data.reduce((acc, product) => {
//           if (product.category in acc) {
//             acc[product.category].push(product);
//           } else {
//             acc[product.category] = [product];
//           }
//           return acc;
//         }, {});
//         setCategoryProducts(groupedProducts);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="text-center">
//         <h1>Exclusive Collection</h1>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         <p className="border p-4">All Products: ({products.length})</p>
//         {categories.map((category) => (
//           <Link to={`/product-category/${category}`} key={category} className="border p-8">
//             <h2 className="bottom-0">
//               {category}-({categoryProducts[category] ? categoryProducts[category].length : 0})
//             </h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProductCollection;

