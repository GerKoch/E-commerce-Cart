import { useContext } from "react"
import { cartContext } from "../contexts/ShoppingCartContext"
import { CartCard } from "../cartCard/CartCard";

export const ShoppingCart = () => {
    const [cart, setCart] = useContext(cartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
    }, 0);

    console.log("Cart:", cart);
    return (
        <div>
            <div>
                <div>Items in cart: {quantity}</div>
                <div>Total: ${totalPrice}</div>
        
            </div>
            <div>
                {cart.map(resp => 
                    <CartCard
                        key={resp.title}
                        dataCart={resp}
                    />  
                )}
            </div>
        </div>
    )
}