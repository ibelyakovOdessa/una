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

import {
  ApprovalStoredProcResponseModel,
  ApproveModel,
  ApproverAlternatePagedResponse,
  ErrorResponse,
  ExpenseApprovalQueueModel,
  ExpenseApprovalQueuePagedResponse,
  InvoiceApprovalQueuePagedResponse,
  LeaveApprovalQueuePagedResponse,
  LeaveApproveModel,
  TimeApprovalQueueModel,
  TimeApprovalQueuePagedResponse,
  TimeDisapproveModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserApprovals<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of project-level expense approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name ExpenseApprovalsForCustomer
   * @summary Retrieves project-level expense approvals for a customer.
   * @request GET:/rest/me/approvals/expense/customer
   * @secure */
  expenseApprovalsForCustomer = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If true, returns expense request approvals instead of expense report approvals.
       * @default false
       */
      requests?: boolean;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/expense/customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of manager level expense approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name ExpenseApprovalsForManager
   * @summary Retrieves manager level expense approvals.
   * @request GET:/rest/me/approvals/expense/manager
   * @secure */
  expenseApprovalsForManager = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If true, returns expense request approvals instead of expense report approvals.
       * @default false
       */
      requests?: boolean;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/expense/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a manager level expense approval by key for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name ExpenseApprovalsForManagerByKey
   * @summary Retrieves manager level expense approval
   * @request GET:/rest/me/approvals/expense/manager/{id}
   * @secure */
  expenseApprovalsForManagerByKey = (
    id: number,
    query?: {
      /** If true, returns expense request approvals instead of expense report approvals. */
      requests?: boolean;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseApprovalQueueModel, ErrorResponse>(
      {
        path: `/rest/me/approvals/expense/manager/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueueModel,
    ) as ExpenseApprovalQueueModel;

  /**
   * @description Retrieves a paged list of project-level expense approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name ExpenseApprovalsForProjectApprover
   * @summary Retrieves project-level expense approvals for a project approver.
   * @request GET:/rest/me/approvals/expense/project-approver
   * @secure */
  expenseApprovalsForProjectApprover = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If true, returns expense request approvals instead of expense report approvals.
       * @default false
       */
      requests?: boolean;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/expense/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Approves an expense, as the customer, for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name ExpenseApproveAsCustomer
   * @summary Approves expense as customer
   * @request POST:/rest/me/approvals/expense/customer/{id}/approve
   * @secure */
  expenseApproveAsCustomer = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/customer/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseApproveAsManager = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/manager/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseApproveAsProjectApprover = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/project-approver/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseDisapproveAsCustomer = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/customer/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseDisapproveAsManager = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/manager/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseDisapproveAsProjectApprover = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/expense/project-approver/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceApprovalsForCustomer = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<InvoiceApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/invoice/customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceApprovalQueuePagedResponse,
    ) as InvoiceApprovalQueuePagedResponse;

  /**
   * @description Retrieves a manager level customer invoice approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name InvoiceApprovalsForManager
   * @summary Retrieves manager level invoice approvals
   * @request GET:/rest/me/approvals/invoice/manager
   * @secure */
  invoiceApprovalsForManager = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<InvoiceApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/invoice/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceApprovalQueuePagedResponse,
    ) as InvoiceApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of project-level invoice approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name InvoiceApprovalsForProjectApprover
   * @summary Retrieves project-level invoice approvals for a project approver.
   * @request GET:/rest/me/approvals/invoice/project-approver
   * @secure */
  invoiceApprovalsForProjectApprover = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<InvoiceApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/invoice/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceApprovalQueuePagedResponse,
    ) as InvoiceApprovalQueuePagedResponse;

  /**
   * @description Approves an invoice, as the customer, for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name InvoiceApproveAsCustomer
   * @summary Approves invoice as customer
   * @request POST:/rest/me/approvals/invoice/customer/{id}/approve
   * @secure */
  invoiceApproveAsCustomer = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/customer/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceApproveAsManager = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/manager/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceApproveAsProjectApprover = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/project-approver/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceDisapproveAsCustomer = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/customer/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceDisapproveAsManager = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/manager/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceDisapproveAsProjectApprover = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/invoice/project-approver/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  leaveApprovalsForManager = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LeaveApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/leave-request/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveApprovalQueuePagedResponse,
    ) as LeaveApprovalQueuePagedResponse;

  /**
   * @description Approves leave request as the manager for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name LeaveApproveAsManager
   * @summary Approve leave request as manager.
   * @request POST:/rest/me/approvals/leave-request/manager/{id}/approve
   * @secure */
  leaveApproveAsManager = (id: number, data: LeaveApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/leave-request/manager/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  leaveDisapproveAsManager = (id: number, data: LeaveApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/leave-request/manager/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  managerApprovalAlternates = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApproverAlternatePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/alternates/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ApproverAlternatePagedResponse,
    ) as ApproverAlternatePagedResponse;

  /**
   * @description Retrieves a list of people with pending approvals for which the authenticated user is an alternate project approver.
   *
   * @tags User Approvals
   * @name ProjectApproverAlternates
   * @summary Retrieves primary project approvers for an alternate.
   * @request GET:/rest/me/approvals/alternates/project-approver
   * @secure */
  projectApproverAlternates = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApproverAlternatePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/alternates/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ApproverAlternatePagedResponse,
    ) as ApproverAlternatePagedResponse;

  /**
   * @description Retrieves a paged list of project-level timesheet approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name TimeApprovalsForCustomer
   * @summary Retrieves project-level timesheet approvals for a customer.
   * @request GET:/rest/me/approvals/time/customer
   * @secure */
  timeApprovalsForCustomer = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/time/customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Retrieve manager level timesheet approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name TimeApprovalsForManager
   * @summary Retrieves manager level timesheet approvals
   * @request GET:/rest/me/approvals/time/manager
   * @secure */
  timeApprovalsForManager = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/time/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Retrieves manager level timesheet approval by key for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name TimeApprovalsForManagerByKey
   * @summary Retrieves manager level timesheet approval by key.
   * @request GET:/rest/me/approvals/time/manager/{id}
   * @secure */
  timeApprovalsForManagerByKey = (
    id: number,
    query?: {
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeApprovalQueueModel, ErrorResponse>(
      {
        path: `/rest/me/approvals/time/manager/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueueModel,
    ) as TimeApprovalQueueModel;

  /**
   * @description Retrieves a paged list of project-level timesheet approvals for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name TimeApprovalsForProjectApprover
   * @summary Retrieves project-level timesheet approvals for a project approver.
   * @request GET:/rest/me/approvals/time/project-approver
   * @secure */
  timeApprovalsForProjectApprover = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      /**
       * If user referenced in the supplied auth token is approving for someone else (i.e., acting as an alternate), the unique id of the user the approval is being done for.
       * @format int64
       * @min 1
       * @example 1
       */
      alternateKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/approvals/time/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Approves a timesheet, as the customer, for the user referenced in the supplied auth token.
   *
   * @tags User Approvals
   * @name TimeApproveAsCustomer
   * @summary Approves timesheet as customer
   * @request POST:/rest/me/approvals/time/customer/{id}/approve
   * @secure */
  timeApproveAsCustomer = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/customer/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeApproveAsManager = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/manager/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeApproveAsProjectApprover = (id: number, data: ApproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/project-approver/${id}/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeDisapproveAsCustomer = (id: number, data: TimeDisapproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/customer/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeDisapproveAsManager = (id: number, data: TimeDisapproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/manager/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeDisapproveAsProjectApprover = (id: number, data: TimeDisapproveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/approvals/time/project-approver/${id}/disapprove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timeManagerApprovalMessage = (id: number, params: RequestParams = {}) =>
    this.request<ApprovalStoredProcResponseModel, ErrorResponse>(
      {
        path: `/rest/me/approvals/time/manager/${id}/preview-message`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ApprovalStoredProcResponseModel,
    ) as ApprovalStoredProcResponseModel;
}
