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
  InvoiceFormatCreateModel,
  InvoiceFormatModel,
  InvoiceFormatPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class InvoiceFormats<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of Invoice Formats
   *
   * @tags Invoice Formats
   * @name GetList
   * @summary Retrieves Invoice Formats
   * @request GET:/rest/invoice-formats
   * @secure */
  getList = (
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
    this.request<InvoiceFormatPagedResponse, ErrorResponse>(
      {
        path: `/rest/invoice-formats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceFormatPagedResponse,
    ) as InvoiceFormatPagedResponse;

  /**
   * @description Creates a new Invoice Format
   *
   * @tags Invoice Formats
   * @name Create14
   * @summary Creates a new Invoice Format
   * @request POST:/rest/invoice-formats
   * @secure */
  create14 = (data: InvoiceFormatCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoice-formats`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieve an Invoice Format by the provided key
   *
   * @tags Invoice Formats
   * @name Get19
   * @summary Retrieve an Invoice Format
   * @request GET:/rest/invoice-formats/{id}
   * @secure */
  get19 = (id: number, params: RequestParams = {}) =>
    this.request<InvoiceFormatModel, ErrorResponse>(
      {
        path: `/rest/invoice-formats/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      InvoiceFormatModel,
    ) as InvoiceFormatModel;

  /**
   * @description Update the attributes of an Invoice Format.
   *
   * @tags Invoice Formats
   * @name Update14
   * @summary Update an existing Invoice Format
   * @request PUT:/rest/invoice-formats/{id}
   * @secure */
  update14 = (id: number, data: InvoiceFormatModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoice-formats/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing invoice format given its key.
   *
   * @tags Invoice Formats
   * @name Delete13
   * @summary Delete an Invoice Format
   * @request DELETE:/rest/invoice-formats/{id}
   * @secure */
  delete13 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/invoice-formats/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
