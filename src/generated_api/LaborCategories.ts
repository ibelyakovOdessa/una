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
  LaborCategoryCreateModel,
  LaborCategoryModel,
  LaborCategoryPagedResponse,
  LaborCategoryRateModel,
  LaborCategoryRatePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LaborCategories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of labor categories filtered by optional query parameters.
   *
   * @tags Labor Categories
   * @name Get22
   * @summary Retrieves labor categories
   * @request GET:/rest/labor-categories
   * @secure */
  get22 = (
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaborCategoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/labor-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LaborCategoryPagedResponse,
    ) as LaborCategoryPagedResponse;

  /**
   * @description Creates a new labor category.
   *
   * @tags Labor Categories
   * @name Create17
   * @summary Creates a labor category
   * @request POST:/rest/labor-categories
   * @secure */
  create17 = (data: LaborCategoryCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/labor-categories`,
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
   * @description Retrieves a list of rates for a labor category.
   *
   * @tags Labor Categories
   * @name GetRates
   * @summary Retrieves a list of rates for a labor category.
   * @request GET:/rest/labor-categories/{id}/rates
   * @secure */
  getRates = (
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
    this.request<LaborCategoryRatePagedResponse, ErrorResponse>(
      {
        path: `/rest/labor-categories/${id}/rates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LaborCategoryRatePagedResponse,
    ) as LaborCategoryRatePagedResponse;

  /**
   * @description Updates a labor category rate.
   *
   * @tags Labor Categories
   * @name UpdateRate
   * @summary Updates a labor category rate.
   * @request PUT:/rest/labor-categories/{id}/rates
   * @secure */
  updateRate = (id: number, data: LaborCategoryRateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/labor-categories/${id}/rates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Creates a new labor category rate.
   *
   * @tags Labor Categories
   * @name CreateRate
   * @summary Creates a labor category rate
   * @request POST:/rest/labor-categories/{id}/rates
   * @secure */
  createRate = (id: number, data: LaborCategoryRateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/labor-categories/${id}/rates`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes the labor category rate with the provided begin date.
   *
   * @tags Labor Categories
   * @name DeleteRate
   * @summary Deletes an existing labor category rate.
   * @request DELETE:/rest/labor-categories/{id}/rates/{beginDate}
   * @secure */
  deleteRate = (id: number, beginDate: string, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/labor-categories/${id}/rates/${beginDate}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a labor category.
   *
   * @tags Labor Categories
   * @name GetByKey19
   * @summary Retrieves a labor category.
   * @request GET:/rest/labor-categories/{id}
   * @secure */
  getByKey19 = (id: number, params: RequestParams = {}) =>
    this.request<LaborCategoryModel, ErrorResponse>(
      {
        path: `/rest/labor-categories/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      LaborCategoryModel,
    ) as LaborCategoryModel;

  /**
   * @description Updates a labor category and its rates. All existing rates will be replaced with the supplied rates.
   *
   * @tags Labor Categories
   * @name Update16
   * @summary Updates a labor category
   * @request PUT:/rest/labor-categories/{id}
   * @secure */
  update16 = (id: number, data: LaborCategoryModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/labor-categories/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
