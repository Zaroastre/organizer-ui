import { useEffect, useState } from "react";
import { PantryList } from "../../components/pantryList/PantryList";
import { Food } from "../../entities/Food";
import { FoodService } from "../../services/food/FoodService";
import { ShoppingService } from "../../services/shopping/ShoppingService";

import "../views.css";

interface PantryViewProperties {
    foodService: FoodService;
    shoppingService: ShoppingService;
}

export function PantryView({foodService, shoppingService}: PantryViewProperties) {

    const [foods, setFoods] = useState(new Array<Food>());

    useEffect(() => {
        refreshListOfFoods();
    }, [foods]);

    const refreshListOfFoods = () => {
        console.log("Called!")
        foodService.listPantry().then((foodsList) => {
            setFoods(foodsList);
            console.log(foodsList.length)
        }).catch((reason: any) => {
            console.error(reason);
        });
    }

    return (<section className="View" id="pantry">
        <h1>Garde-Manger</h1>
        <div>
            <PantryList values={foods} shoppingService={shoppingService} foodService={foodService} />
        </div>
    </section>);
};