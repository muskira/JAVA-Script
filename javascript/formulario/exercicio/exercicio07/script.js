let texto = document.getElementById('texto')

texto.addEventListener('keyup', function(event){
    let tamanhoMaximo = 50;
    let tamanhoTexto = texto.value.length
    let tamanhoRestante = tamanhoMaximo - tamanhoTexto
    
    let contador = document.getElementById('contador')
    contador.innerText = tamanhoRestante

    let paragrafo = document.getElementById('paragrafo')
    if (tamanhoRestante == 0) {
        paragrafo.classList.add('limite-atingido')
    } else {
        paragrafo.classList.remove('limite-atingido')
    }
})