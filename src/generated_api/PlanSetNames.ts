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
  PlanSetNameCreateModel,
  PlanSetNameModel,
  PlanSetNamePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PlanSetNames<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of Plan Set Names
   *
   * @tags Plan Set Names
   * @name Get30
   * @summary Retrieves a list of Plan Set Names
   * @request GET:/rest/plan-set-names
   * @secure */
  get30 = (
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
    this.request<PlanSetNamePagedResponse, ErrorResponse>(
      {
        path: `/rest/plan-set-names`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PlanSetNamePagedResponse,
    ) as PlanSetNamePagedResponse;

  /**
   * @description Create a new plan set name
   *
   * @tags Plan Set Names
   * @name Create27
   * @summary Create plan set name
   * @request POST:/rest/plan-set-names
   * @secure */
  create27 = (data: PlanSetNameCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/plan-set-names`,
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
   * @description Retrieves a plan set name by key
   *
   * @tags Plan Set Names
   * @name GetByKey29
   * @summary Retrieves a plan set name by key.
   * @request GET:/rest/plan-set-names/{id}
   * @secure */
  getByKey29 = (id: number, params: RequestParams = {}) =>
    this.request<PlanSetNameModel, ErrorResponse>(
      {
        path: `/rest/plan-set-names/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlanSetNameModel,
    ) as PlanSetNameModel;

  /**
   * @description Update an existing plan set name
   *
   * @tags Plan Set Names
   * @name Update27
   * @summary Update plan set name
   * @request PUT:/rest/plan-set-names/{id}
   * @secure */
  update27 = (id: number, data: PlanSetNameModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/plan-set-names/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing plan set name
   *
   * @tags Plan Set Names
   * @name Delete25
   * @summary Delete plan set name
   * @request DELETE:/rest/plan-set-names/{id}
   * @secure */
  delete25 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/plan-set-names/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
