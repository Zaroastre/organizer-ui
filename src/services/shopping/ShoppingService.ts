import { Product } from "../../entities/Product";

/**
 * 
 */
export interface ShoppingService {

    addToCart(name: string, quantity: number): Promise<Product>;
    buy(name: string, quantity: number): Promise<Product>;
    listCart(): Promise<Array<Product>>;
    findById(id: number): Promise<Product>;
    searchInCartByNameContains(name: string): Promise<Array<Product>>;
    searchInCartByName(name: string): Promise<Array<Product>>;
    removeFromCartByProductId(id: number): Promise<Product>;
    
}