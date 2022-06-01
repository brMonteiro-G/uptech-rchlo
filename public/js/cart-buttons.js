
//const novaLista = [...inventory]

const novaLista = JSON.parse(JSON.stringify(inventory))



//localStorage.setItem("itens", JSON.stringify(inventory))
//const lista = JSON.parse(localStorage.getItem("itens")) || []

const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")


plusButton.addEventListener("click", event => {
    event.preventDefault()
    const nomeDoProduto = document.querySelector("#name")
    const quantidadeDoPedido = document.querySelector("#amount")
    quantidadeDoPedido.value = quantidadeDoPedido.value - (-1)


    const inventarioAtualizado = novaLista.filter((elemento, index) => {

        if (elemento.nome === nomeDoProduto.textContent) {

            elemento.quantidade_disponivel = inventory[index].quantidade_disponivel - quantidadeDoPedido.value
            return elemento
        }
        return elemento

    })
    localStorage.clear()

    localStorage.setItem("itens", JSON.stringify(inventarioAtualizado))
})



minusButton.addEventListener("click", event => {
    event.preventDefault()
    const nomeDoProduto = document.querySelector("#name")
    const quantidadeDoPedido = document.querySelector("#amount")
    if (quantidadeDoPedido.value > 0) {
        quantidadeDoPedido.value = quantidadeDoPedido.value - (+1)
    }

    const inventarioAtualizado = novaLista.filter((elemento, index) => {
        if ((elemento.nome === nomeDoProduto.textContent)) {

            elemento.quantidade_disponivel = (inventory[index].quantidade_disponivel - (quantidadeDoPedido.value) * 2) - (- quantidadeDoPedido.value)
            return elemento

        }
        return elemento
    })

    localStorage.clear()

    localStorage.setItem("itens", JSON.stringify(inventarioAtualizado))
})

