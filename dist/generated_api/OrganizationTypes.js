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
exports.OrganizationTypes = void 0;
const http_client_1 = require("./http-client");
class OrganizationTypes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of all organization types, optionally filtered by name.
         *
         * @tags Organization Types
         * @name Search11
         * @summary Retrieves organization types
         * @request GET:/rest/organization-types
         * @secure */
        this.search11 = (query, params = {}) => this.request({
            path: `/rest/organization-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationTypePagedResponse);
        /**
         * @description Creates a new organization type.
         *
         * @tags Organization Types
         * @name Create23
         * @summary Creates an organization type
         * @request POST:/rest/organization-types
         * @secure */
        this.create23 = (data, params = {}) => this.request({
            path: `/rest/organization-types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of an organization type.
         *
         * @tags Organization Types
         * @name GetByKey26
         * @summary Retrieves a organization type
         * @request GET:/rest/organization-types/{id}
         * @secure */
        this.getByKey26 = (id, params = {}) => this.request({
            path: `/rest/organization-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationTypeModel);
        /**
         * @description Updates an existing organization type.
         *
         * @tags Organization Types
         * @name Update23
         * @summary Updates organization type
         * @request PUT:/rest/organization-types/{id}
         * @secure */
        this.update23 = (id, data, params = {}) => this.request({
            path: `/rest/organization-types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing organization type.
         *
         * @tags Organization Types
         * @name Delete20
         * @summary Deletes organization type
         * @request DELETE:/rest/organization-types/{id}
         * @secure */
        this.delete20 = (id, params = {}) => this.request({
            path: `/rest/organization-types/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.OrganizationTypes = OrganizationTypes;
