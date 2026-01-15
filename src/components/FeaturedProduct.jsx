import { featured } from "../assets/assets"

function FeaturedProduct() {
    return (
        <div className="flex flex-col w-full">
            {/* <h1 className="mx-auto mt-2 sm:font-semibold sm:text-3xl text-xl">Featured Products</h1> */}
            <div className="grid grid-cols-4 grid-rows-1 mx-auto gap-2 mt-3">
                {
                    featured.map(item => {
                        return (
                            <div className="flex flex-col items-center group" key={item.id}>
                                <img src={item.src} alt={item.alt} className="group-hover:scale-[1.02] rounded-full aspect-square sm:w-14 w-11 h-auto" />
                                <h1 className="hidden sm:inline-block text-sm mx-auto font-semibold">{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>)
}

export default FeaturedProduct