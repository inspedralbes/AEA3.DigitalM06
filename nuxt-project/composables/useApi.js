// src/composables/useApi.js

import axios from 'axios';

// Obtenemos la URL base de la API de Jikan desde las variables de entorno.
export function useApi() {
  const config = useRuntimeConfig();
  const API_URL = config.public.apiBaseUrl;

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return api;
}
