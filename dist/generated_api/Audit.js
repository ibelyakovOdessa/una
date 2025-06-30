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
exports.Audit = void 0;
const http_client_1 = require("./http-client");
class Audit extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of audit data filtered by optional search criteria.
         *
         * @tags Audit
         * @name Search1
         * @summary Retrieves audit data
         * @request POST:/rest/audit/search
         * @secure */
        this.search1 = (data, query, params = {}) => this.request({
            path: `/rest/audit/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.AuditDataPagedResponse);
        /**
         * @description Retrieves a paged list of audit data filtered by optional search criteria in csv format.
         *
         * @tags Audit
         * @name SearchAndDownload
         * @summary Retrieves audit data
         * @request POST:/rest/audit/search/download
         * @secure */
        this.searchAndDownload = (data, params = {}) => this.request({
            path: `/rest/audit/search/download`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        }, string);
    }
}
exports.Audit = Audit;
