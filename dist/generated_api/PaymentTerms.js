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
exports.PaymentTerms = void 0;
const http_client_1 = require("./http-client");
class PaymentTerms extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of payment terms filtered by optional active flag.
         *
         * @tags Payment Terms
         * @name Get28
         * @summary Retrieves payment terms
         * @request GET:/rest/payment-terms
         * @secure */
        this.get28 = (query, params = {}) => this.request({
            path: `/rest/payment-terms`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaymentTermPagedResponse);
        /**
         * @description Creates a new payment term.
         *
         * @tags Payment Terms
         * @name Create24
         * @summary Creates a payment term
         * @request POST:/rest/payment-terms
         * @secure */
        this.create24 = (data, params = {}) => this.request({
            path: `/rest/payment-terms`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve a payment term.
         *
         * @tags Payment Terms
         * @name GetByKey27
         * @summary Retrieve a payment term
         * @request GET:/rest/payment-terms/{id}
         * @secure */
        this.getByKey27 = (id, params = {}) => this.request({
            path: `/rest/payment-terms/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaymentTermModel);
        /**
         * @description Updates a payment term.
         *
         * @tags Payment Terms
         * @name Update24
         * @summary Updates a payment term
         * @request PUT:/rest/payment-terms/{id}
         * @secure */
        this.update24 = (id, data, params = {}) => this.request({
            path: `/rest/payment-terms/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a payment term.
         *
         * @tags Payment Terms
         * @name Delete21
         * @summary Deletes an existing payment term.
         * @request DELETE:/rest/payment-terms/{id}
         * @secure */
        this.delete21 = (id, params = {}) => this.request({
            path: `/rest/payment-terms/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.PaymentTerms = PaymentTerms;
