document.getElementById("formCadastro").addEventListener("submit", function (event) {

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmar = document.getElementById("confirmar");
    let telefone = document.getElementById("telefone");
    let cpf = document.getElementById("cpf");

    if (nome.value === "") {
        alert("Informe o nome!");
        nome.focus();
        event.preventDefault();
        return;
    }

    if (email.value === "") {
        alert("Informe o email!");
        email.focus();
        event.preventDefault();
        return;
    }

    if (senha.value === "") {
        alert("Informe a senha!");
        senha.focus();
        event.preventDefault();
        return;
    }

    if (confirmar.value === "" || confirmar.value !== senha.value) {
        alert("Confirme a senha corretamente!");
        confirmar.focus();
        event.preventDefault();
        return;
    }

    if (!validarTelefone(telefone.value)) {
        alert("Telefone inválido! Use (99) 99999-9999");
        telefone.focus();
        event.preventDefault();
        return;
    }

    if (!validarCPF(cpf.value)) {
        alert("CPF inválido!");
        cpf.focus();
        event.preventDefault();
        return;
    }

    alert("Cadastro feito com sucesso!");
});

function validarTelefone(tel) {
    let regex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
    return regex.test(tel);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += cpf[i] * (10 - i);
    let dig1 = 11 - (soma % 11);
    if (dig1 > 9) dig1 = 0;
    if (dig1 != cpf[9]) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += cpf[i] * (11 - i);
    let dig2 = 11 - (soma % 11);
    if (dig2 > 9) dig2 = 0;

    return dig2 == cpf[10];
}
