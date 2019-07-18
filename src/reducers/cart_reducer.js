import types from '../actions/types';

const DEFAULT_STATE = {
    total: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART:

            return { ...state, total: action.cartTotal };
        default:
            return state;
    }
}
