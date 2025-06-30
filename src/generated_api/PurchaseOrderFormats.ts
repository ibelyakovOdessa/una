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
  PurchaseOrderFormatCreateModel,
  PurchaseOrderFormatModel,
  PurchaseOrderFormatSummaryPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PurchaseOrderFormats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of all purchase order formats.
   *
   * @tags Purchase Order Formats
   * @name GetList1
   * @summary Retrieves purchase order formats
   * @request GET:/rest/purchase-order-formats
   * @secure */
  getList1 = (
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
    this.request<PurchaseOrderFormatSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/purchase-order-formats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderFormatSummaryPagedResponse,
    ) as PurchaseOrderFormatSummaryPagedResponse;

  /**
   * @description Creates details of a purchase order format.
   *
   * @tags Purchase Order Formats
   * @name Create33
   * @summary Creates a purchase order format
   * @request POST:/rest/purchase-order-formats
   * @secure */
  create33 = (data: PurchaseOrderFormatCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/purchase-order-formats`,
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
   * @description Retrieves details of a purchase order format.
   *
   * @tags Purchase Order Formats
   * @name GetByKey34
   * @summary Retrieves a purchase order format
   * @request GET:/rest/purchase-order-formats/{id}
   * @secure */
  getByKey34 = (id: number, params: RequestParams = {}) =>
    this.request<PurchaseOrderFormatModel, ErrorResponse>(
      {
        path: `/rest/purchase-order-formats/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PurchaseOrderFormatModel,
    ) as PurchaseOrderFormatModel;

  /**
   * @description Update details of an existing purchase order format.
   *
   * @tags Purchase Order Formats
   * @name Update33
   * @summary Update an existing purchase order format
   * @request PUT:/rest/purchase-order-formats/{id}
   * @secure */
  update33 = (id: number, data: PurchaseOrderFormatModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-order-formats/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing purchase order format.
   *
   * @tags Purchase Order Formats
   * @name Delete30
   * @summary Deletes a purchase order format
   * @request DELETE:/rest/purchase-order-formats/{id}
   * @secure */
  delete30 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/purchase-order-formats/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
