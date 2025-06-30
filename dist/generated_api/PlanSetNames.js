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
exports.PlanSetNames = void 0;
const http_client_1 = require("./http-client");
class PlanSetNames extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of Plan Set Names
         *
         * @tags Plan Set Names
         * @name Get30
         * @summary Retrieves a list of Plan Set Names
         * @request GET:/rest/plan-set-names
         * @secure */
        this.get30 = (query, params = {}) => this.request({
            path: `/rest/plan-set-names`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanSetNamePagedResponse);
        /**
         * @description Create a new plan set name
         *
         * @tags Plan Set Names
         * @name Create27
         * @summary Create plan set name
         * @request POST:/rest/plan-set-names
         * @secure */
        this.create27 = (data, params = {}) => this.request({
            path: `/rest/plan-set-names`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a plan set name by key
         *
         * @tags Plan Set Names
         * @name GetByKey29
         * @summary Retrieves a plan set name by key.
         * @request GET:/rest/plan-set-names/{id}
         * @secure */
        this.getByKey29 = (id, params = {}) => this.request({
            path: `/rest/plan-set-names/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanSetNameModel);
        /**
         * @description Update an existing plan set name
         *
         * @tags Plan Set Names
         * @name Update27
         * @summary Update plan set name
         * @request PUT:/rest/plan-set-names/{id}
         * @secure */
        this.update27 = (id, data, params = {}) => this.request({
            path: `/rest/plan-set-names/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing plan set name
         *
         * @tags Plan Set Names
         * @name Delete24
         * @summary Delete plan set name
         * @request DELETE:/rest/plan-set-names/{id}
         * @secure */
        this.delete24 = (id, params = {}) => this.request({
            path: `/rest/plan-set-names/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.PlanSetNames = PlanSetNames;
