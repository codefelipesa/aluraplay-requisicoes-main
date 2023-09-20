import { conectaApi } from "./conexãoApi.js"

const lista = document.querySelector("[data-lista]")

 export default function constroiCardDoVideo(titulo, descricao, url, imagem) {
    const criaElementoLi = document.createElement("li")
    criaElementoLi.className = "video__item"
    criaElementoLi.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return criaElementoLi
}

async function listaDeVideos() {
    
    try{
        const listaApi = await conectaApi.listaDeVideos()
    listaApi.forEach(video => lista.appendChild(constroiCardDoVideo(video.titulo, video.descricao, video.url, video.imagem)))
    }
    catch{
        lista.innerHTML= `<h2 class="mensagem__titulo" >Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaDeVideos()
