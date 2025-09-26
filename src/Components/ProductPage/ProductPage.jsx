import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import './ProductPage.css'

export function ProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
            const data = await response.json()
            console.log("Fetched products:", data)
            const foundProduct = data.find(p => String(p.id) === id)
            console.log("Found product:", foundProduct)
            setProduct(foundProduct)
        }
        fetchData()
    }, [id])

    if (!product) return <p>Loading...</p>

    return (
        <>
            <div className="productPage">
                <img src={product.image} alt={product.name} />
                <div className="info">
                    <h2>{product.name}</h2>
                    <button>Objednat</button>
                </div>
            </div>
            <Link to="/">
                <p>Zpět na hlavní stranu</p>
            </Link>
        </>
    )
}
