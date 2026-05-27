const form = document.getElementById('meuForm')

let radiosButtons = document.getElementsByName('tipo')


radiosButtons.forEach(
    function(radio) {
        radio.addEventListener('change', function(evento) {
            if (radio.value === 'cnpj') {
                form.documento.disabled = true
                form.documento.classList.add('fundo-cinza')
                form.documento.placeholder = 'CNPJ (não implementado)'
            } else {
                form.documento.disabled = false
                form.documento.classList.remove('fundo-cinza')
                form.documento.placeholder = ''
            }
        })
    }
);