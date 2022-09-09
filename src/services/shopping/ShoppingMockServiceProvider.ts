import { MockDB } from "../../commons/MockDB";
import { Product } from "../../entities/Product";
import { ShoppingService } from "./ShoppingService";

export class ShoppingMockServiceProvider implements ShoppingService {

    private static instance: ShoppingService;

    /**
     * Get the unique instance (or create it if it's doesn't exists) of this service provider.
     *  
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     * @returns The unique instance of this service provider.
     */
    static getInstance(mustInitializaData: boolean = false): ShoppingService {
        if (!ShoppingMockServiceProvider.instance) {
            ShoppingMockServiceProvider.instance = new ShoppingMockServiceProvider(mustInitializaData);
        }
        return ShoppingMockServiceProvider.instance;
    }

    /**
     * Generate a random number inside the range including limits (minimum, maximum).
     * 
     * @param min Minimum value to generate.
     * @param max Maximum value to generate.
     * @returns Random number.
     */
    private getRandomNumberInRange(min: number, max: number) { return Math.round(Math.random() * (max - min) + min); }

    /**
     * Constructor for this service provider.
     * 
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     */
    private constructor(mustInitializaData: boolean = false) {
        if (mustInitializaData) {
            const totalFoods: number = this.getRandomNumberInRange(0, 5);
            for (let counter = 0; counter < totalFoods; counter++) {
                let id: number = counter + 1;
                let product = new Product.ProductBuilder()
                    .withId(id)
                    .withName(String('NOURITURE-#').concat(String(id)))
                    .withQuantity(this.getRandomNumberInRange(0, 2))
                    .build();
                MockDB.CART.push(product);
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
            let matchingProducts: Array<Product> = MockDB.CART.filter((product) => product.getName().toLowerCase() === name.toLowerCase());
            if (matchingProducts.length > 0) {
                let product = matchingProducts[0];
                let newQuantity = product.getQuantity() + quantity;
                product.setQuantity(newQuantity);
            } else {
                let product = new Product.ProductBuilder()
                    .withName(name)
                    .withQuantity(quantity)
                    .build();
                MockDB.CART.push(product);
            }
        });
    }
    listCart(): Promise<Product[]> {
        return new Promise<Array<Product>>((resolve, reject) => {
            resolve(MockDB.CART);
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

            let product = new Product.ProductBuilder()
                .withName(name)
                .withQuantity(quantity)
                .build();
            MockDB.CART.push(product);
            resolve(product);
        });
    }

};