const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    const { input } = JSON.parse(event.body);

    // Mostrar si Netlify está reconociendo la variable
    console.log("🔑 API KEY detectada:", process.env.GEMINI_API_KEY);

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-002:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error al llamar a Gemini:", response.status, errorText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "La API de Gemini respondió con un error." })
      };
    }

    const result = await response.json();
    console.log("📩 Respuesta de Gemini:", result);

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error("❌ Error interno:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};



