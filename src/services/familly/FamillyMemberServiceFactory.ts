import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { FamillyMemberMockServiceProvider } from "./FamillyMemberMockServiceProvider";
import { FamillyMemberRestServiceProvider } from "./FamillyMemberRestServiceProvider";
import { FamillyMemberService } from "./FamillyMemberService";

export class FamillyMemberServiceFactory {

    /**
     * Create a famillyMember service provider.
     * 
     * @param type The type of the service to create. Can be a MOCK or a REST_SERVICE.
     * @returns The right instance of the service provider matching with the given type of service.
     */
    static create(type: ServiceProviderType): FamillyMemberService {
        let service: FamillyMemberService;
        if (type === ServiceProviderType.REST_SERVICE) {
            service = FamillyMemberRestServiceProvider.getInstance();
        } else {
            service = FamillyMemberMockServiceProvider.getInstance(true);
        }
        return service;
    }
}