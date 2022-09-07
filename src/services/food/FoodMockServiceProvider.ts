import { Food } from "../../entities/Food";
import { FoodService } from "./FoodService";

export class FoodMockServiceProvider implements FoodService {

    private static instance: FoodService;
    private foods: Food[];

    static getInstance(isEmpty: boolean = false): FoodService {
        if (!FoodMockServiceProvider.instance) {
            FoodMockServiceProvider.instance = new FoodMockServiceProvider(isEmpty);
        }
        return FoodMockServiceProvider.instance;
    }

    private getRandomNumberInRange(min: number, max: number) { return Math.round(Math.random () * (max - min) + min) ; }


    private constructor(isEmpty: boolean = false) {
        this.foods = new Array<Food>();
        if (!isEmpty) {
            const totalFoods: number = this.getRandomNumberInRange(1, 10);
            for (let counter = 0; counter < totalFoods; counter++) {
                let food = new Food();
                food.id = counter+1;
                food.name = String('NOURITURE-#').concat(String(food.id));
                food.stock = this.getRandomNumberInRange(0, 2);
                this.foods.push(food);
            }
        }


    }
    findById(id: number): Promise<Food> {
        return new Promise<Food>((resolve, reject) => {
            let filteredFoods: Array<Food> = this.foods.filter((food) => food.id === id);
            if (filteredFoods.length > 0) {
                resolve(filteredFoods[0]);
            } else {
                reject(404);
            }
        });
    }

    
    searchInPantryByName(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(this.foods.filter((food) => food.name.toLowerCase() == name.toLowerCase()));
        });
    }

    searchInPantryByNameContains(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(this.foods.filter((food) => food.name.toLowerCase().includes(name.toLowerCase())));
        });
    }

    consume(food: Food, quantity: number): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    
    listPantry(): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(this.foods);
        });
    }

};