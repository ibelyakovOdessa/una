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
exports.ExternalLogging = void 0;
const http_client_1 = require("./http-client");
class ExternalLogging extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Saves the supplied client device log messages.
         *
         * @tags External Logging
         * @name SaveLogs
         * @summary Saves client log messages
         * @request POST:/rest/log
         * @secure */
        this.saveLogs = (data, params = {}) => this.request({
            path: `/rest/log`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.ExternalLogging = ExternalLogging;
