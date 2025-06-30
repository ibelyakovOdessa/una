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
  LeaveRequestPagedResponse,
  LeaveRequestsParamsStatusEnum,
  LeaveStatusHistoryPagedResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class LeaveRequests<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of status history for a given leave request.
   *
   * @tags Leave Requests
   * @name GetStatusHistory2
   * @summary Retrieves leave request status history
   * @request GET:/rest/leave-requests/{id}/history
   * @secure */
  getStatusHistory2 = (
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
        path: `/rest/leave-requests/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveStatusHistoryPagedResponse,
    ) as LeaveStatusHistoryPagedResponse;

  /**
   * @description Retrieves a paged list of leave requests, filtering the results by optional criteria.
   *
   * @tags Leave Requests
   * @name LeaveRequests
   * @summary Retrieves leave requests
   * @request GET:/rest/leave-requests
   * @secure */
  leaveRequests = (
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
       * Defaults to today. Must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      start?: string;
      /**
       * Must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      end?: string;
      /** @uniqueItems true */
      personKey?: number[];
      /** @uniqueItems true */
      status?: LeaveRequestsParamsStatusEnum[];
      /**
       * Must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      statusStart?: string;
      /**
       * Must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      statusEnd?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<LeaveRequestPagedResponse, ErrorResponse>(
      {
        path: `/rest/leave-requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveRequestPagedResponse,
    ) as LeaveRequestPagedResponse;
}
