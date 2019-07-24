import types from '../actions/types';

const DEFAULT_STATE = {
    cartId: null,
    items: null,
    total: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART:
            return { ...state, total: action.cartTotal };
        case types.GET_ACTIVE_CART:
            return { ...state, cartId: action.cart.cartId, items: action.cart.items, total: action.cart.total };
        default:
            return state;
    }
}