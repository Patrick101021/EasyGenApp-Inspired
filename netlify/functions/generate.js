const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    if (!event.body) {
      throw new Error("No se recibió body en la solicitud.");
    }

    const { input } = JSON.parse(event.body);
    console.log("🔑 API KEY detectada:", process.env.GEMINI_API_KEY);
    console.log("📥 Texto recibido:", input);

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-002:generateContent?key=" + process.env.GEMINI_API_KEY;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: input }] }]
      })
    });

    const responseText = await response.text();
    console.log("📡 Respuesta en texto:", responseText);

    if (!response.ok) {
      console.error("❌ Respuesta NO OK - Código:", response.status);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Error desde la API de Gemini. Código: " + response.status })
      };
    }

    const result = JSON.parse(responseText);
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






