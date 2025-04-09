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
  AccountCategoryModel,
  CategoryAccountKeyModel,
  CategoryAccountModel,
  CreatedResponseModel,
  ErrorResponse,
  ExpenseTypeAccountPagedResponse,
  ProjectTypeCreateModel,
  ProjectTypeModel,
  ProjectTypePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProjectTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of all project types, optionally filtered by name and active status.
   *
   * @tags Project Types
   * @name Search14
   * @summary Retrieves project types
   * @request GET:/rest/project-types
   * @secure */
  search14 = (
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
    this.request<ProjectTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/project-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypePagedResponse,
    );

  /**
   * @description Creates a new project type.
   *
   * @tags Project Types
   * @name Create31
   * @summary Creates project type
   * @request POST:/rest/project-types
   * @secure */
  create31 = (data: ProjectTypeCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/project-types`,
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
   * @description Retrieves details of a project type.
   *
   * @tags Project Types
   * @name GetByKey32
   * @summary Retrieves a project type
   * @request GET:/rest/project-types/{id}
   * @secure */
  getByKey32 = (id: number, params: RequestParams = {}) =>
    this.request<ProjectTypeModel, ErrorResponse>(
      {
        path: `/rest/project-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypeModel,
    );

  /**
   * @description Updates an existing project type.
   *
   * @tags Project Types
   * @name Update31
   * @summary Updates project type
   * @request PUT:/rest/project-types/{id}
   * @secure */
  update31 = (id: number, data: ProjectTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/project-types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing project type.
   *
   * @tags Project Types
   * @name Delete28
   * @summary Deletes project type
   * @request DELETE:/rest/project-types/{id}
   * @secure */
  delete28 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/project-types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of available project type account categories.
   *
   * @tags Project Types
   * @name GetAccountCategories4
   * @summary Retrieves a list of project type account categories
   * @request GET:/rest/project-types/account-categories
   * @secure */
  getAccountCategories4 = (params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/project-types/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    );

  /**
   * @description Retrieves a list of project type accounts.
   *
   * @tags Project Types
   * @name GetAccounts2
   * @summary Retrieves a list of project type accounts
   * @request GET:/rest/project-types/{id}/accounts
   * @secure */
  getAccounts2 = (id: number, params: RequestParams = {}) =>
    this.request<CategoryAccountModel[], ErrorResponse>(
      {
        path: `/rest/project-types/${id}/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CategoryAccountModel,
    );

  /**
   * @description Update a project type's account setup.
   *
   * @tags Project Types
   * @name UpdateAccounts
   * @summary Update a project type's accounts
   * @request PUT:/rest/project-types/{id}/accounts
   * @secure */
  updateAccounts = (id: number, data: CategoryAccountKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/project-types/${id}/accounts`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves cost accounts for a project type
   *
   * @tags Project Types
   * @name GetCostAccounts1
   * @summary Retrieves cost accounts for a project type
   * @request GET:/rest/project-types/{id}/cost-accounts
   * @secure */
  getCostAccounts1 = (
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
    this.request<ExpenseTypeAccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/project-types/${id}/cost-accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseTypeAccountPagedResponse,
    );
}
