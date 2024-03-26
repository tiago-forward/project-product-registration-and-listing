import { useState } from "react";

const useProductData = () => {
    const [listProduct, setListProduct] = useState([])

    return [listProduct, setListProduct]
}

export default useProductData