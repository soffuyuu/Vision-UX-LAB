let tiempoUltimoClic = 0;
document.addEventListener('click', function() {
  tiempoUltimoClic = Date.now();
});

// usando Web Speech API
function hablarTexto(texto) {
  window.speechSynthesis.cancel();
  const enunciado = new SpeechSynthesisUtterance(texto);
  enunciado.lang = "es-ES";         
  window.speechSynthesis.speak(enunciado);
}

let temporizadorEncima;

function obtenerDescripcionElemento(elemento) {
  let texto = elemento.innerText.trim();
  let nombreElemento = elemento.tagName.toLowerCase();

  if (nombreElemento === "a") {
    return (texto ? texto + " (Tipo de elemento: enlace)" : "Tipo de elemento: enlace");
  }

  if (texto) {
    return texto;
  }

  let descripcionTipo = "";
  if (nombreElemento === "input") {
    let tipoInput = elemento.getAttribute("type");
    if (tipoInput && tipoInput.toLowerCase() === "checkbox") {
      descripcionTipo = "interruptor";
    } else if (tipoInput && tipoInput.toLowerCase() === "text") {
      descripcionTipo = "campo de texto";
    } else {
      descripcionTipo = "campo de entrada";
    }
  } else if (nombreElemento === "button") {
    descripcionTipo = "botón";
  } else if (nombreElemento === "img") {
    // Aquí es donde se agrega la lógica para leer el atributo 'alt' de la imagen
    let altTexto = elemento.getAttribute("alt");
    if (altTexto) {
      descripcionTipo = "Imagen: " + altTexto;
    } else {
      descripcionTipo = "Imagen sin descripción";
    }
  } else if (nombreElemento === "div") {
    if (elemento.classList.contains("slider")) {
      descripcionTipo = "interruptor";
    } else {
      descripcionTipo = "div";
    }
  } else if (nombreElemento === "li") {
    descripcionTipo = "elemento de lista";
  } else if (nombreElemento === "select") {
    descripcionTipo = "lista de selección";
  } else if (nombreElemento === "textarea") {
    descripcionTipo = "área de texto";
  } else {
    descripcionTipo = nombreElemento;
  }

  return descripcionTipo ? `Tipo de elemento: ${descripcionTipo}` : "";
}

function manejarMouseEncima(evento) {
  clearTimeout(temporizadorEncima);
  
  if (Date.now() - tiempoUltimoClic < 500) return; 
  
  temporizadorEncima = setTimeout(() => {
    const objetivo = evento.target;
    const descripcion = obtenerDescripcionElemento(objetivo);
    if (descripcion) {
      hablarTexto(descripcion);
    }
  }, 500); 
}

function manejarMouseFuera() {
  clearTimeout(temporizadorEncima);
  window.speechSynthesis.cancel();
}

function activarLector() {
  document.addEventListener("mouseover", manejarMouseEncima);
  document.addEventListener("mouseout", manejarMouseFuera);
  document.body.style.cursor = "url('./recursos/cursor-lector.png'), auto";
}

function desactivarLector() {
  document.removeEventListener("mouseover", manejarMouseEncima);
  document.removeEventListener("mouseout", manejarMouseFuera);
  window.speechSynthesis.cancel();
  document.body.style.cursor = "default";
}

window.addEventListener("beforeunload", desactivarLector);

document.addEventListener("change", function(evento) {
  if (evento.target && evento.target.matches('input[type="checkbox"][id="lectorSwitch"]')) {
    const lectorSwitch = evento.target;
    if (lectorSwitch.checked) {
      activarLector();
    } else {
      desactivarLector();
    }
  }
});