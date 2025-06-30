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
exports.PurchaseOrders = void 0;
const http_client_1 = require("./http-client");
class PurchaseOrders extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve attachments list for a given purchase order
         *
         * @tags Purchase Orders
         * @name GetAttachments6
         * @summary Retrieve purchase order attachments
         * @request GET:/rest/purchase-orders/{id}/attachments
         * @secure */
        this.getAttachments6 = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderAttachmentListPagedResponse);
        /**
         * @description Add an attachment to a purchase order
         *
         * @tags Purchase Orders
         * @name AddAttachment8
         * @summary Add attachment
         * @request POST:/rest/purchase-orders/{id}/attachments
         * @secure */
        this.addAttachment8 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Associates a Contract Clause with a PO.
         *
         * @tags Purchase Orders
         * @name GetContractClauses1
         * @summary Create contract clause association
         * @request GET:/rest/purchase-orders/{id}/contract-clauses
         * @secure */
        this.getContractClauses1 = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/contract-clauses`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POContractClauseModel);
        /**
         * @description Associates a Contract Clause with a PO.
         *
         * @tags Purchase Orders
         * @name AssociateContractClauses
         * @summary Associate contract clauses
         * @request PUT:/rest/purchase-orders/{id}/contract-clauses
         * @secure */
        this.associateContractClauses = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/contract-clauses`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description close a purchase order and all of its detail lines
         *
         * @tags Purchase Orders
         * @name CloseDocument
         * @summary Close a purchase order
         * @request POST:/rest/purchase-orders/{id}/close
         * @secure */
        this.closeDocument = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/close`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Close purchase order detail lines
         *
         * @tags Purchase Orders
         * @name CloseDocumentLines
         * @summary Close purchase order lines
         * @request POST:/rest/purchase-orders/{id}/close/lines
         * @secure */
        this.closeDocumentLines = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/close/lines`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Creates an original purchase order
         *
         * @tags Purchase Orders
         * @name Create32
         * @summary Creates a purchase order
         * @request POST:/rest/purchase-orders
         * @secure */
        this.create32 = (data, params = {}) => this.request({
            path: `/rest/purchase-orders`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Create an expense assignment
         *
         * @tags Purchase Orders
         * @name CreateExpenseAssignment
         * @summary Create an expense assignment
         * @request POST:/rest/purchase-orders/{id}/expenses/{descriptorId}/assignments
         * @secure */
        this.createExpenseAssignment = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/assignments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase order expenses
         *
         * @tags Purchase Orders
         * @name GetExpenseLinesForPo
         * @summary Retrieves purchase order expenses
         * @request GET:/rest/purchase-orders/{id}/expenses
         * @secure */
        this.getExpenseLinesForPo = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POExpenseLinePagedResponse);
        /**
         * @description Creates an expenses line for an original purchase order
         *
         * @tags Purchase Orders
         * @name CreateExpenseLine
         * @summary Creates an expenses line for an original purchase order
         * @request POST:/rest/purchase-orders/{id}/expenses
         * @secure */
        this.createExpenseLine = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates an expense line for a purchase order mod from an approved PO line on an original PO, using the approved line's descriptorId as the identifier.
         *
         * @tags Purchase Orders
         * @name CreateExpenseLineMod
         * @summary Creates an expense line for a purchase order mod from an approved PO line on an original PO.
         * @request POST:/rest/purchase-orders/{id}/expenses/{descriptorId}/mod
         * @secure */
        this.createExpenseLineMod = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase order items
         *
         * @tags Purchase Orders
         * @name GetItemLinesForPo
         * @summary Retrieves purchase order items
         * @request GET:/rest/purchase-orders/{id}/items
         * @secure */
        this.getItemLinesForPo = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POItemLinePagedResponse);
        /**
         * @description Creates a new item line for a purchase order (i.e., not created as a modification to a previously approved item line)
         *
         * @tags Purchase Orders
         * @name CreateItemLine
         * @summary Creates an item line for a purchase order
         * @request POST:/rest/purchase-orders/{id}/items
         * @secure */
        this.createItemLine = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * No description
         *
         * @tags Purchase Orders
         * @name CreateItemLineMod
         * @summary Creates an item line modification for a previously approved PO item line using the approved line's descriptorId as the identifier.  An item line modification can only be created as part of a purchase order mod.
         * @request POST:/rest/purchase-orders/{id}/items/{descriptorId}/mod
         * @secure */
        this.createItemLineMod = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Create a labor assignment. Optionally, send an email notification to the project manager and resource assigner of the project on the assignment by setting the 'notify' flag. For the email to be sent, the 'PO Assignment Added/Modified' email notification template must be set to active and the person must be enabled to receive assignment notification emails
         *
         * @tags Purchase Orders
         * @name CreateLaborAssignment
         * @summary Create a labor assignment
         * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments
         * @secure */
        this.createLaborAssignment = (id, descriptorId, data, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase order labor details
         *
         * @tags Purchase Orders
         * @name GetLaborLinesForPo
         * @summary Retrieves purchase order labor details
         * @request GET:/rest/purchase-orders/{id}/labor
         * @secure */
        this.getLaborLinesForPo = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POLaborLinePagedResponse);
        /**
         * @description Creates an labor line for an original purchase order
         *
         * @tags Purchase Orders
         * @name CreateLaborLine
         * @summary Creates an labor line for an original purchase order
         * @request POST:/rest/purchase-orders/{id}/labor
         * @secure */
        this.createLaborLine = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates a labor line for a purchase order mod from an approved PO line on an original PO, using the approved line's descriptorId as the identifier.
         *
         * @tags Purchase Orders
         * @name CreateLaborLineMod
         * @summary Creates a labor line for a purchase order mod from an approved PO line on an original PO.
         * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/mod
         * @secure */
        this.createLaborLineMod = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates a purchase order mod from an original purchase order
         *
         * @tags Purchase Orders
         * @name CreateMod
         * @summary Creates a purchase order mod
         * @request POST:/rest/purchase-orders/mods
         * @secure */
        this.createMod = (data, params = {}) => this.request({
            path: `/rest/purchase-orders/mods`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a purchase order
         *
         * @tags Purchase Orders
         * @name GetByKey33
         * @summary Retrieves a purchase order by its id
         * @request GET:/rest/purchase-orders/{id}
         * @secure */
        this.getByKey33 = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderModel);
        /**
         * @description Updates an existing (original) purchase order given its key.
         *
         * @tags Purchase Orders
         * @name Update32
         * @summary Updates a purchase order
         * @request PUT:/rest/purchase-orders/{id}
         * @secure */
        this.update32 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing Purchase Order given its key.
         *
         * @tags Purchase Orders
         * @name Delete29
         * @summary Delete a Purchase Order
         * @request DELETE:/rest/purchase-orders/{id}
         * @secure */
        this.delete29 = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieve an attachment for a given purchase order
         *
         * @tags Purchase Orders
         * @name GetAttachment9
         * @summary Retrieve a purchase order attachment
         * @request GET:/rest/purchase-orders/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment9 = (id, attachmentId, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/attachments/${attachmentId}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Updates attachment details on a purchase order
         *
         * @tags Purchase Orders
         * @name UpdateAttachment
         * @summary Update attachment
         * @request PUT:/rest/purchase-orders/{id}/attachments/{attachmentId}
         * @secure */
        this.updateAttachment = (id, attachmentId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/attachments/${attachmentId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an attachment from a given purchase order
         *
         * @tags Purchase Orders
         * @name DeleteAttachment8
         * @summary Delete a purchase order attachment
         * @request DELETE:/rest/purchase-orders/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment8 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Update an expense assignment
         *
         * @tags Purchase Orders
         * @name UpdateExpenseAssignment
         * @summary Update an expense assignment
         * @request PUT:/rest/purchase-orders/{id}/expenses/{descriptorId}/assignments/{assignmentId}
         * @secure */
        this.updateExpenseAssignment = (id, descriptorId, assignmentId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/assignments/${assignmentId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Remove an expense assignment
         *
         * @tags Purchase Orders
         * @name DeleteExpenseAssignment
         * @summary Remove an expense assignment
         * @request DELETE:/rest/purchase-orders/{id}/expenses/{descriptorId}/assignments/{assignmentId}
         * @secure */
        this.deleteExpenseAssignment = (id, descriptorId, assignmentId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/assignments/${assignmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase order expense line
         *
         * @tags Purchase Orders
         * @name GetExpenseLineForPo
         * @summary Retrieves a purchase order expense line
         * @request GET:/rest/purchase-orders/{id}/expenses/{lineId}
         * @secure */
        this.getExpenseLineForPo = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POExpenseLineModel);
        /**
         * @description Updates an expenses line for a purchase order
         *
         * @tags Purchase Orders
         * @name UpdateExpenseLine
         * @summary Updates an expenses line for a purchase order
         * @request PUT:/rest/purchase-orders/{id}/expenses/{lineId}
         * @secure */
        this.updateExpenseLine = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a purchase order expenses line
         *
         * @tags Purchase Orders
         * @name DeleteExpenseLine
         * @summary Delete a purchase order expenses line
         * @request DELETE:/rest/purchase-orders/{id}/expenses/{lineId}
         * @secure */
        this.deleteExpenseLine = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Delete a purchase order item line
         *
         * @tags Purchase Orders
         * @name DeleteItemLine
         * @summary Delete a purchase order item line
         * @request DELETE:/rest/purchase-orders/{id}/items/{itemId}
         * @secure */
        this.deleteItemLine = (id, itemId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items/${itemId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Update a labor assignment. Optionally, send an email notification to the project manager and resource assigner of the project on the assignment by setting the 'notify' flag. For the email to be sent, the 'PO Assignment Added/Modified' email notification template must be set to active and the person must be enabled to receive assignment notification emails
         *
         * @tags Purchase Orders
         * @name UpdateLaborAssignment
         * @summary Update a labor assignment
         * @request PUT:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments/{assignmentId}
         * @secure */
        this.updateLaborAssignment = (id, descriptorId, assignmentId, data, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments/${assignmentId}`,
            method: "PUT",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Remove a labor assignment
         *
         * @tags Purchase Orders
         * @name DeleteLaborAssignment
         * @summary Remove a labor assignment
         * @request DELETE:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments/{assignmentId}
         * @secure */
        this.deleteLaborAssignment = (id, descriptorId, assignmentId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments/${assignmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase order labor line
         *
         * @tags Purchase Orders
         * @name GetLaborLineForPo
         * @summary Retrieves a purchase order labor line
         * @request GET:/rest/purchase-orders/{id}/labor/{lineId}
         * @secure */
        this.getLaborLineForPo = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POLaborLineModel);
        /**
         * @description Updates an labor line for a purchase order
         *
         * @tags Purchase Orders
         * @name UpdateLaborLine
         * @summary Updates an labor line for a purchase order
         * @request PUT:/rest/purchase-orders/{id}/labor/{lineId}
         * @secure */
        this.updateLaborLine = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a purchase order labor line
         *
         * @tags Purchase Orders
         * @name DeleteLaborLine
         * @summary Delete a purchase order labor line
         * @request DELETE:/rest/purchase-orders/{id}/labor/{lineId}
         * @secure */
        this.deleteLaborLine = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a purchase order's alert preferences
         *
         * @tags Purchase Orders
         * @name GetPoAlertPreferencess
         * @summary Retrieves alert preferences for a purchase order by its id
         * @request GET:/rest/purchase-orders/{id}/alert-preferences
         * @secure */
        this.getPoAlertPreferencess = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/alert-preferences`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POAlertPreferencesModel);
        /**
         * @description Update alert preferences for a purchase order
         *
         * @tags Purchase Orders
         * @name UpdatePoAlertPreferences
         * @summary Update alert preferences
         * @request PUT:/rest/purchase-orders/{id}/alert-preferences
         * @secure */
        this.updatePoAlertPreferences = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/alert-preferences`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Remove alert preferences from a purchase order
         *
         * @tags Purchase Orders
         * @name DeletePoAlertPreferences
         * @summary Remove alert preferences
         * @request DELETE:/rest/purchase-orders/{id}/alert-preferences
         * @secure */
        this.deletePoAlertPreferences = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/alert-preferences`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a purchase order's format options
         *
         * @tags Purchase Orders
         * @name GetPoFormatOptions
         * @summary Retrieves format options for a purchase order by its id
         * @request GET:/rest/purchase-orders/{id}/format
         * @secure */
        this.getPoFormatOptions = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/format`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POFormatOptionsModel);
        /**
         * @description Updates details of a purchase order's format options
         *
         * @tags Purchase Orders
         * @name UpdatePoFormatOptions
         * @summary Updates format options for a purchase order by its id
         * @request PUT:/rest/purchase-orders/{id}/format
         * @secure */
        this.updatePoFormatOptions = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/format`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Remove formatting details from a purchase order
         *
         * @tags Purchase Orders
         * @name DeletePoFormatOptions
         * @summary Remove purchase order format
         * @request DELETE:/rest/purchase-orders/{id}/format
         * @secure */
        this.deletePoFormatOptions = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/format`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves available vendors for the user based on their legal entity access.
         *
         * @tags Purchase Orders
         * @name GetAvailableVendors
         * @summary Retrieve available vendors
         * @request GET:/rest/purchase-orders/available-vendors
         * @secure */
        this.getAvailableVendors = (query, params = {}) => this.request({
            path: `/rest/purchase-orders/available-vendors`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Retrieves approved or in progress purchase order balances.
         *
         * @tags Purchase Orders
         * @name GetCurrentBalancesByDocumentKey
         * @summary Retrieves purchase order balances
         * @request GET:/rest/purchase-orders/{id}/balances
         * @secure */
        this.getCurrentBalancesByDocumentKey = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/balances`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderBalancesModel);
        /**
         * @description Retrieves purchase order expense assignments
         *
         * @tags Purchase Orders
         * @name GetExpenseAssignmentsForPo
         * @summary Retrieves purchase order expense assignments
         * @request GET:/rest/purchase-orders/{id}/expenses/assignments
         * @secure */
        this.getExpenseAssignmentsForPo = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/assignments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderExpenseAssignmentPagedResponse);
        /**
         * @description Retrieves purchase order expense history
         *
         * @tags Purchase Orders
         * @name GetExpenseLinesHistoryForPo
         * @summary Retrieves purchase order expense history
         * @request GET:/rest/purchase-orders/{id}/expenses/{descriptorId}/history
         * @secure */
        this.getExpenseLinesHistoryForPo = (id, descriptorId, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POExpenseLinePagedResponse);
        /**
         * @description Retrieves a purchase order's status history
         *
         * @tags Purchase Orders
         * @name GetHistoryByPoKey
         * @summary Retrieves a purchase order's status history
         * @request GET:/rest/purchase-orders/{id}/approvals/history
         * @secure */
        this.getHistoryByPoKey = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/approvals/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchasingApprovalHistoryPagedResponse);
        /**
         * @description Retrieves purchase order item by the specified key
         *
         * @tags Purchase Orders
         * @name GetItemLineForPo
         * @summary Retrieves purchase order item by id
         * @request GET:/rest/purchase-orders/{id}/items/{itemLineId}
         * @secure */
        this.getItemLineForPo = (id, itemLineId, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items/${itemLineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POItemLinePagedResponse);
        /**
         * @description Retrieves purchase order item history
         *
         * @tags Purchase Orders
         * @name GetItemLinesHistoryForPo
         * @summary Retrieves purchase order item history
         * @request GET:/rest/purchase-orders/{id}/items/{descriptorId}/history
         * @secure */
        this.getItemLinesHistoryForPo = (id, descriptorId, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items/${descriptorId}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POItemLinePagedResponse);
        /**
         * @description Retrieves purchase order labor assignments
         *
         * @tags Purchase Orders
         * @name GetLaborAssignmentsForPo
         * @summary Retrieves purchase order labor assignments
         * @request GET:/rest/purchase-orders/{id}/labor/assignments
         * @secure */
        this.getLaborAssignmentsForPo = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/assignments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderLaborAssignmentPagedResponse);
        /**
         * @description Retrieves purchase order labor detail history
         *
         * @tags Purchase Orders
         * @name GetLaborLinesHistoryForPo
         * @summary Retrieves purchase order labor detail history
         * @request GET:/rest/purchase-orders/{id}/labor/{descriptorId}/history
         * @secure */
        this.getLaborLinesHistoryForPo = (id, descriptorId, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.POLaborLinePagedResponse);
        /**
         * @description Retrieves a paged list of legal entities available to the tokened user for purchase orders, filtered by an optional active flag
         *
         * @tags Purchase Orders
         * @name GetLegalEntities1
         * @summary Retrieves legal entities available for purchase orders.
         * @request GET:/rest/purchase-orders/legal-entities
         * @secure */
        this.getLegalEntities1 = (query, params = {}) => this.request({
            path: `/rest/purchase-orders/legal-entities`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Retrieves balances for posted vendor invoices on the purchase order
         *
         * @tags Purchase Orders
         * @name GetPostedVendorInvoiceBalances
         * @summary Retrieves balances for posted vendor invoices on the purchase order
         * @request GET:/rest/purchase-orders/{id}/vendor-invoices/balances
         * @secure */
        this.getPostedVendorInvoiceBalances = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/vendor-invoices/balances`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceBalancesModel);
        /**
         * @description Retrieves purchase order details
         *
         * @tags Purchase Orders
         * @name GetPurchaseOrderDetails
         * @summary Retrieves purchase order details
         * @request GET:/rest/purchase-orders/{id}/details
         * @secure */
        this.getPurchaseOrderDetails = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/details`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PODetailPagedResponse);
        /**
         * @description Retrieves details of a purchase order in report format.
         *
         * @tags Purchase Orders
         * @name GetReportByKey
         * @summary Retrieves purchase order report
         * @request GET:/rest/purchase-orders/{id}/report
         * @secure */
        this.getReportByKey = (id, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/report`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReportGenerationServiceResponse);
        /**
         * @description Open a purchase order
         *
         * @tags Purchase Orders
         * @name OpenDocument
         * @summary Open a purchase order
         * @request POST:/rest/purchase-orders/{id}/open
         * @secure */
        this.openDocument = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/open`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Open purchase order detail lines
         *
         * @tags Purchase Orders
         * @name OpenDocumentLines
         * @summary Open purchase order lines
         * @request POST:/rest/purchase-orders/{id}/open/lines
         * @secure */
        this.openDocumentLines = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/open/lines`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Puts a purchase order from non-terminal statues to INUSE.
         *
         * @tags Purchase Orders
         * @name PutInUse1
         * @summary Puts a purchase order from non-terminal statues to INUSE
         * @request POST:/rest/purchase-orders/{id}/put-inuse
         * @secure */
        this.putInUse1 = (id, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/put-inuse`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Return a consolidated approved list of purchase orders limited to: * If the user is a System Admin then they have access to any PO * If the user is a VI User then: * They must have access to the vendor org specified on the PO * They must have access to the LE specified on the PO * Purchase Order is in an OPEN or CLOSED status. List is sorted by Purchase Order status (OPEN first / CLOSED last), then by Purchase Order number in descending order.
         *
         * @tags Purchase Orders
         * @name Search15
         * @summary Return a consolidated approved list of purchase orders.
         * @request POST:/rest/purchase-orders/search
         * @secure */
        this.search15 = (data, query, params = {}) => this.request({
            path: `/rest/purchase-orders/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderPagedResponse);
        /**
         * @description Send an email notification of a labor assignment change to a project's resource assigner and project manager. By default, the labor line item's project info will be used for notification. If the line does not contain a project, the project key must be included in the request. For the email to be sent, the 'PO Assignment Added/Modified' email notification template must be set to active and the person must be enabled to receive assignment notification emails
         *
         * @tags Purchase Orders
         * @name SendLaborAssignmentNotification
         * @summary Send email notification of a labor assignment change
         * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments/notify
         * @secure */
        this.sendLaborAssignmentNotification = (id, descriptorId, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments/notify`,
            method: "POST",
            query: query,
            secure: true,
            ...params,
        });
        /**
         * @description Submits a purchase order for approval.
         *
         * @tags Purchase Orders
         * @name Submit8
         * @summary Submit purchase order
         * @request POST:/rest/purchase-orders/{id}/submit
         * @secure */
        this.submit8 = (id, data, query, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/submit`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * No description
         *
         * @tags Purchase Orders
         * @name UpdateItemLine
         * @summary Updates an item line for a purchase order.  If updating an item line that is a modification for a previously approved PO line only a subset of fields are modifiable. See model for details.
         * @request PUT:/rest/purchase-orders/{id}/items/{lineId}
         * @secure */
        this.updateItemLine = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-orders/${id}/items/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates an existing purchase order mod given its key.
         *
         * @tags Purchase Orders
         * @name UpdateMod
         * @summary Updates a purchase order mod
         * @request PUT:/rest/purchase-orders/mods/{id}
         * @secure */
        this.updateMod = (id, data, params = {}) => this.request({
            path: `/rest/purchase-orders/mods/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.PurchaseOrders = PurchaseOrders;
