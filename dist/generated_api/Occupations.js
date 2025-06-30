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
exports.Occupations = void 0;
const http_client_1 = require("./http-client");
class Occupations extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of occupations filtered by optional query parameters.
         *
         * @tags Occupations
         * @name Get25
         * @summary Retrieves occupations
         * @request GET:/rest/occupations
         * @secure */
        this.get25 = (query, params = {}) => this.request({
            path: `/rest/occupations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OccupationPagedResponse);
        /**
         * @description Creates a new occupation.
         *
         * @tags Occupations
         * @name Create21
         * @summary Creates an occupation
         * @request POST:/rest/occupations
         * @secure */
        this.create21 = (data, params = {}) => this.request({
            path: `/rest/occupations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of an occupation.
         *
         * @tags Occupations
         * @name GetByKey24
         * @summary Retrieves an occupation.
         * @request GET:/rest/occupations/{id}
         * @secure */
        this.getByKey24 = (id, params = {}) => this.request({
            path: `/rest/occupations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OccupationModel);
        /**
         * @description Updates an existing occupation given its key. The occupation name and active flag are updateable fields, but code is not.
         *
         * @tags Occupations
         * @name Update21
         * @summary Updates an occupation
         * @request PUT:/rest/occupations/{id}
         * @secure */
        this.update21 = (id, data, params = {}) => this.request({
            path: `/rest/occupations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing occupation given its key.
         *
         * @tags Occupations
         * @name Delete18
         * @summary Delete an occupation
         * @request DELETE:/rest/occupations/{id}
         * @secure */
        this.delete18 = (id, params = {}) => this.request({
            path: `/rest/occupations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.Occupations = Occupations;
