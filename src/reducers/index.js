import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './cart_reducer';
import productReducer from './products_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    cart: cartReducer,
    products: productReducer,
    user: userReducer
});

export default rootReducer;
