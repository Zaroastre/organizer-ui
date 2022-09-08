import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "../../entities/Food";
import { PantryItem } from "./pantryItem/PantryItem";
import AddIcon from '@mui/icons-material/Add';
import "./PantryList.css";
import { ShoppingService } from "../../services/shopping/ShoppingService";
import { FoodService } from "../../services/food/FoodService";

interface PantryListProperties {
    values: Array<Food>;
    shoppingService: ShoppingService;
    foodService: FoodService;
}

export function PantryList({values, shoppingService, foodService}: PantryListProperties) {

    const [filteredValues, setFilteredValue] = useState<Array<Food>>(new Array<Food>());

    useEffect(() => {
        setFilteredValue(values);
    }, [values]);

    
    const renderFoods = () => {
        return filteredValues.map((food) => <PantryItem value={food} foodService={foodService} shoppingService={shoppingService} />);
    }

    const onSearchHandler = (event: any) => {
        let filter =event.target.value;
        if (filter && filter.length > 0) {
            setFilteredValue(values.filter((value) => value.name.toLowerCase().includes(filter.toLowerCase())));
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
            {renderFoods()}
        </tbody>
    </table>);
}