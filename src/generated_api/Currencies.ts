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

import { CurrencyCodePagedResponse, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Currencies<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of ISO-4217 currency codes, filtered by optional query parameters.
   *
   * @tags Currencies
   * @name GetIsoCodes
   * @summary Retrieves currency codes
   * @request GET:/rest/currencies/currency-codes
   * @secure */
  getIsoCodes = (
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
      currencyCode?: string;
      currencyName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CurrencyCodePagedResponse, ErrorResponse>(
      {
        path: `/rest/currencies/currency-codes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CurrencyCodePagedResponse,
    ) as CurrencyCodePagedResponse;
}
