import { container, inject, injectable } from "tsyringe";
import { PaymentTermFactory } from "./PaymentTerms/PaymentTermFactory";

@injectable()
export class FactoriesFacade {

    // public paymentTermFactory = container.resolve(PaymentTermFactory);


    // constructor(
        
    // ) {
    // }

    constructor(
        // @inject(PaymentTermFactory) public paymentTermFactory: PaymentTermFactory,
  ) {}
}