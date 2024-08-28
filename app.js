//Definiciones
let econvertida="enter";
let iconvertida="imes";
let aconvertida="ai";
let oconvertida="ober";
let uconvertida="ufat"

//const botonEncriptar = document.getElementById('')
const textoEntrada = document.getElementById('textoOrigen');
const textoSalida = document.getElementById('textoDestino');
//console.log(textoEntrada);
//console.log(textoSalida);

function botonEncriptar(){
    const cadenaEncriptada=encriptar(textoEntrada.value);
    textoSalida.value = cadenaEncriptada;
    textoEntrada.value="";
    //console.log(cadenaEncriptada);
}
function botonDesencriptar(){
    const cadenaEncriptada=desencriptar(textoEntrada.value);
    textoSalida.value = cadenaEncriptada;
    textoEntrada.value="";
    //console.log(cadenaEncriptada);
}



function encriptar(cadenaEncriptada){
    let matrizCodigo = [["e",econvertida],["i",iconvertida],["a",aconvertida],["o",oconvertida],["u",uconvertida]];
    cadenaEncriptada=cadenaEncriptada.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function desencriptar(cadenaEncriptada){
    let matrizCodigo = [["e",econvertida],["i",iconvertida],["a",aconvertida],["o",oconvertida],["u",uconvertida]];
    cadenaEncriptada=cadenaEncriptada.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][1])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return cadenaEncriptada;
}

