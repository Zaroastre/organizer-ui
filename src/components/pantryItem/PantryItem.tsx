import { useState } from "react";
import { Food } from "../../entities/Food";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { PopupAddToCart } from "../popupAddToCart/PopupAddToCart";
import "./PantryItem.css";

interface PantryItemProperties {
    food: Food;
    onAddToCart: Function;
}

export function PantryItem({food, onAddToCart}: PantryItemProperties) {
    const [quantity, setQuantity] = useState(0);
    const [isDisplayedPopupAddToCart, setDisplayedPopupAddToCart] = useState(false);
    const [isDisplayedPopupDeleteFromPanty, setDisplayedPopupDeleteFromPanty] = useState(false);

    const onQuantityChange = (event: any) => {
        setQuantity(parseInt(event.target.value));
    }

    const onClickButtonAddToCart = () => {
        setDisplayedPopupAddToCart(true);
    }

    const onClickButtonDeleteFromPanty = () => {

    }
    
    const onClickButtonEditFood = () => {

    }


    return (<tr>
        <td>{food.name}</td>
        <td><span className={(food.stock <= 0) ? "empty-stock" : "full-stock"}>{food.stock}</span></td>
        <td>
            <Link to={String("food/").concat(String(food.id))}><button onClick={onClickButtonEditFood}><EditIcon /></button></Link>
            <button onClick={onClickButtonAddToCart}><AddShoppingCartIcon /></button>
            <button onClick={onClickButtonDeleteFromPanty}><DeleteForeverIcon /></button>
        </td>
        <>
            { (isDisplayedPopupAddToCart) ? (<PopupAddToCart food={food} />) : (null) }
            { (isDisplayedPopupDeleteFromPanty) ? (<PopupAddToCart food={food} />) : (null) }
        </>
    </tr>);
}