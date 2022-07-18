import Axios from 'axios'

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const axios = Axios.create({
  baseURL: PROXY_URL + process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

export default axios
