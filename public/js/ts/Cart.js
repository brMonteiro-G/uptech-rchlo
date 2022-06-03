import { BusinessLogic } from "./CartPage/BusinessLogicCart.js";
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const business_logic = new BusinessLogic();
plusButton.addEventListener("click", event => {
    event.preventDefault();
    business_logic.addUnity();
});
minusButton.addEventListener("click", event => {
    event.preventDefault();
    business_logic.removeUnity();
});
