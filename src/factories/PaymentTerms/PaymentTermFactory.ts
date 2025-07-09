import { container, inject, injectable } from "tsyringe";
import { PaymentTermEntity } from "../../entities/PaymentTerms/PaymentTermEntity";
import { TestApiClient } from "../../TestApiClient";
import { api } from "../../container";

type Override<T> = Partial<T>;

@injectable()
export class PaymentTermFactory {

  public api = container.resolve(TestApiClient);

    constructor(
    ) { }

    async create(overrides: Override<PaymentTermEntity> = {}): Promise<PaymentTermEntity> {
      
      return new PaymentTermEntity(
        overrides.key ?? null,
        overrides.code ?? Math.random().toString(36).substring(0, 25),
        overrides.description ?? Math.random().toString(36).substring(0, 128),
        overrides.days ?? Math.floor(Math.random() * 1000),
        overrides.defaultSelected ?? false,
        overrides.active ?? true,
        overrides.days ?? 1,
        overrides.discountPercent ?? overrides.days ?? 10,
        overrides.payWhenPaid ?? false
      );
    }
}