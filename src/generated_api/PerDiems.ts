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
  ErrorResponse,
  PerDiemLocationPagedResponse,
  PerDiemMIEBreakdownPagedResponse,
  PerDiemRegionPagedResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PerDiems<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of city/county locations and rates for a per diem country/state.
   *
   * @tags Per Diems
   * @name GetCityCounties
   * @summary Retrieves per diem city/county locations and rates for a country/state.
   * @request GET:/rest/per-diems/regions/{countryStateName}
   * @secure */
  getCityCounties = (
    countryStateName: string,
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
      cityCountyName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PerDiemLocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/per-diems/regions/${countryStateName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PerDiemLocationPagedResponse,
    ) as PerDiemLocationPagedResponse;

  /**
   * @description Retrieves a paged list of country/states for per diem rates.
   *
   * @tags Per Diems
   * @name GetCountryStates
   * @summary Retrieves per diem rate country/states.
   * @request GET:/rest/per-diems/regions
   * @secure */
  getCountryStates = (
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
    this.request<PerDiemRegionPagedResponse, ErrorResponse>(
      {
        path: `/rest/per-diems/regions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PerDiemRegionPagedResponse,
    ) as PerDiemRegionPagedResponse;

  /**
   * @description Retrieves a paged list of  per diem meals and incidental expense rates.
   *
   * @tags Per Diems
   * @name GetPerDiemMieBreakdowns
   * @summary Retrieves per diem meals and incidental expense rates.
   * @request GET:/rest/per-diems/mies
   * @secure */
  getPerDiemMieBreakdowns = (
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
    this.request<PerDiemMIEBreakdownPagedResponse, ErrorResponse>(
      {
        path: `/rest/per-diems/mies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PerDiemMIEBreakdownPagedResponse,
    ) as PerDiemMIEBreakdownPagedResponse;
}
