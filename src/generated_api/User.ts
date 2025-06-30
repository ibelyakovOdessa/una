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
  AlternateKeyModel,
  AlternatePagedResponse,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  ErrorResponse,
  LeaveBalancePagedResponseModel,
  LeaveBalanceSearchModel,
  MeUpdateModel,
  MyProjectCreateModel,
  MyProjectPagedResponseModel,
  MyProjectSearchModel,
  PersonModel,
  PersonRateBaseModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves attachment details for the user referenced in the supplied auth token.
   *
   * @tags User
   * @name Attachments
   * @summary Retrieves user attachment details.
   * @request GET:/rest/me/attachments
   * @secure */
  attachments = (
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
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Add an attachment for the user referenced in the supplied auth token.
   *
   * @tags User
   * @name AddAttachment5
   * @summary Adds user attachment
   * @request POST:/rest/me/attachments
   * @secure */
  addAttachment5 = (data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/attachments`,
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
   * @description Retrieves the timesheet user's assigned project list
   *
   * @tags User
   * @name AssignedProjects
   * @summary Retrieves the timesheet user's assigned project list
   * @request GET:/rest/me/my-projects
   * @secure */
  assignedProjects = (
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
    this.request<MyProjectPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/my-projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      MyProjectPagedResponseModel,
    ) as MyProjectPagedResponseModel;

  /**
   * @description Adds projects to the user's My Projects list.
   *
   * @tags User
   * @name AddProjects
   * @summary Adds projects to the user's My Projects list
   * @request POST:/rest/me/my-projects
   * @secure */
  addProjects = (data: MyProjectCreateModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/my-projects`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves the timesheet user's available project list
   *
   * @tags User
   * @name AvailableProjects
   * @summary Retrieves the timesheet user's available project list
   * @request POST:/rest/me/my-projects/available
   * @secure */
  availableProjects = (
    data: MyProjectSearchModel,
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
    this.request<MyProjectPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/my-projects/available`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      MyProjectPagedResponseModel,
    ) as MyProjectPagedResponseModel;

  /**
   * @description Retrieves an attachment for the user referenced in the supplied auth token. The response contains the full bytes of the attachment.
   *
   * @tags User
   * @name GetAttachment6
   * @summary Retrieves user attachment
   * @request GET:/rest/me/attachments/{id}
   * @secure */
  getAttachment6 = (id: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/me/attachments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Deletes an attachment for the user referenced in the supplied auth token.
   *
   * @tags User
   * @name DeleteAttachment5
   * @summary Deletes user attachment
   * @request DELETE:/rest/me/attachments/{id}
   * @secure */
  deleteAttachment5 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/attachments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve list of alternate approvers for the user.
   *
   * @tags User
   * @name GetAlternates
   * @summary Retrieve list of alternate approvers
   * @request GET:/rest/me/alternates
   * @secure */
  getAlternates = (
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
    this.request<AlternatePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/alternates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AlternatePagedResponse,
    ) as AlternatePagedResponse;

  /**
   * @description Update alternate approvers for the user.
   *
   * @tags User
   * @name UpdateAlternates
   * @summary Update alternate approvers
   * @request PUT:/rest/me/alternates
   * @secure */
  updateAlternates = (data: AlternateKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/alternates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieve list of persons the user is an alternate for
   *
   * @tags User
   * @name GetAssignedAlternates
   * @summary Retrieve alternates for user
   * @request GET:/rest/me/alternates/for
   * @secure */
  getAssignedAlternates = (
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
      /** @format int64 */
      rolesType?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AlternatePagedResponse, ErrorResponse>(
      {
        path: `/rest/me/alternates/for`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AlternatePagedResponse,
    ) as AlternatePagedResponse;

  /**
   * @description Retrieves the timesheet user's Leave Balance
   *
   * @tags User
   * @name LeaveBalance
   * @summary Retrieves the timesheet user's Leave Balance
   * @request POST:/rest/me/leave
   * @secure */
  leaveBalance = (
    data: LeaveBalanceSearchModel,
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
    this.request<LeaveBalancePagedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/leave`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      LeaveBalancePagedResponseModel,
    ) as LeaveBalancePagedResponseModel;

  /**
   * @description Retrieves details of the user referenced in the supplied auth token.
   *
   * @tags User
   * @name Me
   * @summary Retrieves user details
   * @request GET:/rest/me
   * @secure */
  me = (params: RequestParams = {}) =>
    this.request<PersonModel, ErrorResponse>(
      {
        path: `/rest/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonModel,
    ) as PersonModel;

  /**
   * @description Updates the set of editable values for the user referenced in the supplied auth token.
   *
   * @tags User
   * @name Update19
   * @summary Updates user details
   * @request PUT:/rest/me
   * @secure */
  update19 = (data: MeUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of all of the rates for the user referenced in the supplied auth token.
   *
   * @tags User
   * @name Rates
   * @summary Retrieves user rates
   * @request GET:/rest/me/rates
   * @secure */
  rates = (params: RequestParams = {}) =>
    this.request<PersonRateBaseModel[], ErrorResponse>(
      {
        path: `/rest/me/rates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonRateBaseModel,
    ) as PersonRateBaseModel;

  /**
   * @description Deletes a project from the user's My Projects list.
   *
   * @tags User
   * @name RemoveProject
   * @summary Deletes a project from the user's My Projects list
   * @request DELETE:/rest/me/my-projects/{projectId}
   * @secure */
  removeProject = (
    projectId: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      taskId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/my-projects/${projectId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
}
