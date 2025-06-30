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
exports.Industries = void 0;
const http_client_1 = require("./http-client");
class Industries extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of industries.
         *
         * @tags Industries
         * @name Get16
         * @summary Retrieves industries
         * @request GET:/rest/industries
         * @secure */
        this.get16 = (query, params = {}) => this.request({
            path: `/rest/industries`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IndustryPagedResponse);
        /**
         * @description Retrieves an industry by key.
         *
         * @tags Industries
         * @name GetByKey15
         * @summary Retrieves an industry
         * @request GET:/rest/industries/{id}
         * @secure */
        this.getByKey15 = (id, params = {}) => this.request({
            path: `/rest/industries/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IndustryModel);
    }
}
exports.Industries = Industries;
