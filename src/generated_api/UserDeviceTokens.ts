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
  DeviceTokenCreateModel,
  DeviceTokenPagedResponseModel,
  ErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserDeviceTokens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve all device tokens registered for the user.
   *
   * @tags User Device Tokens
   * @name PersonDeviceTokens
   * @summary Retrieves user device tokens
   * @request GET:/rest/me/device-tokens
   * @secure */
  personDeviceTokens = (
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
    this.request<DeviceTokenPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/device-tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      DeviceTokenPagedResponseModel,
    );

  /**
   * @description Registers a new device token to the user.
   *
   * @tags User Device Tokens
   * @name AddPersonDeviceToken
   * @summary Register new device token
   * @request POST:/rest/me/device-tokens
   * @secure */
  addPersonDeviceToken = (data: DeviceTokenCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/me/device-tokens`,
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
   * @description Removes a device token registered to the user.
   *
   * @tags User Device Tokens
   * @name RemovePersonDeviceTokens
   * @summary Remove device token
   * @request DELETE:/rest/me/device-tokens/{id}
   * @secure */
  removePersonDeviceTokens = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/me/device-tokens/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
