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
exports.PurchaseOrderFormats = void 0;
const http_client_1 = require("./http-client");
class PurchaseOrderFormats extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of all purchase order formats.
         *
         * @tags Purchase Order Formats
         * @name GetList1
         * @summary Retrieves purchase order formats
         * @request GET:/rest/purchase-order-formats
         * @secure */
        this.getList1 = (query, params = {}) => this.request({
            path: `/rest/purchase-order-formats`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderFormatSummaryPagedResponse);
        /**
         * @description Creates details of a purchase order format.
         *
         * @tags Purchase Order Formats
         * @name Create33
         * @summary Creates a purchase order format
         * @request POST:/rest/purchase-order-formats
         * @secure */
        this.create33 = (data, params = {}) => this.request({
            path: `/rest/purchase-order-formats`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a purchase order format.
         *
         * @tags Purchase Order Formats
         * @name GetByKey34
         * @summary Retrieves a purchase order format
         * @request GET:/rest/purchase-order-formats/{id}
         * @secure */
        this.getByKey34 = (id, params = {}) => this.request({
            path: `/rest/purchase-order-formats/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderFormatModel);
        /**
         * @description Update details of an existing purchase order format.
         *
         * @tags Purchase Order Formats
         * @name Update33
         * @summary Update an existing purchase order format
         * @request PUT:/rest/purchase-order-formats/{id}
         * @secure */
        this.update33 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-order-formats/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing purchase order format.
         *
         * @tags Purchase Order Formats
         * @name Delete30
         * @summary Deletes a purchase order format
         * @request DELETE:/rest/purchase-order-formats/{id}
         * @secure */
        this.delete30 = (id, params = {}) => this.request({
            path: `/rest/purchase-order-formats/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.PurchaseOrderFormats = PurchaseOrderFormats;
