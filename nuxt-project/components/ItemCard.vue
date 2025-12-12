<script setup>
const props = defineProps(['item'])
const store = useFavoritesStore()
</script>

<template>
  <div class="item-card">
    <div class="image-container">
      <img :src="item.images.jpg.image_url" :alt="item.title" loading="lazy" />
      <div class="overlay">
        <button 
          v-if="store.isFavorite(item.mal_id)" 
          @click="store.removeFavorite(item.mal_id)"
          class="fav-btn remove"
          title="Remove from Favorites"
        >
          ❤️
        </button>
        <button 
          v-else 
          @click="store.addFavorite(item)"
          class="fav-btn add"
          title="Add to Favorites"
        >
          🤍
        </button>
      </div>
    </div>
    <div class="content">
      <h3 class="title" :title="item.title">{{ item.title }}</h3>
      <div class="meta">
        <span class="type" v-if="item.type">{{ item.type }}</span>
        <span class="year" v-if="item.year">{{ item.year }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.image-container {
  position: relative;
  padding-top: 140%; /* Aspect Ratio */
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fav-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}

.fav-btn:hover {
  transform: scale(1.1);
}

.content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--secondary-color);
}

.meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-light);
}

.type {
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
