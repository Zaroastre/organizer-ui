import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Menu } from "../menu/Menu";

interface HeaderProperties {
    icon: JSX.Element;
    title: string;

}

export function Header({icon, title}: HeaderProperties) {
    const [isMenuDisplayed, setIsMenuDisplayed] = useState<boolean>(false);

    const onDisplayMenuHandler = () => {
        setIsMenuDisplayed(true);
    }

    const onCloseHandler = () => {
        setIsMenuDisplayed(false);
    }

    return (<header>
        <nav className="black">
            <div className="nav-wrapper">
                <div className="col s12">
                    <button
                        type="button"
                        className="waves-effect waves-light btn black"
                        onClick={onDisplayMenuHandler}
                    >
                        <i className="material-icons left">menu</i>
                        Menu
                    </button>
                </div>
            </div>
        </nav>

        {(isMenuDisplayed) ? (<Menu onClose={onCloseHandler} />) : (null)}

    </header>);
}