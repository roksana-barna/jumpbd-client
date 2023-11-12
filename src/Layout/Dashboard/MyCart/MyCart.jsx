import React from 'react';

function MyCart() {
  const products = [
    {
      name: 'Trendy Clothing',
      description: 'Discover the latest fashion trends.',
      image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR039MAfWG3td_9v81sSEYn8U_bdlYuBQ1Gu2WawMolb82IHJUnIMY8Nob-lkyDe6bm-Nl8ozHsADKayLvYnKM',
    },
    {
      name: 'Electronics',
      description: 'Explore the latest gadgets and electronics.',
      image: 'https://media.istockphoto.com/id/1400570369/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.webp?b=1&s=612x612&w=0&k=20&c=FrpMrXNMUz6w8XXbVnncBigMf8T7nsbPcKCh91TDuQo=',
    },
    {
      name: 'Home Decor',
      description: 'Find stylish decorations for your home.',
      image: 'https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen py-16 md:w-[900px] sm:px-3">
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to our Dropshipping Store</h1>
        <p className="text-xl mb-8 text-white">Discover the latest trends in fashion, electronics, and home decor.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white mt-6 ml-4 w-64 rounded-lg p-4 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
