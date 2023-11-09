// import React, { useContext, useEffect, useState } from 'react';
// import MyOrders from '../MyOrders/MyOrders';
// import { AuthContext } from '../../../../AuthProvider/AuthProvider';

// const OrderDetails = () => {
//   const [sortByPrice,setSortPrice]=useState(1)
//     const { user } = useContext(AuthContext);
//     const [myToys, setMyToys] = useState([])
//     useEffect(() => {
//         console.log(sortByPrice)
//         fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${user.email}/${sortByPrice}`)
//             .then(res => res.json())
//             .then(data => {
//                 setMyToys(data)
//             })

//     }, [sortByPrice,user]);

//     const handleDelete = id => {
//         const proceed = confirm("Are you want to delete?");
//         if (proceed) {
//             fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.deletedCount > 0) {
//                         alert('deleted successfully')
//                         const remaining = myToys.filter(mytoy => mytoy._id !== id)
//                         setMyToys(remaining)
//                     }
//                 })

//         }
//     }



//   return (
//     <div className=" mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
//       <div >
//                 <h2 className='text-xl text-teal-600 text-center font-bold my-6'>All My Orders</h2>
//             </div>
//             <div>
//                 <button  className='bg-teal-400 mb-5 px-3 py-2 rounded text-white mr-3' onClick={()=>setSortPrice(1)}>Low Price</button>
//                 <button className='bg-teal-400 px-3 py-2 rounded text-white' onClick={()=>setSortPrice(-1)}>High Price</button>
//             </div>

//      {
//                         myToys.map(mytoy => <MyOrders
//                             key={mytoy._id}
//                             mytoy={mytoy}
//                             handleDelete={handleDelete}
//                         >

//                         </MyOrders>)
//                     }

//       {/* <div className="border-t my-4"></div>

//       <div className="flex justify-between">
//         <p className="text-gray-500">Subtotal</p>
//         <p>$64.00</p>
//       </div>
//       <div className="flex justify-between">
//         <p className="text-gray-500">Shipping</p>
//         <p>$5.00</p>
//       </div>
//       <div className="flex justify-between">
//         <p className="text-gray-500">Taxes</p>
//         <p>$5.52</p>
//       </div>

//       <div className="border-t my-4"></div>

//       <div className="flex justify-between">
//         <p className="text-lg font-semibold">Total</p>
//         <p className="text-lg font-semibold">$75.52</p>
//       </div>

//       <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//         Confirm Order
//       </button> */}
//     </div>
//   );
// };

// export default OrderDetails;
// import React, { useContext, useEffect, useState } from 'react';
// import MyOrders from '../MyOrders/MyOrders';
// import { AuthContext } from '../../../../AuthProvider/AuthProvider';

// const OrderDetails = () => {
//   const [sortByPrice, setSortPrice] = useState(1);
//   const { user } = useContext(AuthContext);
//   const [myToys, setMyToys] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [selectedProducts, setSelectedProducts] = useState({}); // State for selected products and quantities

//   useEffect(() => {
//     fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${user.email}/${sortByPrice}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMyToys(data);
//       });
//   }, [sortByPrice, user]);

//   useEffect(() => {
//     const calculatedTotalPrice = myToys.reduce(
//       (total, mytoy) => total + mytoy.price,
//       0
//     );
//     setTotalPrice(calculatedTotalPrice);
//   }, [myToys]);

