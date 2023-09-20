import { conectaApi } from "./conexãoApi.js";
import constroiCardDoVideo from "./mostrarVideos.js";

const botaoPesquisar = document.querySelector("[data-botaoPesquisa]")

async function buscaVideos (evento){
    evento.preventDefault()
    const dadoDaPesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideos(dadoDaPesquisa)

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach( video => lista.appendChild(constroiCardDoVideo(video.titulo, video.descricao, video.url, video.imagem)))

}

botaoPesquisar.addEventListener('click', evento=> buscaVideos(evento))


