import axios from "axios"
import { useState } from "react"

const useAutenthication = () => {

const [loginSuccessfull, setLoginSuccessfull] = useState(false)
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
            setLoginSuccessfull(res.data)
            setLoginError(false)
            localStorage.setItem("token", res.data.token)
            const userFullName =  `${res.data.user.firstName} ${res.data.user.lastName}`
            localStorage.setItem("userFullName", userFullName)
           


          })
        .catch(err => {
            console.log(err)
            setLoginError(true)
        localStorage.removeItem("token")
        localStorage.removeItem("userFullName")

        })
    }
return {createNewUser, loginUser, loginSuccessfull ,loginError}
}

export default useAutenthication