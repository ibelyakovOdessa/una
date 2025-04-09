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

import { ErrorResponse, InvoiceNumberFormatPagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class InvoiceNumberFormats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of Invoice Number Formats filtered by optional query parameters.
   *
   * @tags Invoice Number Formats
   * @name Get20
   * @summary Retrieves Invoice Number Formats
   * @request GET:/rest/invoice-number-formats
   * @secure */
  get20 = (
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
      prefix?: string;
      /** @format int32 */
      minWidth?: number;
      /** @format int32 */
      startWith?: number;
      defaultSelected?: boolean;
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<InvoiceNumberFormatPagedResponse, ErrorResponse>(
      {
        path: `/rest/invoice-number-formats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceNumberFormatPagedResponse,
    );
}
