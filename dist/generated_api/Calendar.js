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
exports.Calendar = void 0;
const http_client_1 = require("./http-client");
class Calendar extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a list of named date ranges including ranges relative to the fiscal calendar if enabled.
         *
         * @tags Calendar
         * @name GetDateRanges
         * @summary Retrieves list of relative date ranges ranges.
         * @request GET:/rest/calendar/ranges
         * @secure */
        this.getDateRanges = (query, params = {}) => this.request({
            path: `/rest/calendar/ranges`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CalendarRangeModel);
        /**
         * @description Retrieves the breakdown of a fiscal year into its components.
         *
         * @tags Calendar
         * @name GetFiscalYearBreakdown
         * @summary Retrieves fiscal year breakdown.
         * @request GET:/rest/calendar/fiscal/years/{id}/breakdown
         * @secure */
        this.getFiscalYearBreakdown = (id, params = {}) => this.request({
            path: `/rest/calendar/fiscal/years/${id}/breakdown`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FiscalYearBreakdownModel);
        /**
         * @description Retrieves list of configured fiscal years.
         *
         * @tags Calendar
         * @name GetFiscalYears
         * @summary Retrieves fiscal years.
         * @request GET:/rest/calendar/fiscal/years
         * @secure */
        this.getFiscalYears = (query, params = {}) => this.request({
            path: `/rest/calendar/fiscal/years`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FiscalYearPagedResponse);
    }
}
exports.Calendar = Calendar;
