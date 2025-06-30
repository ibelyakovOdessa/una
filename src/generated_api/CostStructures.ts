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
  CostStructureLaborCreateModel,
  CostStructureLaborKeysPagedResponse,
  CostStructureLaborModel,
  CostStructurePagedResponse,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CostStructures<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve a paged list of labor keys for a specified cost structure.
   *
   * @tags Cost Structures
   * @name GetCostStructureLaborKeys
   * @summary Retrieves labor keys for a cost structure
   * @request GET:/rest/cost-structures/{id}/labor
   * @secure */
  getCostStructureLaborKeys = (
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
    this.request<CostStructureLaborKeysPagedResponse, ErrorResponse>(
      {
        path: `/rest/cost-structures/${id}/labor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CostStructureLaborKeysPagedResponse,
    ) as CostStructureLaborKeysPagedResponse;

  /**
   * @description Assigns a labor cost element to the specified cost structure.
   *
   * @tags Cost Structures
   * @name AssignLaborCostElement
   * @summary Assigns labor cost element to a cost structure
   * @request POST:/rest/cost-structures/{id}/labor
   * @secure */
  assignLaborCostElement = (id: number, data: CostStructureLaborCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/cost-structures/${id}/labor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of cost structures filtered by optional active flag.
   *
   * @tags Cost Structures
   * @name Get11
   * @summary Retrieves cost structures
   * @request GET:/rest/cost-structures
   * @secure */
  get11 = (
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
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CostStructurePagedResponse, ErrorResponse>(
      {
        path: `/rest/cost-structures`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CostStructurePagedResponse,
    ) as CostStructurePagedResponse;

  /**
   * @description Retrieve a cost structure labor element by key.
   *
   * @tags Cost Structures
   * @name GetCostStructureLaborElement
   * @summary Retrieves a cost structure labor element
   * @request GET:/rest/cost-structures/labor/{id}
   * @secure */
  getCostStructureLaborElement = (id: number, params: RequestParams = {}) =>
    this.request<CostStructureLaborModel, ErrorResponse>(
      {
        path: `/rest/cost-structures/labor/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CostStructureLaborModel,
    ) as CostStructureLaborModel;
}
