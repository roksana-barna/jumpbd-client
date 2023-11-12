

import React, { useContext, useEffect, useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { v4 as uuidv4 } from 'uuid';


const OrderDetails = () => {
  const [sortByPrice, setSortPrice] = useState(1);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState({}); // State for selected products and quantities

  useEffect(() => {
    fetch(`http://localhost:5000/cartitem/${user.email}/${sortByPrice}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [sortByPrice, user]);
  useEffect(() => {
    const calculatedTotalPrice = myToys.reduce(
      (accumulator, currentToy) => {
        accumulator.price += Number(currentToy.price) * Number(currentToy.quantity) || 0;
        accumulator.quantity += Number(currentToy.quantity) || 0;
        return accumulator;
      },
      { price: 0, quantity: 0 }
    );

    setTotalPrice(calculatedTotalPrice.price.toFixed(2));
  }, [myToys]);
  // Log the initial state of selectedProducts and myToys


 
  const handleDelete = (id) => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/cartitem/${id}`, {
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
    // Function to generate a numerical order code
    const generateNumericOrderCode = () => {
    //   const uuid = uuidv4(); // Generate a UUID
    //   const numericCode = BigInt(`0x${uuid.replace(/-/g, '')}`).toString(); // Convert UUID to numerical value
    //   return parseInt(numericCode.slice(0, 8), 10);
    //    // Take the first 8 digits as the order code
    //    return `#${orderCode}`;

    // };
    const uuid = uuidv4();
  
    // Convert UUID to numerical value
    const numericCode = BigInt(`0x${uuid.replace(/-/g, '')}`).toString();
    
    // Take the first 8 digits as the order code and convert to an integer
    const orderCode = parseInt(numericCode.slice(0, 8), 10);
    
    // Add '#' prefix to the order code
    return `#${orderCode}`;
  };
    // Example usage
    const orderCode = generateNumericOrderCode();
    console.log(orderCode);


    const orderedProducts = myToys;
    
     
    const currentDate = new Date();

    // Log the final array of ordered products
    console.log('Ordered Products:', orderedProducts);
  // Prepare the order data with the array of ordered products and other details
  const orderData = {
    orderCode: orderCode,
    user: user.email,
    products: orderedProducts,
    totalPrice: totalPrice,
    deliveryInformation: deliveryForm,
    shippingMethod: shippingMethod,
    shippingCost: shippingCost,
    totalBDT: totalBDT.toFixed(2),
    orderDate: currentDate.toISOString(), // Convert to a string for easy storage and retrieval

  };
console.log(orderData)
    // Send the order data to the server
    fetch('http://localhost:5000/orders', {
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
    fetch(`http://localhost:5000/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    });
  };


  //  // ... (previous code)

  const [deliveryForm, setDeliveryForm] = useState({
    name: '',
    address: '',
    city: 'Bangladesh',
    postalCode: '',
    phoneNumber: '',
    saveForNextTime: false,
  });

  const [shippingMethod, setShippingMethod] = useState('');
  const [shippingCost, setShippingCost] = useState(0);

  const handleDeliveryFormChange = (e) => {
    const { name, value } = e.target;
    setDeliveryForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSaveForNextTimeChange = (e) => {
    setDeliveryForm((prevForm) => ({
      ...prevForm,
      saveForNextTime: e.target.checked,
    }));
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
    // Set shipping cost based on location (outside Dhaka or inside Dhaka)
    setShippingCost(e.target.value === 'outside' ? 130 : 80);
  };

  const totalBDT = Number(totalPrice) + shippingCost;

  // 
  const [totalSelectedQuantity, setTotalSelectedQuantity] = useState(0);

  // Callback function to handle quantity change and update the total quantity
  // const handleProductQuantityChange = (id, quantity) => {
  //   // Update the quantity for the selected product
  //   const updatedSelectedProducts = { ...selectedProducts, [id]: quantity };
  //   setSelectedProducts(updatedSelectedProducts);

  //   // Calculate and update the total selected quantity
  //   const newTotalQuantity = Object.values(updatedSelectedProducts).reduce(
  //     (total, qty) => total + qty,
  //     0
  //   );
  //   setTotalSelectedQuantity(newTotalQuantity);
  // };
// 

const handleProductQuantityChange = (id, quantity) => {
  // Log the initial state
  console.log('Initial selectedProducts:', selectedProducts);

  // Update the quantity for the selected product
  const updatedSelectedProducts = { ...selectedProducts, [id]: quantity };
  setSelectedProducts(updatedSelectedProducts);

  // Calculate and update the total selected quantity
  const newTotalQuantity = Object.values(updatedSelectedProducts).reduce(
    (total, qty) => total + qty,
    0
  );
  setTotalSelectedQuantity(newTotalQuantity);

  // Log the final state
  console.log('Final selectedProducts:', updatedSelectedProducts);
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
{/*  */}
<div className="mx-auto  bg-white p-6 rounded-lg shadow-lg">
      {/* ... (previous code) */}
      <div className="border-t my-4"></div>
      <div className="flex justify-between">
        <p className="text-gray-500">Subtotal</p>
        <p>BDT:{totalPrice}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Shipping</p>
        <p>{shippingCost.toFixed(2)}</p>
      </div>
      <div className="border-t my-4"></div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">{totalBDT.toFixed(2)}</p>
      </div>


<div>
      {/* Delivery Information */}
      <div className=" p-6 bg-white rounded-lg shadow-lg delivery-information">
        <h2 className="text-xl text-teal-600 text-center font-bold my-6">Delivery Information</h2>
        <form className="grid grid-cols-2 gap-4">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={deliveryForm.name}
              onChange={handleDeliveryFormChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={deliveryForm.address}
              onChange={handleDeliveryFormChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={deliveryForm.city}
              onChange={handleDeliveryFormChange}
              className="border p-2 rounded w-full"
            >
              <option value="Bangladesh" disabled>
                Bangladesh
              </option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={deliveryForm.postalCode}
              onChange={handleDeliveryFormChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={deliveryForm.phoneNumber}
              onChange={handleDeliveryFormChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="form-field">
            <label>
              <input
                type="checkbox"
                checked={deliveryForm.saveForNextTime}
                onChange={handleSaveForNextTimeChange}
              />
              Save for Next Time
            </label>
          </div>
        </form>
      </div>

      {/* Shipping Method */}
      <div className=" p-6 bg-white rounded-lg shadow-lg shipping-method">
        <h2 className="text-xl text-teal-600 text-center font-bold my-6">Shipping Method</h2>
        <form>
          <label className="shipping-option block mb-4">
            <input
              type="radio"
              name="shippingMethod"
              value="outside"
              checked={shippingMethod === 'outside'}
              onChange={handleShippingMethodChange}
              className="mr-2"
            />
            Ship Outside Dhaka (+$130)
          </label>
          <label className="shipping-option block">
            <input
              type="radio"
              name="shippingMethod"
              value="inside"
              checked={shippingMethod === 'inside'}
              onChange={handleShippingMethodChange}
              className="mr-2"
            />
            Ship Inside Dhaka (+$80)
          </label>
        </form>
      </div>

      {/* Payment Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg payment-information">
        <h2 className="text-xl text-teal-600 text-center font-bold my-6">Payment Information</h2>
        {/* Add your payment fields here */}
      </div>
    </div>


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

