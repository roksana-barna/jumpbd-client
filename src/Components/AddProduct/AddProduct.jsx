// import React, { useContext } from 'react';
// // import img2 from '../../assets/welliewishers.png'
// import useTitle from '../../Hooks/UseTitle';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

// const AddProduct = () => {
//   const { user } = useContext(AuthContext);
//   useTitle('Add a Product');
//   const handleBuy = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const sellerName = user?.displayName;
//     const pictureUrl = form.pictureUrl.value;
//     const name = form.name.value;
//     const email = user?.email;
//     const category = form.category.value;
//     const price = form.price.value;
//     const rating = form.rating.value;
//     const quantity = form.quantity.value;

//     const description = form.description.value;
//     const toys = { name, pictureUrl, sellerName, email, category, price, rating, quantity, description };
//     console.log(toys);
//     form.reset();
//     fetch('https:localhost:5000/addproducts', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(toys)

//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         if (data.insertedId) {
//           alert('Product successfully Added')
//         }
//       })

//   }
//   return (
//   <div className='mt-8 w-9/12 mx-auto'>
//   {/* <img className='h-80 w-full' src={img2} alt="" /> */}

//   <h2 className='text-cyan-600 text-2xl font-bold text-center mb-5'>Add Product</h2>

//   <div className="max-w-md mx-auto text-cyan-600">
//     <form onSubmit={handleBuy}>
//       <div className="mb-4">
//         <label htmlFor="pictureUrl" className="block text-cyan-600 text-base font-bold mb-2">Picture URL of the Product:</label>
//         <input type="text" id="pictureUrl" name="pictureUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter picture URL" />
//       </div>

//   <div className="mb-4">
//     <label htmlFor="name" className="block text-cyan-600 text-base font-bold mb-2">Name:</label>
//     <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Product name" />
//   </div>

//   <div className="mb-4">
//     <label htmlFor="sellerName" className="block text-cyan-600 text-base font-bold mb-2">Seller Name:</label>
//     <input type="text" id="sellerName" defaultValue={user?.displayName} name="sellerName" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller name" />
//   </div>
//   <div className="mb-4">
//         <label htmlFor="sellerEmail" className="block text-cyan-600 text-base font-bold mb-2">Seller Email:</label>
//         <input type="email" id="sellerEmail" defaultValue={user?.email} name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller email" />
//       </div>

//       <div className="mb-4">
//         {/* <label htmlFor="subCategory" className="block text-cyan-600 text-base font-bold mb-2">Sub-category:</label>
//         <select id="subCategory" name="subCategory" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline"> */}

//         {/* <option value="Fashion and Accessories">Fashion and Accessories</option>
//     <option value="Beauty and Health">Beauty and Health</option>
//     <option value="Home and Living">Home and Living</option>
//     <option value="Electronics and Gadgets">Electronics and Gadgets</option>
//     <option value="lighting-fixtures">Lighting Fixtures</option> */}
//         {/* </select> */}
//         <label htmlFor="category" className="block text-cyan-600 text-base font-bold mb-2">Select a Category:</label>
// <select id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline">
//     <optgroup label="Fashion and Accessories">
//         <option value="womens-fashion">Womens Fashion
//         </option>
//         <option value="mens-fashion">Mens Fashion
//         </option>

