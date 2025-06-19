<template>
  <div class="conversation-container">
    <div class="messages-container">
      <div 
        v-for="(msg, index) in messages" 
        :key="index" 
        :class="['message', msg.sender, { 'error': msg.isError }]"
      >
        <div class="message-header">
          <span class="sender">{{ msg.sender === 'user' ? 'Tú' : 'ChatCNT' }}</span>
          <span class="timestamp">{{ formatTimestamp(msg.timestamp) }}</span>
        </div>
        <div class="message-content">{{ msg.text }}</div>
        

        <!-- Comentado temporalmente la sección de fuentes -->
        
        <div v-if="msg.sources && msg.sources.length" class="sources">
          <div class="sources-title">Fuentes consultadas:</div>
          <div 
            v-for="(source, i) in msg.sources" 
            :key="i" 
            class="source-item"
          >
            <span class="source-file">{{ source.archivo }}</span>
            <span v-if="source.pagina" class="source-page">Página {{ source.pagina }}</span>
          </div>
        </div>
        

      </div>
      
      <div v-if="isLoading" class="message bot">
        <div class="message-content">
          <div class="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="input-container">
      <input
        v-model="newMessage"
        @keyup.enter="handleSend"
        placeholder="Escribe tu pregunta sobre el código de tránsito..."
        :disabled="isLoading"
      />
      <button 
        @click="handleSend" 
        :disabled="!newMessage.trim() || isLoading"
        aria-label="Enviar mensaje"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  messages: Array,
  isLoading: Boolean
})

const emit = defineEmits(['send-message'])
const newMessage = ref('')

const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const handleSend = () => {
  if (newMessage.value.trim()) {
    emit('send-message', newMessage.value)
    newMessage.value = ''
  }
}
</script>

<style scoped>
.conversation-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9fafb;
}

.messages-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 1.5rem;
  max-width: 85%;
  animation: fadeIn 0.3s ease;
}

.message.user {
  margin-left: auto;
}

.message.bot {
  margin-right: auto;
}

.message.error {
  border-left: 4px solid #ef4444;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.sender {
  font-weight: 600;
}

.timestamp {
  opacity: 0.8;
}

.message-content {
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  word-break: break-word;
}

.user .message-content {
  background-color: #00B2FF;
  color: white;
  border-bottom-right-radius: 0.25rem;
}

.bot .message-content {
  background-color: white;
  color: #111827;
  border: 1px solid #e5e7eb;
  border-bottom-left-radius: 0.25rem;
}

.error .message-content {
  background-color: #fee2e2;
  color: #b91c1c;
}

.sources {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  font-size: 0.75rem;
}

.sources-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #4b5563;
}

.source-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
}

.source-file {
  color: #374151;
}

.source-page {
  color: #6b7280;
}

.input-container {
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: white;
}

.input-container input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  transition: border-color 0.2s;
}

.input-container input:focus {
  outline: none;
  border-color: #00B2FF;
}

.input-container button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: #00B2FF;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.input-container button:hover {
  background-color: #0095e0;
}

.input-container button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #00B2FF;
}

.typing-indicator {
  display: flex;
  padding: 0.5rem;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #9ca3af;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 1.4s infinite ease-in-out both;
}

.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1) }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px) }
  to { opacity: 1; transform: translateY(0) }
}
</style>