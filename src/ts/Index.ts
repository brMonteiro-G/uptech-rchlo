import { BusinessLogic } from "./BusinessLogicIndex.js"

const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll(".desc-button")
const products_name = <NodeListOf<HTMLElement>>document.querySelectorAll(".txt-desc-prod")!
const business_logic = new BusinessLogic()

business_logic.getProductsName(products_name)
buttons.forEach((element, index) => element.addEventListener('click', event => {
    const button = event.target as HTMLElement
    business_logic.addUnityToCart(button, index, buttons, products_name)



}))