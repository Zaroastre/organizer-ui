import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Food } from "../../entities/Food";
import { FoodService } from "../../services/food/FoodService";

import "../views.css";

interface FoodCreatorViewProperties {
    foodService: FoodService;
}

export function FoodCreatorView({ foodService }: FoodCreatorViewProperties) {

    const [food, setFood] = useState(new Food.FoodBuilder().build());
    let navigate = useNavigate();


    const onClickAddHandler = (event: any) => {
        event.preventDefault();
        foodService.addFood(food);
        navigate("/");

    }

    const onClickCancelHandler = (event: any) => {
        event.preventDefault();
        navigate("/");

    }

    const updateFoodName = (event: any) => {
        let tempFood: Food = food;
        tempFood.setName(event.target.value);
        setFood(tempFood);
    }
    const updateFoodQuantity = (event: any) => {
        let tempFood: Food = food;
        tempFood.setQuantity(parseInt(event.target.value));
        setFood(tempFood);
    }

    return (<section className="View" id="pantry">
        <h1>Déclarer un aliment</h1>
        <div className="row">
            <form className="col s12" onSubmit={onClickAddHandler}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate" required onChange={updateFoodName} />
                        <label htmlFor="name">Aliment</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="quantity" type="number" className="validate" min={0} max={100}  onChange={updateFoodQuantity} required/>
                        <label htmlFor="quantity">Quantité</label>
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="waves-effect waves-light btn">Ajouter</button>
                    <button type="button" className="waves-effect waves-light btn" onClick={onClickCancelHandler}>Annuler</button>
                </div>
            </form>
        </div>
    </section>);
};