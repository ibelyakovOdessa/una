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

import { ErrorResponse, LogMessageListModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ExternalLogging<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Saves the supplied client device log messages.
   *
   * @tags External Logging
   * @name SaveLogs
   * @summary Saves client log messages
   * @request POST:/rest/log
   * @secure */
  saveLogs = (data: LogMessageListModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/log`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
