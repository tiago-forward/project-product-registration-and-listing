import { CardContainer } from "./styles"
import { useNavigate } from "react-router-dom" 

function ProductCard({ nameTitle, listProduct }) {

    const navigate = useNavigate()

    listProduct.sort(function(x, y) {
        return x.price - y.price
    })

    function addHome() {
        navigate("/")
    }

    return (
        <CardContainer>
            <h2>{nameTitle}:</h2>
            {listProduct.map(product => (
                <div key={product.id} className="card-container">
                    <p>Nome: {product.title}</p>
                    <p>Descrição: {product.description}</p>
                    <p>Preço: {product.price}RS</p>
                    <p>Disponível: {product.available}</p>
                </div>
            ))}
            <button onClick={addHome} className="btn-new-product">Adicionar novo produto</button>
        </CardContainer>
    )
}

export { ProductCard }