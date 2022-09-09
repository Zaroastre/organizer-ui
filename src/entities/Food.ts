import { Product } from "./Product";

export class Food extends Product {
    protected constructor(name: string, id=0, quantity=0) {
        super(name, id, quantity);
    }

    static FoodBuilder = class FoodBuilder {
        private id: number = 0;
        private name: string = '';
        private quantity: number = 0;

        public withId(id: number): FoodBuilder {
            this.id = id;
            return this;
        }
        public withName(name: string): FoodBuilder {
            this.name = name;
            return this;
        }
        public withQuantity(quantity: number): FoodBuilder {
            this.quantity = quantity;
            return this;
        }
        public build(): Food {
            return new Food(this.name, this.id, this.quantity);
        }
    }
}