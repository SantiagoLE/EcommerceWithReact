import axios from "axios"
import { useState } from "react"

const useAutenthication = () => {

const [loginSuccessful, setLoginSuccessful] = useState(false)
const [loginError, setLoginError] = useState(false)

    const createNewUser = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const loginUser = data => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
        axios.post(url, data)
        .then(res => {
            setLoginSuccessful(res.data)
            setLoginError(false)
            localStorage.setItem("token", res.data.token)
          })
        .catch(err => {
            console.log(err)
            setLoginError(true)
        localStorage.removeItem("token")
        })
    }
return {createNewUser, loginUser, loginSuccessful ,loginError}
}

export default useAutenthication