<script setup>
// TheNavbar is auto-imported
</script>

<template>
  <div class="app-layout">
    <header>
      <TheNavbar />
    </header>

    <main class="main-content container">
      <slot />
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2024 El Col·leccionista Funcional</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.app-footer {
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 1rem 0;
  text-align: center;
  margin-top: auto;
}
</style>
