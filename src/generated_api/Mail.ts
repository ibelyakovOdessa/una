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

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Mail<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Receives and acknowledges a transaction email event.
   *
   * @tags Mail
   * @name TransactionalReceive
   * @summary Receives a transaction email event.
   * @request POST:/rest/mail/transactional/receive */
  transactionalReceive = (data: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/rest/mail/transactional/receive`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
