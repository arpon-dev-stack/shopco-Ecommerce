import { useRef } from "react"
function Navigation({ isHome }) {
    const navRef = useRef(null);
    return (
        <nav ref={navRef} className={`bg-amber-100 ${isHome ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300 relative z-10 flex justify-center py-1`} >
            <form className="flex sm:hidden items-center overflow-hidden h-11 sm:h-auto mx-2 w-auto shrink">
                <input type="search" placeholder="Search your product..." className="border text-[#af4b02] min-w-24 shrink border-l-[#e18544] border-t-[#e18544] border-b-[#e18544] font-sans outline-none px-2 rounded-tl-sm rounded-bl-sm h-full font-semibold overflow-hidden bg-amber-100" />
                <button className="h-full w-11 flex justify-center shrink-0 items-center overflow-hidden rounded-tr-sm rounded-br-sm bg-[#e18544] outline-none">
                    <svg viewBox="0 -960 960 960" fill="none" className="fill-white w-7 h-7 aspect-square rounded-full"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </button>
            </form>
            <ul className="flex gap-4">
                <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none" >
                    <a href="#newarrivals" className="font-semibold text-[#af4b02] outline-transparent">New Arrivals</a>
                </li>
                <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
                    <a href="#accessories" className="font-semibold text-[#af4b02] outline-transparent">Accessories</a>
                </li>
                <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
                    <a href="#winterdeals" className="font-semibold text-[#af4b02] outline-transparent">Winter Deals</a>
                </li>
                <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
                    <a href="#hotdeals" className="font-semibold text-[#af4b02] outline-transparent">Hot Deals</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation