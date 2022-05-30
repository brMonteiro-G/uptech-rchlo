import { Products } from "./interfaces/Products.js"
import { Inventory } from "./Inventory.js"

export class BusinessLogic extends Storage{

    constructor(){
        super()
    }

    getProducts(): void {

    }

    addUnityToCart(button:HTMLElement, index:number,buttons:NodeListOf<HTMLElement>, products_name: NodeListOf<HTMLElement>): void {
        button = buttons[index]
        button.dataset.id = products_name[index].dataset.id
     
        const product_on_storage = Inventory.inventory.find((_, index) => index === parseInt((button.dataset.id)!))!
        
        
        let current_amount = product_on_storage.available_amount
        current_amount = current_amount - 1
        product_on_storage.available_amount = current_amount
        
        alert('Produto adicionado a sacola')
        this.updateStorage(product_on_storage)

    }

    getProductsName(products_name: NodeListOf<HTMLElement>): void {
        products_name.forEach((element, index) => {
            element.dataset.id = index.toString()
        })
    }


    



}