const form = document.getElementById('meuForm')

form.addEventListener('submit' , function(evento){
    evento.preventDefault()
    buscarEndereco(form.cep.value);
})

// IMPORTANTE: Quemfaz a requisição HTTP para a API
// no JS é o método fetch(url)

async function buscarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json`; //crase
    try{
        const resposta = await fetch(url, {method: 'GET'});
        const dados = await resposta.json()
        console.log('Bairro', dados.bairro)
        console.log('Cidade', dados.localidade)
    }catch (erro){
        console.error('Falha na comunicação', erro);
    }
    
}