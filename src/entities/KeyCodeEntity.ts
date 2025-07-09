import { PaymentTermCreateModel, PaymentTermModel, PersonNameModel, PersonSummaryModel, ReceivingDocumentCreateModel, ReceivingDocumentModel, ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { DateTime } from 'luxon';
import { BaseEntity } from "./BaseEntity";
import { KeyCodeModel } from "../generated_api/data-contracts";


export class KeyCodeEntity extends BaseEntity {
    
    constructor(
        public key: number | null = null,
        public code: string | null = null,
    ) {
        super();
    }
    
    static fromModel(dto: KeyCodeModel): KeyCodeEntity {
            return new KeyCodeEntity(
                dto.key ?? null,
                dto.code?? null   
            );
    }
    
    toModel(): KeyCodeModel {
        return  {
            key: this.key,
            code: this.code
        }
    }
}
