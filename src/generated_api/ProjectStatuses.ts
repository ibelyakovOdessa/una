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
  ProjectStatusCreateModel,
  ProjectStatusModel,
  ProjectStatusPagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProjectStatuses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of project statuses filtered by optional query parameters.
   *
   * @tags Project Statuses
   * @name Get32
   * @summary Retrieves project statuses
   * @request GET:/rest/project-statuses
   * @secure */
  get32 = (
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
      open?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectStatusPagedResponse, ErrorResponse>(
      {
        path: `/rest/project-statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectStatusPagedResponse,
    ) as ProjectStatusPagedResponse;

  /**
   * @description Creates a new project status.
   *
   * @tags Project Statuses
   * @name Create30
   * @summary Creates a project status
   * @request POST:/rest/project-statuses
   * @secure */
  create30 = (data: ProjectStatusCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/project-statuses`,
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
   * @description Retrieves details of project status.
   *
   * @tags Project Statuses
   * @name GetByKey31
   * @summary Retrieves a project status
   * @request GET:/rest/project-statuses/{id}
   * @secure */
  getByKey31 = (id: number, params: RequestParams = {}) =>
    this.request<ProjectStatusModel, ErrorResponse>(
      {
        path: `/rest/project-statuses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectStatusModel,
    ) as ProjectStatusModel;

  /**
   * @description Updates an existing project status given its key.
   *
   * @tags Project Statuses
   * @name Update30
   * @summary Updates a project status
   * @request PUT:/rest/project-statuses/{id}
   * @secure */
  update30 = (id: number, data: ProjectStatusModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/project-statuses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing project status given its key.
   *
   * @tags Project Statuses
   * @name Delete27
   * @summary Delete a project status
   * @request DELETE:/rest/project-statuses/{id}
   * @secure */
  delete27 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/project-statuses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
