import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { FoodMockServiceProvider } from "./FoodMockServiceProvider";
import { FoodRestServiceProvider } from "./FoodRestServiceProvider";
import { FoodService } from "./FoodService";

export class FoodServiceFactory {
    static create(type: ServiceProviderType): FoodService {
        let service: FoodService;
        if (type === ServiceProviderType.REST_SERVICE) {
            service = FoodRestServiceProvider.getInstance();
        } else {
            service = FoodMockServiceProvider.getInstance();
        }
        return service;
    }
}