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
exports.Dashboards = void 0;
const http_client_1 = require("./http-client");
class Dashboards extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of dashboard types available to the user.
         *
         * @tags Dashboards
         * @name GetAvailableDashboards
         * @summary Retrieves available dashboard types.
         * @request GET:/rest/dashboards/available
         * @secure */
        this.getAvailableDashboards = (query, params = {}) => this.request({
            path: `/rest/dashboards/available`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DashboardTypePagedResponse);
    }
}
exports.Dashboards = Dashboards;
