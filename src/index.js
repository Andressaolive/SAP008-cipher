import cipher from './cipher.js';


function click(event, callback) {
    event.preventDefault();
    const message = document.getElementById('mensagem').value;
    const offset = Number(document.getElementById('chave').value);
    document.getElementById('resultadofinal').innerHTML = callback(offset, message);
}

function clickencode() {
    click(event, cipher.encode);
}

function clickdecode() {
    click(event, cipher.decode);

}
const limpar = document.getElementById("botaoresetar");
limpar.addEventListener("click", clickresetar);

function clickresetar() {
    document.getElementById("form").clickresetar();
}

document.getElementById('botaocifrar').addEventListener('click', clickencode);
document.getElementById('botaodecifrar').addEventListener('click', clickdecode);

