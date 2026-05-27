const formulario = document.getElementById("formulario");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); //não carrega a página

      const valorEmail = email.value;

      // Verifica se contém @ e .
      if (valorEmail.includes("@") && valorEmail.includes(".")) {

        email.classList.add("input-valido");
        email.classList.remove("input-invalido");

        mensagem.textContent = "E-mail válido!";
        mensagem.className = "sucesso";

      } else {

        email.classList.add("input-invalido");
        email.classList.remove("input-valido");

        mensagem.textContent = "E-mail inválido";
        mensagem.className = "erro";
      }
    });