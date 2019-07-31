import types from '../actions/types';

const DEFAULT_STATE = {
    details: null
}

export default (state = DEFAULT_STATE, {type, ...action}) => {
    switch(type){
        case types.GET_GUEST_ORDER_DETAILS:
            return { details: { ...action } };
        default:
            return state;
    }
}
