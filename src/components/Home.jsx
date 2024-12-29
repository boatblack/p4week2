import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>New Collection</h2>
            <ItemList products={products} />
        </div>
    );
};

export default Home;