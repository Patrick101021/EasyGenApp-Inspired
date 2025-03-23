
async function generateCode() {
    const userInput = document.getElementById("userInput").value.trim();
    const resultArea = document.getElementById("resultArea");

    if (!userInput) {
        resultArea.textContent = "Por favor, escribe lo que deseas generar.";
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
        resultArea.textContent = data[0]?.generated_text || "No se pudo generar el código.";
    } catch (error) {
        resultArea.textContent = "Error: " + error.message;
    }
}
