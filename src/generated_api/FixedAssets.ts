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
  AccountCategoryModel,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CategoryAccountKeyModel,
  CategoryAccountModel,
  CreateFixedAssetListCriteriaParamsDashboardEnum,
  CreatedResponseModel,
  DeleteFixedAssetListCriteriaFamilyEnum,
  ErrorResponse,
  FiscalPeriodPagedResponse,
  FixedAssetAlertPagedResponse,
  FixedAssetAlertUpdateModel,
  FixedAssetBalancePeriodModel,
  FixedAssetClassCreateModel,
  FixedAssetClassModel,
  FixedAssetClassPagedResponse,
  FixedAssetCreateModel,
  FixedAssetFilterPagedResponse,
  FixedAssetJournalEntryPagedResponse,
  FixedAssetLocationCreateModel,
  FixedAssetLocationPagedResponse,
  FixedAssetModel,
  FixedAssetPagedResponse,
  FixedAssetPostDocumentPagedResponse,
  FixedAssetPostDocumentSearchModel,
  FixedAssetPostRequestModel,
  FixedAssetPostResponseModel,
  FixedAssetSchedulePagedResponse,
  FixedAssetSearchModel,
  FixedAssetStatusCreateModel,
  FixedAssetStatusModel,
  FixedAssetStatusPagedResponse,
  FormDataContentDisposition,
  GetJournalEntriesByFixedAssetParamsCategoryEnum,
  ImportDefinitionModel,
  ImportErrorModel,
  ImportProgressModel,
  OrganizationPagedResponse,
  PersonSummaryPagedResponse,
  UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FixedAssets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of attachments for a given fixed asset.
   *
   * @tags Fixed Assets
   * @name GetAttachments3
   * @summary Retrieves fixed asset attachments
   * @request GET:/rest/fixed-assets/{id}/attachments
   * @secure */
  getAttachments3 = (
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
        path: `/rest/fixed-assets/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    );

  /**
   * @description Uploads an attachment to an fixed asset.
   *
   * @tags Fixed Assets
   * @name AddAttachment3
   * @summary Uploads attachment to a fixed asset
   * @request POST:/rest/fixed-assets/{id}/attachments
   * @secure */
  addAttachment3 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${id}/attachments`,
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
   * @description Retrieves a paged list of fixed asset classes filtered by optional query parameters.
   *
   * @tags Fixed Assets
   * @name GetClasses
   * @summary Retrieves fixed asset classes.
   * @request GET:/rest/fixed-assets/classes
   * @secure */
  getClasses = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<FixedAssetClassPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/classes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetClassPagedResponse,
    );

  /**
   * @description Creates a new fixed asset class.
   *
   * @tags Fixed Assets
   * @name CreateClass
   * @summary Creates a fixed asset class.
   * @request POST:/rest/fixed-assets/classes
   * @secure */
  createClass = (data: FixedAssetClassCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/classes`,
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
   * @description Retrieves a paged list of fixed assets filtered by optional query parameters.
   *
   * @tags Fixed Assets
   * @name GetFixedAssets
   * @summary Retrieves fixed assets.
   * @request GET:/rest/fixed-assets
   * @secure */
  getFixedAssets = (
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
      number?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FixedAssetPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetPagedResponse,
    );

  /**
   * @description Creates a new fixed asset.
   *
   * @tags Fixed Assets
   * @name CreateFixedAsset
   * @summary Creates a fixed asset.
   * @request POST:/rest/fixed-assets
   * @secure */
  createFixedAsset = (
    data: FixedAssetCreateModel,
    query?: {
      /**
       * Optional fixed asset alert key to associate this fixed asset creation with a fixed asset alert.
       * @format int64
       * @min 1
       * @example 1
       */
      alertKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets`,
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
   * @description Retrieves a paged list of filter sets saved by the authenticated user.
   *
   * @tags Fixed Assets
   * @name GetFixedAssetListCriteria
   * @summary Retrieves saved fixed asset filters.
   * @request GET:/rest/fixed-assets/search/criteria
   * @secure */
  getFixedAssetListCriteria = (
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
    this.request<FixedAssetFilterPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/search/criteria`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetFilterPagedResponse,
    );

  /**
   * @description Saves a filter set for later use.
   *
   * @tags Fixed Assets
   * @name CreateFixedAssetListCriteria
   * @summary Save a filter set.
   * @request POST:/rest/fixed-assets/search/criteria
   * @secure */
  createFixedAssetListCriteria = (
    data: FixedAssetSearchModel,
    query?: {
      /** Optional Dashboards filter will be added to. */
      dashboard?: CreateFixedAssetListCriteriaParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/search/criteria`,
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
   * @description Retrieves a paged list of fixed asset locations for the given fixedAssetId.
   *
   * @tags Fixed Assets
   * @name GetLocations
   * @summary Retrieves fixed asset locations
   * @request GET:/rest/fixed-assets/{fixedAssetId}/locations
   * @secure */
  getLocations = (
    fixedAssetId: number,
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
    this.request<FixedAssetLocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${fixedAssetId}/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetLocationPagedResponse,
    );

  /**
   * @description Creates a new fixed asset location associated with fixedAssetId.
   *
   * @tags Fixed Assets
   * @name CreateLocation
   * @summary Creates new fixed asset location
   * @request POST:/rest/fixed-assets/{fixedAssetId}/locations
   * @secure */
  createLocation = (fixedAssetId: number, data: FixedAssetLocationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${fixedAssetId}/locations`,
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
   * @description Retrieves a paged list of fixed asset statuses filtered by optional query parameters.
   *
   * @tags Fixed Assets
   * @name GetStatuses
   * @summary Retrieves fixed asset statuses.
   * @request GET:/rest/fixed-assets/statuses
   * @secure */
  getStatuses = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<FixedAssetStatusPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetStatusPagedResponse,
    );

  /**
   * @description Creates a new fixed asset status.
   *
   * @tags Fixed Assets
   * @name CreateStatus
   * @summary Creates a fixed asset status.
   * @request POST:/rest/fixed-assets/statuses
   * @secure */
  createStatus = (data: FixedAssetStatusCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/statuses`,
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
   * @description Retrieves an attachment for a given fixed asset.
   *
   * @tags Fixed Assets
   * @name GetAttachment3
   * @summary Retrieves a fixed asset attachment
   * @request GET:/rest/fixed-assets/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment3 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );

  /**
   * @description Deletes a fixed asset attachment and its associations.
   *
   * @tags Fixed Assets
   * @name DeleteAttachment3
   * @summary Deletes fixed asset attachment
   * @request DELETE:/rest/fixed-assets/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment3 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a fixed asset class.
   *
   * @tags Fixed Assets
   * @name GetClassByKey
   * @summary Retrieves a fixed asset class.
   * @request GET:/rest/fixed-assets/classes/{id}
   * @secure */
  getClassByKey = (id: number, params: RequestParams = {}) =>
    this.request<FixedAssetClassModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/classes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetClassModel,
    );

  /**
   * @description Updates a fixed asset class.
   *
   * @tags Fixed Assets
   * @name UpdateClass
   * @summary update a fixed asset class.
   * @request PUT:/rest/fixed-assets/classes/{id}
   * @secure */
  updateClass = (id: number, data: FixedAssetClassModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/classes/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a fixed asset class.
   *
   * @tags Fixed Assets
   * @name DeleteClass
   * @summary Delete a fixed asset class.
   * @request DELETE:/rest/fixed-assets/classes/{id}
   * @secure */
  deleteClass = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/classes/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a fixed asset.
   *
   * @tags Fixed Assets
   * @name GetFixedAssetByKey
   * @summary Retrieves a fixed asset.
   * @request GET:/rest/fixed-assets/{id}
   * @secure */
  getFixedAssetByKey = (id: number, params: RequestParams = {}) =>
    this.request<FixedAssetModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetModel,
    );

  /**
   * @description Updates a fixed asset.
   *
   * @tags Fixed Assets
   * @name UpdateFixedAsset
   * @summary Update a fixed asset.
   * @request PUT:/rest/fixed-assets/{id}
   * @secure */
  updateFixedAsset = (id: number, data: FixedAssetModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a fixed asset.
   *
   * @tags Fixed Assets
   * @name DeleteFixedAsset
   * @summary Delete a fixed asset.
   * @request DELETE:/rest/fixed-assets/{id}
   * @secure */
  deleteFixedAsset = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Updates the read status of an alert for the authenticated user.
   *
   * @tags Fixed Assets
   * @name UpdateFixedAssetAlert
   * @summary Update the read status of an alert
   * @request PUT:/rest/fixed-assets/alerts/{id}
   * @secure */
  updateFixedAssetAlert = (id: number, data: FixedAssetAlertUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/alerts/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a fixed asset alert for the authenticated user.
   *
   * @tags Fixed Assets
   * @name DeleteFixedAssetAlert
   * @summary Delete an alert
   * @request DELETE:/rest/fixed-assets/alerts/{id}
   * @secure */
  deleteFixedAssetAlert = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/alerts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a saved filter set by id.
   *
   * @tags Fixed Assets
   * @name GetFixedAssetListCriteriaByKey
   * @summary Retrieves a saved fixed asset filter.
   * @request GET:/rest/fixed-assets/search/criteria/{id}
   * @secure */
  getFixedAssetListCriteriaByKey = (id: number, params: RequestParams = {}) =>
    this.request<FixedAssetSearchModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/search/criteria/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetSearchModel,
    );

  /**
   * @description Updates a saved filter set by id.
   *
   * @tags Fixed Assets
   * @name UpdateFixedAssetListCriteriaByKey
   * @summary Updates a saved fixed asset filter.
   * @request PUT:/rest/fixed-assets/search/criteria/{id}
   * @secure */
  updateFixedAssetListCriteriaByKey = (
    id: number,
    data: FixedAssetSearchModel,
    query?: {
      /** Optional Dashboards filter will be added to. Overwrites existing assignments. */
      dashboard?: UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/search/criteria/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a filter set by id.
   *
   * @tags Fixed Assets
   * @name DeleteFixedAssetListCriteria
   * @summary Deletes a saved fixed asset filter.
   * @request DELETE:/rest/fixed-assets/search/criteria/{id}
   * @secure */
  deleteFixedAssetListCriteria = (id: number, params: RequestParams = {}) =>
    this.request<
      {
        /** @format int32 */
        length?: number;
        /** @format uri */
        location?: string;
        language?: {
          language?: string;
          displayName?: string;
          country?: string;
          variant?: string;
          script?: string;
          /** @uniqueItems true */
          unicodeLocaleAttributes?: string[];
          /** @uniqueItems true */
          unicodeLocaleKeys?: string[];
          displayLanguage?: string;
          displayScript?: string;
          displayCountry?: string;
          displayVariant?: string;
          /** @uniqueItems true */
          extensionKeys?: string[];
          iso3Language?: string;
          iso3Country?: string;
        };
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        date?: string;
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        lastModified?: string;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        statusInfo?: {
          family?: DeleteFixedAssetListCriteriaFamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
        /** @format int32 */
        status?: number;
        stringHeaders?: Record<string, string[]>;
        entity?: object;
        /** @uniqueItems true */
        allowedMethods?: string[];
        cookies?: Record<
          string,
          {
            name?: string;
            value?: string;
            /** @format int32 */
            version?: number;
            path?: string;
            domain?: string;
            comment?: string;
            /** @format int32 */
            maxAge?: number;
            /**
             * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
             * @format date-time
             * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
             */
            expiry?: string;
            secure?: boolean;
            httpOnly?: boolean;
          }
        >;
        entityTag?: {
          value?: string;
          weak?: boolean;
        };
        /** @uniqueItems true */
        links?: {
          type?: string;
          /** @format uri */
          uri?: string;
          uriBuilder?: object;
          rel?: string;
          rels?: string[];
          title?: string;
          params?: Record<string, string>;
        }[];
        headers?: Record<string, object[]>;
      },
      ErrorResponse
    >(
      {
        path: `/rest/fixed-assets/search/criteria/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    );

  /**
   * @description Updates an existing fixed asset location.
   *
   * @tags Fixed Assets
   * @name UpdateLocation
   * @summary Updates fixed asset location
   * @request PUT:/rest/fixed-assets/{fixedAssetId}/locations/{id}
   * @secure */
  updateLocation = (
    fixedAssetId: number,
    id: number,
    data: FixedAssetLocationCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/${fixedAssetId}/locations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a fixed asset location.
   *
   * @tags Fixed Assets
   * @name DeleteLocation
   * @summary Deletes fixed asset location
   * @request DELETE:/rest/fixed-assets/{fixedAssetId}/locations/{id}
   * @secure */
  deleteLocation = (fixedAssetId: number, id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/${fixedAssetId}/locations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a fixed asset status.
   *
   * @tags Fixed Assets
   * @name GetStatusByKey
   * @summary Retrieves a fixed asset status.
   * @request GET:/rest/fixed-assets/statuses/{id}
   * @secure */
  getStatusByKey = (id: number, params: RequestParams = {}) =>
    this.request<FixedAssetStatusModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/statuses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetStatusModel,
    );

  /**
   * @description Updates a fixed asset status.
   *
   * @tags Fixed Assets
   * @name UpdateStatus
   * @summary update a fixed asset status.
   * @request PUT:/rest/fixed-assets/statuses/{id}
   * @secure */
  updateStatus = (id: number, data: FixedAssetStatusModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/statuses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a fixed asset status.
   *
   * @tags Fixed Assets
   * @name DeleteStatus
   * @summary Delete a fixed asset status.
   * @request DELETE:/rest/fixed-assets/statuses/{id}
   * @secure */
  deleteStatus = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/statuses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of fixed asset class account categories.
   *
   * @tags Fixed Assets
   * @name GetClassAccountCategories
   * @summary Retrieves available account categories.
   * @request GET:/rest/fixed-assets/classes/account-categories
   * @secure */
  getClassAccountCategories = (params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/fixed-assets/classes/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    );

  /**
   * @description Retrieves details of a fixed asset class account setup.
   *
   * @tags Fixed Assets
   * @name GetClassAccounts
   * @summary Retrieves a fixed asset class accounts.
   * @request GET:/rest/fixed-assets/classes/{id}/accounts
   * @secure */
  getClassAccounts = (id: number, params: RequestParams = {}) =>
    this.request<CategoryAccountModel[], ErrorResponse>(
      {
        path: `/rest/fixed-assets/classes/${id}/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CategoryAccountModel,
    );

  /**
   * @description Update a fixed asset class account setup.
   *
   * @tags Fixed Assets
   * @name UpdateClassAccount
   * @summary Update a fixed asset class accounts.
   * @request PUT:/rest/fixed-assets/classes/{id}/accounts
   * @secure */
  updateClassAccount = (id: number, data: CategoryAccountKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/classes/${id}/accounts`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of fixed asset alerts for the authenticated user.
   *
   * @tags Fixed Assets
   * @name GetFixedAssetAlerts
   * @summary Retrieves fixed asset alerts
   * @request GET:/rest/fixed-assets/alerts
   * @secure */
  getFixedAssetAlerts = (
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
    this.request<FixedAssetAlertPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/alerts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetAlertPagedResponse,
    );

  /**
   * @description Retrieves a list of import field definitions.
   *
   * @tags Fixed Assets
   * @name GetImportDefinition1
   * @summary Retrieves the import field definition.
   * @request GET:/rest/fixed-assets/import/definition
   * @secure */
  getImportDefinition1 = (params: RequestParams = {}) =>
    this.request<ImportDefinitionModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/import/definition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ImportDefinitionModel,
    );

  /**
   * @description Retrieves a list of fixed asset journal entries.
   *
   * @tags Fixed Assets
   * @name GetJournalEntriesByFixedAsset
   * @summary Retrieves fixed asset journal entries.
   * @request GET:/rest/fixed-assets/{id}/journal-entries
   * @secure */
  getJournalEntriesByFixedAsset = (
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
      category?: GetJournalEntriesByFixedAssetParamsCategoryEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<FixedAssetJournalEntryPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${id}/journal-entries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetJournalEntryPagedResponse,
    );

  /**
   * @description Retrieves a paged list of legal entities available to the tokened user for fixed assets, filtered by an optional active flag
   *
   * @tags Fixed Assets
   * @name GetLegalEntities
   * @summary Retrieves legal entities available for fixed assets.
   * @request GET:/rest/fixed-assets/legal-entities
   * @secure */
  getLegalEntities = (
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
        path: `/rest/fixed-assets/legal-entities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    );

  /**
   * @description Retrieves fixed asset balances for a legal entity for 12 rolling fiscal periods (i.e. period containing current date and up to 11 prior fiscal periods).
   *
   * @tags Fixed Assets
   * @name GetLegalEntityBalances
   * @summary Retrieves fixed asset balances for a legal entity.
   * @request GET:/rest/fixed-assets/legal-entities/{id}/balances
   * @secure */
  getLegalEntityBalances = (id: number, params: RequestParams = {}) =>
    this.request<FixedAssetBalancePeriodModel[], ErrorResponse>(
      {
        path: `/rest/fixed-assets/legal-entities/${id}/balances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetBalancePeriodModel,
    );

  /**
   * @description Retrieves a paged list of fiscal periods tied to the legal entity.
   *
   * @tags Fixed Assets
   * @name GetLegalEntityFiscalPeriods
   * @summary Retrieves legal entity fiscal periods.
   * @request GET:/rest/fixed-assets/legal-entities/{id}/fiscal-periods
   * @secure */
  getLegalEntityFiscalPeriods = (
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
        path: `/rest/fixed-assets/legal-entities/${id}/fiscal-periods`,
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
   * @tags Fixed Assets
   * @name GetLegalEntityOrgs
   * @summary Retrieves legal entity organizations.
   * @request GET:/rest/fixed-assets/legal-entities/{id}/organizations
   * @secure */
  getLegalEntityOrgs = (
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
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/legal-entities/${id}/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    );

  /**
   * @description Retrieves a paged list of people who have posted for fixed assets.
   *
   * @tags Fixed Assets
   * @name GetPosters
   * @summary Retrieves posters
   * @request GET:/rest/fixed-assets/posts/posters
   * @secure */
  getPosters = (
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
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/posts/posters`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonSummaryPagedResponse,
    );

  /**
   * @description Retrieves a paged list of fixed asset depreciation schedules for the given fixedAssetId.
   *
   * @tags Fixed Assets
   * @name GetSchedules
   * @summary Retrieves fixed asset depreciation schedules
   * @request GET:/rest/fixed-assets/{fixedAssetId}/schedules
   * @secure */
  getSchedules = (
    fixedAssetId: number,
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
    this.request<FixedAssetSchedulePagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/${fixedAssetId}/schedules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedAssetSchedulePagedResponse,
    );

  /**
   * @description Imports fixed assets file, using an HTTP multipart form post, in order to create new or update and delete existing fixed assets. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add, update or delete operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/fixed-assets/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"fa_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *fixed_asset_number, legal_entity, owner, serial_number, name, description, class, status, acquisition_date, acquisition_value, disposal_date, disposal_value, disposal_type, placed_in_service_date, useful_life, salvage_value, depreciation_start_date, prior_depreciation_balance, depreciation_method, depreciation_averaging_method, location, location_begin_date, asset_org, expense_org, user01, user02, user03, user04, user05, user06, user07, user08, user09, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, delete ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * Fixed Asset rows are uniquely defined by 'fixed_asset_number'. If no 'fixed_asset_number' field is defined, or the row is empty, the import assumes this is a new fixed asset and will assign a 'fixed_asset_number' to the newly created fixed asset. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * To clear (set to null) the value of a field during update, include '!BLANK!' as the field value. This is only supported for optional fields. * The minimum set of fields that are required for creating a new fixed asset is: **legal_entity, name, class, status, acquisition_value, placed_in_service_date, useful_life**. NOTE: **placed_in_service_date** is optional if **acquisition_date** is defined. * A 'delete' column is supported to allow rows to be included that instruct the import to remove the specified entity as uniquely referenced by the 'fixed_asset_number' field value. If a 'delete' column is defined, it must be the last column in the row. To delete a specific fixed asset, include a row containing a 'fixed_asset_number' field value and '!DELETE!' as the 'delete' field column value. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request. * For additional descriptions of supported fields, see the FixedAssetCreateModel model.
   *
   * @tags Fixed Assets
   * @name ImportFixedAssetFile
   * @summary Imports fixed assets file
   * @request POST:/rest/fixed-assets/import
   * @secure */
  importFixedAssetFile = (
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
        path: `/rest/fixed-assets/import`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      },
      ImportProgressModel | ImportErrorModel,
    );

  /**
   * @description Posts fixed asset depreciation and disposal.
   *
   * @tags Fixed Assets
   * @name Post2
   * @summary Posts fixed assets.
   * @request POST:/rest/fixed-assets/posts
   * @secure */
  post2 = (data: FixedAssetPostRequestModel, params: RequestParams = {}) =>
    this.request<FixedAssetPostResponseModel, ErrorResponse>(
      {
        path: `/rest/fixed-assets/posts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      FixedAssetPostResponseModel,
    );

  /**
   * @description Retrieves a paged list of fixed assets filtered by search criteria.
   *
   * @tags Fixed Assets
   * @name SearchFixedAssets
   * @summary Retrieves fixed assets.
   * @request POST:/rest/fixed-assets/search
   * @secure */
  searchFixedAssets = (
    data: FixedAssetSearchModel,
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
    this.request<FixedAssetPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      FixedAssetPagedResponse,
    );

  /**
   * @description Retrieves a paged list of fixed asset posting documents.
   *
   * @tags Fixed Assets
   * @name SearchPostDocuments
   * @summary Retrieves fixed asset post documents.
   * @request POST:/rest/fixed-assets/posts/search
   * @secure */
  searchPostDocuments = (
    data: FixedAssetPostDocumentSearchModel,
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
    this.request<FixedAssetPostDocumentPagedResponse, ErrorResponse>(
      {
        path: `/rest/fixed-assets/posts/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      FixedAssetPostDocumentPagedResponse,
    );

  /**
   * @description Unposts a fixed asset depreciation and disposal post.
   *
   * @tags Fixed Assets
   * @name Unpost
   * @summary Unposts a fixed asset post.
   * @request DELETE:/rest/fixed-assets/posts/{id}
   * @secure */
  unpost = (
    id: number,
    query?: {
      /**
       * Resulting status for all fixed assets disposed by the post being undone. Required to unpost any post including disposal.
       * @format int64
       * @min 1
       * @example 1
       */
      faStatusKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/fixed-assets/posts/${id}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
}
