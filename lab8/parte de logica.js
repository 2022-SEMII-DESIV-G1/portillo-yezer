function repetida(){
    var repetidor = 1;
    var letra = [];
    var repetir = [];

    let cadena = document.getElementById("labell").value;
    
    cadena = cadena.toUpperCase().replace(/ /g, "").split("").sort();

    for(let i = 0; i < cadena.length; i++){
            if(cadena[i + 1] === cadena[i] ){
                repetidor ++;
            }else{
                letra.push(cadena[i]);
                repetir.push(repetidor);
                repetidor = 1;
            }
    }

    document.getElementById("limpiarr").style.visibility = "visible";
    
    document.getElementById("respuesta").innerHTML= "Cantidad: " + repetir +"  letras: " + letra;

}

function limpiado() {
    document.getElementById("labell").value = "";
    document.getElementById("limpiarr").style.visibility = "hidden"; 
    document.getElementById("respuesta").innerHTML= " ";
  }