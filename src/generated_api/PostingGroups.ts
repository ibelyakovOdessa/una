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
  Get31ParamsTypeEnum,
  PostingGroupCreateModel,
  PostingGroupModel,
  PostingGroupPagedResponse,
  PostingGroupSourceModel,
  UpdateSourcesParamsEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PostingGroups<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of posting groups filtered by optional query parameters
   *
   * @tags Posting Groups
   * @name Get31
   * @summary Retrieves posting groups
   * @request GET:/rest/posting-groups
   * @secure */
  get31 = (
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
      /** @pattern ^\(.*\S.*\)$ */
      name?: string;
      /** @pattern ^\(.*\S.*\)$ */
      type?: Get31ParamsTypeEnum;
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PostingGroupPagedResponse, ErrorResponse>(
      {
        path: `/rest/posting-groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PostingGroupPagedResponse,
    ) as PostingGroupPagedResponse;

  /**
   * @description Create a new custom posting group
   *
   * @tags Posting Groups
   * @name Create28
   * @summary Create posting group
   * @request POST:/rest/posting-groups
   * @secure */
  create28 = (data: PostingGroupCreateModel, params: RequestParams = {}) =>
    this.request<PostingGroupCreateModel, ErrorResponse>(
      {
        path: `/rest/posting-groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PostingGroupCreateModel,
    ) as PostingGroupCreateModel;

  /**
   * @description Retrieves details of a posting group
   *
   * @tags Posting Groups
   * @name GetByKey30
   * @summary Retrieves a posting group.
   * @request GET:/rest/posting-groups/{id}
   * @secure */
  getByKey30 = (id: number, params: RequestParams = {}) =>
    this.request<PostingGroupModel, ErrorResponse>(
      {
        path: `/rest/posting-groups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PostingGroupModel,
    ) as PostingGroupModel;

  /**
   * @description Update a custom posting group
   *
   * @tags Posting Groups
   * @name Update28
   * @summary Update posting group
   * @request PUT:/rest/posting-groups/{id}
   * @secure */
  update28 = (id: number, data: PostingGroupModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/posting-groups/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a custom posting group
   *
   * @tags Posting Groups
   * @name Delete26
   * @summary Delete posting group
   * @request DELETE:/rest/posting-groups/{id}
   * @secure */
  delete26 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/posting-groups/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves default account sources for a posting group
   *
   * @tags Posting Groups
   * @name GetSources
   * @summary Retrieves a posting group's default account sources
   * @request GET:/rest/posting-groups/{id}/posting-defaults
   * @secure */
  getSources = (id: number, params: RequestParams = {}) =>
    this.request<PostingGroupSourceModel, ErrorResponse>(
      {
        path: `/rest/posting-groups/${id}/posting-defaults`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PostingGroupSourceModel,
    ) as PostingGroupSourceModel;

  /**
   * @description Update default account sources for a posting group
   *
   * @tags Posting Groups
   * @name UpdateSources
   * @summary Update a posting group's default account sources
   * @request PUT:/rest/posting-groups/{id}/posting-defaults/{category}
   * @secure */
  updateSources = (
    id: number,
    category: UpdateSourcesParamsEnum,
    data: PostingGroupSourceModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/posting-groups/${id}/posting-defaults/${category}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
