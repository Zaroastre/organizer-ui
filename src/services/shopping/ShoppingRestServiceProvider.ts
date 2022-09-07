import { Product } from "../../entities/Product";
import { ShoppingService } from "./ShoppingService";

export class ShoppingRestServiceProvider implements ShoppingService {

    private static instance: ShoppingService;

    static getInstance(): ShoppingService {
        if (!ShoppingRestServiceProvider.instance) {
            ShoppingRestServiceProvider.instance = new ShoppingRestServiceProvider()
        }
        return ShoppingRestServiceProvider.instance;
    }

    private constructor() {
        
    }
    searchInCartByNameContains(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    searchInCartByName(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    
    addToCart(name: string, quantity: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    listCart(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    searchInCartByProductName(name: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    removeFromCartByProductId(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    buy(name: string, quantity: number): Promise<Product> {
        return new Promise<Product>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }


};