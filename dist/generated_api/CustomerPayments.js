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
exports.CustomerPayments = void 0;
const http_client_1 = require("./http-client");
class CustomerPayments extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve all attachments for a given customer payment.
         *
         * @tags Customer Payments
         * @name GetAttachments
         * @summary Retrieve customer payment attachments
         * @request GET:/rest/customer-payments/{id}/attachments
         * @secure */
        this.getAttachments = (id, query, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Adds an attachment to a customer payment.
         *
         * @tags Customer Payments
         * @name AddAttachment
         * @summary Adds customer payment attachment
         * @request POST:/rest/customer-payments/{id}/attachments
         * @secure */
        this.addAttachment = (id, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve the paid documents of a customer payment.
         *
         * @tags Customer Payments
         * @name GetPaidDocuments
         * @summary Retrieve a list of paid documents
         * @request GET:/rest/customer-payments/{id}/paid-documents
         * @secure */
        this.getPaidDocuments = (id, query, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/paid-documents`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaidCustomerDocumentPagedResponse);
        /**
         * @description Add a paid document to a customer payment.
         *
         * @tags Customer Payments
         * @name AddPaidDocument
         * @summary Add a paid document
         * @request POST:/rest/customer-payments/{id}/paid-documents
         * @secure */
        this.addPaidDocument = (id, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/paid-documents`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.create6 = (data, params = {}) => this.request({
            path: `/rest/customer-payments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of details for a customer payment.
         *
         * @tags Customer Payments
         * @name GetDetailsByKey
         * @summary Retrieves customer payment details
         * @request GET:/rest/customer-payments/{id}/details
         * @secure */
        this.getDetailsByKey = (id, query, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/details`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerPaymentDetailPagedResponse);
        /**
         * @description Creates an expense line item for a customer payment
         *
         * @tags Customer Payments
         * @name CreateDetail
         * @summary Creates a customer payment detail
         * @request POST:/rest/customer-payments/{id}/details
         * @secure */
        this.createDetail = (id, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/details`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a customer payment summary by its id.
         *
         * @tags Customer Payments
         * @name GetByKey8
         * @summary Retrieves a customer payment
         * @request GET:/rest/customer-payments/{id}
         * @secure */
        this.getByKey8 = (id, params = {}) => this.request({
            path: `/rest/customer-payments/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerPaymentModel);
        /**
         * @description Updates a customer payment by its id.
         *
         * @tags Customer Payments
         * @name Update7
         * @summary Updates a customer payment
         * @request PUT:/rest/customer-payments/{id}
         * @secure */
        this.update7 = (id, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete6 = (id, params = {}) => this.request({
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
        this.getAttachment = (id, attachmentId, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment for on given customer payment.
         *
         * @tags Customer Payments
         * @name DeleteAttachment
         * @summary Delete a customer payment attachment
         * @request DELETE:/rest/customer-payments/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment = (id, attachmentId, params = {}) => this.request({
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
        this.getDetailByKey = (id, detailId, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/details/${detailId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerPaymentDetailModel);
        /**
         * @description Updates a customer payment detail line by its id.
         *
         * @tags Customer Payments
         * @name UpdateDetail
         * @summary Updates a customer payment detail line
         * @request PUT:/rest/customer-payments/{id}/details/{detailId}
         * @secure */
        this.updateDetail = (id, detailId, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/details/${detailId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteDetail = (id, detailId, params = {}) => this.request({
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
        this.getPaidDocument = (id, type, documentId, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/paid-documents/${type}/${documentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaidCustomerDocumentModel);
        /**
         * @description Remove a paid document from a customer payment. Type is INVOICE or PAYMENT.
         *
         * @tags Customer Payments
         * @name DeletePaidDocument
         * @summary Remove a paid document
         * @request DELETE:/rest/customer-payments/{id}/paid-documents/{type}/{documentId}
         * @secure */
        this.deletePaidDocument = (id, type, documentId, params = {}) => this.request({
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
        this.getPayableDocuments = (id, query, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/paid-documents/available`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PayableCustomerDocumentPagedResponse);
        /**
         * @description Posts a customer payment to the general ledger.
         *
         * @tags Customer Payments
         * @name Post
         * @summary Posts customer payment
         * @request POST:/rest/customer-payments/{id}/post
         * @secure */
        this.post = (id, query, params = {}) => this.request({
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
        this.search3 = (data, params = {}) => this.request({
            path: `/rest/customer-payments/search`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerPaymentPagedResponse);
        /**
         * @description Submits a customer payment.
         *
         * @tags Customer Payments
         * @name Submit
         * @summary Submits customer payment
         * @request POST:/rest/customer-payments/{id}/submit
         * @secure */
        this.submit = (id, query, params = {}) => this.request({
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
        this.updatePaidDocument = (id, documentId, data, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/paid-documents/${documentId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.validate = (id, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a customer payment for posting to the general ledger.
         *
         * @tags Customer Payments
         * @name ValidatePost
         * @summary Post validation for a customer payment
         * @request GET:/rest/customer-payments/{id}/post/validate
         * @secure */
        this.validatePost = (id, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/post/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a customer payment for submit.
         *
         * @tags Customer Payments
         * @name ValidateSubmit
         * @summary Submit validation for a customer payment
         * @request GET:/rest/customer-payments/{id}/submit/validate
         * @secure */
        this.validateSubmit = (id, params = {}) => this.request({
            path: `/rest/customer-payments/${id}/submit/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
    }
}
exports.CustomerPayments = CustomerPayments;
