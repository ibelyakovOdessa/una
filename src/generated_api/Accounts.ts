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

import { AccountPagedResponse, ErrorResponse, GetParamsTypeEnum } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of accounts filtered by optional query parameters.
   *
   * @tags Accounts
   * @name Get
   * @summary Retrieves accounts
   * @request GET:/rest/accounts
   * @secure */
  get = (
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
      type?: GetParamsTypeEnum;
      entryAllowed?: boolean;
      projectRequired?: boolean;
      /** @default false */
      includeInactive?: boolean;
      code?: string;
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AccountPagedResponse,
    ) as AccountPagedResponse;
}
