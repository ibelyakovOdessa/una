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

import { CalendarRangeModel, ErrorResponse, FiscalYearBreakdownModel, FiscalYearPagedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Calendar<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of named date ranges including ranges relative to the fiscal calendar if enabled.
   *
   * @tags Calendar
   * @name GetDateRanges
   * @summary Retrieves list of relative date ranges ranges.
   * @request GET:/rest/calendar/ranges
   * @secure */
  getDateRanges = (
    query?: {
      /**
       * Optional start date for relative ranges
       * @format date
       * @example "2020-11-20"
       */
      start?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CalendarRangeModel[], ErrorResponse>(
      {
        path: `/rest/calendar/ranges`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CalendarRangeModel,
    ) as CalendarRangeModel;

  /**
   * @description Retrieves the breakdown of a fiscal year into its components.
   *
   * @tags Calendar
   * @name GetFiscalYearBreakdown
   * @summary Retrieves fiscal year breakdown.
   * @request GET:/rest/calendar/fiscal/years/{id}/breakdown
   * @secure */
  getFiscalYearBreakdown = (id: number, params: RequestParams = {}) =>
    this.request<FiscalYearBreakdownModel, ErrorResponse>(
      {
        path: `/rest/calendar/fiscal/years/${id}/breakdown`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FiscalYearBreakdownModel,
    ) as FiscalYearBreakdownModel;

  /**
   * @description Retrieves list of configured fiscal years.
   *
   * @tags Calendar
   * @name GetFiscalYears
   * @summary Retrieves fiscal years.
   * @request GET:/rest/calendar/fiscal/years
   * @secure */
  getFiscalYears = (
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
    this.request<FiscalYearPagedResponse, ErrorResponse>(
      {
        path: `/rest/calendar/fiscal/years`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FiscalYearPagedResponse,
    ) as FiscalYearPagedResponse;
}
