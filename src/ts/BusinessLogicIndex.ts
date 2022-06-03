
import { Products } from "./interfaces/Products.js"
import { Inventory } from "./Inventory.js"
import { Storage } from "./Storage.js"

export class BusinessLogic extends Storage<Products>{

    getProducts(section: HTMLElement, index: number): void {
        let initialPoint = 0
        let finalPoint = 0
        if (index === 0) {
            initialPoint = 0
            finalPoint = 4
        }
        if (index === 1) {
            initialPoint = 4
            finalPoint = 8
        }
        section.innerHTML = this.template(initialPoint, finalPoint)

    }


   private addUnityToCart(button: HTMLElement, index: number, buttons: NodeListOf<HTMLElement>, products_name: NodeListOf<HTMLElement>): void {

        button = buttons[index]

        button.dataset.id = products_name[index].dataset.id

        const product_on_storage = Inventory.inventory.find((_, index) => index === parseInt(button.dataset.id!)!)!


        let current_amount = product_on_storage.available_amount
        current_amount = current_amount - 1
        if (current_amount < 0) {
            alert("Peça indisponível!")
        }
        product_on_storage.available_amount = current_amount

        alert('Produto adicionado a sacola')
        this.updateStorage(product_on_storage)

    }

    getProductsName(): NodeListOf<HTMLElement> {
        const products_name = <NodeListOf<HTMLElement>>document.querySelectorAll(".txt-desc-prod")!
        products_name.forEach((element, index) => {
            element.dataset.id = index.toString()
        })
        return products_name
    }



    configureButtons(business_logic: BusinessLogic): void {
        const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll(".desc-button")

        buttons.forEach((element, index) => element.addEventListener('click', event => {

            const button = event.target as HTMLElement
            business_logic.addUnityToCart(button, index, buttons, this.getProductsName())


        }))


    }

   private template(initialPoint: number, finalPoint: number): string {

        const templateHTML = []
        for (let i = initialPoint; i < finalPoint; i++) {
            templateHTML.push(`
        <div class="boxModel">
        <a id="path" href="./details.html">
        <div class="div-image-buttons">
            <img src="${Inventory.inventory[i].images[0].url!}" alt="" class="img-prod" data-id="${i}">
            
        </div>
        </a>
        <p class="txt-desc-prod prices">${Inventory.inventory[i].name!}</p>
        <p class="txt-desc-prod prices pt-1">R$ ${Inventory.inventory[i].price.toFixed(2)!}</p>
        <div class="flex background-bag">
            <button class="desc-button">ADICIONAR A SACOLA</button>
            <button class="shopping-cart"></button>
        </div>
        </div>
        `
            )
        }
        return templateHTML.join("")
    }

}