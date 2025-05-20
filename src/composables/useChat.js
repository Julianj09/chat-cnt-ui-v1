import { ref } from 'vue'
import { sendMessage } from '@/api/chat/service'

export const useChat = () => {
  const messages = ref([])
  const isLoading = ref(false)

  const handleSendMessage = async (message) => {
    messages.value.push({ text: message, sender: 'user' })
    isLoading.value = true
    
    try {
      const data = await sendMessage(message)
      messages.value.push({
        text: `ChatCNT: ${data.response || data.message || 'Respuesta recibida'}`,
        sender: 'bot'
      })
    } catch (error) {
      messages.value.push({
        text: 'API en mal estado - No se pudo conectar al servidor',
        sender: 'bot'
      })
    } finally {
      isLoading.value = false
    }
  }

  const handleNewChat = () => {
    messages.value = []
  }

  return {
    messages,
    isLoading,
    handleSendMessage,
    handleNewChat
  }
}