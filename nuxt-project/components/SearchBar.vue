<script setup>


const emit = defineEmits(['search'])
const searchQuery = ref('')

const triggerSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value)
  }
}
</script>

<template>
  <div class="search-bar-container">
    <div class="input-group">
      <input 
        v-model="searchQuery" 
        @keyup.enter="triggerSearch"
        placeholder="Cerca el teu anime preferit..." 
        type="text" 
        class="form-control"
      />
      <button @click="triggerSearch" class="btn btn-primary">
        Cercar
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-bar-container {
  max-width: 600px;
  margin: 0 auto 2rem;
}

.input-group {
  display: flex;
  gap: 10px;
}

.form-control {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-control:focus {
  border-color: var(--primary-color);
}

.btn {
  padding: 0 24px;
  font-size: 1rem;
}
</style>
