import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './product_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: productReducer
});

export default rootReducer;
