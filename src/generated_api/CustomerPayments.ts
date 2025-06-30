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
  CustomerPaymentCreateModel,
  CustomerPaymentDetailCreateModel,
  CustomerPaymentDetailModel,
  CustomerPaymentDetailPagedResponse,
  CustomerPaymentIncludedModel,
  CustomerPaymentModel,
  CustomerPaymentPagedResponse,
  CustomerPaymentSearchModel,
  DeletePaidDocumentParamsEnum,
  ErrorResponse,
  FinancialDocumentValidationModel,
  GetPaidDocumentParamsEnum,
  PaidCustomerDocumentModel,
  PaidCustomerDocumentPagedResponse,
  PayableCustomerDocumentPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CustomerPayments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve all attachments for a given customer payment.
   *
   * @tags Customer Payments
   * @name GetAttachments
   * @summary Retrieve customer payment attachments
   * @request GET:/rest/customer-payments/{id}/attachments
   * @secure */
  getAttachments = (
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
        path: `/rest/customer-payments/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Adds an attachment to a customer payment.
   *
   * @tags Customer Payments
   * @name AddAttachment
   * @summary Adds customer payment attachment
   * @request POST:/rest/customer-payments/{id}/attachments
   * @secure */
  addAttachment = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/attachments`,
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
   * @description Retrieve the paid documents of a customer payment.
   *
   * @tags Customer Payments
   * @name GetPaidDocuments
   * @summary Retrieve a list of paid documents
   * @request GET:/rest/customer-payments/{id}/paid-documents
   * @secure */
  getPaidDocuments = (
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
    this.request<PaidCustomerDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/paid-documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PaidCustomerDocumentPagedResponse,
    ) as PaidCustomerDocumentPagedResponse;

  /**
   * @description Add a paid document to a customer payment.
   *
   * @tags Customer Payments
   * @name AddPaidDocument
   * @summary Add a paid document
   * @request POST:/rest/customer-payments/{id}/paid-documents
   * @secure */
  addPaidDocument = (id: number, data: CustomerPaymentIncludedModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/paid-documents`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Create a new customer payment.
   *
   * @tags Customer Payments
   * @name Create6
   * @summary Creates customer payment
   * @request POST:/rest/customer-payments
   * @secure */
  create6 = (data: CustomerPaymentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/customer-payments`,
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
   * @description Retrieves a paged list of details for a customer payment.
   *
   * @tags Customer Payments
   * @name GetDetailsByKey
   * @summary Retrieves customer payment details
   * @request GET:/rest/customer-payments/{id}/details
   * @secure */
  getDetailsByKey = (
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
    this.request<CustomerPaymentDetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/details`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CustomerPaymentDetailPagedResponse,
    ) as CustomerPaymentDetailPagedResponse;

  /**
   * @description Creates an expense line item for a customer payment
   *
   * @tags Customer Payments
   * @name CreateDetail
   * @summary Creates a customer payment detail
   * @request POST:/rest/customer-payments/{id}/details
   * @secure */
  createDetail = (id: number, data: CustomerPaymentDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/details`,
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
   * @description Retrieves a customer payment summary by its id.
   *
   * @tags Customer Payments
   * @name GetByKey8
   * @summary Retrieves a customer payment
   * @request GET:/rest/customer-payments/{id}
   * @secure */
  getByKey8 = (id: number, params: RequestParams = {}) =>
    this.request<CustomerPaymentModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CustomerPaymentModel,
    ) as CustomerPaymentModel;

  /**
   * @description Updates a customer payment by its id.
   *
   * @tags Customer Payments
   * @name Update7
   * @summary Updates a customer payment
   * @request PUT:/rest/customer-payments/{id}
   * @secure */
  update7 = (id: number, data: CustomerPaymentModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a customer payment.
   *
   * @tags Customer Payments
   * @name Delete6
   * @summary Deletes a customer payment
   * @request DELETE:/rest/customer-payments/{id}
   * @secure */
  delete6 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a given customer payment.
   *
   * @tags Customer Payments
   * @name GetAttachment
   * @summary Retrieves customer payment attachment
   * @request GET:/rest/customer-payments/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an attachment for on given customer payment.
   *
   * @tags Customer Payments
   * @name DeleteAttachment
   * @summary Delete a customer payment attachment
   * @request DELETE:/rest/customer-payments/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a customer payment detail by id.
   *
   * @tags Customer Payments
   * @name GetDetailByKey
   * @summary Retrieve a customer payment detail item by id
   * @request GET:/rest/customer-payments/{id}/details/{detailId}
   * @secure */
  getDetailByKey = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<CustomerPaymentDetailModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/details/${detailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CustomerPaymentDetailModel,
    ) as CustomerPaymentDetailModel;

  /**
   * @description Updates a customer payment detail line by its id.
   *
   * @tags Customer Payments
   * @name UpdateDetail
   * @summary Updates a customer payment detail line
   * @request PUT:/rest/customer-payments/{id}/details/{detailId}
   * @secure */
  updateDetail = (id: number, detailId: number, data: CustomerPaymentDetailModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/details/${detailId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete the details of a customer payment by id.
   *
   * @tags Customer Payments
   * @name DeleteDetail
   * @summary Delete details of a customer payment
   * @request DELETE:/rest/customer-payments/{id}/details/{detailId}
   * @secure */
  deleteDetail = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/details/${detailId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a paid document of a customer payment by id. Type is INVOICE or PAYMENT.
   *
   * @tags Customer Payments
   * @name GetPaidDocument
   * @summary Retrieve a paid document
   * @request GET:/rest/customer-payments/{id}/paid-documents/{type}/{documentId}
   * @secure */
  getPaidDocument = (id: number, type: GetPaidDocumentParamsEnum, documentId: number, params: RequestParams = {}) =>
    this.request<PaidCustomerDocumentModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/paid-documents/${type}/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PaidCustomerDocumentModel,
    ) as PaidCustomerDocumentModel;

  /**
   * @description Remove a paid document from a customer payment. Type is INVOICE or PAYMENT.
   *
   * @tags Customer Payments
   * @name DeletePaidDocument
   * @summary Remove a paid document
   * @request DELETE:/rest/customer-payments/{id}/paid-documents/{type}/{documentId}
   * @secure */
  deletePaidDocument = (
    id: number,
    type: DeletePaidDocumentParamsEnum,
    documentId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/paid-documents/${type}/${documentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve the payable documents for a customer payment.
   *
   * @tags Customer Payments
   * @name GetPayableDocuments
   * @summary Retrieve a list of payable documents
   * @request GET:/rest/customer-payments/{id}/paid-documents/available
   * @secure */
  getPayableDocuments = (
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
    this.request<PayableCustomerDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/paid-documents/available`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PayableCustomerDocumentPagedResponse,
    ) as PayableCustomerDocumentPagedResponse;

  /**
   * @description Posts a customer payment to the general ledger.
   *
   * @tags Customer Payments
   * @name Post
   * @summary Posts customer payment
   * @request POST:/rest/customer-payments/{id}/post
   * @secure */
  post = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/customer-payments/${id}/post`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of customer payments filtered by the search criteria.
   *
   * @tags Customer Payments
   * @name Search3
   * @summary Retrieves customer payments
   * @request POST:/rest/customer-payments/search
   * @secure */
  search3 = (data: CustomerPaymentSearchModel, params: RequestParams = {}) =>
    this.request<CustomerPaymentPagedResponse, ErrorResponse>(
      {
        path: `/rest/customer-payments/search`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      CustomerPaymentPagedResponse,
    ) as CustomerPaymentPagedResponse;

  /**
   * @description Submits a customer payment.
   *
   * @tags Customer Payments
   * @name Submit
   * @summary Submits customer payment
   * @request POST:/rest/customer-payments/{id}/submit
   * @secure */
  submit = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/customer-payments/${id}/submit`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Update a paid document for a customer payment
   *
   * @tags Customer Payments
   * @name UpdatePaidDocument
   * @summary Update a paid document
   * @request PUT:/rest/customer-payments/{id}/paid-documents/{documentId}
   * @secure */
  updatePaidDocument = (
    id: number,
    documentId: number,
    data: CustomerPaymentIncludedModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/customer-payments/${id}/paid-documents/${documentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Validates a customer payment for edit.
   *
   * @tags Customer Payments
   * @name Validate
   * @summary Save validation for a customer payment
   * @request GET:/rest/customer-payments/{id}/validate
   * @secure */
  validate = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Validates a customer payment for posting to the general ledger.
   *
   * @tags Customer Payments
   * @name ValidatePost
   * @summary Post validation for a customer payment
   * @request GET:/rest/customer-payments/{id}/post/validate
   * @secure */
  validatePost = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/post/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Validates a customer payment for submit.
   *
   * @tags Customer Payments
   * @name ValidateSubmit
   * @summary Submit validation for a customer payment
   * @request GET:/rest/customer-payments/{id}/submit/validate
   * @secure */
  validateSubmit = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/customer-payments/${id}/submit/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;
}
