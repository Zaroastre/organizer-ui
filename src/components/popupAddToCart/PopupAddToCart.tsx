import { useEffect, useState } from "react";
import { Food } from "../../entities/Food";
import AddIcon from '@mui/icons-material/Add';
import "./PoppupAddToCart.css";
import { ShoppingService } from "../../services/shopping/ShoppingService";

interface PopupAddToCartProperties {
    food: Food;
    shoppingService: ShoppingService;
    onConfirm: Function;
    onCancel: Function;
}

export function PopupAddToCart({food, shoppingService, onConfirm, onCancel}: PopupAddToCartProperties) {

    const [quantityToBuy, setQuantityToBuy] = useState(0);
    const [newStock, setNewStock] = useState(food.stock + quantityToBuy);

    useEffect(() => {
        setNewStock(food.stock + quantityToBuy);
    }, [quantityToBuy]);

    const onChangeQuantityHandler = (event: any) => {
        updateQuantityToBuy(parseInt(event.target.value));
    }
    const updateQuantityToBuy = (quantity: number)  => {
        setQuantityToBuy(quantity);
    }

    const onSubmitCart = (event: any) => {
        event.preventDefault();
        onConfirm(quantityToBuy);
    }


    return (<section className="PopupAddToCart" id="popup-add-to-cart">
        <h2>Ajouter <code>{food.name}</code> à la liste de course</h2>
        <form onSubmit={onSubmitCart}>
            <tr>
                <th>
                    <label htmlFor="stock">Stock disponible</label>
                </th>
                <td>
                    <p>{food.stock}</p>
                </td>
            </tr>
            <tr>
                <th>
                    <label htmlFor="quantity">Quantité à acheter</label>
                </th>
                <td>
                    <input type="number" name="quantity" id="quantity" min={0} max={10} defaultValue={quantityToBuy} onChange={onChangeQuantityHandler} required />
                </td>
            </tr>
            <tr>
                <th>
                    <label htmlFor="new-stock">Stock après achat</label>
                </th>
                <td>
                    <p>{newStock}</p>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button type="submit">
                        <AddIcon />
                        <span>Ajouter à la liste des courses</span>
                    </button>
                </td>
            </tr>
        </form>
    </section>);
}