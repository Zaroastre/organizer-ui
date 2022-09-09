import { Food } from "../../entities/Food";

interface PopupDeleteFromPantryProperties {
    food: Food,
    onConfirm: Function;
    onCancel: Function
}

export function PopupDeleteFromPantry({food, onConfirm, onCancel}: PopupDeleteFromPantryProperties) {

    const onConfirmHandler = (event: any) => {
        event.preventDefault();
        onConfirm();
    }
    const onCnacelHandler = (event: any) => {
        event.preventDefault();
        onCancel();
    }

    return (<section className="PopupDeleteFromPantry">
        <div>
            <p>Êtes-vous sûr.e de vouloir supprimer définitivement cet aliment ({food.getQuantity()}x{food.getName()}) de votre garde manger ?</p>
            <div>
                <button type="button" onClick={onConfirmHandler}>Oui, supprimer</button>
                <button type="button" onClick={onCnacelHandler}>Non, annuler</button>
            </div>
        </div>
    </section>);
}