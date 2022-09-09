import { useState } from "react";
import { Food } from "../../entities/Food";
import { FoodService } from "../../services/food/FoodService";
import { ShoppingService } from "../../services/shopping/ShoppingService";

interface FoodCreatorProperties {
    foodService: FoodService;
    shoppingService: ShoppingService;
    onAddFood: Function;
}

export function FoodCreator({foodService, shoppingService, onAddFood}: FoodCreatorProperties) {
    const defaultFood = new Food.FoodBuilder().build();
    const [foodToAdd, setFoodToAdd] = useState<Food>(new Food.FoodBuilder().build());
    const [isValidName, setValidName] = useState(false);

    const onSubmitAddFoodHandler = (event: any) => {
        event.preventDefault();
        if (isValidName) {
            shoppingService.buy(foodToAdd.getName(), foodToAdd.getQuantity()).then((data) => {
                setFoodToAdd(new Food.FoodBuilder().build());
                onAddFood();
            }).catch((reason: any) => {
                console.error(reason);
            })
        }
    }

    const updateFoodName = (name: string) => {
        let food: Food = foodToAdd;
        food.setName(name);
        setFoodToAdd(food);
    }

    const onNameChanged = (event: any) => {
        const name: string = event.target.value;
        foodService.searchInPantryByName(name).then((matchingFoods) => {
            setValidName(matchingFoods.length == 0);
            if ((isValidName)) {
                updateFoodName(name);
            }
        }).catch((reason: any) => {
            console.error(reason);
        });
    }

    const onQuantityChanged = (event: any) => {
        const quantity: number = event.target.value;
        let food: Food = foodToAdd;
        food.setQuantity(quantity);
        setFoodToAdd(food);
    }

    return (<section>
        <form onSubmit={onSubmitAddFoodHandler}>
            <div>
                <label htmlFor="">Aliment</label>
                <input type="text" name="name" id="name" defaultValue={defaultFood.getName()} onChange={onNameChanged} />
            </div>
            <div>
                <label htmlFor="">Quantité</label>
                <input type="number" name="quantity" id="quantity" min={0} defaultValue={defaultFood.getQuantity()} value={foodToAdd.getQuantity()} max={10} onChange={onQuantityChanged} />
            </div>
            <button type="submit" disabled={!isValidName}>Ajouter nouvel aliment</button>
        </form>
    </section>);
}