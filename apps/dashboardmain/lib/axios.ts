import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
})

export default axios
