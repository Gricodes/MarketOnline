export const CARD_ADD_ITEM = 'ADD_TO_CARD';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CARD_ADD_ITEM :
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return {...state, cartItems: state.cartItems.map(x => x.product === product.product ? item : x)}
            } else {
                return {...state, cartItems: [...state.cartItems, item]}
            }
        case CART_REMOVE_ITEM :
            return {cartItems: state.cartItems.filter(c=>c.product !==action.payload)}
        default:
            return state
    }


}
export {cartReducer};
