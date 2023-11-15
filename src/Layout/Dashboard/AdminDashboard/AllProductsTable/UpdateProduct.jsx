import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const allproduct = useLoaderData();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const keyfeatures = form.keyfeatures.value;
        const price = form.price.value;
        const suggestprice=form.suggestprice.value;
        const productImages = form.productImages.value;
        const quantity = form.quantity.value;
    
        const updatedProduct = {
          name,
          category,
          description,
          keyfeatures,
          price,
          suggestprice,
          productImages,
          quantity,
        };
    
        console.log(updatedProduct);
    
        fetch(`https://dropzey-server.vercel.app/updateproduct/${allproduct._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              alert('Product updated successfully');
            }
          });
      };
    return (
        <div>
              <div className='bg-gradient-to-r from-cyan-300 to-purple-400'>
      <form onSubmit={handleUpdate}>
        <div className='grid grid-cols-2 gap-8 p-10'>
          <div>
          <div className="mb-4">
              <label className="block text-gray-600">Name:</label>
              <input type="text" name="name" defaultValue={allproduct.name} className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Category:</label>
              <input type="text" name="category" defaultValue={allproduct.category} className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Description:</label>
              <textarea id="description" name="description" defaultValue={allproduct.description} className="w-full border p-2 rounded" rows="8" placeholder="Enter description"></textarea>

              {/* <input type="text" name="description" defaultValue={allproduct.description} className="w-full border p-2 rounded" /> */}
            </div>
           
            <div className="mb-4">
              <label className="block text-gray-600">Key Features:</label>
              <textarea id="keyfeatures" name="keyfeatures" defaultValue={allproduct.keyfeatures} className="w-full border p-2 rounded" rows="6"></textarea>
            </div>
           
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-600">Price:</label>
              <input type="number" name="price" defaultValue={allproduct.price} className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600"> suggested Price:</label>
              <input type="number" name="suggestprice" defaultValue={allproduct.suggestprice} className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Product Images:</label>
              <input type="text" name="productImages" defaultValue={allproduct.productImages} className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Quantity:</label>
              <input type="number" name="quantity" defaultValue={allproduct.quantity} className="w-full border p-2 rounded" />
            </div>
           
            <button type="submit" className="bg-blue-500 w-full text-white rounded p-2">Update</button>
          </div>
        </div>
      </form>
    </div>
            
        </div>
    );
};

export default UpdateProduct;