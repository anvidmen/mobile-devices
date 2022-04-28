import axios from 'axios'

const baseURL = 'https://front-test-api.herokuapp.com'

export const getMobileDevices = () => axios.get(`${baseURL}/api/product`)
