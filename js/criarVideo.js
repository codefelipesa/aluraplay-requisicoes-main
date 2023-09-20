import { conectaApi } from "./conexãoApi.js"

const formulario =  document.querySelector("[data-formulario]")

async function criaVideo(evento){ // Essa função é assincrona por que ela precisa esperar a resposta da função que se conecta a API
    evento.preventDefault()
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const imagem =  document.querySelector("[data-imagem]").value
    const descricao = Math.floor(Math.random() * 10).toString() // O random pega um numero entre 1 e 10 => multiplicamos por 10 para torna-lo inteiro => Math floor arrendonda o number para baixo => Depois transformamos em String o resultado
    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem) // A ordem aqui precisa ser a mesma que ele espera na conexãoApi.js
        window.location.href ="../pages/envio-concluido.html"}
    catch (e){
        alert(e)

    }
}   

formulario.addEventListener('submit', evento => criaVideo(evento))