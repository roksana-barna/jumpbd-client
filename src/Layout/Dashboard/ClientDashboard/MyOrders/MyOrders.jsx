// import React from 'react';
// import { FaTrashAlt } from 'react-icons/fa';
// import './MyOrder.css';

// const MyOrders = ({ mytoy, handleDelete }) => {
//   const { productImages, name, email, subCategory, rating, quantity, description, price, _id } = mytoy;

//   console.log(mytoy);

//   return (
//     <div>
//       <div className='review-item'>
//         {/* <img src={`http://localhost:5000/productImages/${productImages}`} alt="" /> */}
//         <img src={`http://localhost:5000/productImages/${productImages}`} alt={name} />

//         <div className='review-details'>
//           <p className='product-title'>{name}</p>
//           <p>Price: <span className='orange-text'>${price}</span></p>
//           <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
//         </div>
//         <button onClick={() => handleDelete(_id)} className='button-delete'>
//           <FaTrashAlt className='dlt-icon' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
// import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './MyOrder.css';
import { useState } from 'react';

const MyOrders = ({ mytoy, handleDelete,onQuantityChange  }) => {
  const { productImages, name, email, subCategory, rating, quantity, description, price, _id } = mytoy;

  // State to manage the quantity
  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
    // Notify the parent component about the quantity change
    onQuantityChange(mytoy._id, newQuantity);
  };
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  // Function to handle quantity change
  

  return (
    <div>
      <div className='review-item'>
        <img src={`http://localhost:5000/productImages/${productImages}`} alt={name} />

        <div className='review-details'>
          <p className='product-title'>{name}</p>
          <p>Price: <span className='orange-text'>{price}</span></p>
          <p>
            Order Quantity:{' '}
            <span className='orange-text'>
              {/* Display the selected quantity */}
              {selectedQuantity}
            </span>
          </p>
        </div>

        {/* Quantity input and buttons */}
        <div className='quantity-control'>
          <button
            className='quantity-button'
            onClick={() => handleQuantityChange(selectedQuantity - 1)}
          >
            -
          </button>
          <input
            type='text'
            className='quantity-input'
            value={selectedQuantity}
            readOnly
          />
          <button
            className='quantity-button'
            onClick={() => handleQuantityChange(selectedQuantity + 1)}
          >
            +
          </button>
        </div>

        <button onClick={() => handleDelete(_id)} className='button-delete'>
          <FaTrashAlt className='dlt-icon' />
        </button>
      </div>
    </div>
  );
};

export default MyOrders;

