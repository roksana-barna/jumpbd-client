import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './MyOrder.css';

const MyOrders = ({ mytoy, handleDelete }) => {
  const { productImages, name, email, subCategory, rating, quantity, description, price, _id } = mytoy;

  console.log(mytoy);

  return (
    <div>
      <div className='review-item'>
        {/* <img src={`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/productImages/${productImages}`} alt="" /> */}
        <img src={`http://localhost:5000/productImages/${productImages}`} alt={name} />

        <div className='review-details'>
          <p className='product-title'>{name}</p>
          <p>Price: <span className='orange-text'>${price}</span></p>
          <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
        </div>
        <button onClick={() => handleDelete(_id)} className='button-delete'>
          <FaTrashAlt className='dlt-icon' />
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
