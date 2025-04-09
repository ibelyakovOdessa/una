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

import { AttachmentModel, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Attachments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves an attachment given an attachment id, consisting of both its metadata and content bytes.
   *
   * @tags Attachments
   * @name GetByKey1
   * @summary Retrieves attachment
   * @request GET:/rest/attachments/{id}
   * @secure */
  getByKey1 = (id: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/attachments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    );
}
