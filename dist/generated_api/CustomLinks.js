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
exports.CustomLinks = void 0;
const http_client_1 = require("./http-client");
class CustomLinks extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a collection of custom links filtered by optional query parameters. By default, will retrieve only the custom links specific to the calling application if the token application is passed on. This can be overridden by setting the 'applicationType' parameter. The value should correspond to the application name listed in the token_application table (e.g., WEBAPP, SUBCONTRACTOR). Setting it to 'NONE' will return all results.
         *
         * @tags Custom Links
         * @name Get12
         * @summary Retrieves a collection of custom links
         * @request GET:/rest/custom-links
         * @secure */
        this.get12 = (query, params = {}) => this.request({
            path: `/rest/custom-links`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomLinkPagedResponse);
        /**
         * @description Retrieves details of a custom link
         *
         * @tags Custom Links
         * @name GetByKey9
         * @summary Retrieves a custom link.
         * @request GET:/rest/custom-links/{id}
         * @secure */
        this.getByKey9 = (id, params = {}) => this.request({
            path: `/rest/custom-links/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomLinkModel);
    }
}
exports.CustomLinks = CustomLinks;
