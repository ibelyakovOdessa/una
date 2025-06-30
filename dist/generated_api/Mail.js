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
exports.Mail = void 0;
const http_client_1 = require("./http-client");
class Mail extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Receives and acknowledges a transaction email event.
         *
         * @tags Mail
         * @name TransactionalReceive
         * @summary Receives a transaction email event.
         * @request POST:/rest/mail/transactional/receive */
        this.transactionalReceive = (data, params = {}) => this.request({
            path: `/rest/mail/transactional/receive`,
            method: "POST",
            body: data,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.Mail = Mail;
