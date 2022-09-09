import { MockDB } from "../../commons/MockDB";
import { Food } from "../../entities/Food";
import { FoodService } from "./FoodService";

export class FoodMockServiceProvider implements FoodService {

    private static instance: FoodService;

    /**
     * Get the unique instance (or create it if it's doesn't exists) of this service provider.
     *  
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     * @returns The unique instance of this service provider.
     */
    static getInstance(mustInitializaData: boolean = false): FoodService {
        if (!FoodMockServiceProvider.instance) {
            FoodMockServiceProvider.instance = new FoodMockServiceProvider(mustInitializaData);
        }
        return FoodMockServiceProvider.instance;
    }

    /**
     * Generate a random number inside the range including limits (minimum, maximum).
     * 
     * @param min Minimum value to generate.
     * @param max Maximum value to generate.
     * @returns Random number.
     */
    private getRandomNumberInRange(min: number, max: number) { return Math.round(Math.random () * (max - min) + min) ; }

    /**
     * Constructor for this service provider.
     * 
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     */
    private constructor(mustInitializaData: boolean = false) {
        if (mustInitializaData) {
            const totalFoods: number = this.getRandomNumberInRange(1, 50);
            for (let counter = 0; counter < totalFoods; counter++) {
                let id: number = counter+1;
                let food = new Food.FoodBuilder()
                        .withId(id)
                        .withName(String('NOURITURE-#').concat(String(id)))
                        .withQuantity(this.getRandomNumberInRange(0, 2))
                        .build();
                MockDB.EDIBLE.push(food);
            }
        }


    }
    addFood(food: Food): Promise<Food> {
        return new Promise<Food>((resolve, reject) => {
            if (food) {
                this.searchInPantryByName(food.getName()).then((foodsWithSameName) => {
                    if (foodsWithSameName.length == 0) {
                        MockDB.EDIBLE.push(food);
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
                let index: number = MockDB.EDIBLE.indexOf(food);
                if (index >= 0) {
                    let deletedFoods: Array<Food> = MockDB.EDIBLE.splice(index, 1);
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
            let filteredFoods: Array<Food> = MockDB.EDIBLE.filter((food) => food.getId() === id);
            if (filteredFoods.length > 0) {
                resolve(filteredFoods[0]);
            } else {
                reject(404);
            }
        });
    }

    
    searchInPantryByName(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(MockDB.EDIBLE.filter((food) => food.getName().toLowerCase() == name.toLowerCase()));
        });
    }

    searchInPantryByNameContains(name: string): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(MockDB.EDIBLE.filter((food) => food.getName().toLowerCase().includes(name.toLowerCase())));
        });
    }

    consume(food: Food, quantity: number): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    
    listPantry(): Promise<Array<Food>> {
        return new Promise<Array<Food>>((resolve, reject) => {
            resolve(MockDB.EDIBLE);
        });
    }

};