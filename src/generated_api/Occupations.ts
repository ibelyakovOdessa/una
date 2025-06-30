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
  OccupationCreateModel,
  OccupationModel,
  OccupationPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Occupations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of occupations filtered by optional query parameters.
   *
   * @tags Occupations
   * @name Get25
   * @summary Retrieves occupations
   * @request GET:/rest/occupations
   * @secure */
  get25 = (
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
      code?: string;
      autocomplete?: string;
      /** @default false */
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OccupationPagedResponse, ErrorResponse>(
      {
        path: `/rest/occupations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OccupationPagedResponse,
    ) as OccupationPagedResponse;

  /**
   * @description Creates a new occupation.
   *
   * @tags Occupations
   * @name Create21
   * @summary Creates an occupation
   * @request POST:/rest/occupations
   * @secure */
  create21 = (data: OccupationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/occupations`,
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
   * @description Retrieves details of an occupation.
   *
   * @tags Occupations
   * @name GetByKey24
   * @summary Retrieves an occupation.
   * @request GET:/rest/occupations/{id}
   * @secure */
  getByKey24 = (id: number, params: RequestParams = {}) =>
    this.request<OccupationModel, ErrorResponse>(
      {
        path: `/rest/occupations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OccupationModel,
    ) as OccupationModel;

  /**
   * @description Updates an existing occupation given its key. The occupation name and active flag are updateable fields, but code is not.
   *
   * @tags Occupations
   * @name Update21
   * @summary Updates an occupation
   * @request PUT:/rest/occupations/{id}
   * @secure */
  update21 = (id: number, data: OccupationModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/occupations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing occupation given its key.
   *
   * @tags Occupations
   * @name Delete18
   * @summary Delete an occupation
   * @request DELETE:/rest/occupations/{id}
   * @secure */
  delete18 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/occupations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
