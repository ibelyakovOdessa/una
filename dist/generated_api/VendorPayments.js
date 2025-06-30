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
exports.VendorPayments = void 0;
const http_client_1 = require("./http-client");
class VendorPayments extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves details of a vendor payment.
         *
         * @tags Vendor Payments
         * @name GetVendorPaymentDetails
         * @summary Retrieves vendor payment details
         * @request GET:/rest/vendor-payments/{id}/details
         * @secure */
        this.getVendorPaymentDetails = (id, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/details`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorPaymentDetailPagedResponse);
        /**
         * @description Creates an expense line item for a vendor payment
         *
         * @tags Vendor Payments
         * @name Create44
         * @summary Creates a vendor payment detail
         * @request POST:/rest/vendor-payments/{id}/details
         * @secure */
        this.create44 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/details`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a vendor payment by id.
         *
         * @tags Vendor Payments
         * @name GetVendorPaymentDetail
         * @summary Retrieve details of a vendor payment
         * @request GET:/rest/vendor-payments/{id}/details/{detailId}
         * @secure */
        this.getVendorPaymentDetail = (id, detailId, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/details/${detailId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorPaymentDetailModel);
        /**
         * @description Updates a vendor payment detail line by its id.
         *
         * @tags Vendor Payments
         * @name Update43
         * @summary Updates a vendor payment detail line
         * @request PUT:/rest/vendor-payments/{id}/details/{detailId}
         * @secure */
        this.update43 = (id, detailId, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/details/${detailId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete39 = (id, detailId, params = {}) => this.request({
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
        this.getAttachments10 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Adds attachment to a vendor payment.
         *
         * @tags Vendor Payments
         * @name AddAttachment13
         * @summary Adds vendor payment attachment
         * @request POST:/rest/vendor-payments/{id}/attachments
         * @secure */
        this.addAttachment13 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve the paid documents of a vendor payment.
         *
         * @tags Vendor Payments
         * @name GetPaidDocuments1
         * @summary Retrieve a list of paid documents
         * @request GET:/rest/vendor-payments/{id}/paid-documents
         * @secure */
        this.getPaidDocuments1 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/paid-documents`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaidVendorDocumentPagedResponse);
        /**
         * @description Add a paid document to a vendor payment.
         *
         * @tags Vendor Payments
         * @name AddPaidDocument1
         * @summary Add a paid document
         * @request POST:/rest/vendor-payments/{id}/paid-documents
         * @secure */
        this.addPaidDocument1 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/paid-documents`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.create45 = (data, params = {}) => this.request({
            path: `/rest/vendor-payments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a vendor payment.
         *
         * @tags Vendor Payments
         * @name GetByKey41
         * @summary Retrieves a vendor payment
         * @request GET:/rest/vendor-payments/{id}
         * @secure */
        this.getByKey41 = (id, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorPaymentModel);
        /**
         * @description Updates a vendor payment by its id.
         *
         * @tags Vendor Payments
         * @name Update44
         * @summary Updates a vendor payment
         * @request PUT:/rest/vendor-payments/{id}
         * @secure */
        this.update44 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete40 = (id, params = {}) => this.request({
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
        this.getAttachment14 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment for on given vendor payment.
         *
         * @tags Vendor Payments
         * @name DeleteAttachment13
         * @summary Delete a vendor payment attachment
         * @request DELETE:/rest/vendor-payments/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment13 = (id, attachmentId, params = {}) => this.request({
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
        this.getPaidDocument1 = (id, documentId, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/paid-documents/${documentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaidVendorDocumentModel);
        /**
         * @description Update a paid document for a vendor payment
         *
         * @tags Vendor Payments
         * @name UpdatePaidDocument1
         * @summary Update a paid document
         * @request PUT:/rest/vendor-payments/{id}/paid-documents/{documentId}
         * @secure */
        this.updatePaidDocument1 = (id, documentId, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/paid-documents/${documentId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deletePaidDocument1 = (id, documentId, params = {}) => this.request({
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
        this.getPayableDocuments1 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/paid-documents/available`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PayableVendorDocumentPagedResponse);
        /**
         * @description Posts a vendor payment to the general ledger.
         *
         * @tags Vendor Payments
         * @name Post5
         * @summary Posts vendor payment
         * @request POST:/rest/vendor-payments/{id}/post
         * @secure */
        this.post5 = (id, query, params = {}) => this.request({
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
        this.search23 = (data, params = {}) => this.request({
            path: `/rest/vendor-payments/search`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorPaymentPagedResponse);
        /**
         * @description Submits a vendor payment.
         *
         * @tags Vendor Payments
         * @name Submit12
         * @summary Submits vendor payment
         * @request POST:/rest/vendor-payments/{id}/submit
         * @secure */
        this.submit12 = (id, query, params = {}) => this.request({
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
        this.validate7 = (id, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a vendor payment for posting to the general ledger.
         *
         * @tags Vendor Payments
         * @name ValidatePost4
         * @summary Post validation for a vendor payment
         * @request GET:/rest/vendor-payments/{id}/post/validate
         * @secure */
        this.validatePost4 = (id, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/post/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a vendor payment for submit.
         *
         * @tags Vendor Payments
         * @name ValidateSubmit4
         * @summary Submit validation for a vendor payment
         * @request GET:/rest/vendor-payments/{id}/submit/validate
         * @secure */
        this.validateSubmit4 = (id, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/submit/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Voids a posted vendor payment.
         *
         * @tags Vendor Payments
         * @name VoidPayment
         * @summary Voids vendor payment
         * @request POST:/rest/vendor-payments/{id}/void
         * @secure */
        this.voidPayment = (id, data, params = {}) => this.request({
            path: `/rest/vendor-payments/${id}/void`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.VendorPayments = VendorPayments;
