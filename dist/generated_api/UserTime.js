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
exports.UserTime = void 0;
const http_client_1 = require("./http-client");
class UserTime extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of timesheets, optionally filtered by 'active' flag, owned by the authenticated user, or optionally owned by a user for which they are a time alternate.
         *
         * @tags User Time
         * @name MeTime
         * @summary Retrieves timesheets
         * @request GET:/rest/me/time
         * @secure */
        this.meTime = (query, params = {}) => this.request({
            path: `/rest/me/time`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetPagedResponse);
        /**
         * @description Adds a new timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name Add
         * @summary Adds timesheet
         * @request POST:/rest/me/time
         * @secure */
        this.add = (data, query, params = {}) => this.request({
            path: `/rest/me/time`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Saves timesheet attachment and associate it with a timesheet
         *
         * @tags User Time
         * @name AddAttachment6
         * @summary Uploads timesheet attachment
         * @request POST:/rest/me/time/{id}/attachment
         * @secure */
        this.addAttachment6 = (id, data, params = {}) => this.request({
            path: `/rest/me/time/${id}/attachment`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves adjustments for a given timesheet owned by the authenticated user or a user for which they are a time alternate. * Optional parameter __type__ allows requesting only specific adjustment variants.
         *
         * @tags User Time
         * @name Adjustments
         * @summary Retrieves timesheet adjustments
         * @request GET:/rest/me/time/{id}/adjustments
         * @secure */
        this.adjustments = (id, query, params = {}) => this.request({
            path: `/rest/me/time/${id}/adjustments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AdjustmentsModel);
        /**
         * @description Retrieves attachment details for a timesheet
         *
         * @tags User Time
         * @name Attachments1
         * @summary Retrieves timesheet attachments
         * @request GET:/rest/me/time/{id}/attachments
         * @secure */
        this.attachments1 = (id, query, params = {}) => this.request({
            path: `/rest/me/time/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Retrieves specified attachment for a timesheet
         *
         * @tags User Time
         * @name GetAttachment7
         * @summary Retrieves timesheet attachment
         * @request GET:/rest/me/time/{id}/attachment/{attachmentId}
         * @secure */
        this.getAttachment7 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/me/time/${id}/attachment/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment associated with a give timesheet
         *
         * @tags User Time
         * @name DeleteAttachment6
         * @summary Delete timesheet attachment
         * @request DELETE:/rest/me/time/{id}/attachment/{attachmentId}
         * @secure */
        this.deleteAttachment6 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/me/time/${id}/attachment/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves the details of a timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name GetByKey22
         * @summary Retrieves timesheet
         * @request GET:/rest/me/time/{id}
         * @secure */
        this.getByKey22 = (id, params = {}) => this.request({
            path: `/rest/me/time/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetModel);
        /**
         * @description Updates the details of a timesheet that is owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name Update20
         * @summary Updates timesheet
         * @request PUT:/rest/me/time/{id}
         * @secure */
        this.update20 = (id, data, params = {}) => this.request({
            path: `/rest/me/time/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetUpdateResponseModel);
        /**
         * @description Removes a timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name DeleteByKey
         * @summary Deletes a timesheet
         * @request DELETE:/rest/me/time/{id}
         * @secure */
        this.deleteByKey = (id, params = {}) => this.request({
            path: `/rest/me/time/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of status history for a given timesheet owned by the authenticated user or a user for which they are a time alternate
         *
         * @tags User Time
         * @name GetStatusHistory5
         * @summary Retrieves timesheet status history
         * @request GET:/rest/me/time/{id}/history
         * @secure */
        this.getStatusHistory5 = (id, query, params = {}) => this.request({
            path: `/rest/me/time/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeStatusHistoryPagedResponse);
        /**
         * @description Retrieves a paged list of timesheets, filtered by the search criteria, owned by the authenticated user, or optionally owned by a user for which they are a time alternate. * Search for active timesheets, by setting __active__ flag to _true_. * Search for historical timesheets (not active), by setting __active__ flag to _false_, * Omit the __active__ flag and alternatively specify a list of timesheet __statuses__ or __adjustmentStatus__ to include in list. * Search for timesheets owned by users for which the authenticated user is a time alternate by providing a value for __ownerKey__. * If search criteria include both __statuses__ and __adjustmentStatuses__, the result is an OR of the two criteria. For example, if criteria include a status of _EXTRACTED_ and adjustmentStatus of _SUBMITTED_, then search will look for timesheets that include either a status of _EXTRACTED_ or an adjustmentStatus of _SUBMITTED_. * Regardless of the above criteria settings, __beginDateStart__ and __beginDateEnd__ can be used to filter timesheets by their beginDate. If beginDateStart is not specified, search will be limited to the last 30 days.Alternatively, __workDate__ can be used to match any timesheet where workDate is within the timesheet's designated time period. If both __beginDateStart__ and __workDate__ are not specified, search will be limited to the last 30 days. If both the __active__ flag is specified and either __statuses__ or __adjustmentStatuses__ contains entries, an HTTP 400 (BAD REQUEST) will be returned.
         *
         * @tags User Time
         * @name Search9
         * @summary Retrieves timesheets
         * @request POST:/rest/me/time/search
         * @secure */
        this.search9 = (data, query, params = {}) => this.request({
            path: `/rest/me/time/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetPagedResponse);
        /**
         * @description Submits a timesheet for approval that is owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name Submit7
         * @summary Submits timesheet
         * @request POST:/rest/me/time/{id}/submit
         * @secure */
        this.submit7 = (id, data, params = {}) => this.request({
            path: `/rest/me/time/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates a collection of timeslip, item entries, and TITOs with adjustment reasons for a timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name UpdateAdjustmentReasons
         * @summary Updates timesheet adjustment reasons
         * @request POST:/rest/me/time/{id}/adjustments/reason
         * @secure */
        this.updateAdjustmentReasons = (id, data, params = {}) => this.request({
            path: `/rest/me/time/${id}/adjustments/reason`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates a collection of timeslip and item entries with audit comments for a timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name UpdateAuditComments
         * @summary Updates timesheet audit comments
         * @request POST:/rest/me/time/{id}/audit/comment
         * @secure */
        this.updateAuditComments = (id, data, params = {}) => this.request({
            path: `/rest/me/time/${id}/audit/comment`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Validates, for save or submittal, a timesheet owned by the authenticated user or a user for which they are a time alternate.
         *
         * @tags User Time
         * @name Validate4
         * @summary Validates timesheet
         * @request GET:/rest/me/time/{id}/validate
         * @secure */
        this.validate4 = (id, query, params = {}) => this.request({
            path: `/rest/me/time/${id}/validate`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeValidationModel);
    }
}
exports.UserTime = UserTime;
