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

import { ErrorResponse, PayCodePagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PayCodes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of pay codes filtered by optional active flag
   *
   * @tags Pay Codes
   * @name Get27
   * @summary Retrieves pay codes
   * @request GET:/rest/pay-codes
   * @secure */
  get27 = (
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
    this.request<PayCodePagedResponse, ErrorResponse>(
      {
        path: `/rest/pay-codes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PayCodePagedResponse,
    ) as PayCodePagedResponse;
}
