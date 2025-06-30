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

import {
  CreatedResponseModel,
  ErrorResponse,
  TimePeriodPagedResponse,
  TimePeriodSearchModel,
  TimePeriodSetupModel,
  TimePeriodSetupPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TimePeriodSetups<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of time period definitions.
   *
   * @tags Time Period Setups
   * @name Get37
   * @summary Retrieves time period definitions
   * @request GET:/rest/time-period-setups
   * @secure */
  get37 = (
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
    this.request<TimePeriodSetupPagedResponse, ErrorResponse>(
      {
        path: `/rest/time-period-setups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimePeriodSetupPagedResponse,
    ) as TimePeriodSetupPagedResponse;

  /**
   * @description Creates a time period definition.
   *
   * @tags Time Period Setups
   * @name Create40
   * @summary Creates time period definition
   * @request POST:/rest/time-period-setups
   * @secure */
  create40 = (data: TimePeriodSetupModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/time-period-setups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves details of a time period definition.
   *
   * @tags Time Period Setups
   * @name GetByKey37
   * @summary Retrieves a time period definition
   * @request GET:/rest/time-period-setups/{id}
   * @secure */
  getByKey37 = (id: number, params: RequestParams = {}) =>
    this.request<TimePeriodSetupModel, ErrorResponse>(
      {
        path: `/rest/time-period-setups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      TimePeriodSetupModel,
    ) as TimePeriodSetupModel;

  /**
   * @description Retrieves a paged list of time periods for a time period setup, filtered by search criteria.
   *
   * @tags Time Period Setups
   * @name SearchTimePeriods
   * @summary Retrieves time periods for a time period setup.
   * @request POST:/rest/time-period-setups/{id}/time-periods/search
   * @secure */
  searchTimePeriods = (
    id: number,
    data: TimePeriodSearchModel,
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
    this.request<TimePeriodPagedResponse, ErrorResponse>(
      {
        path: `/rest/time-period-setups/${id}/time-periods/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TimePeriodPagedResponse,
    ) as TimePeriodPagedResponse;
}
