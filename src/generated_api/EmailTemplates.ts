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

import { EmailTemplatePagedResponse, ErrorResponse, GetEmailTemplatesParamsTypeEnum } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class EmailTemplates<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of active email templates (messages, notifications, reminders), filterable by optional query parameters.
   *
   * @tags Email Templates
   * @name GetEmailTemplates
   * @summary Retrieves list of active email templates.
   * @request GET:/rest/email-templates
   * @secure */
  getEmailTemplates = (
    id: number,
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
      type?: GetEmailTemplatesParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<EmailTemplatePagedResponse, ErrorResponse>(
      {
        path: `/rest/email-templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      EmailTemplatePagedResponse,
    );
}
