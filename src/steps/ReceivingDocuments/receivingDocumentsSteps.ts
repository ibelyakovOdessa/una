import { step } from "allure-js-commons";
import { PaymentTermEntity } from "../../entities/PaymentTerms/PaymentTermEntity";
import { api, factories } from "../../container";
import { FactoryOption } from "../../factories/FactoriesFacade";
import { ReceivingDocumentEntity } from "../../entities/ReceivingDocuments/ReceivingDocumentEntity";

type Override<T> = Partial<T>;

export async function giveMeReceivingDocument(
    entityToCreate: ReceivingDocumentEntity,
    options: FactoryOption = FactoryOption.PERSIST
): Promise<ReceivingDocumentEntity> {
  return await step(`Preparing receiving document entity`, async () => {

    const rdToCreate = await factories().receivingDocumentFactory.create(entityToCreate)

    if (options === FactoryOption.GENERATE) {
        return rdToCreate
    }

    if (options === FactoryOption.RETRIEVE && entityToCreate.key) {
        const requested = await api().getApi().receivingDocuments.getReceivingDocument(entityToCreate.key)
        return ReceivingDocumentEntity.fromResponseModel(requested)
    } 

    const rdKey = await api().getApi().receivingDocuments.create36(entityToCreate.toRequestModel())
    if ('errors' in rdKey && rdKey.errors) {
        throw new Error(`Error response:\n${JSON.stringify(rdKey, null, 2)}`);
    }
    const newRdDto = await api().getApi().receivingDocuments.getReceivingDocument(rdKey.key!)
    return ReceivingDocumentEntity.fromResponseModel(newRdDto)

  })
}