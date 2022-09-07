import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../entities/Product";

interface CardProperties {
    url: string;
    title: string;
}

export function Card({url, title}: CardProperties) {
    return (<div className="Card">
        <Link to={url}>{title}</Link>
    </div>);
}