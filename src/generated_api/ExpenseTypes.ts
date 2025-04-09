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
  ErrorResponse,
  ExpenseTypeModel,
  ExpenseTypeSummaryModelPagedResponse,
  Get15ParamsWizardTypeEnum,
  ProjectTypeAccountPagedResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ExpenseTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of expense types filtered by optional query parameters.
   *
   * @tags Expense Types
   * @name Get15
   * @summary Retrieves expense types
   * @request GET:/rest/expense-types
   * @secure */
  get15 = (
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
      /** filter by expense type name. */
      name?: string;
      /** filter by 'enabled' status of the expense type. */
      enabled?: boolean;
      /** exclude overage expense types. */
      excludeOverage?: boolean;
      /** exclude 'ADVANCE' and 'CASH RETURN' expense types. */
      excludeAdvanceAndCashReturn?: boolean;
      /**  filter by wizard type. */
      wizardType?: Get15ParamsWizardTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ExpenseTypeSummaryModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/expense-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseTypeSummaryModelPagedResponse,
    );

  /**
   * @description Retrieves details of an expense type
   *
   * @tags Expense Types
   * @name GetByKey14
   * @summary Retrieves an expense type.
   * @request GET:/rest/expense-types/{id}
   * @secure */
  getByKey14 = (id: number, params: RequestParams = {}) =>
    this.request<ExpenseTypeModel, ErrorResponse>(
      {
        path: `/rest/expense-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ExpenseTypeModel,
    );

  /**
   * @description Retrieves cost accounts for an expense type
   *
   * @tags Expense Types
   * @name GetCostAccounts
   * @summary Retrieves cost accounts for expense types
   * @request GET:/rest/expense-types/{id}/cost-accounts
   * @secure */
  getCostAccounts = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectTypeAccountPagedResponse, ErrorResponse>(
      {
        path: `/rest/expense-types/${id}/cost-accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypeAccountPagedResponse,
    );
}
