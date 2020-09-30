// Leer archivo
let texto;
let texto_auxiliar = ['Este', 'es', 'el', 'texto', 'original'];

let archivo = document.getElementById('archivos');
let result = document.querySelector('#resultado')
archivo.addEventListener('change', leerTexto);


function leerTexto(evt) {
    let archivos = evt.target.files;
    let archivo = archivos[0];

    let lector = new FileReader();
    lector.addEventListener("load", obtenerTexto)
    lector.readAsText(archivo);
}

function obtenerTexto(e) {
    texto = e.target.result;
    console.log(texto);
    // ordenar
    ordenar();
}

function ordenar() {
    // String  a arreglo
    texto = texto.split(" ");
    let auxiliar, cadena = "";
    let indice;

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] != texto_auxiliar[i]) {
            indice = texto.findIndex(function(palabra) {
                return palabra == texto_auxiliar[i];
            });
            console.log(indice);
            if (indice == -1) {
                console.log('Alguna palabra no coincide');
                return;
            }

            auxiliar = texto[indice];
            texto[indice] = texto[i];
            texto[i] = auxiliar;
            console.log(texto);
            cadena = texto.toString() + '\n';
            resultado.innerHTML += `<p>${cadena}</p>`;
        }

    }


}