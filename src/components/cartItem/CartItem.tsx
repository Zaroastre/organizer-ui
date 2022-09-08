import { useState } from "react";
import { Product } from "../../entities/Product";

interface CartItemProperties {
    product: Product;
}

export function CartItem({product}: CartItemProperties) {
    const [quantity, setQuantity] = useState(0);

    const onQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    } 

    return (<tr>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
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