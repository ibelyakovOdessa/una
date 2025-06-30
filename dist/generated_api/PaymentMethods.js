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
exports.PaymentMethods = void 0;
const http_client_1 = require("./http-client");
class PaymentMethods extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of payment methods filtered by optional active flag.
         *
         * @tags Payment Methods
         * @name List2
         * @summary Retrieves payment methods
         * @request GET:/rest/payment-methods
         * @secure */
        this.list2 = (query, params = {}) => this.request({
            path: `/rest/payment-methods`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaymentMethodPagedResponse);
    }
}
exports.PaymentMethods = PaymentMethods;
