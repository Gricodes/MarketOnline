import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

const HomeScreen = () => {

    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    console.log(products)
    return (
        loading ?
            <div> Loading ... </div>
            : error ? <div> {error} </div>
            : <div>
                <ul className="products">
                    {products.map((products) => {
                        return (
                            <li key={products._id}>
                                <div className="product">
                                    <Link to={`product/${products._id}`}>
                                        <img className="product-image" src={products.image} alt="product"/>
                                    </Link>
                                    <div className="product-name">
                                        <Link to={`product/${products._id}`}>{products.name}</Link>
                                    </div>
                                    <div className="product-brand">{products.brand}</div>
                                    <div className="product-price">${products.price}</div>
                                    <div className="product-rating">{products.rating} Stars {products.numReviews}</div>
                                </div>
                            </li>)
                    })}
                </ul>
            </div>
    )
}
export default HomeScreen;