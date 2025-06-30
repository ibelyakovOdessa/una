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
exports.PurchaseRequisitions = void 0;
const http_client_1 = require("./http-client");
class PurchaseRequisitions extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieve attachments list for a given purchase requisition
         *
         * @tags Purchase Requisitions
         * @name GetAttachments7
         * @summary Retrieve purchase requisition attachments
         * @request GET:/rest/purchase-requisitions/{id}/attachments
         * @secure */
        this.getAttachments7 = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseRequisitionAttachmentListPagedResponse);
        /**
         * @description Add an attachment to a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name AddAttachment9
         * @summary Add attachment
         * @request POST:/rest/purchase-requisitions/{id}/attachments
         * @secure */
        this.addAttachment9 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Close a purchase requisition.
         *
         * @tags Purchase Requisitions
         * @name CloseDocument1
         * @summary Close a purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/close
         * @secure */
        this.closeDocument1 = (id, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/close`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Creates an original purchase requisition
         *
         * @tags Purchase Requisitions
         * @name Create34
         * @summary Creates a purchase requisition
         * @request POST:/rest/purchase-requisitions
         * @secure */
        this.create34 = (data, params = {}) => this.request({
            path: `/rest/purchase-requisitions`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase requisition expense details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
         *
         * @tags Purchase Requisitions
         * @name GetExpenseLinesForPr
         * @summary Retrieves purchase requisition expense details
         * @request GET:/rest/purchase-requisitions/{id}/expenses
         * @secure */
        this.getExpenseLinesForPr = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRExpenseLinePagedResponse);
        /**
         * @description Creates an expense line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name CreateExpenseLine1
         * @summary Creates an expense line for a purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/expenses
         * @secure */
        this.createExpenseLine1 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates an expense line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
         *
         * @tags Purchase Requisitions
         * @name CreateExpenseLineMod1
         * @summary Creates an expense line for a purchase requisition mod from an approved PR line on an original PR.
         * @request POST:/rest/purchase-requisitions/{id}/expenses/{descriptorId}/mod
         * @secure */
        this.createExpenseLineMod1 = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase requisition item details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
         *
         * @tags Purchase Requisitions
         * @name GetItemLinesForPr
         * @summary Retrieves purchase requisition item details
         * @request GET:/rest/purchase-requisitions/{id}/items
         * @secure */
        this.getItemLinesForPr = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRItemLinePagedResponse);
        /**
         * @description Creates an item line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name CreateItemLine1
         * @summary Creates an item line for a purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/items
         * @secure */
        this.createItemLine1 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates an item line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
         *
         * @tags Purchase Requisitions
         * @name CreateItemLineMod1
         * @summary Creates an item line for a purchase requisition mod from an approved PR line on an original PR.
         * @request POST:/rest/purchase-requisitions/{id}/items/{descriptorId}/mod
         * @secure */
        this.createItemLineMod1 = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves purchase requisition labor details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
         *
         * @tags Purchase Requisitions
         * @name GetLaborLinesForPr
         * @summary Retrieves purchase requisition labor details
         * @request GET:/rest/purchase-requisitions/{id}/labor
         * @secure */
        this.getLaborLinesForPr = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRLaborLinePagedResponse);
        /**
         * @description Creates a labor line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name CreateLaborLine1
         * @summary Creates a labor line for a purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/labor
         * @secure */
        this.createLaborLine1 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates a labor line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
         *
         * @tags Purchase Requisitions
         * @name CreateLaborLineMod1
         * @summary Creates a labor line for a purchase requisition mod from an approved PR line on an original PR.
         * @request POST:/rest/purchase-requisitions/{id}/labor/{descriptorId}/mod
         * @secure */
        this.createLaborLineMod1 = (id, descriptorId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor/${descriptorId}/mod`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates a purchase requisition mod from an original purchase requisition
         *
         * @tags Purchase Requisitions
         * @name CreateMod1
         * @summary Creates a purchase requisition mod
         * @request POST:/rest/purchase-requisitions/mods
         * @secure */
        this.createMod1 = (data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/mods`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a purchase requisition, filtered by optional 'type' query parameter. Defaults to CONSOLIDATED_APPROVED.
         *
         * @tags Purchase Requisitions
         * @name GetByKey35
         * @summary Retrieves a purchase requisition by its id
         * @request GET:/rest/purchase-requisitions/{id}
         * @secure */
        this.getByKey35 = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseRequisitionModel);
        /**
         * @description Updates an existing (original) purchase requisition given its key. Changes to the mod number field is ignored.
         *
         * @tags Purchase Requisitions
         * @name Update34
         * @summary Updates a purchase requisition
         * @request PUT:/rest/purchase-requisitions/{id}
         * @secure */
        this.update34 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing Purchase Requisition given its key.
         *
         * @tags Purchase Requisitions
         * @name Delete31
         * @summary Delete a Purchase Requisition
         * @request DELETE:/rest/purchase-requisitions/{id}
         * @secure */
        this.delete31 = (id, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieve an attachment for a given purchase requisition
         *
         * @tags Purchase Requisitions
         * @name GetAttachment10
         * @summary Retrieve a purchase requisition attachment
         * @request GET:/rest/purchase-requisitions/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment10 = (id, attachmentId, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/attachments/${attachmentId}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Updates attachment details on a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name UpdateAttachment1
         * @summary Update attachment
         * @request PUT:/rest/purchase-requisitions/{id}/attachments/{attachmentId}
         * @secure */
        this.updateAttachment1 = (id, attachmentId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/attachments/${attachmentId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an attachment from a given purchase requisition
         *
         * @tags Purchase Requisitions
         * @name DeleteAttachment9
         * @summary Delete a purchase requisition attachment
         * @request DELETE:/rest/purchase-requisitions/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment9 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase requisition expense line.
         *
         * @tags Purchase Requisitions
         * @name GetExpenseLineForPr
         * @summary Retrieves a purchase requisition expense line
         * @request GET:/rest/purchase-requisitions/{id}/expenses/{lineId}
         * @secure */
        this.getExpenseLineForPr = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRExpenseLineModel);
        /**
         * @description Updates an expense line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name UpdateExpenseLine1
         * @summary Updates an expense line for a purchase requisition
         * @request PUT:/rest/purchase-requisitions/{id}/expenses/{lineId}
         * @secure */
        this.updateExpenseLine1 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a purchase requisition expense line
         *
         * @tags Purchase Requisitions
         * @name DeleteExpenseLine1
         * @summary Delete a purchase requisition expense line
         * @request DELETE:/rest/purchase-requisitions/{id}/expenses/{lineId}
         * @secure */
        this.deleteExpenseLine1 = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/expenses/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase requisition item line.
         *
         * @tags Purchase Requisitions
         * @name GetItemLineForPr
         * @summary Retrieves a purchase requisition item line
         * @request GET:/rest/purchase-requisitions/{id}/items/{lineId}
         * @secure */
        this.getItemLineForPr = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRItemLineModel);
        /**
         * @description Updates an item line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name UpdateItemLine1
         * @summary Updates an item line for a purchase requisition
         * @request PUT:/rest/purchase-requisitions/{id}/items/{lineId}
         * @secure */
        this.updateItemLine1 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a purchase requisition item line
         *
         * @tags Purchase Requisitions
         * @name DeleteItemLine1
         * @summary Delete a purchase requisition item line
         * @request DELETE:/rest/purchase-requisitions/{id}/items/{lineId}
         * @secure */
        this.deleteItemLine1 = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/items/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase requisition labor line.
         *
         * @tags Purchase Requisitions
         * @name GetLaborLineForPr
         * @summary Retrieves a purchase requisition labor line
         * @request GET:/rest/purchase-requisitions/{id}/labor/{lineId}
         * @secure */
        this.getLaborLineForPr = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PRLaborLineModel);
        /**
         * @description Updates an labor line for a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name UpdateLaborLine1
         * @summary Updates an labor line for a purchase requisition
         * @request PUT:/rest/purchase-requisitions/{id}/labor/{lineId}
         * @secure */
        this.updateLaborLine1 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a purchase requisition labor line
         *
         * @tags Purchase Requisitions
         * @name DeleteLaborLine1
         * @summary Delete a purchase requisition labor line
         * @request DELETE:/rest/purchase-requisitions/{id}/labor/{lineId}
         * @secure */
        this.deleteLaborLine1 = (id, lineId, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/labor/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a purchase request's status history
         *
         * @tags Purchase Requisitions
         * @name GetHistoryByPrKey
         * @summary Retrieves a purchase request's status history
         * @request GET:/rest/purchase-requisitions/{id}/approvals/history
         * @secure */
        this.getHistoryByPrKey = (id, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/approvals/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchasingApprovalHistoryPagedResponse);
        /**
         * @description Open a purchase requisition
         *
         * @tags Purchase Requisitions
         * @name OpenDocument1
         * @summary Open a purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/open
         * @secure */
        this.openDocument1 = (id, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/open`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Puts a purchase requisition from non-terminal statues to INUSE.
         *
         * @tags Purchase Requisitions
         * @name PutInUse2
         * @summary Puts a purchase requisition from non-terminal statues to INUSE
         * @request POST:/rest/purchase-requisitions/{id}/put-inuse
         * @secure */
        this.putInUse2 = (id, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/put-inuse`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Return a list of purchase requisitions filtered by search criteria.
         *
         * @tags Purchase Requisitions
         * @name Search16
         * @summary Return a list of purchase requisitions.
         * @request POST:/rest/purchase-requisitions/search
         * @secure */
        this.search16 = (data, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseRequisitionPagedResponse);
        /**
         * @description Submits a purchase requisition for approval.
         *
         * @tags Purchase Requisitions
         * @name Submit9
         * @summary Submit purchase requisition
         * @request POST:/rest/purchase-requisitions/{id}/submit
         * @secure */
        this.submit9 = (id, data, query, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/submit`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates an existing purchase requisition mod given its key. Changes to the following fields are ignored on update: legal entity, owning org, project, task.
         *
         * @tags Purchase Requisitions
         * @name UpdateMod1
         * @summary Updates a purchase requisition mod
         * @request PUT:/rest/purchase-requisitions/mods/{id}
         * @secure */
        this.updateMod1 = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/mods/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates an existing (original) purchase requisition that is in a terminal status.    Terminal statuses are as follows: OPEN, CLOSED, CANCELED, APPROVED
         *
         * @tags Purchase Requisitions
         * @name UpdateTerminal
         * @summary Updates a purchase requisition that is in a terminal status
         * @request PUT:/rest/purchase-requisitions/{id}/terminal
         * @secure */
        this.updateTerminal = (id, data, params = {}) => this.request({
            path: `/rest/purchase-requisitions/${id}/terminal`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.PurchaseRequisitions = PurchaseRequisitions;
