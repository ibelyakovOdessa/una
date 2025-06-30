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
exports.TimePeriodSetups = void 0;
const http_client_1 = require("./http-client");
class TimePeriodSetups extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of time period definitions.
         *
         * @tags Time Period Setups
         * @name Get37
         * @summary Retrieves time period definitions
         * @request GET:/rest/time-period-setups
         * @secure */
        this.get37 = (query, params = {}) => this.request({
            path: `/rest/time-period-setups`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimePeriodSetupPagedResponse);
        /**
         * @description Creates a time period definition.
         *
         * @tags Time Period Setups
         * @name Create40
         * @summary Creates time period definition
         * @request POST:/rest/time-period-setups
         * @secure */
        this.create40 = (data, params = {}) => this.request({
            path: `/rest/time-period-setups`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a time period definition.
         *
         * @tags Time Period Setups
         * @name GetByKey37
         * @summary Retrieves a time period definition
         * @request GET:/rest/time-period-setups/{id}
         * @secure */
        this.getByKey37 = (id, params = {}) => this.request({
            path: `/rest/time-period-setups/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimePeriodSetupModel);
        /**
         * @description Retrieves a paged list of time periods for a time period setup, filtered by search criteria.
         *
         * @tags Time Period Setups
         * @name SearchTimePeriods
         * @summary Retrieves time periods for a time period setup.
         * @request POST:/rest/time-period-setups/{id}/time-periods/search
         * @secure */
        this.searchTimePeriods = (id, data, query, params = {}) => this.request({
            path: `/rest/time-period-setups/${id}/time-periods/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimePeriodPagedResponse);
    }
}
exports.TimePeriodSetups = TimePeriodSetups;
