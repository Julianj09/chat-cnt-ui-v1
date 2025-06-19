import { ref } from 'vue'
import { sendMessage } from '@/api/chat/service'

export const useChat = () => {
  const messages = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const handleSendMessage = async (message) => {
    messages.value.push({ 
      text: message, 
      sender: 'user',
      timestamp: new Date().toISOString()
    })
    isLoading.value = true
    error.value = null
    
    try {
      const data = await sendMessage(message)
      
      messages.value.push({
        text: data.response,
        sender: 'bot',
        sources: data.sources,
        timestamp: new Date().toISOString()
      })
      
    } catch (err) {
      error.value = err.message
      messages.value.push({
        text: err.message,
        sender: 'bot',
        isError: true,
        timestamp: new Date().toISOString()
      })
    } finally {
      isLoading.value = false
    }
  }

  const handleNewChat = () => {
    messages.value = []
    error.value = null
  }

  return {
    messages,
    isLoading,
    error,
    handleSendMessage,
    handleNewChat
  }
}