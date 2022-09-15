import { useEffect, useState } from "react";
import { CartList } from "../../components/cartList/CartList";
import { ProductCreator } from "../../components/productCreator/ProductCreator";
import { Product } from "../../entities/Product";
import { ShoppingService } from "../../services/shopping/ShoppingService";
import "../views.css";

interface ShoppingViewProperties {
    shoppingService: ShoppingService;
}

export function ShoppingView({shoppingService}: ShoppingViewProperties) {

    const [products, setProducts] = useState(new Array<Product>());

    useEffect(() => {
        refreshListOfFoods();
    }, [products]);

    const refreshListOfFoods = () => {
        shoppingService.listCart().then((productsList) => {
            setProducts(productsList);
        }).catch((reason: any) => {
            console.error(reason);
        });
    }

    return (<section className="View" id="shopping">
        <h1>Courses</h1>
        <div>
            <ProductCreator shoppingService={shoppingService} onBuyProduct={refreshListOfFoods} />
            <CartList values={products} />
        </div>
    </section>);
};