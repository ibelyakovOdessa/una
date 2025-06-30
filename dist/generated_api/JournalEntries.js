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
exports.JournalEntries = void 0;
const http_client_1 = require("./http-client");
class JournalEntries extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Create a new journal entry.
         *
         * @tags Journal Entries
         * @name Create16
         * @summary Creates journal entry
         * @request POST:/rest/journal-entries
         * @secure */
        this.create16 = (data, params = {}) => this.request({
            path: `/rest/journal-entries`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of expense details for a given journal entry.
         *
         * @tags Journal Entries
         * @name ExpenseDetailsForJournalEntry
         * @summary Retrieves journal entry expenses
         * @request GET:/rest/journal-entries/{id}/expenses
         * @secure */
        this.expenseDetailsForJournalEntry = (id, query, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/expenses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.JournalEntryExpenseDetailPagedResponse);
        /**
         * @description Creates a journal entry expense detail for provided journal entry ID.
         *
         * @tags Journal Entries
         * @name CreateExpenseDetail
         * @summary Creates a journal entry expense detail
         * @request POST:/rest/journal-entries/{id}/expenses
         * @secure */
        this.createExpenseDetail = (id, data, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/expenses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of journal entry items for a given journal entry.
         *
         * @tags Journal Entries
         * @name ItemDetailsForJournalEntry
         * @summary Retrieves journal entry items
         * @request GET:/rest/journal-entries/{id}/items
         * @secure */
        this.itemDetailsForJournalEntry = (id, query, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.JournalEntryItemDetailPagedResponse);
        /**
         * @description Creates a journal entry item detail for provided journal entry ID.
         *
         * @tags Journal Entries
         * @name CreateItemDetail
         * @summary Creates a journal entry item detail
         * @request POST:/rest/journal-entries/{id}/items
         * @secure */
        this.createItemDetail = (id, data, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a journal entry.
         *
         * @tags Journal Entries
         * @name GetByKey18
         * @summary Retrieves a journal entry
         * @request GET:/rest/journal-entries/{id}
         * @secure */
        this.getByKey18 = (id, params = {}) => this.request({
            path: `/rest/journal-entries/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.JournalEntrySummaryModel);
        /**
         * @description Delete a new journal entry.
         *
         * @tags Journal Entries
         * @name Delete15
         * @summary Delete journal entry
         * @request DELETE:/rest/journal-entries/{id}
         * @secure */
        this.delete15 = (id, params = {}) => this.request({
            path: `/rest/journal-entries/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Posts a journal entry to the general ledger.
         *
         * @tags Journal Entries
         * @name Post3
         * @summary Posts journal entry
         * @request POST:/rest/journal-entries/{id}/post
         * @secure */
        this.post3 = (id, query, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/post`,
            method: "POST",
            query: query,
            secure: true,
            ...params,
        });
        /**
         * @description Puts a journal entry from SUBMITTED status to INUSE.
         *
         * @tags Journal Entries
         * @name PutInUse
         * @summary Puts a journal entry from SUBMITTED status to INUSE
         * @request POST:/rest/journal-entries/{id}/put-inuse
         * @secure */
        this.putInUse = (id, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/put-inuse`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of journal entries filtered by the search criteria.
         *
         * @tags Journal Entries
         * @name Search8
         * @summary Retrieves journal entries
         * @request POST:/rest/journal-entries/search
         * @secure */
        this.search8 = (data, query, params = {}) => this.request({
            path: `/rest/journal-entries/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.JournalEntryPagedResponse);
        /**
         * @description Submits a journal entry for posting.
         *
         * @tags Journal Entries
         * @name Submit4
         * @summary Submits journal entry
         * @request POST:/rest/journal-entries/{id}/submit
         * @secure */
        this.submit4 = (id, query, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/submit`,
            method: "POST",
            query: query,
            secure: true,
            ...params,
        });
        /**
         * @description Validates a journal entry for posting to the general ledger.
         *
         * @tags Journal Entries
         * @name ValidatePost2
         * @summary Post validation for a journal entry
         * @request GET:/rest/journal-entries/{id}/post/validate
         * @secure */
        this.validatePost2 = (id, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/post/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Validates a journal entry for submission.
         *
         * @tags Journal Entries
         * @name ValidateSubmit2
         * @summary Submit validation for a journal entry
         * @request GET:/rest/journal-entries/{id}/submit/validate
         * @secure */
        this.validateSubmit2 = (id, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/submit/validate`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FinancialDocumentValidationModel);
        /**
         * @description Voids a posted journal entry.
         *
         * @tags Journal Entries
         * @name VoidJournalEntry
         * @summary Voids journal entry
         * @request POST:/rest/journal-entries/{id}/void
         * @secure */
        this.voidJournalEntry = (id, data, params = {}) => this.request({
            path: `/rest/journal-entries/${id}/void`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.JournalEntries = JournalEntries;
