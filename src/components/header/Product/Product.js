import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Product.css'

const Product = (props) => {
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-names">
            <h3 className='product-name'>{name}</h3><br/>
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock -Order soon</small></p>
            <button className="main-button"
            
                onClick ={ ()=>props.handleAddProduct(props.product)}
            >

                <FontAwesomeIcon icon={faShoppingCart} />add to chart</button>

            </div>
            
            
        </div>
    );
};

export default Product;