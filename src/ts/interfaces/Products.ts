import { Sizes } from "../enum/Sizes.js";
import { Images } from "./Images.js";


export interface Products {

    name: string
    url: string;
    price: number;
    description: string;
    available_size: Array<Sizes>,
    available_amount: number
    images: Array<Images>

}