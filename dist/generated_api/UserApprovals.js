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
exports.UserApprovals = void 0;
const http_client_1 = require("./http-client");
class UserApprovals extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of project-level expense approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApprovalsForCustomer
         * @summary Retrieves project-level expense approvals for a customer.
         * @request GET:/rest/me/approvals/expense/customer
         * @secure */
        this.expenseApprovalsForCustomer = (query, params = {}) => this.request({
            path: `/rest/me/approvals/expense/customer`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of manager level expense approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApprovalsForManager
         * @summary Retrieves manager level expense approvals.
         * @request GET:/rest/me/approvals/expense/manager
         * @secure */
        this.expenseApprovalsForManager = (query, params = {}) => this.request({
            path: `/rest/me/approvals/expense/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Retrieves a manager level expense approval by key for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApprovalsForManagerByKey
         * @summary Retrieves manager level expense approval
         * @request GET:/rest/me/approvals/expense/manager/{id}
         * @secure */
        this.expenseApprovalsForManagerByKey = (id, query, params = {}) => this.request({
            path: `/rest/me/approvals/expense/manager/${id}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueueModel);
        /**
         * @description Retrieves a paged list of project-level expense approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApprovalsForProjectApprover
         * @summary Retrieves project-level expense approvals for a project approver.
         * @request GET:/rest/me/approvals/expense/project-approver
         * @secure */
        this.expenseApprovalsForProjectApprover = (query, params = {}) => this.request({
            path: `/rest/me/approvals/expense/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseApprovalQueuePagedResponse);
        /**
         * @description Approves an expense, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApproveAsCustomer
         * @summary Approves expense as customer
         * @request POST:/rest/me/approvals/expense/customer/{id}/approve
         * @secure */
        this.expenseApproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/customer/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves an expense, as the manager, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApproveAsManager
         * @summary Approves expense as manager
         * @request POST:/rest/me/approvals/expense/manager/{id}/approve
         * @secure */
        this.expenseApproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/manager/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves an expense, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseApproveAsProjectApprover
         * @summary Approves expense as project approver
         * @request POST:/rest/me/approvals/expense/project-approver/{id}/approve
         * @secure */
        this.expenseApproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/project-approver/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves an expense, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseDisapproveAsCustomer
         * @summary Disapproves expense as customer
         * @request POST:/rest/me/approvals/expense/customer/{id}/disapprove
         * @secure */
        this.expenseDisapproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/customer/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves an expense, as the manager, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseDisapproveAsManager
         * @summary Disapproves expense as manager
         * @request POST:/rest/me/approvals/expense/manager/{id}/disapprove
         * @secure */
        this.expenseDisapproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/manager/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves an expense, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name ExpenseDisapproveAsProjectApprover
         * @summary Disapproves expense as project approver
         * @request POST:/rest/me/approvals/expense/project-approver/{id}/disapprove
         * @secure */
        this.expenseDisapproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/expense/project-approver/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of project-level invoice approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApprovalsForCustomer
         * @summary Retrieves project-level invoice approvals for a customer.
         * @request GET:/rest/me/approvals/invoice/customer
         * @secure */
        this.invoiceApprovalsForCustomer = (query, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/customer`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceApprovalQueuePagedResponse);
        /**
         * @description Retrieves a manager level customer invoice approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApprovalsForManager
         * @summary Retrieves manager level invoice approvals
         * @request GET:/rest/me/approvals/invoice/manager
         * @secure */
        this.invoiceApprovalsForManager = (query, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceApprovalQueuePagedResponse);
        /**
         * @description Retrieves a paged list of project-level invoice approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApprovalsForProjectApprover
         * @summary Retrieves project-level invoice approvals for a project approver.
         * @request GET:/rest/me/approvals/invoice/project-approver
         * @secure */
        this.invoiceApprovalsForProjectApprover = (query, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceApprovalQueuePagedResponse);
        /**
         * @description Approves an invoice, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApproveAsCustomer
         * @summary Approves invoice as customer
         * @request POST:/rest/me/approvals/invoice/customer/{id}/approve
         * @secure */
        this.invoiceApproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/customer/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves a customer invoice as the accounts receivable manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApproveAsManager
         * @summary Approves invoice as an accounts receivable manager.
         * @request POST:/rest/me/approvals/invoice/manager/{id}/approve
         * @secure */
        this.invoiceApproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/manager/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves an invoice, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceApproveAsProjectApprover
         * @summary Approves invoice as project approver
         * @request POST:/rest/me/approvals/invoice/project-approver/{id}/approve
         * @secure */
        this.invoiceApproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/project-approver/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves an invoice, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceDisapproveAsCustomer
         * @summary Disapproves invoice as customer
         * @request POST:/rest/me/approvals/invoice/customer/{id}/disapprove
         * @secure */
        this.invoiceDisapproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/customer/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves a customer invoice as the accounts receivable manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceDisapproveAsManager
         * @summary Disapproves invoice as an accounts receivable manager
         * @request POST:/rest/me/approvals/invoice/manager/{id}/disapprove
         * @secure */
        this.invoiceDisapproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/manager/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves an invoice, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name InvoiceDisapproveAsProjectApprover
         * @summary Disapproves invoice as project approver
         * @request POST:/rest/me/approvals/invoice/project-approver/{id}/disapprove
         * @secure */
        this.invoiceDisapproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/invoice/project-approver/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieve manager level leave approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name LeaveApprovalsForManager
         * @summary Retrieves manager level leave approvals
         * @request GET:/rest/me/approvals/leave-request/manager
         * @secure */
        this.leaveApprovalsForManager = (query, params = {}) => this.request({
            path: `/rest/me/approvals/leave-request/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveApprovalQueuePagedResponse);
        /**
         * @description Approves leave request as the manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name LeaveApproveAsManager
         * @summary Approve leave request as manager.
         * @request POST:/rest/me/approvals/leave-request/manager/{id}/approve
         * @secure */
        this.leaveApproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/leave-request/manager/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves leave request as the manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name LeaveDisapproveAsManager
         * @summary Disapprove leave request as manager.
         * @request POST:/rest/me/approvals/leave-request/manager/{id}/disapprove
         * @secure */
        this.leaveDisapproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/leave-request/manager/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a list of people with pending approvals for which the authenticated user is an alternate manager approver.
         *
         * @tags User Approvals
         * @name ManagerApprovalAlternates
         * @summary Retrieves primary manager approvers for an alternate.
         * @request GET:/rest/me/approvals/alternates/manager
         * @secure */
        this.managerApprovalAlternates = (query, params = {}) => this.request({
            path: `/rest/me/approvals/alternates/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApproverAlternatePagedResponse);
        /**
         * @description Retrieves a list of people with pending approvals for which the authenticated user is an alternate project approver.
         *
         * @tags User Approvals
         * @name ProjectApproverAlternates
         * @summary Retrieves primary project approvers for an alternate.
         * @request GET:/rest/me/approvals/alternates/project-approver
         * @secure */
        this.projectApproverAlternates = (query, params = {}) => this.request({
            path: `/rest/me/approvals/alternates/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApproverAlternatePagedResponse);
        /**
         * @description Retrieves a paged list of project-level timesheet approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApprovalsForCustomer
         * @summary Retrieves project-level timesheet approvals for a customer.
         * @request GET:/rest/me/approvals/time/customer
         * @secure */
        this.timeApprovalsForCustomer = (query, params = {}) => this.request({
            path: `/rest/me/approvals/time/customer`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Retrieve manager level timesheet approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApprovalsForManager
         * @summary Retrieves manager level timesheet approvals
         * @request GET:/rest/me/approvals/time/manager
         * @secure */
        this.timeApprovalsForManager = (query, params = {}) => this.request({
            path: `/rest/me/approvals/time/manager`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Retrieves manager level timesheet approval by key for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApprovalsForManagerByKey
         * @summary Retrieves manager level timesheet approval by key.
         * @request GET:/rest/me/approvals/time/manager/{id}
         * @secure */
        this.timeApprovalsForManagerByKey = (id, query, params = {}) => this.request({
            path: `/rest/me/approvals/time/manager/${id}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueueModel);
        /**
         * @description Retrieves a paged list of project-level timesheet approvals for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApprovalsForProjectApprover
         * @summary Retrieves project-level timesheet approvals for a project approver.
         * @request GET:/rest/me/approvals/time/project-approver
         * @secure */
        this.timeApprovalsForProjectApprover = (query, params = {}) => this.request({
            path: `/rest/me/approvals/time/project-approver`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TimeApprovalQueuePagedResponse);
        /**
         * @description Approves a timesheet, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApproveAsCustomer
         * @summary Approves timesheet as customer
         * @request POST:/rest/me/approvals/time/customer/{id}/approve
         * @secure */
        this.timeApproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/customer/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves a timesheet as the manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApproveAsManager
         * @summary Approves timesheet as manager.
         * @request POST:/rest/me/approvals/time/manager/{id}/approve
         * @secure */
        this.timeApproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/manager/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Approves a timesheet, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeApproveAsProjectApprover
         * @summary Approves timesheet as project approver
         * @request POST:/rest/me/approvals/time/project-approver/{id}/approve
         * @secure */
        this.timeApproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/project-approver/${id}/approve`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves a timesheet, as the customer, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeDisapproveAsCustomer
         * @summary Disapproves timesheet as customer
         * @request POST:/rest/me/approvals/time/customer/{id}/disapprove
         * @secure */
        this.timeDisapproveAsCustomer = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/customer/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves a timesheet as the manager for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeDisapproveAsManager
         * @summary Disapproves timesheet as manager
         * @request POST:/rest/me/approvals/time/manager/{id}/disapprove
         * @secure */
        this.timeDisapproveAsManager = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/manager/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Disapproves a timesheet, as the project approver, for the user referenced in the supplied auth token.
         *
         * @tags User Approvals
         * @name TimeDisapproveAsProjectApprover
         * @summary Disapproves timesheet as project approver
         * @request POST:/rest/me/approvals/time/project-approver/{id}/disapprove
         * @secure */
        this.timeDisapproveAsProjectApprover = (id, data, params = {}) => this.request({
            path: `/rest/me/approvals/time/project-approver/${id}/disapprove`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves the manager approval preview message for a timesheet.  The returned message may be null if a manager approval preview stored procedure is not defined, or the defined stored procedure returns an empty message.
         *
         * @tags User Approvals
         * @name TimeManagerApprovalMessage
         * @summary Retrieves the manager timesheet approval preview message.
         * @request GET:/rest/me/approvals/time/manager/{id}/preview-message
         * @secure */
        this.timeManagerApprovalMessage = (id, params = {}) => this.request({
            path: `/rest/me/approvals/time/manager/${id}/preview-message`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApprovalStoredProcResponseModel);
    }
}
exports.UserApprovals = UserApprovals;
