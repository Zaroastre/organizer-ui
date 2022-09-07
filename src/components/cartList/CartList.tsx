import { Product } from "../../entities/Product";
import { CartItem } from "../cartItem/CartItem";

interface PantryListProperties {
    values: Array<Product>;
}

export function CartList({values}: PantryListProperties) {
    
    const renderFoods = () => {
        return values.map((product) => <CartItem product={product} />);
    } 

    return (<table>
        <thead>
            <tr>
                <th>Aliment</th>
                <th>Quantité</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {renderFoods()}
        </tbody>
    </table>);
}