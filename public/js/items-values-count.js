const produtos = ['Camiseta Básica',
    'Camiseta Polo',
    'Bermuda Moletom',
    'Calça Jeans Masculina',
    'Camiseta Básica',
    'Calça Jeans Feminina',
    'Camiseta Básica'];

const precos = [29.90,
    49.90,
    35,
    89.99,
    29.90,
    109.99,
    29.90]

    let acc = 1
    const elementosDuplicados = new Map();


function transformaObjeto(element, id) {
    let obj = { nome: element, valor: precos[produtos.indexOf(element)], quantidade: acc, idCategoria: id }

    return obj
}




const listaIndexada = produtos.map(element => {


    if (element.includes("Camiseta")) {
        id = 0
        obj = transformaObjeto(element, id)


    } if (element.includes("Bermuda")) {
        id = 1
        obj = transformaObjeto(element, id)

    } if (element.includes("Calça")) {
        id = 2
        obj = transformaObjeto(element, id)

    }

    return obj
}).sort((a, b) => {
    if (a.nome > b.nome) {
        return 1
    }
    if (a.nome < b.nome) {
        return -1
    }
}).map((value, index, array) => {
    if (!(index === 0 || (index === array.length-1))) {
        if (value.nome === array[index + 1].nome || value.nome === array[index -1].nome) {
            acc+= 1
            
            if(elementosDuplicados.has(value.nome)){
                elementosDuplicados.delete(value.nome)
                elementosDuplicados.set( value.nome, (acc-1))
                return value
            }
            
        }
        
    }
    elementosDuplicados.set(value.nome, value.quantidade)
    return value
})

const relatorioQuantidades = Object.fromEntries(elementosDuplicados)


console.log("   Item    --->   Quantidade no carrinho");
for (let [key, value] of elementosDuplicados) {
    const valorDoProduto = listaIndexada.find(valor => valor.nome === key) //devolve um elemento 

    const quantidadeAdquirida = relatorioQuantidades[key]

    total = quantidadeAdquirida*valorDoProduto.valor

    console.log(`--------- ---------`);
    console.log(`produto: ${key} ---> quantidade: ${value} a pagar: R$ ${total.toFixed(2).replace("." , ",")}`);
    
  }


 

   