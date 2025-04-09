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
  GetAttachment10ParamsTypeEnum,
  GetAttachments7ParamsTypeEnum,
  GetByKey35ParamsTypeEnum,
  GetExpenseLinesForPrParamsTypeEnum,
  GetItemLinesForPrParamsTypeEnum,
  GetLaborLinesForPrParamsTypeEnum,
  PRExpenseLineCreateModel,
  PRExpenseLineFromApprovedCreateModel,
  PRExpenseLineModel,
  PRExpenseLinePagedResponse,
  PRItemLineCreateModel,
  PRItemLineFromApprovedCreateModel,
  PRItemLineModel,
  PRItemLinePagedResponse,
  PRLaborLineCreateModel,
  PRLaborLineFromApprovedCreateModel,
  PRLaborLineModel,
  PRLaborLinePagedResponse,
  PurchaseRequisitionAttachmentCreateModel,
  PurchaseRequisitionAttachmentListPagedResponse,
  PurchaseRequisitionAttachmentUpdateModel,
  PurchaseRequisitionModCreateModel,
  PurchaseRequisitionModel,
  PurchaseRequisitionOrigCreateModel,
  PurchaseRequisitionPagedResponse,
  PurchaseRequisitionSearchModel,
  PurchasingApprovalHistoryPagedResponse,
  PurchasingDocSubmitModel,
  TerminalPurchaseReqUpdateModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PurchaseRequisitions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve attachments list for a given purchase requisition
   *
   * @tags Purchase Requisitions
   * @name GetAttachments7
   * @summary Retrieve purchase requisition attachments
   * @request GET:/rest/purchase-requisitions/{id}/attachments
   * @secure */
  getAttachments7 = (
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
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetAttachments7ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseRequisitionAttachmentListPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseRequisitionAttachmentListPagedResponse,
    );

  /**
   * @description Add an attachment to a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name AddAttachment9
   * @summary Add attachment
   * @request POST:/rest/purchase-requisitions/{id}/attachments
   * @secure */
  addAttachment9 = (id: number, data: PurchaseRequisitionAttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/attachments`,
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
   * @description Close a purchase requisition.
   *
   * @tags Purchase Requisitions
   * @name CloseDocument1
   * @summary Close a purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/close
   * @secure */
  closeDocument1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  create34 = (data: PurchaseRequisitionOrigCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions`,
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
   * @description Retrieves purchase requisition expense details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
   *
   * @tags Purchase Requisitions
   * @name GetExpenseLinesForPr
   * @summary Retrieves purchase requisition expense details
   * @request GET:/rest/purchase-requisitions/{id}/expenses
   * @secure */
  getExpenseLinesForPr = (
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
      expenseTypeName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetExpenseLinesForPrParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PRExpenseLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/expenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PRExpenseLinePagedResponse,
    );

  /**
   * @description Creates an expense line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name CreateExpenseLine1
   * @summary Creates an expense line for a purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/expenses
   * @secure */
  createExpenseLine1 = (id: number, data: PRExpenseLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/expenses`,
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
   * @description Creates an expense line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
   *
   * @tags Purchase Requisitions
   * @name CreateExpenseLineMod1
   * @summary Creates an expense line for a purchase requisition mod from an approved PR line on an original PR.
   * @request POST:/rest/purchase-requisitions/{id}/expenses/{descriptorId}/mod
   * @secure */
  createExpenseLineMod1 = (
    id: number,
    descriptorId: number,
    data: PRExpenseLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/expenses/${descriptorId}/mod`,
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
   * @description Retrieves purchase requisition item details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
   *
   * @tags Purchase Requisitions
   * @name GetItemLinesForPr
   * @summary Retrieves purchase requisition item details
   * @request GET:/rest/purchase-requisitions/{id}/items
   * @secure */
  getItemLinesForPr = (
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
      itemName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetItemLinesForPrParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PRItemLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PRItemLinePagedResponse,
    );

  /**
   * @description Creates an item line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name CreateItemLine1
   * @summary Creates an item line for a purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/items
   * @secure */
  createItemLine1 = (id: number, data: PRItemLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/items`,
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
   * @description Creates an item line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
   *
   * @tags Purchase Requisitions
   * @name CreateItemLineMod1
   * @summary Creates an item line for a purchase requisition mod from an approved PR line on an original PR.
   * @request POST:/rest/purchase-requisitions/{id}/items/{descriptorId}/mod
   * @secure */
  createItemLineMod1 = (
    id: number,
    descriptorId: number,
    data: PRItemLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/items/${descriptorId}/mod`,
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
   * @description Retrieves purchase requisition labor details, filtered by optional query parameters. Defaults to showing CONSOLIDATED APPROVED details for the PR family.
   *
   * @tags Purchase Requisitions
   * @name GetLaborLinesForPr
   * @summary Retrieves purchase requisition labor details
   * @request GET:/rest/purchase-requisitions/{id}/labor
   * @secure */
  getLaborLinesForPr = (
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
      laborCategoryName?: string;
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetLaborLinesForPrParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PRLaborLinePagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PRLaborLinePagedResponse,
    );

  /**
   * @description Creates a labor line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name CreateLaborLine1
   * @summary Creates a labor line for a purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/labor
   * @secure */
  createLaborLine1 = (id: number, data: PRLaborLineCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/labor`,
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
   * @description Creates a labor line for a purchase requisition mod from an approved PR line on an original PR, using the approved line's descriptorId as the identifier.
   *
   * @tags Purchase Requisitions
   * @name CreateLaborLineMod1
   * @summary Creates a labor line for a purchase requisition mod from an approved PR line on an original PR.
   * @request POST:/rest/purchase-requisitions/{id}/labor/{descriptorId}/mod
   * @secure */
  createLaborLineMod1 = (
    id: number,
    descriptorId: number,
    data: PRLaborLineFromApprovedCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/labor/${descriptorId}/mod`,
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
   * @description Creates a purchase requisition mod from an original purchase requisition
   *
   * @tags Purchase Requisitions
   * @name CreateMod1
   * @summary Creates a purchase requisition mod
   * @request POST:/rest/purchase-requisitions/mods
   * @secure */
  createMod1 = (data: PurchaseRequisitionModCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/mods`,
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
   * @description Retrieves details of a purchase requisition, filtered by optional 'type' query parameter. Defaults to CONSOLIDATED_APPROVED.
   *
   * @tags Purchase Requisitions
   * @name GetByKey35
   * @summary Retrieves a purchase requisition by its id
   * @request GET:/rest/purchase-requisitions/{id}
   * @secure */
  getByKey35 = (
    id: number,
    query?: {
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetByKey35ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<PurchaseRequisitionModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseRequisitionModel,
    );

  /**
   * @description Updates an existing (original) purchase requisition given its key. Changes to the mod number field is ignored.
   *
   * @tags Purchase Requisitions
   * @name Update34
   * @summary Updates a purchase requisition
   * @request PUT:/rest/purchase-requisitions/{id}
   * @secure */
  update34 = (id: number, data: PurchaseRequisitionModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete31 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachment10 = (
    id: number,
    attachmentId: number,
    query?: {
      /** @default "CONSOLIDATED_APPROVED" */
      type?: GetAttachment10ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/attachments/${attachmentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Updates attachment details on a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name UpdateAttachment1
   * @summary Update attachment
   * @request PUT:/rest/purchase-requisitions/{id}/attachments/{attachmentId}
   * @secure */
  updateAttachment1 = (
    id: number,
    attachmentId: number,
    data: PurchaseRequisitionAttachmentUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}/attachments/${attachmentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteAttachment9 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getExpenseLineForPr = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<PRExpenseLineModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/expenses/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PRExpenseLineModel,
    );

  /**
   * @description Updates an expense line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name UpdateExpenseLine1
   * @summary Updates an expense line for a purchase requisition
   * @request PUT:/rest/purchase-requisitions/{id}/expenses/{lineId}
   * @secure */
  updateExpenseLine1 = (id: number, lineId: number, data: PRExpenseLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}/expenses/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteExpenseLine1 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getItemLineForPr = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<PRItemLineModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/items/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PRItemLineModel,
    );

  /**
   * @description Updates an item line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name UpdateItemLine1
   * @summary Updates an item line for a purchase requisition
   * @request PUT:/rest/purchase-requisitions/{id}/items/{lineId}
   * @secure */
  updateItemLine1 = (id: number, lineId: number, data: PRItemLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}/items/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteItemLine1 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getLaborLineForPr = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<PRLaborLineModel, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/${id}/labor/${lineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PRLaborLineModel,
    );

  /**
   * @description Updates an labor line for a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name UpdateLaborLine1
   * @summary Updates an labor line for a purchase requisition
   * @request PUT:/rest/purchase-requisitions/{id}/labor/{lineId}
   * @secure */
  updateLaborLine1 = (id: number, lineId: number, data: PRLaborLineModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}/labor/${lineId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteLaborLine1 = (id: number, lineId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getHistoryByPrKey = (
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
        path: `/rest/purchase-requisitions/${id}/approvals/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchasingApprovalHistoryPagedResponse,
    );

  /**
   * @description Open a purchase requisition
   *
   * @tags Purchase Requisitions
   * @name OpenDocument1
   * @summary Open a purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/open
   * @secure */
  openDocument1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  putInUse2 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  search16 = (
    data: PurchaseRequisitionSearchModel,
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
    this.request<PurchaseRequisitionPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-requisitions/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PurchaseRequisitionPagedResponse,
    );

  /**
   * @description Submits a purchase requisition for approval.
   *
   * @tags Purchase Requisitions
   * @name Submit9
   * @summary Submit purchase requisition
   * @request POST:/rest/purchase-requisitions/{id}/submit
   * @secure */
  submit9 = (
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
      path: `/rest/purchase-requisitions/${id}/submit`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
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
  updateMod1 = (id: number, data: PurchaseRequisitionModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/mods/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  updateTerminal = (id: number, data: TerminalPurchaseReqUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-requisitions/${id}/terminal`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
