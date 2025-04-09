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
  OrganizationTypeCreateModel,
  OrganizationTypeModel,
  OrganizationTypePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class OrganizationTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of all organization types, optionally filtered by name.
   *
   * @tags Organization Types
   * @name Search11
   * @summary Retrieves organization types
   * @request GET:/rest/organization-types
   * @secure */
  search11 = (
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
    this.request<OrganizationTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/organization-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationTypePagedResponse,
    );

  /**
   * @description Creates a new organization type.
   *
   * @tags Organization Types
   * @name Create23
   * @summary Creates an organization type
   * @request POST:/rest/organization-types
   * @secure */
  create23 = (data: OrganizationTypeCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/organization-types`,
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
   * @description Retrieves details of an organization type.
   *
   * @tags Organization Types
   * @name GetByKey26
   * @summary Retrieves a organization type
   * @request GET:/rest/organization-types/{id}
   * @secure */
  getByKey26 = (id: number, params: RequestParams = {}) =>
    this.request<OrganizationTypeModel, ErrorResponse>(
      {
        path: `/rest/organization-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationTypeModel,
    );

  /**
   * @description Updates an existing organization type.
   *
   * @tags Organization Types
   * @name Update23
   * @summary Updates organization type
   * @request PUT:/rest/organization-types/{id}
   * @secure */
  update23 = (id: number, data: OrganizationTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organization-types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing organization type.
   *
   * @tags Organization Types
   * @name Delete20
   * @summary Deletes organization type
   * @request DELETE:/rest/organization-types/{id}
   * @secure */
  delete20 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organization-types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
