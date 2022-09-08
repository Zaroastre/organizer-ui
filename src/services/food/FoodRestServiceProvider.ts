import { Food } from "../../entities/Food";
import { FoodService } from "./FoodService";

export class FoodRestServiceProvider implements FoodService {

    private static instance: FoodService;

    static getInstance(): FoodService {
        if (!FoodRestServiceProvider.instance) {
            FoodRestServiceProvider.instance = new FoodRestServiceProvider()
        }
        return FoodRestServiceProvider.instance;
    }

    private constructor() {
        
    }
    addFood(food: Food): Promise<Food> {
        return new Promise<Food>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    removeFromPantryByFoodId(id: number): Promise<Food> {
        return new Promise<Food>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }

    searchInPantryByName(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }

    findById(id: number): Promise<Food> {
        return new Promise<Food>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    
    searchInPantryByNameContains(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }

    buy(food: Food, quantity: number): Promise<Array<Food>> {
        return new Promise<Array<Food>>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }

    consume(food: Food, quantity: number): Promise<Array<Food>> {
        return new Promise<Array<Food>>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    
    listPantry(): Promise<Array<Food>> {
        return new Promise<Array<Food>>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }

};