import { Outlet, Link } from "react-router"
import { logo, logowin } from "../../assets/assets"
import { useState } from "react"

function Navbar() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <header className="fixed w-full">
        <div className="sm:h-20 h-16 flex items-center gap-2 sm:gap-4 justify-between px-4 sm:px-7 lg:px-10 bg-amber-50 relative z-10">
          <Link to="/" className="flex items-center gap-3 shrink-0 outline-none" onClick={() => setIsHome(true)}>
            <img src={logo} alt="logo" className="sm:h-12 h-11 w-auto sm:p-0 p-0.5" />
            <img src={logowin} alt="biglogo" className="h-8 pt-1 w-auto hidden sm:block" />
          </Link>
          <div className="flex gap-5 items-center">
            <form className={`transition-all sm:flex hidden items-center h-10 self-center overflow-hidden shrink ${isHome ? "opacity-100 translate-y-0" : "opacity-0 hidden -translate-y-1/2"} transition-all duration-300`}>
              <input type="search" placeholder="Search your product" className="text-[#af4b02] border-amber-100 font-sans outline-none px-2 rounded-sm h-full font-semibold overflow-hidden bg-amber-100" />
              <button className="h-full w-9 flex justify-center items-center overflow-hidden rounded-tr-sm rounded-br-sm bg-[#e18544] outline-none">
                <svg viewBox="0 -960 960 960" fill="none" className="fill-white w-7 h-7 aspect-square rounded-full"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
              </button>
            </form>
            <ul className="flex gap-2 sm:gap-4">
              <li className="">
                <Link to="/cart" className="relative" onClick={() => setIsHome(false)}>
                  <svg viewBox="0 -960 960 960" className="fill-[#e18544] sm:w-9 w-11 sm:h-9 h-11" fill="none"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                  <div className="absolute sm:-top-2 -top-1 bg-[#e18544] rounded-full px-1 left-6 text-white">1</div>
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link to="/admin" className="relative" onClick={() => setIsHome(false)}>
                  <svg viewBox="0 -960 960 960" fill="none" className="fill-[#e18544] w-9 h-9"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                  <div className="absolute sm:-top-2 -top-1 bg-[#e18544] rounded-full px-1 left-5 text-white">1</div>
                </Link>
              </li>
              <li className="block sm:hidden relative">
                <svg viewBox="0 -960 960 960" fill="none" className="fill-[#e18544] sm:h-9 h-11 sm:w-9 w-11"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                <div className="absolute sm:-top-2 -top-1 bg-[#e18544] rounded-full px-1 left-7 text-white">1</div>
              </li>
            </ul>
          </div>
        </div>
        <nav className={`bg-amber-100 ${isHome ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300 relative z-0 flex justify-center py-1`}>
          <form className="flex sm:hidden items-center overflow-hidden h-11 mx-2 w-auto shrink">
            <input type="search" placeholder="Search your product..." className="border text-[#af4b02] min-w-24 shrink border-l-[#e18544] border-t-[#e18544] border-b-[#e18544] font-sans outline-none px-2 rounded-tl-sm rounded-bl-sm h-full font-semibold overflow-hidden bg-amber-100" />
            <button className="h-full w-11 flex justify-center shrink-0 items-center overflow-hidden rounded-tr-sm rounded-br-sm bg-[#e18544] outline-none">
              <svg viewBox="0 -960 960 960" fill="none" className="fill-white w-7 h-7 aspect-square rounded-full"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </button>
          </form>
          <ul className="flex gap-4 py-1">
            <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
              <a href="#newarrivals" className="font-semibold text-[#af4b02] outline-none">New Arrivals</a>
            </li>
            <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
              <a href="#accessories" className="font-semibold text-[#af4b02] outline-none">Accessories</a>
            </li>
            <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
              <a href="#winterdeals" className="font-semibold text-[#af4b02] outline-none">Winter Deals</a>
            </li>
            <li className="hidden sm:block hover:outline-1 hover:outline-[#e18544] rounded-xs outline-none">
              <a href="#hotdeals" className="font-semibold text-[#af4b02]">Hot Deals</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Navbar