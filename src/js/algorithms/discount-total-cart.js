const cart = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99] 
const produtosDuplicados = []

const filtroDeDuplicatas = 
cart.filter((element, index) => {
    if( cart.indexOf(element) === index){
        return element 
    }
    if(!produtosDuplicados.includes(element)){
        produtosDuplicados.push(element)
    }
    
    
})

const buscaDuplicatas= cart.map(element => {
    if(produtosDuplicados.includes(element)){
    produtosDuplicados.pop(element)
    let novoElemento =  element*0.9
    return novoElemento
    }else{
        return element
    }
})


const totalDoCarrinho = buscaDuplicatas.reduce((acc, e) => (acc += e))


console.log("---------------------------------------------------");
console.log(`Carrinho de compras com descontos aplicados [ ${buscaDuplicatas} ]`);
console.log("---------------------------------------------------");
console.log("Total do carrinho " + totalDoCarrinho.toFixed(2));








 

