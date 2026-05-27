    // Seleciona os elementos
    let aceite = document.getElementById("aceite");
    let btnEnviar = document.getElementById("btnEnviar");

    // Evento de mudança no checkbox
    aceite.addEventListener("change", function () {

      // Se estiver marcado
      if (aceite.checked === true) {
        btnEnviar.disabled = false;
      } 
      // Se estiver desmarcado
      else {
        btnEnviar.disabled = true;
      }

    });