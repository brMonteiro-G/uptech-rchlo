const cart = [39.90, 75.99, 24, 12, 109.99, 83.99]

const total = cart.reduce((acumulator, value) => {
    return acumulator + value
},0)

console.log(total) 
