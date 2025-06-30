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
  EmployeeTypeCreateModel,
  EmployeeTypeModel,
  EmployeeTypePagedResponse,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EmployeeTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of all employee types.
   *
   * @tags Employee Types
   * @name Get13
   * @summary Retrieves employee types
   * @request GET:/rest/employee-types
   * @secure */
  get13 = (
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
      code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<EmployeeTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/employee-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      EmployeeTypePagedResponse,
    ) as EmployeeTypePagedResponse;

  /**
   * @description Create a new employee
   *
   * @tags Employee Types
   * @name Create9
   * @summary Create employee type
   * @request POST:/rest/employee-types
   * @secure */
  create9 = (data: EmployeeTypeCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/employee-types`,
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
   * @description Retrieves details of an employee type
   *
   * @tags Employee Types
   * @name GetByKey12
   * @summary Retrieves an employee type.
   * @request GET:/rest/employee-types/{id}
   * @secure */
  getByKey12 = (id: number, params: RequestParams = {}) =>
    this.request<EmployeeTypeModel, ErrorResponse>(
      {
        path: `/rest/employee-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      EmployeeTypeModel,
    ) as EmployeeTypeModel;

  /**
   * @description Update an existing employee type
   *
   * @tags Employee Types
   * @name Update10
   * @summary Update employee type
   * @request PUT:/rest/employee-types/{id}
   * @secure */
  update10 = (id: number, data: EmployeeTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/employee-types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing employee type
   *
   * @tags Employee Types
   * @name Delete9
   * @summary Delete employee type
   * @request DELETE:/rest/employee-types/{id}
   * @secure */
  delete9 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/employee-types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
