import React from 'react';
import ItemList from './ItemList';
import './Women.css'; // Create a CSS file for styling

const Women = () => {
    const womenProducts = [
        {
            _id: 2,
            name: 'Women Dress',
            price: 1200,
            colors: ['black', 'blue', 'white'],
            sizes: ['small', 'medium', 'large', 'extra large'],
            image: require('../assets/women_dress.jpg'),
        },
        // Add more women's products
    ];

    return (
        <div className="women">
            <h2>Women's Products</h2>
            <ItemList products={womenProducts} />
        </div>
    );
};

export default Women;