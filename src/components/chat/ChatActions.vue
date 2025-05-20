<template>
  <div class="actions-container">
    <button class="action-btn clear-btn" @click="$emit('clear')">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
      Clear
    </button>
    <button class="action-btn back-btn" @click="$emit('back')">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back
    </button>
  </div>
</template>

<script setup>
defineEmits(['clear', 'back'])
</script>

<style scoped>
.actions-container {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-btn {
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.clear-btn:hover {
  background-color: #fee2e2;
}

.back-btn {
  background-color: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
}

.back-btn:hover {
  background-color: #dbeafe;
}
</style>