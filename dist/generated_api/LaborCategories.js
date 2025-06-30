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
exports.LaborCategories = void 0;
const http_client_1 = require("./http-client");
class LaborCategories extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of labor categories filtered by optional query parameters.
         *
         * @tags Labor Categories
         * @name Get22
         * @summary Retrieves labor categories
         * @request GET:/rest/labor-categories
         * @secure */
        this.get22 = (query, params = {}) => this.request({
            path: `/rest/labor-categories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LaborCategoryPagedResponse);
        /**
         * @description Creates a new labor category.
         *
         * @tags Labor Categories
         * @name Create17
         * @summary Creates a labor category
         * @request POST:/rest/labor-categories
         * @secure */
        this.create17 = (data, params = {}) => this.request({
            path: `/rest/labor-categories`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a list of rates for a labor category.
         *
         * @tags Labor Categories
         * @name GetRates
         * @summary Retrieves a list of rates for a labor category.
         * @request GET:/rest/labor-categories/{id}/rates
         * @secure */
        this.getRates = (id, query, params = {}) => this.request({
            path: `/rest/labor-categories/${id}/rates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LaborCategoryRatePagedResponse);
        /**
         * @description Updates a labor category rate.
         *
         * @tags Labor Categories
         * @name UpdateRate
         * @summary Updates a labor category rate.
         * @request PUT:/rest/labor-categories/{id}/rates
         * @secure */
        this.updateRate = (id, data, params = {}) => this.request({
            path: `/rest/labor-categories/${id}/rates`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Creates a new labor category rate.
         *
         * @tags Labor Categories
         * @name CreateRate
         * @summary Creates a labor category rate
         * @request POST:/rest/labor-categories/{id}/rates
         * @secure */
        this.createRate = (id, data, params = {}) => this.request({
            path: `/rest/labor-categories/${id}/rates`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes the labor category rate with the provided begin date.
         *
         * @tags Labor Categories
         * @name DeleteRate
         * @summary Deletes an existing labor category rate.
         * @request DELETE:/rest/labor-categories/{id}/rates/{beginDate}
         * @secure */
        this.deleteRate = (id, beginDate, params = {}) => this.request({
            path: `/rest/labor-categories/${id}/rates/${beginDate}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a labor category.
         *
         * @tags Labor Categories
         * @name GetByKey19
         * @summary Retrieves a labor category.
         * @request GET:/rest/labor-categories/{id}
         * @secure */
        this.getByKey19 = (id, params = {}) => this.request({
            path: `/rest/labor-categories/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LaborCategoryModel);
        /**
         * @description Updates a labor category and its rates. All existing rates will be replaced with the supplied rates.
         *
         * @tags Labor Categories
         * @name Update16
         * @summary Updates a labor category
         * @request PUT:/rest/labor-categories/{id}
         * @secure */
        this.update16 = (id, data, params = {}) => this.request({
            path: `/rest/labor-categories/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.LaborCategories = LaborCategories;
