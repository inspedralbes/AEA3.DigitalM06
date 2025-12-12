<script setup>
const store = useFavoritesStore()
</script>

<template>
  <div class="favorites-page">
    <div class="header-section">
      <h1>Els teus Favorits</h1>
      <p>La teva col·lecció personal</p>
    </div>
    
    <div v-if="store.favorites.length === 0" class="empty-state">
      <div class="icon">💔</div>
      <h3>Encara no tens favorits</h3>
      <p>Vés a la pàgina de cerca per afegir els teus animes preferits.</p>
      <NuxtLink to="/search" class="btn btn-primary">Anar a Cerca</NuxtLink>
    </div>

    <div class="results-grid">
      <ItemCard 
        v-for="item in store.favorites" 
        :key="item.mal_id" 
        :item="item" 
      />
    </div>
  </div>
</template>

<style scoped>
.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.header-section h1 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 600px;
  margin: 0 auto;
}

.empty-state .icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.empty-state p {
  color: var(--text-light);
  margin-bottom: 2rem;
}
</style>
