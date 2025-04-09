import "reflect-metadata";

import { expect } from "playwright/test";
import { ApiService } from "./ApiService";
import { Authentication } from "./generated_api/Authentication";
import dotenv from 'dotenv'
import { UserTokenModel } from "./generated_api/data-contracts";

dotenv.config();

export class TestApiClient {
    private api: ApiService;

    constructor(token?: string) {
        this.api = new ApiService(token)
    }

    static async loginBy(username: string) {
        const authSerivce = new Authentication()
     
        const response = await authSerivce.login({
            username: username,
            password: process.env.PASSWORD,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Una-App': 'WEBAPP'
            }
        })

        // expect(response).toBe(UserTokenModel)

        // const body = await response.json()
        if (!response.token) {
            throw new Error("Authenthication error");
        }
        return new TestApiClient(response.token); // initialize test api client
    }

    getApi(): ApiService {
      return this.api;
    }
  }