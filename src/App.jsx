import { AppRoutes } from "./router/routes" 
import { ProductProvider } from "./contexts/products-context"

function App() {

  return (
    <>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </>
  )
}

export default App