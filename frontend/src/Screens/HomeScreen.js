import React from "react";
import data from "../data";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <ul className="products">
                {data.products.map((products) => {
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