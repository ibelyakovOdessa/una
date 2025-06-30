import "reflect-metadata";

import { expect } from "playwright/test";
import { ApiService } from "./ApiService";
import { Authentication } from "./generated_api/Authentication";
import dotenv from 'dotenv'
import { UserTokenModel } from "./generated_api/data-contracts";
import { injectable } from "tsyringe";

dotenv.config();

@injectable()
export class TestApiClient {
    private api: ApiService;

    constructor() {
        this.api = new ApiService();
    }

    async loginBy(username: string) {
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

        // const body = await response
        if (!response.token) {
            throw new Error("Authenthication error");
        }
        this.api = new ApiService(response.token)
        // return new TestApiClient(response.token); // initialize test api client
    }

    getApi(): ApiService {
      return this.api;
    }

  }