//         <option value="jewelry">Jewelry</option>
//         <option value="watches">Watches</option>
//         <option value="sunglasses">Sunglasses</option>
//         <option value="handbags">Handbags</option>
//     </optgroup>
//     <optgroup label="Beauty and Health">
//         <option value="skincare">Skincare products</option>
//         <option value="makeup">Makeup</option>
//         <option value="haircare">Haircare products</option>
//         <option value="vitamins-supplements">Vitamins and supplements</option>
//         <option value="fitness-equipment">Fitness equipment</option>
//     </optgroup>
//     <optgroup label="Home and Living">
//         <option value="home-decor">Home decor</option>
//         <option value="furniture">Furniture</option>
//         <option value="kitchen-gadgets">Kitchen gadgets</option>
//         <option value="bedding-linens">Bedding and linens</option>
//         <option value="lighting-fixtures">Lighting fixtures</option>
//     </optgroup>
//     <optgroup label="Electronics and Gadgets">
//         <option value="phone-accessories">Phone accessories</option>
//         <option value="headphones-earbuds">Headphones and earbuds</option>
//         <option value="baseartwatches">baseartwatches</option>
//         <option value="portable-chargers">Portable chargers</option>
//         <option value="camera-accessories">Camera accessories</option>
//     </optgroup>
//     <optgroup label="Toys and Hobbies">
//         <option value="educational-toys">Educational toys</option>
//         <option value="board-games">Board games</option>
//         <option value="hobby-supplies">Hobby supplies</option>
//         <option value="remote-controlled-toys">Remote-controlled toys</option>
//         <option value="puzzles">Puzzles</option>
//     </optgroup>
//     <optgroup label="Outdoor and Sports">
//         <option value="camping-gear">Camping gear</option>
//         <option value="outdoor-clothing">Outdoor clothing</option>
//         <option value="fitness-apparel-equipment">Fitness apparel and equipment</option>
//         <option value="cycling-accessories">Cycling accessories</option>
//         <option value="sports-equipment">Sports equipment</option>
//     </optgroup>
//     <optgroup label="Pet Supplies">
//         <option value="pet-grooming-products">Pet grooming products</option>
//         <option value="pet-toys-accessories">Pet toys and accessories</option>
//         <option value="pet-clothing">Pet clothing</option>
//         <option value="food-treats">Food and treats</option>
//         <option value="pet-beds-furniture">Pet beds and furniture</option>
//     </optgroup>
//     <optgroup label="Tech and Gadgets">
//         <option value="baseart-home-devices">baseart home devices</option>
//         <option value="mobile-phone-gadgets">Mobile phone gadgets</option>
//         <option value="wearable-technology">Wearable technology</option>
//         <option value="tech-related-accessories">Tech-related accessories</option>
//         <option value="drones-accessories">Drones and accessories</option>
//     </optgroup>
//     <optgroup label="Travel and Luggage">
//         <option value="travel-accessories">Travel accessories</option>
//         <option value="luggage-backpacks">Luggage and backpacks</option>
//         <option value="travel-sized-toiletries">Travel-sized toiletries</option>
//         <option value="travel-pillows">Travel pillows</option>
//         <option value="packing-organizers">Packing organizers</option>
//     </optgroup>
//     <optgroup label="Kitchen and Dining">
//         <option value="cookware-bakeware">Cookware and bakeware</option>
//         <option value="kitchen-appliances">Kitchen appliances</option>
//         <option value="cutlery-utensils">Cutlery and utensils</option>
//         <option value="tableware-dinnerware">Tableware and dinnerware</option>
//         <option value="cooking-gadgets">Cooking gadgets</option>
//     </optgroup>
//     <optgroup label="Baby and Kids">
//         <option value="baby-clothing-accessories">Baby clothing and accessories</option>
//         <option value="toys-for-kids-infants">Toys for kids and infants</option>
//         <option value="baby-safety-products">Baby safety products</option>
//         <option value="nursery-furniture-decor">Nursery furniture and decor</option>
//         <option value="educational-toys">Educational toys</option>
//     </optgroup>
//     <optgroup label="Crafts and DIY">
//         <option value="craft-supplies">Craft supplies</option>
//         <option value="diy-kits">DIY kits</option>
//         <option value="sewing-knitting-supplies">Sewing and knitting supplies</option>
//         <option value="art-supplies">Art supplies</option>
//         <option value="woodworking-tools">Woodworking tools</option>
//     </optgroup>
//     <optgroup label="Jewelry and Watches">
//         <option value="fashion-jewelry">Fashion jewelry</option>
//         <option value="fine-jewelry">Fine jewelry</option>
//         <option value="watches-for-men-women">Watches for men and women</option>
//         <option value="custom-personalized-jewelry">Custom and personalized jewelry</option>
//         <option value="jewelry-storage-displays">Jewelry storage and displays</option>
//     </optgroup>
// </select>

//       </div>

//       <div className="mb-4">
//         <label htmlFor="price" className="block text-cyan-600 text-base font-bold mb-2">Price:</label>
//         <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="$ Enter price" />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="rating" className="block text-cyan-600 text-base font-bold mb-2">Rating:</label>
//         <input type="number" id="rating" name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter rating" />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="quantity" className="block text-cyan-600 text-base font-bold mb-2">Available Quantity:</label>
//         <input type="number" id="quantity" name="quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter available quantity" />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="description" className="block text-cyan-600 text-base font-bold mb-2">Detail Description:</label>
//         <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter description"></textarea>
//       </div>

//       <div className="flex items-center justify-center">
//         <button type="submit" className="bg-cyan-600 hover:bg-teal-700 px-10 mb-10 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">ADD</button>
//       </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default AddProduct;

