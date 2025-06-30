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
exports.ReceivingDocuments = void 0;
const http_client_1 = require("./http-client");
class ReceivingDocuments extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Get a list of receiving documents items
         *
         * @tags Receiving Documents
         * @name Search17
         * @summary Get receiving document items
         * @request GET:/rest/receiving-documents/{id}/items
         * @secure */
        this.search17 = (id, query, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingDocumentItemPagedResponse);
        /**
         * @description Create a new receiving document item.
         *
         * @tags Receiving Documents
         * @name Create35
         * @summary Create a receiving document item
         * @request POST:/rest/receiving-documents/{id}/items
         * @secure */
        this.create35 = (id, data, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve a receiving document item
         *
         * @tags Receiving Documents
         * @name GetReceivingDocumentItem
         * @summary Retrieve a receiving document item
         * @request GET:/rest/receiving-documents/{id}/items/{itemId}
         * @secure */
        this.getReceivingDocumentItem = (id, itemId, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/items/${itemId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingDocumentItemModel);
        /**
         * @description Update an existing receiving document item.
         *
         * @tags Receiving Documents
         * @name Update35
         * @summary Update a receiving document item
         * @request PUT:/rest/receiving-documents/{id}/items/{itemId}
         * @secure */
        this.update35 = (id, itemId, data, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/items/${itemId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing receiving document item.
         *
         * @tags Receiving Documents
         * @name Delete32
         * @summary Delete a receiving document item
         * @request DELETE:/rest/receiving-documents/{id}/items/{itemId}
         * @secure */
        this.delete32 = (id, itemId, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/items/${itemId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of attachments for a given receiving document.
         *
         * @tags Receiving Documents
         * @name GetAttachments8
         * @summary Retrieves receiving document attachments
         * @request GET:/rest/receiving-documents/{id}/attachments
         * @secure */
        this.getAttachments8 = (id, query, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Uploads an attachment to a receiving document.
         *
         * @tags Receiving Documents
         * @name AddAttachment10
         * @summary Uploads attachment to a receiving document
         * @request POST:/rest/receiving-documents/{id}/attachments
         * @secure */
        this.addAttachment10 = (id, data, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve a list of eligible purchase order items by purchase order
         *
         * @tags Receiving Documents
         * @name AvailablePurchaseOrderItems
         * @summary Retrieve eligible purchase order items
         * @request GET:/rest/receiving-documents/purchase-orders/{id}/items
         * @secure */
        this.availablePurchaseOrderItems = (id, query, params = {}) => this.request({
            path: `/rest/receiving-documents/purchase-orders/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingPurchaseOrderItemModelPagedResponse);
        /**
         * @description Search for a list of eligible purchase orders filtered by provided criteria
         *
         * @tags Receiving Documents
         * @name AvailablePurchaseOrders
         * @summary Search for eligible purchase orders
         * @request POST:/rest/receiving-documents/purchase-orders
         * @secure */
        this.availablePurchaseOrders = (data, query, params = {}) => this.request({
            path: `/rest/receiving-documents/purchase-orders`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingPurchaseOrderModelPagedResponse);
        /**
         * @description Moves a receiving document to the completed status and prevents further edits.
         *
         * @tags Receiving Documents
         * @name Complete1
         * @summary Complete a receiving document
         * @request POST:/rest/receiving-documents/{id}/complete
         * @secure */
        this.complete1 = (id, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/complete`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Create a new receiving document.
         *
         * @tags Receiving Documents
         * @name Create36
         * @summary Create a receiving document
         * @request POST:/rest/receiving-documents
         * @secure */
        this.create36 = (data, params = {}) => this.request({
            path: `/rest/receiving-documents`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve a receiving document by id
         *
         * @tags Receiving Documents
         * @name GetReceivingDocument
         * @summary Retrieve a receiving document
         * @request GET:/rest/receiving-documents/{id}
         * @secure */
        this.getReceivingDocument = (id, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingDocumentModel);
        /**
         * @description Update an existing receiving document.
         *
         * @tags Receiving Documents
         * @name Update36
         * @summary Update a receiving document
         * @request PUT:/rest/receiving-documents/{id}
         * @secure */
        this.update36 = (id, data, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing receiving document.
         *
         * @tags Receiving Documents
         * @name Delete33
         * @summary Delete a receiving document
         * @request DELETE:/rest/receiving-documents/{id}
         * @secure */
        this.delete33 = (id, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an attachment for a given receiving document.
         *
         * @tags Receiving Documents
         * @name GetAttachment11
         * @summary Retrieves a receiving document attachment
         * @request GET:/rest/receiving-documents/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment11 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Deletes a receiving document attachment and its associations.
         *
         * @tags Receiving Documents
         * @name DeleteAttachment10
         * @summary Deletes receiving document attachment
         * @request DELETE:/rest/receiving-documents/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment10 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a list of import field definitions.
         *
         * @tags Receiving Documents
         * @name GetImportDefinition2
         * @summary Retrieves the import field definitions.
         * @request GET:/rest/receiving-documents/import/definition
         * @secure */
        this.getImportDefinition2 = (params = {}) => this.request({
            path: `/rest/receiving-documents/import/definition`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ImportDefinitionModel);
        /**
         * @description Retrieves a paged list of legal entities available to the tokened user for receiving documents.
         *
         * @tags Receiving Documents
         * @name GetLegalEntities2
         * @summary Retrieves legal entities for receiving documents.
         * @request GET:/rest/receiving-documents/legal-entities
         * @secure */
        this.getLegalEntities2 = (query, params = {}) => this.request({
            path: `/rest/receiving-documents/legal-entities`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves a paged list of owning organizations available to the tokened user for receiving documents.
         *
         * @tags Receiving Documents
         * @name GetOwningOrganizations
         * @summary Retrieves owning organizations for receiving documents.
         * @request GET:/rest/receiving-documents/owning-organizations
         * @secure */
        this.getOwningOrganizations = (query, params = {}) => this.request({
            path: `/rest/receiving-documents/owning-organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves a paged list of projects available to the tokened user for receiving documents.
         *
         * @tags Receiving Documents
         * @name GetProjects
         * @summary Retrieves projects for receiving documents.
         * @request GET:/rest/receiving-documents/projects
         * @secure */
        this.getProjects = (query, params = {}) => this.request({
            path: `/rest/receiving-documents/projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectSummaryPagedResponse);
        /**
         * @description Retrieves a paged list of vendors available to the tokened user for receiving documents.
         *
         * @tags Receiving Documents
         * @name GetVendors1
         * @summary Retrieves vendors for receiving documents.
         * @request GET:/rest/receiving-documents/vendors
         * @secure */
        this.getVendors1 = (query, params = {}) => this.request({
            path: `/rest/receiving-documents/vendors`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Imports receiving documents file, using an HTTP multipart form post, in order to create new, or update existing receiving documents. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add or update operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/receiving-documents/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"rd_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *receipt_number, po_number, po_lin_id, quantity, comment ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * To clear (set to null) the value of a field during update, include '!BLANK!' as the field value. This is only supported for optional fields. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request.
         *
         * @tags Receiving Documents
         * @name ImportReceivingDocumentFile
         * @summary Imports a receiving documents file
         * @request POST:/rest/receiving-documents/import
         * @secure */
        this.importReceivingDocumentFile = (data, query, params = {}) => this.request({
            path: `/rest/receiving-documents/import`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.FormData,
            format: "json",
            ...params,
        }, data_contracts_1.ImportProgressModel | data_contracts_1.ImportErrorModel);
        /**
         * @description Moves a receiving document to the retracted status.
         *
         * @tags Receiving Documents
         * @name Retract
         * @summary Retract a receiving document
         * @request POST:/rest/receiving-documents/{id}/retract
         * @secure */
        this.retract = (id, params = {}) => this.request({
            path: `/rest/receiving-documents/${id}/retract`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Search for receiving documents with filter criteria.
         *
         * @tags Receiving Documents
         * @name Search18
         * @summary Search for receiving documents
         * @request POST:/rest/receiving-documents/search
         * @secure */
        this.search18 = (data, query, params = {}) => this.request({
            path: `/rest/receiving-documents/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ReceivingDocumentPagedResponse);
        /**
         * @description Retrieves a paged list of receiving document people
         *
         * @tags Receiving Documents
         * @name SearchPeople2
         * @summary Retrieves a list of receiving document people
         * @request GET:/rest/receiving-documents/people
         * @secure */
        this.searchPeople2 = (query, params = {}) => this.request({
            path: `/rest/receiving-documents/people`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSummaryPagedResponse);
    }
}
exports.ReceivingDocuments = ReceivingDocuments;
