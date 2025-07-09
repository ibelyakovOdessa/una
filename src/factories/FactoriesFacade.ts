import { container, inject, injectable } from "tsyringe";
import { PaymentTermFactory } from "./PaymentTerms/PaymentTermFactory";
import { ReceivingDocumentFactory } from "./ReceivingDocuments/ReceivingDocumentFactory";

export enum FactoryOption {
  PERSIST,
  GENERATE,
  RETRIEVE
}

@injectable()
export class FactoriesFacade {

    public paymentTermFactory = container.resolve(PaymentTermFactory);
    public receivingDocumentFactory = container.resolve(ReceivingDocumentFactory);

    constructor(
        // @inject(PaymentTermFactory) public paymentTermFactory: PaymentTermFactory,
  ) {}
}

