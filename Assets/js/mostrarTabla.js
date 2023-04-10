const botonDinamico = document.querySelector('#botonDinamico');
const rankingRow = document.querySelector('#ranking');


window.addEventListener('load', function() {
    //Se setea el valor del boton como inactivo
    localStorage.setItem("boton", 'off');
    
    // Llama a la función que muestra la información
    botonDinamico.innerHTML = 'Mostrar rankings'
    rankingRow.classList.add('hidden')
  });


botonDinamico.addEventListener('click', function() {
    botonStatus = localStorage.getItem("boton")
    if (botonStatus==='off'){
      localStorage.setItem("boton", 'on');
      botonDinamico.innerHTML = 'Ocultar rankings'
      rankingRow.classList.remove('hidden')
    } else {
      localStorage.setItem("boton", 'off');
      botonDinamico.innerHTML = 'Mostrar rankings'
      rankingRow.classList.add('hidden')
    }
});

