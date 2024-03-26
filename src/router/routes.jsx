import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/Home";
import { Products } from "../page/Products";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }