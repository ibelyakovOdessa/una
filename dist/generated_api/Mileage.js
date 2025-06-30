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
exports.Mileage = void 0;
const http_client_1 = require("./http-client");
class Mileage extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a mileage rate set by key.
         *
         * @tags Mileage
         * @name GetMileageRateSet
         * @summary Retrieves a mileage rate set.
         * @request GET:/rest/mileage/{id}
         * @secure */
        this.getMileageRateSet = (id, params = {}) => this.request({
            path: `/rest/mileage/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.MileageRateSetModel);
        /**
         * @description Retrieves a list of mileage rate sets filtered by optional criteria.
         *
         * @tags Mileage
         * @name GetMileageRateSets
         * @summary Retrieves mileage rate sets.
         * @request GET:/rest/mileage
         * @secure */
        this.getMileageRateSets = (query, params = {}) => this.request({
            path: `/rest/mileage`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.MileageRateSetPagedResponse);
        /**
         * @description Retrieves a list of mileage rates for a given rate set.
         *
         * @tags Mileage
         * @name GetMileageRatesForRateSet
         * @summary Retrieves mileage rates.
         * @request GET:/rest/mileage/{id}/rates
         * @secure */
        this.getMileageRatesForRateSet = (id, query, params = {}) => this.request({
            path: `/rest/mileage/${id}/rates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.MileageRatePagedResponse);
    }
}
exports.Mileage = Mileage;
