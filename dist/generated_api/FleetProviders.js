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
exports.FleetProviders = void 0;
const http_client_1 = require("./http-client");
class FleetProviders extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of fleet providers.
         *
         * @tags Fleet Providers
         * @name List
         * @summary Retrieves fleet providers
         * @request GET:/rest/fleet-providers
         * @secure */
        this.list = (query, params = {}) => this.request({
            path: `/rest/fleet-providers`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FleetProviderPagedResponse);
    }
}
exports.FleetProviders = FleetProviders;
