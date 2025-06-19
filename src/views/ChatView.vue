<script setup>
import Navbar from '@/components/Navbar.vue'
import ChatChats from '@/components/chat/ChatChats.vue'
import ChatActions from '@/components/chat/ChatActions.vue'
import ChatConversation from '@/components/chat/ChatConversation.vue'
import { useRouter } from 'vue-router'
import { useChat } from '@/composables/useChat'

const router = useRouter()
const { messages, isLoading, handleSendMessage, handleNewChat } = useChat()

const handleBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="chat-view">
    <Navbar />
    
    <div class="main-content">
      <!-- Sidebar izquierdo -->
      <div class="sidebar">
        <div class="sidebar-chats">
          <ChatChats @new-chat="handleNewChat" />
        </div>

        <div class="sidebar-actions">
          <ChatActions @back="handleBack" @clear="handleNewChat" /> 
        </div>
      </div>
      
      <!-- Área principal de chat -->
      <div class="chat-area">
        <ChatConversation 
          :messages="messages" 
          :is-loading="isLoading"
          @send-message="handleSendMessage" 
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos actuales se mantienen igual */
.chat-view {
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0;
}

.main-content {
  display: flex;
  width: 100%;
  height: calc(100vh - 72px);
}

.sidebar {
  position: fixed;
  top: 72px;
  left: 0;
  width: 280px;
  height: calc(100vh - 72px);
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.sidebar-chats {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.sidebar-actions {
  padding: 1rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.chat-area {
  position: fixed;
  top: 72px;
  left: 281px;
  width: calc(100% - 280px);
  height: calc(100vh - 72px);
  background-color: white;
  overflow-y: auto;
}

/* Estilos responsivos */
@media (max-width: 600px) {
  .sidebar {
    transform: translateX(-100%);
    width: 280px;
    z-index: 100;
    transition: transform 0.3s ease;
  }

  .sidebar.active {
    transform: translateX(0);
  }
  
  .chat-area {
    position: fixed;
    left: 0px;
    margin-left: 0;
    width: 100%;
  }
}
</style>