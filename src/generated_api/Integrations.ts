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
  CreateIntegrationValueParamsEnum,
  CreatedResponseModel,
  DeleteIntegrationValuesParamsEnum,
  ErrorResponse,
  GetIntegrationValueByKeyParamsEnum,
  GetIntegrationValuesParamsEnum,
  IntegrationCreateModel,
  IntegrationModel,
  IntegrationPagedResponse,
  IntegrationUser,
  IntegrationUserModel,
  IntegrationUserPagedResponse,
  IntegrationUserSearchModel,
  IntegrationValueCreateModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Integrations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of integrations filtered by optional query parameters. Returns only integrations created by the user unless otherwise specified.
   *
   * @tags Integrations
   * @name Get17
   * @summary Retrieves integrations
   * @request GET:/rest/integrations
   * @secure */
  get17 = (
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
      /** @default false */
      showAll?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IntegrationPagedResponse, ErrorResponse>(
      {
        path: `/rest/integrations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationPagedResponse,
    );

  /**
   * @description Creates a new integration.
   *
   * @tags Integrations
   * @name Create13
   * @summary Creates an integration
   * @request POST:/rest/integrations
   * @secure */
  create13 = (data: IntegrationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/integrations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Create a new integration user
   *
   * @tags Integrations
   * @name CreateIntegrationUser
   * @summary Create Integration User
   * @request POST:/rest/integrations/users
   * @secure */
  createIntegrationUser = (data: IntegrationUser, params: RequestParams = {}) =>
    this.request<IntegrationUserModel, ErrorResponse>(
      {
        path: `/rest/integrations/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      IntegrationUserModel,
    );

  /**
   * @description Retrieves a paged list of integration values for a given type.
   *
   * @tags Integrations
   * @name GetIntegrationValues
   * @summary Retrieves integration values
   * @request GET:/rest/integrations/{id}/{type}
   * @secure */
  getIntegrationValues = (
    id: number,
    type: GetIntegrationValuesParamsEnum,
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      internalKey?: number;
      externalKey?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IntegrationPagedResponse, ErrorResponse>(
      {
        path: `/rest/integrations/${id}/${type}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationPagedResponse,
    );

  /**
   * @description Creates a new integration value.
   *
   * @tags Integrations
   * @name CreateIntegrationValue
   * @summary Creates an integration value
   * @request POST:/rest/integrations/{id}/{type}
   * @secure */
  createIntegrationValue = (
    id: number,
    type: CreateIntegrationValueParamsEnum,
    data: IntegrationValueCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/integrations/${id}/${type}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves details of an integration.
   *
   * @tags Integrations
   * @name GetByKey16
   * @summary Retrieves an integration.
   * @request GET:/rest/integrations/{id}
   * @secure */
  getByKey16 = (id: number, params: RequestParams = {}) =>
    this.request<IntegrationModel, ErrorResponse>(
      {
        path: `/rest/integrations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationModel,
    );

  /**
   * @description Updates an existing integration given its key.
   *
   * @tags Integrations
   * @name Update13
   * @summary Updates an integration
   * @request PUT:/rest/integrations/{id}
   * @secure */
  update13 = (id: number, data: IntegrationModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/integrations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing integration given its key. Deleting an integration will purge all associated integration values.
   *
   * @tags Integrations
   * @name Delete12
   * @summary Delete an integration
   * @request DELETE:/rest/integrations/{id}
   * @secure */
  delete12 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/integrations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an integration value by key.
   *
   * @tags Integrations
   * @name GetIntegrationValueByKey
   * @summary Retrieves integration value by key
   * @request GET:/rest/integrations/{id}/{type}/{key}
   * @secure */
  getIntegrationValueByKey = (
    id: number,
    type: GetIntegrationValueByKeyParamsEnum,
    key: number,
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
    this.request<IntegrationPagedResponse, ErrorResponse>(
      {
        path: `/rest/integrations/${id}/${type}/${key}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationPagedResponse,
    );

  /**
   * @description Deletes an existing integration value given its key.
   *
   * @tags Integrations
   * @name DeleteIntegrationValues
   * @summary Deletes an integration value
   * @request DELETE:/rest/integrations/{id}/{type}/{key}
   * @secure */
  deleteIntegrationValues = (
    id: number,
    type: DeleteIntegrationValuesParamsEnum,
    key: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/integrations/${id}/${type}/${key}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Reset any third party integration user data
   *
   * @tags Integrations
   * @name ResetIntegrationUser
   * @summary Reset Integration User data
   * @request POST:/rest/integrations/users/{id}/reset
   * @secure */
  resetIntegrationUser = (id: number, params: RequestParams = {}) =>
    this.request<IntegrationUserModel, ErrorResponse>(
      {
        path: `/rest/integrations/users/${id}/reset`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationUserModel,
    );

  /**
   * @description Search for available integration users
   *
   * @tags Integrations
   * @name SearchIntegrationUsers
   * @summary Search Integration Users
   * @request POST:/rest/integrations/users/search
   * @secure */
  searchIntegrationUsers = (data: IntegrationUserSearchModel, params: RequestParams = {}) =>
    this.request<IntegrationUserPagedResponse, ErrorResponse>(
      {
        path: `/rest/integrations/users/search`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      IntegrationUserPagedResponse,
    );
}
