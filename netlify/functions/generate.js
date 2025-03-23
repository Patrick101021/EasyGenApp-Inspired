const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    const { input } = JSON.parse(event.body);

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      }
    );

    const result = await response.json();

    // 👇 Log para ver si llega respuesta clara o con error
    console.log("Respuesta de Gemini:", result);

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error("Error interno:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

