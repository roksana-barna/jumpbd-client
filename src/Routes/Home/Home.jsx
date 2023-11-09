import React from 'react';
import Banner from './Banner/Banner';
import ProductCard from './BestSell/ProductCard';
import ProductList from './BestSell/ProductList';
import AllProductCollection from './AllProductCollection/AllProductCollection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProductCollection></AllProductCollection>
            <ProductList></ProductList>
            <ProductCard></ProductCard>
        </div>
    );
};

export default Home;