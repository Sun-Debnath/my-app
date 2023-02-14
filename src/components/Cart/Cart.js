import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    // let length = cart.length

    // const cartName = () => {
    //     if (length === 1) {
    //         return <h4>Product Name</h4>
    //     }
    //     else if (length > 1) {
    //         return <h4>Products Name</h4>
    //     }

    // }

    // const number = () => {
    //     for (let i = 0; i <= length; i++) {
    //         i = i + length;
    //         return <p>{i}</p>
    //     }
    //}
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>

            <h3>Ordered summary</h3>
            <p>ordered item = {cart.length}</p>
            {/* <p>{cartName()}</p> */}
            {
                // cart.map(pdName =>/*{number()}*/<p> name : {pdName.name},  </p>)
            }
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>tax + vat: {formatNumber(tax)}</small></p>
            <p>total price: {(total + shipping + Number(tax)).toFixed(2)}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>

        </div>
    );



};

export default Cart;