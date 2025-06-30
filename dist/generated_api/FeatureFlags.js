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
exports.FeatureFlags = void 0;
const http_client_1 = require("./http-client");
class FeatureFlags extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a feature flag
         *
         * @tags Feature Flags
         * @name GetFlag
         * @summary Retrieve Feature Flag
         * @request GET:/rest/feature-flags/{id}
         * @secure */
        this.getFlag = (id, params = {}) => this.request({
            path: `/rest/feature-flags/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FeatureFlagModel);
    }
}
exports.FeatureFlags = FeatureFlags;
