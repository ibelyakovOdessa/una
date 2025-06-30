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

import { ErrorResponse, IndustryModel, IndustryPagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Industries<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of industries.
   *
   * @tags Industries
   * @name Get16
   * @summary Retrieves industries
   * @request GET:/rest/industries
   * @secure */
  get16 = (
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
    this.request<IndustryPagedResponse, ErrorResponse>(
      {
        path: `/rest/industries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      IndustryPagedResponse,
    ) as IndustryPagedResponse;

  /**
   * @description Retrieves an industry by key.
   *
   * @tags Industries
   * @name GetByKey15
   * @summary Retrieves an industry
   * @request GET:/rest/industries/{id}
   * @secure */
  getByKey15 = (id: number, params: RequestParams = {}) =>
    this.request<IndustryModel, ErrorResponse>(
      {
        path: `/rest/industries/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      IndustryModel,
    ) as IndustryModel;
}
