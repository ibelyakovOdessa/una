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
exports.DataLake = void 0;
const http_client_1 = require("./http-client");
class DataLake extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of data lake criteria sets.
         *
         * @tags Data Lake
         * @name GetDataLakeCriteriaSets
         * @summary Retrieves a list of data lake criteria sets
         * @request GET:/rest/data-lake/criteria
         * @secure */
        this.getDataLakeCriteriaSets = (query, params = {}) => this.request({
            path: `/rest/data-lake/criteria`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DataLakeCriteriaPagedResponse);
        /**
         * @description Creates a data lake criteria set.
         *
         * @tags Data Lake
         * @name Create7
         * @summary Creates a data lake criteria set
         * @request POST:/rest/data-lake/criteria
         * @secure */
        this.create7 = (data, params = {}) => this.request({
            path: `/rest/data-lake/criteria`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a data lake criteria set by key.
         *
         * @tags Data Lake
         * @name GetByKey10
         * @summary Retrieves a data lake criteria set by key
         * @request GET:/rest/data-lake/criteria/{id}
         * @secure */
        this.getByKey10 = (id, params = {}) => this.request({
            path: `/rest/data-lake/criteria/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DataLakeCriteriaModel);
        /**
         * @description Updates a data lake criteria set by id.
         *
         * @tags Data Lake
         * @name Update8
         * @summary Updates a data lake criteria set.
         * @request PUT:/rest/data-lake/criteria/{id}
         * @secure */
        this.update8 = (id, data, params = {}) => this.request({
            path: `/rest/data-lake/criteria/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a data lake criteria set by id.
         *
         * @tags Data Lake
         * @name Delete7
         * @summary Deletes a data lake criteria set.
         * @request DELETE:/rest/data-lake/criteria/{id}
         * @secure */
        this.delete7 = (id, params = {}) => this.request({
            path: `/rest/data-lake/criteria/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves a paged list of data lake views filtered by optional query parameters.
         *
         * @tags Data Lake
         * @name GetTypes
         * @summary Retrieves data lake criteria types
         * @request GET:/rest/data-lake/criteria/types
         * @secure */
        this.getTypes = (query, params = {}) => this.request({
            path: `/rest/data-lake/criteria/types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DataCriteriaTypePagedResponse);
    }
}
exports.DataLake = DataLake;
