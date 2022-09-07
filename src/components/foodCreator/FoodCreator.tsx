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
    const defaultFood = new Food();
    const [foodToAdd, setFoodToAdd] = useState<Food>(new Food());
    const [isValidName, setValidName] = useState(false);

    const onSubmitAddFoodHandler = (event: any) => {
        event.preventDefault();
        if (isValidName) {
            shoppingService.buy(foodToAdd.name, foodToAdd.stock).then((data) => {
                setFoodToAdd(new Food());
                onAddFood();
            }).catch((reason: any) => {
                console.error(reason);
            })
        }
    }

    const updateFoodName = (name: string) => {
        let food: Food = foodToAdd;
        food.name = name;
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
        food.stock = quantity;
        setFoodToAdd(food);
    }

    return (<section>
        <form onSubmit={onSubmitAddFoodHandler}>
            <div>
                <label htmlFor="">Aliment</label>
                <input type="text" name="name" id="name" defaultValue={defaultFood.name} onChange={onNameChanged} />
            </div>
            <div>
                <label htmlFor="">Quantité</label>
                <input type="number" name="quantity" id="quantity" min={0} defaultValue={defaultFood.stock} value={foodToAdd.stock} max={100} onChange={onQuantityChanged} />
            </div>
            <button type="submit" disabled={!isValidName}>Ajouter nouvel aliment</button>
        </form>
    </section>);
}