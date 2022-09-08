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
            const totalFoods: number = this.getRandomNumberInRange(1, 50);
            for (let counter = 0; counter < totalFoods; counter++) {
                let food = new Food();
                food.id = counter+1;
                food.name = String('NOURITURE-#').concat(String(food.id));
                food.stock = this.getRandomNumberInRange(0, 2);
                this.foods.push(food);
            }
        }


    }
    addFood(food: Food): Promise<Food> {
        return new Promise<Food>((resolve, reject) => {
            if (food) {
                this.searchInPantryByName(food.name).then((foodsWithSameName) => {
                    if (foodsWithSameName.length == 0) {
                        this.foods.push(food);
                        resolve(food);
                    } else {
                        reject(String(400));
                    }
                }).catch((reason) => {
                    reject(reason);
                })
            } else {
                reject(String(400));
            }
        });
    }
    removeFromPantryByFoodId(id: number): Promise<Food> {
        return new Promise<Food>((resolve, reject) => {
            this.findById(id).then((food) => {
                let index: number = this.foods.indexOf(food);
                if (index >= 0) {
                    let deletedFoods: Array<Food> = this.foods.splice(index, 1);
                    if (deletedFoods.length > 0) {
                        resolve(deletedFoods[0]);
                    } else {
                        reject(String(404));
                    }
                } else {
                    reject(String(404));
                }
            }).catch((reason) => {
                reject(reason);
            })
        });
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