const formulario = document.getElementById("formulario");
    const nome = document.getElementById("nome");
    const erroNome = document.getElementById("erroNome");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // não recarrega a página

      if (formulario.nome.value === "") {
        formulario.nome.classList.add("borda-vermelha");
        erroNome.textContent = "Campo obrigatório";
      } else {
        formulario.nome.classList.remove("borda-vermelha");
        erroNome.textContent = "";
      }
    });