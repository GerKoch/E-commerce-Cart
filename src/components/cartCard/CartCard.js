import { useContext } from "react";
import "./CartCard.css";
import { cartContext } from "../contexts/ShoppingCartContext";

export const CartCard = ({ dataCart }) => {
    const [cart, setCart] = useContext(cartContext);

    const addToCart = () => {
        setCart((currItem) => {
            const itemFound = currItem.find((item) => item.data.id === dataCart.data.id);
            if (itemFound) {
                return currItem.map((item) => {
                    if (item.data.id === dataCart.data.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItem, { dataCart, quantity: 1, price: dataCart.data.price }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((currItem) => {
            if (currItem.find((item) => item.data.id === dataCart.data.id)?.quantity === 1) {
                return currItem.filter((item) => item.data.id !== dataCart.data.id);
            } else {
                return currItem.map((item) => {
                    if (item.data.id ===dataCart.data.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.data.id === dataCart.data.id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(dataCart.data.id);

    return (
        <div className="container">
            {quantityPerItem > 0 && (
                <div>{quantityPerItem}</div>
            )}
            <p>{dataCart.data.title}</p>
            <img alt={dataCart.data.title} src={dataCart.data.image} />
            <p>${dataCart.data.price}</p>
            {quantityPerItem === 0 ? (
                <button onClick={() => addToCart()}>
                    Add to cart
                </button>
            ) : (
                <button onClick={() => addToCart()}>
                    + add more
                </button>
            )}
            {quantityPerItem > 0 && (
                <button onClick={() => removeItem(dataCart.data.id)}>
                    subtract item
                </button>
            )}
        </div>
    )
}