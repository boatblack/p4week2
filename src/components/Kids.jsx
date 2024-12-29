import React from 'react';
import ItemList from './ItemList';
import './Kids.css'; // Create a CSS file for styling

const Kids = () => {
    const kidsProducts = [
        {
            _id: 3,
            name: 'Kids Casual',
            price: 800,
            colors: ['black', 'blue', 'white'],
            sizes: ['small', 'medium', 'large'],
            image: require('../assets/kids_casual.jpg'),
        },
        // Add more kids' products
    ];

    return (
        <div className="kids">
            <h2>Kids' Products</h2>
            <ItemList products={kidsProducts} />
        </div>
    );
};

export default Kids;