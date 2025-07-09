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

import { CreatedResponseModel, ErrorResponse, ImportedExpenseCreateModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ImportedExpenses<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new imported credit card expense.
   *
   * @tags Imported Expenses
   * @name Create12
   * @summary Creates an imported credit card expense.
   * @request POST:/rest/imported-expenses
   * @secure */
  create12 = (
    data: ImportedExpenseCreateModel,
    query?: {
      /** @default true */
      sendEmail?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/imported-expenses`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Deletes a new imported credit card expense.
   *
   * @tags Imported Expenses
   * @name Delete12
   * @summary Deletes an imported credit card expense.
   * @request DELETE:/rest/imported-expenses/{id}
   * @secure */
  delete12 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/imported-expenses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
