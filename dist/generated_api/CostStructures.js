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
exports.CostStructures = void 0;
const http_client_1 = require("./http-client");
class CostStructures extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve a paged list of labor keys for a specified cost structure.
         *
         * @tags Cost Structures
         * @name GetCostStructureLaborKeys
         * @summary Retrieves labor keys for a cost structure
         * @request GET:/rest/cost-structures/{id}/labor
         * @secure */
        this.getCostStructureLaborKeys = (id, query, params = {}) => this.request({
            path: `/rest/cost-structures/${id}/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostStructureLaborKeysPagedResponse);
        /**
         * @description Assigns a labor cost element to the specified cost structure.
         *
         * @tags Cost Structures
         * @name AssignLaborCostElement
         * @summary Assigns labor cost element to a cost structure
         * @request POST:/rest/cost-structures/{id}/labor
         * @secure */
        this.assignLaborCostElement = (id, data, params = {}) => this.request({
            path: `/rest/cost-structures/${id}/labor`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of cost structures filtered by optional active flag.
         *
         * @tags Cost Structures
         * @name Get11
         * @summary Retrieves cost structures
         * @request GET:/rest/cost-structures
         * @secure */
        this.get11 = (query, params = {}) => this.request({
            path: `/rest/cost-structures`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostStructurePagedResponse);
        /**
         * @description Retrieve a cost structure labor element by key.
         *
         * @tags Cost Structures
         * @name GetCostStructureLaborElement
         * @summary Retrieves a cost structure labor element
         * @request GET:/rest/cost-structures/labor/{id}
         * @secure */
        this.getCostStructureLaborElement = (id, params = {}) => this.request({
            path: `/rest/cost-structures/labor/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostStructureLaborModel);
    }
}
exports.CostStructures = CostStructures;
