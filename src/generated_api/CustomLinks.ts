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

import { CustomLinkModel, CustomLinkPagedResponse, ErrorResponse, Get12ParamsLinkTypeEnum } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CustomLinks<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a collection of custom links filtered by optional query parameters. By default, will retrieve only the custom links specific to the calling application if the token application is passed on. This can be overridden by setting the 'applicationType' parameter. The value should correspond to the application name listed in the token_application table (e.g., WEBAPP, SUBCONTRACTOR). Setting it to 'NONE' will return all results.
   *
   * @tags Custom Links
   * @name Get12
   * @summary Retrieves a collection of custom links
   * @request GET:/rest/custom-links
   * @secure */
  get12 = (
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
      active?: boolean;
      applicationType?: string;
      linkType?: Get12ParamsLinkTypeEnum;
      dashboardMenuId?: string;
      /** @default false */
      forConfig?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CustomLinkPagedResponse, ErrorResponse>(
      {
        path: `/rest/custom-links`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CustomLinkPagedResponse,
    ) as CustomLinkPagedResponse;

  /**
   * @description Retrieves details of a custom link
   *
   * @tags Custom Links
   * @name GetByKey9
   * @summary Retrieves a custom link.
   * @request GET:/rest/custom-links/{id}
   * @secure */
  getByKey9 = (id: number, params: RequestParams = {}) =>
    this.request<CustomLinkModel, ErrorResponse>(
      {
        path: `/rest/custom-links/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CustomLinkModel,
    ) as CustomLinkModel;
}
