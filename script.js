
const key = "05b06c22c41aaace97f24dc426fefa3b"

function colocarDadosNaTela(dados){
    console.log(dados)
        document.querySelector(".title-city").innerHTML = "Tempo em" + " " + dados.name
        document.querySelector(".temp").innerHTML = "Temperatura" + " " + Math.floor(dados.main.temp) + " " + "°C"
        document.querySelector(".text-weather").innerHTML = dados.weather[0].description
        document.querySelector(".humidity").innerHTML = "Umidade" + " " + dados.main.humidity + "%"
        document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}