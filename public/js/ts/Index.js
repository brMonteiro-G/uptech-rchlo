import { BusinessLogic } from "./BusinessLogicIndex.js";
const buttons = document.querySelectorAll(".desc-button");
const products_name = document.querySelectorAll(".txt-desc-prod");
const business_logic = new BusinessLogic();
business_logic.getProductsName(products_name);
buttons.forEach((element, index) => element.addEventListener('click', event => {
    const button = event.target;
    business_logic.addUnityToCart(button, index, buttons, products_name);
}));
