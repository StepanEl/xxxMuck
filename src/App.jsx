
import './App.css'
import { HomePage } from './Components/HomePage/HomePage'
import { ProductPage } from './Components/ProductPage/ProductPage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProductPage/:id",
    element: <ProductPage />,
  },
],
 {
    basename: "/xxxMuck/" // <--- přidej sem přesně název repozitáře
  }
);


function App() {

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
