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
exports.Timesheets = void 0;
const http_client_1 = require("./http-client");
class Timesheets extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Saves timesheet attachment and associate it with a timesheet
         *
         * @tags Timesheets
         * @name AddAttachment11
         * @summary Uploads timesheet attachment
         * @request POST:/rest/time/{id}/attachment
         * @secure */
        this.addAttachment11 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/attachment`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve adjustments for a given timesheet and project. * Optional parameter __type__ allows requesting only specific adjustment variants.
         *
         * @tags Timesheets
         * @name Adjustments1
         * @summary Retrieve timesheet adjustments
         * @request GET:/rest/time/{id}/adjustments
         * @secure */
        this.adjustments1 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/adjustments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AdjustmentsModel);
        /**
         * @description Retrieves attachment details for a timesheet
         *
         * @tags Timesheets
         * @name Attachments3
         * @summary Retrieves timesheet attachments
         * @request GET:/rest/time/{id}/attachments
         * @secure */
        this.attachments3 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Completes a timesheet. * If __bulkApprove__ is __true__ an INUSE, SUBMITTED or APPROVING timesheet will be completed using the bulk approval work flow. * If __bulkApprove__ is __false__, only an INUSE timesheets will be completed and the process will skip the approval workflows. Completed timesheets will automatically move to LOCKED status if time auto-lock is enabled.
         *
         * @tags Timesheets
         * @name Complete2
         * @summary Completes timesheet
         * @request POST:/rest/time/{id}/complete
         * @secure */
        this.complete2 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/complete`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of timesheets filtered by optional query parameters.
         *
         * @tags Timesheets
         * @name Get38
         * @summary Retrieves timesheets
         * @request GET:/rest/time
         * @secure */
        this.get38 = (query, params = {}) => this.request({
            path: `/rest/time`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetPagedResponse);
        /**
         * @description Adds a new timesheet.
         *
         * @tags Timesheets
         * @name Create41
         * @summary Adds timesheet
         * @request POST:/rest/time
         * @secure */
        this.create41 = (data, query, params = {}) => this.request({
            path: `/rest/time`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve time rows from the previous timesheet for autofill
         *
         * @tags Timesheets
         * @name TimesheetAutoFill
         * @summary Retrieve Time Rows for Autofill
         * @request GET:/rest/time/{id}/auto-fill
         * @secure */
        this.timesheetAutoFill = (id, params = {}) => this.request({
            path: `/rest/time/${id}/auto-fill`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeRowPagedResponse);
        /**
         * @description Create an autofill record that has been removed from a timesheet
         *
         * @tags Timesheets
         * @name CreateAutofillRow
         * @summary Create Autofill Row
         * @request POST:/rest/time/{id}/auto-fill
         * @secure */
        this.createAutofillRow = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/auto-fill`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimeRowPagedResponse);
        /**
         * @description Retrieves specified attachment for a timesheet
         *
         * @tags Timesheets
         * @name GetAttachment12
         * @summary Retrieves timesheet attachment
         * @request GET:/rest/time/{id}/attachment/{attachmentId}
         * @secure */
        this.getAttachment12 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/time/${id}/attachment/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment associated with a give timesheet
         *
         * @tags Timesheets
         * @name DeleteAttachment11
         * @summary Delete timesheet attachment
         * @request DELETE:/rest/time/{id}/attachment/{attachmentId}
         * @secure */
        this.deleteAttachment11 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/time/${id}/attachment/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of an timesheet by its ID.
         *
         * @tags Timesheets
         * @name GetByKey38
         * @summary Retrieves a timesheet
         * @request GET:/rest/time/{id}
         * @secure */
        this.getByKey38 = (id, params = {}) => this.request({
            path: `/rest/time/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetModel);
        /**
         * @description Updates details of an existing timesheet.
         *
         * @tags Timesheets
         * @name Update40
         * @summary Updates timesheet
         * @request PUT:/rest/time/{id}
         * @secure */
        this.update40 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetUpdateResponseModel);
        /**
         * @description Removes a timesheet and its associated records.
         *
         * @tags Timesheets
         * @name DeleteByKey1
         * @summary Deletes timesheet
         * @request DELETE:/rest/time/{id}
         * @secure */
        this.deleteByKey1 = (id, params = {}) => this.request({
            path: `/rest/time/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of item audit entries associated with a timesheet.
         *
         * @tags Timesheets
         * @name GetItemEntryHistory
         * @summary Retrieves timesheet item audit history
         * @request GET:/rest/time/{id}/items/audit
         * @secure */
        this.getItemEntryHistory = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/items/audit`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ItemEntryHistoryPagedResponse);
        /**
         * @description Retrieve a paged list of labor categories associated with a timesheet project.
         *
         * @tags Timesheets
         * @name GetLaborCategories1
         * @summary Retrieve timesheet project labor categories
         * @request GET:/rest/time/{id}/projects/{projectId}/labor-categories
         * @secure */
        this.getLaborCategories1 = (id, projectId, query, params = {}) => this.request({
            path: `/rest/time/${id}/projects/${projectId}/labor-categories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LaborCategoryPagedResponse);
        /**
         * @description Retrieves a paged list of labor categories associated with a timesheet task.
         *
         * @tags Timesheets
         * @name GetLaborCategoriesByTask
         * @summary Retrieves timesheet task labor categories
         * @request GET:/rest/time/{id}/tasks/{taskId}/labor-categories
         * @secure */
        this.getLaborCategoriesByTask = (id, taskId, query, params = {}) => this.request({
            path: `/rest/time/${id}/tasks/${taskId}/labor-categories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LaborCategoryPagedResponse);
        /**
         * @description Retrieves a paged list of locations associated with a timesheet project.
         *
         * @tags Timesheets
         * @name GetLocations2
         * @summary Retrieves timesheet project locations
         * @request GET:/rest/time/{id}/projects/{projectId}/locations
         * @secure */
        this.getLocations2 = (id, projectId, query, params = {}) => this.request({
            path: `/rest/time/${id}/projects/${projectId}/locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LocationPagedResponse);
        /**
         * @description Retrieves a paged list of locations associated with a timesheet task.
         *
         * @tags Timesheets
         * @name GetLocationsByTask
         * @summary Retrieve timesheet task locations
         * @request GET:/rest/time/{id}/tasks/{taskId}/locations
         * @secure */
        this.getLocationsByTask = (id, taskId, query, params = {}) => this.request({
            path: `/rest/time/${id}/tasks/${taskId}/locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LocationPagedResponse);
        /**
         * @description Retrieves details of an timesheet for offline use.
         *
         * @tags Timesheets
         * @name GetOfflineTimesheet
         * @summary Retrieves offline timesheet data
         * @request GET:/rest/time/{id}/offline
         * @secure */
        this.getOfflineTimesheet = (id, params = {}) => this.request({
            path: `/rest/time/${id}/offline`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OfflineTimesheetModel);
        /**
         * @description Retrieve a paged list of project types associated with a timesheet.
         *
         * @tags Timesheets
         * @name GetProjectTypes1
         * @summary Retrieves timesheet project types
         * @request GET:/rest/time/{id}/project-types
         * @secure */
        this.getProjectTypes1 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/project-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypePagedResponse);
        /**
         * @description Retrieve a paged list of projects associated with a timesheet.
         *
         * @tags Timesheets
         * @name GetProjects1
         * @summary Retrieves timesheet projects
         * @request GET:/rest/time/{id}/projects
         * @secure */
        this.getProjects1 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetProjectPagedResponse);
        /**
         * @description Retrieves status history list for a given timesheet.
         *
         * @tags Timesheets
         * @name GetStatusHistory6
         * @summary Retrieves timesheet status history
         * @request GET:/rest/time/{id}/history
         * @secure */
        this.getStatusHistory6 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeStatusHistoryPagedResponse);
        /**
         * @description Retrieve a paged list of audit history entries associated with a timesheet timeslip.
         *
         * @tags Timesheets
         * @name GetTimeslipHistory
         * @summary Retrieves timeslip audit history
         * @request GET:/rest/time/{id}/audit
         * @secure */
        this.getTimeslipHistory = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/audit`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeslipHistoryPagedResponse);
        /**
         * @description Retrieves a paged list of timesheets filtered by optional search criteria. * Search for active timesheets, by setting __active__ flag to _true_. * Search for historical timesheets (not active), by setting __active__ flag to _false_, * Omit the __active__ flag and alternatively specify a list of timesheet __statuses__ or __adjustmentStatus__ to include in list. * If search criteria include both __statuses__ and __adjustmentStatuses__, the result is an OR of the two criteria. For example, if criteria include a status of _EXTRACTED_ and adjustmentStatus of _SUBMITTED_, then search will look for timesheets that include either a status of _EXTRACTED_ or an adjustmentStatus of _SUBMITTED_. * Regardless of the above criteria settings, one can optionally specify the list of __personKeys__ by which to filter timesheets. * __beginDateStart__ and __beginDateEnd__ can be used to filter timesheets by their beginDate. Alternatively, __workDate__ can be used to match any timesheet where workDate is within the timesheet's designated time period. If both __beginDateStart__ and __workDate__ are not specified, search will be limited to the last 30 days. If both the __active__ flag is specified and either __statuses__ or __adjustmentStatuses__ contains entries, an HTTP 400 (BAD REQUEST) will be returned.
         *
         * @tags Timesheets
         * @name Search21
         * @summary Retrieves timesheets
         * @request POST:/rest/time/search
         * @secure */
        this.search21 = (data, query, params = {}) => this.request({
            path: `/rest/time/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimesheetPagedResponse);
        /**
         * @description Submits a timesheet for approval.
         *
         * @tags Timesheets
         * @name Submit10
         * @summary Submits timesheet
         * @request POST:/rest/time/{id}/submit
         * @secure */
        this.submit10 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieve deleted autofill time rows
         *
         * @tags Timesheets
         * @name TimesheetDeletedAutofillRows
         * @summary Retrieve Deleted Autofill Time Rows
         * @request GET:/rest/time/{id}/auto-fill/deleted
         * @secure */
        this.timesheetDeletedAutofillRows = (id, params = {}) => this.request({
            path: `/rest/time/${id}/auto-fill/deleted`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeRowPagedResponse);
        /**
         * @description Retrieves potential defaults for timeslip fields when a new record would be created. Fields that return null may still be required for insertion but no default could be derived.
         *
         * @tags Timesheets
         * @name TimeslipDefaults
         * @summary Retrieves timeslip defaults
         * @request POST:/rest/time/{id}/timeslip-defaults
         * @secure */
        this.timeslipDefaults = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/timeslip-defaults`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.TimeslipPropertyModel);
        /**
         * @description Updates a collection of timeslip, item entries, and TITOs with adjustment reasons.
         *
         * @tags Timesheets
         * @name UpdateAdjustmentReasons1
         * @summary Updates timesheet adjustment reasons
         * @request POST:/rest/time/{id}/adjustments/reason
         * @secure */
        this.updateAdjustmentReasons1 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/adjustments/reason`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates a collection of timeslip and item entries with audit comments. Unanet property 'unatime.audit' must be enabled in order to update timesheet audit comments
         *
         * @tags Timesheets
         * @name UpdateAuditComments1
         * @summary Updates timesheet audit comments
         * @request POST:/rest/time/{id}/audit/comment
         * @secure */
        this.updateAuditComments1 = (id, data, params = {}) => this.request({
            path: `/rest/time/${id}/audit/comment`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Validate a timesheet for save or submittal based on 'submitValidation' flag.
         *
         * @tags Timesheets
         * @name Validate5
         * @summary Validates timesheet
         * @request GET:/rest/time/{id}/validate
         * @secure */
        this.validate5 = (id, query, params = {}) => this.request({
            path: `/rest/time/${id}/validate`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeValidationModel);
    }
}
exports.Timesheets = Timesheets;
