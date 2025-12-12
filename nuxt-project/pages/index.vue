<script setup>
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <h1>Benvingut al Col·leccionista Digital</h1>
      <p class="subtitle">Descobreix, cerca i guarda els teus animes preferits en un sol lloc.</p>
      <NuxtLink to="/search" class="btn btn-primary btn-lg">Comença a cercar</NuxtLink>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="icon">🔍</div>
        <h3>Cerca Ràpida</h3>
        <p>Troba qualsevol anime a l'instant utilitzant la potent API de Jikan.</p>
      </div>
      <div class="feature-card">
        <div class="icon">❤️</div>
        <h3>Favorits</h3>
        <p>Guarda les teves sèries preferides per tenir-les sempre a mà.</p>
      </div>
      <div class="feature-card">
        <div class="icon">📱</div>
        <h3>Responsive</h3>
        <p>Gaudeix de l'experiència des de qualsevol dispositiu.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem 0;
}

.hero {
  padding: 4rem 0;
  background: linear-gradient(to bottom, #eef2f3, #ffffff);
  border-radius: var(--radius);
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-lg {
  padding: 12px 32px;
  font-size: 1.1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.feature-card p {
  color: var(--text-light);
}
</style>
