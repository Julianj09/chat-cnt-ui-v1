<template>
  <div class="chat-chats-container">
    <button class="new-chat-button" @click="handleNewChat">
      <span class="plus-icon">+</span> New Chat
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['new-chat'])

const handleNewChat = () => {
  if (confirm('¿Estás seguro de que quieres comenzar una nueva conversación?')) {
    emit('new-chat')
  }
}
</script>

<style scoped>
.chats-container {
  height: 100%;
}

.new-chat-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.new-chat-btn:hover {
  background-color: #f3f4f6;
}
</style>