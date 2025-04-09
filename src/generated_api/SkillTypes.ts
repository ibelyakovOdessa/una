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

import { ErrorResponse, SkillTypeCreateModel, SkillTypeModel, SkillTypePagedResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SkillTypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of Skill Types
   *
   * @tags Skill Types
   * @name List3
   * @summary Retrieves skill types
   * @request GET:/rest/skill-types
   * @secure */
  list3 = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<SkillTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/skill-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      SkillTypePagedResponse,
    );

  /**
   * @description Creates a new Skill Type
   *
   * @tags Skill Types
   * @name Create39
   * @summary Creates a new skill type
   * @request POST:/rest/skill-types
   * @secure */
  create39 = (data: SkillTypeCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-types`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a Skill Type for the key provided
   *
   * @tags Skill Types
   * @name Get35
   * @summary Retrieves a skill type
   * @request GET:/rest/skill-types/{id}
   * @secure */
  get35 = (id: number, params: RequestParams = {}) =>
    this.request<SkillTypeModel, ErrorResponse>(
      {
        path: `/rest/skill-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      SkillTypeModel,
    );

  /**
   * @description Update the attributes of a skill type.
   *
   * @tags Skill Types
   * @name Update39
   * @summary Update an existing skill type
   * @request PUT:/rest/skill-types/{id}
   * @secure */
  update39 = (id: number, data: SkillTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing skill type.
   *
   * @tags Skill Types
   * @name Delete36
   * @summary Delete an existing skill type
   * @request DELETE:/rest/skill-types/{id}
   * @secure */
  delete36 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
