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
  AuditDataPagedResponse,
  AuditDataSearchModel,
  ErrorResponse,
  SearchAndDownloadFamilyEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Audit<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of audit data filtered by optional search criteria.
   *
   * @tags Audit
   * @name Search1
   * @summary Retrieves audit data
   * @request POST:/rest/audit/search
   * @secure */
  search1 = (
    data: AuditDataSearchModel,
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
    this.request<AuditDataPagedResponse, ErrorResponse>({
      path: `/rest/audit/search`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * @description Retrieves a paged list of audit data filtered by optional search criteria in csv format.
   *
   * @tags Audit
   * @name SearchAndDownload
   * @summary Retrieves audit data
   * @request POST:/rest/audit/search/download
   * @secure */
  searchAndDownload = (data: AuditDataSearchModel, params: RequestParams = {}) =>
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
          family?: SearchAndDownloadFamilyEnum;
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
    >({
      path: `/rest/audit/search/download`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
