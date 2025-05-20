<script setup>
import Navbar from '@/components/Navbar.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'
import HomeCapabilities from '@/components/home/HomeCapabilities.vue'
import HomeLimitations from '@/components/home/HomeLimitations.vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.png'

const router = useRouter()

const startChat = () => {
  router.push('/chat')
}
</script>

<template>
  <div class="home-view">
    <Navbar />
    <main class="home-content">
      <div class="logo-container">
        <img :src="logo" alt="ChatCNT Logo" class="centered-logo">
      </div>
      
      <div class="sections-grid">
        <HomeExamples class="grid-item" />
        <HomeCapabilities class="grid-item" />
        <HomeLimitations class="grid-item" />
      </div>
      
      <button class="start-chat-button" @click="startChat">
        Empezar a chatear
      </button>
    </main>
  </div>
</template>

<style>
.home-view {
  padding-top: 72px;
  min-height: 100vh;
  width: 100%;
  background-color: white;
}

.home-content {
  padding: 2rem;
  max-width: 1200px; /* Aumentamos el ancho máximo */
  margin: 0 auto;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0 3rem; /* Más margen inferior */
}

.centered-logo {
  height: 80px;
  width: auto;
  max-width: 100%;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
  gap: 1.5rem; /* Espacio entre columnas */
  margin-bottom: 2rem;
}

.grid-item {
  height: 100%;
}

.start-chat-button {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  background-color: #00b3ff9d; /* Color con transparencia */
  color: black; /* Color de texto que contraste */
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 2rem auto 0;
  transition: all 0.3s;
  font-weight: bold;
}

.start-chat-button:hover {
  background-color: #00B2FF66;
}

@media (max-width: 768px) {
  .sections-grid {
    grid-template-columns: 1fr;
  }
  
  .home-content {
    padding: 1rem;
  }
}
</style>