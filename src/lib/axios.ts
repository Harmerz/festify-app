import Axios from 'axios'

// This is for fetching WITHOUT access token
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

// This is for fetching WITH access token
const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const crawler = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRAWLER_URL,
})

const setTokenApi = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export { api, axios, crawler, setTokenApi }
export default axios
