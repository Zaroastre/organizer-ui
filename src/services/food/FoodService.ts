import { Food } from "../../entities/Food";

/**
 * 
 */
export interface FoodService {

    /**
     * 
     * @param id 
     */
    findById(id: number): Promise<Food>;

    /**
     * 
     * @param name 
     */
     searchInPantryByNameContains(name: string): Promise<Array<Food>>;

    /**
     * 
     * @param name 
     */
     searchInPantryByName(name: string): Promise<Array<Food>>;

    /**
     * 
     */
    listPantry(): Promise<Array<Food>>;

    /**
     * 
     * @param food 
     * @param quantity 
     */
    consume(food: Food, quantity: number): Promise<Array<Food>>;

    removeFromPantryByFoodId(id: number): Promise<Food>;

    
    addFood(food: Food): Promise<Food>;
}