import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/products/Products";
import { Navbar } from "./components/navbar/Navbar";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./components/contexts/ShoppingCartContext";

function App() {
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

export default App;