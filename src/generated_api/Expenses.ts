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
  ExpenseExtractModel,
  ExpenseModel,
  ExpensePagedResponse,
  ExpenseProjectPagedResponse,
  ExpenseSearchModel,
  ExpenseStatusHistoryPagedResponse,
  ExpenseSubmitModel,
  ExpenseTypePagedResponse,
  ExpenseUpdateModel,
  ExpenseValidationModel,
  GetProjectsByOwnerKeyParamsVoucherTypeEnum,
  KeysModel,
  PaymentMethodPagedResponse,
  ProjectTypePagedResponse,
  VatLocationCreateModel,
  VatLocationModel,
  VatLocationPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Expenses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of attachments for a given expense.
   *
   * @tags Expenses
   * @name GetAttachments2
   * @summary Retrieves expense attachments
   * @request GET:/rest/expenses/{id}/attachments
   * @secure */
  getAttachments2 = (
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
        path: `/rest/expenses/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseDetailAttachmentListPagedResponse,
    ) as ExpenseDetailAttachmentListPagedResponse;

  /**
   * @description Uploads an attachment to an expense and optionally associates it with a specific expense detail.
   *
   * @tags Expenses
   * @name AddAttachment2
   * @summary Uploads attachment to expense
   * @request POST:/rest/expenses/{id}/attachments
   * @secure */
  addAttachment2 = (
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
        path: `/rest/expenses/${id}/attachments`,
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
   * @description Associates existing attachments with an expense detail.
   *
   * @tags Expenses
   * @name AssociateAttachmentsToDetail
   * @summary Associate existing attachments with an expense detail
   * @request POST:/rest/expenses/{id}/details/{detailId}/attachments
   * @secure */
  associateAttachmentsToDetail = (id: number, detailId: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/details/${detailId}/attachments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Creates a new expense
   *
   * @tags Expenses
   * @name Create11
   * @summary Creates an expense
   * @request POST:/rest/expenses
   * @secure */
  create11 = (
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
        path: `/rest/expenses`,
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
   * @description Creates an expense detail for provided expense ID.
   *
   * @tags Expenses
   * @name CreateDetail2
   * @summary Creates an expense detail
   * @request POST:/rest/expenses/{id}/details
   * @secure */
  createDetail2 = (id: number, data: ExpenseDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/details`,
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
   * @description Retrieves a list of Value-Added Tax locations.
   *
   * @tags Expenses
   * @name GetVatLocations
   * @summary Retrieves VAT locations
   * @request GET:/rest/expenses/vat-locations
   * @secure */
  getVatLocations = (
    query?: {
      /** @default true */
      activeOnly?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<VatLocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/vat-locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VatLocationPagedResponse,
    ) as VatLocationPagedResponse;

  /**
   * @description Creates a new Value-Added Tax location.
   *
   * @tags Expenses
   * @name CreateVatLocation
   * @summary Create VAT location
   * @request POST:/rest/expenses/vat-locations
   * @secure */
  createVatLocation = (data: VatLocationCreateModel, params: RequestParams = {}) =>
    this.request<VatLocationCreateModel, ErrorResponse>(
      {
        path: `/rest/expenses/vat-locations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      VatLocationCreateModel,
    ) as VatLocationCreateModel;

  /**
   * @description Retrieves details of an expense by its id.
   *
   * @tags Expenses
   * @name GetByKey13
   * @summary Retrieves an expense
   * @request GET:/rest/expenses/{id}
   * @secure */
  getByKey13 = (id: number, params: RequestParams = {}) =>
    this.request<ExpenseModel, ErrorResponse>(
      {
        path: `/rest/expenses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseModel,
    ) as ExpenseModel;

  /**
   * @description Updates an existing expense given its key.
   *
   * @tags Expenses
   * @name Update12
   * @summary Updates an expense
   * @request PUT:/rest/expenses/{id}
   * @secure */
  update12 = (id: number, data: ExpenseUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes an expense given its key.
   *
   * @tags Expenses
   * @name Delete11
   * @summary Deletes an expense
   * @request DELETE:/rest/expenses/{id}
   * @secure */
  delete11 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a given expense
   *
   * @tags Expenses
   * @name GetAttachment2
   * @summary Retrieves expense attachment
   * @request GET:/rest/expenses/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment2 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Deletes an expense attachment and its associations.
   *
   * @tags Expenses
   * @name DeleteAttachment2
   * @summary Deletes expense attachment
   * @request DELETE:/rest/expenses/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment2 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an expense detail given it's expense ID and expense detail ID
   *
   * @tags Expenses
   * @name FindByDetailKey
   * @summary Retrieves an expense detail
   * @request GET:/rest/expenses/{id}/details/{detailId}
   * @secure */
  findByDetailKey = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<ExpenseDetailModel, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/details/${detailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseDetailModel,
    ) as ExpenseDetailModel;

  /**
   * @description Updates an expense detail given its expense ID and expense detail ID.
   *
   * @tags Expenses
   * @name UpdateDetail2
   * @summary Updates an expense detail
   * @request PUT:/rest/expenses/{id}/details/{detailId}
   * @secure */
  updateDetail2 = (id: number, detailId: number, data: ExpenseDetailModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/details/${detailId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an expense detail given its expense ID and expense detail ID.
   *
   * @tags Expenses
   * @name DeleteDetail2
   * @summary Deletes an expense detail
   * @request DELETE:/rest/expenses/{id}/details/{detailId}
   * @secure */
  deleteDetail2 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/details/${detailId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a Value-Added Tax location by ID.
   *
   * @tags Expenses
   * @name GetVatLocation
   * @summary Retrieves VAT location
   * @request GET:/rest/expenses/vat-locations/{id}
   * @secure */
  getVatLocation = (id: number, params: RequestParams = {}) =>
    this.request<VatLocationModel, ErrorResponse>(
      {
        path: `/rest/expenses/vat-locations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VatLocationModel,
    ) as VatLocationModel;

  /**
   * @description Update an existing Value-Added Tax location by id.
   *
   * @tags Expenses
   * @name UpdateVatLocation
   * @summary Update VAT location
   * @request PUT:/rest/expenses/vat-locations/{id}
   * @secure */
  updateVatLocation = (id: number, data: VatLocationModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/vat-locations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing Value-Added Tax location by id.
   *
   * @tags Expenses
   * @name DeleteVatLocation
   * @summary Delete VAT location
   * @request DELETE:/rest/expenses/vat-locations/{id}
   * @secure */
  deleteVatLocation = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/vat-locations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Extracts an INUSE expense report, skipping approval workflows.
   *
   * @tags Expenses
   * @name Extract
   * @summary Extracts an expense report
   * @request POST:/rest/expenses/{id}/extract
   * @secure */
  extract = (id: number, data: ExpenseExtractModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/extract`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of expense types available for an expense
   *
   * @tags Expenses
   * @name GetExpenseTypes
   * @summary Retrieves expense types
   * @request GET:/rest/expenses/{id}/expense-types
   * @secure */
  getExpenseTypes = (
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
    this.request<ExpenseTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/expense-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseTypePagedResponse,
    ) as ExpenseTypePagedResponse;

  /**
   * @description Retrieve Meal Caps for an expense
   *
   * @tags Expenses
   * @name GetMealsCap
   * @summary Retrieve Meals Caps
   * @request GET:/rest/expenses/{id}/meal-caps
   * @secure */
  getMealsCap = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/meal-caps`,
      method: "GET",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of payment methods available for an expense
   *
   * @tags Expenses
   * @name GetPaymentMethods
   * @summary Retrieves expense payment methods
   * @request GET:/rest/expenses/{id}/payment-methods
   * @secure */
  getPaymentMethods = (
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
    this.request<PaymentMethodPagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/payment-methods`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PaymentMethodPagedResponse,
    ) as PaymentMethodPagedResponse;

  /**
   * @description Retrieves a paged list of project types available for an expense
   *
   * @tags Expenses
   * @name GetProjectTypes
   * @summary Retrieves expense project types
   * @request GET:/rest/expenses/{id}/project-types
   * @secure */
  getProjectTypes = (
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
    this.request<ProjectTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/project-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypePagedResponse,
    ) as ProjectTypePagedResponse;

  /**
   * @description Retrieves a paged list of projects available for a specific expense
   *
   * @tags Expenses
   * @name GetProjectsByExpenseReportKey
   * @summary Retrieves expense projects
   * @request GET:/rest/expenses/{id}/projects
   * @secure */
  getProjectsByExpenseReportKey = (
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
    this.request<ExpenseProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseProjectPagedResponse,
    ) as ExpenseProjectPagedResponse;

  /**
   * @description Retrieves a paged list of projects available for all expenses associated with either an optionally specified ownerKey or the authenticated user.
   *
   * @tags Expenses
   * @name GetProjectsByOwnerKey
   * @summary Retrieves expense projects by owner
   * @request GET:/rest/expenses/projects
   * @secure */
  getProjectsByOwnerKey = (
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
       * Optional expense owner ID, defaults to the authenticated user.
       * @format int64
       * @min 1
       * @example 1
       */
      ownerKey?: number;
      /**
       * Optional voucher type to distinguish between projects for expense reports or expense requests, defaults to expense reports.
       * @default "EXPENSE_REPORT"
       */
      voucherType?: GetProjectsByOwnerKeyParamsVoucherTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseProjectPagedResponse,
    ) as ExpenseProjectPagedResponse;

  /**
   * @description Retrieves a paged list of status history for a given expense.
   *
   * @tags Expenses
   * @name GetStatusHistory
   * @summary Retrieves expense status history
   * @request GET:/rest/expenses/{id}/history
   * @secure */
  getStatusHistory = (
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
        path: `/rest/expenses/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseStatusHistoryPagedResponse,
    ) as ExpenseStatusHistoryPagedResponse;

  /**
   * @description Delete an attachment association from an expense detail.
   *
   * @tags Expenses
   * @name RemoveAttachmentAssociationFromDetail
   * @summary Delete an attachment association from an expense detail
   * @request DELETE:/rest/expenses/{id}/details/{detailId}/attachments/{attachmentId}
   * @secure */
  removeAttachmentAssociationFromDetail = (
    id: number,
    detailId: number,
    attachmentId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/details/${detailId}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of expenses filtered by optional search criteria.
   *
   * @tags Expenses
   * @name Search6
   * @summary Retrieves expenses.
   * @request POST:/rest/expenses/search
   * @secure */
  search6 = (
    data: ExpenseSearchModel,
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
    this.request<ExpensePagedResponse, ErrorResponse>(
      {
        path: `/rest/expenses/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ExpensePagedResponse,
    ) as ExpensePagedResponse;

  /**
   * @description Submits an expense for approval.
   *
   * @tags Expenses
   * @name Submit2
   * @summary Submits an expense
   * @request POST:/rest/expenses/{id}/submit
   * @secure */
  submit2 = (id: number, data: ExpenseSubmitModel, params: RequestParams = {}) =>
    this.request<void, ExpenseValidationModel | ErrorResponse>({
      path: `/rest/expenses/${id}/submit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Updates a collection of expense details for a given expense id.
   *
   * @tags Expenses
   * @name UpdateDetails
   * @summary Updates a collection of expense details
   * @request PUT:/rest/expenses/{id}/details/bulk
   * @secure */
  updateDetails = (id: number, data: ExpenseDetailModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/expenses/${id}/details/bulk`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Validates an expense for either a save or submit.
   *
   * @tags Expenses
   * @name Validate2
   * @summary Validates an expense
   * @request GET:/rest/expenses/{id}/validate
   * @secure */
  validate2 = (
    id: number,
    query?: {
      /** Set 'true' for validating for submission. Set 'false' for validating for save. */
      submitValidation?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseValidationModel, ErrorResponse>(
      {
        path: `/rest/expenses/${id}/validate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseValidationModel,
    ) as ExpenseValidationModel;
}
