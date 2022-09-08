import { Link } from "react-router-dom";

interface CardProperties {
    title: string;
    subtile: string;
    link: string;
}

export function Card({title, subtile, link}: CardProperties) {
    return (<div className="row ">
    <div className="col s12 m6">
        <div className="card grey darken-4">
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>{subtile}</p>
            </div>
            <div className="card-action">
                <Link to={link}>Voir</Link>
            </div>
        </div>
    </div>
</div>)
}