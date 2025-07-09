import { step } from "allure-js-commons";
import { PaymentTermEntity } from "../../entities/PaymentTerms/PaymentTermEntity";
import { api, factories } from "../../container";
import { FactoryOption } from "../../factories/FactoriesFacade";

type Override<T> = Partial<T>;

export async function giveMePaymentTerm(
    entityToCreate: PaymentTermEntity,
    options: FactoryOption = FactoryOption.PERSIST
): Promise<PaymentTermEntity> {
  return await step(`Preparing payment term entity`, async () => {

    const ptToCreate = await factories().paymentTermFactory.create(entityToCreate)

    if (options === FactoryOption.GENERATE) {
        return ptToCreate
    }

    if (options === FactoryOption.RETRIEVE && entityToCreate.key) {
        const requested = await api().getApi().paymentTerms.getByKey27(entityToCreate.key)
        return PaymentTermEntity.fromResponseModel(requested)
    } 

    const ptKey = await api().getApi().paymentTerms.create24(entityToCreate.toRequestModel())
    const newPtDto = await api().getApi().paymentTerms.getByKey27(ptKey.key!)
    return PaymentTermEntity.fromResponseModel(newPtDto)
  })
}