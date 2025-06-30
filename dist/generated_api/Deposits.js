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
exports.Deposits = void 0;
const http_client_1 = require("./http-client");
class Deposits extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve a list of attachments for a given deposit.
         *
         * @tags Deposits
         * @name GetAttachments1
         * @summary Retrieve deposit attachments list
         * @request GET:/rest/deposits/{id}/attachments
         * @secure */
        this.getAttachments1 = (id, query, params = {}) => this.request({
            path: `/rest/deposits/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Adds an attachment to a deposit.
         *
         * @tags Deposits
         * @name AddAttachment1
         * @summary Adds deposit attachment
         * @request POST:/rest/deposits/{id}/attachments
         * @secure */
        this.addAttachment1 = (id, data, params = {}) => this.request({
            path: `/rest/deposits/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve a deposited document of a deposit by id.
         *
         * @tags Deposits
         * @name GetIncludedDocument
         * @summary Retrieve a deposited document
         * @request GET:/rest/deposits/{id}/deposited-documents/{documentId}
         * @secure */
        this.getIncludedDocument = (id, documentId, params = {}) => this.request({
            path: `/rest/deposits/${id}/deposited-documents/${documentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositedDocumentModel);
        /**
         * @description Include a customer payment into the specified deposit.
         *
         * @tags Deposits
         * @name AddIncludedDocument
         * @summary Include a customer payment into a deposit
         * @request POST:/rest/deposits/{id}/deposited-documents/{documentId}
         * @secure */
        this.addIncludedDocument = (id, documentId, params = {}) => this.request({
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
        this.removeIncludedDocument = (id, documentId, params = {}) => this.request({
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
        this.create8 = (data, params = {}) => this.request({
            path: `/rest/deposits`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of details for a deposit.
         *
         * @tags Deposits
         * @name GetDetailsByKey1
         * @summary Retrieves deposit details
         * @request GET:/rest/deposits/{id}/details
         * @secure */
        this.getDetailsByKey1 = (id, query, params = {}) => this.request({
            path: `/rest/deposits/${id}/details`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositDetailPagedResponse);
        /**
         * @description Creates an expense line item for a deposit
         *
         * @tags Deposits
         * @name CreateDetail1
         * @summary Creates a deposit detail line item
         * @request POST:/rest/deposits/{id}/details
         * @secure */
        this.createDetail1 = (id, data, params = {}) => this.request({
            path: `/rest/deposits/${id}/details`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a Deposit summary by its id.
         *
         * @tags Deposits
         * @name GetByKey11
         * @summary Retrieves a Deposit
         * @request GET:/rest/deposits/{id}
         * @secure */
        this.getByKey11 = (id, params = {}) => this.request({
            path: `/rest/deposits/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositSummaryModel);
        /**
         * @description Updates a Deposit by its id.
         *
         * @tags Deposits
         * @name Update9
         * @summary Updates a Deposit
         * @request PUT:/rest/deposits/{id}
         * @secure */
        this.update9 = (id, data, params = {}) => this.request({
            path: `/rest/deposits/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete8 = (id, params = {}) => this.request({
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
        this.getAttachment1 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/deposits/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment for on given deposit.
         *
         * @tags Deposits
         * @name DeleteAttachment1
         * @summary Delete a deposit attachment
         * @request DELETE:/rest/deposits/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment1 = (id, attachmentId, params = {}) => this.request({
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
        this.getDetailByKey1 = (id, detailId, params = {}) => this.request({
            path: `/rest/deposits/${id}/details/${detailId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositDetailModel);
        /**
         * @description Updates a deposit detail line item by its id.
         *
         * @tags Deposits
         * @name UpdateDetail1
         * @summary Updates a deposit detail line item
         * @request PUT:/rest/deposits/{id}/details/{detailId}
         * @secure */
        this.updateDetail1 = (id, detailId, data, params = {}) => this.request({
            path: `/rest/deposits/${id}/details/${detailId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteDetail1 = (id, detailId, params = {}) => this.request({
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
        this.getDepositableDocuments = (id, query, params = {}) => this.request({
            path: `/rest/deposits/${id}/deposited-documents/available`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositedDocumentPagedResponse);
        /**
         * @description Retrieve a list of customer payment documents included in a deposit.
         *
         * @tags Deposits
         * @name GetIncludedDocuments
         * @summary Retrieve a list of deposited documents
         * @request GET:/rest/deposits/{id}/deposited-documents
         * @secure */
        this.getIncludedDocuments = (id, query, params = {}) => this.request({
            path: `/rest/deposits/${id}/deposited-documents`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositedDocumentPagedResponse);
        /**
         * @description Posts a deposit to the general ledger.
         *
         * @tags Deposits
         * @name Post1
         * @summary Posts deposit
         * @request POST:/rest/deposits/{id}/post
         * @secure */
        this.post1 = (id, query, params = {}) => this.request({
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
        this.search4 = (data, query, params = {}) => this.request({
            path: `/rest/deposits/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.DepositPagedResponse);
        /**
         * @description Submits a deposit.
         *
         * @tags Deposits
         * @name Submit1
         * @summary Submits deposit
         * @request POST:/rest/deposits/{id}/submit
         * @secure */
        this.submit1 = (id, query, params = {}) => this.request({
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
        this.validate1 = (id, params = {}) => this.request({
            path: `/rest/deposits/${id}/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a deposit for posting to the general ledger.
         *
         * @tags Deposits
         * @name ValidatePost1
         * @summary Post validation for a deposit
         * @request GET:/rest/deposits/{id}/post/validate
         * @secure */
        this.validatePost1 = (id, params = {}) => this.request({
            path: `/rest/deposits/${id}/post/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a deposit for submit.
         *
         * @tags Deposits
         * @name ValidateSubmit1
         * @summary Submit validation for a deposit
         * @request GET:/rest/deposits/{id}/submit/validate
         * @secure */
        this.validateSubmit1 = (id, params = {}) => this.request({
            path: `/rest/deposits/${id}/submit/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
    }
}
exports.Deposits = Deposits;
