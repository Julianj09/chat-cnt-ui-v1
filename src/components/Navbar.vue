<template>
  <nav class="navbar">
    <div class="navbar-content">
      <img 
        src="../assets/logo.png" 
        alt="ChatCNT Logo" 
        class="navbar-logo"
      >
    </div>
  </nav>
</template>

<script setup>
// No se necesitan imports adicionales
</script>

<style scoped>
.navbar {
  background-color: #FFFFC3;
  width: 100%;
  position: fixed; /* Cambiado a fixed para mejor control */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0; /* Eliminamos el padding del contenedor principal */
}

.navbar-content {
  max-width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 40px;
  width: auto;
  margin-left: 40px;
}
</style>