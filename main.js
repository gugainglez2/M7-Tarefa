const form = document.getElementById('form-valida-numero');

function validaNumeros(A, B) {
    return B > A;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-a').value;
    const numeroB = document.getElementById('numero-b').value;
    const containerMensagem = document.querySelector('.message');
    containerMensagem.classList.remove('hidden');

    const formEValido = validaNumeros(Number(numeroA), Number(numeroB));
    if (formEValido) {
        containerMensagem.innerHTML = "Formulário válido!";
        containerMensagem.classList.remove('error');
        containerMensagem.classList.add('success');
    } else {
        containerMensagem.innerHTML = "Formulário inválido...";
        containerMensagem.classList.remove('success');
        containerMensagem.classList.add('error');
    }
});