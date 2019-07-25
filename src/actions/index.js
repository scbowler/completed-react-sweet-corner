import types from './types';
import axios from 'axios';
import { withHeaders } from '../helpers';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity
        }, withHeaders());

        localStorage.setItem('sc-cart-token', resp.data.cartToken);

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        });
    } catch(error){
        console.log('Add Item To Cart Error:', error.message);
    }
}

export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });

export const getActiveCart = () => async dispatch => {
    try {
        const resp = await axios.get(`${BASE_URL}/api/cart`, withHeaders());

        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        });
    } catch(error){
        console.log('Get active cart error:', error);
    }
}

export const getAllProducts = () => async dispatch => {
    try {
        const resp = await axios.get(BASE_URL + '/api/products');

        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: resp.data.products
        });
    } catch(err) {
        console.log('Error getting all products:', err);
    }
}

export const getCartTotals = () => async dispatch => {
    try {
        const resp = await axios.get(`${BASE_URL}/api/cart/totals`, withHeaders());

        dispatch({
            type: types.GET_CART_TOTALS,
            total: resp.data.total
        });
    } catch(error) {
        console.log('Error getting cart totals:', error);
    }
}

export const getProductDetails = productId => async dispatch => {
    try {
        const resp = await axios.get(`${BASE_URL}/api/products/${productId}`);

        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: resp.data
        });
    } catch(err) {
        console.log('Error getting product details:', err);
    }
}
