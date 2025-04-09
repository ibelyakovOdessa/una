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
  CostReportCreateModel,
  CostReportElementModel,
  CostReportElementPagedResponse,
  CostReportModel,
  CostReportPagedResponse,
  CreatedResponseModel,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CostReports<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a cost report element by key
   *
   * @tags Cost Reports
   * @name GetByKey6
   * @summary Retrieves a cost report element by key.
   * @request GET:/rest/cost-reports/{costReportId}/report-elements/{id}
   * @secure */
  getByKey6 = (costReportId: number, id: number, params: RequestParams = {}) =>
    this.request<CostReportElementModel, ErrorResponse>(
      {
        path: `/rest/cost-reports/${costReportId}/report-elements/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CostReportElementModel,
    );

  /**
   * @description Retrieves a paged list of cost report elements
   *
   * @tags Cost Reports
   * @name GetReportElements
   * @summary Retrieves a list of cost report elements
   * @request GET:/rest/cost-reports/{costReportId}/report-elements
   * @secure */
  getReportElements = (
    costReportId: number,
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
    this.request<CostReportElementPagedResponse, ErrorResponse>(
      {
        path: `/rest/cost-reports/${costReportId}/report-elements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CostReportElementPagedResponse,
    );

  /**
   * @description Retrieves a paged list of cost reports
   *
   * @tags Cost Reports
   * @name Get10
   * @summary Retrieves a list of cost reports
   * @request GET:/rest/cost-reports
   * @secure */
  get10 = (
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
    this.request<CostReportPagedResponse, ErrorResponse>(
      {
        path: `/rest/cost-reports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CostReportPagedResponse,
    );

  /**
   * @description Create a new cost report
   *
   * @tags Cost Reports
   * @name Create5
   * @summary Create cost report
   * @request POST:/rest/cost-reports
   * @secure */
  create5 = (data: CostReportCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/cost-reports`,
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
   * @description Retrieves a cost report by key
   *
   * @tags Cost Reports
   * @name GetByKey7
   * @summary Retrieves a cost report by key.
   * @request GET:/rest/cost-reports/{id}
   * @secure */
  getByKey7 = (id: number, params: RequestParams = {}) =>
    this.request<CostReportModel, ErrorResponse>(
      {
        path: `/rest/cost-reports/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CostReportModel,
    );

  /**
   * @description Update an existing cost report
   *
   * @tags Cost Reports
   * @name Update6
   * @summary Update cost report
   * @request PUT:/rest/cost-reports/{id}
   * @secure */
  update6 = (id: number, data: CostReportModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/cost-reports/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing cost report
   *
   * @tags Cost Reports
   * @name Delete5
   * @summary Delete cost report
   * @request DELETE:/rest/cost-reports/{id}
   * @secure */
  delete5 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/cost-reports/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
