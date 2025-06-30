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
exports.PayCodes = void 0;
const http_client_1 = require("./http-client");
class PayCodes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of pay codes filtered by optional active flag
         *
         * @tags Pay Codes
         * @name Get27
         * @summary Retrieves pay codes
         * @request GET:/rest/pay-codes
         * @secure */
        this.get27 = (query, params = {}) => this.request({
            path: `/rest/pay-codes`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PayCodePagedResponse);
    }
}
exports.PayCodes = PayCodes;
