import axios from 'axios'
import {CARD_ADD_ITEM, CART_REMOVE_ITEM} from "../reducers/cartReducers";
import Cookie from 'js-cookie';

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/api/products/${productId}`);
        dispatch({
            type: CARD_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStack,
                qty: qty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (e) {

    }
}
const removeFromCart = (productId) => (dispatch,getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    const {cart:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
export {addToCart, removeFromCart};
