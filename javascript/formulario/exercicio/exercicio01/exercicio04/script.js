// Seleciona os elementos
const aceite = document.getElementById("aceite");
const btnEnviar = document.getElementById("btnEnviar");

// Adiciona o evento change ao checkbox
aceite.addEventListener("change", function () {

  // Verifica se o checkbox está marcado
  if (aceite.checked === true) {
    btnEnviar.disabled = false; // habilita o botão
  } else {
    btnEnviar.disabled = true; // desabilita o botão
  }

});