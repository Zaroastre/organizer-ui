import { Product } from "../../entities/Product";
import { ShoppingService } from "./ShoppingService";

export class ShoppingMockServiceProvider implements ShoppingService {

    private static instance: ShoppingService;
    private cart: Product[];

    static getInstance(isEmpty: boolean = false): ShoppingService {
        if (!ShoppingMockServiceProvider.instance) {
            ShoppingMockServiceProvider.instance = new ShoppingMockServiceProvider(isEmpty);
        }
        return ShoppingMockServiceProvider.instance;
    }

    private getRandomNumberInRange(min: number, max: number) { return Math.round(Math.random () * (max - min) + min) ; }


    private constructor(isEmpty: boolean = false) {
        this.cart = new Array<Product>();
        if (!isEmpty) {
            const totalFoods: number = this.getRandomNumberInRange(0, 5);
            for (let counter = 0; counter < totalFoods; counter++) {
                let product = new Product();
                product.id = counter+1;
                product.name = String('NOURITURE-#').concat(String(product.id));
                product.quantity = this.getRandomNumberInRange(0, 10);
                this.cart.push(product);
            }
        }


    }
    findById(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    searchInCartByNameContains(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    searchInCartByName(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    addToCart(name: string, quantity: number): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            let matchingProducts: Array<Product> = this.cart.filter((product) => product.name.toLowerCase() === name.toLowerCase());
            if (matchingProducts.length > 0) {
                let product = matchingProducts[0];
                let newQuantity = product.quantity + quantity;
                product.quantity = newQuantity;
            } else {
                let product = new Product();
                product.name = name;
                product.quantity = quantity;
                this.cart.push(product);
            }
        });
    }
    listCart(): Promise<Product[]> {
        return new Promise<Array<Product>>((resolve, reject) => {
            resolve(this.cart);
        });
    }
    searchInCartByProductName(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    removeFromCartByProductId(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    buy(name: string, quantity: number): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            let product: Product = new Product();
            product.name = name;
            product.quantity = quantity;
            console.log(this.cart.length);
            this.cart.push(product);
            console.log(this.cart.length);
            resolve(product);
        });
    }

};