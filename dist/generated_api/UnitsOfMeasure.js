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
exports.UnitsOfMeasure = void 0;
const http_client_1 = require("./http-client");
class UnitsOfMeasure extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of uoms filtered by optional query parameters.
         *
         * @tags Units of Measure
         * @name Get39
         * @summary Retrieves a list of UOMs
         * @request GET:/rest/uoms
         * @secure */
        this.get39 = (query, params = {}) => this.request({
            path: `/rest/uoms`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UnitOfMeasurePagedResponse);
        /**
         * @description Creates a new Unit of Measure (UOM).
         *
         * @tags Units of Measure
         * @name Create42
         * @summary Creates a UOM
         * @request POST:/rest/uoms
         * @secure */
        this.create42 = (data, params = {}) => this.request({
            path: `/rest/uoms`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a UOM by id.
         *
         * @tags Units of Measure
         * @name GetByKey39
         * @summary Retrieves a Unit of Measure (UOM)
         * @request GET:/rest/uoms/{id}
         * @secure */
        this.getByKey39 = (id, params = {}) => this.request({
            path: `/rest/uoms/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UnitOfMeasureModel);
        /**
         * @description Updates a Unit of Measure (UOM) by its id.
         *
         * @tags Units of Measure
         * @name Update41
         * @summary Updates Unit of Measure (UOM)
         * @request PUT:/rest/uoms/{id}
         * @secure */
        this.update41 = (id, data, params = {}) => this.request({
            path: `/rest/uoms/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing UOM by its id.
         *
         * @tags Units of Measure
         * @name Delete37
         * @summary Delete a Unit of Measure (UOM)
         * @request DELETE:/rest/uoms/{id}
         * @secure */
        this.delete37 = (id, params = {}) => this.request({
            path: `/rest/uoms/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.UnitsOfMeasure = UnitsOfMeasure;
