import axios from 'axios'

const baseURL = 'https://front-test-api.herokuapp.com'

export const getMobileDevices = () => axios.get(`${baseURL}/api/product`)
export const getProductDetail = id => axios.get(`${baseURL}/api/product/${id}`)
export const postToCart = data => axios.post(`${baseURL}/api/cart`, data)
