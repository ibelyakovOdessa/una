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
exports.EmployeeTypes = void 0;
const http_client_1 = require("./http-client");
class EmployeeTypes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of all employee types.
         *
         * @tags Employee Types
         * @name Get13
         * @summary Retrieves employee types
         * @request GET:/rest/employee-types
         * @secure */
        this.get13 = (query, params = {}) => this.request({
            path: `/rest/employee-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.EmployeeTypePagedResponse);
        /**
         * @description Create a new employee
         *
         * @tags Employee Types
         * @name Create9
         * @summary Create employee type
         * @request POST:/rest/employee-types
         * @secure */
        this.create9 = (data, params = {}) => this.request({
            path: `/rest/employee-types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of an employee type
         *
         * @tags Employee Types
         * @name GetByKey12
         * @summary Retrieves an employee type.
         * @request GET:/rest/employee-types/{id}
         * @secure */
        this.getByKey12 = (id, params = {}) => this.request({
            path: `/rest/employee-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.EmployeeTypeModel);
        /**
         * @description Update an existing employee type
         *
         * @tags Employee Types
         * @name Update10
         * @summary Update employee type
         * @request PUT:/rest/employee-types/{id}
         * @secure */
        this.update10 = (id, data, params = {}) => this.request({
            path: `/rest/employee-types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing employee type
         *
         * @tags Employee Types
         * @name Delete9
         * @summary Delete employee type
         * @request DELETE:/rest/employee-types/{id}
         * @secure */
        this.delete9 = (id, params = {}) => this.request({
            path: `/rest/employee-types/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.EmployeeTypes = EmployeeTypes;
