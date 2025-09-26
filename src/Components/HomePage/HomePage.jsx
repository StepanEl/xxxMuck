
import './HomePage.css'
import { Header } from '../Header/Header'
import { ProductsOffer } from '../ProductsOffer/ProductsOffer'

export function HomePage() {

  return (
    <>
  <Header />
  <main>
      <h2>Aktuální nabídka</h2>
      <p>Nejnovější prémiové produkty od předních českých designerů.<br/>
      Doprava až k vám domů, na cenu nehleďte.</p>
  </main>
  <ProductsOffer />
    </>
  )
}

