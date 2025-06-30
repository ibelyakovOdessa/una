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
exports.Accounts = void 0;
const http_client_1 = require("./http-client");
class Accounts extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of accounts filtered by optional query parameters.
         *
         * @tags Accounts
         * @name Get
         * @summary Retrieves accounts
         * @request GET:/rest/accounts
         * @secure */
        this.get = (query, params = {}) => this.request({
            path: `/rest/accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountPagedResponse);
    }
}
exports.Accounts = Accounts;
