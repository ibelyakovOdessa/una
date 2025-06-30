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
exports.Locations = void 0;
const http_client_1 = require("./http-client");
class Locations extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of locations filtered by optional query parameters.
         *
         * @tags Locations
         * @name Get23
         * @summary Retrieves locations
         * @request GET:/rest/locations
         * @secure */
        this.get23 = (query, params = {}) => this.request({
            path: `/rest/locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LocationPagedResponse);
        /**
         * @description Creates a new location.
         *
         * @tags Locations
         * @name Create18
         * @summary Creates location
         * @request POST:/rest/locations
         * @secure */
        this.create18 = (data, params = {}) => this.request({
            path: `/rest/locations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of location.
         *
         * @tags Locations
         * @name GetByKey20
         * @summary Retrieves a location
         * @request GET:/rest/locations/{id}
         * @secure */
        this.getByKey20 = (id, params = {}) => this.request({
            path: `/rest/locations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LocationModel);
    }
}
exports.Locations = Locations;
