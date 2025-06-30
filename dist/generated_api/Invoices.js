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
exports.Invoices = void 0;
const http_client_1 = require("./http-client");
class Invoices extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Completes a customer invoice.
         *
         * @tags Invoices
         * @name Complete
         * @summary Completes a customer invoice
         * @request POST:/rest/invoices/{id}/complete
         * @secure */
        this.complete = (id, params = {}) => this.request({
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
        this.get18 = (id, params = {}) => this.request({
            path: `/rest/invoices/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceModel);
        /**
         * @description Retrieves an attachment for a given invoice.
         *
         * @tags Invoices
         * @name GetAttachment4
         * @summary Retrieves invoice attachment
         * @request GET:/rest/invoices/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment4 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/invoices/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Retrieves a paged list of attachments for a given invoice.
         *
         * @tags Invoices
         * @name GetAttachments4
         * @summary Retrieves invoice attachments
         * @request GET:/rest/invoices/{id}/attachments
         * @secure */
        this.getAttachments4 = (id, query, params = {}) => this.request({
            path: `/rest/invoices/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Retrieves status history list for an invoice.
         *
         * @tags Invoices
         * @name GetStatusHistory1
         * @summary Retrieves invoice status history
         * @request GET:/rest/invoices/{id}/history
         * @secure */
        this.getStatusHistory1 = (id, query, params = {}) => this.request({
            path: `/rest/invoices/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceStatusHistoryPagedResponse);
        /**
         * @description Retrieves the summary of transaction details for an invoice.
         *
         * @tags Invoices
         * @name GetTransactionSummary
         * @summary Retrieves invoice transaction summary
         * @request GET:/rest/invoices/{id}/transaction-summary
         * @secure */
        this.getTransactionSummary = (id, params = {}) => this.request({
            path: `/rest/invoices/${id}/transaction-summary`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InvoiceTransactionSummaryModel);
        /**
         * @description Creates a payment document for an invoice via a payment provider integration.
         *
         * @tags Invoices
         * @name Pay
         * @summary Creates invoice payment document from provider
         * @request POST:/rest/invoices/{id}/payment-portal/pay
         * @deprecated
         * @secure */
        this.pay = (id, data, params = {}) => this.request({
            path: `/rest/invoices/${id}/payment-portal/pay`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.payout = (data, params = {}) => this.request({
            path: `/rest/invoices/payment-portal/payout`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.search7 = (data, query, params = {}) => this.request({
            path: `/rest/invoices/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.InvoicePagedResponse);
        /**
         * @description Send an invoice to payers and returns a unique id for the email.
         *
         * @tags Invoices
         * @name Send
         * @summary Sends invoice to payers.
         * @request POST:/rest/invoices/{id}/send
         * @secure */
        this.send = (id, data, params = {}) => this.request({
            path: `/rest/invoices/${id}/send`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.MailResponseModel);
        /**
         * @description Retrieves an attachment for a given invoice in HTTP response format.
         *
         * @tags Invoices
         * @name StreamAttachment
         * @summary Retrieves invoice attachment stream
         * @request GET:/rest/invoices/{id}/attachments/{attachmentId}/download
         * @secure */
        this.streamAttachment = (id, attachmentId, params = {}) => this.request({
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
        this.streamPdf = (id, params = {}) => this.request({
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
        this.submit3 = (id, data, params = {}) => this.request({
            path: `/rest/invoices/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.Invoices = Invoices;
