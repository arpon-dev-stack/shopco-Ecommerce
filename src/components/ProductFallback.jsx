
function ProductFallback() {
    return (
        <div className="w-56 shadow-md bg-[#e18544] border border-[#e18544] h-[384px] shrink-0 rounded-sm">
            <div className="flex flex-col w-full">
                <div className="w-full h-56 bg-white">
                    {/* <img src={gameConsole} className="w-full h-56 aspect-square rounded-t-sm group-hover:scale-105 transition-scale duration-100" alt="electronics" /> */}
                </div>
                <div className="w-full flex flex-col items-start space-y-1 p-2 h-[160px]">
                    <div className="h-[23px] w-[64px] bg-white"></div>
                    <div className="h-[27px] w-[147px] bg-black"></div>
                    <div className="h-[27px] w-[197px] bg-black"></div>
                    <div className="h-[55px] flex mt-2 items-center justify-between gap-3 w-full">
                        <div className="w-1/2 h-[55px] bg-white"></div>
                        <div className="w-1/2 bg-[#b9511a] h-[55px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFallback