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
exports.BusinessWeeks = void 0;
const http_client_1 = require("./http-client");
class BusinessWeeks extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of business weeks filtered by optional query parameters
         *
         * @tags Business Weeks
         * @name Get3
         * @summary Retrieves business weeks
         * @request GET:/rest/business-weeks
         * @secure */
        this.get3 = (query, params = {}) => this.request({
            path: `/rest/business-weeks`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.BusinessWeekPagedResponse);
        /**
         * @description Create a new business week
         *
         * @tags Business Weeks
         * @name Create1
         * @summary Create business week
         * @request POST:/rest/business-weeks
         * @secure */
        this.create1 = (data, params = {}) => this.request({
            path: `/rest/business-weeks`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a business week
         *
         * @tags Business Weeks
         * @name GetByKey2
         * @summary Retrieves a business week.
         * @request GET:/rest/business-weeks/{id}
         * @secure */
        this.getByKey2 = (id, params = {}) => this.request({
            path: `/rest/business-weeks/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.BusinessWeekModel);
        /**
         * @description Update an existing business week
         *
         * @tags Business Weeks
         * @name Update1
         * @summary Update business week
         * @request PUT:/rest/business-weeks/{id}
         * @secure */
        this.update1 = (id, data, params = {}) => this.request({
            path: `/rest/business-weeks/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Delete an existing business week
         *
         * @tags Business Weeks
         * @name Delete1
         * @summary Delete business week
         * @request DELETE:/rest/business-weeks/{id}
         * @secure */
        this.delete1 = (id, params = {}) => this.request({
            path: `/rest/business-weeks/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.BusinessWeeks = BusinessWeeks;
