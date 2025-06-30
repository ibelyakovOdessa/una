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
  BusinessWeekCreateModel,
  BusinessWeekModel,
  BusinessWeekPagedResponse,
  CreatedResponseModel,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BusinessWeeks<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of business weeks filtered by optional query parameters
   *
   * @tags Business Weeks
   * @name Get3
   * @summary Retrieves business weeks
   * @request GET:/rest/business-weeks
   * @secure */
  get3 = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<BusinessWeekPagedResponse, ErrorResponse>(
      {
        path: `/rest/business-weeks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      BusinessWeekPagedResponse,
    ) as BusinessWeekPagedResponse;

  /**
   * @description Create a new business week
   *
   * @tags Business Weeks
   * @name Create1
   * @summary Create business week
   * @request POST:/rest/business-weeks
   * @secure */
  create1 = (data: BusinessWeekCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/business-weeks`,
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
   * @description Retrieves details of a business week
   *
   * @tags Business Weeks
   * @name GetByKey2
   * @summary Retrieves a business week.
   * @request GET:/rest/business-weeks/{id}
   * @secure */
  getByKey2 = (id: number, params: RequestParams = {}) =>
    this.request<BusinessWeekModel, ErrorResponse>(
      {
        path: `/rest/business-weeks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      BusinessWeekModel,
    ) as BusinessWeekModel;

  /**
   * @description Update an existing business week
   *
   * @tags Business Weeks
   * @name Update1
   * @summary Update business week
   * @request PUT:/rest/business-weeks/{id}
   * @secure */
  update1 = (id: number, data: BusinessWeekModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/business-weeks/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Delete an existing business week
   *
   * @tags Business Weeks
   * @name Delete1
   * @summary Delete business week
   * @request DELETE:/rest/business-weeks/{id}
   * @secure */
  delete1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/business-weeks/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
