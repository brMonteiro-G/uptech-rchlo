
const secoes = document.querySelectorAll(".grid-prod")
//const divProdutos = document.createElement("div")

secoes.forEach(secao => criaCard(secao))


const listaId = document.querySelectorAll("[data-id]")

for (let index = 0; index < 8; index++) {
    const divAtual = listaId[index]
    const produto = storage.find((_ , indiceInventario) => indiceInventario === index)

    let tagsP = divAtual.querySelectorAll('.prices')
    tagsP.forEach((tag,index) => index===1?tag.innerHTML = "R$ " + produto.preco:tag.innerHTML = produto.nome)

    let image = divAtual.querySelector('.img-prod')
    image.setAttribute('src', produto.imagens[0].url)
}


function criaCard(secao){
    for (let index = 0; index < 4; index++) {
        const divProdutos = document.createElement("div")
        secao.appendChild(divProdutos)
        divProdutos.dataset.id = index
        divProdutos.classList.add('boxModel')
    
        const divImages = document.createElement("div")
        divImages.classList.add('div-image-buttons')
        const image = document.createElement('img')
        image.classList.add('img-prod')
        divImages.appendChild(image)
        divProdutos.appendChild(divImages)
    
        const nomeProduto = document.createElement("p")
        nomeProduto.classList.add('txt-desc-prod', 'prices')
        nomeProduto.innerHTML = "oi"
        divProdutos.appendChild(nomeProduto)
    
    
        const valorProduto = document.createElement("p")
        valorProduto.classList.add('txt-desc-prod', 'prices')
        divProdutos.appendChild(valorProduto)
    
    
        const botaoProduto = document.createElement("div")
        botaoProduto.classList.add('flex', 'background-bag')
        divProdutos.appendChild(botaoProduto)
        const botaSacola = document.createElement("button")
        botaSacola.classList.add('desc-button')
        botaSacola.innerHTML = "Adicionar a sacola"
        const iconeSacola = document.createElement("button")
        iconeSacola.classList.add('shopping-cart')
        botaoProduto.appendChild(botaSacola)
        botaoProduto.appendChild(iconeSacola)
    
    }
}