import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    addFavorite(item) {
      if (!this.isFavorite(item.mal_id)) {
        this.favorites.push(item)
      }
    },
    removeFavorite(itemId) {
      this.favorites = this.favorites.filter(item => item.mal_id !== itemId)
    }
  },
  getters: {
    isFavorite: (state) => (itemId) => {
      return state.favorites.some(item => item.mal_id === itemId)
    }
  }
})
