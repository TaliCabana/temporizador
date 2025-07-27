// 6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

// Obtener elementos del DOM
const inputTiempo = document.getElementById("inputTiempo");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnReset");

// Variables de control (manejan el estado interno del programa):
let tiempoRestante = 0; // guarda cuántos segundos le quedan al temporizador. Va disminuyendo de uno en uno cada segundo
let intervalo = null; // guarda el identificador devuelto por setInterval. Esto permite detener el temporizador después con clearInterval

// Función para actualizar el input con el tiempo restante
function mostrarTiempo() {
  inputTiempo.value = tiempoRestante;
}

// Función para iniciar el temporizador:
function iniciarTemporizador(e) {
  e.preventDefault(); // para evitar que se recargue el formulario

  // si ya hay un intervalo activo, no creamos otro
  if (intervalo !== null) return;

  // si ya hay un tiempo cargado previamente (desde pausa). sigo desde ahí
  if (tiempoRestante <= 0) {
    const valorInput = parseInt(inputTiempo.value);

    if (isNaN(valorInput) || valorInput <= 0) {
      alert("⚠ Ingresá un tiempo válido en segundos.");
    }
    tiempoRestante = valorInput;
  }
  intervalo = setInterval(()=>{
    tiempoRestante--;
    mostrarTiempo();

    if(tiempoRestante <= 0){
        clearInterval(intervalo);
        intervalo = null;
        alert("⏰ ¡Tiempo finalizado!")
    }
  }, 1000) // Ejecuta la función cada 1000 milisegundos (c/1seg)
}

// Función para PAUSAR el temporizador
function pausarTemporizador(e){
    e.preventDefault();

    clearInterval(intervalo);
    intervalo = null;
}

// Función para RESETEAR el temporizador:
function resetearTemporizador(e){
    e.preventDefault();

    clearInterval(intervalo)
    intervalo=null;
    tiempoRestante=0;
    mostrarTiempo();
}

// Eventos:
btnIniciar.addEventListener("click",iniciarTemporizador);
btnPausar.addEventListener("click", pausarTemporizador);
btnReset.addEventListener("click", resetearTemporizador);