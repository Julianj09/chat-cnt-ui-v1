const FASTAPI_URL = 'http://localhost:8000'; // URL de tu backend FastAPI

export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${FASTAPI_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error del backend:', errorData);
      throw new Error(errorData.detail || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error en sendMessage:', error);
    throw new Error('No se pudo conectar al servidor. Por favor, intente más tarde.');
  }
}