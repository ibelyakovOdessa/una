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
  PaymentTermCreateModel,
  PaymentTermModel,
  PaymentTermPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PaymentTerms<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of payment terms filtered by optional active flag.
   *
   * @tags Payment Terms
   * @name Get28
   * @summary Retrieves payment terms
   * @request GET:/rest/payment-terms
   * @secure */
  get28 = (
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
      /** @default true */
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaymentTermPagedResponse, ErrorResponse>(
      {
        path: `/rest/payment-terms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PaymentTermPagedResponse,
    ) as PaymentTermPagedResponse;

  /**
   * @description Creates a new payment term.
   *
   * @tags Payment Terms
   * @name Create24
   * @summary Creates a payment term
   * @request POST:/rest/payment-terms
   * @secure */
  create24 = (data: PaymentTermCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/payment-terms`,
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
   * @description Retrieve a payment term.
   *
   * @tags Payment Terms
   * @name GetByKey27
   * @summary Retrieve a payment term
   * @request GET:/rest/payment-terms/{id}
   * @secure */
  getByKey27 = (id: number, params: RequestParams = {}) =>
    this.request<PaymentTermModel, ErrorResponse>(
      {
        path: `/rest/payment-terms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PaymentTermModel,
    ) as PaymentTermModel;

  /**
   * @description Updates a payment term.
   *
   * @tags Payment Terms
   * @name Update24
   * @summary Updates a payment term
   * @request PUT:/rest/payment-terms/{id}
   * @secure */
  update24 = (id: number, data: PaymentTermModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/payment-terms/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a payment term.
   *
   * @tags Payment Terms
   * @name Delete22
   * @summary Deletes an existing payment term.
   * @request DELETE:/rest/payment-terms/{id}
   * @secure */
  delete22 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/payment-terms/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
