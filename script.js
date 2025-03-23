
const baseDeEjemplos = {
    "formulario de contacto": "<form><input type='text' placeholder='Nombre'><input type='email' placeholder='Correo'><textarea placeholder='Mensaje'></textarea><button>Enviar</button></form>",
    "juego en js": "<script>let num = Math.floor(Math.random()*10)+1; let guess = prompt('Adivina un número del 1 al 10'); alert(guess == num ? '¡Correcto!' : 'No, era ' + num);</script>",
    "html absurdo": "<marquee><h1>🐸💥 Bienvenido al templo de los sapos explosivos 💥🐸</h1></marquee>",
    "css fuego": "<style>body{background:black} .fuego{animation: burn 1s infinite;}@keyframes burn{0%{opacity:1}100%{opacity:0.3}}</style><div class='fuego'>🔥🔥🔥</div>",
    "calculadora simple": "<input id='a'><input id='b'><button onclick='c.innerText=+a.value + +b.value'>Sumar</button><div id='c'></div>",
    "temporizador": "<input type='number' id='tiempo'><button onclick='setTimeout(()=>alert(\"¡Tiempo!\"), tiempo.value*1000)'>Iniciar</button>",
    "reloj digital": "<div id='reloj'></div><script>setInterval(()=>{document.getElementById('reloj').textContent=new Date().toLocaleTimeString()},1000)</script>",
    "galería de imágenes": "<div style='display:flex;gap:10px'><img src='https://via.placeholder.com/100'><img src='https://via.placeholder.com/100'><img src='https://via.placeholder.com/100'></div>",
    "modo oscuro": "<button onclick='document.body.classList.toggle(\"oscuro\")'>Modo oscuro</button><style>.oscuro{background:#111;color:#eee}</style>",
    "acordeón": "<div onclick='this.nextElementSibling.style.display=this.nextElementSibling.style.display==\"none\"?\"block\":\"none\"'>Haz clic</div><div style='display:none'>Contenido oculto</div>",
    "to-do list": "<input id='tarea'><button onclick='lista.innerHTML+=`<li>${tarea.value}</li>`'>Agregar</button><ul id='lista'></ul>",
    "contador de clics": "<button onclick='this.innerText=++contador'>0</button><script>let contador=0</script>",
    "generador de colores": "<button onclick='document.body.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`'>Color Aleatorio</button>",
    "validador de email": "<input id='email'><button onclick='alert(/^\\S+@\\S+\\.\\S+$/.test(email.value)?\"Válido\":\"No válido\")'>Validar</button>",
    "reproductor de audio": "<audio controls><source src='https://www.w3schools.com/html/horse.mp3' type='audio/mpeg'></audio>",
    "video embebido": "<iframe width='300' height='200' src='https://www.youtube.com/embed/dQw4w9WgXcQ' allowfullscreen></iframe>",
    "drag and drop": "<div draggable='true' ondragstart='event.dataTransfer.setData(\"text\", this.id)' id='dragme'>Arrástrame</div><div ondrop='event.preventDefault();let data=event.dataTransfer.getData(\"text\");this.appendChild(document.getElementById(data))' ondragover='event.preventDefault()' style='width:200px;height:100px;border:1px solid'>Zona de drop</div>",
    "generador de contraseñas": "<button onclick='alert([...Array(12)].map(_=>String.fromCharCode(33+Math.random()*94|0)).join(\"\"))'>Generar contraseña</button>",
    "alerta personalizada": "<button onclick='alert(\"¡Hola desde tu app!\")'>Alerta</button>",
    "botón sorpresa": "<button onclick='this.innerText=Math.random()>0.5?\"😎 Win\":\"💀 Fail\"'>Sorpresa</button>",
    "modo fiesta": "<button onclick='setInterval(()=>document.body.style.backgroundColor=`#${Math.random()*0xFFFFFF<<0}`,200)'>Fiesta 🎉</button>",
    "datos del navegador": "<pre id='info'></pre><script>info.textContent = JSON.stringify(navigator, null, 2)</script>",
    "efecto typing": "<div id='type'></div><script>let t='Escribiendo...';let i=0;setInterval(()=>{type.textContent+=t[i++]||''},100)</script>",
    "reconocimiento de voz": "<button onclick='rec.start()'>Habla</button><div id='texto'></div><script>let rec=new webkitSpeechRecognition();rec.onresult=e=>texto.textContent=e.results[0][0].transcript</script>",
    "verificador de edad": "<input id='edad' type='number'><button onclick='alert(+edad.value>=18?\"Mayor\":\"Menor\")'>Verificar edad</button>",
    "cambiador de tema": "<button onclick='document.body.className=document.body.className==\"tema1\"?\"tema2\":\"tema1\"'>Cambiar tema</button><style>.tema1{background:white;color:black}.tema2{background:black;color:white}</style>",
    "texto animado": "<h1 style='animation: mover 2s infinite alternate'>¡Hola!</h1><style>@keyframes mover{from{transform:translateX(0)}to{transform:translateX(100px)}}</style>",
    "buscador en lista": "<input oninput='filtrar(this.value)'><ul id='list'><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><script>function filtrar(txt){[...list.children].forEach(li=>li.style.display=li.textContent.toLowerCase().includes(txt.toLowerCase())?'block':'none')}</script>"
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
