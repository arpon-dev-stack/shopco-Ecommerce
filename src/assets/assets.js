import smartphone from './smartphone.webp';
import electronicsit from './electronics2.webp';
import accessories from './accessories.webp';
import clothing from './clothing.webp';
import kitchen from './kitchenaccessories.webp';
import cap from './cap.webp';
import combomen from './combomen.webp';
import combowomen from './combowomen.webp';
import formalpant from './formalpant.webp';
import formalware from './formalware.webp';
import glasses from './glasses.webp';
import headphone from './headphone.webp';
import jacket from './jacket.webp';
import jeansmen from './jeansmen.webp';
import left from './left.svg';
import right from './right.svg';
import logo from './logo.png';
import logowin from './logowin.png';
import mail from './mail.svg';
import menu from './menu.svg';
import phone from './phone.svg';
import search from './search.svg';
import shoes from './shoes.webp';
import travellbag from './travellbag.webp';
import travellbag2 from './travellbag2.webp';
import travellshoe from './travellshoe.webp';
import tshirt from './tshirt.webp';
import watch from './watch.webp';
import womenjacket from './womenjacket.webp';
import babyjacket from './babyjacket.webp';
import earmuff from './earmuff.webp';
import cpu from './cpu.webp';
import monitor from './monitor.webp';
import gpu from './gpu.webp';
import console from './gameconsole.webp';
import motherboard from './motherboard.webp';
import pharmaceutical from './pharmaceutical.webp';
import plate from './plate.webp';
import cooker from './pressurecooker.webp';
import mixer from './mixer.webp';
import pan from './pan.webp';
import earbud from './earbud.webp';
import game1 from './game1.webp';
import game2 from './game2.webp';
import game3 from './game3.webp';
import formalshoes from './formalshoes.webp';
import cart from './cart.svg';
import gamerbanner from './gamerbanner.webp';
import winterdeals from './winterdeals.webp';
import electronics from './electronics.webp';

export {
    search,
    phone,
    menu,
    mail,
    logo,
    logowin,
    left,
    right,
    cart
}

export const products = [
    {
        categoryName: "Winter Deals",
        id: 0,
        products: [
            { id: 1, src: jacket },
            { id: 2, src: womenjacket },
            { id: 3, src: babyjacket },
            { id: 4, src: earmuff }
        ]
    },
    {
        categoryName: "Kitchens",
        id: 3,
        products: [
            { id: 1, src: plate },
            { id: 2, src: cooker },
            { id: 3, src: mixer },
            { id: 4, src: pan }
        ]
    },
    // {
    //     categoryName: "Computers",
    //     id: 4,
    //     products: [
    //         { id: 1, src: cpu },
    //         { id: 2, src: gpu },
    //         { id: 3, src: monitor },
    //         { id: 4, src: motherboard }
    //     ]
    // },
    // {
    //     categoryName: "Gaming",
    //     id: 5,
    //     products: [
    //         { id: 1, src: console },
    //         { id: 2, src: game1 },
    //         { id: 3, src: game2 },
    //         { id: 4, src: game3 }
    //     ]
    // },
    // {
    //     categoryName: "Electronics",
    //     id: 2,
    //     products: [
    //         { id: 1, src: smartphone },
    //         { id: 2, src: earbud },
    //         { id: 3, src: headphone }
    //     ]
    // },
    // {
    //     categoryName: "Fashion",
    //     id: 7,
    //     products: [
    //         { id: 1, src: watch },
    //         { id: 2, src: cap },
    //         { id: 3, src: shoes }
    //     ]
    // },
    // {
    //     categoryName: "Formal Clothings",
    //     id: 8,
    //     products: [
    //         { id: 1, src: formalware },
    //         { id: 2, src: formalpant },
    //         { id: 3, src: formalshoes }
    //     ]
    // },
    // {
    //     categoryName: "Clothings",
    //     id: 9,
    //     products: [
    //         { id: 1, src: tshirt },
    //         { id: 2, src: jeansmen },
    //         { id: 3, src: glasses }
    //     ]
    // },
    // {
    //     categoryName: "Traveller Choices",
    //     id: 11,
    //     products: [
    //         { id: 1, src: travellbag },
    //         { id: 2, src: travellbag2 },
    //         { id: 3, src: travellshoe }
    //     ]
    // },
    // {
    //     categoryName: "Combo Deals",
    //     id: 10,
    //     products: [
    //         { id: 1, src: combomen },
    //         { id: 2, src: combowomen }
    //     ]
    // },

    // {
    //     categoryName: "Pharmaceuticals",
    //     id: 6,
    //     products: [
    //         { id: 1, src: pharmaceutical }
    //     ]
    // }

]

export const banner = [
    {
        src: gamerbanner,
        id: 0,
        alt: "gamersproducts"
    },
    {
        src: winterdeals,
        id: 1,
        alt: "winterclothings"
    },
    {
        src: electronics,
        id: 2,
        alt: "electronics"
    }
]

export const featured = [
    {
        src: kitchen,
        alt: "kitchenaccessories",
        id: 1,
        name: "Kitchen"
    },
    {
        src: accessories,
        alt: "homeaccessories",
        id: 2,
        name: "Accessories"
    },
    {
        src: clothing,
        alt: "clothing",
        id: 3,
        name: "Clothings"
    },
    {
        src: electronicsit,
        alt: "electronics",
        id: 4,
        name: "Electronics"
    }
]