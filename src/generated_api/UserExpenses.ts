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
  AttachmentCreateModel,
  AttachmentModel,
  CreatedResponseModel,
  ErrorResponse,
  ExpenseCreateModel,
  ExpenseDetailAttachmentListPagedResponse,
  ExpenseDetailCreateModel,
  ExpenseDetailModel,
  ExpenseMealsCapModel,
  ExpenseModel,
  ExpensePagedResponse,
  ExpenseRequestModel,
  ExpenseRequestPagedResponse,
  ExpenseStatusHistoryPagedResponse,
  ExpenseSubmitModel,
  ExpenseUpdateModel,
  ExpenseValidationModel,
  ImportedExpenseIncludeModel,
  ImportedExpensePagedResponseModel,
  ImportedExpenseSearchModel,
  MeExpenseParamsStatusEnum,
  MeExpenseParamsVoucherTypeEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserExpenses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of attachments for an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name GetAttachments5
   * @summary Retrieves expense attachments
   * @request GET:/rest/me/expenses/{id}/attachments
   * @secure */
  getAttachments5 = (
    id: number,
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
    this.request<ExpenseDetailAttachmentListPagedResponse, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseDetailAttachmentListPagedResponse,
    ) as ExpenseDetailAttachmentListPagedResponse;

  /**
   * @description Adds an attachment to an expense owned by the authenticated user or a user for which they are an expense alternate. Optionally associate the attachment with an expense detail item.
   *
   * @tags User Expenses
   * @name AddAttachment4
   * @summary Adds expense attachment
   * @request POST:/rest/me/expenses/{id}/attachments
   * @secure */
  addAttachment4 = (
    id: number,
    data: AttachmentCreateModel,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      detailId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/attachments`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a paged list of expenses owned by the authenticated user, or optionally owned by a user for which they are an expense alternate. Filter the results by optional list of expense statuses and/or a voucher type.
   *
   * @tags User Expenses
   * @name MeExpense
   * @summary Retrieves expenses
   * @request GET:/rest/me/expenses
   * @secure */
  meExpense = (
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
      status?: MeExpenseParamsStatusEnum[];
      /**
       * Owner ID to override default of authenticated user.
       * @format int64
       * @min 1
       * @example 1
       */
      ownerKey?: number;
      voucherType?: MeExpenseParamsVoucherTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpensePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpensePagedResponse,
    ) as ExpensePagedResponse;

  /**
   * @description Creates an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name Create19
   * @summary Creates an expense
   * @request POST:/rest/me/expenses
   * @secure */
  create19 = (
    data: ExpenseCreateModel,
    query?: {
      /**
       * Owner ID to override default of authenticated user.
       * @format int64
       * @min 1
       * @example 1
       */
      ownerKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/expenses`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Creates an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name CreateDetail3
   * @summary Creates an expense detail
   * @request POST:/rest/me/expenses/{id}/details
   * @secure */
  createDetail3 = (id: number, data: ExpenseDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/details`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves the details of an expense owned by the authenticated user or a user for which they are a expense alternate.
   *
   * @tags User Expenses
   * @name GetByKey21
   * @summary Retrieves an expense
   * @request GET:/rest/me/expenses/{id}
   * @secure */
  getByKey21 = (id: number, params: RequestParams = {}) =>
    this.request<ExpenseModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseModel,
    ) as ExpenseModel;

  /**
   * @description Updates an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name Update17
   * @summary Updates an expense
   * @request PUT:/rest/me/expenses/{id}
   * @secure */
  update17 = (id: number, data: ExpenseUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/expenses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete16 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachment5 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an expense attachment and its associations from an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name DeleteAttachment4
   * @summary Deletes expense attachment
   * @request DELETE:/rest/me/expenses/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment4 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  findByDetailKey1 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<ExpenseDetailModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/details/${detailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseDetailModel,
    ) as ExpenseDetailModel;

  /**
   * @description Updates an expense detail for an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name UpdateDetail3
   * @summary Updates an expense detail
   * @request PUT:/rest/me/expenses/{id}/details/{detailId}
   * @secure */
  updateDetail3 = (id: number, detailId: number, data: ExpenseDetailModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/expenses/${id}/details/${detailId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteDetail3 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getApprovedRequestByKey = (id: number, params: RequestParams = {}) =>
    this.request<ExpenseRequestModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/approved-requests/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseRequestModel,
    ) as ExpenseRequestModel;

  /**
   * @description Retrieves a list of imported expenses for the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name GetImportedExpenses
   * @summary Retrieves user imported expenses
   * @request POST:/rest/me/expenses/imported/search
   * @secure */
  getImportedExpenses = (
    data: ImportedExpenseSearchModel,
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
    this.request<ImportedExpensePagedResponseModel[], ErrorResponse>(
      {
        path: `/rest/me/expenses/imported/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ImportedExpensePagedResponseModel,
    ) as ImportedExpensePagedResponseModel;

  /**
   * @description Retrieves meal caps for an expense
   *
   * @tags User Expenses
   * @name GetMealCaps
   * @summary Retries Meal Caps
   * @request GET:/rest/me/expenses/{id}/meal-caps
   * @secure */
  getMealCaps = (id: number, params: RequestParams = {}) =>
    this.request<ExpenseMealsCapModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/meal-caps`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseMealsCapModel,
    ) as ExpenseMealsCapModel;

  /**
   * @description Retrieves a paged list of status history for a given expense owned by the authenticated user or a user for which they are an expense alternate
   *
   * @tags User Expenses
   * @name GetStatusHistory3
   * @summary Retrieves expense status history
   * @request GET:/rest/me/expenses/{id}/history
   * @secure */
  getStatusHistory3 = (
    id: number,
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
    this.request<ExpenseStatusHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseStatusHistoryPagedResponse,
    ) as ExpenseStatusHistoryPagedResponse;

  /**
   * @description Save an imported credit card expense to an expense report owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name IncludeImportedExpense
   * @summary Save an imported credit card expense to an expense report
   * @request POST:/rest/me/expenses/{id}/imported
   * @secure */
  includeImportedExpense = (
    id: number,
    data: ImportedExpenseIncludeModel,
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
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/imported`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a paged list of approved expense requests owned by the authenticated user, or optionally owned by a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name MeApprovedRequests
   * @summary Retrieves approved expense requests
   * @request GET:/rest/me/expenses/approved-requests
   * @secure */
  meApprovedRequests = (
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
       * Owner ID to override default of authenticated user.
       * @format int64
       * @min 1
       * @example 1
       */
      ownerKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseRequestPagedResponse, ErrorResponse>(
      {
        path: `/rest/me/expenses/approved-requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseRequestPagedResponse,
    ) as ExpenseRequestPagedResponse;

  /**
   * @description Submits for approval an expense owned by the authenticated user or a user for which they are an expense alternate.
   *
   * @tags User Expenses
   * @name Submit5
   * @summary Submits an expense
   * @request POST:/rest/me/expenses/{id}/submit
   * @secure */
  submit5 = (id: number, data: ExpenseSubmitModel, params: RequestParams = {}) =>
    this.request<void, ExpenseValidationModel | ErrorResponse>({
      path: `/rest/me/expenses/${id}/submit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  updateDetails1 = (id: number, data: ExpenseDetailModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/expenses/${id}/details/bulk`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  validate3 = (
    id: number,
    query?: {
      /** Set 'true' for validating for submission. Set 'false' for validating for save. */
      submitValidation?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseValidationModel, ErrorResponse>(
      {
        path: `/rest/me/expenses/${id}/validate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseValidationModel,
    ) as ExpenseValidationModel;
}
