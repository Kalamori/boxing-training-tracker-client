import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

export const signUp = (formData) => {
    return axios.post(`${BASE_URL}/users/sign-up/`, formData)
}

export const signIn = (formData) => {
    return axios.post(`${BASE_URL}/users/sign-in/`, formData)
}