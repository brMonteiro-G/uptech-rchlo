//localStorage.setItem("itens", JSON.stringify(storage))

const buttons = document.querySelectorAll(".desc-button")
const nomeDosProdutos = document.querySelectorAll(".txt-desc-prod")


nomeDosProdutos.forEach((elemento,index) => {
    elemento.dataset.id = index
})

buttons.forEach((elemento,index) => elemento.addEventListener('click', botao =>{
   botao = buttons[index]
   botao.dataset.id = nomeDosProdutos[index].dataset.id

   const produtoNoBanco = storage.find((_, index) => index === parseInt(botao.dataset.id) )


   let quantidadeAtual = produtoNoBanco.quantidade_disponivel
   quantidadeAtual = quantidadeAtual - 1
   produtoNoBanco.quantidade_disponivel = quantidadeAtual

   alert('Produto adicionado a sacola')

   localStorage.clear()
   localStorage.setItem("itens", JSON.stringify(storage) )

}))
