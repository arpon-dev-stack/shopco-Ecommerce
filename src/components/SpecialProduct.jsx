import { gameConsole } from "../assets/assets"
import { useState, memo } from "react";
import { incrementByAmount } from "../features/cartSlice";
import { useDispatch } from "react-redux";

function SpecialProduct() {
    const [cartQuantity, setCartQuantity] = useState('');
    const dispatch = useDispatch();

    console.log(`Your amount is ${Number(cartQuantity)} and type of it ${typeof cartQuantity}`)

    const updateCart = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(cartQuantity)))
        console.log(`Your amount is ${Number(cartQuantity)} and type of it ${typeof cartQuantity} and now ${typeof Number(cartQuantity)}`)
    }
    return (
        <div className="w-56 shadow-md border bg-[#e18544] h-[384px] shrink-0 border-[#e18544] rounded-sm group">
            <div className="flex flex-col h-auto w-full">
                <div className="overflow-hidden">
                    <img src={gameConsole} className="w-full h-56 aspect-square rounded-t-sm group-hover:scale-105 transition-scale duration-100" alt="electronics" />
                </div>
                <div className="w-full flex flex-col items-start p-2 h-[160px]">
                    <span className="text-md font-semibold text-white">New PS5</span>
                    <span className="text-xl ">Price: 50000 BDT</span>
                    <span className="text-xl ">Offer Price: 45000 BDT</span>
                    <form onSubmit={(e) => updateCart(e)} className="h-full flex mt-2 items-center justify-between gap-3 w-full">
                        <input type="number" className="w-1/2 px-2 text-black self-stretch outline-none" value={cartQuantity} onChange={(e) => { e.preventDefault(); setCartQuantity(String(e.target.value)) }} placeholder="Quantitiy" />
                        <button className="px-2 py-1 w-1/2 bg-[#b9511a] hover:bg-[#9c4719] text-white" type="submit">ADD TO CART</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default memo(SpecialProduct)