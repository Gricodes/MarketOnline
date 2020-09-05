import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailsProduct} from "../actions/productActions";


const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
    }, []);

    const handleAddToCard = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <div className={"back-to-result"}>
                <Link to="/">Back to result</Link>
            </div>

            {loading ? <div>Loading ... </div>
                : error ? <div>{error}</div>
                    : (
                        <div className={"details"}>
                            <div className={"details-image"}>
                                <img src={product.image} alt="detailsImage"/>
                            </div>
                            <div className={"details-info"}>
                                <ul>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>
                                    <li>
                                        {product.rating} Stars ({product.numReviews} Reviews)
                                    </li>
                                    <li>
                                        Price: <b>${product.price}</b>
                                    </li>
                                    <li>
                                        Description:
                                        <b>{product.description}</b>
                                    </li>
                                </ul>
                            </div>
                            <div className={"details-action"}>
                                <ul>
                                    <li>
                                        Price: ${product.price}
                                    </li>
                                    <li>
                                        Status: {product.countInStack > 0 ? "In Stock" : "Unavailable"}
                                    </li>
                                    <li>
                                        Qty:
                                        <select value={qty} onChange={(e) => {
                                            setQty(e.target.value)
                                        }}>
                                            {[...Array(product.countInStack).keys()].map(el => <option key={el+1} value={el+1}>{el+1}</option>)}

                                        </select>
                                    </li>
                                    <li>
                                        {product.countInStack>0
                                            && <button onClick={handleAddToCard}
                                                     className={"button primary"}> Add To Card</button>
                                                                                   }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }


        </div>
    )
}
export default ProductScreen;