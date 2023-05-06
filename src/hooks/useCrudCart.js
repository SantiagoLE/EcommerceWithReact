import axios from "axios"
import getConfigToken from "../utils/getConfigToken"

const useCrudCart = ( )=> {

    const addProductToCart = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
        axios.post(url, data, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return {add} 

}

export default useCrudCart