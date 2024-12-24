import { useEffect, useState } from "react";

export default function ProductList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])


    return (
        <main>
            <ul>
                {
                    setProductList(productList.map((product) => {
                        <li key={product.id}>{product}</li>
                    }))
                }
            </ul>
        </main>
    )
}