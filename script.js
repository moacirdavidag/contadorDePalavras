var campoTexto = document.querySelector("#text");
var ch = document.querySelector("#ch");
var totalPalavras = document.querySelector("#totalWords");

campoTexto.addEventListener("keydown", contador);
campoTexto.addEventListener("keyup", contador);

function contador() {
    let value = campoTexto.value;
    let total = campoTexto.value.split(" ").length;
    ch.innerHTML = `${value.length}`;
    if(value === "") {
        total = 0;
    }
    totalPalavras.innerHTML = `${total}`;
}

