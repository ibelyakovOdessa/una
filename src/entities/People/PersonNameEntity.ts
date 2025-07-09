import { PaymentTermCreateModel, PaymentTermModel, PersonNameModel, PersonSummaryModel, ReceivingDocumentCreateModel, ReceivingDocumentModel, ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { DateTime } from 'luxon';
import { BaseEntity } from "../BaseEntity";


export class PersonNameEntity extends BaseEntity {
    
    constructor(
        public key: number | null = null,
        public username: string | null = null,
        public firstName: string | null = null,
        public middleInitial: string | null = null,
        public lastName: string | null = null,
        public suffix: string | null = null,
    ) {
        super();
    }

    static fromModel(dto: PersonNameModel | null): PersonNameEntity | null {
        if (!dto) {
            return null
        }
        return new PersonNameEntity(
            dto.key ?? null,
            dto.username ?? null,
            dto.firstName ?? null,   
            dto.middleInitial ?? null, 
            dto.lastName ?? null,   
            dto.suffix ?? null   
        );
    }

    toModel(): PersonNameModel {
        return  {
            key: this.key,
            username: this.username,
            firstName: this.firstName,
            middleInitial: this.middleInitial,
            lastName: this.lastName,
            suffix: this.suffix
        }
    }

    toPlain() {
        return {
            __type: 'PersonNameEntity',
            ...this
        }
    }
    
}
