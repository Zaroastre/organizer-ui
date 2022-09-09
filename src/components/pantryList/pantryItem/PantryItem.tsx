import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "../../../entities/Food";
import { FoodService } from "../../../services/food/FoodService";
import { ShoppingService } from "../../../services/shopping/ShoppingService";
import "./PantryItem.css";

interface PantryItemProperties {
    value: Food;
    shoppingService: ShoppingService;
    foodService: FoodService;
    onDisplayPopupAddToCart: Function;
    onDisplayPopupDeleteFromPantry: Function;
}

export function PantryItem({
    value,
    foodService,
    shoppingService,
    onDisplayPopupAddToCart,
    onDisplayPopupDeleteFromPantry,
}: PantryItemProperties) {
    const [food, setFood] = useState<Food>(value);

    useEffect(() => {
        setFood(value);
    }, [value])

    const displayPopupAddToCart = () => {
        onDisplayPopupAddToCart(value);
    }
    const displayPopupDeleteFromPantry = () => {
        onDisplayPopupDeleteFromPantry(value);
    }

    return (<tr className="PantryItem">
        <td>{food.getName()}</td>
        <td>
            <span className={(food.getQuantity() <= 0) ? "empty-stock" : "full-stock"}>{food.getQuantity()}</span>
            {(food.getQuantity() <= 0) ? <WarningIcon sx={{ color: "#ff4400ff" }} /> : null}
        </td>
        <td>
            <Link to={String("food/").concat(String(food.getId()))}>
                <button type="button" className="ButtonEdit">
                    <EditIcon sx={{ color: "#00ffffff" }} />
                </button>
            </Link>
            <button className="ButtonAdd" onClick={displayPopupAddToCart}>
                <AddShoppingCartIcon sx={{ color: "#00ff00ff" }} />
            </button>
            <button className="ButtonDelete" onClick={displayPopupDeleteFromPantry}>
                <DeleteForeverIcon sx={{ color: "#ff0000ff" }} />
            </button>
        </td>
    </tr>);
}