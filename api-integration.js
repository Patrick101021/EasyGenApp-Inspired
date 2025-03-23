// Simulación de integración con una API real (como OpenAI o Hugging Face)

async function fetchGeneratedCode(language, prompt) {
  const endpoint = "https://api.fakecodegen.ai/generate"; // Reemplazar con API real
  const body = {
    language: language,
    prompt: prompt
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer TU_API_KEY"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    return data.code || "// No se recibió código válido desde la API.";
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return "// Error al conectar con la API.";
  }
}
