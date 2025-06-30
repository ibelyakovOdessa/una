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
exports.InvoiceFormats = void 0;
const http_client_1 = require("./http-client");
class InvoiceFormats extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of Invoice Formats
         *
         * @tags Invoice Formats
         * @name GetList
         * @summary Retrieves Invoice Formats
         * @request GET:/rest/invoice-formats
         * @secure */
        this.getList = (query, params = {}) => this.request({
            path: `/rest/invoice-formats`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceFormatPagedResponse);
        /**
         * @description Creates a new Invoice Format
         *
         * @tags Invoice Formats
         * @name Create14
         * @summary Creates a new Invoice Format
         * @request POST:/rest/invoice-formats
         * @secure */
        this.create14 = (data, params = {}) => this.request({
            path: `/rest/invoice-formats`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieve an Invoice Format by the provided key
         *
         * @tags Invoice Formats
         * @name Get19
         * @summary Retrieve an Invoice Format
         * @request GET:/rest/invoice-formats/{id}
         * @secure */
        this.get19 = (id, params = {}) => this.request({
            path: `/rest/invoice-formats/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceFormatModel);
        /**
         * @description Update the attributes of an Invoice Format.
         *
         * @tags Invoice Formats
         * @name Update14
         * @summary Update an existing Invoice Format
         * @request PUT:/rest/invoice-formats/{id}
         * @secure */
        this.update14 = (id, data, params = {}) => this.request({
            path: `/rest/invoice-formats/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing invoice format given its key.
         *
         * @tags Invoice Formats
         * @name Delete13
         * @summary Delete an Invoice Format
         * @request DELETE:/rest/invoice-formats/{id}
         * @secure */
        this.delete13 = (id, params = {}) => this.request({
            path: `/rest/invoice-formats/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.InvoiceFormats = InvoiceFormats;
