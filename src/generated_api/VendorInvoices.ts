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
  AccountExpenseTypePagedResponse,
  AccountPagedResponse,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  BasePurchasingDocumentPagedResponse,
  BasePurchasingDocumentSearchModel,
  CreatedResponseModel,
  DateRangeModel,
  ErrorResponse,
  ExpenseTypePagedResponse,
  FinancialDocumentStatusHistoryPagedResponse,
  FinancialDocumentValidationModel,
  FiscalPeriodPagedResponse,
  GetMatchedExpensesParamsSortByEnum,
  GetMatchedItemsParamsSortByEnum,
  GetMatchedLaborParamsSortByEnum,
  KeyNameCodeModelPagedResponse,
  KeysModel,
  LegalEntityAPDefaultsModel,
  OrganizationPagedResponse,
  ProjectTypeExpenseTypePagedResponse,
  PurchaseOrderBalancesModel,
  ReportGenerationServiceResponse,
  UnitOfMeasurePagedResponse,
  VIMatchedSummaryPagedResponse,
  VIMatchedSummarySearchModel,
  VIVendorModelPagedResponse,
  VendorInvoiceBalancesModel,
  VendorInvoiceExpenseCreateModel,
  VendorInvoiceExpenseModel,
  VendorInvoiceExpensePagedResponse,
  VendorInvoiceExpenseProjectPagedResponse,
  VendorInvoiceExpenseTaskPagedResponse,
  VendorInvoiceFCAElementPagedResponse,
  VendorInvoiceFormatModel,
  VendorInvoiceFormatPagedResponse,
  VendorInvoiceFormatSectionModel,
  VendorInvoiceItemCreateModel,
  VendorInvoiceItemModel,
  VendorInvoiceItemPagedResponse,
  VendorInvoiceItemProjectPagedResponse,
  VendorInvoiceLaborCreateModel,
  VendorInvoiceLaborModel,
  VendorInvoiceLaborPagedResponse,
  VendorInvoiceLaborProjectPagedResponse,
  VendorInvoiceMatchedExpensePagedResponse,
  VendorInvoiceMatchedItemPagedResponse,
  VendorInvoiceMatchedLaborPagedResponse,
  VendorInvoicePagedResponse,
  VendorInvoiceSearchModel,
  VendorInvoiceSectionTotalGroupsModel,
  VendorInvoiceSubmitModel,
  VendorInvoiceSummaryCreateModel,
  VendorInvoiceSummaryModel,
  VendorInvoiceTaskPagedResponse,
  VendorInvoiceVoidModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VendorInvoices<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of attachments for a given vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetAttachments9
   * @summary Retrieves vendor invoice attachments
   * @request GET:/rest/vendor-invoices/{id}/attachments
   * @secure */
  getAttachments9 = (
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
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    );

  /**
   * @description Adds attachment to a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name AddAttachment12
   * @summary Adds vendor invoice attachment
   * @request POST:/rest/vendor-invoices/{id}/attachments
   * @secure */
  addAttachment12 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves matched expense items for the vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetMatchedExpenses
   * @summary Retrieves matched expense items for the vendor invoice
   * @request GET:/rest/vendor-invoices/{id}/matched-expenses
   * @secure */
  getMatchedExpenses = (
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
      /** @default "PERSON" */
      sortBy?: GetMatchedExpensesParamsSortByEnum;
      /** @default false */
      sortDescending?: boolean;
      /** @format int32 */
      lineId?: number;
      personName?: string;
      projectCode?: string;
      expenseType?: string;
      /**
       * Include results with expense date >= beginDate. beginDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      beginDate?: string;
      /**
       * Include results with expense date <= endDate. endDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceMatchedExpensePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/matched-expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceMatchedExpensePagedResponse,
    );

  /**
   * @description Add all unmatched expenses in the date range.
   *
   * @tags Vendor Invoices
   * @name AddUnmatchedExpense
   * @summary Add all unmatched expenses in the date range
   * @request POST:/rest/vendor-invoices/{id}/matched-expenses
   * @secure */
  addUnmatchedExpense = (id: number, data: DateRangeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-expenses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getMatchedItems = (
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
      /** @default "PO_LINE_NUM" */
      sortBy?: GetMatchedItemsParamsSortByEnum;
      /** @default false */
      sortDescending?: boolean;
      /** @format int32 */
      lineId?: number;
      /**
       * Include results with receipt date >= beginDate. beginDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      beginDate?: string;
      /**
       * Include results with receipt date <= endDate. endDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceMatchedItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/matched-items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceMatchedItemPagedResponse,
    );

  /**
   * @description Add all unmatched items in the date range.
   *
   * @tags Vendor Invoices
   * @name AddUnmatchedItems
   * @summary Add all unmatched items in the date range
   * @request POST:/rest/vendor-invoices/{id}/matched-items
   * @secure */
  addUnmatchedItems = (id: number, data: DateRangeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-items`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getMatchedLabor = (
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
      /** @default "PERSON" */
      sortBy?: GetMatchedLaborParamsSortByEnum;
      /** @default false */
      sortDescending?: boolean;
      /** @format int32 */
      lineId?: number;
      personName?: string;
      projectCode?: string;
      laborCategory?: string;
      /**
       * Include results with work date >= beginDate. beginDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      beginDate?: string;
      /**
       * Include results with work date <= endDate. endDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceMatchedLaborPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/matched-labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceMatchedLaborPagedResponse,
    );

  /**
   * @description Add all unmatched labor in the date range.
   *
   * @tags Vendor Invoices
   * @name AddUnmatchedLabor
   * @summary Add all unmatched labor in the date range
   * @request POST:/rest/vendor-invoices/{id}/matched-labor
   * @secure */
  addUnmatchedLabor = (id: number, data: DateRangeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-labor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  availablePurchaseOrders1 = (
    id: number,
    data: BasePurchasingDocumentSearchModel,
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
    this.request<BasePurchasingDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/purchase-orders`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      BasePurchasingDocumentPagedResponse,
    );

  /**
   * @description Retrieves PO funding cap adjustments for a VI that is matched to a PO.
   *
   * @tags Vendor Invoices
   * @name GetPoFundingCapAdj
   * @summary Retrieves PO funding cap adjustments for a VI that is matched to a PO
   * @request GET:/rest/vendor-invoices/{id}/funding-cap-adj
   * @secure */
  getPoFundingCapAdj = (
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
    this.request<VendorInvoiceFCAElementPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/funding-cap-adj`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFCAElementPagedResponse,
    );

  /**
   * @description First removes any existing funding cap adjustments and then calculates the difference between the amount from the aggregate approved PO and its Mods and the aggregate VI amount posted against the PO (including the amounts from the current VI).
   *
   * @tags Vendor Invoices
   * @name CalculatePoFundingCapAdj
   * @summary If a VI is matched to a PO, calculates the PO funding cap adjustments
   * @request POST:/rest/vendor-invoices/{id}/funding-cap-adj
   * @secure */
  calculatePoFundingCapAdj = (
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
    this.request<VendorInvoiceFCAElementPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/funding-cap-adj`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFCAElementPagedResponse,
    );

  /**
   * @description Create a new vendor invoice.
   *
   * @tags Vendor Invoices
   * @name Create43
   * @summary Creates vendor invoice
   * @request POST:/rest/vendor-invoices
   * @secure */
  create43 = (data: VendorInvoiceSummaryCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of expense details for a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetExpenses
   * @summary Retrieves vendor invoice expenses
   * @request GET:/rest/vendor-invoices/{id}/expenses
   * @secure */
  getExpenses = (
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
    this.request<VendorInvoiceExpensePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceExpensePagedResponse,
    );

  /**
   * @description Creates a expense detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name CreateExpenseLine2
   * @summary Creates a expense detail line for an vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/expenses
   * @secure */
  createExpenseLine2 = (id: number, data: VendorInvoiceExpenseCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/expenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of configured vendor invoice formats.
   *
   * @tags Vendor Invoices
   * @name GetFormats
   * @summary Retrieves vendor invoice formats
   * @request GET:/rest/vendor-invoices/formats
   * @secure */
  getFormats = (
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
    this.request<VendorInvoiceFormatPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFormatPagedResponse,
    );

  /**
   * @description Add a new vendor invoice format.
   *
   * @tags Vendor Invoices
   * @name CreateFormat
   * @summary Create a vendor invoice format
   * @request POST:/rest/vendor-invoices/formats
   * @secure */
  createFormat = (data: VendorInvoiceFormatModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves configured vendor invoice format sections for an existing format.
   *
   * @tags Vendor Invoices
   * @name GetFormatSections
   * @summary Retrieves vendor invoice format sections
   * @request GET:/rest/vendor-invoices/formats/{id}/sections
   * @secure */
  getFormatSections = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceFormatSectionModel[], ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats/${id}/sections`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFormatSectionModel,
    );

  /**
   * @description Add a new vendor invoice format section to an existing format.
   *
   * @tags Vendor Invoices
   * @name CreateFormatSection
   * @summary Create a vendor invoice format section
   * @request POST:/rest/vendor-invoices/formats/{id}/sections
   * @secure */
  createFormatSection = (id: number, data: VendorInvoiceFormatSectionModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats/${id}/sections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of item details for a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetItems1
   * @summary Retrieves vendor invoice item details
   * @request GET:/rest/vendor-invoices/{id}/items
   * @secure */
  getItems1 = (
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
    this.request<VendorInvoiceItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceItemPagedResponse,
    );

  /**
   * @description Creates a item detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name CreateItemLine2
   * @summary Creates a item detail line for an vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/items
   * @secure */
  createItemLine2 = (id: number, data: VendorInvoiceItemCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of labor details for a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetLabor
   * @summary Retrieves vendor invoice labor details
   * @request GET:/rest/vendor-invoices/{id}/labor
   * @secure */
  getLabor = (
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
    this.request<VendorInvoiceLaborPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceLaborPagedResponse,
    );

  /**
   * @description Creates a labor detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name CreateLaborLine2
   * @summary Creates a labor detail line for an vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/labor
   * @secure */
  createLaborLine2 = (id: number, data: VendorInvoiceLaborCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/labor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Defer matched expenses for a given set of expense data allocation keys.
   *
   * @tags Vendor Invoices
   * @name DeferMatchedExpenses
   * @summary Defer matched expenses
   * @request POST:/rest/vendor-invoices/{id}/matched-expenses/defer
   * @secure */
  deferMatchedExpenses = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-expenses/defer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deferMatchedItems = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-items/defer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deferMatchedLabor = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/matched-labor/defer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getByKey40 = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceSummaryModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceSummaryModel,
    );

  /**
   * @description Updates a vendor invoice by its id.
   *
   * @tags Vendor Invoices
   * @name Update42
   * @summary Updates vendor invoice
   * @request PUT:/rest/vendor-invoices/{id}
   * @secure */
  update42 = (id: number, data: VendorInvoiceSummaryModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete38 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachment13 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Delete an attachment for on given vendor invoice.
   *
   * @tags Vendor Invoices
   * @name DeleteAttachment12
   * @summary Delete a vendor invoice attachment
   * @request DELETE:/rest/vendor-invoices/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment12 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getExpenseLine = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceExpenseModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/expenses/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceExpenseModel,
    );

  /**
   * @description Updates an expense detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name UpdateExpenseLine2
   * @summary Updates a expense detail line for a vendor invoice
   * @request PUT:/rest/vendor-invoices/{id}/expenses/{lineId}
   * @secure */
  updateExpenseLine2 = (id: number, lineId: number, data: VendorInvoiceExpenseModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/expenses/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteExpenseLine2 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getFormatByKey = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceFormatModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFormatModel,
    );

  /**
   * @description Modifies an existing vendor invoice format.
   *
   * @tags Vendor Invoices
   * @name UpdateFormat
   * @summary Update a vendor invoice format
   * @request PUT:/rest/vendor-invoices/formats/{id}
   * @secure */
  updateFormat = (id: string, data: VendorInvoiceFormatModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/formats/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteFormat = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getFormatSectionByKey = (id: number, sectionId: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceFormatSectionModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats/${id}/sections/${sectionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceFormatSectionModel,
    );

  /**
   * @description Modifies an existing vendor invoice format section for an existing format.
   *
   * @tags Vendor Invoices
   * @name UpdateFormatSection
   * @summary Update a vendor invoice format section
   * @request PUT:/rest/vendor-invoices/formats/{id}/sections/{sectionId}
   * @secure */
  updateFormatSection = (
    id: number,
    sectionId: number,
    data: VendorInvoiceFormatSectionModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/formats/${id}/sections/${sectionId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteFormatSection = (id: number, sectionId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  deleteFundingCapAdjustment = (id: number, adjId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getItemLine = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceItemModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/items/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceItemModel,
    );

  /**
   * @description Updates an item detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name UpdateItemLine2
   * @summary Updates a item detail line for a vendor invoice
   * @request PUT:/rest/vendor-invoices/{id}/items/{lineId}
   * @secure */
  updateItemLine2 = (id: number, lineId: number, data: VendorInvoiceItemModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/items/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteItemLine2 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getLaborLine = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceLaborModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/labor/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceLaborModel,
    );

  /**
   * @description Updates an labor detail line for a vendor invoice
   *
   * @tags Vendor Invoices
   * @name UpdateLaborLine2
   * @summary Updates a labor detail line for a vendor invoice
   * @request PUT:/rest/vendor-invoices/{id}/labor/{lineId}
   * @secure */
  updateLaborLine2 = (id: number, lineId: number, data: VendorInvoiceLaborModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/labor/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteLaborLine2 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAccounts3 = (
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
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AccountPagedResponse,
    );

  /**
   * @description Preview Vendor Invoices that may be generated from PO matched transactions
   *
   * @tags Vendor Invoices
   * @name GetAvailableVIsFromMatchedTransactions
   * @summary Preview Vendor Invoices that may be generated from PO matched transactions
   * @request POST:/rest/vendor-invoices/matched-transactions/available
   * @secure */
  getAvailableVIsFromMatchedTransactions = (
    data: VIMatchedSummarySearchModel,
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
    this.request<VIMatchedSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/matched-transactions/available`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      VIMatchedSummaryPagedResponse,
    );

  /**
   * @description Retrieves details of multiple vendor invoices in report format.
   *
   * @tags Vendor Invoices
   * @name GetBulkReportsByKey
   * @summary Retrieves multiple vendor invoice reports
   * @request POST:/rest/vendor-invoices/report
   * @secure */
  getBulkReportsByKey = (data: number[], params: RequestParams = {}) =>
    this.request<ReportGenerationServiceResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/report`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ReportGenerationServiceResponse,
    );

  /**
   * @description Retrieves purchase order balances on a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetCurrentBalancesByVendorInvoiceKey
   * @summary Retrieves vendor invoice purchase order balances
   * @request GET:/rest/vendor-invoices/{id}/purchase-order/balances
   * @secure */
  getCurrentBalancesByVendorInvoiceKey = (id: number, params: RequestParams = {}) =>
    this.request<PurchaseOrderBalancesModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/purchase-order/balances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderBalancesModel,
    );

  /**
   * @description Retrieves a paged list of accounts associated with the given LE, organization key and expense type key, if provided, whose account code or description contains the given name
   *
   * @tags Vendor Invoices
   * @name GetExpenseAccounts
   * @summary Retrieves a list of expense accounts
   * @request GET:/rest/vendor-invoices/accounts/expense
   * @secure */
  getExpenseAccounts = (
    query: {
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      legalEntityId: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      organizationId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectTypeId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      expenseTypeId?: number;
      /**
       * date must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      postDate: string;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountExpenseTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/accounts/expense`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AccountExpenseTypePagedResponse,
    );

  /**
   * @description Retrieves a paged list of expense line projects.
   *
   * @tags Vendor Invoices
   * @name GetExpenseProjects
   * @summary Retrieves available expense line projects.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/expense
   * @secure */
  getExpenseProjects = (
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      expenseTypeId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceExpenseProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/expense`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceExpenseProjectPagedResponse,
    );

  /**
   * @description Retrieves a paged list of expense line tasks.
   *
   * @tags Vendor Invoices
   * @name GetExpenseTasks
   * @summary Retrieves available expense line tasks.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/expense
   * @secure */
  getExpenseTasks = (
    id: number,
    projectId: number,
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceExpenseTaskPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/expense`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceExpenseTaskPagedResponse,
    );

  /**
   * @description Retrieves a paged list of expense types.
   *
   * @tags Vendor Invoices
   * @name GetExpenseTypes2
   * @summary Retrieves available expense types.
   * @request GET:/rest/vendor-invoices/expense-types
   * @secure */
  getExpenseTypes2 = (
    query: {
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectTypeId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/expense-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseTypePagedResponse,
    );

  /**
   * @description Retrieves configured vendor invoice format section total groups for an existing format.
   *
   * @tags Vendor Invoices
   * @name GetFormatSectionTotalGroups
   * @summary Retrieves vendor invoice format section total groups
   * @request GET:/rest/vendor-invoices/formats/{id}/section-total-groups
   * @secure */
  getFormatSectionTotalGroups = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceSectionTotalGroupsModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/formats/${id}/section-total-groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceSectionTotalGroupsModel,
    );

  /**
   * @description Modifies vendor invoice format section total groups for an existing format.
   *
   * @tags Vendor Invoices
   * @name UpdateFormatSectionTotalGroups
   * @summary Update vendor invoice format section total groups
   * @request PUT:/rest/vendor-invoices/formats/{id}/section-total-groups
   * @secure */
  updateFormatSectionTotalGroups = (
    id: number,
    data: VendorInvoiceSectionTotalGroupsModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/formats/${id}/section-total-groups`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getItemAccounts = (
    query: {
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      legalEntityId: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      organizationId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      itemId?: number;
      /**
       * date must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      postDate: string;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/accounts/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AccountPagedResponse,
    );

  /**
   * @description Retrieves a paged list of item line projects.
   *
   * @tags Vendor Invoices
   * @name GetItemProjects
   * @summary Retrieves available item line projects.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/item
   * @secure */
  getItemProjects = (
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceItemProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/item`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceItemProjectPagedResponse,
    );

  /**
   * @description Retrieves a paged list of item line tasks.
   *
   * @tags Vendor Invoices
   * @name GetItemTasks
   * @summary Retrieves available item line tasks.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/item
   * @secure */
  getItemTasks = (
    id: number,
    projectId: number,
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
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceTaskPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/item`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceTaskPagedResponse,
    );

  /**
   * @description Retrieves a paged list of items.
   *
   * @tags Vendor Invoices
   * @name GetItems2
   * @summary Retrieves available items.
   * @request GET:/rest/vendor-invoices/items
   * @secure */
  getItems2 = (
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    );

  /**
   * @description Retrieves a paged list of units of measure for an item.
   *
   * @tags Vendor Invoices
   * @name GetItemsUoMs
   * @summary Retrieves available units of measure for an item.
   * @request GET:/rest/vendor-invoices/items/{id}/uoms
   * @secure */
  getItemsUoMs = (
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
    this.request<UnitOfMeasurePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/items/${id}/uoms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      UnitOfMeasurePagedResponse,
    );

  /**
   * @description Retrieves a paged list of accounts associated with the given LE and organization key whose account code or description contains the given name
   *
   * @tags Vendor Invoices
   * @name GetLaborAccounts
   * @summary Retrieves a list of labor accounts
   * @request GET:/rest/vendor-invoices/accounts/labor
   * @secure */
  getLaborAccounts = (
    query: {
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      legalEntityId: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      organizationId?: number;
      /**
       * date must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      postDate: string;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/accounts/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AccountPagedResponse,
    );

  /**
   * @description Retrieves a paged list of labor line projects.
   *
   * @tags Vendor Invoices
   * @name GetLaborProjects
   * @summary Retrieves available labor line projects.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/labor
   * @secure */
  getLaborProjects = (
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      laborCategoryId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceLaborProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceLaborProjectPagedResponse,
    );

  /**
   * @description Retrieves a paged list of labor line tasks.
   *
   * @tags Vendor Invoices
   * @name GetLaborTasks
   * @summary Retrieves available labor line tasks.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/projects/{projectId}/tasks/labor
   * @secure */
  getLaborTasks = (
    id: number,
    projectId: number,
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
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VendorInvoiceTaskPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/projects/${projectId}/tasks/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceTaskPagedResponse,
    );

  /**
   * @description Retrieves a paged list of legal entities.
   *
   * @tags Vendor Invoices
   * @name GetLegalEntities3
   * @summary Retrieves available legal entities.
   * @request GET:/rest/vendor-invoices/legal-entities
   * @secure */
  getLegalEntities3 = (
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
      active?: boolean;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    );

  /**
   * @description Retrieves account payable defaults for a legal entity.
   *
   * @tags Vendor Invoices
   * @name GetLegalEntityApDefaults
   * @summary Retrieves default AP Account and AP Org for a legal entity.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/ap-defaults
   * @secure */
  getLegalEntityApDefaults = (id: number, params: RequestParams = {}) =>
    this.request<LegalEntityAPDefaultsModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/ap-defaults`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      LegalEntityAPDefaultsModel,
    );

  /**
   * @description Retrieves a paged list of fiscal periods tied to the legal entity.
   *
   * @tags Vendor Invoices
   * @name GetLegalEntityFiscalPeriods1
   * @summary Retrieves legal entity fiscal periods.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/fiscal-periods
   * @secure */
  getLegalEntityFiscalPeriods1 = (
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
      /**
       * Include results with begin date >= beginDate. beginDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      beginDate?: string;
      /** @default false */
      includeClosedPeriods?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FiscalPeriodPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/fiscal-periods`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FiscalPeriodPagedResponse,
    );

  /**
   * @description Retrieves a paged list of organizations tied to the legal entity.
   *
   * @tags Vendor Invoices
   * @name GetLegalEntityOrgs1
   * @summary Retrieves legal entity organizations.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/organizations
   * @secure */
  getLegalEntityOrgs1 = (
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
      name?: string;
      /** @default true */
      entryAllowed?: boolean;
      /** @default true */
      isFinancialOrg?: boolean;
      /**
       * start must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      postDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    );

  /**
   * @description Retrieves balances for posted vendor invoices on a vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetPostedVendorInvoiceBalances1
   * @summary Retrieves vendor invoice balances
   * @request GET:/rest/vendor-invoices/{id}/balances
   * @secure */
  getPostedVendorInvoiceBalances1 = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceBalancesModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/balances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceBalancesModel,
    );

  /**
   * @description Retrieves a paged list of project types.
   *
   * @tags Vendor Invoices
   * @name GetProjectTypes2
   * @summary Retrieves available project types.
   * @request GET:/rest/vendor-invoices/project-types
   * @secure */
  getProjectTypes2 = (
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
      name?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      accountId?: number;
      /** @default false */
      includeDefaultExpenseType?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectTypeExpenseTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/project-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypeExpenseTypePagedResponse,
    );

  /**
   * @description Retrieves details of a vendor invoice in report format.
   *
   * @tags Vendor Invoices
   * @name GetReportByKey1
   * @summary Retrieves vendor invoice report
   * @request GET:/rest/vendor-invoices/{id}/report
   * @secure */
  getReportByKey1 = (id: number, params: RequestParams = {}) =>
    this.request<ReportGenerationServiceResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/report`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ReportGenerationServiceResponse,
    );

  /**
   * @description Retrieves a paged list of status history for a given vendor invoice.
   *
   * @tags Vendor Invoices
   * @name GetStatusHistory7
   * @summary Retrieves vendor invoice status history
   * @request GET:/rest/vendor-invoices/{id}/history
   * @secure */
  getStatusHistory7 = (
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
    this.request<FinancialDocumentStatusHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentStatusHistoryPagedResponse,
    );

  /**
   * @description Retrieves a paged list of vendors.
   *
   * @tags Vendor Invoices
   * @name GetVendors2
   * @summary Retrieves available vendors.
   * @request GET:/rest/vendor-invoices/legal-entities/{id}/vendors
   * @secure */
  getVendors2 = (
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      viKey?: number;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<VIVendorModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/legal-entities/${id}/vendors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VIVendorModelPagedResponse,
    );

  /**
   * @description Posts a vendor invoice to the general ledger.
   *
   * @tags Vendor Invoices
   * @name Post4
   * @summary Posts vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/post
   * @secure */
  post4 = (
    id: number,
    query?: {
      /** @default false */
      ignoreWarnings?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
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
  search22 = (
    data: VendorInvoiceSearchModel,
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
    this.request<VendorInvoicePagedResponse, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      VendorInvoicePagedResponse,
    );

  /**
   * @description Submits a vendor invoice for approval.
   *
   * @tags Vendor Invoices
   * @name Submit11
   * @summary Submits vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/submit
   * @secure */
  submit11 = (
    id: number,
    data: VendorInvoiceSubmitModel,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      approvalGroupId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, FinancialDocumentValidationModel | ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/submit`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
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
  validate6 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Validates a vendor invoice for posting to the general ledger.
   *
   * @tags Vendor Invoices
   * @name ValidatePost3
   * @summary Post validation for a vendor invoice
   * @request GET:/rest/vendor-invoices/{id}/post/validate
   * @secure */
  validatePost3 = (id: number, params: RequestParams = {}) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/post/validate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Validates a vendor invoice for submit.
   *
   * @tags Vendor Invoices
   * @name ValidateSubmit3
   * @summary Submit validation for a vendor invoice
   * @request GET:/rest/vendor-invoices/{id}/submit/validate
   * @secure */
  validateSubmit3 = (
    id: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      approvalGroupId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FinancialDocumentValidationModel, ErrorResponse>(
      {
        path: `/rest/vendor-invoices/${id}/submit/validate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FinancialDocumentValidationModel,
    );

  /**
   * @description Voids a posted vendor invoice.
   *
   * @tags Vendor Invoices
   * @name VoidInvoice
   * @summary Voids vendor invoice
   * @request POST:/rest/vendor-invoices/{id}/void
   * @secure */
  voidInvoice = (id: number, data: VendorInvoiceVoidModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/vendor-invoices/${id}/void`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
