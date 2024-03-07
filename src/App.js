import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "../src/pages/products/Products";
import { Navbar } from "../src/components/navbar/Navbar";
import { ShoppingCart } from "../src/components/shoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "../src/components/contexts/ShoppingCartContext";

function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  )
}

export default App;