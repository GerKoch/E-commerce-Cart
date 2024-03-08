import { useContext } from "react";
import { cartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "boxicons";

export const Navbar = () => {
    const [cart, setCart] = useContext(cartContext);

    const quant = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <nav className="navContainer">
            <Link to={"/"} className="navStyles">
                <h1 className="title">Store</h1>
            </Link>
            <Link to={"/cart"} className="cart">
                <box-icon name='cart' className="cartIcon" ></box-icon>
                <span className="cartCount">{quant}</span>  
            </Link>
        </nav>
    )
}