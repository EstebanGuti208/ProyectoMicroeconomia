botonPaginaProblema = document.querySelector('#botonPaginaProblema')
botonPaginaSolucion = document.querySelector('#botonPaginaSolucion')
botonPaginaImplementacion = document.querySelector('#botonPaginaImplementacion')

botonPaginaProblema.onclick = function() {
    document.getElementById('paginaProblema').style.display="visible";
    document.getElementById('paginaSolucion').style.visibility="block";
    document.getElementById('paginaImplementacion').style.visibility="block";

}

botonPaginaSolucion.onclick = function() {
    document.getElementById('paginaProblema').style.display="block";
    document.getElementById('paginaSolucion').style.visibility="visible";
    document.getElementById('paginaImplementacion').style.visibility="block";
}

botonPaginaImplementacion.onclick = function() {
    document.getElementById('paginaProblema').style.display="block";
    document.getElementById('paginaSolucion').style.visibility="block";
    document.getElementById('paginaImplementacion').style.visibility="visible";
}