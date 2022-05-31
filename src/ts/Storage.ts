
export abstract class Storage<K>{
    
    protected updateStorage(element:K): void {
        localStorage.clear()
        localStorage.setItem("itens", JSON.stringify(element))
    }

}