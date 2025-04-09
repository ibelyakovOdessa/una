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
  AttachmentModel,
  AttachmentPagedResponseModel,
  ErrorResponse,
  InvoiceModel,
  InvoicePagedResponse,
  InvoiceSearchModel,
  InvoiceStatusHistoryPagedResponse,
  InvoiceSubmitModel,
  InvoiceTransactionSummaryModel,
  MailModel,
  MailResponseModel,
  Payment,
  Payout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Invoices<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Completes a customer invoice.
   *
   * @tags Invoices
   * @name Complete
   * @summary Completes a customer invoice
   * @request POST:/rest/invoices/{id}/complete
   * @secure */
  complete = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/${id}/complete`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an invoice by key.
   *
   * @tags Invoices
   * @name Get18
   * @summary Retrieves an invoice
   * @request GET:/rest/invoices/{id}
   * @secure */
  get18 = (id: number, params: RequestParams = {}) =>
    this.request<InvoiceModel, ErrorResponse>(
      {
        path: `/rest/invoices/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceModel,
    );

  /**
   * @description Retrieves an attachment for a given invoice.
   *
   * @tags Invoices
   * @name GetAttachment4
   * @summary Retrieves invoice attachment
   * @request GET:/rest/invoices/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment4 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/invoices/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Retrieves a paged list of attachments for a given invoice.
   *
   * @tags Invoices
   * @name GetAttachments4
   * @summary Retrieves invoice attachments
   * @request GET:/rest/invoices/{id}/attachments
   * @secure */
  getAttachments4 = (
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
        path: `/rest/invoices/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    );

  /**
   * @description Retrieves status history list for an invoice.
   *
   * @tags Invoices
   * @name GetStatusHistory1
   * @summary Retrieves invoice status history
   * @request GET:/rest/invoices/{id}/history
   * @secure */
  getStatusHistory1 = (
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
    this.request<InvoiceStatusHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/invoices/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceStatusHistoryPagedResponse,
    );

  /**
   * @description Retrieves the summary of transaction details for an invoice.
   *
   * @tags Invoices
   * @name GetTransactionSummary
   * @summary Retrieves invoice transaction summary
   * @request GET:/rest/invoices/{id}/transaction-summary
   * @secure */
  getTransactionSummary = (id: number, params: RequestParams = {}) =>
    this.request<InvoiceTransactionSummaryModel, ErrorResponse>(
      {
        path: `/rest/invoices/${id}/transaction-summary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceTransactionSummaryModel,
    );

  /**
   * @description Creates a payment document for an invoice via a payment provider integration.
   *
   * @tags Invoices
   * @name Pay
   * @summary Creates invoice payment document from provider
   * @request POST:/rest/invoices/{id}/payment-portal/pay
   * @deprecated
   * @secure */
  pay = (id: number, data: Payment, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/${id}/payment-portal/pay`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Create a deposit document for payout of invoice payments via a payment provider integration.
   *
   * @tags Invoices
   * @name Payout
   * @summary Creates payout deposit document of invoice payments from provider
   * @request POST:/rest/invoices/payment-portal/payout
   * @deprecated
   * @secure */
  payout = (data: Payout, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/payment-portal/payout`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of invoices filtered by the search criteria.
   *
   * @tags Invoices
   * @name Search7
   * @summary Retrieves invoices
   * @request POST:/rest/invoices/search
   * @secure */
  search7 = (
    data: InvoiceSearchModel,
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
    this.request<InvoicePagedResponse, ErrorResponse>(
      {
        path: `/rest/invoices/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      InvoicePagedResponse,
    );

  /**
   * @description Send an invoice to payers and returns a unique id for the email.
   *
   * @tags Invoices
   * @name Send
   * @summary Sends invoice to payers.
   * @request POST:/rest/invoices/{id}/send
   * @secure */
  send = (id: number, data: MailModel, params: RequestParams = {}) =>
    this.request<MailResponseModel, ErrorResponse>(
      {
        path: `/rest/invoices/${id}/send`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      MailResponseModel,
    );

  /**
   * @description Retrieves an attachment for a given invoice in HTTP response format.
   *
   * @tags Invoices
   * @name StreamAttachment
   * @summary Retrieves invoice attachment stream
   * @request GET:/rest/invoices/{id}/attachments/{attachmentId}/download
   * @secure */
  streamAttachment = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/${id}/attachments/${attachmentId}/download`,
      method: "GET",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an invoice PDF in HTTP response format.
   *
   * @tags Invoices
   * @name StreamPdf
   * @summary Retrieves invoice PDF stream
   * @request GET:/rest/invoices/{id}/download
   * @secure */
  streamPdf = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/${id}/download`,
      method: "GET",
      secure: true,
      ...params,
    });

  /**
   * @description Submits a customer invoice for approval.
   *
   * @tags Invoices
   * @name Submit3
   * @summary Submits a customer invoice
   * @request POST:/rest/invoices/{id}/submit
   * @secure */
  submit3 = (id: number, data: InvoiceSubmitModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoices/${id}/submit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
