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
exports.CostElements = void 0;
const http_client_1 = require("./http-client");
class CostElements extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of cost elements.
         *
         * @tags Cost Elements
         * @name Get9
         * @summary Retrieves cost elements
         * @request GET:/rest/cost-elements
         * @secure */
        this.get9 = (query, params = {}) => this.request({
            path: `/rest/cost-elements`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostElementPagedResponse);
    }
}
exports.CostElements = CostElements;
