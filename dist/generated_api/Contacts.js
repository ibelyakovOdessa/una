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
exports.Contacts = void 0;
const http_client_1 = require("./http-client");
class Contacts extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of contact address types
         *
         * @tags Contacts
         * @name GetContactAddressTypes
         * @summary Retrieves contact address types
         * @request GET:/rest/contacts/address-types
         * @secure */
        this.getContactAddressTypes = (query, params = {}) => this.request({
            path: `/rest/contacts/address-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactAddressTypePagedResponse);
        /**
         * @description Retrieves a paged list of contact categories
         *
         * @tags Contacts
         * @name GetContactCategories
         * @summary Retrieves contact categories
         * @request GET:/rest/contacts/categories
         * @secure */
        this.getContactCategories = (query, params = {}) => this.request({
            path: `/rest/contacts/categories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactCategoryPagedResponse);
        /**
         * @description Retrieves a paged list of contact email types
         *
         * @tags Contacts
         * @name GetContactEmailTypes
         * @summary Retrieves contact email types
         * @request GET:/rest/contacts/email-types
         * @secure */
        this.getContactEmailTypes = (query, params = {}) => this.request({
            path: `/rest/contacts/email-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactEmailTypePagedResponse);
        /**
         * @description Retrieves a paged list of contact phone types
         *
         * @tags Contacts
         * @name GetContactPhoneTypes
         * @summary Retrieves contact phone types
         * @request GET:/rest/contacts/phone-types
         * @secure */
        this.getContactPhoneTypes = (query, params = {}) => this.request({
            path: `/rest/contacts/phone-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactPhoneTypePagedResponse);
    }
}
exports.Contacts = Contacts;
