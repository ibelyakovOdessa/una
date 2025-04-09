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

import { BankAccountPagedResponse, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class BankAccounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of bank accounts filtered by optional query parameters.
   *
   * @tags Bank accounts
   * @name Get2
   * @summary Retrieves bank accounts
   * @request GET:/rest/bank-accounts
   * @secure */
  get2 = (
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
      bankAccountNumber?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BankAccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/bank-accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      BankAccountPagedResponse,
    );
}
