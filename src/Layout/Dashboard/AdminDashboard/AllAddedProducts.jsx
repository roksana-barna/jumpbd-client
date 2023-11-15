import React, { useEffect, useState } from 'react';
import AllProductsTable from './AllProductsTable/AllProductsTable';

const AllAddedProducts = () => {
    const [products, setProducts] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        // Fetch products from your backend API
        fetch('https://dropzey-server.vercel.app/addproducts')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [isSearched]);
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        console.log(text);
        if (text) {
            fetch(`https://dropzey-server.vercel.app/productNameSearch/${text}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProducts(data);
                });
        } else {
            setIsSearched(!isSearched);
        }
    };

    const handleDelete = id => {
        const proceed = confirm("Are you want to delete?");
        if (proceed) {
            fetch(`https://dropzey-server.vercel.app/addproducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = products.filter(mytoy => mytoy._id !== id)
                        setProducts(remaining)
                    }
                })

        }
    }
    console.log(products)



    // Calculate total price and quantity
    const total = products.reduce(
        (accumulator, currentProduct) => {
            accumulator.price += Number(currentProduct.price) || 0;
            accumulator.quantity += Number(currentProduct.quantity) || 0;
            return accumulator;
        },
        { price: 0, quantity: 0 }
    );



    return (
        <div>
            <div className=''>
                <div >
                    <h2 className='text-xl text-teal-600 text-center font-bold my-6'>Our All Products</h2>
                </div>
                <form onSubmit={handleSearch} className='text-center p-5'>
                    <input type='text' placeholder='search Product name' name='search'

                        className=' border-1 border rounded bg-slate-100  p-1' />
                    <button type='submit' className='bg-teal-300 p-1 rounded text-white' >Search</button>
                </form>
                <div>
                    <div className="">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th> Suggested Price</th>
                                    <th>Quantity</th>

                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((allproduct,index) => <AllProductsTable
                                        key={allproduct._id}
                                        index={index}

                                        allproduct={allproduct}
                                        handleDelete={handleDelete}
                                    >

                                    </AllProductsTable>)
                                }

                            </tbody>
                        </table>

                    </div>
                </div >
            </div>
          <div className='md:flex gap-4 justify-center'>
             <p className='text-lg font-serif bg-cyan-100 p-2 border-s-2 '>Total Price: {total.price.toFixed(2)}</p>
            <p className='text-lg font-serif bg-cyan-100 p-2 '>Total Quantity: {total.quantity}</p>
          </div>
        </div>
    );
};

export default AllAddedProducts;