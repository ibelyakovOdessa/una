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
exports.ExpenseVendors = void 0;
const http_client_1 = require("./http-client");
class ExpenseVendors extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of expense vendor summary info optionally filtered by expense type.
         *
         * @tags Expense Vendors
         * @name GetVendors
         * @summary Retrieves expense vendors
         * @request GET:/rest/expense-vendors
         * @secure */
        this.getVendors = (query, params = {}) => this.request({
            path: `/rest/expense-vendors`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorPagedResponse);
    }
}
exports.ExpenseVendors = ExpenseVendors;
