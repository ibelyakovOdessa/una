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
exports.Scan = void 0;
const http_client_1 = require("./http-client");
class Scan extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Scans a receipt and extracts data lines.
         *
         * @tags Scan
         * @name ScanReceipt
         * @summary Scan and extract a receipt.
         * @request POST:/rest/scan/receipt
         * @secure */
        this.scanReceipt = (data, params = {}) => this.request({
            path: `/rest/scan/receipt`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ScanResult);
    }
}
exports.Scan = Scan;
