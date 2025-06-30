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
  ExchangeRateCreateModel,
  ExchangeRateModel,
  ExchangeRatePagedResponse,
  ExchangeRateSearchModel,
  ExchangeRateTypeCreateModel,
  ExchangeRateTypeModel,
  ExchangeRateTypePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ExchangeRates<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Create a new exchange rate
   *
   * @tags Exchange Rates
   * @name Create10
   * @summary Create exchange rate
   * @request POST:/rest/exchange-rates
   * @secure */
  create10 = (data: ExchangeRateCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/exchange-rates`,
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
   * @description Retrieves a paged list of exchange rate types filtered by optional query parameters
   *
   * @tags Exchange Rates
   * @name GetTypes1
   * @summary Retrieves exchange rate types
   * @request GET:/rest/exchange-rates/types
   * @secure */
  getTypes1 = (
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
      rateType?: string;
      getDefaultRateType?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExchangeRateTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/exchange-rates/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExchangeRateTypePagedResponse,
    ) as ExchangeRateTypePagedResponse;

  /**
   * @description Create a new exchange rate type
   *
   * @tags Exchange Rates
   * @name CreateType
   * @summary Create exchange rate type
   * @request POST:/rest/exchange-rates/types
   * @secure */
  createType = (data: ExchangeRateTypeCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/exchange-rates/types`,
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
   * @description Retrieves an exchange rate given its ID
   *
   * @tags Exchange Rates
   * @name Get14
   * @summary Retrieves exchange rate by id
   * @request GET:/rest/exchange-rates/{id}
   * @secure */
  get14 = (id: number, params: RequestParams = {}) =>
    this.request<ExchangeRateModel, ErrorResponse>(
      {
        path: `/rest/exchange-rates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExchangeRateModel,
    ) as ExchangeRateModel;

  /**
   * @description Update an existing exchange rate
   *
   * @tags Exchange Rates
   * @name Update11
   * @summary Update exchange rate
   * @request PUT:/rest/exchange-rates/{id}
   * @secure */
  update11 = (id: number, data: ExchangeRateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/exchange-rates/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing exchange rate
   *
   * @tags Exchange Rates
   * @name Delete10
   * @summary Delete exchange rate
   * @request DELETE:/rest/exchange-rates/{id}
   * @secure */
  delete10 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/exchange-rates/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an exchange rate type by its id
   *
   * @tags Exchange Rates
   * @name GetTypeByKey
   * @summary Retrieves an exchange rate type by id
   * @request GET:/rest/exchange-rates/types/{id}
   * @secure */
  getTypeByKey = (id: number, params: RequestParams = {}) =>
    this.request<ExchangeRateTypeModel, ErrorResponse>(
      {
        path: `/rest/exchange-rates/types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExchangeRateTypeModel,
    ) as ExchangeRateTypeModel;

  /**
   * @description Update an existing exchange rate type
   *
   * @tags Exchange Rates
   * @name UpdateType
   * @summary Update exchange rate type
   * @request PUT:/rest/exchange-rates/types/{id}
   * @secure */
  updateType = (id: number, data: ExchangeRateTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/exchange-rates/types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing exchange rate type
   *
   * @tags Exchange Rates
   * @name DeleteType
   * @summary Delete exchange rate type
   * @request DELETE:/rest/exchange-rates/types/{id}
   * @secure */
  deleteType = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/exchange-rates/types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves derived exchange rate matching from and to currencies for a given date
   *
   * @tags Exchange Rates
   * @name GetDerivedExchangeRateByCurrenciesForDate
   * @summary Retrieves derived exchange rate matching from and to currencies
   * @request GET:/rest/exchange-rates/{fromCurrencyId}/{toCurrencyId}/{date}
   * @secure */
  getDerivedExchangeRateByCurrenciesForDate = (
    fromCurrencyId: number,
    toCurrencyId: number,
    date: string,
    params: RequestParams = {},
  ) =>
    this.request<number, ErrorResponse>(
      {
        path: `/rest/exchange-rates/${fromCurrencyId}/${toCurrencyId}/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      number,
    ) as number;

  /**
   * @description Retrieves a paged list of exchange rates filtered by optional search criteria.
   *
   * @tags Exchange Rates
   * @name Search5
   * @summary Retrieves exchange rates
   * @request POST:/rest/exchange-rates/search
   * @secure */
  search5 = (
    data: ExchangeRateSearchModel,
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
    this.request<ExchangeRatePagedResponse, ErrorResponse>(
      {
        path: `/rest/exchange-rates/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ExchangeRatePagedResponse,
    ) as ExchangeRatePagedResponse;
}
