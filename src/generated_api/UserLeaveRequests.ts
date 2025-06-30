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
  LeaveRequestCreateModel,
  LeaveRequestModel,
  LeaveRequestPagedResponse,
  LeaveRequestSubmitModel,
  LeaveStatusHistoryPagedResponse,
  MyLeaveRequestsParamsSortOrderEnum,
  MyLeaveRequestsParamsStatusEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserLeaveRequests<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Cancels a leave request for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name Cancel
   * @summary Cancel a leave request
   * @request POST:/rest/me/leave-requests/{id}/cancel
   * @secure */
  cancel = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/leave-requests/${id}/cancel`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of leave requests for the user referenced in the supplied auth token. Filter the results by optional list of leave requests statuses.
   *
   * @tags User Leave Requests
   * @name MyLeaveRequests
   * @summary Retrieves leave requests
   * @request GET:/rest/me/leave-requests
   * @secure */
  myLeaveRequests = (
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
       * start must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      start?: string;
      /**
       * end must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      end?: string;
      /** @uniqueItems true */
      status?: MyLeaveRequestsParamsStatusEnum[];
      /**
       * Order to apply for begin date sort. Defaults to ASC
       * @default "ASC"
       */
      sortOrder?: MyLeaveRequestsParamsSortOrderEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<LeaveRequestPagedResponse, ErrorResponse>(
      {
        path: `/rest/me/leave-requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveRequestPagedResponse,
    ) as LeaveRequestPagedResponse;

  /**
   * @description Creates a new leave request for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name Create20
   * @summary Create a new leave request
   * @request POST:/rest/me/leave-requests
   * @secure */
  create20 = (data: LeaveRequestCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/leave-requests`,
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
   * @description Updates a leave request for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name Update18
   * @summary Update a leave request
   * @request PUT:/rest/me/leave-requests/{id}
   * @secure */
  update18 = (id: number, data: LeaveRequestModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/leave-requests/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a leave request in INUSE and DISAPPROVED status for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name Delete17
   * @summary Delete a leave request
   * @request DELETE:/rest/me/leave-requests/{id}
   * @secure */
  delete17 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/leave-requests/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of status history for a given leave request, for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name GetStatusHistory4
   * @summary Retrieves leave request status history
   * @request GET:/rest/me/leave-requests/{id}/history
   * @secure */
  getStatusHistory4 = (
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
    this.request<LeaveStatusHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/me/leave-requests/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveStatusHistoryPagedResponse,
    ) as LeaveStatusHistoryPagedResponse;

  /**
   * @description Submit a leave request for the user referenced in the supplied auth token.
   *
   * @tags User Leave Requests
   * @name Submit6
   * @summary Submit a leave request for approval
   * @request POST:/rest/me/leave-requests/{id}/submit
   * @secure */
  submit6 = (id: number, data: LeaveRequestSubmitModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/leave-requests/${id}/submit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
