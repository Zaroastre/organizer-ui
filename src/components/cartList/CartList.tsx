import { Product } from "../../entities/Product";
import { CartItem } from "./cartItem/CartItem";

interface PantryListProperties {
    values: Array<Product>;
}

export function CartList({ values }: PantryListProperties) {

    return (<table>
        <thead>
            <tr>
                <th>Aliment</th>
                <th>Quantité</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                values.map((product) => <CartItem value={product} />)
            }
        </tbody>
    </table>);
}