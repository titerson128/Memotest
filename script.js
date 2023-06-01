 let iconos = []
        let selecciones = []

        generarTablero(12)

        function cargarIconos() {
            iconos = [
                '<img src="imagenes/backspace-reverse.svg" width="55%">',
                '<img src="imagenes/arrow-through-heart.svg" width="55%">',
                '<img src="imagenes/bank.svg" width="55%">',
                '<img src="imagenes/balloon.svg" width="55%">',
                '<img src="imagenes/bicycle.svg" width="55%">',
                '<img src="imagenes/camera.svg" width="55%">',
                '<img src="imagenes/cart3.svg" width="55%">',
                '<img src="imagenes/bug.svg" width="55%">',
                '<img src="imagenes/brightness-high.svg" width="55%">',
                '<img src="imagenes/lightbulb.svg" width="55%">',
                '<img src="imagenes/cloud-lightning-rain.svg" width="55%">',
                '<img src="imagenes/controller.svg" width="55%">',
            ]
        }

       
        
        function generarTablero(cantidad) {
            cargarIconos()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            let partida = document.querySelector(".nuevojuego");
            if(cantidad === 12){
                partida.setAttribute("onclick","generarTablero(12)");
            }else if(cantidad === 18){
                partida.setAttribute("onclick", "generarTablero(18)");
            }else if(cantidad ===24){
                partida.setAttribute("onclick", "generarTablero(24)");
            }

            for (let i = 0; i < cantidad; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                           <img src="imagenes/cartatrasera.png" width="60%">
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones)
                selecciones = []
            }

            
        }

        function deseleccionar(selecciones) {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    trasera1.style.background = "rgb(0, 255, 0)"
                    trasera2.style.background = "rgb(0, 255, 0)"
                }
            }, 1000);
        }
