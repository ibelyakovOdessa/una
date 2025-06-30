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
exports.ExpenseTypes = void 0;
const http_client_1 = require("./http-client");
class ExpenseTypes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of expense types filtered by optional query parameters.
         *
         * @tags Expense Types
         * @name Get15
         * @summary Retrieves expense types
         * @request GET:/rest/expense-types
         * @secure */
        this.get15 = (query, params = {}) => this.request({
            path: `/rest/expense-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseTypeSummaryModelPagedResponse);
        /**
         * @description Retrieves details of an expense type
         *
         * @tags Expense Types
         * @name GetByKey14
         * @summary Retrieves an expense type.
         * @request GET:/rest/expense-types/{id}
         * @secure */
        this.getByKey14 = (id, params = {}) => this.request({
            path: `/rest/expense-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseTypeModel);
        /**
         * @description Retrieves cost accounts for an expense type
         *
         * @tags Expense Types
         * @name GetCostAccounts
         * @summary Retrieves cost accounts for expense types
         * @request GET:/rest/expense-types/{id}/cost-accounts
         * @secure */
        this.getCostAccounts = (id, query, params = {}) => this.request({
            path: `/rest/expense-types/${id}/cost-accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypeAccountPagedResponse);
    }
}
exports.ExpenseTypes = ExpenseTypes;
