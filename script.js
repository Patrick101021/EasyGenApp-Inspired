
const baseDeEjemplos = {
  "formulario de contacto": "<form><input type='text' placeholder='Nombre'><input type='email' placeholder='Correo'><textarea placeholder='Mensaje'></textarea><button>Enviar</button></form>",
  "juego en js": "<script>let num = Math.floor(Math.random()*10)+1; let guess = prompt('Adivina un número del 1 al 10'); alert(guess == num ? '¡Correcto!' : 'No, era ' + num);</script>",
  "html absurdo": "<marquee><h1>🐸💥 Bienvenido al templo de los sapos explosivos 💥🐸</h1></marquee>",
  "css fuego": "<style>body{background:black} .fuego{animation: burn 1s infinite;}</style><div class='fuego'>🔥🔥🔥</div>",
  "calculadora simple": "<input id='a'><input id='b'><button onclick='c.innerText=+a.value + +b.value'>Sumar</button><div id='c'></div>"
};

function buscarCodigo() {
    const entrada = document.getElementById("userInput").value.toLowerCase();
    const salida = document.getElementById("resultArea");

    for (let clave in baseDeEjemplos) {
        if (entrada.includes(clave)) {
            salida.textContent = baseDeEjemplos[clave];
            return;
        }
    }

    salida.textContent = "No se encontró un ejemplo para esa descripción. ¡Prueba con otra!";
}
