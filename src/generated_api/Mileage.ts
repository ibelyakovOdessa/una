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
  GetMileageRateSetsParamsUnitEnum,
  MileageRatePagedResponse,
  MileageRateSetModel,
  MileageRateSetPagedResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Mileage<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a mileage rate set by key.
   *
   * @tags Mileage
   * @name GetMileageRateSet
   * @summary Retrieves a mileage rate set.
   * @request GET:/rest/mileage/{id}
   * @secure */
  getMileageRateSet = (id: number, params: RequestParams = {}) =>
    this.request<MileageRateSetModel, ErrorResponse>(
      {
        path: `/rest/mileage/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      MileageRateSetModel,
    );

  /**
   * @description Retrieves a list of mileage rate sets filtered by optional criteria.
   *
   * @tags Mileage
   * @name GetMileageRateSets
   * @summary Retrieves mileage rate sets.
   * @request GET:/rest/mileage
   * @secure */
  getMileageRateSets = (
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
      description?: string;
      unit?: GetMileageRateSetsParamsUnitEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<MileageRateSetPagedResponse, ErrorResponse>(
      {
        path: `/rest/mileage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      MileageRateSetPagedResponse,
    );

  /**
   * @description Retrieves a list of mileage rates for a given rate set.
   *
   * @tags Mileage
   * @name GetMileageRatesForRateSet
   * @summary Retrieves mileage rates.
   * @request GET:/rest/mileage/{id}/rates
   * @secure */
  getMileageRatesForRateSet = (
    id: number,
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
    this.request<MileageRatePagedResponse, ErrorResponse>(
      {
        path: `/rest/mileage/${id}/rates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      MileageRatePagedResponse,
    );
}
