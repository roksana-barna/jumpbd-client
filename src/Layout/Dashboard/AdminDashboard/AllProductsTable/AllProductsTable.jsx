import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AllProduct.css'

const AllProductsTable = ({ allproduct, handleDelete,index }) => {
    const { productImages, name, keyfeatures, category, suggestprice, quantity, description, price, _id } = allproduct;
   

    return (
        <tr>
                        <td>{index + 1}</td>

            <td>
                <div className="flex">
                    <div className="avatar">
                        <div className="mask mask-rounded w-10 h-10">
                            <img src={`https://dropzey-server.vercel.app/productImages/${productImages}`} alt={name} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>

            <td className='mr-4'>
                {category}
            </td>
            <td>
                {price}
            </td>
            <td>
                {suggestprice}
            </td>

            <td>
                {quantity}
            </td>
           
               
        
      

            <td> <Link to={`/updateproduct/${_id}`}><button className='bg-teal-500 p-2 rounded text-white'>Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline bg-red-500">X</button>
            </td>
        </tr>

    );
};


export default AllProductsTable;