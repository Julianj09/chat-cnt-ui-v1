<template>
  <section class="examples-section">
    <div class="section-header">
      <img src="@/assets/examples.png" alt="Examples" class="section-icon">
    </div>
    <ul class="examples-list">
      <li v-for="(example, index) in examples" :key="index" class="example-item">
        {{ example }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const examples = [
  "¿Cuál es la multa por conducir sin licencia?", 
  "¿Qué dice el artículo 131 del Código Nacional de Tránsito?", 
  "¿Qué sanción aplica si no uso el casco en una moto?"
];
</script>

<style scoped>
.examples-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-header {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  height: 50px;
  width: auto;
}

.examples-list {
  list-style-type: none;
  padding: 0;
  flex-grow: 1;
}

.example-item {
  background: #00B2FF33;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.example-item:hover {
  background: #00B2FF66;
}
</style>