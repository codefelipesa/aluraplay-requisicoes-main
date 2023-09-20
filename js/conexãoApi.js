async function listaDeVideos () {
    const conexaoComApi = await fetch("http://localhost:3000/videos")
    const conexaoComApiConvertida = await conexaoComApi.json()
    return conexaoComApiConvertida
    
}

async function criaVideo(titulo, descricao, url, imagem){
    const conection = await fetch("http://localhost:3000/videos", {
        method: "POST" // Requisição POST (enviar dados ao servidor), a padrão é GET (obter dados do servidor)  
        , headers: {
            "Content-type": "application/json" // O Content-type especifica que tipo de conteudo está sendo enviado ou recebido, nesse caso estamos enviando um arquivo JSON, então especificamos como application/json
        },
        body: JSON.stringify({ // Estamos enviando um objeto com alguns valores, e para envia-los numa requisição precisamos transforma-los em string
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url:url,
            imagem: imagem
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video")
        
    }

    const conectionConvertida = await conection.json()
    return conectionConvertida
}

async function buscaVideos(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}


export const conectaApi = {
    listaDeVideos, criaVideo, buscaVideos
}