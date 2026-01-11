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

export const kitchenProducts = [
    { id: 1, src: mixer, alt: "mixer" },
    { id: 2, src: cooker, alt: "cooker" },
    { id: 3, src: pan, alt: "pan" },
    { id: 4, src: plate, alt: "plate" }
];

export const computerProducts = [
    { id: 1, src: cpu, alt: "cpu" },
    { id: 2, src: gpu, alt: "gpu" },
    { id: 3, src: monitor, alt: "monitor" },
    { id: 4, src: motherboard, alt: "motherboard" }
];

export const gamingProducts = [
    { id: 1, src: console, alt: "console" },
    { id: 2, src: game1, alt: "game1" },
    { id: 3, src: game2, alt: "game2" },
    { id: 4, src: game3, alt: "game3" }
];

export const electronicsProducts = [
    { id: 1, src: smartphone, alt: "smartphone" },
    { id: 2, src: earbud, alt: "earbud" },
    { id: 3, src: headphone, alt: "headphone" }
];

export const fashionProducts = [
    { id: 1, src: watch, alt: "watch" },
    { id: 2, src: cap, alt: "cap" },
    { id: 3, src: shoes, alt: "shoes" }
];

export const formalClothings = [
    { id: 1, src: formalware, alt: "formalware" },
    { id: 2, src: formalpant, alt: "formalpant" },
    { id: 3, src: formalshoes, alt: "formalshoes" }
];

export const clothings = [
    { id: 1, src: tshirt, alt: "tshirt" },
    { id: 2, src: jeansmen, alt: "jeansmen" },
    { id: 3, src: glasses, alt: "glasses" }
];

export const travellerChoices = [
    { id: 1, src: travellbag, alt: "travellbag" },
    { id: 2, src: travellbag2, alt: "travellbag2" },
    { id: 3, src: travellshoe, alt: "travellshoe" }
];

export const comboDeals = [
    { id: 1, src: combomen, alt: "combomen" },
    { id: 2, src: combowomen, alt: "combowomen" }
];

export const pharmaceuticals = [
    { id: 1, src: pharmaceutical, alt: "pharmaceutical" }
];

export const winterClothings = [
    { id: 1, src: jacket, alt: "jacket" },
    { id: 2, src: womenjacket, alt: "womenjacket" },
    { id: 3, src: babyjacket, alt: "babyjacket" },
    { id: 4, src: earmuff, alt: "earmuff" }
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