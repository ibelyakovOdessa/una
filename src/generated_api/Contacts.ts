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
  ContactAddressTypePagedResponse,
  ContactCategoryPagedResponse,
  ContactEmailTypePagedResponse,
  ContactPhoneTypePagedResponse,
  ErrorResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Contacts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of contact address types
   *
   * @tags Contacts
   * @name GetContactAddressTypes
   * @summary Retrieves contact address types
   * @request GET:/rest/contacts/address-types
   * @secure */
  getContactAddressTypes = (
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
    this.request<ContactAddressTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/contacts/address-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContactAddressTypePagedResponse,
    ) as ContactAddressTypePagedResponse;

  /**
   * @description Retrieves a paged list of contact categories
   *
   * @tags Contacts
   * @name GetContactCategories
   * @summary Retrieves contact categories
   * @request GET:/rest/contacts/categories
   * @secure */
  getContactCategories = (
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
      name?: string;
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ContactCategoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/contacts/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContactCategoryPagedResponse,
    ) as ContactCategoryPagedResponse;

  /**
   * @description Retrieves a paged list of contact email types
   *
   * @tags Contacts
   * @name GetContactEmailTypes
   * @summary Retrieves contact email types
   * @request GET:/rest/contacts/email-types
   * @secure */
  getContactEmailTypes = (
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
    this.request<ContactEmailTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/contacts/email-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContactEmailTypePagedResponse,
    ) as ContactEmailTypePagedResponse;

  /**
   * @description Retrieves a paged list of contact phone types
   *
   * @tags Contacts
   * @name GetContactPhoneTypes
   * @summary Retrieves contact phone types
   * @request GET:/rest/contacts/phone-types
   * @secure */
  getContactPhoneTypes = (
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
    this.request<ContactPhoneTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/contacts/phone-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContactPhoneTypePagedResponse,
    ) as ContactPhoneTypePagedResponse;
}
