import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './products_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: productReducer
});

export default rootReducer;
