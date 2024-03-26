import { useState } from "react"
import { Form } from "./styles"
import { useNavigate } from "react-router-dom"

function RegistrationForm({ nameTitle, listProduct, setListProduct }) {
    const navigate = useNavigate()

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [availableProductSale, setAvailableProductSale] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    function addProduct() {
        
        const newProduct = {
            id: Math.random(),
            title: productName,
            description: productDescription,
            price: productPrice,
            available: availableProductSale
        }
        setListProduct([...listProduct, newProduct])
        navigate("/products")
        setProductName('');
        setProductDescription('');
        setProductPrice('');
    }

    return (
        <div>
            <h2>{nameTitle}:</h2>
            <Form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Nome do produto:</label>
                    <input type="text" id="name" name="productName" onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor="description">Descrição do produto:</label>
                    <textarea name="productDescription" id="productDescription" cols="30" rows="10" onChange={(e) => setProductDescription(e.target.value)} ></textarea>
                </div>
                <div className="input-container">
                    <label htmlFor="price">Valor do produto:</label>
                    <input type="number" id="price" name="productPrice" onChange={(e) => setProductPrice(e.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor="sale">Disponível para venda:</label>
                    <select name="availableSale" id="availableSale" onChange={(e) => setAvailableProductSale(e.target.value)} >
                        <option value="sim">Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </div>
                <button onClick={addProduct} >Enviar</button>
            </Form>
        </div>
    )
}

export { RegistrationForm }