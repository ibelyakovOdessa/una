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
exports.User = void 0;
const http_client_1 = require("./http-client");
class User extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves attachment details for the user referenced in the supplied auth token.
         *
         * @tags User
         * @name Attachments
         * @summary Retrieves user attachment details.
         * @request GET:/rest/me/attachments
         * @secure */
        this.attachments = (query, params = {}) => this.request({
            path: `/rest/me/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Add an attachment for the user referenced in the supplied auth token.
         *
         * @tags User
         * @name AddAttachment5
         * @summary Adds user attachment
         * @request POST:/rest/me/attachments
         * @secure */
        this.addAttachment5 = (data, params = {}) => this.request({
            path: `/rest/me/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves the timesheet user's assigned project list
         *
         * @tags User
         * @name AssignedProjects
         * @summary Retrieves the timesheet user's assigned project list
         * @request GET:/rest/me/my-projects
         * @secure */
        this.assignedProjects = (query, params = {}) => this.request({
            path: `/rest/me/my-projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.MyProjectPagedResponseModel);
        /**
         * @description Adds projects to the user's My Projects list.
         *
         * @tags User
         * @name AddProjects
         * @summary Adds projects to the user's My Projects list
         * @request POST:/rest/me/my-projects
         * @secure */
        this.addProjects = (data, params = {}) => this.request({
            path: `/rest/me/my-projects`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves the timesheet user's available project list
         *
         * @tags User
         * @name AvailableProjects
         * @summary Retrieves the timesheet user's available project list
         * @request POST:/rest/me/my-projects/available
         * @secure */
        this.availableProjects = (data, query, params = {}) => this.request({
            path: `/rest/me/my-projects/available`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.MyProjectPagedResponseModel);
        /**
         * @description Retrieves an attachment for the user referenced in the supplied auth token. The response contains the full bytes of the attachment.
         *
         * @tags User
         * @name GetAttachment6
         * @summary Retrieves user attachment
         * @request GET:/rest/me/attachments/{id}
         * @secure */
        this.getAttachment6 = (id, params = {}) => this.request({
            path: `/rest/me/attachments/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Deletes an attachment for the user referenced in the supplied auth token.
         *
         * @tags User
         * @name DeleteAttachment5
         * @summary Deletes user attachment
         * @request DELETE:/rest/me/attachments/{id}
         * @secure */
        this.deleteAttachment5 = (id, params = {}) => this.request({
            path: `/rest/me/attachments/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieve list of alternate approvers for the user.
         *
         * @tags User
         * @name GetAlternates
         * @summary Retrieve list of alternate approvers
         * @request GET:/rest/me/alternates
         * @secure */
        this.getAlternates = (query, params = {}) => this.request({
            path: `/rest/me/alternates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AlternatePagedResponse);
        /**
         * @description Update alternate approvers for the user.
         *
         * @tags User
         * @name UpdateAlternates
         * @summary Update alternate approvers
         * @request PUT:/rest/me/alternates
         * @secure */
        this.updateAlternates = (data, params = {}) => this.request({
            path: `/rest/me/alternates`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieve list of persons the user is an alternate for
         *
         * @tags User
         * @name GetAssignedAlternates
         * @summary Retrieve alternates for user
         * @request GET:/rest/me/alternates/for
         * @secure */
        this.getAssignedAlternates = (query, params = {}) => this.request({
            path: `/rest/me/alternates/for`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AlternatePagedResponse);
        /**
         * @description Retrieves the timesheet user's Leave Balance
         *
         * @tags User
         * @name LeaveBalance
         * @summary Retrieves the timesheet user's Leave Balance
         * @request POST:/rest/me/leave
         * @secure */
        this.leaveBalance = (data, query, params = {}) => this.request({
            path: `/rest/me/leave`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveBalancePagedResponseModel);
        /**
         * @description Retrieves details of the user referenced in the supplied auth token.
         *
         * @tags User
         * @name Me
         * @summary Retrieves user details
         * @request GET:/rest/me
         * @secure */
        this.me = (params = {}) => this.request({
            path: `/rest/me`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonModel);
        /**
         * @description Updates the set of editable values for the user referenced in the supplied auth token.
         *
         * @tags User
         * @name Update19
         * @summary Updates user details
         * @request PUT:/rest/me
         * @secure */
        this.update19 = (data, params = {}) => this.request({
            path: `/rest/me`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a list of all of the rates for the user referenced in the supplied auth token.
         *
         * @tags User
         * @name Rates
         * @summary Retrieves user rates
         * @request GET:/rest/me/rates
         * @secure */
        this.rates = (params = {}) => this.request({
            path: `/rest/me/rates`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonRateBaseModel);
        /**
         * @description Deletes a project from the user's My Projects list.
         *
         * @tags User
         * @name RemoveProject
         * @summary Deletes a project from the user's My Projects list
         * @request DELETE:/rest/me/my-projects/{projectId}
         * @secure */
        this.removeProject = (projectId, query, params = {}) => this.request({
            path: `/rest/me/my-projects/${projectId}`,
            method: "DELETE",
            query: query,
            secure: true,
            ...params,
        });
    }
}
exports.User = User;
