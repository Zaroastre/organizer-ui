import { Food } from "../../entities/Food";
import "./PoppupAddToCart.css";

interface PopupAddToCartProperties {
    food: Food;
}

export function PopupAddToCart({food}: PopupAddToCartProperties) {

    return (<section className="PopupAddToCart" id="popup-add-to-cart">
        <h2>Ajouter <code>{food.name}</code> à la liste de course</h2>
        <form action="">
            <div>
                <label htmlFor="">Quantité à acheter</label>
                <input type="number" name="quantity" id="quantity" min={0} max={100} defaultValue={0}/>
            </div>
            <div>
                <button type="submit">Ajouter à la liste des courses</button>
            </div>
        </form>
    </section>);
}