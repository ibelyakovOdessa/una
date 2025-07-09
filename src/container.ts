import 'reflect-metadata';

import { container } from 'tsyringe';
import { TestApiClient } from './TestApiClient';
import { PaymentTermFactory } from './factories/PaymentTerms/PaymentTermFactory';
import { FactoriesFacade } from './factories/FactoriesFacade';


container.registerSingleton(TestApiClient, TestApiClient);
container.registerSingleton(FactoriesFacade, FactoriesFacade);
container.registerSingleton(PaymentTermFactory, PaymentTermFactory);


export function api(): TestApiClient {
    return container.resolve(TestApiClient);
}

export function factories(): FactoriesFacade {
  return container.resolve(FactoriesFacade);
}

export function paymentTermFactory(): PaymentTermFactory {
  return container.resolve(PaymentTermFactory);
}