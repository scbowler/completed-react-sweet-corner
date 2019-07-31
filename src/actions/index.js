import types from './types';
import axios from 'axios';
import { withHeaders } from '../helpers';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };

        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity
        }, axiosConfig);

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

export const createGuestOrder = guest => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };

        const resp = await axios.post(`${BASE_URL}/api/orders/guest`, guest, axiosConfig);

        localStorage.removeItem('sc-cart-token');

        dispatch({
            type: types.CREATE_GUEST_ORDER,
            order: {
                id: resp.data.id,
                message: resp.data.message
            }
        });

        return {
            email: guest.email,
            orderId: resp.data.id
        };
    } catch (error) {
        console.log('Error with guest checkout:', error);
    }
}

export const getActiveCart = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        };

        const resp = await axios.get(`${BASE_URL}/api/cart`, axiosConfig);

        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        });
    } catch(error){
        console.log('Get active cart error:', error);
    }
}

// export const getCart = () => async dispatch => {
//     try {
//         const resp = await axios.get(BASE_URL + '/api/cart', withHeaders());

//         console.log('Get Cart Resp:', resp);

//     } catch(err){
//         console.log('Error getting cart:', err);
//     }
// }

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
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'x-cart-token': cartToken
            }
        }

        const resp = await axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);

        dispatch({
            type: types.GET_CART_TOTALS,
            total: resp.data.total
        });
    } catch(error) {
        console.log('Error getting cart totals:', error);
    }
}

export const getGuestOrderDetails = (orderId, email) => async dispatch => {
    try {
        const resp = await axios.get(`${BASE_URL}/api/orders/guest/${orderId}`, {
            params: { email }
        });

        dispatch({
            type: types.GET_GUEST_ORDER_DETAILS,
            ...resp.data
        });
    } catch(error) {
        console.log('Error getting guest order details:', error.response);
    }
};

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

// export const getAllProducts = () => async dispatch => {
//     try {
//         const { data: { products } } = await axios.get(BASE_URL + '/api/products');

//         dispatch({
//             type: types.GET_ALL_PRODUCTS,
//             products: products
//         });
//     } catch(err){
//         console.log('Get product list error:', err);

//         // TODO: dispatch an error for failed products request
//     }
// }

// export const getProductDetails = (productId) => async (dispatch) => {
//     try {
//         const { data: { product } } = await axios.get(`${BASE_URL}/api/products/${productId}`);

//         dispatch({
//             type: types.GET_PRODUCT_DETAILS,
//             product: product
//         });
//     } catch(err){
//         console.log('Error Getting product details:', err);

//         // TODO: dispatch an error for failed product details request
//     }
// }
