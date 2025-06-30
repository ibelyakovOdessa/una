import 'reflect-metadata';

import { plainToClass, plainToInstance } from 'class-transformer';
import test, { expect } from 'playwright/test';
import { User } from '../generated_api/User';
import { TestApiClient } from '../TestApiClient';
import { PaymentTermPagedResponse, PersonModel } from '../generated_api/data-contracts';
import { api, factories, fff } from '../container';
import { PaymentTermEntity } from '../entities/PaymentTerms/PaymentTermEntity';


test('second test', async ({ request }) => {
  await api().loginBy("admin")
  const a = await api().getApi().paymentTerms.get28()
  console.log(a)

  const b = PaymentTermEntity.fromDto(a.items[0])
  console.log(b)

  const c = await fff().create()
  console.log(c)
});
