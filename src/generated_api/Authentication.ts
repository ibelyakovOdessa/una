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
  CustomerTokenBasedCredentials,
  CustomerUserCredentials,
  ErrorResponse,
  ForgotPasswordRequestModel,
  ResetPasswordRequestModel,
  UserTokenModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authentication<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Sends a forgot password link to the user if they exist in the system.
   *
   * @tags Authentication
   * @name ForgotPassword
   * @summary Sends forgotten password email
   * @request POST:/rest/login/forgot-password */
  forgotPassword = (data: ForgotPasswordRequestModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/login/forgot-password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves an authentication token based on the provided user credentials.
   *
   * @tags Authentication
   * @name Login
   * @summary Retrieves user authentication token
   * @request POST:/rest/login */
  login = (data: CustomerUserCredentials, params: RequestParams = {}) =>
    this.request<UserTokenModel, ErrorResponse>(
      {
        path: `/rest/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      UserTokenModel,
    ) as UserTokenModel;

  /**
   * @description Retrieves an authentication token based on the provided OAuth 2.0 access token.
   *
   * @tags Authentication
   * @name LoginOAuth
   * @summary Retrieves user authentication token via OAuth 2.0 access token validation
   * @request POST:/rest/login/oauth */
  loginOAuth = (
    data: CustomerTokenBasedCredentials,
    query?: {
      /** Force authentication using service account settings. */
      serviceAccount?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserTokenModel, ErrorResponse>(
      {
        path: `/rest/login/oauth`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      UserTokenModel,
    ) as UserTokenModel;

  /**
   * @description Resets a user's password after verifying request.
   *
   * @tags Authentication
   * @name ResetPassword
   * @summary Resets password
   * @request POST:/rest/login/reset-password */
  resetPassword = (data: ResetPasswordRequestModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/login/reset-password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Issues a token with a new expiration time.
   *
   * @tags Authentication
   * @name Refresh
   * @summary Issues refreshed token.
   * @request GET:/rest/token/refresh
   * @secure */
  refresh = (params: RequestParams = {}) =>
    this.request<UserTokenModel, ErrorResponse>(
      {
        path: `/rest/token/refresh`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      UserTokenModel,
    ) as UserTokenModel;
}
