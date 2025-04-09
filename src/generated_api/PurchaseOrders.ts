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
  AttachmentModel,
  CreatedResponseModel,
  ErrorResponse,
  FinancialDocumentValidationModel,
  GetAttachment9ParamsTypeEnum,
  GetAttachments6ParamsTypeEnum,
  GetByKey33ParamsTypeEnum,
  GetExpenseLinesForPoParamsStateEnum,
  GetExpenseLinesForPoParamsTypeEnum,
  GetExpenseLinesHistoryForPoParamsTypeEnum,
  GetItemLinesForPoParamsStateEnum,
  GetItemLinesForPoParamsTypeEnum,
  GetItemLinesHistoryForPoParamsTypeEnum,
  GetLaborLinesForPoParamsStateEnum,
  GetLaborLinesForPoParamsTypeEnum,
  GetLaborLinesHistoryForPoParamsTypeEnum,
  GetReportByKeyParamsDetailLevelEnum,
  GetReportByKeyParamsTypeEnum,
  OrganizationPagedResponse,
  POAlertPreferencesModel,
  POContractClauseModel,
  POContractClauseUpdateModel,
  PODetailPagedResponse,
  POExpenseLineCreateModel,
  POExpenseLineFromApprovedCreateModel,
  POExpenseLineModel,
  POExpenseLinePagedResponse,
  POFormatOptionsModel,
  POItemLineCreateModel,
  POItemLineFromApprovedCreateModel,
  POItemLineModel,
  POItemLinePagedResponse,
  POLaborLineCreateModel,
  POLaborLineFromApprovedCreateModel,
  POLaborLineModel,
  POLaborLinePagedResponse,
  PurchaseOrderAttachmentCreateModel,
  PurchaseOrderAttachmentListPagedResponse,
  PurchaseOrderAttachmentUpdateModel,
  PurchaseOrderBalancesModel,
  PurchaseOrderCreateModel,
  PurchaseOrderExpenseAssignmentCreateModel,
  PurchaseOrderExpenseAssignmentModel,
  PurchaseOrderExpenseAssignmentPagedResponse,
  PurchaseOrderLaborAssignmentCreateModel,
  PurchaseOrderLaborAssignmentModel,
  PurchaseOrderLaborAssignmentPagedResponse,
  PurchaseOrderModCreateModel,
  PurchaseOrderModModel,
  PurchaseOrderModel,
  PurchaseOrderPagedResponse,
  PurchaseOrderSearchModel,
  PurchasingApprovalHistoryPagedResponse,
  PurchasingDocSubmitModel,
  PurchasingDocumentCloseModel,
  PurchasingDocumentLineCloseModel,
  PurchasingDocumentLineOpenModel,
  ReportGenerationServiceResponse,
  VendorInvoiceBalancesModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PurchaseOrders<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve attachments list for a given purchase order
   *
   * @tags Purchase Orders
   * @name GetAttachments6
   * @summary Retrieve purchase order attachments
   * @request GET:/rest/purchase-orders/{id}/attachments
   * @secure */
  getAttachments6 = (
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
      /** @default true */
      emailOnly?: boolean;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetAttachments6ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseOrderAttachmentListPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderAttachmentListPagedResponse,
    );

  /**
   * @description Add an attachment to a purchase order
   *
   * @tags Purchase Orders
   * @name AddAttachment8
   * @summary Add attachment
   * @request POST:/rest/purchase-orders/{id}/attachments
   * @secure */
  addAttachment8 = (id: number, data: PurchaseOrderAttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/attachments`,
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
   * @description Associates a Contract Clause with a PO.
   *
   * @tags Purchase Orders
   * @name GetContractClauses1
   * @summary Create contract clause association
   * @request GET:/rest/purchase-orders/{id}/contract-clauses
   * @secure */
  getContractClauses1 = (id: number, params: RequestParams = {}) =>
    this.request<POContractClauseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/contract-clauses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POContractClauseModel,
    );

  /**
   * @description Associates a Contract Clause with a PO.
   *
   * @tags Purchase Orders
   * @name AssociateContractClauses
   * @summary Associate contract clauses
   * @request PUT:/rest/purchase-orders/{id}/contract-clauses
   * @secure */
  associateContractClauses = (id: number, data: POContractClauseUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/contract-clauses`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  closeDocument = (id: number, data: PurchasingDocumentCloseModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/close`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  closeDocumentLines = (id: number, data: PurchasingDocumentLineCloseModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/close/lines`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  create32 = (data: PurchaseOrderCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders`,
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
   * @description Create an expense assignment
   *
   * @tags Purchase Orders
   * @name CreateExpenseAssignment
   * @summary Create an expense assignment
   * @request POST:/rest/purchase-orders/{id}/expenses/{descriptorId}/assignments
   * @secure */
  createExpenseAssignment = (
    id: number,
    descriptorId: number,
    data: PurchaseOrderExpenseAssignmentCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/assignments`,
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
   * @description Retrieves purchase order expenses
   *
   * @tags Purchase Orders
   * @name GetExpenseLinesForPo
   * @summary Retrieves purchase order expenses
   * @request GET:/rest/purchase-orders/{id}/expenses
   * @secure */
  getExpenseLinesForPo = (
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
      personName?: string;
      /** @format int32 */
      lineId?: number;
      state?: GetExpenseLinesForPoParamsStateEnum;
      expenseTypeName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetExpenseLinesForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POExpenseLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POExpenseLinePagedResponse,
    );

  /**
   * @description Creates an expenses line for an original purchase order
   *
   * @tags Purchase Orders
   * @name CreateExpenseLine
   * @summary Creates an expenses line for an original purchase order
   * @request POST:/rest/purchase-orders/{id}/expenses
   * @secure */
  createExpenseLine = (id: number, data: POExpenseLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses`,
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
   * @description Creates an expense line for a purchase order mod from an approved PO line on an original PO, using the approved line's descriptorId as the identifier.
   *
   * @tags Purchase Orders
   * @name CreateExpenseLineMod
   * @summary Creates an expense line for a purchase order mod from an approved PO line on an original PO.
   * @request POST:/rest/purchase-orders/{id}/expenses/{descriptorId}/mod
   * @secure */
  createExpenseLineMod = (
    id: number,
    descriptorId: number,
    data: POExpenseLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/mod`,
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
   * @description Retrieves purchase order items
   *
   * @tags Purchase Orders
   * @name GetItemLinesForPo
   * @summary Retrieves purchase order items
   * @request GET:/rest/purchase-orders/{id}/items
   * @secure */
  getItemLinesForPo = (
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
      personName?: string;
      /** @format int32 */
      lineId?: number;
      state?: GetItemLinesForPoParamsStateEnum;
      itemName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetItemLinesForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POItemLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POItemLinePagedResponse,
    );

  /**
   * @description Creates a new item line for a purchase order (i.e., not created as a modification to a previously approved item line)
   *
   * @tags Purchase Orders
   * @name CreateItemLine
   * @summary Creates an item line for a purchase order
   * @request POST:/rest/purchase-orders/{id}/items
   * @secure */
  createItemLine = (id: number, data: POItemLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/items`,
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
   * No description
   *
   * @tags Purchase Orders
   * @name CreateItemLineMod
   * @summary Creates an item line modification for a previously approved PO item line using the approved line's descriptorId as the identifier.  An item line modification can only be created as part of a purchase order mod.
   * @request POST:/rest/purchase-orders/{id}/items/{descriptorId}/mod
   * @secure */
  createItemLineMod = (
    id: number,
    descriptorId: number,
    data: POItemLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/items/${descriptorId}/mod`,
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
   * @description Create a labor assignment. Optionally, send an email notification to the project manager and resource assigner of the project on the assignment by setting the 'notify' flag. For the email to be sent, the 'PO Assignment Added/Modified' email notification template must be set to active and the person must be enabled to receive assignment notification emails
   *
   * @tags Purchase Orders
   * @name CreateLaborAssignment
   * @summary Create a labor assignment
   * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments
   * @secure */
  createLaborAssignment = (
    id: number,
    descriptorId: number,
    data: PurchaseOrderLaborAssignmentCreateModel,
    query?: {
      /** @default false */
      notify?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves purchase order labor details
   *
   * @tags Purchase Orders
   * @name GetLaborLinesForPo
   * @summary Retrieves purchase order labor details
   * @request GET:/rest/purchase-orders/{id}/labor
   * @secure */
  getLaborLinesForPo = (
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
      personName?: string;
      /** @format int32 */
      lineId?: number;
      state?: GetLaborLinesForPoParamsStateEnum;
      laborCategoryName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetLaborLinesForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POLaborLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POLaborLinePagedResponse,
    );

  /**
   * @description Creates an labor line for an original purchase order
   *
   * @tags Purchase Orders
   * @name CreateLaborLine
   * @summary Creates an labor line for an original purchase order
   * @request POST:/rest/purchase-orders/{id}/labor
   * @secure */
  createLaborLine = (id: number, data: POLaborLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor`,
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
   * @description Creates a labor line for a purchase order mod from an approved PO line on an original PO, using the approved line's descriptorId as the identifier.
   *
   * @tags Purchase Orders
   * @name CreateLaborLineMod
   * @summary Creates a labor line for a purchase order mod from an approved PO line on an original PO.
   * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/mod
   * @secure */
  createLaborLineMod = (
    id: number,
    descriptorId: number,
    data: POLaborLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor/${descriptorId}/mod`,
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
   * @description Creates a purchase order mod from an original purchase order
   *
   * @tags Purchase Orders
   * @name CreateMod
   * @summary Creates a purchase order mod
   * @request POST:/rest/purchase-orders/mods
   * @secure */
  createMod = (data: PurchaseOrderModCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/mods`,
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
   * @description Retrieves details of a purchase order
   *
   * @tags Purchase Orders
   * @name GetByKey33
   * @summary Retrieves a purchase order by its id
   * @request GET:/rest/purchase-orders/{id}
   * @secure */
  getByKey33 = (
    id: number,
    query?: {
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetByKey33ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseOrderModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderModel,
    );

  /**
   * @description Updates an existing (original) purchase order given its key.
   *
   * @tags Purchase Orders
   * @name Update32
   * @summary Updates a purchase order
   * @request PUT:/rest/purchase-orders/{id}
   * @secure */
  update32 = (id: number, data: PurchaseOrderModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete29 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachment9 = (
    id: number,
    attachmentId: number,
    query?: {
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetAttachment9ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/attachments/${attachmentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Updates attachment details on a purchase order
   *
   * @tags Purchase Orders
   * @name UpdateAttachment
   * @summary Update attachment
   * @request PUT:/rest/purchase-orders/{id}/attachments/{attachmentId}
   * @secure */
  updateAttachment = (
    id: number,
    attachmentId: number,
    data: PurchaseOrderAttachmentUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/attachments/${attachmentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteAttachment8 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  updateExpenseAssignment = (
    id: number,
    descriptorId: number,
    assignmentId: number,
    data: PurchaseOrderExpenseAssignmentModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/assignments/${assignmentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteExpenseAssignment = (id: number, descriptorId: number, assignmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getExpenseLineForPo = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<POExpenseLineModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POExpenseLineModel,
    );

  /**
   * @description Updates an expenses line for a purchase order
   *
   * @tags Purchase Orders
   * @name UpdateExpenseLine
   * @summary Updates an expenses line for a purchase order
   * @request PUT:/rest/purchase-orders/{id}/expenses/{lineId}
   * @secure */
  updateExpenseLine = (id: number, lineId: number, data: POExpenseLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/expenses/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteExpenseLine = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  deleteItemLine = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  updateLaborAssignment = (
    id: number,
    descriptorId: number,
    assignmentId: number,
    data: PurchaseOrderLaborAssignmentModel,
    query?: {
      /** @default false */
      notify?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/labor/${descriptorId}/assignments/${assignmentId}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteLaborAssignment = (id: number, descriptorId: number, assignmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getLaborLineForPo = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<POLaborLineModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POLaborLineModel,
    );

  /**
   * @description Updates an labor line for a purchase order
   *
   * @tags Purchase Orders
   * @name UpdateLaborLine
   * @summary Updates an labor line for a purchase order
   * @request PUT:/rest/purchase-orders/{id}/labor/{lineId}
   * @secure */
  updateLaborLine = (id: number, lineId: number, data: POLaborLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/labor/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteLaborLine = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getPoAlertPreferencess = (id: number, params: RequestParams = {}) =>
    this.request<POAlertPreferencesModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/alert-preferences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POAlertPreferencesModel,
    );

  /**
   * @description Update alert preferences for a purchase order
   *
   * @tags Purchase Orders
   * @name UpdatePoAlertPreferences
   * @summary Update alert preferences
   * @request PUT:/rest/purchase-orders/{id}/alert-preferences
   * @secure */
  updatePoAlertPreferences = (id: number, data: POAlertPreferencesModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/alert-preferences`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deletePoAlertPreferences = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getPoFormatOptions = (id: number, params: RequestParams = {}) =>
    this.request<POFormatOptionsModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/format`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POFormatOptionsModel,
    );

  /**
   * @description Updates details of a purchase order's format options
   *
   * @tags Purchase Orders
   * @name UpdatePoFormatOptions
   * @summary Updates format options for a purchase order by its id
   * @request PUT:/rest/purchase-orders/{id}/format
   * @secure */
  updatePoFormatOptions = (id: number, data: POFormatOptionsModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/format`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deletePoFormatOptions = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAvailableVendors = (
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
      code?: string;
      active?: boolean;
      legalEntityId?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/available-vendors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    );

  /**
   * @description Retrieves approved or in progress purchase order balances.
   *
   * @tags Purchase Orders
   * @name GetCurrentBalancesByDocumentKey
   * @summary Retrieves purchase order balances
   * @request GET:/rest/purchase-orders/{id}/balances
   * @secure */
  getCurrentBalancesByDocumentKey = (
    id: number,
    query?: {
      /** @default false */
      inProgress?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseOrderBalancesModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/balances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderBalancesModel,
    );

  /**
   * @description Retrieves purchase order expense assignments
   *
   * @tags Purchase Orders
   * @name GetExpenseAssignmentsForPo
   * @summary Retrieves purchase order expense assignments
   * @request GET:/rest/purchase-orders/{id}/expenses/assignments
   * @secure */
  getExpenseAssignmentsForPo = (
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
      /** @format int64 */
      lineId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseOrderExpenseAssignmentPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses/assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderExpenseAssignmentPagedResponse,
    );

  /**
   * @description Retrieves purchase order expense history
   *
   * @tags Purchase Orders
   * @name GetExpenseLinesHistoryForPo
   * @summary Retrieves purchase order expense history
   * @request GET:/rest/purchase-orders/{id}/expenses/{descriptorId}/history
   * @secure */
  getExpenseLinesHistoryForPo = (
    id: number,
    descriptorId: number,
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
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetExpenseLinesHistoryForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POExpenseLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/expenses/${descriptorId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POExpenseLinePagedResponse,
    );

  /**
   * @description Retrieves a purchase order's status history
   *
   * @tags Purchase Orders
   * @name GetHistoryByPoKey
   * @summary Retrieves a purchase order's status history
   * @request GET:/rest/purchase-orders/{id}/approvals/history
   * @secure */
  getHistoryByPoKey = (
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
    this.request<PurchasingApprovalHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/approvals/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchasingApprovalHistoryPagedResponse,
    );

  /**
   * @description Retrieves purchase order item by the specified key
   *
   * @tags Purchase Orders
   * @name GetItemLineForPo
   * @summary Retrieves purchase order item by id
   * @request GET:/rest/purchase-orders/{id}/items/{itemLineId}
   * @secure */
  getItemLineForPo = (id: number, itemLineId: number, params: RequestParams = {}) =>
    this.request<POItemLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/items/${itemLineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      POItemLinePagedResponse,
    );

  /**
   * @description Retrieves purchase order item history
   *
   * @tags Purchase Orders
   * @name GetItemLinesHistoryForPo
   * @summary Retrieves purchase order item history
   * @request GET:/rest/purchase-orders/{id}/items/{descriptorId}/history
   * @secure */
  getItemLinesHistoryForPo = (
    id: number,
    descriptorId: number,
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
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetItemLinesHistoryForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POItemLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/items/${descriptorId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POItemLinePagedResponse,
    );

  /**
   * @description Retrieves purchase order labor assignments
   *
   * @tags Purchase Orders
   * @name GetLaborAssignmentsForPo
   * @summary Retrieves purchase order labor assignments
   * @request GET:/rest/purchase-orders/{id}/labor/assignments
   * @secure */
  getLaborAssignmentsForPo = (
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
      /** @format int64 */
      lineId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseOrderLaborAssignmentPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor/assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderLaborAssignmentPagedResponse,
    );

  /**
   * @description Retrieves purchase order labor detail history
   *
   * @tags Purchase Orders
   * @name GetLaborLinesHistoryForPo
   * @summary Retrieves purchase order labor detail history
   * @request GET:/rest/purchase-orders/{id}/labor/{descriptorId}/history
   * @secure */
  getLaborLinesHistoryForPo = (
    id: number,
    descriptorId: number,
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
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetLaborLinesHistoryForPoParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<POLaborLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/labor/${descriptorId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      POLaborLinePagedResponse,
    );

  /**
   * @description Retrieves a paged list of legal entities available to the tokened user for purchase orders, filtered by an optional active flag
   *
   * @tags Purchase Orders
   * @name GetLegalEntities1
   * @summary Retrieves legal entities available for purchase orders.
   * @request GET:/rest/purchase-orders/legal-entities
   * @secure */
  getLegalEntities1 = (
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
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/legal-entities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    );

  /**
   * @description Retrieves balances for posted vendor invoices on the purchase order
   *
   * @tags Purchase Orders
   * @name GetPostedVendorInvoiceBalances
   * @summary Retrieves balances for posted vendor invoices on the purchase order
   * @request GET:/rest/purchase-orders/{id}/vendor-invoices/balances
   * @secure */
  getPostedVendorInvoiceBalances = (id: number, params: RequestParams = {}) =>
    this.request<VendorInvoiceBalancesModel, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/vendor-invoices/balances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorInvoiceBalancesModel,
    );

  /**
   * @description Retrieves purchase order details
   *
   * @tags Purchase Orders
   * @name GetPurchaseOrderDetails
   * @summary Retrieves purchase order details
   * @request GET:/rest/purchase-orders/{id}/details
   * @secure */
  getPurchaseOrderDetails = (
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
    this.request<PODetailPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/details`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PODetailPagedResponse,
    );

  /**
   * @description Retrieves details of a purchase order in report format.
   *
   * @tags Purchase Orders
   * @name GetReportByKey
   * @summary Retrieves purchase order report
   * @request GET:/rest/purchase-orders/{id}/report
   * @secure */
  getReportByKey = (
    id: number,
    query?: {
      /** @default "SINGLE" */
      detailLevel?: GetReportByKeyParamsDetailLevelEnum;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetReportByKeyParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ReportGenerationServiceResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/${id}/report`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ReportGenerationServiceResponse,
    );

  /**
   * @description Open a purchase order
   *
   * @tags Purchase Orders
   * @name OpenDocument
   * @summary Open a purchase order
   * @request POST:/rest/purchase-orders/{id}/open
   * @secure */
  openDocument = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  openDocumentLines = (id: number, data: PurchasingDocumentLineOpenModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/open/lines`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  putInUse1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  search15 = (
    data: PurchaseOrderSearchModel,
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
    this.request<PurchaseOrderPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-orders/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PurchaseOrderPagedResponse,
    );

  /**
   * @description Send an email notification of a labor assignment change to a project's resource assigner and project manager. By default, the labor line item's project info will be used for notification. If the line does not contain a project, the project key must be included in the request. For the email to be sent, the 'PO Assignment Added/Modified' email notification template must be set to active and the person must be enabled to receive assignment notification emails
   *
   * @tags Purchase Orders
   * @name SendLaborAssignmentNotification
   * @summary Send email notification of a labor assignment change
   * @request POST:/rest/purchase-orders/{id}/labor/{descriptorId}/assignments/notify
   * @secure */
  sendLaborAssignmentNotification = (
    id: number,
    descriptorId: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
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
  submit8 = (
    id: number,
    data: PurchasingDocSubmitModel,
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
      path: `/rest/purchase-orders/${id}/submit`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
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
  updateItemLine = (id: number, lineId: number, data: POItemLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/${id}/items/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  updateMod = (id: number, data: PurchaseOrderModModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-orders/mods/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
