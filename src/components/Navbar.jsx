import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/moon.jpg'; // Import the logo image
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Volmaan Sol Logo" className="logo" /> {/* Add logo here */}
            <h1>Volmaan Sol</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kids">Kids</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;