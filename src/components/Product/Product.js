import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Product.css'
import { Link, NavLink, Outlet } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.pd;
    return (
        <div className="product">

            <div className="image">
                <img src={img} alt="" />
            </div>

            <div>

                <h4 className='product-name'><Link to={"/product/" + key}>{name}</Link></h4>

                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} available</small></p>
                {props.showAddToCart && <button className="main-button , btn btn-success"
                    onClick={() => props.handleAddProduct(props.pd)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    add to cart </button>}

            </div>

        </div>
    );
};

export default Product;