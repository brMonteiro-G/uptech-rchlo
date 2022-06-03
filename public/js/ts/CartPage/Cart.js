import { BusinessLogic } from "./BusinessLogicCart.js";
const plusButton = document.querySelector("#plus");
const business_logic = new BusinessLogic();
plusButton.addEventListener("click", event => {
    event.preventDefault();
    business_logic.AddUnity();
});
// minusButton.addEventListener("click", event => {
//     event.preventDefault()
//     const nomeDoProduto = document.querySelector("#name")
//     const quantidadeDoPedido = document.querySelector("#amount")
//     if (quantidadeDoPedido.value > 0) {
//         quantidadeDoPedido.value = quantidadeDoPedido.value - (+1)
//     }
//     const inventarioAtualizado = novaLista.filter((elemento, index) => {
//         if ((elemento.nome === nomeDoProduto.textContent)) {
//             elemento.quantidade_disponivel = (inventory[index].quantidade_disponivel - (quantidadeDoPedido.value) * 2) - (- quantidadeDoPedido.value)
//             return elemento
//         }
//         return elemento
//     })
//     localStorage.clear()
//     localStorage.setItem("itens", JSON.stringify(inventarioAtualizado))
// })
