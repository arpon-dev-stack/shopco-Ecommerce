import smartphone from './smartphone.webp';
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
import logo from './logo.webp';
import logowin from './logowin.webp';
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

export {
    search,
    phone,
    menu,
    mail,
    logo,
    logowin,
    left,
    right,
}

export const products = {
    greatDeals: [
        {
            seasonName: "Winter Deals",
            products: [
                jacket,
                womenjacket,
                babyjacket,
                earmuff
            ]
        },
        {
            categoryName: "Electronics",
            products: [
                smartphone,
                earbud,
                headphone
            ]
        },
        {
            categoryName: "Kitchens",
            products: [
                plate,
                cooker,
                mixer,
                pan
            ]
        },
        {
            categoryName: "Computers",
            products: [
                cpu,
                gpu,
                monitor,
                motherboard
            ]
        },
        {
            categoryName: "Gaming",
            products: [
                console,
                game1,
                game2,
                game3
            ]
        },
        {
            categoryName: "Pharmaceuticals",
            products: [
                pharmaceutical
            ]
        },
        {
            categoryName: "Fashion",
            products: [
                watch,
                cap,
                shoes
            ]
        },
        {
            categoryName: "Formal Clothings",
            products: [
                formalware,
                formalpant,
                formalshoes
            ]
        },
        {
            categoryName: "Clothings",
            products: [
                tshirt,
                jeansmen,
                glasses
            ]
        },
        {
            categoryName: "Combo Deals",
            products: [
                combomen,
                combowomen
            ]
        },
        {
            categoryName: "Traveller Choices",
            products: [
                travellbag,
                travellbag2,
                travellshoe
            ]
        }
    ]

}