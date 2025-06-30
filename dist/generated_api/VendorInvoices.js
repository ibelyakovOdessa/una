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
exports.VendorInvoices = void 0;
const http_client_1 = require("./http-client");
class VendorInvoices extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of attachments for a given vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetAttachments9
         * @summary Retrieves vendor invoice attachments
         * @request GET:/rest/vendor-invoices/{id}/attachments
         * @secure */
        this.getAttachments9 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Adds attachment to a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name AddAttachment12
         * @summary Adds vendor invoice attachment
         * @request POST:/rest/vendor-invoices/{id}/attachments
         * @secure */
        this.addAttachment12 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves matched expense items for the vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetMatchedExpenses
         * @summary Retrieves matched expense items for the vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/matched-expenses
         * @secure */
        this.getMatchedExpenses = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceMatchedExpensePagedResponse);
        /**
         * @description Add all unmatched expenses in the date range.
         *
         * @tags Vendor Invoices
         * @name AddUnmatchedExpense
         * @summary Add all unmatched expenses in the date range
         * @request POST:/rest/vendor-invoices/{id}/matched-expenses
         * @secure */
        this.addUnmatchedExpense = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-expenses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves matched items for the vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetMatchedItems
         * @summary Retrieves matched items for the vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/matched-items
         * @secure */
        this.getMatchedItems = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceMatchedItemPagedResponse);
        /**
         * @description Add all unmatched items in the date range.
         *
         * @tags Vendor Invoices
         * @name AddUnmatchedItems
         * @summary Add all unmatched items in the date range
         * @request POST:/rest/vendor-invoices/{id}/matched-items
         * @secure */
        this.addUnmatchedItems = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves matched labor items for the vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetMatchedLabor
         * @summary Retrieves matched labor items for the vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/matched-labor
         * @secure */
        this.getMatchedLabor = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceMatchedLaborPagedResponse);
        /**
         * @description Add all unmatched labor in the date range.
         *
         * @tags Vendor Invoices
         * @name AddUnmatchedLabor
         * @summary Add all unmatched labor in the date range
         * @request POST:/rest/vendor-invoices/{id}/matched-labor
         * @secure */
        this.addUnmatchedLabor = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-labor`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Search for a list of purchase orders filtered by provided criteria
         *
         * @tags Vendor Invoices
         * @name AvailablePurchaseOrders1
         * @summary Search for purchase orders
         * @request POST:/rest/vendor-invoices/legal-entities/{id}/purchase-orders
         * @secure */
        this.availablePurchaseOrders1 = (id, data, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/purchase-orders`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.BasePurchasingDocumentPagedResponse);
        /**
         * @description Retrieves PO funding cap adjustments for a VI that is matched to a PO.
         *
         * @tags Vendor Invoices
         * @name GetPoFundingCapAdj
         * @summary Retrieves PO funding cap adjustments for a VI that is matched to a PO
         * @request GET:/rest/vendor-invoices/{id}/funding-cap-adj
         * @secure */
        this.getPoFundingCapAdj = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/funding-cap-adj`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFCAElementPagedResponse);
        /**
         * @description First removes any existing funding cap adjustments and then calculates the difference between the amount from the aggregate approved PO and its Mods and the aggregate VI amount posted against the PO (including the amounts from the current VI).
         *
         * @tags Vendor Invoices
         * @name CalculatePoFundingCapAdj
         * @summary If a VI is matched to a PO, calculates the PO funding cap adjustments
         * @request POST:/rest/vendor-invoices/{id}/funding-cap-adj
         * @secure */
        this.calculatePoFundingCapAdj = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/funding-cap-adj`,
            method: "POST",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFCAElementPagedResponse);
        /**
         * @description Create a new vendor invoice.
         *
         * @tags Vendor Invoices
         * @name Create43
         * @summary Creates vendor invoice
         * @request POST:/rest/vendor-invoices
         * @secure */
        this.create43 = (data, params = {}) => this.request({
            path: `/rest/vendor-invoices`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of expense details for a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetExpenses
         * @summary Retrieves vendor invoice expenses
         * @request GET:/rest/vendor-invoices/{id}/expenses
         * @secure */
        this.getExpenses = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceExpensePagedResponse);
        /**
         * @description Creates a expense detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name CreateExpenseLine2
         * @summary Creates a expense detail line for an vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/expenses
         * @secure */
        this.createExpenseLine2 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/expenses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of configured vendor invoice formats.
         *
         * @tags Vendor Invoices
         * @name GetFormats
         * @summary Retrieves vendor invoice formats
         * @request GET:/rest/vendor-invoices/formats
         * @secure */
        this.getFormats = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFormatPagedResponse);
        /**
         * @description Add a new vendor invoice format.
         *
         * @tags Vendor Invoices
         * @name CreateFormat
         * @summary Create a vendor invoice format
         * @request POST:/rest/vendor-invoices/formats
         * @secure */
        this.createFormat = (data, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves configured vendor invoice format sections for an existing format.
         *
         * @tags Vendor Invoices
         * @name GetFormatSections
         * @summary Retrieves vendor invoice format sections
         * @request GET:/rest/vendor-invoices/formats/{id}/sections
         * @secure */
        this.getFormatSections = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/sections`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFormatSectionModel);
        /**
         * @description Add a new vendor invoice format section to an existing format.
         *
         * @tags Vendor Invoices
         * @name CreateFormatSection
         * @summary Create a vendor invoice format section
         * @request POST:/rest/vendor-invoices/formats/{id}/sections
         * @secure */
        this.createFormatSection = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/sections`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of item details for a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetItems1
         * @summary Retrieves vendor invoice item details
         * @request GET:/rest/vendor-invoices/{id}/items
         * @secure */
        this.getItems1 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceItemPagedResponse);
        /**
         * @description Creates a item detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name CreateItemLine2
         * @summary Creates a item detail line for an vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/items
         * @secure */
        this.createItemLine2 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of labor details for a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetLabor
         * @summary Retrieves vendor invoice labor details
         * @request GET:/rest/vendor-invoices/{id}/labor
         * @secure */
        this.getLabor = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceLaborPagedResponse);
        /**
         * @description Creates a labor detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name CreateLaborLine2
         * @summary Creates a labor detail line for an vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/labor
         * @secure */
        this.createLaborLine2 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/labor`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Defer matched expenses for a given set of expense data allocation keys.
         *
         * @tags Vendor Invoices
         * @name DeferMatchedExpenses
         * @summary Defer matched expenses
         * @request POST:/rest/vendor-invoices/{id}/matched-expenses/defer
         * @secure */
        this.deferMatchedExpenses = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-expenses/defer`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Defer matched items for a given set of receiving item keys.
         *
         * @tags Vendor Invoices
         * @name DeferMatchedItems
         * @summary Defer matched items
         * @request POST:/rest/vendor-invoices/{id}/matched-items/defer
         * @secure */
        this.deferMatchedItems = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-items/defer`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Defer matched labor for a given set of timeslips.
         *
         * @tags Vendor Invoices
         * @name DeferMatchedLabor
         * @summary Defer matched labor
         * @request POST:/rest/vendor-invoices/{id}/matched-labor/defer
         * @secure */
        this.deferMatchedLabor = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/matched-labor/defer`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves details of a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetByKey40
         * @summary Retrieves vendor invoice
         * @request GET:/rest/vendor-invoices/{id}
         * @secure */
        this.getByKey40 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceSummaryModel);
        /**
         * @description Updates a vendor invoice by its id.
         *
         * @tags Vendor Invoices
         * @name Update42
         * @summary Updates vendor invoice
         * @request PUT:/rest/vendor-invoices/{id}
         * @secure */
        this.update42 = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name Delete38
         * @summary Deletes vendor invoice
         * @request DELETE:/rest/vendor-invoices/{id}
         * @secure */
        this.delete38 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an attachment for a given vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetAttachment13
         * @summary Retrieves vendor invoice attachment
         * @request GET:/rest/vendor-invoices/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment13 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Delete an attachment for on given vendor invoice.
         *
         * @tags Vendor Invoices
         * @name DeleteAttachment12
         * @summary Delete a vendor invoice attachment
         * @request DELETE:/rest/vendor-invoices/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment12 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a vendor invoice expense line
         *
         * @tags Vendor Invoices
         * @name GetExpenseLine
         * @summary Retrieves a single vendor invoice expense detail line
         * @request GET:/rest/vendor-invoices/{id}/expenses/{lineId}
         * @secure */
        this.getExpenseLine = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/expenses/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceExpenseModel);
        /**
         * @description Updates an expense detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name UpdateExpenseLine2
         * @summary Updates a expense detail line for a vendor invoice
         * @request PUT:/rest/vendor-invoices/{id}/expenses/{lineId}
         * @secure */
        this.updateExpenseLine2 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/expenses/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a vendor invoice expense detail line
         *
         * @tags Vendor Invoices
         * @name DeleteExpenseLine2
         * @summary Delete a vendor invoice expense detail line
         * @request DELETE:/rest/vendor-invoices/{id}/expenses/{lineId}
         * @secure */
        this.deleteExpenseLine2 = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/expenses/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves configured vendor invoice format for the given key.
         *
         * @tags Vendor Invoices
         * @name GetFormatByKey
         * @summary Retrieves vendor invoice format
         * @request GET:/rest/vendor-invoices/formats/{id}
         * @secure */
        this.getFormatByKey = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFormatModel);
        /**
         * @description Modifies an existing vendor invoice format.
         *
         * @tags Vendor Invoices
         * @name UpdateFormat
         * @summary Update a vendor invoice format
         * @request PUT:/rest/vendor-invoices/formats/{id}
         * @secure */
        this.updateFormat = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a vendor invoice format for the given key.
         *
         * @tags Vendor Invoices
         * @name DeleteFormat
         * @summary Delete a vendor invoice format
         * @request DELETE:/rest/vendor-invoices/formats/{id}
         * @secure */
        this.deleteFormat = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves configured vendor invoice format section for an existing format.
         *
         * @tags Vendor Invoices
         * @name GetFormatSectionByKey
         * @summary Retrieves vendor invoice format section
         * @request GET:/rest/vendor-invoices/formats/{id}/sections/{sectionId}
         * @secure */
        this.getFormatSectionByKey = (id, sectionId, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/sections/${sectionId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceFormatSectionModel);
        /**
         * @description Modifies an existing vendor invoice format section for an existing format.
         *
         * @tags Vendor Invoices
         * @name UpdateFormatSection
         * @summary Update a vendor invoice format section
         * @request PUT:/rest/vendor-invoices/formats/{id}/sections/{sectionId}
         * @secure */
        this.updateFormatSection = (id, sectionId, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/sections/${sectionId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a vendor invoice format section from an existing format.
         *
         * @tags Vendor Invoices
         * @name DeleteFormatSection
         * @summary Delete a vendor invoice format section
         * @request DELETE:/rest/vendor-invoices/formats/{id}/sections/{sectionId}
         * @secure */
        this.deleteFormatSection = (id, sectionId, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/sections/${sectionId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a funding cap adjustment from the given vendor invoice
         *
         * @tags Vendor Invoices
         * @name DeleteFundingCapAdjustment
         * @summary Delete a funding cap adjustment
         * @request DELETE:/rest/vendor-invoices/{id}/funding-cap-adj/{adjId}
         * @secure */
        this.deleteFundingCapAdjustment = (id, adjId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/funding-cap-adj/${adjId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a vendor invoice item line
         *
         * @tags Vendor Invoices
         * @name GetItemLine
         * @summary Retrieves a single vendor invoice item detail line
         * @request GET:/rest/vendor-invoices/{id}/items/{lineId}
         * @secure */
        this.getItemLine = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/items/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceItemModel);
        /**
         * @description Updates an item detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name UpdateItemLine2
         * @summary Updates a item detail line for a vendor invoice
         * @request PUT:/rest/vendor-invoices/{id}/items/{lineId}
         * @secure */
        this.updateItemLine2 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/items/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a vendor invoice item detail line
         *
         * @tags Vendor Invoices
         * @name DeleteItemLine2
         * @summary Delete a vendor invoice item detail line
         * @request DELETE:/rest/vendor-invoices/{id}/items/{lineId}
         * @secure */
        this.deleteItemLine2 = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/items/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a vendor invoice labor line
         *
         * @tags Vendor Invoices
         * @name GetLaborLine
         * @summary Retrieves a single vendor invoice labor detail line
         * @request GET:/rest/vendor-invoices/{id}/labor/{lineId}
         * @secure */
        this.getLaborLine = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/labor/${lineId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceLaborModel);
        /**
         * @description Updates an labor detail line for a vendor invoice
         *
         * @tags Vendor Invoices
         * @name UpdateLaborLine2
         * @summary Updates a labor detail line for a vendor invoice
         * @request PUT:/rest/vendor-invoices/{id}/labor/{lineId}
         * @secure */
        this.updateLaborLine2 = (id, lineId, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/labor/${lineId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a vendor invoice labor detail line
         *
         * @tags Vendor Invoices
         * @name DeleteLaborLine2
         * @summary Delete a vendor invoice labor detail line
         * @request DELETE:/rest/vendor-invoices/{id}/labor/{lineId}
         * @secure */
        this.deleteLaborLine2 = (id, lineId, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/labor/${lineId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of accounts whose account code or description contains the given phrase.
         *
         * @tags Vendor Invoices
         * @name GetAccounts3
         * @summary Retrieves a list of liability accounts
         * @request GET:/rest/vendor-invoices/accounts
         * @secure */
        this.getAccounts3 = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountPagedResponse);
        /**
         * @description Preview Vendor Invoices that may be generated from PO matched transactions
         *
         * @tags Vendor Invoices
         * @name GetAvailableVIsFromMatchedTransactions
         * @summary Preview Vendor Invoices that may be generated from PO matched transactions
         * @request POST:/rest/vendor-invoices/matched-transactions/available
         * @secure */
        this.getAvailableVIsFromMatchedTransactions = (data, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/matched-transactions/available`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.VIMatchedSummaryPagedResponse);
        /**
         * @description Retrieves details of multiple vendor invoices in report format.
         *
         * @tags Vendor Invoices
         * @name GetBulkReportsByKey
         * @summary Retrieves multiple vendor invoice reports
         * @request POST:/rest/vendor-invoices/report
         * @secure */
        this.getBulkReportsByKey = (data, params = {}) => this.request({
            path: `/rest/vendor-invoices/report`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ReportGenerationServiceResponse);
        /**
         * @description Retrieves purchase order balances on a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetCurrentBalancesByVendorInvoiceKey
         * @summary Retrieves vendor invoice purchase order balances
         * @request GET:/rest/vendor-invoices/{id}/purchase-order/balances
         * @secure */
        this.getCurrentBalancesByVendorInvoiceKey = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/purchase-order/balances`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PurchaseOrderBalancesModel);
        /**
         * @description Retrieves a paged list of accounts associated with the given LE, organization key and expense type key, if provided, whose account code or description contains the given name
         *
         * @tags Vendor Invoices
         * @name GetExpenseAccounts
         * @summary Retrieves a list of expense accounts
         * @request GET:/rest/vendor-invoices/accounts/expense
         * @secure */
        this.getExpenseAccounts = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/accounts/expense`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountExpenseTypePagedResponse);
        /**
         * @description Retrieves a paged list of expense line projects.
         *
         * @tags Vendor Invoices
         * @name GetExpenseProjects
         * @summary Retrieves available expense line projects.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/expense
         * @secure */
        this.getExpenseProjects = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/expense`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceExpenseProjectPagedResponse);
        /**
         * @description Retrieves a paged list of expense line tasks.
         *
         * @tags Vendor Invoices
         * @name GetExpenseTasks
         * @summary Retrieves available expense line tasks.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/expense
         * @secure */
        this.getExpenseTasks = (id, projectId, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/expense`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceExpenseTaskPagedResponse);
        /**
         * @description Retrieves a paged list of expense types.
         *
         * @tags Vendor Invoices
         * @name GetExpenseTypes2
         * @summary Retrieves available expense types.
         * @request GET:/rest/vendor-invoices/expense-types
         * @secure */
        this.getExpenseTypes2 = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/expense-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseTypePagedResponse);
        /**
         * @description Retrieves configured vendor invoice format section total groups for an existing format.
         *
         * @tags Vendor Invoices
         * @name GetFormatSectionTotalGroups
         * @summary Retrieves vendor invoice format section total groups
         * @request GET:/rest/vendor-invoices/formats/{id}/section-total-groups
         * @secure */
        this.getFormatSectionTotalGroups = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/section-total-groups`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceSectionTotalGroupsModel);
        /**
         * @description Modifies vendor invoice format section total groups for an existing format.
         *
         * @tags Vendor Invoices
         * @name UpdateFormatSectionTotalGroups
         * @summary Update vendor invoice format section total groups
         * @request PUT:/rest/vendor-invoices/formats/{id}/section-total-groups
         * @secure */
        this.updateFormatSectionTotalGroups = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/formats/${id}/section-total-groups`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of accounts associated with the given LE, organization key and item key, if provided, whose account code or description contains the given name
         *
         * @tags Vendor Invoices
         * @name GetItemAccounts
         * @summary Retrieves a list of item accounts
         * @request GET:/rest/vendor-invoices/accounts/items
         * @secure */
        this.getItemAccounts = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/accounts/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountPagedResponse);
        /**
         * @description Retrieves a paged list of item line projects.
         *
         * @tags Vendor Invoices
         * @name GetItemProjects
         * @summary Retrieves available item line projects.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/item
         * @secure */
        this.getItemProjects = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/item`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceItemProjectPagedResponse);
        /**
         * @description Retrieves a paged list of item line tasks.
         *
         * @tags Vendor Invoices
         * @name GetItemTasks
         * @summary Retrieves available item line tasks.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/item
         * @secure */
        this.getItemTasks = (id, projectId, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/item`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceTaskPagedResponse);
        /**
         * @description Retrieves a paged list of items.
         *
         * @tags Vendor Invoices
         * @name GetItems2
         * @summary Retrieves available items.
         * @request GET:/rest/vendor-invoices/items
         * @secure */
        this.getItems2 = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves a paged list of units of measure for an item.
         *
         * @tags Vendor Invoices
         * @name GetItemsUoMs
         * @summary Retrieves available units of measure for an item.
         * @request GET:/rest/vendor-invoices/items/{id}/uoms
         * @secure */
        this.getItemsUoMs = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/items/${id}/uoms`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UnitOfMeasurePagedResponse);
        /**
         * @description Retrieves a paged list of accounts associated with the given LE and organization key whose account code or description contains the given name
         *
         * @tags Vendor Invoices
         * @name GetLaborAccounts
         * @summary Retrieves a list of labor accounts
         * @request GET:/rest/vendor-invoices/accounts/labor
         * @secure */
        this.getLaborAccounts = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/accounts/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountPagedResponse);
        /**
         * @description Retrieves a paged list of labor line projects.
         *
         * @tags Vendor Invoices
         * @name GetLaborProjects
         * @summary Retrieves available labor line projects.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/labor
         * @secure */
        this.getLaborProjects = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceLaborProjectPagedResponse);
        /**
         * @description Retrieves a paged list of labor line tasks.
         *
         * @tags Vendor Invoices
         * @name GetLaborTasks
         * @summary Retrieves available labor line tasks.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/labor
         * @secure */
        this.getLaborTasks = (id, projectId, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/labor`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceTaskPagedResponse);
        /**
         * @description Retrieves a paged list of legal entities.
         *
         * @tags Vendor Invoices
         * @name GetLegalEntities3
         * @summary Retrieves available legal entities.
         * @request GET:/rest/vendor-invoices/legal-entities
         * @secure */
        this.getLegalEntities3 = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves account payable defaults for a legal entity.
         *
         * @tags Vendor Invoices
         * @name GetLegalEntityApDefaults
         * @summary Retrieves default AP Account and AP Org for a legal entity.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/ap-defaults
         * @secure */
        this.getLegalEntityApDefaults = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/ap-defaults`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LegalEntityAPDefaultsModel);
        /**
         * @description Retrieves a paged list of fiscal periods tied to the legal entity.
         *
         * @tags Vendor Invoices
         * @name GetLegalEntityFiscalPeriods1
         * @summary Retrieves legal entity fiscal periods.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/fiscal-periods
         * @secure */
        this.getLegalEntityFiscalPeriods1 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/fiscal-periods`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FiscalPeriodPagedResponse);
        /**
         * @description Retrieves a paged list of organizations tied to the legal entity.
         *
         * @tags Vendor Invoices
         * @name GetLegalEntityOrgs1
         * @summary Retrieves legal entity organizations.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/organizations
         * @secure */
        this.getLegalEntityOrgs1 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Retrieves balances for posted vendor invoices on a vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetPostedVendorInvoiceBalances1
         * @summary Retrieves vendor invoice balances
         * @request GET:/rest/vendor-invoices/{id}/balances
         * @secure */
        this.getPostedVendorInvoiceBalances1 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/balances`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoiceBalancesModel);
        /**
         * @description Retrieves a paged list of project types.
         *
         * @tags Vendor Invoices
         * @name GetProjectTypes2
         * @summary Retrieves available project types.
         * @request GET:/rest/vendor-invoices/project-types
         * @secure */
        this.getProjectTypes2 = (query, params = {}) => this.request({
            path: `/rest/vendor-invoices/project-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypeExpenseTypePagedResponse);
        /**
         * @description Retrieves details of a vendor invoice in report format.
         *
         * @tags Vendor Invoices
         * @name GetReportByKey1
         * @summary Retrieves vendor invoice report
         * @request GET:/rest/vendor-invoices/{id}/report
         * @secure */
        this.getReportByKey1 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/report`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ReportGenerationServiceResponse);
        /**
         * @description Retrieves a paged list of status history for a given vendor invoice.
         *
         * @tags Vendor Invoices
         * @name GetStatusHistory7
         * @summary Retrieves vendor invoice status history
         * @request GET:/rest/vendor-invoices/{id}/history
         * @secure */
        this.getStatusHistory7 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentStatusHistoryPagedResponse);
        /**
         * @description Retrieves a paged list of vendors.
         *
         * @tags Vendor Invoices
         * @name GetVendors2
         * @summary Retrieves available vendors.
         * @request GET:/rest/vendor-invoices/legal-entities/{id}/vendors
         * @secure */
        this.getVendors2 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/legal-entities/${id}/vendors`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VIVendorModelPagedResponse);
        /**
         * @description Posts a vendor invoice to the general ledger.
         *
         * @tags Vendor Invoices
         * @name Post4
         * @summary Posts vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/post
         * @secure */
        this.post4 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/post`,
            method: "POST",
            query: query,
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of vendor invoices filtered by the search criteria.
         *
         * @tags Vendor Invoices
         * @name Search22
         * @summary Retrieves vendor invoices
         * @request POST:/rest/vendor-invoices/search
         * @secure */
        this.search22 = (data, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.VendorInvoicePagedResponse);
        /**
         * @description Submits a vendor invoice for approval.
         *
         * @tags Vendor Invoices
         * @name Submit11
         * @summary Submits vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/submit
         * @secure */
        this.submit11 = (id, data, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/submit`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Validates a vendor invoice for edit.
         *
         * @tags Vendor Invoices
         * @name Validate6
         * @summary Save validation for a vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/validate
         * @secure */
        this.validate6 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a vendor invoice for posting to the general ledger.
         *
         * @tags Vendor Invoices
         * @name ValidatePost3
         * @summary Post validation for a vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/post/validate
         * @secure */
        this.validatePost3 = (id, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/post/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a vendor invoice for submit.
         *
         * @tags Vendor Invoices
         * @name ValidateSubmit3
         * @summary Submit validation for a vendor invoice
         * @request GET:/rest/vendor-invoices/{id}/submit/validate
         * @secure */
        this.validateSubmit3 = (id, query, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/submit/validate`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Voids a posted vendor invoice.
         *
         * @tags Vendor Invoices
         * @name VoidInvoice
         * @summary Voids vendor invoice
         * @request POST:/rest/vendor-invoices/{id}/void
         * @secure */
        this.voidInvoice = (id, data, params = {}) => this.request({
            path: `/rest/vendor-invoices/${id}/void`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.VendorInvoices = VendorInvoices;
