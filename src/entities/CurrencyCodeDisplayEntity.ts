import { PaymentTermCreateModel, PaymentTermModel, PersonNameModel, PersonSummaryModel, ReceivingDocumentCreateModel, ReceivingDocumentModel, ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { DateTime } from 'luxon';
import { BaseEntity } from "./BaseEntity";
import { KeyNameCodeEntity } from "./KeyNameCodeEntity";
import { CurrencyCodeDisplayModel } from "../generated_api/data-contracts";


export class CurrencyCodeDisplayEntity extends KeyNameCodeEntity {
    
    constructor(
        public key: number | null = null,
        public name: string | null = null,
        public code: string | null = null,
        public decimals: number | null = null,
    ) {
        super(key, name, code);
    }
    
    static fromModel(dto: CurrencyCodeDisplayModel | null | undefined): CurrencyCodeDisplayEntity | null {
        if (!dto) {
            return null
        }
        return new CurrencyCodeDisplayEntity(
            dto.key ?? null,
            dto.name?? null,
            dto.code?? null,
            dto.decimals?? null
        );
    }
    
    toModel(): CurrencyCodeDisplayModel {
        return  {
            key: this.key,
            name: this.name,
            code: this.code,
            decimals: this.decimals
        }
    }
}
