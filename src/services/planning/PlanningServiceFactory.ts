import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { PlanningMockServiceProvider } from "./PlanningMockServiceProvider";
import { PlanningRestServiceProvider } from "./PlanningRestServiceProvider";
import { PlanningService } from "./PlanningService";

export class PlanningServiceFactory {
    static create(type: ServiceProviderType): PlanningService {
        let service: PlanningService;
        if (type === ServiceProviderType.REST_SERVICE) {
            service = PlanningRestServiceProvider.getInstance();
        } else {
            service = PlanningMockServiceProvider.getInstance(true);
        }
        return service;
    }
}