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
exports.Attachments = void 0;
const http_client_1 = require("./http-client");
class Attachments extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves an attachment given an attachment id, consisting of both its metadata and content bytes.
         *
         * @tags Attachments
         * @name GetByKey1
         * @summary Retrieves attachment
         * @request GET:/rest/attachments/{id}
         * @secure */
        this.getByKey1 = (id, params = {}) => this.request({
            path: `/rest/attachments/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
    }
}
exports.Attachments = Attachments;
