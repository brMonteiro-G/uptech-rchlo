import { Sizes } from "./enum/Sizes.js";
export class Inventory {
    constructor() {
        this.localStorageItem = localStorage.getItem("itens");
        this.storage = JSON.parse(this.localStorageItem);
    }
}
Inventory.inventory = [
    {
        name: 'Blusa feminina Kaienne',
        url: '#',
        price: 129.90,
        description: 'A Blusa feminina Kaienne Curta Ampla Decote Redondo Folhagem Azul AK by Riachuelo é a escolha perfeita para criar looks confortáveis e práticos! Confeccionada em malha, a blusa combina super bem com calça reta e bota de cano baixo, aposte!',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-women-coat.webp", description: 'Blusa feminina Kaienne no tamanho M' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 69.90,
        description: 'A Camiseta Masculina floral é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-men-tShirt.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-printed-tShirt.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-striped-tShirt.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-cardigan.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    //details.html 
    //main.html
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-blazer.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: "../images/image-model-short-dress.webp", description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Sobretudo Feminino Polivelour',
        url: '#',
        price: 399.90,
        description: 'Fique ainda mais quentinha e estilosa com o Sobretudo Feminino Alongado Polivelour Rosa Pink AK by Riachuelo. A peça é perfeita para dias mais gelados. Para compor o look, experimente combinar com calça de PU e bota tratorada criando um visual fashion e cheio de atitude!  ',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/image-model-overcoat.webp', description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 399.90,
        description: 'Fique ainda mais quentinha e estilosa com o Sobretudo Feminino Alongado Polivelour Rosa Pink AK by Riachuelo. A peça é perfeita para dias mais gelados. Para compor o look, experimente combinar com calça de PU e bota tratorada criando um visual fashion e cheio de atitude!  ',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/', description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/', description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/', description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/', description: 'camiseta lipp no tamanho p' }
        ],
    },
    {
        name: 'Camiseta Masculina floral',
        url: '#',
        price: 55.90,
        description: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
        available_size: [Sizes.small, Sizes.medium, Sizes.large],
        available_amount: 12,
        images: [
            { url: '../images/', description: 'camiseta lipp no tamanho p' }
        ],
    }
];
