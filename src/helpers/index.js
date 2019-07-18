export function withHeaders(){
    return {
        headers: {
            authorization: localStorage.getItem('auth-token') || '',
            'x-cart-token': localStorage.getItem('sc-cart-token') || ''
        }
    }
}
