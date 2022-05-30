import { Products } from "../interfaces/Products.js"
import { Inventory } from "../Inventory.js"


export class BusinessLogic extends Storage {

    constructor(){
        super()
    }

    new_list: Array<Products> = JSON.parse(JSON.stringify(Inventory.inventory))
    product_name: HTMLElement = document.querySelector("#name")!
    order_amount: number = parseInt((<HTMLInputElement>document.querySelector("#amount")!).value)
    updated_storage: Array<Products> = []



    public addUnity(): void {

      this.order_amount = this.order_amount - (-1)
        
      const input = <HTMLInputElement>document.querySelector("#amount")!
      input.value = (this.order_amount).toString()
      console.log(input.value)

         this.updated_storage = this.new_list.filter((product, index) => {

            if (product.name === this.product_name.textContent) {

                product.available_amount = Inventory.inventory[index].available_amount - this.order_amount
                return product
            }
            return product

        })
        this.updateStorage(this.updated_storage)

    }

    public removeUnity(): void {

        if (this.order_amount > 0) {
            this.order_amount = this.order_amount - (+1)
        }

           
      const input = <HTMLInputElement>document.querySelector("#amount")!
      input.value = (this.order_amount).toString()
      console.log(input.value)

        const updated_storage = this.new_list.filter((element, index) => {
            if ((element.name === this.product_name.textContent)) {

                element.available_amount = (Inventory.inventory[index].available_amount - (this.order_amount) * 2) - (- this.order_amount)
                return element
            }
            return element

        })
        this.updateStorage(updated_storage)
    }

  
}




