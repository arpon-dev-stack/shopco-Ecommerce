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
import gameConsole from './gameconsole.webp';
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

export {
    gameConsole
}

export const kitchenProducts = [
    { id: 1, src: mixer, alt: "mixer", priority: true },
    { id: 2, src: cooker, alt: "cooker", priority: true },
    { id: 3, src: pan, alt: "pan", priority: false },
    { id: 4, src: plate, alt: "plate", priority: false }
];

export const computerProducts = [
    { id: 1, src: cpu, alt: "cpu", priority: true },
    { id: 2, src: gpu, alt: "gpu", priority: true },
    { id: 3, src: monitor, alt: "monitor", priority: false },
    { id: 4, src: motherboard, alt: "motherboard", priority: false }
];

export const gamingProducts = [
    { id: 1, src: gameConsole, alt: "gameConsole", priority: false },
    { id: 2, src: game1, alt: "game1", priority: false },
    { id: 3, src: game2, alt: "game2", priority: false },
    { id: 4, src: game3, alt: "game3", priority: false }
];

export const electronicsProducts = [
    { id: 1, src: smartphone, alt: "smartphone", priority: false },
    { id: 2, src: earbud, alt: "earbud", priority: false },
    { id: 3, src: headphone, alt: "headphone", priority: false },
    { id: 4, src: watch, alt: "watch", priority: false },
];

export const fashionProducts = [
    { id: 1, src: cap, alt: "cap", priority: false },
    { id: 2, src: shoes, alt: "shoes", priority: false },
    { id: 3, src: glasses, alt: "glasses", priority: false }
];

export const formalClothings = [
    { id: 1, src: formalware, alt: "formalware", priority: false },
];

export const clothings = [
    { id: 1, src: tshirt, alt: "tshirt", priority: false },
    { id: 2, src: jeansmen, alt: "jeansmen", priority: false },
    { id: 3, src: formalpant, alt: "formalpant", priority: false },
    { id: 4, src: formalshoes, alt: "formalshoes", priority: false }
];

export const travellerChoices = [
    { id: 3, src: travellshoe, alt: "travellshoe", priority: false },
    { id: 1, src: pharmaceutical, alt: "pharmaceutical", priority: false },
    { id: 2, src: formalware, alt: "formalware", priority: false },
    { id: 4, src: earmuff, alt: "earmuff", priority: false }
];

export const comboDeals = [
    { id: 1, src: combomen, alt: "combomen", priority: true },
    { id: 2, src: combowomen, alt: "combowomen", priority: true },
    { id: 3, src: travellbag, alt: "travellbag", priority: false },
    { id: 4, src: travellbag2, alt: "travellbag2", priority: false },
];

export const pharmaceuticals = [
    { id: 1, src: pharmaceutical, alt: "pharmaceutical", priority: false }
];

export const winterClothings = [
    { id: 1, src: jacket, alt: "jacket", priority: true },
    { id: 2, src: womenjacket, alt: "womenjacket", priority: true },
    { id: 3, src: babyjacket, alt: "babyjacket", priority: false },
    { id: 4, src: earmuff, alt: "earmuff", priority: false }
];

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