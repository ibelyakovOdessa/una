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
exports.InvoiceNumberFormats = void 0;
const http_client_1 = require("./http-client");
class InvoiceNumberFormats extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of Invoice Number Formats filtered by optional query parameters.
         *
         * @tags Invoice Number Formats
         * @name Get20
         * @summary Retrieves Invoice Number Formats
         * @request GET:/rest/invoice-number-formats
         * @secure */
        this.get20 = (query, params = {}) => this.request({
            path: `/rest/invoice-number-formats`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceNumberFormatPagedResponse);
    }
}
exports.InvoiceNumberFormats = InvoiceNumberFormats;
