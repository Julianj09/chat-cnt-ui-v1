<template>
  <div class="conversation-container">
    <div class="messages-container">
      <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender]">
        <div class="message-content">{{ msg.text }}</div>
      </div>
      <div v-if="isLoading" class="message bot">
        <div class="message-content">Escribiendo...</div>
      </div>
    </div>
    
    <div class="input-container">
      <input
        v-model="newMessage"
        @keyup.enter="handleSend"
        placeholder="Type message..."
        :disabled="isLoading"
      />
      <button @click="handleSend" :disabled="!newMessage.trim() || isLoading">
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
}

.messages-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.message {
  margin-bottom: 1rem;
  max-width: 80%;
}

.message.user {
  margin-left: auto;
}

.message.bot {
  margin-right: auto;
}

.message-content {
  padding: 0.75rem 1rem;
  border-radius: 1rem;
}

.user .message-content {
  background-color: #00B2FF;
  color: white;
}

.bot .message-content {
  background-color: #f3f4f6;
  color: #111827;
}

.input-container {
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}

.input-container input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
}

.input-container button {
  padding: 0 1rem;
  background-color: #00B2FF;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.input-container button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>