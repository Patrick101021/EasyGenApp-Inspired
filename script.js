
async function generateCode() {
    const userInput = document.getElementById("userInput").value.trim();
    const resultArea = document.getElementById("resultArea");

    if (!userInput) {
        resultArea.textContent = "Por favor, describe el código que deseas generar.";
        return;
    }

    resultArea.textContent = "Generando código...";

    try {
        const response = await fetch("/.netlify/functions/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: userInput })
        });

        const data = await response.json();
        if (data.error) {
            resultArea.textContent = "Error: " + data.error;
        } else {
            resultArea.textContent = data[0]?.generated_text || "No se pudo generar código.";
        }
    } catch (error) {
        resultArea.textContent = "Error al conectar con la función: " + error.message;
    }
}
