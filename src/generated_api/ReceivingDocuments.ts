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
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  ErrorResponse,
  FormDataContentDisposition,
  ImportDefinitionModel,
  ImportErrorModel,
  ImportProgressModel,
  KeyNameCodeModelPagedResponse,
  PersonSummaryPagedResponse,
  ProjectSummaryPagedResponse,
  ReceivingDocumentCreateModel,
  ReceivingDocumentItemCreateModel,
  ReceivingDocumentItemModel,
  ReceivingDocumentItemPagedResponse,
  ReceivingDocumentModel,
  ReceivingDocumentPagedResponse,
  ReceivingDocumentSearchModel,
  ReceivingPurchaseOrderItemModelPagedResponse,
  ReceivingPurchaseOrderModelPagedResponse,
  ReceivingPurchaseOrderSearchModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReceivingDocuments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a list of receiving documents items
   *
   * @tags Receiving Documents
   * @name Search17
   * @summary Get receiving document items
   * @request GET:/rest/receiving-documents/{id}/items
   * @secure */
  search17 = (
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
    this.request<ReceivingDocumentItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ReceivingDocumentItemPagedResponse,
    ) as ReceivingDocumentItemPagedResponse;

  /**
   * @description Create a new receiving document item.
   *
   * @tags Receiving Documents
   * @name Create35
   * @summary Create a receiving document item
   * @request POST:/rest/receiving-documents/{id}/items
   * @secure */
  create35 = (id: number, data: ReceivingDocumentItemCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}/items`,
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
   * @description Retrieve a receiving document item
   *
   * @tags Receiving Documents
   * @name GetReceivingDocumentItem
   * @summary Retrieve a receiving document item
   * @request GET:/rest/receiving-documents/{id}/items/{itemId}
   * @secure */
  getReceivingDocumentItem = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<ReceivingDocumentItemModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}/items/${itemId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ReceivingDocumentItemModel,
    ) as ReceivingDocumentItemModel;

  /**
   * @description Update an existing receiving document item.
   *
   * @tags Receiving Documents
   * @name Update35
   * @summary Update a receiving document item
   * @request PUT:/rest/receiving-documents/{id}/items/{itemId}
   * @secure */
  update35 = (id: number, itemId: number, data: ReceivingDocumentItemModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/receiving-documents/${id}/items/${itemId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing receiving document item.
   *
   * @tags Receiving Documents
   * @name Delete33
   * @summary Delete a receiving document item
   * @request DELETE:/rest/receiving-documents/{id}/items/{itemId}
   * @secure */
  delete33 = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachments8 = (
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
        path: `/rest/receiving-documents/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Uploads an attachment to a receiving document.
   *
   * @tags Receiving Documents
   * @name AddAttachment10
   * @summary Uploads attachment to a receiving document
   * @request POST:/rest/receiving-documents/{id}/attachments
   * @secure */
  addAttachment10 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}/attachments`,
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
   * @description Retrieve a list of eligible purchase order items by purchase order
   *
   * @tags Receiving Documents
   * @name AvailablePurchaseOrderItems
   * @summary Retrieve eligible purchase order items
   * @request GET:/rest/receiving-documents/purchase-orders/{id}/items
   * @secure */
  availablePurchaseOrderItems = (
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
    this.request<ReceivingPurchaseOrderItemModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/purchase-orders/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ReceivingPurchaseOrderItemModelPagedResponse,
    ) as ReceivingPurchaseOrderItemModelPagedResponse;

  /**
   * @description Search for a list of eligible purchase orders filtered by provided criteria
   *
   * @tags Receiving Documents
   * @name AvailablePurchaseOrders
   * @summary Search for eligible purchase orders
   * @request POST:/rest/receiving-documents/purchase-orders
   * @secure */
  availablePurchaseOrders = (
    data: ReceivingPurchaseOrderSearchModel,
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
    this.request<ReceivingPurchaseOrderModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/purchase-orders`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ReceivingPurchaseOrderModelPagedResponse,
    ) as ReceivingPurchaseOrderModelPagedResponse;

  /**
   * @description Moves a receiving document to the completed status and prevents further edits.
   *
   * @tags Receiving Documents
   * @name Complete1
   * @summary Complete a receiving document
   * @request POST:/rest/receiving-documents/{id}/complete
   * @secure */
  complete1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  create36 = (data: ReceivingDocumentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents`,
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
   * @description Retrieve a receiving document by id
   *
   * @tags Receiving Documents
   * @name GetReceivingDocument
   * @summary Retrieve a receiving document
   * @request GET:/rest/receiving-documents/{id}
   * @secure */
  getReceivingDocument = (id: number, params: RequestParams = {}) =>
    this.request<ReceivingDocumentModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ReceivingDocumentModel,
    ) as ReceivingDocumentModel;

  /**
   * @description Update an existing receiving document.
   *
   * @tags Receiving Documents
   * @name Update36
   * @summary Update a receiving document
   * @request PUT:/rest/receiving-documents/{id}
   * @secure */
  update36 = (id: number, data: ReceivingDocumentModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/receiving-documents/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing receiving document.
   *
   * @tags Receiving Documents
   * @name Delete34
   * @summary Delete a receiving document
   * @request DELETE:/rest/receiving-documents/{id}
   * @secure */
  delete34 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAttachment11 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Deletes a receiving document attachment and its associations.
   *
   * @tags Receiving Documents
   * @name DeleteAttachment10
   * @summary Deletes receiving document attachment
   * @request DELETE:/rest/receiving-documents/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment10 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getImportDefinition2 = (params: RequestParams = {}) =>
    this.request<ImportDefinitionModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/import/definition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ImportDefinitionModel,
    ) as ImportDefinitionModel;

  /**
   * @description Retrieves a paged list of legal entities available to the tokened user for receiving documents.
   *
   * @tags Receiving Documents
   * @name GetLegalEntities2
   * @summary Retrieves legal entities for receiving documents.
   * @request GET:/rest/receiving-documents/legal-entities
   * @secure */
  getLegalEntities2 = (
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
        path: `/rest/receiving-documents/legal-entities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves a paged list of owning organizations available to the tokened user for receiving documents.
   *
   * @tags Receiving Documents
   * @name GetOwningOrganizations
   * @summary Retrieves owning organizations for receiving documents.
   * @request GET:/rest/receiving-documents/owning-organizations
   * @secure */
  getOwningOrganizations = (
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
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/owning-organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves a paged list of projects available to the tokened user for receiving documents.
   *
   * @tags Receiving Documents
   * @name GetProjects
   * @summary Retrieves projects for receiving documents.
   * @request GET:/rest/receiving-documents/projects
   * @secure */
  getProjects = (
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
    this.request<ProjectSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectSummaryPagedResponse,
    ) as ProjectSummaryPagedResponse;

  /**
   * @description Retrieves a paged list of vendors available to the tokened user for receiving documents.
   *
   * @tags Receiving Documents
   * @name GetVendors1
   * @summary Retrieves vendors for receiving documents.
   * @request GET:/rest/receiving-documents/vendors
   * @secure */
  getVendors1 = (
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
      legalEntityId?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/vendors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Imports receiving documents file, using an HTTP multipart form post, in order to create new, or update existing receiving documents. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add or update operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/receiving-documents/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"rd_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *receipt_number, po_number, po_lin_id, quantity, comment ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * To clear (set to null) the value of a field during update, include '!BLANK!' as the field value. This is only supported for optional fields. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request.
   *
   * @tags Receiving Documents
   * @name ImportReceivingDocumentFile
   * @summary Imports a receiving documents file
   * @request POST:/rest/receiving-documents/import
   * @secure */
  importReceivingDocumentFile = (
    data: {
      file?: FormDataContentDisposition;
    },
    query?: {
      /**
       * Set to 'true' in order to get live progress feedback at regular intervals
       * @default false
       */
      enableProgressFeedback?: boolean;
      /**
       * Set to 'true' to perform a dry-run of the import file without performing any of the add, update or delete operations. This allows one to see all of the validation errors that may arise during an import. NOTE: Having a successful dry run does not guarantee a successful real import as conditions can change in the database.
       * @default false
       */
      dryRun?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImportProgressModel | ImportErrorModel, ErrorResponse>(
      {
        path: `/rest/receiving-documents/import`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      },
      ImportProgressModel | ImportErrorModel,
    ) as ImportProgressModel | ImportErrorModel;

  /**
   * @description Moves a receiving document to the retracted status.
   *
   * @tags Receiving Documents
   * @name Retract
   * @summary Retract a receiving document
   * @request POST:/rest/receiving-documents/{id}/retract
   * @secure */
  retract = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  search18 = (
    data: ReceivingDocumentSearchModel,
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
    this.request<ReceivingDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ReceivingDocumentPagedResponse,
    ) as ReceivingDocumentPagedResponse;

  /**
   * @description Retrieves a paged list of receiving document people
   *
   * @tags Receiving Documents
   * @name SearchPeople2
   * @summary Retrieves a list of receiving document people
   * @request GET:/rest/receiving-documents/people
   * @secure */
  searchPeople2 = (
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
      active?: boolean;
      role?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/receiving-documents/people`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonSummaryPagedResponse,
    ) as PersonSummaryPagedResponse;
}
