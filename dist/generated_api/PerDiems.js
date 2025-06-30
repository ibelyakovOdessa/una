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
exports.PerDiems = void 0;
const http_client_1 = require("./http-client");
class PerDiems extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of city/county locations and rates for a per diem country/state.
         *
         * @tags Per Diems
         * @name GetCityCounties
         * @summary Retrieves per diem city/county locations and rates for a country/state.
         * @request GET:/rest/per-diems/regions/{countryStateName}
         * @secure */
        this.getCityCounties = (countryStateName, query, params = {}) => this.request({
            path: `/rest/per-diems/regions/${countryStateName}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PerDiemLocationPagedResponse);
        /**
         * @description Retrieves a paged list of country/states for per diem rates.
         *
         * @tags Per Diems
         * @name GetCountryStates
         * @summary Retrieves per diem rate country/states.
         * @request GET:/rest/per-diems/regions
         * @secure */
        this.getCountryStates = (query, params = {}) => this.request({
            path: `/rest/per-diems/regions`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PerDiemRegionPagedResponse);
        /**
         * @description Retrieves a paged list of  per diem meals and incidental expense rates.
         *
         * @tags Per Diems
         * @name GetPerDiemMieBreakdowns
         * @summary Retrieves per diem meals and incidental expense rates.
         * @request GET:/rest/per-diems/mies
         * @secure */
        this.getPerDiemMieBreakdowns = (query, params = {}) => this.request({
            path: `/rest/per-diems/mies`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PerDiemMIEBreakdownPagedResponse);
    }
}
exports.PerDiems = PerDiems;
