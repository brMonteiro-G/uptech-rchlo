import { Products } from "./interfaces/Products.js"

export abstract class Storage<K>{
    constructor(){
        
    }

    protected updateStorage(element:K): void {
        localStorage.clear()
        localStorage.setItem("itens", JSON.stringify(element))
    }

}