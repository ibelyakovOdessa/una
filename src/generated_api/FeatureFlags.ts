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

import { ErrorResponse, FeatureFlagModel } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class FeatureFlags<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a feature flag
   *
   * @tags Feature Flags
   * @name GetFlag
   * @summary Retrieve Feature Flag
   * @request GET:/rest/feature-flags/{id}
   * @secure */
  getFlag = (id: string, params: RequestParams = {}) =>
    this.request<FeatureFlagModel, ErrorResponse>(
      {
        path: `/rest/feature-flags/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      FeatureFlagModel,
    );
}
