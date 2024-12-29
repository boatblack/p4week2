import React from 'react';
import Product from './Product';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;