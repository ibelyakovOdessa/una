import 'reflect-metadata';

import { plainToClass, plainToInstance } from 'class-transformer';
import test from 'playwright/test';
import { User } from '../generated_api/User';
import { TestApiClient } from '../TestApiClient';
import { PaymentTermPagedResponse, PersonModel } from '../generated_api/data-contracts';
import { api, factories, paymentTermFactory } from '../container';
import { PaymentTermEntity } from '../entities/PaymentTerms/PaymentTermEntity';
import { expect } from 'chai';
import { diff } from 'jest-diff';
import { assertEntitiesEqual } from '../utils/Assertions';
import { loginAsPlatformAdmin } from '../steps/Authorization/loginSteps';
import { giveMePaymentTerm as giveMePaymentTerm } from '../steps/PaymentTerms/paymentTermsSteps';
import { FactoryOption } from '../factories/FactoriesFacade';
import { giveMeReceivingDocument } from '../steps/ReceivingDocuments/receivingDocumentsSteps';
import * as Allure from 'allure-js-commons';
import { DateTime } from 'luxon';



test('create and retrieve payment term', async ({ request }) => {
  await loginAsPlatformAdmin()

  const ptToCreate = await factories().paymentTermFactory.create({
    // key: 3
  })
  console.log(ptToCreate.toPlain())
  // const newPT = await giveMePaymentTerm(ptToCreate, FactoryOption.PERSIST)
  // ptToCreate.key = newPT.key
  // assertEntitiesEqual(newPT, ptToCreate)
  // await api().getApi().paymentTerms.delete21(newPT.key!)

});

test('create and retrieve receiving document', async ({  }) => {
  Allure.displayName("Creation of receiving document")
  Allure.tags("api", "ReceivingDocuments")
  Allure.issue("PLAT-9999")
  
  await loginAsPlatformAdmin()

  const rdToCreate = await factories().receivingDocumentFactory.create({
    // key: 3
  })
  console.log(rdToCreate.toPlain())
  const newRd = await giveMeReceivingDocument(rdToCreate, FactoryOption.PERSIST)
  console.log(newRd)
  rdToCreate.key = newRd.key
  assertEntitiesEqual(rdToCreate, newRd)
  // await api().getApi().paymentTerms.delete21(newPT.key!)

});

const dates = [
    DateTime.local(2024, 12, 12),
    DateTime.local(2026, 12, 12)
];
for (const date of dates) {
    test(`create and retrieve receiving document with date ${date}`, async ({  }) => {
      Allure.displayName(`create and retrieve receiving document with date ${date}`)
      Allure.tags("api", "ReceivingDocuments")
      Allure.issue("PLAT-9999")
      Allure.tms("TR-9999")
      Allure.parameter('documentDate', date.toString())
      
      await loginAsPlatformAdmin()

      await Allure.step("Generate receiving entity", async () => {
        //
      });

      const rdToCreate = await factories().receivingDocumentFactory.create({
        // key: 3
      })
      console.log(rdToCreate.toPlain())
      const newRd = await giveMeReceivingDocument(rdToCreate, FactoryOption.PERSIST)
      console.log(newRd)
      rdToCreate.key = newRd.key
      assertEntitiesEqual(rdToCreate, newRd)
      // await api().getApi().paymentTerms.delete21(newPT.key!)

    });
}


