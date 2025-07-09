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

import { ErrorResponse, SkillCreateModel, SkillModel, SkillPagedResponse, SkillSearchModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Skills<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new Skill
   *
   * @tags Skills
   * @name Create37
   * @summary Creates a new skill
   * @request POST:/rest/skills
   * @secure */
  create37 = (data: SkillCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skills`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a Skill for the key provided
   *
   * @tags Skills
   * @name Get33
   * @summary Retrieves a skill
   * @request GET:/rest/skills/{id}
   * @secure */
  get33 = (id: number, params: RequestParams = {}) =>
    this.request<SkillModel, ErrorResponse>(
      {
        path: `/rest/skills/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      SkillModel,
    ) as SkillModel;

  /**
   * @description Update the attributes of a skill.
   *
   * @tags Skills
   * @name Update37
   * @summary Update an existing skill
   * @request PUT:/rest/skills/{id}
   * @secure */
  update37 = (id: number, data: SkillModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skills/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing skill.
   *
   * @tags Skills
   * @name Delete35
   * @summary Delete an existing skill
   * @request DELETE:/rest/skills/{id}
   * @secure */
  delete35 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skills/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of Skills filtered by optional parameters.
   *
   * @tags Skills
   * @name Search19
   * @summary Retrieves skills
   * @request POST:/rest/skills/search
   * @secure */
  search19 = (
    data: SkillSearchModel,
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
    this.request<SkillPagedResponse, ErrorResponse>(
      {
        path: `/rest/skills/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SkillPagedResponse,
    ) as SkillPagedResponse;
}
