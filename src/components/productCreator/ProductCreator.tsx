import { useState } from "react";
import { Product } from "../../entities/Product";
import { ShoppingService } from "../../services/shopping/ShoppingService";

interface ProductCreatorProperties {
    shoppingService: ShoppingService;
    onBuyProduct: Function;
}

export function ProductCreator({shoppingService, onBuyProduct}: ProductCreatorProperties) {
    const defaultProduct = new Product();
    const [foodToAdd, setProductToAdd] = useState<Product>(new Product());
    const [isValidName, setValidName] = useState(false);

    const onSubmitAddProductHandler = (event: any) => {
        event.preventDefault();
        if (isValidName) {
            shoppingService.buy(foodToAdd.name, foodToAdd.quantity).then((data) => {
                setProductToAdd(new Product());
                onBuyProduct();
            }).catch((reason: any) => {
                console.error(reason);
            })
        }
    }

    const updateProductName = (name: string) => {
        let food: Product = foodToAdd;
        food.name = name;
        setProductToAdd(food);
    }

    const onNameChanged = (event: any) => {
        const name: string = event.target.value;
        shoppingService.searchInCartByName(name).then((matchingProducts) => {
            setValidName(matchingProducts.length == 0);
            if ((isValidName)) {
                updateProductName(name);
            }
        }).catch((reason: any) => {
            console.error(reason);
        });
    }

    const onQuantityChanged = (event: any) => {
        const quantity: number = event.target.value;
        let food: Product = foodToAdd;
        food.quantity = quantity;
        setProductToAdd(food);
    }

    return (<section>
        <form onSubmit={onSubmitAddProductHandler}>
            <div>
                <label htmlFor="">Aliment</label>
                <input type="text" name="name" id="name" defaultValue={defaultProduct.name} onChange={onNameChanged} />
            </div>
            <div>
                <label htmlFor="">Quantité</label>
                <input type="number" name="quantity" id="quantity" min={0} defaultValue={defaultProduct.quantity} value={foodToAdd.quantity} max={10} onChange={onQuantityChanged} />
            </div>
            <button type="submit" disabled={!isValidName}>Ajouter nouvel aliment</button>
        </form>
    </section>);
}