async function generateCode() {
  const lang = document.getElementById("language").value;
  const desc = document.getElementById("description").value.toLowerCase();
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");

  // Guardar historial
  saveToHistory(lang, desc);

  // Intentar generar con API real (simulada)
  let code = await fetchGeneratedCode(lang, desc);

  // Lógica de respaldo
  if (!code || code.startsWith("// Error")) {
    code = "// No se pudo generar código para esa descripción aún.";

    if (lang === "html" && desc.includes("formulario")) {
      code = `<form>\n  <label for="name">Nombre:</label>\n  <input type="text" id="name" name="name">\n  <input type="submit" value="Enviar">\n</form>`;
    } else if (lang === "css" && desc.includes("botón azul")) {
      code = `button {\n  background-color: blue;\n  color: white;\n  padding: 10px;\n  border: none;\n}`;
    } else if (lang === "javascript" && desc.includes("alerta")) {
      code = `alert("¡Hola! Esta es una alerta generada.");`;
    } else if (lang === "python" && desc.includes("sumar")) {
      code = `def sumar(a, b):\n    return a + b\n\nprint(sumar(5, 3))`;
    } else if (lang === "sql" && desc.includes("crear tabla")) {
      code = `CREATE TABLE usuarios (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100),\n  email VARCHAR(100)\n);`;
    } else if (lang === "php" && desc.includes("conectar mysql")) {
      code = `<?php\n$conn = new mysqli("localhost", "usuario", "clave", "basedatos");\nif ($conn->connect_error) {\n  die("Error: " . $conn->connect_error);\n}\necho "Conexión exitosa";\n?>`;
    }
  }

  output.textContent = code;
  output.classList.remove("hidden");
  copyBtn.classList.remove("hidden");
  loadHistory();
}

function copyCode() {
  const code = document.getElementById("output").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("¡Código copiado al portapapeles!");
  });
}

function saveToHistory(lang, desc) {
  let history = JSON.parse(localStorage.getItem("codegen_history") || "[]");
  history.unshift({ language: lang, description: desc, time: new Date().toLocaleString() });
  history = history.slice(0, 10); // Máximo 10 entradas
  localStorage.setItem("codegen_history", JSON.stringify(history));
}

function loadHistory() {
  const historyDiv = document.getElementById("history");
  if (!historyDiv) return;

  const history = JSON.parse(localStorage.getItem("codegen_history") || "[]");
  historyDiv.innerHTML = "<h3>🕘 Historial</h3>";
  history.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${item.language.toUpperCase()}</strong>: ${item.description}<br><small>${item.time}</small></p>`;
    div.classList.add("card");
    historyDiv.appendChild(div);
  });
}

window.onload = loadHistory;
