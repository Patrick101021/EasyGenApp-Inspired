async function generateCode() {
    const userInput = document.getElementById("userInput").value.trim();
    const resultArea = document.getElementById("resultArea");

    if (!userInput) {
        resultArea.textContent = "Por favor, describe el código que deseas generar.";
        return;
    }

    resultArea.textContent = "Generando código, por favor espera...";

    const API_URL = "https://api-inference.huggingface.co/models/bigcode/starcoder";
    const HF_TOKEN = "AQUÍ_VA_TU_TOKEN"; // ← no pongas el real aquí


    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: userInput })
        });

        if (!response.ok) throw new Error("Error al conectar con la API");

        const data = await response.json();
        if (data.error) {
            resultArea.textContent = "La API respondió con un error: " + data.error;
        } else {
            resultArea.textContent = data[0]?.generated_text || "No se pudo generar código para esa descripción.";
        }
    } catch (error) {
        resultArea.textContent = "Error al conectar con la API: " + error.message;
    }
}

