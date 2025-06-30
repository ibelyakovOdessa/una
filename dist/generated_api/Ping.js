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
exports.Ping = void 0;
const http_client_1 = require("./http-client");
class Ping extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Ping the Platform to check on its health.
         *
         * @tags Ping
         * @name Ping
         * @summary Health Check
         * @request GET:/rest/ping */
        this.ping = (params = {}) => this.request({
            path: `/rest/ping`,
            method: "GET",
            ...params,
        });
        /**
         * @description Returns version for the instance.
         *
         * @tags Ping
         * @name Version
         * @summary Platform Version
         * @request GET:/rest/ping/version */
        this.version = (params = {}) => this.request({
            path: `/rest/ping/version`,
            method: "GET",
            format: "json",
            ...params,
        }, data_contracts_1.VersionModel);
    }
}
exports.Ping = Ping;
