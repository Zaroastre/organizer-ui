import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbsProperties {
    icon: JSX.Element;
    title: string;
}

export function Breadcrumbs({ icon, title }: BreadcrumbsProperties) {
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <div className="col s12">
                    <Link to="/"><HomeIcon /></Link>
                    {icon}
                    {title}
                </div>
            </div>
        </nav>
    );
}