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
exports.UserDeviceTokens = void 0;
const http_client_1 = require("./http-client");
class UserDeviceTokens extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve all device tokens registered for the user.
         *
         * @tags User Device Tokens
         * @name PersonDeviceTokens
         * @summary Retrieves user device tokens
         * @request GET:/rest/me/device-tokens
         * @secure */
        this.personDeviceTokens = (query, params = {}) => this.request({
            path: `/rest/me/device-tokens`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DeviceTokenPagedResponseModel);
        /**
         * @description Registers a new device token to the user.
         *
         * @tags User Device Tokens
         * @name AddPersonDeviceToken
         * @summary Register new device token
         * @request POST:/rest/me/device-tokens
         * @secure */
        this.addPersonDeviceToken = (data, params = {}) => this.request({
            path: `/rest/me/device-tokens`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Removes a device token registered to the user.
         *
         * @tags User Device Tokens
         * @name RemovePersonDeviceTokens
         * @summary Remove device token
         * @request DELETE:/rest/me/device-tokens/{id}
         * @secure */
        this.removePersonDeviceTokens = (id, params = {}) => this.request({
            path: `/rest/me/device-tokens/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.UserDeviceTokens = UserDeviceTokens;
