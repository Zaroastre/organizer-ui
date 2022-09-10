import { Link } from "react-router-dom";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";

interface HeaderProperties {
    icon: JSX.Element;
    title: string;

}

export function Header({icon, title}: HeaderProperties) {
    return (<header>
        <Breadcrumbs icon={icon} title={title}  />
    </header>);
}