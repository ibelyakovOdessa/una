import { step } from 'allure-js-commons';
import { api } from '../../container';

export async function loginAsPlatformAdmin() {
  return await step('Login as Admin', async () => {
    await api().loginBy('platformadmin');
  })
}

export async function loginAs(username: string) {
  return await step(`Login as ${username}`, async () => {
    await api().loginBy(username);
  })
}