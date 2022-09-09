import { useState } from "react";
import { Product } from "../../../entities/Product";

interface CartItemProperties {
    value: Product;
}

export function CartItem({value}: CartItemProperties) {
    const [quantity, setQuantity] = useState(0);

    const onQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    } 

    return (<tr>
        <td>{value.getName()}</td>
        <td>{value.getQuantity()}</td>
        <td>
            <div>
                <input type={"number"} min={0} defaultValue={0} max={10} onChange={onQuantityChange} />
            </div>
            <div>
                <button disabled={quantity<=0}>Acheté!</button>
            </div>
        </td>
    </tr>);
}