
     // Captura o formulário
    const formulario = document.getElementById("meuFormulario");
    
    // Adiciona o evento de submit
    formulario.addEventListener("submit", function(event) {
    
    // Impede o recarregamento da página
    event.preventDefault();
    
    // Exibe a mensagem
    alert("Formulário interceptado com sucesso!");
});
