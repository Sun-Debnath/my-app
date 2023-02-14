import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    let {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product); 
    return (
        <div>
            <h2> Your product detail.</h2>
            <Product showAddToCart={false} pd={product}></Product>
        </div>
    );
};

export default ProductDetail;