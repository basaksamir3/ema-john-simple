import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const header = () => {
    return (
        <div className="Header">
            <img src={logo}alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Manange Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default header;