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

import { ErrorResponse, SocioeconomicStatusModel, SocioeconomicStatusPagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class SocioeconomicStatuses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of socioeconomic statuses.
   *
   * @tags Socioeconomic Statuses
   * @name Get36
   * @summary Retrieves socioeconomic statuses
   * @request GET:/rest/socioeconomic-statuses
   * @secure */
  get36 = (
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
    this.request<SocioeconomicStatusPagedResponse, ErrorResponse>(
      {
        path: `/rest/socioeconomic-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      SocioeconomicStatusPagedResponse,
    );

  /**
   * @description Retrieves a socioeconomic status by key.
   *
   * @tags Socioeconomic Statuses
   * @name GetByKey36
   * @summary Retrieves a socioeconomic status
   * @request GET:/rest/socioeconomic-statuses/{id}
   * @secure */
  getByKey36 = (id: number, params: RequestParams = {}) =>
    this.request<SocioeconomicStatusModel, ErrorResponse>(
      {
        path: `/rest/socioeconomic-statuses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      SocioeconomicStatusModel,
    );
}
