import types from './types';
import axios from 'axios';
import { withHeaders } from '../helpers';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const resp = await axios.post(BASE_URL + `/api/cart/items/${productId}`, {
            quantity: quantity
        }, withHeaders());

        localStorage.setItem('cart-token', resp.data.cartToken);
        console.log('Add Item Resp:', resp);

    } catch(err){
        console.log('Error adding item to cart', err);
    }
}

// send x-cart-token with all requests
// Token will be given once you add your first product

// delete /api/cart Delete currently active cart
// delete /api/cart/:cartId Delete cart and all items in it
// delete /api/cart/items/:itemId Delete that item

// patch /api/cart/:itemId, { quantity: 2 }, withHeaders() add 2 items to that items qty
// put /api/cart/:itemId, { quantity: 4 }, , withHeaders() set that item qty to 4

export const getCart = () => async dispatch => {
    try {
        const resp = await axios.get(BASE_URL + '/api/cart', withHeaders());

        console.log('Get Cart Resp:', resp);

    } catch(err){
        console.log('Error getting cart:', err);
    }
}

export const getAllProducts = () => async dispatch => {
    try {
        const { data: { products } } = await axios.get(BASE_URL + '/api/products');

        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: products
        });
    } catch(err){
        console.log('Get product list error:', err);

        // TODO: dispatch an error for failed products request
    }
}

export const getProductDetails = (productId) => async (dispatch) => {
    try {
        const { data: { product } } = await axios.get(`${BASE_URL}/api/products/${productId}`);

        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: product
        });
    } catch(err){
        console.log('Error Getting product details:', err);

        // TODO: dispatch an error for failed product details request
    }
}
