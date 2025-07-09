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
  UnitOfMeasureCreateModel,
  UnitOfMeasureModel,
  UnitOfMeasurePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UnitsOfMeasure<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of uoms filtered by optional query parameters.
   *
   * @tags Units of Measure
   * @name Get39
   * @summary Retrieves a list of UOMs
   * @request GET:/rest/uoms
   * @secure */
  get39 = (
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
    this.request<UnitOfMeasurePagedResponse, ErrorResponse>(
      {
        path: `/rest/uoms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      UnitOfMeasurePagedResponse,
    ) as UnitOfMeasurePagedResponse;

  /**
   * @description Creates a new Unit of Measure (UOM).
   *
   * @tags Units of Measure
   * @name Create42
   * @summary Creates a UOM
   * @request POST:/rest/uoms
   * @secure */
  create42 = (data: UnitOfMeasureCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/uoms`,
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
   * @description Retrieves details of a UOM by id.
   *
   * @tags Units of Measure
   * @name GetByKey39
   * @summary Retrieves a Unit of Measure (UOM)
   * @request GET:/rest/uoms/{id}
   * @secure */
  getByKey39 = (id: number, params: RequestParams = {}) =>
    this.request<UnitOfMeasureModel, ErrorResponse>(
      {
        path: `/rest/uoms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      UnitOfMeasureModel,
    ) as UnitOfMeasureModel;

  /**
   * @description Updates a Unit of Measure (UOM) by its id.
   *
   * @tags Units of Measure
   * @name Update41
   * @summary Updates Unit of Measure (UOM)
   * @request PUT:/rest/uoms/{id}
   * @secure */
  update41 = (id: number, data: UnitOfMeasureModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/uoms/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing UOM by its id.
   *
   * @tags Units of Measure
   * @name Delete38
   * @summary Delete a Unit of Measure (UOM)
   * @request DELETE:/rest/uoms/{id}
   * @secure */
  delete38 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/uoms/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
