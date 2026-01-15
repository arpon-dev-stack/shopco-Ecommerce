import { memo } from "react"

function HighlightedProduct({ products, categoryName }) {
    return (
        <div className=" bg-[#e18544] p-2 rounded-sm">
            <h1 className="text-center font-semibold text-xl">{categoryName}</h1>
            <div className="p-2 grid grid-cols-2 grid-rows-2 gap-4 w-full">
                {products.map(product => {
                    return (
                        <div className=" w-full aspect-square" key={product.id}>
                            <img src={product.src} className="w-full aspect-square object-cover" alt={product.alt} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(HighlightedProduct);