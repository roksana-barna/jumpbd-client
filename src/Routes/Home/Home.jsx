import React from 'react';
import Banner from './Banner/Banner';
import ProductCard from './BestSell/ProductCard';
import ProductList from './BestSell/ProductList';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductList></ProductList>
            <ProductCard></ProductCard>
        </div>
    );
};

export default Home;