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
  CreatedResponseModel,
  ErrorResponse,
  FinancialDocumentValidationModel,
  JournalEntryExpenseDetailCreateModel,
  JournalEntryExpenseDetailPagedResponse,
  JournalEntryItemDetailCreateModel,
  JournalEntryItemDetailPagedResponse,
  JournalEntryPagedResponse,
  JournalEntrySearchModel,
  JournalEntrySummaryCreateModel,
  JournalEntrySummaryModel,
  JournalEntryVoidModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class JournalEntries<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Create a new journal entry.
   *
   * @tags Journal Entries
   * @name Create16
   * @summary Creates journal entry
   * @request POST:/rest/journal-entries
   * @secure */
  create16 = (data: JournalEntrySummaryCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/journal-entries`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a paged list of expense details for a given journal entry.
   *
   * @tags Journal Entries
   * @name ExpenseDetailsForJournalEntry
   * @summary Retrieves journal entry expenses
   * @request GET:/rest/journal-entries/{id}/expenses
   * @secure */
  expenseDetailsForJournalEntry = (
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
    this.request<JournalEntryExpenseDetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      JournalEntryExpenseDetailPagedResponse,
    ) as JournalEntryExpenseDetailPagedResponse;

  /**
   * @description Creates a journal entry expense detail for provided journal entry ID.
   *
   * @tags Journal Entries
   * @name CreateExpenseDetail
   * @summary Creates a journal entry expense detail
   * @request POST:/rest/journal-entries/{id}/expenses
   * @secure */
  createExpenseDetail = (id: number, data: JournalEntryExpenseDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/expenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a paged list of journal entry items for a given journal entry.
   *
   * @tags Journal Entries
   * @name ItemDetailsForJournalEntry
   * @summary Retrieves journal entry items
   * @request GET:/rest/journal-entries/{id}/items
   * @secure */
  itemDetailsForJournalEntry = (
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
    this.request<JournalEntryItemDetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      JournalEntryItemDetailPagedResponse,
    ) as JournalEntryItemDetailPagedResponse;

  /**
   * @description Creates a journal entry item detail for provided journal entry ID.
   *
   * @tags Journal Entries
   * @name CreateItemDetail
   * @summary Creates a journal entry item detail
   * @request POST:/rest/journal-entries/{id}/items
   * @secure */
  createItemDetail = (id: number, data: JournalEntryItemDetailCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves details of a journal entry.
   *
   * @tags Journal Entries
   * @name GetByKey18
   * @summary Retrieves a journal entry
   * @request GET:/rest/journal-entries/{id}
   * @secure */
  getByKey18 = (id: number, params: RequestParams = {}) =>
    this.request<JournalEntrySummaryModel, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      JournalEntrySummaryModel,
    ) as JournalEntrySummaryModel;

  /**
   * @description Delete a new journal entry.
   *
   * @tags Journal Entries
   * @name Delete15
   * @summary Delete journal entry
   * @request DELETE:/rest/journal-entries/{id}
   * @secure */
  delete15 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  post3 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
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
  putInUse = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  search8 = (
    data: JournalEntrySearchModel,
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
    this.request<JournalEntryPagedResponse, ErrorResponse>(
      {
        path: `/rest/journal-entries/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      JournalEntryPagedResponse,
    ) as JournalEntryPagedResponse;

  /**
   * @description Submits a journal entry for posting.
   *
   * @tags Journal Entries
   * @name Submit4
   * @summary Submits journal entry
   * @request POST:/rest/journal-entries/{id}/submit
   * @secure */
  submit4 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
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
  validatePost2 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/post/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Validates a journal entry for submission.
   *
   * @tags Journal Entries
   * @name ValidateSubmit2
   * @summary Submit validation for a journal entry
   * @request GET:/rest/journal-entries/{id}/submit/validate
   * @secure */
  validateSubmit2 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/journal-entries/${id}/submit/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    ) as FinancialDocumentValidationModel;

  /**
   * @description Voids a posted journal entry.
   *
   * @tags Journal Entries
   * @name VoidJournalEntry
   * @summary Voids journal entry
   * @request POST:/rest/journal-entries/{id}/void
   * @secure */
  voidJournalEntry = (id: number, data: JournalEntryVoidModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/journal-entries/${id}/void`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
