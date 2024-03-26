import { Main } from "./styles"
import { HeaderContainer } from "../../components/Header"
import { ProductCard } from "../../components/ProductCard"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/products-context"

function Products() {
    const listing = "Listagem"

    const { listProduct, setListProduct } = useContext(ProductsContext)

    return (

        <>
            <HeaderContainer />
            <Main>
                <ProductCard
                    nameTitle={listing}
                    listProduct={listProduct} />
            </Main>
        </>
    )
}

export { Products }