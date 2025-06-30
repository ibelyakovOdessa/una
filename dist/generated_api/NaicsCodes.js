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
exports.NaicsCodes = void 0;
const http_client_1 = require("./http-client");
class NaicsCodes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of NAICS codes.
         *
         * @tags NAICS Codes
         * @name Get24
         * @summary Retrieves NAICS codes
         * @request GET:/rest/naics-codes
         * @secure */
        this.get24 = (query, params = {}) => this.request({
            path: `/rest/naics-codes`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.NaicsCodePagedResponse);
        /**
         * @description Retrieves a NAICS code by key.
         *
         * @tags NAICS Codes
         * @name GetByKey23
         * @summary Retrieves a NAICS code
         * @request GET:/rest/naics-codes/{id}
         * @secure */
        this.getByKey23 = (id, params = {}) => this.request({
            path: `/rest/naics-codes/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.NaicsCodeModel);
    }
}
exports.NaicsCodes = NaicsCodes;
