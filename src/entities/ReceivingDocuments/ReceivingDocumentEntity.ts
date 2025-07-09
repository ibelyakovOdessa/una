import { PaymentTermCreateModel, PaymentTermModel, PersonNameModel, PersonSummaryModel, ReceivingDocumentCreateModel, ReceivingDocumentModel, ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { BaseEntity } from "../BaseEntity";
import { DtoConvertible } from "../DtoConvertible";
import { DateTime } from 'luxon';
import { KeyCodeEntity } from "../KeyCodeEntity";
import { KeyNameCodeEntity } from "../KeyNameCodeEntity";
import { CurrencyCodeDisplayEntity } from "../CurrencyCodeDisplayEntity";
import { PersonNameEntity } from "../People/PersonNameEntity";


export class ReceivingDocumentEntity extends BaseEntity implements DtoConvertible<ReceivingDocumentCreateModel, ReceivingDocumentModel> {
    
    constructor(
        public key: number | null = null,
        public purchaseOrder: KeyCodeEntity | null = null,
        public legalEntity: KeyNameCodeEntity | null = null,
        public owningOrg: KeyNameCodeEntity | null = null,
        public vendorOrg: KeyNameCodeEntity | null = null,
        public currency: CurrencyCodeDisplayEntity | null = null,
        public documentNumber: string | null = null,
        public status: ReceivingDocumentModelStatusEnum | null = null,
        public deletable: Boolean | null = null,
        public retractable: Boolean | null = null,
        public createdBy: PersonNameEntity | null = null,
        public createdTimestamp: Date | null = null,
        public lastModifiedBy: PersonNameEntity | null = null,
        public lastModifiedTimestamp: Date | null = null,
        public completedBy: PersonNameEntity | null = null,
        public completedTimestamp: Date | null = null,
        public retractedBy: PersonNameEntity | null = null,
        public retractedTimestamp: Date | null = null,
        public documentDate: DateTime | null = null
        
    ) {
        super();
    }
    
    
    
    toRequestModel(): ReceivingDocumentCreateModel {
        return {
            purchaseOrderKey: this.purchaseOrder?.key ?? null,
            documentNumber: this.documentNumber ?? null,
            documentDate: this.documentDate?.toISODate() ?? null
        }
    }

    static fromResponseModel(dto: ReceivingDocumentModel): ReceivingDocumentEntity {
        return new ReceivingDocumentEntity(
            dto.key ?? null,
            dto.purchaseOrder ? new KeyCodeEntity(dto.purchaseOrder.key, dto.purchaseOrder.documentNumber) : null,
            dto.purchaseOrder ? KeyNameCodeEntity.fromModel(dto.purchaseOrder.legalEntity) : null,
            dto.purchaseOrder ? KeyNameCodeEntity.fromModel(dto.purchaseOrder.owningOrg) : null,
            dto.purchaseOrder ? KeyNameCodeEntity.fromModel(dto.purchaseOrder.vendorOrg) : null,
            dto.purchaseOrder ? CurrencyCodeDisplayEntity.fromModel(dto.purchaseOrder.currency) : null,
            dto.documentNumber ?? null,
            dto.status ?? null,
            dto.deletable!,
            dto.retractable!,
            dto.createdBy ? PersonNameEntity.fromModel(dto.createdBy) : null,
            dto.retractedTimestamp ? new Date(dto.retractedTimestamp) : null,
            dto.lastModifiedBy ? PersonNameEntity.fromModel(dto.lastModifiedBy) : null,
            dto.lastModified ? new Date(dto.lastModified) : null,
            dto.completedBy ? PersonNameEntity.fromModel(dto.completedBy) : null,
            dto.completedTimestamp ? new Date(dto.completedTimestamp) : null,
            dto.retractedBy ? PersonNameEntity.fromModel(dto.retractedBy) : null,
            dto.retractedTimestamp ? new Date(dto.retractedTimestamp) : null,
            dto.documentDate ? DateTime.fromISO(dto.documentDate) : null
        );
    }
}
