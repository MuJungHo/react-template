import axios from 'axios'
const baseURL = process.env.REACT_APP_DOMAIN || 'http://127.0.0.1'

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

// apis...