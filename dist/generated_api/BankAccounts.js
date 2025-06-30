"use strict";
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccounts = void 0;
const http_client_1 = require("./http-client");
class BankAccounts extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of bank accounts filtered by optional query parameters.
         *
         * @tags Bank accounts
         * @name Get2
         * @summary Retrieves bank accounts
         * @request GET:/rest/bank-accounts
         * @secure */
        this.get2 = (query, params = {}) => this.request({
            path: `/rest/bank-accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.BankAccountPagedResponse);
    }
}
exports.BankAccounts = BankAccounts;
