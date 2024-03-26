import { createContext } from "react";
import useProductData from "../hook/useProductData/useProductData";


export const ProductsContext = createContext()

export const ProductProvider = ({ children }) => {
    const [listProduct, setListProduct] = useProductData()

    return (
        <ProductsContext.Provider value={{ listProduct, setListProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};