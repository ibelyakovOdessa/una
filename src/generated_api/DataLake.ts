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
  DataCriteriaTypePagedResponse,
  DataLakeCriteriaCreateModel,
  DataLakeCriteriaModel,
  DataLakeCriteriaPagedResponse,
  Delete7FamilyEnum,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DataLake<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of data lake criteria sets.
   *
   * @tags Data Lake
   * @name GetDataLakeCriteriaSets
   * @summary Retrieves a list of data lake criteria sets
   * @request GET:/rest/data-lake/criteria
   * @secure */
  getDataLakeCriteriaSets = (
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
    this.request<DataLakeCriteriaPagedResponse, ErrorResponse>(
      {
        path: `/rest/data-lake/criteria`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DataLakeCriteriaPagedResponse,
    ) as DataLakeCriteriaPagedResponse;

  /**
   * @description Creates a data lake criteria set.
   *
   * @tags Data Lake
   * @name Create7
   * @summary Creates a data lake criteria set
   * @request POST:/rest/data-lake/criteria
   * @secure */
  create7 = (data: DataLakeCriteriaCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/data-lake/criteria`,
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
   * @description Retrieves a data lake criteria set by key.
   *
   * @tags Data Lake
   * @name GetByKey10
   * @summary Retrieves a data lake criteria set by key
   * @request GET:/rest/data-lake/criteria/{id}
   * @secure */
  getByKey10 = (id: number, params: RequestParams = {}) =>
    this.request<DataLakeCriteriaModel, ErrorResponse>(
      {
        path: `/rest/data-lake/criteria/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      DataLakeCriteriaModel,
    ) as DataLakeCriteriaModel;

  /**
   * @description Updates a data lake criteria set by id.
   *
   * @tags Data Lake
   * @name Update8
   * @summary Updates a data lake criteria set.
   * @request PUT:/rest/data-lake/criteria/{id}
   * @secure */
  update8 = (id: number, data: DataLakeCriteriaModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/data-lake/criteria/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a data lake criteria set by id.
   *
   * @tags Data Lake
   * @name Delete7
   * @summary Deletes a data lake criteria set.
   * @request DELETE:/rest/data-lake/criteria/{id}
   * @secure */
  delete7 = (id: number, params: RequestParams = {}) =>
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
        headers?: Record<string, object[]>;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        /** @format int32 */
        status?: number;
        statusInfo?: {
          family?: Delete7FamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
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
      },
      ErrorResponse
    >(
      {
        path: `/rest/data-lake/criteria/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    ) as string;

  /**
   * @description Retrieves a paged list of data lake views filtered by optional query parameters.
   *
   * @tags Data Lake
   * @name GetTypes
   * @summary Retrieves data lake criteria types
   * @request GET:/rest/data-lake/criteria/types
   * @secure */
  getTypes = (
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
      value?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DataCriteriaTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/data-lake/criteria/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DataCriteriaTypePagedResponse,
    ) as DataCriteriaTypePagedResponse;
}
