import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "../../entities/Food";
import { PantryItem } from "../pantryItem/PantryItem";
import AddIcon from '@mui/icons-material/Add';
import "./PantryList.css";

interface PantryListProperties {
    values: Array<Food>;
    onAddToCart: Function;
}

export function PantryList({values, onAddToCart}: PantryListProperties) {

    const [filteredValues, setFilteredValue] = useState<Array<Food>>(new Array<Food>());

    useEffect(() => {
        setFilteredValue(values);
    }, [values]);

    
    const renderFoods = () => {
        return filteredValues.map((food) => <PantryItem food={food} onAddToCart={onAddToCart} />);
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
            <tr>
                <th>Aliment</th>
                <th>Stock</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="search" name="" id="" placeholder="Rechercher un aliment..." onChange={onSearchHandler} />
                </td>
                <td></td>
                <td>
                    <Link to="food"><button><AddIcon /></button></Link>
                </td>
            </tr>
            {renderFoods()}
        </tbody>
    </table>);
}