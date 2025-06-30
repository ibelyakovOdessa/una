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
exports.Integrations = void 0;
const http_client_1 = require("./http-client");
class Integrations extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of integrations filtered by optional query parameters. Returns only integrations created by the user unless otherwise specified.
         *
         * @tags Integrations
         * @name Get17
         * @summary Retrieves integrations
         * @request GET:/rest/integrations
         * @secure */
        this.get17 = (query, params = {}) => this.request({
            path: `/rest/integrations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationPagedResponse);
        /**
         * @description Creates a new integration.
         *
         * @tags Integrations
         * @name Create13
         * @summary Creates an integration
         * @request POST:/rest/integrations
         * @secure */
        this.create13 = (data, params = {}) => this.request({
            path: `/rest/integrations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Create a new integration user
         *
         * @tags Integrations
         * @name CreateIntegrationUser
         * @summary Create Integration User
         * @request POST:/rest/integrations/users
         * @secure */
        this.createIntegrationUser = (data, params = {}) => this.request({
            path: `/rest/integrations/users`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationUserModel);
        /**
         * @description Retrieves a paged list of integration values for a given type.
         *
         * @tags Integrations
         * @name GetIntegrationValues
         * @summary Retrieves integration values
         * @request GET:/rest/integrations/{id}/{type}
         * @secure */
        this.getIntegrationValues = (id, type, query, params = {}) => this.request({
            path: `/rest/integrations/${id}/${type}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationPagedResponse);
        /**
         * @description Creates a new integration value.
         *
         * @tags Integrations
         * @name CreateIntegrationValue
         * @summary Creates an integration value
         * @request POST:/rest/integrations/{id}/{type}
         * @secure */
        this.createIntegrationValue = (id, type, data, params = {}) => this.request({
            path: `/rest/integrations/${id}/${type}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of an integration.
         *
         * @tags Integrations
         * @name GetByKey16
         * @summary Retrieves an integration.
         * @request GET:/rest/integrations/{id}
         * @secure */
        this.getByKey16 = (id, params = {}) => this.request({
            path: `/rest/integrations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationModel);
        /**
         * @description Updates an existing integration given its key.
         *
         * @tags Integrations
         * @name Update13
         * @summary Updates an integration
         * @request PUT:/rest/integrations/{id}
         * @secure */
        this.update13 = (id, data, params = {}) => this.request({
            path: `/rest/integrations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing integration given its key. Deleting an integration will purge all associated integration values.
         *
         * @tags Integrations
         * @name Delete12
         * @summary Delete an integration
         * @request DELETE:/rest/integrations/{id}
         * @secure */
        this.delete12 = (id, params = {}) => this.request({
            path: `/rest/integrations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an integration value by key.
         *
         * @tags Integrations
         * @name GetIntegrationValueByKey
         * @summary Retrieves integration value by key
         * @request GET:/rest/integrations/{id}/{type}/{key}
         * @secure */
        this.getIntegrationValueByKey = (id, type, key, query, params = {}) => this.request({
            path: `/rest/integrations/${id}/${type}/${key}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationPagedResponse);
        /**
         * @description Deletes an existing integration value given its key.
         *
         * @tags Integrations
         * @name DeleteIntegrationValues
         * @summary Deletes an integration value
         * @request DELETE:/rest/integrations/{id}/{type}/{key}
         * @secure */
        this.deleteIntegrationValues = (id, type, key, params = {}) => this.request({
            path: `/rest/integrations/${id}/${type}/${key}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Reset any third party integration user data
         *
         * @tags Integrations
         * @name ResetIntegrationUser
         * @summary Reset Integration User data
         * @request POST:/rest/integrations/users/{id}/reset
         * @secure */
        this.resetIntegrationUser = (id, params = {}) => this.request({
            path: `/rest/integrations/users/${id}/reset`,
            method: "POST",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationUserModel);
        /**
         * @description Search for available integration users
         *
         * @tags Integrations
         * @name SearchIntegrationUsers
         * @summary Search Integration Users
         * @request POST:/rest/integrations/users/search
         * @secure */
        this.searchIntegrationUsers = (data, params = {}) => this.request({
            path: `/rest/integrations/users/search`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IntegrationUserPagedResponse);
    }
}
exports.Integrations = Integrations;
