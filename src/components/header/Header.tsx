import { Link } from "react-router-dom";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";

export function Header() {
    return (<header>
        <Breadcrumbs urlsTree={["/"]}  />
    </header>);
}