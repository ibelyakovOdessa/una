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
exports.UserExpenses = void 0;
const http_client_1 = require("./http-client");
class UserExpenses extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of attachments for an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name GetAttachments5
         * @summary Retrieves expense attachments
         * @request GET:/rest/me/expenses/{id}/attachments
         * @secure */
        this.getAttachments5 = (id, query, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseDetailAttachmentListPagedResponse);
        /**
         * @description Adds an attachment to an expense owned by the authenticated user or a user for which they are an expense alternate. Optionally associate the attachment with an expense detail item.
         *
         * @tags User Expenses
         * @name AddAttachment4
         * @summary Adds expense attachment
         * @request POST:/rest/me/expenses/{id}/attachments
         * @secure */
        this.addAttachment4 = (id, data, query, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/attachments`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of expenses owned by the authenticated user, or optionally owned by a user for which they are an expense alternate. Filter the results by optional list of expense statuses and/or a voucher type.
         *
         * @tags User Expenses
         * @name MeExpense
         * @summary Retrieves expenses
         * @request GET:/rest/me/expenses
         * @secure */
        this.meExpense = (query, params = {}) => this.request({
            path: `/rest/me/expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpensePagedResponse);
        /**
         * @description Creates an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name Create19
         * @summary Creates an expense
         * @request POST:/rest/me/expenses
         * @secure */
        this.create19 = (data, query, params = {}) => this.request({
            path: `/rest/me/expenses`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name CreateDetail3
         * @summary Creates an expense detail
         * @request POST:/rest/me/expenses/{id}/details
         * @secure */
        this.createDetail3 = (id, data, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/details`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves the details of an expense owned by the authenticated user or a user for which they are a expense alternate.
         *
         * @tags User Expenses
         * @name GetByKey21
         * @summary Retrieves an expense
         * @request GET:/rest/me/expenses/{id}
         * @secure */
        this.getByKey21 = (id, params = {}) => this.request({
            path: `/rest/me/expenses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseModel);
        /**
         * @description Updates an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name Update17
         * @summary Updates an expense
         * @request PUT:/rest/me/expenses/{id}
         * @secure */
        this.update17 = (id, data, params = {}) => this.request({
            path: `/rest/me/expenses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name Delete16
         * @summary Deletes an expense
         * @request DELETE:/rest/me/expenses/{id}
         * @secure */
        this.delete16 = (id, params = {}) => this.request({
            path: `/rest/me/expenses/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an attachment for an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name GetAttachment5
         * @summary Retrieves an expense attachment
         * @request GET:/rest/me/expenses/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment5 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an expense attachment and its associations from an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name DeleteAttachment4
         * @summary Deletes expense attachment
         * @request DELETE:/rest/me/expenses/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment4 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name FindByDetailKey1
         * @summary Retrieve an expense detail
         * @request GET:/rest/me/expenses/{id}/details/{detailId}
         * @secure */
        this.findByDetailKey1 = (id, detailId, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/details/${detailId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseDetailModel);
        /**
         * @description Updates an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name UpdateDetail3
         * @summary Updates an expense detail
         * @request PUT:/rest/me/expenses/{id}/details/{detailId}
         * @secure */
        this.updateDetail3 = (id, detailId, data, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/details/${detailId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate..
         *
         * @tags User Expenses
         * @name DeleteDetail3
         * @summary Deletes an expense detail
         * @request DELETE:/rest/me/expenses/{id}/details/{detailId}
         * @secure */
        this.deleteDetail3 = (id, detailId, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/details/${detailId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves the details of an approved expense request, owned by the authenticated user, or a user for which they are a expense alternate.
         *
         * @tags User Expenses
         * @name GetApprovedRequestByKey
         * @summary Retrieves an approved expense request
         * @request GET:/rest/me/expenses/approved-requests/{id}
         * @secure */
        this.getApprovedRequestByKey = (id, params = {}) => this.request({
            path: `/rest/me/expenses/approved-requests/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseRequestModel);
        /**
         * @description Retrieves a list of imported expenses for the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name GetImportedExpenses
         * @summary Retrieves user imported expenses
         * @request POST:/rest/me/expenses/imported/search
         * @secure */
        this.getImportedExpenses = (data, query, params = {}) => this.request({
            path: `/rest/me/expenses/imported/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ImportedExpensePagedResponseModel);
        /**
         * @description Retrieves meal caps for an expense
         *
         * @tags User Expenses
         * @name GetMealCaps
         * @summary Retries Meal Caps
         * @request GET:/rest/me/expenses/{id}/meal-caps
         * @secure */
        this.getMealCaps = (id, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/meal-caps`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseMealsCapModel);
        /**
         * @description Retrieves a paged list of status history for a given expense owned by the authenticated user or a user for which they are an expense alternate
         *
         * @tags User Expenses
         * @name GetStatusHistory3
         * @summary Retrieves expense status history
         * @request GET:/rest/me/expenses/{id}/history
         * @secure */
        this.getStatusHistory3 = (id, query, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseStatusHistoryPagedResponse);
        /**
         * @description Save an imported credit card expense to an expense report owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name IncludeImportedExpense
         * @summary Save an imported credit card expense to an expense report
         * @request POST:/rest/me/expenses/{id}/imported
         * @secure */
        this.includeImportedExpense = (id, data, query, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/imported`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of approved expense requests owned by the authenticated user, or optionally owned by a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name MeApprovedRequests
         * @summary Retrieves approved expense requests
         * @request GET:/rest/me/expenses/approved-requests
         * @secure */
        this.meApprovedRequests = (query, params = {}) => this.request({
            path: `/rest/me/expenses/approved-requests`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseRequestPagedResponse);
        /**
         * @description Submits for approval an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name Submit5
         * @summary Submits an expense
         * @request POST:/rest/me/expenses/{id}/submit
         * @secure */
        this.submit5 = (id, data, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates a collection of expense details for a given expense id.
         *
         * @tags User Expenses
         * @name UpdateDetails1
         * @summary Updates a collection of expense details
         * @request PUT:/rest/me/expenses/{id}/details/bulk
         * @secure */
        this.updateDetails1 = (id, data, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/details/bulk`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Validates, for save or submittal, an expense owned by the authenticated user or a user for which they are an expense alternate.
         *
         * @tags User Expenses
         * @name Validate3
         * @summary Validates an expense
         * @request GET:/rest/me/expenses/{id}/validate
         * @secure */
        this.validate3 = (id, query, params = {}) => this.request({
            path: `/rest/me/expenses/${id}/validate`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseValidationModel);
    }
}
exports.UserExpenses = UserExpenses;
