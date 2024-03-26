import { Main } from "./styles"
import { RegistrationForm } from "../../components/RegistrationForm"
import { HeaderContainer } from "../../components/Header"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/products-context"


function Home() {
    const register = "Cadastro"
    const { listProduct, setListProduct } = useContext(ProductsContext)

    return (
        <>
            <HeaderContainer />
            <Main>
                <RegistrationForm 
                    nameTitle={register}
                    listProduct={listProduct}
                    setListProduct={setListProduct} />
            </Main>
        </>
    )
}

export { Home }