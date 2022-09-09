import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { FoodMockServiceProvider } from "./FoodMockServiceProvider";
import { FoodRestServiceProvider } from "./FoodRestServiceProvider";
import { FoodService } from "./FoodService";

export class FoodServiceFactory {

    /**
     * Create a food service provider.
     * 
     * @param type The type of the service to create. Can be a MOCK or a REST_SERVICE.
     * @returns The right instance of the service provider matching with the given type of service.
     */
    static create(type: ServiceProviderType): FoodService {
        let service: FoodService;
        if (type === ServiceProviderType.REST_SERVICE) {
            service = FoodRestServiceProvider.getInstance();
        } else {
            service = FoodMockServiceProvider.getInstance(true);
        }
        return service;
    }
}