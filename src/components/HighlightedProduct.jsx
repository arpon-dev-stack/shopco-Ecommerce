
function HighlightedProduct({ products, categoryName }) {
    return (
        <div className="flex flex-col mt-1 items-start w-full">
            <h1 className="text-center mt-1 font-semibold text-3xl">{categoryName}</h1>
            <div className="flex self-center gap-4 mt-2">
                {products.map(product => {
                    return (
                        <div className="max-w-40 h-auto rounded-sm hover:scale-105" key={product.id}>
                            <img src={product.src} className="w-full h-auto rounded-sm" alt={product.alt} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HighlightedProduct