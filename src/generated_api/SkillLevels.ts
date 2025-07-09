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

import { ErrorResponse, SkillLevelCreateModel, SkillLevelModel, SkillLevelPagedResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SkillLevels<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of Skill Levels filtered by optional parameters.
   *
   * @tags Skill Levels
   * @name Search20
   * @summary Retrieves skill levels
   * @request GET:/rest/skill-levels
   * @secure */
  search20 = (
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
    this.request<SkillLevelPagedResponse, ErrorResponse>(
      {
        path: `/rest/skill-levels`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      SkillLevelPagedResponse,
    ) as SkillLevelPagedResponse;

  /**
   * @description Creates a new Skill Level
   *
   * @tags Skill Levels
   * @name Create38
   * @summary Creates a new skill level
   * @request POST:/rest/skill-levels
   * @secure */
  create38 = (data: SkillLevelCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-levels`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a Skill Level for the key provided
   *
   * @tags Skill Levels
   * @name Get34
   * @summary Retrieves a skill level
   * @request GET:/rest/skill-levels/{id}
   * @secure */
  get34 = (id: number, params: RequestParams = {}) =>
    this.request<SkillLevelModel, ErrorResponse>(
      {
        path: `/rest/skill-levels/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      SkillLevelModel,
    ) as SkillLevelModel;

  /**
   * @description Update the attributes of a skill level.
   *
   * @tags Skill Levels
   * @name Update38
   * @summary Update an existing skill level
   * @request PUT:/rest/skill-levels/{id}
   * @secure */
  update38 = (id: number, data: SkillLevelModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-levels/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing skill level.
   *
   * @tags Skill Levels
   * @name Delete36
   * @summary Delete an existing skill level
   * @request DELETE:/rest/skill-levels/{id}
   * @secure */
  delete36 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/skill-levels/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
