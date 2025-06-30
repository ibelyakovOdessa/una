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
exports.ImportedExpenses = void 0;
const http_client_1 = require("./http-client");
class ImportedExpenses extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Creates a new imported credit card expense.
         *
         * @tags Imported Expenses
         * @name Create12
         * @summary Creates an imported credit card expense.
         * @request POST:/rest/imported-expenses
         * @secure */
        this.create12 = (data, query, params = {}) => this.request({
            path: `/rest/imported-expenses`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
    }
}
exports.ImportedExpenses = ImportedExpenses;
