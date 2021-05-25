console.log("It is working");


document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#botonPaginaProblema').addEventListener('click', () => cargarProblema());
    document.querySelector('#botonPaginaSolucion').addEventListener('click', () => cargarSolucion());
    document.querySelector('#botonPaginaImplementacion').addEventListener('click', () => cargarImplementacion());
    document.querySelector('#botonASolucion').addEventListener('click', () => cargarSolucion());
    document.querySelector('#botonAImplementacion').addEventListener('click', () => cargarImplementacion());
    document.querySelector('#desarrolloSimulacion').addEventListener('click', () => simulacion());

  
    // By default, load the inbox
    cargarProblema();
  });


function simulacion () {
    const precioChoque = 2333700
    const numeroChoques = parseInt(document.querySelector('#selectorSimulacion').value);
    console.log(numeroChoques)
    var costoAseguradoraNueva = numeroChoques * precioChoque * 0.5;
    var choques = [];
    var total = 0;
    for(let i = 0; i < numeroChoques; i++){
        
        choques.push(Math.floor(Math.random() * (4000000 - 667400 + 1)) + 667400)
    }
    for(let y = 0; y < numeroChoques; y++){
        total += choques[y];
    }
    var costoAseguradoraVieja = total / 2;
    console.log(total)
    console.log(costoAseguradoraNueva)
    console.log(costoAseguradoraVieja)
    document.querySelector('#montoActual').innerHTML = costoAseguradoraVieja;
    document.querySelector('#montoNuevo').innerHTML = costoAseguradoraNueva;
}

function toTheTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

function cargarProblema() {
    document.querySelector('#paginaProblema').style.display = 'block';
    document.querySelector('#paginaSolucion').style.display = 'none';
    document.querySelector('#paginaImplementacion').style.display = 'none';

    toTheTop()
}

function cargarSolucion() {
    document.querySelector('#paginaProblema').style.display = 'none';
    document.querySelector('#paginaSolucion').style.display = 'block';
    document.querySelector('#paginaImplementacion').style.display = 'none';

    toTheTop()
}

function cargarImplementacion() {
    document.querySelector('#paginaProblema').style.display = 'none';
    document.querySelector('#paginaSolucion').style.display = 'none';
    document.querySelector('#paginaImplementacion').style.display = 'block';

    toTheTop()
}
