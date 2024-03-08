import { useContext } from "react";
import  { cartContext } from "../../components/contexts/ShoppingCartContext";
import { Button } from "../../components/Button/Button";

export const AddSubtract = ({ data }) => {
    const [cart, setCart] = useContext(cartContext);

    const addToCart = () => {
        setCart((currItem) => {
            const itemFound = currItem.find((item) => item.data.id === data.id);
            if (itemFound) {
                return currItem.map((item) => {
                    if (item.data.id === data.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItem, { data, quantity: 1, price: data.price }];
            }
        });
    };

    const removeItem = () => {
        setCart((currItem) => {
            if (currItem.find((item) => item.data.id === data.id)?.quantity === 1) {
                return currItem.filter((item) => item.data.id !== data.id);
            } else {
                return currItem.map((item) => {
                    if (item.data.id === data.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.data.id === data.id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(data.id);

    return (
        <div>
            <div className="buttonQuantityContainer">
                {quantityPerItem > 0 && (
                    <Button onClick={() => removeItem()} text='-' />
                )}
                {quantityPerItem > 0 && (
                    <div className="cantProds">{quantityPerItem}</div>
                )}
                <Button onClick={() => addToCart()} text='+' />
            </div>
        </div>
    )
}