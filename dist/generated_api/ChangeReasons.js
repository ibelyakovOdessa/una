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
exports.ChangeReasons = void 0;
const http_client_1 = require("./http-client");
class ChangeReasons extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a list of change reasons with indicators for whether they apply to audits or adjustments.
         *
         * @tags Change Reasons
         * @name Get4
         * @summary Retrieves change reasons
         * @request GET:/rest/change-reasons
         * @secure */
        this.get4 = (query, params = {}) => this.request({
            path: `/rest/change-reasons`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ChangeReasonPagedResponse);
    }
}
exports.ChangeReasons = ChangeReasons;
