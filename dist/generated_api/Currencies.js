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
exports.Currencies = void 0;
const http_client_1 = require("./http-client");
class Currencies extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of ISO-4217 currency codes, filtered by optional query parameters.
         *
         * @tags Currencies
         * @name GetIsoCodes
         * @summary Retrieves currency codes
         * @request GET:/rest/currencies/currency-codes
         * @secure */
        this.getIsoCodes = (query, params = {}) => this.request({
            path: `/rest/currencies/currency-codes`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CurrencyCodePagedResponse);
    }
}
exports.Currencies = Currencies;
