import { useEffect, useState } from "react";
import { Modal } from "../../components/modal/Modal";
import { PantryList } from "../../components/pantryList/PantryList";
import { Food } from "../../entities/Food";
import { FoodService } from "../../services/food/FoodService";
import { ShoppingService } from "../../services/shopping/ShoppingService";

import "../views.css";

interface PantryViewProperties {
    foodService: FoodService;
    shoppingService: ShoppingService;
}

export function PantryView({ foodService, shoppingService }: PantryViewProperties) {

    const [foods, setFoods] = useState(new Array<Food>());
    const [isPopupAddToCartVisible, setPopupAddToCartVisible] = useState<boolean>(false);
    const [isPopupDeleteFromPantryVisible, setPopupDeleteFromPantryVisible] = useState<boolean>(false);
    const [foodToManage, setFoodToManage] = useState<Food | null>(null);
    const [quantityToBy, setQuantityToBy] = useState<number>(0);

    useEffect(() => {
        refreshListOfFoods();
    }, [foods]);

    const refreshListOfFoods = () => {
        foodService.listPantry().then((foodsList) => {
            setFoods(foodsList);
        }).catch((reason: any) => {
            console.error(reason);
        });
    }

    const updateQuantityToBuy = (event: any) => {
        setQuantityToBy(parseInt(event.target.value));
    }

    const displayPopupAddToCart = (food: Food) => {
        setFoodToManage(food);
        setPopupAddToCartVisible(true);
    }
    const hidePopupAddToCart = () => {
        setPopupAddToCartVisible(false);
        setFoodToManage(null);
    }
    const displayPopupDeleteFromPantry = (food: Food) => {
        setFoodToManage(food);
        setPopupDeleteFromPantryVisible(true);
    }
    const hidePopupDeleteFromPantry = () => {
        setPopupDeleteFromPantryVisible(false);
        setFoodToManage(null);
    }

    const onDelete = () => {
        if (foodToManage) {
            foodService.removeFromPantryByFoodId(foodToManage.getId());
        }
        hidePopupDeleteFromPantry()
    }

    const onPurchase = () => {
        if (foodToManage) {
            shoppingService.addToCart(foodToManage.getName(), quantityToBy);
        }
        hidePopupAddToCart()
    }


    return (<section className="View" id="pantry">
        <h1>Garde-Manger</h1>
        <div>
            <PantryList
                values={foods}
                shoppingService={shoppingService}
                foodService={foodService}
                onDisplayPopupAddToCart={displayPopupAddToCart}
                onDisplayPopupDeleteFromPantry={displayPopupDeleteFromPantry}
            />
        </div>
        {(isPopupAddToCartVisible) ? (<Modal
            id="popup-add-to-cart"
            title="Ajouter à la liste de courses"
            content={(<div>
                <p>Quantité à acheter: <span>{quantityToBy}</span></p> 
                <form action="#">
                    <p className="range-field">
                        <input type="range" min={0} max={10} defaultValue={quantityToBy} onChange={updateQuantityToBuy} />
                    </p>
                </form>
            </div>)}
            footer={(<div>
                <button type="button" className="waves-effect waves-light btn green accent-4" onClick={onPurchase}>Ajouter à la liste de courses</button>
                <button type="button" className="waves-effect waves-light btn black" onClick={hidePopupAddToCart}>Annuler</button>
            </div>)}
        />) : (null)}
        {(isPopupDeleteFromPantryVisible) ? (<Modal
            id="popup-delete-from-pantry"
            title="Supprimer du garde-manger"
            content={(<div>Êtes-vous sûr.e de vouloir supprimer {foodToManage?.getName()} (x{foodToManage?.getQuantity()}) du garde-manger ?</div>)}
            footer={(<div>
                <button type="button" className="waves-effect waves-light btn red accent-4" onClick={onDelete}>Oui, supprimer</button>
                <button type="button" className="waves-effect waves-light btn black" onClick={hidePopupDeleteFromPantry}>Non, annuler</button>
            </div>)}
        />) : (null)}
    </section>);
};