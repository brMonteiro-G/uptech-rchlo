const cart = [39.90, 75.99, 24, 12, 109.99, 83.99]

let total = 0

const taxItems = cart.map((value) => {

       if(value<70.00){
           
              return value 
          }
          else{
              let newValue = value + (value*0.07) 
              return newValue
          }
}
).reduce((acc,element) => acc + element,0)

console.log("O valor total da conta com as taxas aplicadas é de: " + taxItems)

