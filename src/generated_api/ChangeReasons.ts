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

import { ChangeReasonPagedResponse, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ChangeReasons<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of change reasons with indicators for whether they apply to audits or adjustments.
   *
   * @tags Change Reasons
   * @name Get4
   * @summary Retrieves change reasons
   * @request GET:/rest/change-reasons
   * @secure */
  get4 = (
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
      timesheetKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ChangeReasonPagedResponse, ErrorResponse>(
      {
        path: `/rest/change-reasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ChangeReasonPagedResponse,
    ) as ChangeReasonPagedResponse;
}
