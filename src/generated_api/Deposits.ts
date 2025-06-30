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
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  DepositCreateModel,
  DepositDetailCreateModel,
  DepositDetailModel,
  DepositDetailPagedResponse,
  DepositPagedResponse,
  DepositSearchModel,
  DepositSummaryModel,
  DepositedDocumentModel,
  DepositedDocumentPagedResponse,
  ErrorResponse,
  FinancialDocumentValidationModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Deposits<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve a list of attachments for a given deposit.
   *
   * @tags Deposits
   * @name GetAttachments1
   * @summary Retrieve deposit attachments list
   * @request GET:/rest/deposits/{id}/attachments
   * @secure */
  getAttachments1 = (
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
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Adds an attachment to a deposit.
   *
   * @tags Deposits
   * @name AddAttachment1
   * @summary Adds deposit attachment
   * @request POST:/rest/deposits/{id}/attachments
   * @secure */
  addAttachment1 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/attachments`,
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
   * @description Retrieve a deposited document of a deposit by id.
   *
   * @tags Deposits
   * @name GetIncludedDocument
   * @summary Retrieve a deposited document
   * @request GET:/rest/deposits/{id}/deposited-documents/{documentId}
   * @secure */
  getIncludedDocument = (id: number, documentId: number, params: RequestParams = {}) =>
    this.request<DepositedDocumentModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/deposited-documents/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      DepositedDocumentModel,
    ) as DepositedDocumentModel;

  /**
   * @description Include a customer payment into the specified deposit.
   *
   * @tags Deposits
   * @name AddIncludedDocument
   * @summary Include a customer payment into a deposit
   * @request POST:/rest/deposits/{id}/deposited-documents/{documentId}
   * @secure */
  addIncludedDocument = (id: number, documentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}/deposited-documents/${documentId}`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Removes a customer payment as being included in a deposit.
   *
   * @tags Deposits
   * @name RemoveIncludedDocument
   * @summary Removes a customer payment as being included in a deposit
   * @request DELETE:/rest/deposits/{id}/deposited-documents/{documentId}
   * @secure */
  removeIncludedDocument = (id: number, documentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}/deposited-documents/${documentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Create a new deposit.
   *
   * @tags Deposits
   * @name Create8
   * @summary Creates a new deposit
   * @request POST:/rest/deposits
   * @secure */
  create8 = (data: DepositCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/deposits`,
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
   * @description Retrieves a paged list of details for a deposit.
   *
   * @tags Deposits
   * @name GetDetailsByKey1
   * @summary Retrieves deposit details
   * @request GET:/rest/deposits/{id}/details
   * @secure */
  getDetailsByKey1 = (
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
    this.request<DepositDetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/details`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DepositDetailPagedResponse,
    ) as DepositDetailPagedResponse;

  /**
   * @description Creates an expense line item for a deposit
   *
   * @tags Deposits
   * @name CreateDetail1
   * @summary Creates a deposit detail line item
   * @request POST:/rest/deposits/{id}/details
   * @secure */
  createDetail1 = (id: number, data: DepositDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/details`,
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
   * @description Retrieves a Deposit summary by its id.
   *
   * @tags Deposits
   * @name GetByKey11
   * @summary Retrieves a Deposit
   * @request GET:/rest/deposits/{id}
   * @secure */
  getByKey11 = (id: number, params: RequestParams = {}) =>
    this.request<DepositSummaryModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      DepositSummaryModel,
    ) as DepositSummaryModel;

  /**
   * @description Updates a Deposit by its id.
   *
   * @tags Deposits
   * @name Update9
   * @summary Updates a Deposit
   * @request PUT:/rest/deposits/{id}
   * @secure */
  update9 = (id: number, data: DepositSummaryModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a Deposit.
   *
   * @tags Deposits
   * @name Delete8
   * @summary Deletes a Deposit
   * @request DELETE:/rest/deposits/{id}
   * @secure */
  delete8 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a given deposit.
   *
   * @tags Deposits
   * @name GetAttachment1
   * @summary Retrieves deposit attachment
   * @request GET:/rest/deposits/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment1 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an attachment for on given deposit.
   *
   * @tags Deposits
   * @name DeleteAttachment1
   * @summary Delete a deposit attachment
   * @request DELETE:/rest/deposits/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment1 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a deposit detail line item by id
   *
   * @tags Deposits
   * @name GetDetailByKey1
   * @summary Retrieve a deposit detail line item
   * @request GET:/rest/deposits/{id}/details/{detailId}
   * @secure */
  getDetailByKey1 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<DepositDetailModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/details/${detailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      DepositDetailModel,
    ) as DepositDetailModel;

  /**
   * @description Updates a deposit detail line item by its id.
   *
   * @tags Deposits
   * @name UpdateDetail1
   * @summary Updates a deposit detail line item
   * @request PUT:/rest/deposits/{id}/details/{detailId}
   * @secure */
  updateDetail1 = (id: number, detailId: number, data: DepositDetailModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}/details/${detailId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a deposit detail line item by id.
   *
   * @tags Deposits
   * @name DeleteDetail1
   * @summary Delete a deposit detail line item
   * @request DELETE:/rest/deposits/{id}/details/{detailId}
   * @secure */
  deleteDetail1 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/deposits/${id}/details/${detailId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a list of customer payment documents available to included in a deposit.
   *
   * @tags Deposits
   * @name GetDepositableDocuments
   * @summary Retrieve a list of depositable customer payment documents
   * @request GET:/rest/deposits/{id}/deposited-documents/available
   * @secure */
  getDepositableDocuments = (
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
    this.request<DepositedDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/deposited-documents/available`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DepositedDocumentPagedResponse,
    ) as DepositedDocumentPagedResponse;

  /**
   * @description Retrieve a list of customer payment documents included in a deposit.
   *
   * @tags Deposits
   * @name GetIncludedDocuments
   * @summary Retrieve a list of deposited documents
   * @request GET:/rest/deposits/{id}/deposited-documents
   * @secure */
  getIncludedDocuments = (
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
    this.request<DepositedDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/deposited-documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DepositedDocumentPagedResponse,
    ) as DepositedDocumentPagedResponse;

  /**
   * @description Posts a deposit to the general ledger.
   *
   * @tags Deposits
   * @name Post1
   * @summary Posts deposit
   * @request POST:/rest/deposits/{id}/post
   * @secure */
  post1 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/deposits/${id}/post`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of deposits filtered by the search criteria.
   *
   * @tags Deposits
   * @name Search4
   * @summary Retrieves Deposits
   * @request POST:/rest/deposits/search
   * @secure */
  search4 = (
    data: DepositSearchModel,
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
    this.request<DepositPagedResponse, ErrorResponse>(
      {
        path: `/rest/deposits/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      DepositPagedResponse,
    ) as DepositPagedResponse;

  /**
   * @description Submits a deposit.
   *
   * @tags Deposits
   * @name Submit1
   * @summary Submits deposit
   * @request POST:/rest/deposits/{id}/submit
   * @secure */
  submit1 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/deposits/${id}/submit`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Validates a deposit for edit.
   *
   * @tags Deposits
   * @name Validate1
   * @summary Save validation for a deposit
   * @request GET:/rest/deposits/{id}/validate
   * @secure */
  validate1 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Validates a deposit for posting to the general ledger.
   *
   * @tags Deposits
   * @name ValidatePost1
   * @summary Post validation for a deposit
   * @request GET:/rest/deposits/{id}/post/validate
   * @secure */
  validatePost1 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/post/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Validates a deposit for submit.
   *
   * @tags Deposits
   * @name ValidateSubmit1
   * @summary Submit validation for a deposit
   * @request GET:/rest/deposits/{id}/submit/validate
   * @secure */
  validateSubmit1 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/deposits/${id}/submit/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;
}