//   const handleDelete = (id) => {
//     const proceed = confirm('Are you sure you want to delete?');
//     if (proceed) {
//       fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${id}`, {
//         method: 'DELETE',
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.deletedCount > 0) {
//             alert('Deleted successfully');
//             const remaining = myToys.filter((mytoy) => mytoy._id !== id);
//             setMyToys(remaining);
//             // Remove the product from selected products as well
//             const updatedSelectedProducts = { ...selectedProducts };
//             delete updatedSelectedProducts[id];
//             setSelectedProducts(updatedSelectedProducts);
//           }
//         });
//     }
//   };

//   const handleConfirmOrder = () => {
//     // Prepare the order data with selected products and quantities
//     const orderData = {
//       user: user.email,
//       products: selectedProducts,
//       totalPrice: totalPrice,
//     };

//     // Send the order data to the server
//     fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           alert('Order confirmed successfully');
//           // Update the quantity for each selected product
//           for (const productId in selectedProducts) {
//             const quantity = selectedProducts[productId];
//             // Update the product's quantity on the server
//             updateProductQuantity(productId, quantity);
//           }
//           // Clear the selected products
//           setSelectedProducts({});
//           // Clear the cart or update as needed
//           // Update the total price if necessary
//           setTotalPrice(0);
//         } else {
//           alert('Failed to confirm the order');
//         }
//       });
//   };

//   const updateProductQuantity = (productId, newQuantity) => {
//     // Send a request to update the product's quantity on the server
//     fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/products/${productId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ quantity: newQuantity }),
//     });
//   };

//   const handleProductQuantityChange = (id, quantity) => {
//     // Update the quantity for the selected product
//     const updatedSelectedProducts = { ...selectedProducts, [id]: quantity };
//     setSelectedProducts(updatedSelectedProducts);
//   };

//   return (
//     <div className="mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
//       <div>
//         <h2 className="text-xl text-teal-600 text-center font-bold my-6">
//           All My Orders
//         </h2>
//       </div>
//       <div>
//         <button
//           className="bg-teal-400 mb-5 px-3 py-2 rounded text-white mr-3"
//           onClick={() => setSortPrice(1)}
//         >
//           Low Price
//         </button>
//         <button
//           className="bg-teal-400 px-3 py-2 rounded text-white"
//           onClick={() => setSortPrice(-1)}
//         >
//           High Price
//         </button>
//       </div>

//       {myToys.map((mytoy) => (
//         <MyOrders
//           key={mytoy._id}
//           mytoy={mytoy}
//           handleDelete={handleDelete}
//           onQuantityChange={(quantity) =>
//             handleProductQuantityChange(mytoy._id, quantity)
//           }
//         />
//       )
//       )}
      

//       <div className="border-t my-4"></div>
//       <div className="border-t my-4"></div>
//   <div className="flex justify-between">
//     <p className="text-gray-500">Subtotal</p>
//     <p>${typeof totalPrice === 'number' ? totalPrice.toFixed(2) : 'N/A'}</p>
//   </div>
//   <div className="flex justify-between">
//     <p className="text-gray-500">Shipping</p>
//     <p>$5.00</p>
//   </div>
//   <div className="flex justify-between">
//     <p className="text-gray-500">Taxes</p>
//     <p>$5.52</p>
//   </div>
//   <div className="border-t my-4"></div>
//   <div className="flex justify-between">
//     <p className="text-lg font-semibold">Total</p>
//     <p className="text-lg font-semibold">${typeof totalPrice === 'number' ? totalPrice.toFixed(2) : 'N/A'}</p>
//   </div>

//       <button
//         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//         onClick={handleConfirmOrder}
//       >
//         Confirm Order
//       </button>
//     </div>
//   );
// };

// export default OrderDetails;

// OrderDetails.js

import React, { useContext, useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const OrderDetails = () => {
  const [sortByPrice, setSortPrice] = useState(1);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState({}); // State for selected products and quantities

  useEffect(() => {
    fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${user.email}/${sortByPrice}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [sortByPrice, user]);

  useEffect(() => {
    const calculatedTotalPrice = myToys.reduce(
      (total, mytoy) => total + mytoy.price,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [myToys]);

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/cartitem/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = myToys.filter((mytoy) => mytoy._id !== id);
            setMyToys(remaining);
            // Remove the product from selected products as well
            const updatedSelectedProducts = { ...selectedProducts };
            delete updatedSelectedProducts[id];
            setSelectedProducts(updatedSelectedProducts);
          }
        });
    }
  };

  const handleConfirmOrder = () => {
    // Prepare the order data with selected products and quantities
    const orderData = {
      user: user.email,
      products: selectedProducts,
      totalPrice: totalPrice,
    };

    // Send the order data to the server
    fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          alert('Order confirmed successfully');
          // Update the quantity for each selected product
          for (const productId in selectedProducts) {
            const quantity = selectedProducts[productId];
            // Update the product's quantity on the server
            updateProductQuantity(productId, quantity);
          }
          // Clear the selected products
          setSelectedProducts({});
          // Clear the cart or update as needed
          // Update the total price if necessary
          setTotalPrice(0);
        } else {
          alert(' confirm the order');
        }
      });
  };

  const updateProductQuantity = (productId, newQuantity) => {
    // Send a request to update the product's quantity on the server
    fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    });
  };

  const handleProductQuantityChange = (id, quantity) => {
    // Update the quantity for the selected product
    const updatedSelectedProducts = { ...selectedProducts, [id]: quantity };
    setSelectedProducts(updatedSelectedProducts);
  };

  return (
    <div className="mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
      <div>
        <h2 className="text-xl text-teal-600 text-center font-bold my-6">
          All My Orders
        </h2>
      </div>
      <div>
        <button
          className="bg-teal-400 mb-5 px-3 py-2 rounded text-white mr-3"
          onClick={() => setSortPrice(1)}
        >
          Low Price
        </button>
        <button
          className="bg-teal-400 px-3 py-2 rounded text-white"
          onClick={() => setSortPrice(-1)}
        >
          High Price
        </button>
      </div>

      {myToys.map((mytoy) => (
        <MyOrders
          key={mytoy._id}
          mytoy={mytoy}
          handleDelete={handleDelete}
          onQuantityChange={(quantity) =>
            handleProductQuantityChange(mytoy._id, quantity)
          }
        />
      ))}

      <div className="border-t my-4"></div>
      <div className="border-t my-4"></div>
      <div className="flex justify-between">
        <p className="text-gray-500">Subtotal</p>
        <p>${totalPrice}</p>
      </div>
     
      <div className="flex justify-between">
        <p className="text-gray-500">Taxes</p>
        <p>5.52</p> {/* Replace with the actual tax amount */}
      </div>
      <div className="border-t my-4"></div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">
</p>          {(totalPrice + 5.00 + 5.52)}
      
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover-bg-blue-600"
        onClick={handleConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default OrderDetails;

