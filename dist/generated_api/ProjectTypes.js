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
exports.ProjectTypes = void 0;
const http_client_1 = require("./http-client");
class ProjectTypes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of all project types, optionally filtered by name and active status.
         *
         * @tags Project Types
         * @name Search14
         * @summary Retrieves project types
         * @request GET:/rest/project-types
         * @secure */
        this.search14 = (query, params = {}) => this.request({
            path: `/rest/project-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypePagedResponse);
        /**
         * @description Creates a new project type.
         *
         * @tags Project Types
         * @name Create31
         * @summary Creates project type
         * @request POST:/rest/project-types
         * @secure */
        this.create31 = (data, params = {}) => this.request({
            path: `/rest/project-types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a project type.
         *
         * @tags Project Types
         * @name GetByKey32
         * @summary Retrieves a project type
         * @request GET:/rest/project-types/{id}
         * @secure */
        this.getByKey32 = (id, params = {}) => this.request({
            path: `/rest/project-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypeModel);
        /**
         * @description Updates an existing project type.
         *
         * @tags Project Types
         * @name Update31
         * @summary Updates project type
         * @request PUT:/rest/project-types/{id}
         * @secure */
        this.update31 = (id, data, params = {}) => this.request({
            path: `/rest/project-types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing project type.
         *
         * @tags Project Types
         * @name Delete28
         * @summary Deletes project type
         * @request DELETE:/rest/project-types/{id}
         * @secure */
        this.delete28 = (id, params = {}) => this.request({
            path: `/rest/project-types/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a list of available project type account categories.
         *
         * @tags Project Types
         * @name GetAccountCategories4
         * @summary Retrieves a list of project type account categories
         * @request GET:/rest/project-types/account-categories
         * @secure */
        this.getAccountCategories4 = (params = {}) => this.request({
            path: `/rest/project-types/account-categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountCategoryModel);
        /**
         * @description Retrieves a list of project type accounts.
         *
         * @tags Project Types
         * @name GetAccounts2
         * @summary Retrieves a list of project type accounts
         * @request GET:/rest/project-types/{id}/accounts
         * @secure */
        this.getAccounts2 = (id, params = {}) => this.request({
            path: `/rest/project-types/${id}/accounts`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CategoryAccountModel);
        /**
         * @description Update a project type's account setup.
         *
         * @tags Project Types
         * @name UpdateAccounts
         * @summary Update a project type's accounts
         * @request PUT:/rest/project-types/{id}/accounts
         * @secure */
        this.updateAccounts = (id, data, params = {}) => this.request({
            path: `/rest/project-types/${id}/accounts`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves cost accounts for a project type
         *
         * @tags Project Types
         * @name GetCostAccounts1
         * @summary Retrieves cost accounts for a project type
         * @request GET:/rest/project-types/{id}/cost-accounts
         * @secure */
        this.getCostAccounts1 = (id, query, params = {}) => this.request({
            path: `/rest/project-types/${id}/cost-accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseTypeAccountPagedResponse);
    }
}
exports.ProjectTypes = ProjectTypes;
