
     // Captura o formulário
    const formulario = document.getElementById("meuFormulario");
    
    // Adiciona o evento de submit
    formulario.addEventListener("submit", function(evento) {
    
    // Impede o recarregamento da página
    evento.preventDefault();
    
    // Exibe a mensagem
    alert("Formulário interceptado com sucesso!");
});
