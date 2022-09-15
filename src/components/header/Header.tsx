import { useState } from "react";
import { Menu } from "../menu/Menu";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";

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
                        className="btn black"
                        onClick={onDisplayMenuHandler}
                    >
                        <MenuIcon />
                        <span>Menu</span>
                    </button>
                </div>
            </div>
        </nav>

        {(isMenuDisplayed) ? (<Menu onClose={onCloseHandler} />) : (null)}

    </header>);
}