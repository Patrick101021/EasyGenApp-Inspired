
async function generateCode() {
  const userInput = document.getElementById("userInput").value.trim();
  const resultArea = document.getElementById("resultArea");

  if (!userInput) {
    resultArea.textContent = "Por favor, escribe lo que deseas generar.";
    return;
  }

  resultArea.textContent = "Generando código con Gemini...";

  try {
    const response = await fetch("/.netlify/functions/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: userInput })
    });

    const data = await response.json();
    const output = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    resultArea.textContent = output || "No se pudo generar el código.";
  } catch (err) {
    resultArea.textContent = "Error: " + err.message;
  }
}
