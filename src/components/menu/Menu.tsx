import { Link } from "react-router-dom";
import "./Menu.css";

interface MenuProperties {
    onClose: Function;
}

export function Menu({ onClose }: MenuProperties) {
    const onClickHandler = () => {
        onClose()
    }
    return (<section className="AppMenu">
        <nav className="black" onClick={onClickHandler}>
            <ul>
                <li>
                    <Link to="familly">Famille</Link>
                </li>
                <li>
                    <Link to="todo">Tâches à faire</Link>
                </li>
                <li>
                    <Link to="planning">Planning</Link>
                </li>
                <li>
                    <Link to="pantry">Garde-Manger</Link>
                </li>
                <li>
                    <Link to="shopping">Courses</Link>
                </li>
                <li>
                    <Link to="meal">Repas</Link>
                </li>
                <li>
                    <Link to="cooking-recipe">Recettes</Link>
                </li>
                <li>
                    <Link to="settings">Paramètes</Link>
                </li>
            </ul>
        </nav>
    </section>)
}