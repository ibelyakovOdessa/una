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

import { ErrorResponse, PaymentMethodPagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PaymentMethods<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of payment methods filtered by optional active flag.
   *
   * @tags Payment Methods
   * @name List2
   * @summary Retrieves payment methods
   * @request GET:/rest/payment-methods
   * @secure */
  list2 = (
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
      /** @default true */
      activeOnly?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaymentMethodPagedResponse, ErrorResponse>(
      {
        path: `/rest/payment-methods`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PaymentMethodPagedResponse,
    ) as PaymentMethodPagedResponse;
}
