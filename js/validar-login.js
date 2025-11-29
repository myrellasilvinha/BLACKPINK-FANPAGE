document.getElementById("formLogin").addEventListener("submit", function (event) {

    let emailLogin = document.getElementById("emailLogin");
    let senhaLogin = document.getElementById("senhaLogin");


    if (emailLogin.value === "") {
        alert("Informe o email!");
        emailLogin.focus();
        event.preventDefault();
        return;
    }

    if (senhaLogin.value === "") {
        alert("Informe a senha!");
        senhaLogin.focus();
        event.preventDefault();
        return;
    }

    alert("Login feito com sucesso!");
});