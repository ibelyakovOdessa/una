import { PaymentTermCreateModel, PaymentTermModel } from "../../generated_api/data-contracts";
import { BaseEntity } from "../BaseEntity";
import { DtoConvertible } from "../DtoConvertible";

export class PaymentTermEntity extends BaseEntity implements DtoConvertible<PaymentTermCreateModel, PaymentTermModel> {
    
    constructor(
        public key: number | null = null,
        public code: string | null = null,
        public description: string | null = null,
        public days: number | null = null,
        public defaultSelected: boolean | null = null,
        public active: boolean | null = null,
        public discountDays: number | null = null,
        public discountPercent: number | null = null,
        public payWhenPaid: boolean | null = null
    ) {
        super();
    }
    
    
    
    toRequestModel(): PaymentTermCreateModel {
        return {
            code: this.code,
            description: this.description,
            days: this.days,
            defaultSelected: this.defaultSelected,
            discountPercent: this.discountPercent,
            active: this.active,
            discountDays: this.discountDays,
            payWhenPaid: this.payWhenPaid
        }
    }

    static fromResponseModel(dto: PaymentTermModel): PaymentTermEntity {
        return new PaymentTermEntity(
            dto.key ?? null,
            dto.code ?? null,
            dto.description ?? null,
            dto.days ?? null,
            dto.defaultSelected ?? null,
            dto.active ?? null,
            dto.discountDays ?? null,
            dto.discountPercent ?? null,
            dto.payWhenPaid ?? null,
        );
    }
}
