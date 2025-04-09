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

import { CostElementPagedResponse, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CostElements<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of cost elements.
   *
   * @tags Cost Elements
   * @name Get9
   * @summary Retrieves cost elements
   * @request GET:/rest/cost-elements
   * @secure */
  get9 = (
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
    this.request<CostElementPagedResponse, ErrorResponse>(
      {
        path: `/rest/cost-elements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CostElementPagedResponse,
    );
}
