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
exports.CostReports = void 0;
const http_client_1 = require("./http-client");
class CostReports extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a cost report element by key
         *
         * @tags Cost Reports
         * @name GetByKey6
         * @summary Retrieves a cost report element by key.
         * @request GET:/rest/cost-reports/{costReportId}/report-elements/{id}
         * @secure */
        this.getByKey6 = (costReportId, id, params = {}) => this.request({
            path: `/rest/cost-reports/${costReportId}/report-elements/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostReportElementModel);
        /**
         * @description Retrieves a paged list of cost report elements
         *
         * @tags Cost Reports
         * @name GetReportElements
         * @summary Retrieves a list of cost report elements
         * @request GET:/rest/cost-reports/{costReportId}/report-elements
         * @secure */
        this.getReportElements = (costReportId, query, params = {}) => this.request({
            path: `/rest/cost-reports/${costReportId}/report-elements`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostReportElementPagedResponse);
        /**
         * @description Retrieves a paged list of cost reports
         *
         * @tags Cost Reports
         * @name Get10
         * @summary Retrieves a list of cost reports
         * @request GET:/rest/cost-reports
         * @secure */
        this.get10 = (query, params = {}) => this.request({
            path: `/rest/cost-reports`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostReportPagedResponse);
        /**
         * @description Create a new cost report
         *
         * @tags Cost Reports
         * @name Create5
         * @summary Create cost report
         * @request POST:/rest/cost-reports
         * @secure */
        this.create5 = (data, params = {}) => this.request({
            path: `/rest/cost-reports`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a cost report by key
         *
         * @tags Cost Reports
         * @name GetByKey7
         * @summary Retrieves a cost report by key.
         * @request GET:/rest/cost-reports/{id}
         * @secure */
        this.getByKey7 = (id, params = {}) => this.request({
            path: `/rest/cost-reports/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CostReportModel);
        /**
         * @description Update an existing cost report
         *
         * @tags Cost Reports
         * @name Update6
         * @summary Update cost report
         * @request PUT:/rest/cost-reports/{id}
         * @secure */
        this.update6 = (id, data, params = {}) => this.request({
            path: `/rest/cost-reports/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing cost report
         *
         * @tags Cost Reports
         * @name Delete5
         * @summary Delete cost report
         * @request DELETE:/rest/cost-reports/{id}
         * @secure */
        this.delete5 = (id, params = {}) => this.request({
            path: `/rest/cost-reports/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.CostReports = CostReports;
