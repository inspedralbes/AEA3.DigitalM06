<script setup>
// 2. Usar el composable para obtener estado y lógica reactivos
const { query, results, loading, error, search } = useSearch()

// Mantenemos este estado local para saber si ya se ha realizado una primera búsqueda
const hasSearched = ref(false)

// 3. Crear una función que conecte el evento del SearchBar con el composable
const handleSearch = async (searchQuery) => {
  query.value = searchQuery // Actualizamos el 'query' del composable
  hasSearched.value = true  // Marcamos que la búsqueda ha sido realizada
  await search()            // Ejecutamos la búsqueda del composable
}
</script>

<template>
  <div class="search-page">
    <div class="header-section">
      <h1>Cerca d'Anime</h1>
      <p>Explora el catàleg complet</p>
    </div>
    
    <!-- El SearchBar sigue emitiendo el evento 'search' como antes -->
    <SearchBar @search="handleSearch" />

    <!-- 4. Usar el estado 'loading' del composable -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Cercant...</p>
    </div>

    <!-- 5. Usar el estado 'error' del composable -->
    <div v-if="error" class="alert alert-error">
      {{ error }}
    </div>

    <!-- 6. La condición para mostrar el estado vacío ahora usa 'loading' del composable -->
    <div v-if="!loading && hasSearched && results.length === 0" class="empty-state">
      <p>No s'han trobat resultats per a la teva cerca.</p>
    </div>

    <!-- 7. Usar el estado 'results' del composable para renderizar la lista -->
    <div class="results-grid">
      <ItemCard 
        v-for="item in results" 
        :key="item.mal_id" 
        :item="item" 
      />
    </div>
  </div>
</template>

<style scoped>
/* Los estilos no cambian */
.header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.header-section h1 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.header-section p {
  color: var(--text-light);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--text-light);
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.alert {
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  text-align: center;
}

.alert-error {
  background-color: #fde8e8;
  color: #c0392b;
  border: 1px solid #fadbd8;
}
</style>
