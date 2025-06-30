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

import { VersionModel } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Ping<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Ping the Platform to check on its health.
   *
   * @tags Ping
   * @name Ping
   * @summary Health Check
   * @request GET:/rest/ping */
  ping = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/rest/ping`,
      method: "GET",
      ...params,
    });

  /**
   * @description Returns version for the instance.
   *
   * @tags Ping
   * @name Version
   * @summary Platform Version
   * @request GET:/rest/ping/version */
  version = (params: RequestParams = {}) =>
    this.request<VersionModel, any>(
      {
        path: `/rest/ping/version`,
        method: "GET",
        format: "json",
        ...params,
      },
      VersionModel,
    ) as VersionModel;
}
