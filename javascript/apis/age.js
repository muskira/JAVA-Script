async function buscarIdade() {
    const url = `https://api.agify.io/?name=`

    try{
        const resposta = await fetch(url + 'Fabiano')
        const dados =  await resposta.json()
        console.log(dados)
    }catch (erro){
        console.error(erro)
    }
    
}
buscarIdade()