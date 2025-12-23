function mostrarMayusAMinus() { 
    document.getElementById("menu").style.display = "none"; 
    document.getElementById("mayusAMinus").style.display = "block"; 
} 

function mostrarMinusAMayus() { 
    document.getElementById("menu").style.display = "none"; 
    document.getElementById("minusAMayus").style.display = "block"; 
} 

function volverMenu(seccion) { 
    document.getElementById(seccion).style.display = "none"; 
    document.getElementById("menu").style.display = "block"; 
} 

function convertirMayusAMinus() {
    var texto = document.getElementById("textoMayus").value;
    var resultado = texto.toLowerCase();
    document.getElementById("resultadoMayus").innerText = resultado;
}

function convertirMinusAMayus() {
    var texto = document.getElementById("textoMinus").value;
    var resultado = texto.toUpperCase();
    document.getElementById("resultadoMinus").innerText = resultado;
}