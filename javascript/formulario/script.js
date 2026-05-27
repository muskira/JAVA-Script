const form = document.getElementById('meuForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let login = form.login.value;
    let senha = form.senha.value;

    console.log(login, senha)

    form.reset()
})