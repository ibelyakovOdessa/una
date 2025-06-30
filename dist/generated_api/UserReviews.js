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
exports.UserReviews = void 0;
const http_client_1 = require("./http-client");
class UserReviews extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Completes the review of a customer expense report approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name ExpenseReportReviewAsCustomer
         * @summary Review a customer expense report approval.
         * @request POST:/rest/me/reviews/expense/customer/{expenseReportId}
         * @secure */
        this.expenseReportReviewAsCustomer = (expenseReportId, data, params = {}) => this.request({
            path: `/rest/me/reviews/expense/customer/${expenseReportId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a manager expense report approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name ExpenseReportReviewAsManager
         * @summary Review a manager expense report approval.
         * @request POST:/rest/me/reviews/expense/manager/{expenseReportId}
         * @secure */
        this.expenseReportReviewAsManager = (expenseReportId, data, params = {}) => this.request({
            path: `/rest/me/reviews/expense/manager/${expenseReportId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of an expense report submission performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name ExpenseReportReviewAsOwner
         * @summary Review an expense report submission.
         * @request POST:/rest/me/reviews/expense/{expenseReportId}
         * @secure */
        this.expenseReportReviewAsOwner = (expenseReportId, data, params = {}) => this.request({
            path: `/rest/me/reviews/expense/${expenseReportId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a project approver expense report approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name ExpenseReportReviewAsProjectApprover
         * @summary Review a project approver expense report approval.
         * @request POST:/rest/me/reviews/expense/project-approver/{expenseReportId}
         * @secure */
        this.expenseReportReviewAsProjectApprover = (expenseReportId, data, params = {}) => this.request({
            path: `/rest/me/reviews/expense/project-approver/${expenseReportId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of project-level expense approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetExpenseApprovalReviewsForCustomer
         * @summary Retrieves project-level expense approval reviews for a customer.
         * @request GET:/rest/me/reviews/expense/customer
         * @secure */
        this.getExpenseApprovalReviewsForCustomer = (query, params = {}) => this.request({
            path: `/rest/me/reviews/expense/customer`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of expense approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetExpenseApprovalReviewsForManager
         * @summary Retrieves expense approval reviews for a manager.
         * @request GET:/rest/me/reviews/expense/manager
         * @secure */
        this.getExpenseApprovalReviewsForManager = (query, params = {}) => this.request({
            path: `/rest/me/reviews/expense/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of project-level expense approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetExpenseApprovalReviewsForProjectApprover
         * @summary Retrieves project-level expense approval reviews for a project approver.
         * @request GET:/rest/me/reviews/expense/project-approver
         * @secure */
        this.getExpenseApprovalReviewsForProjectApprover = (query, params = {}) => this.request({
            path: `/rest/me/reviews/expense/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of expense submission reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetExpenseReviewsForOwner
         * @summary Retrieves expense submission reviews for an expense owner.
         * @request GET:/rest/me/reviews/expense
         * @secure */
        this.getExpenseReviewsForOwner = (query, params = {}) => this.request({
            path: `/rest/me/reviews/expense`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of project-level time approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetTimesheetApprovalReviewsForCustomer
         * @summary Retrieves project-level time approval reviews for a customer.
         * @request GET:/rest/me/reviews/time/customer
         * @secure */
        this.getTimesheetApprovalReviewsForCustomer = (query, params = {}) => this.request({
            path: `/rest/me/reviews/time/customer`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of time approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetTimesheetApprovalReviewsForManager
         * @summary Retrieves time approval reviews for a manager.
         * @request GET:/rest/me/reviews/time/manager
         * @secure */
        this.getTimesheetApprovalReviewsForManager = (query, params = {}) => this.request({
            path: `/rest/me/reviews/time/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of project-level time approval reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetTimesheetApprovalReviewsForProjectApprover
         * @summary Retrieves project-level time approval reviews for a project approver.
         * @request GET:/rest/me/reviews/time/project-approver
         * @secure */
        this.getTimesheetApprovalReviewsForProjectApprover = (query, params = {}) => this.request({
            path: `/rest/me/reviews/time/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of time submission reviews for the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name GetTimesheetReviewsForOwner
         * @summary Retrieves time submission reviews for a time user.
         * @request GET:/rest/me/reviews/time
         * @secure */
        this.getTimesheetReviewsForOwner = (query, params = {}) => this.request({
            path: `/rest/me/reviews/time`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Completes the review of a customer invoice approval performed on behlaf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name InvoiceReviewAsCustomer
         * @summary Review a customer invoice approval.
         * @request POST:/rest/me/reviews/invoice/customer/{id}
         * @secure */
        this.invoiceReviewAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/reviews/invoice/customer/${id}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of an accounts receivable manager invoice approval performed on behlaf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name InvoiceReviewAsManager
         * @summary Review an accounts receivable manager invoice approval.
         * @request POST:/rest/me/reviews/invoice/manager/{id}
         * @secure */
        this.invoiceReviewAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/reviews/invoice/manager/${id}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a project approver invoice approval performed on behlaf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name InvoiceReviewAsProjectApprover
         * @summary Review a project approver invoice approval.
         * @request POST:/rest/me/reviews/invoice/project-approver/{id}
         * @secure */
        this.invoiceReviewAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/reviews/invoice/project-approver/${id}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a customer timesheet approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name TimesheetReviewAsCustomer
         * @summary Review a customer timesheet approval.
         * @request POST:/rest/me/reviews/time/customer/{timesheetId}
         * @secure */
        this.timesheetReviewAsCustomer = (timesheetId, data, params = {}) => this.request({
            path: `/rest/me/reviews/time/customer/${timesheetId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a manager timesheet approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name TimesheetReviewAsManager
         * @summary Review a manager timesheet approval.
         * @request POST:/rest/me/reviews/time/manager/{timesheetId}
         * @secure */
        this.timesheetReviewAsManager = (timesheetId, data, params = {}) => this.request({
            path: `/rest/me/reviews/time/manager/${timesheetId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a timesheet submission performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name TimesheetReviewAsOwner
         * @summary Review a timesheet submission.
         * @request POST:/rest/me/reviews/time/{timesheetId}
         * @secure */
        this.timesheetReviewAsOwner = (timesheetId, data, params = {}) => this.request({
            path: `/rest/me/reviews/time/${timesheetId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Completes the review of a project approver timesheet approval performed on behalf of the user referenced in the supplied auth token.
         *
         * @tags User Reviews
         * @name TimesheetReviewAsProjectApprover
         * @summary Review a project approver timesheet approval.
         * @request POST:/rest/me/reviews/time/project-approver/{timesheetId}
         * @secure */
        this.timesheetReviewAsProjectApprover = (timesheetId, data, params = {}) => this.request({
            path: `/rest/me/reviews/time/project-approver/${timesheetId}`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.UserReviews = UserReviews;
