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
exports.ProjectStatuses = void 0;
const http_client_1 = require("./http-client");
class ProjectStatuses extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of project statuses filtered by optional query parameters.
         *
         * @tags Project Statuses
         * @name Get32
         * @summary Retrieves project statuses
         * @request GET:/rest/project-statuses
         * @secure */
        this.get32 = (query, params = {}) => this.request({
            path: `/rest/project-statuses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectStatusPagedResponse);
        /**
         * @description Creates a new project status.
         *
         * @tags Project Statuses
         * @name Create30
         * @summary Creates a project status
         * @request POST:/rest/project-statuses
         * @secure */
        this.create30 = (data, params = {}) => this.request({
            path: `/rest/project-statuses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of project status.
         *
         * @tags Project Statuses
         * @name GetByKey31
         * @summary Retrieves a project status
         * @request GET:/rest/project-statuses/{id}
         * @secure */
        this.getByKey31 = (id, params = {}) => this.request({
            path: `/rest/project-statuses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectStatusModel);
        /**
         * @description Updates an existing project status given its key.
         *
         * @tags Project Statuses
         * @name Update30
         * @summary Updates a project status
         * @request PUT:/rest/project-statuses/{id}
         * @secure */
        this.update30 = (id, data, params = {}) => this.request({
            path: `/rest/project-statuses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing project status given its key.
         *
         * @tags Project Statuses
         * @name Delete27
         * @summary Delete a project status
         * @request DELETE:/rest/project-statuses/{id}
         * @secure */
        this.delete27 = (id, params = {}) => this.request({
            path: `/rest/project-statuses/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.ProjectStatuses = ProjectStatuses;
