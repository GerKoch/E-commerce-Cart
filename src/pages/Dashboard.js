import { Products } from "./products/Products";
import { Navbar } from "../components/navbar/Navbar";
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "../components/contexts/ShoppingCartContext";

const Dashboard = () => {
    return (
        <ShoppingCartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </Router>
        </ShoppingCartProvider>
    )
}

export default Dashboard;

