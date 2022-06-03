import { BusinessLogic } from "./BusinessLogicIndex.js"
const sections = document.querySelectorAll(".grid-prod")
const business_logic = new BusinessLogic()

window.addEventListener("load", element => {
    sections.forEach((section,index) => business_logic.getProducts(<HTMLElement>section ,index))
    business_logic.getProductsName()
    business_logic.configureButtons(business_logic)
})


