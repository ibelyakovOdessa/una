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
  ErrorResponse,
  FinancialDocumentValidationModel,
  PaidVendorDocumentModel,
  PaidVendorDocumentPagedResponse,
  PayableVendorDocumentPagedResponse,
  VendorPaymentCreateModel,
  VendorPaymentDetailCreateModel,
  VendorPaymentDetailModel,
  VendorPaymentDetailPagedResponse,
  VendorPaymentDetailUpdateModel,
  VendorPaymentIncludedModel,
  VendorPaymentModel,
  VendorPaymentPagedResponse,
  VendorPaymentSearchModel,
  VendorPaymentVoidModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VendorPayments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves details of a vendor payment.
   *
   * @tags Vendor Payments
   * @name GetVendorPaymentDetails
   * @summary Retrieves vendor payment details
   * @request GET:/rest/vendor-payments/{id}/details
   * @secure */
  getVendorPaymentDetails = (id: number, params: RequestParams = {}) =>
    this.request<VendorPaymentDetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorPaymentDetailPagedResponse,
    );

  /**
   * @description Creates an expense line item for a vendor payment
   *
   * @tags Vendor Payments
   * @name Create44
   * @summary Creates a vendor payment detail
   * @request POST:/rest/vendor-payments/{id}/details
   * @secure */
  create44 = (id: number, data: VendorPaymentDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/details`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves details of a vendor payment by id.
   *
   * @tags Vendor Payments
   * @name GetVendorPaymentDetail
   * @summary Retrieve details of a vendor payment
   * @request GET:/rest/vendor-payments/{id}/details/{detailId}
   * @secure */
  getVendorPaymentDetail = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<VendorPaymentDetailModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/details/${detailId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorPaymentDetailModel,
    );

  /**
   * @description Updates a vendor payment detail line by its id.
   *
   * @tags Vendor Payments
   * @name Update43
   * @summary Updates a vendor payment detail line
   * @request PUT:/rest/vendor-payments/{id}/details/{detailId}
   * @secure */
  update43 = (id: number, detailId: number, data: VendorPaymentDetailUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/details/${detailId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete the details of a vendor payment by id.
   *
   * @tags Vendor Payments
   * @name Delete39
   * @summary Delete details of a vendor payment
   * @request DELETE:/rest/vendor-payments/{id}/details/{detailId}
   * @secure */
  delete39 = (id: number, detailId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/details/${detailId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve attachments list for a given vendor payment.
   *
   * @tags Vendor Payments
   * @name GetAttachments10
   * @summary Retrieve vendor payment attachments
   * @request GET:/rest/vendor-payments/{id}/attachments
   * @secure */
  getAttachments10 = (
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
        path: `/rest/vendor-payments/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    );

  /**
   * @description Adds attachment to a vendor payment.
   *
   * @tags Vendor Payments
   * @name AddAttachment13
   * @summary Adds vendor payment attachment
   * @request POST:/rest/vendor-payments/{id}/attachments
   * @secure */
  addAttachment13 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieve the paid documents of a vendor payment.
   *
   * @tags Vendor Payments
   * @name GetPaidDocuments1
   * @summary Retrieve a list of paid documents
   * @request GET:/rest/vendor-payments/{id}/paid-documents
   * @secure */
  getPaidDocuments1 = (
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
    this.request<PaidVendorDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/paid-documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PaidVendorDocumentPagedResponse,
    );

  /**
   * @description Add a paid document to a vendor payment.
   *
   * @tags Vendor Payments
   * @name AddPaidDocument1
   * @summary Add a paid document
   * @request POST:/rest/vendor-payments/{id}/paid-documents
   * @secure */
  addPaidDocument1 = (id: number, data: VendorPaymentIncludedModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/paid-documents`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Create a new vendor payment.
   *
   * @tags Vendor Payments
   * @name Create45
   * @summary Creates vendor payment
   * @request POST:/rest/vendor-payments
   * @secure */
  create45 = (data: VendorPaymentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves details of a vendor payment.
   *
   * @tags Vendor Payments
   * @name GetByKey41
   * @summary Retrieves a vendor payment
   * @request GET:/rest/vendor-payments/{id}
   * @secure */
  getByKey41 = (id: number, params: RequestParams = {}) =>
    this.request<VendorPaymentModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorPaymentModel,
    );

  /**
   * @description Updates a vendor payment by its id.
   *
   * @tags Vendor Payments
   * @name Update44
   * @summary Updates a vendor payment
   * @request PUT:/rest/vendor-payments/{id}
   * @secure */
  update44 = (id: number, data: VendorPaymentModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a vendor payment.
   *
   * @tags Vendor Payments
   * @name Delete40
   * @summary Deletes a vendor payment
   * @request DELETE:/rest/vendor-payments/{id}
   * @secure */
  delete40 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a given vendor payment.
   *
   * @tags Vendor Payments
   * @name GetAttachment14
   * @summary Retrieves vendor payment attachment
   * @request GET:/rest/vendor-payments/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment14 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Delete an attachment for on given vendor payment.
   *
   * @tags Vendor Payments
   * @name DeleteAttachment13
   * @summary Delete a vendor payment attachment
   * @request DELETE:/rest/vendor-payments/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment13 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a paid document of a vendor payment by id.
   *
   * @tags Vendor Payments
   * @name GetPaidDocument1
   * @summary Retrieve a paid document
   * @request GET:/rest/vendor-payments/{id}/paid-documents/{documentId}
   * @secure */
  getPaidDocument1 = (id: number, documentId: number, params: RequestParams = {}) =>
    this.request<PaidVendorDocumentModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/paid-documents/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PaidVendorDocumentModel,
    );

  /**
   * @description Update a paid document for a vendor payment
   *
   * @tags Vendor Payments
   * @name UpdatePaidDocument1
   * @summary Update a paid document
   * @request PUT:/rest/vendor-payments/{id}/paid-documents/{documentId}
   * @secure */
  updatePaidDocument1 = (
    id: number,
    documentId: number,
    data: VendorPaymentIncludedModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/paid-documents/${documentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Remove a paid document from a vendor payment
   *
   * @tags Vendor Payments
   * @name DeletePaidDocument1
   * @summary Remove a paid document
   * @request DELETE:/rest/vendor-payments/{id}/paid-documents/{documentId}
   * @secure */
  deletePaidDocument1 = (id: number, documentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/paid-documents/${documentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve the payable documents for a vendor payment.
   *
   * @tags Vendor Payments
   * @name GetPayableDocuments1
   * @summary Retrieve a list of payable documents
   * @request GET:/rest/vendor-payments/{id}/paid-documents/available
   * @secure */
  getPayableDocuments1 = (
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
    this.request<PayableVendorDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/paid-documents/available`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PayableVendorDocumentPagedResponse,
    );

  /**
   * @description Posts a vendor payment to the general ledger.
   *
   * @tags Vendor Payments
   * @name Post5
   * @summary Posts vendor payment
   * @request POST:/rest/vendor-payments/{id}/post
   * @secure */
  post5 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/vendor-payments/${id}/post`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of a vendor payments filtered by the search criteria.
   *
   * @tags Vendor Payments
   * @name Search23
   * @summary Retrieves vendor payments
   * @request POST:/rest/vendor-payments/search
   * @secure */
  search23 = (data: VendorPaymentSearchModel, params: RequestParams = {}) =>
    this.request<VendorPaymentPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-payments/search`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      VendorPaymentPagedResponse,
    );

  /**
   * @description Submits a vendor payment.
   *
   * @tags Vendor Payments
   * @name Submit12
   * @summary Submits vendor payment
   * @request POST:/rest/vendor-payments/{id}/submit
   * @secure */
  submit12 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/vendor-payments/${id}/submit`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description Validates a vendor payment for edit.
   *
   * @tags Vendor Payments
   * @name Validate7
   * @summary Save validation for a vendor payment
   * @request GET:/rest/vendor-payments/{id}/validate
   * @secure */
  validate7 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Validates a vendor payment for posting to the general ledger.
   *
   * @tags Vendor Payments
   * @name ValidatePost4
   * @summary Post validation for a vendor payment
   * @request GET:/rest/vendor-payments/{id}/post/validate
   * @secure */
  validatePost4 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/post/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Validates a vendor payment for submit.
   *
   * @tags Vendor Payments
   * @name ValidateSubmit4
   * @summary Submit validation for a vendor payment
   * @request GET:/rest/vendor-payments/{id}/submit/validate
   * @secure */
  validateSubmit4 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-payments/${id}/submit/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Voids a posted vendor payment.
   *
   * @tags Vendor Payments
   * @name VoidPayment
   * @summary Voids vendor payment
   * @request POST:/rest/vendor-payments/{id}/void
   * @secure */
  voidPayment = (id: number, data: VendorPaymentVoidModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-payments/${id}/void`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
