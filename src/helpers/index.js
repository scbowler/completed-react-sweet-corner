export function withAuth(){
    return {
        headers: {
            authorization: localStorage.getItem('sc_token')
        }
    }
}
