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
exports.LeaveRequests = void 0;
const http_client_1 = require("./http-client");
class LeaveRequests extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of status history for a given leave request.
         *
         * @tags Leave Requests
         * @name GetStatusHistory2
         * @summary Retrieves leave request status history
         * @request GET:/rest/leave-requests/{id}/history
         * @secure */
        this.getStatusHistory2 = (id, query, params = {}) => this.request({
            path: `/rest/leave-requests/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveStatusHistoryPagedResponse);
        /**
         * @description Retrieves a paged list of leave requests, filtering the results by optional criteria.
         *
         * @tags Leave Requests
         * @name LeaveRequests
         * @summary Retrieves leave requests
         * @request GET:/rest/leave-requests
         * @secure */
        this.leaveRequests = (query, params = {}) => this.request({
            path: `/rest/leave-requests`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveRequestPagedResponse);
    }
}
exports.LeaveRequests = LeaveRequests;
