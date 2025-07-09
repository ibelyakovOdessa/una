import { container, inject, injectable } from "tsyringe";
import { PaymentTermEntity } from "../../entities/PaymentTerms/PaymentTermEntity";
import { TestApiClient } from "../../TestApiClient";
import { api } from "../../container";
import { ReceivingDocumentEntity } from "../../entities/ReceivingDocuments/ReceivingDocumentEntity";
import { KeyCodeEntity } from "../../entities/KeyCodeEntity";
import { KeyNameCodeEntity } from "../../entities/KeyNameCodeEntity";
import { CurrencyCodeDisplayEntity } from "../../entities/CurrencyCodeDisplayEntity";
import { ReceivingDocumentModelStatusEnum } from "../../generated_api/data-contracts";
import { DateTime } from "luxon";

type Override<T> = Partial<T>;

@injectable()
export class ReceivingDocumentFactory {

  public api = container.resolve(TestApiClient);

    constructor(
    ) { }

    async create(overrides: Override<ReceivingDocumentEntity> = {}): Promise<ReceivingDocumentEntity> {

        const poPagedResponse = await api().getApi().receivingDocuments.availablePurchaseOrders({}, {page: 1, pageSize: 2000})
        const purchaseOrders = poPagedResponse.items!
        if (purchaseOrders?.length === 0) {
            throw new Error("No available purchase orders for receiving document")
        }
        const purchaseOrder = purchaseOrders[0] // refactor. should be taken if overrides does not have PO 

        const entity = new ReceivingDocumentEntity()

        entity.key = overrides.key ?? null
        entity.purchaseOrder = overrides.purchaseOrder ?? new KeyCodeEntity(purchaseOrder.key, purchaseOrder.documentNumber)
        entity.legalEntity = KeyNameCodeEntity.fromModel(purchaseOrder.legalEntity)
        entity.vendorOrg = KeyNameCodeEntity.fromModel(purchaseOrder.vendorOrg)
        entity.owningOrg = KeyNameCodeEntity.fromModel(purchaseOrder.owningOrg)
        entity.currency = new CurrencyCodeDisplayEntity(119, "US Dollar", "USD", 2), // should be taken from config/instance currency,
        entity.documentNumber = purchaseOrder.documentNumber
        entity.deletable = true
        entity.retractable = false
        entity.documentDate = overrides.documentDate ?? DateTime.local()
        entity.status = overrides.status ?? ReceivingDocumentModelStatusEnum.INUSE
     
        return entity

    }
}