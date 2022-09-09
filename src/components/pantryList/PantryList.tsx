import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "../../entities/Food";
import { FoodService } from "../../services/food/FoodService";
import { ShoppingService } from "../../services/shopping/ShoppingService";
import { PantryItem } from "./pantryItem/PantryItem";
import "./PantryList.css";

interface PantryListProperties {
    values: Array<Food>;
    shoppingService: ShoppingService;
    foodService: FoodService;
    onDisplayPopupAddToCart: Function;
    onDisplayPopupDeleteFromPantry: Function;
}

export function PantryList({
    values,
    shoppingService,
    foodService,
    onDisplayPopupAddToCart,
    onDisplayPopupDeleteFromPantry
}: PantryListProperties) {

    const [filteredValues, setFilteredValue] = useState<Array<Food>>(new Array<Food>());

    useEffect(() => {
        setFilteredValue(values);
    }, [values]);

    const onSearchHandler = (event: any) => {
        let filter = event.target.value;
        if (filter && filter.length > 0) {
            setFilteredValue(values.filter((value) => value.getName().toLowerCase().includes(filter.toLowerCase())));
        } else {
            setFilteredValue(values);
        }
    }

    return (<table className="PantryList">
        <thead>
            <tr className="Advanced">
                <td colSpan={2}>
                    <div>
                        <label htmlFor="search">Rechercher</label>
                        <input type="search" name="search" id="search" placeholder="Aliment..." onChange={onSearchHandler} />
                    </div>
                </td>
                <td>
                    <Link to="food"><button className="ButtonCart"><AddIcon /></button></Link>
                </td>
            </tr>
            <tr className="Titles">
                <th>Aliment</th>
                <th>Stock</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                filteredValues.map((food) => <PantryItem
                    value={food}
                    foodService={foodService}
                    shoppingService={shoppingService}
                    onDisplayPopupAddToCart={onDisplayPopupAddToCart}
                    onDisplayPopupDeleteFromPantry={onDisplayPopupDeleteFromPantry}
                />)
            }
        </tbody>
    </table>);
}