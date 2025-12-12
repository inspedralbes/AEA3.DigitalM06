// src/composables/useSearch.js

import { ref } from 'vue';
import { useApi } from './useApi'; // Importamos nuestro composable de API corregido.

/**
 * Composable que gestiona el estado y la lógica para buscar en la API de Jikan.
 */
export function useSearch() {
  const query = ref('');
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const api = useApi();

  const search = async () => {
    if (!query.value.trim()) {
      results.value = [];
      return;
    }

    loading.value = true;
    error.value = null;
    console.log(`Buscando en Jikan: "${query.value}"...`);

    try {
      // Petición GET al endpoint '/anime' con el parámetro 'q'.
      const response = await api.get('/anime', {
        params: {
          q: query.value,
        },
      });
      // La API de Jikan devuelve los resultados en la propiedad 'data'.
      results.value = response.data.data;
    } catch (err) {
      console.error('Error al buscar:', err);
      error.value = 'No se pudieron obtener los resultados. Inténtalo de nuevo.';
      results.value = [];
    } finally {
      loading.value = false;
    }
  };

  return {
    query,
    results,
    loading,
    error,
    search,
  };
}
