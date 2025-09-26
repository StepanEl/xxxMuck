import { useState } from "react"
import { useEffect } from "react"
import './ProductsOffer.css'
import { Link } from "react-router-dom"

export function ProductsOffer() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
      const data = await response.json()
      setProduct(data)
    }

    fetchData()
  }, [])

  if (!product) return <p>Loading...</p>

  return (
    <div className="productsOffer">
      {product.map(product => (
        <Link to={`/ProductPage/${product.id}`} key={product.id} >
          <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
  }