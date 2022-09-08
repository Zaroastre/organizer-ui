import { useEffect, useState } from "react";
import { Food } from "../../../entities/Food";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from "react-router-dom";
import { PopupAddToCart } from "../../popupAddToCart/PopupAddToCart";
import "./PantryItem.css";
import { ShoppingService } from "../../../services/shopping/ShoppingService";
import { FoodService } from "../../../services/food/FoodService";
import { PopupDeleteFromPantry } from "../../popupDeleteFromPantry/PopupDeleteFromPantry";
import { Modal } from "../../modal/Modal";

interface PantryItemProperties {
    value: Food;
    shoppingService: ShoppingService;
    foodService: FoodService;
}

export function PantryItem({value, foodService, shoppingService}: PantryItemProperties) {
    const [isDisplayedPopupAddToCart, setDisplayedPopupAddToCart] = useState(false);
    const [isDisplayedPopupDeleteFromPanty, setDisplayedPopupDeleteFromPanty] = useState(false);
    const [food, setFood] = useState<Food>(value);

    useEffect(() => {
        setFood(value);
    },[value])

    // Handlers for popup add to cart
    const onClickDisplayPopupAddToCart = () => {
        setDisplayedPopupAddToCart(true);
    }
    const onAddToCartPopupConfirmHandler = (quantity: number) => {
        shoppingService.addToCart(food.name, quantity);
        setDisplayedPopupAddToCart(false);
    }
    const onAddToCartPopupCancelHandler = () => {
        setDisplayedPopupAddToCart(false);
    }

    // Handlers for popup delete from pantry
    const onClickDisplayPopupDeleteFromPantry = () => {
        setDisplayedPopupDeleteFromPanty(true);
    }
    
    const onDeletePopupConfirmHandler = () => {
        foodService.removeFromPantryByFoodId(food.id);
        setDisplayedPopupDeleteFromPanty(false);
    }
    const onDeletePopupCancelHandler = () => {
        setDisplayedPopupDeleteFromPanty(false);
        
    }

    // Handler for popup edit
    const onClickButtonEditFood = () => {

    }

    return (<tr className="PantryItem">
        <td>{food.name}</td>
        <td>
            <span className={(food.stock <= 0) ? "empty-stock" : "full-stock"}>{food.stock}</span>
            {(food.stock <= 0) ? <WarningIcon sx={{ color: "#ff4400ff" }} /> : null}
        </td>
        <td>
            <Link to={String("food/").concat(String(food.id))}><button className="ButtonEdit" onClick={onClickButtonEditFood}><EditIcon  sx={{ color: "#00ffffff" }} /></button></Link>
            <button className="ButtonAdd" onClick={onClickDisplayPopupAddToCart}><AddShoppingCartIcon sx={{ color: "#00ff00ff" }} /></button>
            <button className="ButtonDelete" onClick={onClickDisplayPopupDeleteFromPantry}><DeleteForeverIcon sx={{ color: "#ff0000ff" }}/></button>
        </td>
    </tr>);
}