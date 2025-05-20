const API_KEY = '';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const sendMessage = async (message, options = {}) => {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: message }]
        }],
        generationConfig: {
          maxOutputTokens: options.maxLength || 200, // Limita la longitud de la respuesta
          temperature: options.temperature || 0.3,    // Controla la creatividad (0.0 a 1.0)
          topP: options.topP || 0.8,                 // Controla la diversidad de respuestas
          topK: options.topK || 40,                  // Limita las opciones consideradas
          stopSequences: options.stopSequences || [] // Secuencias donde debe parar
        },
        safetySettings: [ // Filtros de contenido opcionales
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_ONLY_HIGH"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error detallado de Gemini:', errorData);
      throw new Error(errorData.error?.message || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('Respuesta completa de Gemini:', data);
    
    let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                      data.text || 
                      "No se pudo obtener una respuesta válida";

    // Aplicar límite de caracteres adicional si se especifica
    if (options.charLimit) {
      responseText = responseText.substring(0, options.charLimit);
    }

    return { response: responseText };
    
  } catch (error) {
    console.error('Error en sendMessage:', error);
    throw error;
  }
}