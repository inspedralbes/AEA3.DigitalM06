<script setup>
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <div class="logo">
        <NuxtLink to="/">
          <span class="logo-icon">⛩️</span> AnimeCollector
        </NuxtLink>
      </div>
      <div class="nav-links">
        <NuxtLink to="/" active-class="active">Home</NuxtLink>
        <NuxtLink to="/search" active-class="active">Cerca</NuxtLink>
        <NuxtLink to="/favorites" active-class="active">Favorits</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--white);
  box-shadow: var(--shadow);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-weight: 500;
  color: var(--text-light);
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
}
</style>
