import React, { useState } from 'react';

function WishList() {
  // Simulated product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 25.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 15.49 },
    // Add more products here
  ]);

  // State to manage the client's wishlist
  const [wishlist, setWishlist] = useState([]);

  // Function to add a product to the wishlist
  const addToWishlist = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setWishlist([...wishlist, productToAdd]);
    }
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 ml-5">Your Wishlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {wishlist.length === 0 ? (
          <p className='ml-5'>Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-semibold">{product.name}</span>
                <p className="text-gray-700">${product.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <h1 className="text-3xl font-semibold mt-8 ml-3">Products</h1>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-semibold">{product.name}</span>
              <p className="text-gray-700">${product.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                onClick={() => addToWishlist(product.id)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
