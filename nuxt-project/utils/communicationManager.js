import axios from 'axios'

export function searchApi(query) {
  const config = useRuntimeConfig()
  const apiClient = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return apiClient.get(`/anime?q=${query}`)
}

export function getItemById(id) {
  const config = useRuntimeConfig()
  const apiClient = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return apiClient.get(`/anime/${id}`)
}
