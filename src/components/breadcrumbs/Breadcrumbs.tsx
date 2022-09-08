import { Link } from "react-router-dom";

interface BreadcrumbsProperties {
    urlsTree: Array<string>;
}

export function Breadcrumbs({ urlsTree }: BreadcrumbsProperties) {
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <div className="col s12">
                    {
                        urlsTree.map((menuItem) => (
                            <Link to={menuItem}>{menuItem}</Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}