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
  ErrorResponse,
  ExpenseApprovalQueuePagedResponse,
  ReviewModel,
  TimeApprovalQueuePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserReviews<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Completes the review of a customer expense report approval performed on behalf of the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name ExpenseReportReviewAsCustomer
   * @summary Review a customer expense report approval.
   * @request POST:/rest/me/reviews/expense/customer/{expenseReportId}
   * @secure */
  expenseReportReviewAsCustomer = (expenseReportId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/expense/customer/${expenseReportId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseReportReviewAsManager = (expenseReportId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/expense/manager/${expenseReportId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseReportReviewAsOwner = (expenseReportId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/expense/${expenseReportId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  expenseReportReviewAsProjectApprover = (expenseReportId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/expense/project-approver/${expenseReportId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getExpenseApprovalReviewsForCustomer = (
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
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/expense/customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of expense approval reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetExpenseApprovalReviewsForManager
   * @summary Retrieves expense approval reviews for a manager.
   * @request GET:/rest/me/reviews/expense/manager
   * @secure */
  getExpenseApprovalReviewsForManager = (
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
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/expense/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of project-level expense approval reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetExpenseApprovalReviewsForProjectApprover
   * @summary Retrieves project-level expense approval reviews for a project approver.
   * @request GET:/rest/me/reviews/expense/project-approver
   * @secure */
  getExpenseApprovalReviewsForProjectApprover = (
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
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/expense/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of expense submission reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetExpenseReviewsForOwner
   * @summary Retrieves expense submission reviews for an expense owner.
   * @request GET:/rest/me/reviews/expense
   * @secure */
  getExpenseReviewsForOwner = (
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
    this.request<ExpenseApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/expense`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseApprovalQueuePagedResponse,
    ) as ExpenseApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of project-level time approval reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetTimesheetApprovalReviewsForCustomer
   * @summary Retrieves project-level time approval reviews for a customer.
   * @request GET:/rest/me/reviews/time/customer
   * @secure */
  getTimesheetApprovalReviewsForCustomer = (
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
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/time/customer`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of time approval reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetTimesheetApprovalReviewsForManager
   * @summary Retrieves time approval reviews for a manager.
   * @request GET:/rest/me/reviews/time/manager
   * @secure */
  getTimesheetApprovalReviewsForManager = (
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
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/time/manager`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of project-level time approval reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetTimesheetApprovalReviewsForProjectApprover
   * @summary Retrieves project-level time approval reviews for a project approver.
   * @request GET:/rest/me/reviews/time/project-approver
   * @secure */
  getTimesheetApprovalReviewsForProjectApprover = (
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
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/time/project-approver`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Retrieves a paged list of time submission reviews for the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name GetTimesheetReviewsForOwner
   * @summary Retrieves time submission reviews for a time user.
   * @request GET:/rest/me/reviews/time
   * @secure */
  getTimesheetReviewsForOwner = (
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
    this.request<TimeApprovalQueuePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/reviews/time`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeApprovalQueuePagedResponse,
    ) as TimeApprovalQueuePagedResponse;

  /**
   * @description Completes the review of a customer invoice approval performed on behlaf of the user referenced in the supplied auth token.
   *
   * @tags User Reviews
   * @name InvoiceReviewAsCustomer
   * @summary Review a customer invoice approval.
   * @request POST:/rest/me/reviews/invoice/customer/{id}
   * @secure */
  invoiceReviewAsCustomer = (id: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/invoice/customer/${id}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceReviewAsManager = (id: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/invoice/manager/${id}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  invoiceReviewAsProjectApprover = (id: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/invoice/project-approver/${id}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timesheetReviewAsCustomer = (timesheetId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/time/customer/${timesheetId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timesheetReviewAsManager = (timesheetId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/time/manager/${timesheetId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timesheetReviewAsOwner = (timesheetId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/time/${timesheetId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  timesheetReviewAsProjectApprover = (timesheetId: number, data: ReviewModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/reviews/time/project-approver/${timesheetId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
