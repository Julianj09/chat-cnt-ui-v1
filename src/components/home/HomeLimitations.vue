<template>
  <section class="limitations-section">
    <div class="section-header">
      <img src="@/assets/limitations.png" alt="Limitations" class="section-icon">
    </div>
    <ul class="limitations-list">
      <li v-for="(limitation, index) in limitations" :key="index" class="example-item">
        {{ limitation }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const limitations = [
  "No puede realizar pagos ni trámites oficiales.", 
  "No reemplaza el asesoramiento legal profesional.", 
  "Solo ofrece información basada en normas registradas y actualizadas en su base de datos."
];
</script>

<style scoped>
.limitations-section {
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

.limitations-list {
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