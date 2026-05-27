const formulario = document.getElementById("formulario");
    const nome = document.getElementById("nome");
    const erroNome = document.getElementById("erroNome");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // não recarrega a página

      if (nome.value === "") {
        nome.classList.add("borda-vermelha");
        erroNome.textContent = "Campo obrigatório";
      } else {
        nome.classList.remove("borda-vermelha");
        erroNome.textContent = "";
      }
    });