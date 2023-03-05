import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import playerData from '../../mockdata/MOCK_DATA.json';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    // const [plData, setPlData] = useState([]);

    // useEffect(() => {
    //     setPlData(playerData);
    // }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])


    const handleAddProduct = (product) => {

        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);


    }

    return (
        <div className="twin-container">

            <div className="product-container">
                {
                    products.map(product => {
                        return (
                            <div>
                                {/* <h2>
                                    {product.first_name}
                                </h2> */}
                                <Product
                                    key={product.key}
                                    showAddToCart={true}
                                    handleAddProduct={handleAddProduct}
                                    pd={product}>
                                </Product>
                            </div>
                        )
                    }
                    )
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <a href="/review"><button className="main-button">Review Order</button></a>
                </Cart>


            </div>

        </div>
    );
};

export default Shop;