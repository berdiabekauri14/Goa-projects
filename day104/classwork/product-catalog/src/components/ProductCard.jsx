const ProductCard = () => {
    const productCard = [
        {name: "Milk", description: "It comes from a cow", price: 1, hearts: 10},
        {name: "Chips", description: "It made with potatoes", price: 3, hearts: 1000},
        {name: "Water", description: "Drink", price: 1, hearts: 80000000}
    ]

    return (
        <div>
            <p>{productCard[0]}</p>
            <p>{productCard[1]}</p>
            <p>{productCard[2]}</p>
        </div>
    )
}

export default ProductCard;