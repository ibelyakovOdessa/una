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
exports.EmailTemplates = void 0;
const http_client_1 = require("./http-client");
class EmailTemplates extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a list of active email templates (messages, notifications, reminders), filterable by optional query parameters.
         *
         * @tags Email Templates
         * @name GetEmailTemplates
         * @summary Retrieves list of active email templates.
         * @request GET:/rest/email-templates
         * @secure */
        this.getEmailTemplates = (id, query, params = {}) => this.request({
            path: `/rest/email-templates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.EmailTemplatePagedResponse);
    }
}
exports.EmailTemplates = EmailTemplates;
