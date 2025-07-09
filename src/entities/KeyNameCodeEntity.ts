import { PaymentTermCreateModel, PaymentTermModel, PersonNameModel, PersonSummaryModel, ReceivingDocumentCreateModel, ReceivingDocumentModel, ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { DateTime } from 'luxon';
import { BaseEntity } from "./BaseEntity";
import { KeyNameCodeModel } from "../generated_api/data-contracts";


export class KeyNameCodeEntity extends BaseEntity {
    
    constructor(
        public key: number | null = null,
        public name: string | null = null,
        public code: string | null = null,
    ) {
        super();
    }

    static fromModel(dto: KeyNameCodeModel | null | undefined): KeyNameCodeEntity | null {
        if (!dto) {
            return null
        }
        return new KeyNameCodeEntity(
            dto.key ?? null,
            dto.name?? null,
            dto.code?? null   
        );
    }

    toModel(): KeyNameCodeModel {
        return  {
            key: this.key,
            name: this.name,
            code: this.code
        }
    }
    
}
