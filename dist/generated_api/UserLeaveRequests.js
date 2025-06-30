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
exports.UserLeaveRequests = void 0;
const http_client_1 = require("./http-client");
class UserLeaveRequests extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Cancels a leave request for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name Cancel
         * @summary Cancel a leave request
         * @request POST:/rest/me/leave-requests/{id}/cancel
         * @secure */
        this.cancel = (id, params = {}) => this.request({
            path: `/rest/me/leave-requests/${id}/cancel`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of leave requests for the user referenced in the supplied auth token. Filter the results by optional list of leave requests statuses.
         *
         * @tags User Leave Requests
         * @name MyLeaveRequests
         * @summary Retrieves leave requests
         * @request GET:/rest/me/leave-requests
         * @secure */
        this.myLeaveRequests = (query, params = {}) => this.request({
            path: `/rest/me/leave-requests`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveRequestPagedResponse);
        /**
         * @description Creates a new leave request for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name Create20
         * @summary Create a new leave request
         * @request POST:/rest/me/leave-requests
         * @secure */
        this.create20 = (data, params = {}) => this.request({
            path: `/rest/me/leave-requests`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Updates a leave request for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name Update18
         * @summary Update a leave request
         * @request PUT:/rest/me/leave-requests/{id}
         * @secure */
        this.update18 = (id, data, params = {}) => this.request({
            path: `/rest/me/leave-requests/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a leave request in INUSE and DISAPPROVED status for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name Delete17
         * @summary Delete a leave request
         * @request DELETE:/rest/me/leave-requests/{id}
         * @secure */
        this.delete17 = (id, params = {}) => this.request({
            path: `/rest/me/leave-requests/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of status history for a given leave request, for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name GetStatusHistory4
         * @summary Retrieves leave request status history
         * @request GET:/rest/me/leave-requests/{id}/history
         * @secure */
        this.getStatusHistory4 = (id, query, params = {}) => this.request({
            path: `/rest/me/leave-requests/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveStatusHistoryPagedResponse);
        /**
         * @description Submit a leave request for the user referenced in the supplied auth token.
         *
         * @tags User Leave Requests
         * @name Submit6
         * @summary Submit a leave request for approval
         * @request POST:/rest/me/leave-requests/{id}/submit
         * @secure */
        this.submit6 = (id, data, params = {}) => this.request({
            path: `/rest/me/leave-requests/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.UserLeaveRequests = UserLeaveRequests;
