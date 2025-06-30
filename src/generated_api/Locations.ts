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
  LocationCreateModel,
  LocationModel,
  LocationPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Locations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of locations filtered by optional query parameters.
   *
   * @tags Locations
   * @name Get23
   * @summary Retrieves locations
   * @request GET:/rest/locations
   * @secure */
  get23 = (
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
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LocationPagedResponse,
    ) as LocationPagedResponse;

  /**
   * @description Creates a new location.
   *
   * @tags Locations
   * @name Create18
   * @summary Creates location
   * @request POST:/rest/locations
   * @secure */
  create18 = (data: LocationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/locations`,
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
   * @description Retrieves details of location.
   *
   * @tags Locations
   * @name GetByKey20
   * @summary Retrieves a location
   * @request GET:/rest/locations/{id}
   * @secure */
  getByKey20 = (id: number, params: RequestParams = {}) =>
    this.request<LocationModel, ErrorResponse>(
      {
        path: `/rest/locations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      LocationModel,
    ) as LocationModel;
}
