import 'reflect-metadata';

import { plainToClass, plainToInstance } from 'class-transformer';
import test from 'playwright/test';
import { Address, User1 } from './tt';
import { User } from '../generated_api/User';


test('first test', async ({  })  => {
  
  
  // JSON-данные (address может отсутствовать)
  const jsonData = {
    id: 1,
    name: "naaaame",
    // name нет в JSON — подставится 'anonymous'
    address: { city: 'Kyiv' }
  };
  console.log("LOG:")
  const metadata = Reflect.getMetadata('design:type', User1, 'address');
  // console.log(metadata); // Должен вывести функцию Date
  // const user = plainToInstance(User1, jsonData);
  // console.log(user);
  // console.log(user.address instanceof Address);
  /*
  User {
    id: 1,
    name: 'anonymous',
    address: Address { city: 'Kyiv' }
  }
  */
});

test('should log correctly', async ({ page }) => {
  
  console.log('Before wait');
  await page.waitForTimeout(2000);  // Ждем 2 секунды
  console.log('After wait');
});

// test('second test', async ({ request }) => {
//   console.log('1111111111111111111111111111');
//   // console.log
//   let apiClient = await TestApiClient.loginBy("admin")
//   let api = apiClient.getApi()

//   const a = await api.people.getByKey28(535)
//   // const response1 = await api.people.getByKey28(535)
//   // const a = plainToInstance(PersonModel, response1.data)
//   console.log(a)
//   // apiClient = await TestApiClient.loginBy("pizda")
//   // api = apiClient.getApi()
  
// });
