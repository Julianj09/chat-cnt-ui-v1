<template>
  <section class="capabilities-section">
    <div class="section-header">
      <img src="@/assets/capabilities.png" alt="Capabilities" class="section-icon">
    </div>
    <ul class="capabilities-list">
      <li v-for="(capability, index) in capabilities" :key="index" class="example-item">
        {{ capability }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const capabilities = [
 "Responde preguntas sobre normas del Código Nacional de Tránsito colombiano.", 
 "Identifica infracciones comunes y muestra la sanción correspondiente.", 
 "Brinda recomendaciones sobre infracciones frecuentes y cómo evitarlas."
];
</script>

<style scoped>
.capabilities-section {
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

.capabilities-list {
  list-style-type: none;
  padding: 0;
  flex-grow: 1;
}

.example-item {
  background: #00B2FF33;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.example-item:hover {
  background: #00B2FF66;
}
</style>