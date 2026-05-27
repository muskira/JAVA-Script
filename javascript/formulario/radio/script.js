let linguagem = form.linguagem.value

console.log(linguagem)

const radios = document.getElementsByName('linguagem');

radios.forEach(
function(radio) {
    console.log(radio.value)

    radio.addEventListener('change', function(event) {
        if (radio.value == 'javascript'){
            console.log("linguagem pouco maneira")
        } else if (radio.value == "python") {
            console.log("linguagem terrivel")
        } else {
            console.log('melhor linguagem de todas')
        }
    })
}
)