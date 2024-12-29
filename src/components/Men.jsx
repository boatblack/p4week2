import React from 'react';
import ItemList from './ItemList';
import './Men.css'; // Create a CSS file for styling

const Men = () => {
    const menProducts = [
        {
            _id: 1,
            name: 'Men T-Shirt',
            price: 500,
            colors: ['black', 'blue', 'white'],
            sizes: ['small', 'medium', 'large', 'extra large'],
            image: require('../assets/tshirtmen.jpg'),
        },
        // Add more men's products
    ];

    return (
        <div className="men">
            <h2>Men's Products</h2>
            <ItemList products={menProducts} />
        </div>
    );
};

export default Men;