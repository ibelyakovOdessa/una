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
exports.Authentication = void 0;
const http_client_1 = require("./http-client");
class Authentication extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Sends a forgot password link to the user if they exist in the system.
         *
         * @tags Authentication
         * @name ForgotPassword
         * @summary Sends forgotten password email
         * @request POST:/rest/login/forgot-password */
        this.forgotPassword = (data, params = {}) => this.request({
            path: `/rest/login/forgot-password`,
            method: "POST",
            body: data,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves an authentication token based on the provided user credentials.
         *
         * @tags Authentication
         * @name Login
         * @summary Retrieves user authentication token
         * @request POST:/rest/login */
        this.login = (data, params = {}) => this.request({
            path: `/rest/login`,
            method: "POST",
            body: data,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.UserTokenModel);
        /**
         * @description Retrieves an authentication token based on the provided OAuth 2.0 access token.
         *
         * @tags Authentication
         * @name LoginOAuth
         * @summary Retrieves user authentication token via OAuth 2.0 access token validation
         * @request POST:/rest/login/oauth */
        this.loginOAuth = (data, query, params = {}) => this.request({
            path: `/rest/login/oauth`,
            method: "POST",
            query: query,
            body: data,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.UserTokenModel);
        /**
         * @description Resets a user's password after verifying request.
         *
         * @tags Authentication
         * @name ResetPassword
         * @summary Resets password
         * @request POST:/rest/login/reset-password */
        this.resetPassword = (data, params = {}) => this.request({
            path: `/rest/login/reset-password`,
            method: "POST",
            body: data,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Issues a token with a new expiration time.
         *
         * @tags Authentication
         * @name Refresh
         * @summary Issues refreshed token.
         * @request GET:/rest/token/refresh
         * @secure */
        this.refresh = (params = {}) => this.request({
            path: `/rest/token/refresh`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UserTokenModel);
    }
}
exports.Authentication = Authentication;
