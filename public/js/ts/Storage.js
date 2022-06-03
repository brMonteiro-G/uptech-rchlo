export class Storage {
    constructor() {
    }
    updateStorage(element) {
        localStorage.clear();
        localStorage.setItem("itens", JSON.stringify(element));
    }
}