import React, { useContext, useState } from 'react';
import useTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add a Product');
  const [productImages, setProductImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleBuy = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();
    console.log(productImages);

    // productImages.forEach((image, index) => {
    //   formData.append(`image_${index}`, image[0]);
    // });
    formData.append(`productImages`, productImages[0]);
    formData.append('name', form.name.value);
    formData.append('sellerName', user?.displayName);
    formData.append('email', user?.email);
    formData.append('category', form.category.value);
    formData.append('price', form.price.value);
    formData.append('suggestprice', form.suggestprice.value);
    formData.append('quantity', form.quantity.value);
    formData.append('keyfeatures', form.keyfeatures.value);
    formData.append('description', form.description.value);
    // http://localhost:5000

    try {
      const response = await fetch('http://localhost:5000/addproducts', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.message) {
        alert('Product successfully added');
        form.reset();
        setProductImages([]);
        setImagePreviews([]);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setProductImages([...productImages, ...files]);

    // Generate image previews for the selected images
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const removeImage = (index) => {
    const newProductImages = [...productImages];
    newProductImages.splice(index, 1);

    const newImagePreviews = [...imagePreviews];
    newImagePreviews.splice(index, 1);

    setProductImages(newProductImages);
    setImagePreviews(newImagePreviews);
  };

  return (
    <div className="mt-8 w-9/12 mx-auto">
      <h2 className="text-cyan-600 text-2xl font-bold text-center mb-5">Add Product</h2>
      <div className="max-w-md mx-auto text-cyan-600">
        <form onSubmit={handleBuy}>
          <div className="mb-4">
            <label htmlFor="sellerName" className="block text-cyan-600 text-base font-bold mb-2"> Name:</label>
            <input type="text" id="sellerName" defaultValue={user?.displayName} name="sellerName" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller name" />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block text-cyan-600 text-base font-bold mb-2">Email:</label>
            <input type="email" id="sellerEmail" defaultValue={user?.email} name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller email" />
          </div>
          <div className="mb-4">
            <label htmlFor="productImages" className="block text-cyan-600 text-base font-bold mb-2">Upload Product Images:</label>
            <input type="file" id="productImages" name="productImages" onChange={handleImageChange} multiple className="text-cyan-600" />
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="mr-2 mb-2" style={{ position: 'relative' }}>
                  <img src={preview} alt={`Preview ${index}`} style={{ width: '100px', height: '100px' }} />
                  <button type="button" onClick={() => removeImage(index)} className="bg-red-600 text-white p-1 rounded-full" style={{ position: 'absolute', top: 0, right: 0 }}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-cyan-600 text-base font-bold mb-2"> Product Name:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Product name" />
          </div>



          <div className="mb-4">
            {/* <label htmlFor="subCategory" className="block text-cyan-600 text-base font-bold mb-2">Sub-category:</label>
        <select id="subCategory" name="subCategory" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline"> */}

            {/* <option value="Fashion and Accessories">Fashion and Accessories</option>
    <option value="Beauty and Health">Beauty and Health</option>
    <option value="Home and Living">Home and Living</option>
    <option value="Electronics and Gadgets">Electronics and Gadgets</option>
    <option value="lighting-fixtures">Lighting Fixtures</option> */}
            {/* </select> */}
            <label htmlFor="category" className="block text-cyan-600 text-base font-bold mb-2">Select a Category:</label>
            <select id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline">
              <option value="watches"> Smart Watches</option>
              <option value="sunglasses">Sunglasses</option>
              <option value="bagsandluggegges">Bags And Luggeges</option>

              <option value="bluetoothspeaker">Bluetooth Speaker</option>
              <option value="tws">TWS</option>
              <option value="headphone">Headphone</option>
              <option value="tripod">Tripod</option>
              <option value="cable-fan">Cable Fan</option>
              <option value="cable">Cable</option>
              <option value="power-bank">Power Bank</option>
              <option value="neckband">Neckband</option>
              <option value="tripod">Tripod</option>
              <option value="pen-drive">Pen Drive</option>
              <option value="torch-light">Torch Light</option>
              <option value="power-strip">Power Strip</option>
              <option value="wifi-router">WiFi Router</option>
              <option value="gaming-headphone">Gaming Headphone</option>
              <option value="usb-hub">USB HUB</option>
              <option value="mobile-charger">Mobile Charger</option>
              <option value="ip-camera">IP Camera</option>
              <option value="speaker">Speaker</option>

              {/* <option value="fitness-equipment">Fitness equipment</option>
              <optgroup label="Home and Living">
                <option value="home-decor">Home decor</option>
                <option value="furniture">Furniture</option>
                <option value="kitchen-gadgets">Kitchen gadgets</option>
                <option value="bedding-linens">Bedding and linens</option>
                <option value="lighting-fixtures">Lighting fixtures</option>
              </optgroup>
              <optgroup label="Electronics and Gadgets">
                <option value="phone-accessories">Phone accessories</option>
                <option value="headphones-earbuds">Headphones and earbuds</option>
                <option value="baseartwatches">baseartwatches</option>
                <option value="portable-chargers">Portable chargers</option>
                <option value="camera-accessories">Camera accessories</option>
              </optgroup>
              <optgroup label="Toys and Hobbies">
                <option value="educational-toys">Educational toys</option>
                <option value="board-games">Board games</option>
                <option value="hobby-supplies">Hobby supplies</option>
                <option value="remote-controlled-toys">Remote-controlled toys</option>
                <option value="puzzles">Puzzles</option>
              </optgroup>
              <optgroup label="Outdoor and Sports">
                <option value="camping-gear">Camping gear</option>
                <option value="outdoor-clothing">Outdoor clothing</option>
                <option value="fitness-apparel-equipment">Fitness apparel and equipment</option>
                <option value="cycling-accessories">Cycling accessories</option>
                <option value="sports-equipment">Sports equipment</option>
              </optgroup>
              <optgroup label="Pet Supplies">
                <option value="pet-grooming-products">Pet grooming products</option>
                <option value="pet-toys-accessories">Pet toys and accessories</option>
                <option value="pet-clothing">Pet clothing</option>
                <option value="food-treats">Food and treats</option>
                <option value="pet-beds-furniture">Pet beds and furniture</option>
              </optgroup>
              <optgroup label="Tech and Gadgets">
                <option value="baseart-home-devices">baseart home devices</option>
                <option value="mobile-phone-gadgets">Mobile phone gadgets</option>
                <option value="wearable-technology">Wearable technology</option>
                <option value="tech-related-accessories">Tech-related accessories</option>
                <option value="drones-accessories">Drones and accessories</option>
              </optgroup>
              <optgroup label="Travel and Luggage">
                <option value="travel-accessories">Travel accessories</option>
                <option value="luggage-backpacks">Luggage and backpacks</option>
                <option value="travel-sized-toiletries">Travel-sized toiletries</option>
                <option value="travel-pillows">Travel pillows</option>
                <option value="packing-organizers">Packing organizers</option>
              </optgroup>
              <optgroup label="Kitchen and Dining">
                <option value="cookware-bakeware">Cookware and bakeware</option>
                <option value="kitchen-appliances">Kitchen appliances</option>
                <option value="cutlery-utensils">Cutlery and utensils</option>
                <option value="tableware-dinnerware">Tableware and dinnerware</option>
                <option value="cooking-gadgets">Cooking gadgets</option>
              </optgroup>
              <optgroup label="Baby and Kids">
                <option value="baby-clothing-accessories">Baby clothing and accessories</option>
                <option value="toys-for-kids-infants">Toys for kids and infants</option>
                <option value="baby-safety-products">Baby safety products</option>
                <option value="nursery-furniture-decor">Nursery furniture and decor</option>
                <option value="educational-toys">Educational toys</option>
              </optgroup>
              <optgroup label="Crafts and DIY">
                <option value="craft-supplies">Craft supplies</option>
                <option value="diy-kits">DIY kits</option>
                <option value="sewing-knitting-supplies">Sewing and knitting supplies</option>
                <option value="art-supplies">Art supplies</option>
                <option value="woodworking-tools">Woodworking tools</option>
              </optgroup>
              <optgroup label="Jewelry and Watches">
                <option value="fashion-jewelry">Fashion jewelry</option>
                <option value="fine-jewelry">Fine jewelry</option>
                <option value="watches-for-men-women">Watches for men and women</option>
                <option value="custom-personalized-jewelry">Custom and personalized jewelry</option>
                <option value="jewelry-storage-displays">Jewelry storage and displays</option>
              </optgroup> */}
            </select>

          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-cyan-600 text-base font-bold mb-2">Price:</label>
            <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Enter price" />
          </div>
          <div className="mb-4">
            <label htmlFor="suggestprice" className="block text-cyan-600 text-base font-bold mb-2"> Suggest Minimum Sell Price:</label>
            <input type="number" id="suggestprice" name="suggestprice" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Enter suggest price" />
          </div>

        

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-cyan-600 text-base font-bold mb-2">Available Quantity:</label>
            <input type="number" id="quantity" name="quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter available quantity" />
          </div>
          <div className="mb-4">
            <label htmlFor="keyfeatures" className="block text-cyan-600 text-base font-bold mb-2">key Features:</label>
            <textarea id="keyfeatures" name="keyfeatures" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter key features"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-cyan-600 text-base font-bold mb-2">Detail Description:</label>
            <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter description"></textarea>
          </div>
          {/* Rest of your form inputs */}
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-cyan-600 hover-bg-teal-700 px-10 mb-10 text-white font-bold py-2 rounded focus-outline-none focus-shadow-outline">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
