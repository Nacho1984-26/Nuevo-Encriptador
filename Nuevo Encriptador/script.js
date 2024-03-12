const textArea = document.querySelector("#text-area");
const Mensaje = document.querySelector("#Mensaje");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    Mensaje.value = textoEncriptado;
}
  
        
function encriptar(fraseEncriptada){
   for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
        fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],
        matriz_code[i][1]
        );
    }
   }
   return fraseEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    Mensaje.value = textoDesencriptado;
}

function desencriptar(fraseDesencriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
       }
       return fraseDesencriptada;
}

function copy() {
    var contenido = document.querySelector("#Mensaje");
    contenido.select();
    document.execCommand("copy");
}

function cortar() {
    var contenido = document.querySelector("#text-area");
    contenido.select();
    document.execCommand("cut");
}