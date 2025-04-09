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
  AssignablePlannedTimePagedResponse,
  AssignablePlannedTimeSearchModel,
  CreateMatrixListCriteriaParamsDashboardEnum,
  CreatedResponseModel,
  DeleteMatrixListCriteriaFamilyEnum,
  DeleteMatrixSharedCriteriaFamilyEnum,
  ErrorResponse,
  KeyNameCodeModelPagedResponse,
  PeopleAllocationSearchModel,
  PlanDefaultsModel,
  PlannedTimeBookedSearchModel,
  PlannedTimeCreateModel,
  PlannedTimeModel,
  PlannedTimePagedResponse,
  PlannedTimeSearchModel,
  PlanningMatrixFilterPagedResponse,
  PlanningMatrixModel,
  PlanningMatrixSearchCriteriaModel,
  PlanningMatrixSearchCriteriaReadModel,
  PlanningMatrixSearchModel,
  PlanningPersonBookedModel,
  SchedulingPersonAllocationModel,
  SchedulingPersonSearchModel,
  SchedulingPersonSummaryPagedResponse,
  SchedulingProjectSearchModel,
  SchedulingProjectSummaryPagedResponse,
  UpdateMatrixListCriteriaByKeyParamsDashboardEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Planning<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of planned time and if they are assignable.
   *
   * @tags Planning
   * @name AssignablePlannedTime
   * @summary Retrieves assignable planned time
   * @request POST:/rest/planning/time/assignable
   * @secure */
  assignablePlannedTime = (
    data: AssignablePlannedTimeSearchModel,
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
    this.request<AssignablePlannedTimePagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/time/assignable`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      AssignablePlannedTimePagedResponse,
    );

  /**
   * @description Creates a new planned time record.
   *
   * @tags Planning
   * @name Create26
   * @summary Creates planned time
   * @request POST:/rest/planning/time
   * @secure */
  create26 = (data: PlannedTimeCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/planning/time`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of filter sets saved by the authenticated user.
   *
   * @tags Planning
   * @name GetMatrixListCriteria
   * @summary Retrieves saved filters.
   * @request GET:/rest/planning/time/matrix/criteria
   * @secure */
  getMatrixListCriteria = (
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
    this.request<PlanningMatrixFilterPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PlanningMatrixFilterPagedResponse,
    );

  /**
   * @description Saves a filter set for later use.
   *
   * @tags Planning
   * @name CreateMatrixListCriteria
   * @summary Save a filter set.
   * @request POST:/rest/planning/time/matrix/criteria
   * @secure */
  createMatrixListCriteria = (
    data: PlanningMatrixSearchCriteriaModel,
    query?: {
      /** Optional Dashboards filter will be added to. */
      dashboard?: CreateMatrixListCriteriaParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves a paged list of shared filter sets saved by the authenticated user.
   *
   * @tags Planning
   * @name GetMatrixSharedCriteria
   * @summary Retrieves saved shared filters.
   * @request GET:/rest/planning/time/matrix/criteria/share
   * @secure */
  getMatrixSharedCriteria = (
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
    this.request<PlanningMatrixFilterPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria/share`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PlanningMatrixFilterPagedResponse,
    );

  /**
   * @description Saves a shared filter set for later use.
   *
   * @tags Planning
   * @name CreateMatrixSharedCriteria
   * @summary Save a shared filter set.
   * @request POST:/rest/planning/time/matrix/criteria/share
   * @secure */
  createMatrixSharedCriteria = (data: PlanningMatrixSearchCriteriaModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria/share`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Retrieves details of a planned time record.
   *
   * @tags Planning
   * @name GetPlannedTimeByKey
   * @summary Retrieves planned time
   * @request GET:/rest/planning/time/{id}
   * @secure */
  getPlannedTimeByKey = (id: number, params: RequestParams = {}) =>
    this.request<PlannedTimeModel, ErrorResponse>(
      {
        path: `/rest/planning/time/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlannedTimeModel,
    );

  /**
   * @description Updates an existing planned time record.
   *
   * @tags Planning
   * @name Update26
   * @summary Updates planned time
   * @request PUT:/rest/planning/time/{id}
   * @secure */
  update26 = (id: number, data: PlannedTimeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/planning/time/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a planned time record.
   *
   * @tags Planning
   * @name Delete23
   * @summary Deletes planned time
   * @request DELETE:/rest/planning/time/{id}
   * @secure */
  delete23 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/planning/time/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a saved filter set by id.
   *
   * @tags Planning
   * @name GetMatrixListCriteriaByKey
   * @summary Retrieves a saved filter.
   * @request GET:/rest/planning/time/matrix/criteria/{id}
   * @secure */
  getMatrixListCriteriaByKey = (id: number, params: RequestParams = {}) =>
    this.request<PlanningMatrixSearchCriteriaReadModel, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlanningMatrixSearchCriteriaReadModel,
    );

  /**
   * @description Updates a saved filter set by id.
   *
   * @tags Planning
   * @name UpdateMatrixListCriteriaByKey
   * @summary Updates a saved filter.
   * @request PUT:/rest/planning/time/matrix/criteria/{id}
   * @secure */
  updateMatrixListCriteriaByKey = (
    id: number,
    data: PlanningMatrixSearchCriteriaModel,
    query?: {
      /** Optional Dashboards filter will be added to. Overwrites existing assignments. */
      dashboard?: UpdateMatrixListCriteriaByKeyParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/planning/time/matrix/criteria/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a filter set by id.
   *
   * @tags Planning
   * @name DeleteMatrixListCriteria
   * @summary Deletes a saved filter.
   * @request DELETE:/rest/planning/time/matrix/criteria/{id}
   * @secure */
  deleteMatrixListCriteria = (id: number, params: RequestParams = {}) =>
    this.request<
      {
        /** @format int32 */
        length?: number;
        /** @format uri */
        location?: string;
        language?: {
          language?: string;
          displayName?: string;
          country?: string;
          variant?: string;
          script?: string;
          /** @uniqueItems true */
          unicodeLocaleAttributes?: string[];
          /** @uniqueItems true */
          unicodeLocaleKeys?: string[];
          displayLanguage?: string;
          displayScript?: string;
          displayCountry?: string;
          displayVariant?: string;
          /** @uniqueItems true */
          extensionKeys?: string[];
          iso3Language?: string;
          iso3Country?: string;
        };
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        date?: string;
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        lastModified?: string;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        statusInfo?: {
          family?: DeleteMatrixListCriteriaFamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
        /** @format int32 */
        status?: number;
        stringHeaders?: Record<string, string[]>;
        entity?: object;
        /** @uniqueItems true */
        allowedMethods?: string[];
        cookies?: Record<
          string,
          {
            name?: string;
            value?: string;
            /** @format int32 */
            version?: number;
            path?: string;
            domain?: string;
            comment?: string;
            /** @format int32 */
            maxAge?: number;
            /**
             * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
             * @format date-time
             * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
             */
            expiry?: string;
            secure?: boolean;
            httpOnly?: boolean;
          }
        >;
        entityTag?: {
          value?: string;
          weak?: boolean;
        };
        /** @uniqueItems true */
        links?: {
          type?: string;
          /** @format uri */
          uri?: string;
          uriBuilder?: object;
          rel?: string;
          rels?: string[];
          title?: string;
          params?: Record<string, string>;
        }[];
        headers?: Record<string, object[]>;
      },
      ErrorResponse
    >(
      {
        path: `/rest/planning/time/matrix/criteria/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    );

  /**
   * @description Retrieves a saved shared filter set by id.
   *
   * @tags Planning
   * @name GetMatrixSharedCriteriaByKey
   * @summary Retrieves a saved shared filter.
   * @request GET:/rest/planning/time/matrix/criteria/{id}/share
   * @secure */
  getMatrixSharedCriteriaByKey = (id: number, params: RequestParams = {}) =>
    this.request<PlanningMatrixSearchCriteriaReadModel, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix/criteria/${id}/share`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlanningMatrixSearchCriteriaReadModel,
    );

  /**
   * @description Updates a saved shared filter set by id.
   *
   * @tags Planning
   * @name UpdateMatrixSharedCriteriaByKey
   * @summary Updates a saved shared filter.
   * @request PUT:/rest/planning/time/matrix/criteria/{id}/share
   * @secure */
  updateMatrixSharedCriteriaByKey = (id: number, data: PlanningMatrixSearchCriteriaModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/planning/time/matrix/criteria/${id}/share`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a shared filter set by id.
   *
   * @tags Planning
   * @name DeleteMatrixSharedCriteria
   * @summary Deletes a saved shared filter.
   * @request DELETE:/rest/planning/time/matrix/criteria/{id}/share
   * @secure */
  deleteMatrixSharedCriteria = (id: number, params: RequestParams = {}) =>
    this.request<
      {
        /** @format int32 */
        length?: number;
        /** @format uri */
        location?: string;
        language?: {
          language?: string;
          displayName?: string;
          country?: string;
          variant?: string;
          script?: string;
          /** @uniqueItems true */
          unicodeLocaleAttributes?: string[];
          /** @uniqueItems true */
          unicodeLocaleKeys?: string[];
          displayLanguage?: string;
          displayScript?: string;
          displayCountry?: string;
          displayVariant?: string;
          /** @uniqueItems true */
          extensionKeys?: string[];
          iso3Language?: string;
          iso3Country?: string;
        };
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        date?: string;
        /**
         * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
         * @format date-time
         * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
         */
        lastModified?: string;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        statusInfo?: {
          family?: DeleteMatrixSharedCriteriaFamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
        /** @format int32 */
        status?: number;
        stringHeaders?: Record<string, string[]>;
        entity?: object;
        /** @uniqueItems true */
        allowedMethods?: string[];
        cookies?: Record<
          string,
          {
            name?: string;
            value?: string;
            /** @format int32 */
            version?: number;
            path?: string;
            domain?: string;
            comment?: string;
            /** @format int32 */
            maxAge?: number;
            /**
             * date-time notation as defined by RFC 3339, section 5.6 with valid range from 1900-01-01T00:00:00 to 2099-12-31T23:59:59
             * @format date-time
             * @pattern ^[1-2]\d{3}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}
             */
            expiry?: string;
            secure?: boolean;
            httpOnly?: boolean;
          }
        >;
        entityTag?: {
          value?: string;
          weak?: boolean;
        };
        /** @uniqueItems true */
        links?: {
          type?: string;
          /** @format uri */
          uri?: string;
          uriBuilder?: object;
          rel?: string;
          rels?: string[];
          title?: string;
          params?: Record<string, string>;
        }[];
        headers?: Record<string, object[]>;
      },
      ErrorResponse
    >(
      {
        path: `/rest/planning/time/matrix/criteria/${id}/share`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    );

  /**
   * @description Retrieves list of available person orgs for planning, optionally filterable by org code (using a double-ended wildcard search) and project key. If project key is provided, and unanet.financials.use_financial_orgs is true, and the project has an owning org, the list of available person orgs will be further limited to those users whose person org's legal entity is the same as the legal entity of the project's owning org. An exception to this is that person orgs that are not marked as financial orgs will not be filtered out. Additionally, if unanet.multi_entity.enabled is true and the project has supporting orgs defined, person orgs from the supporting orgs will also appear (resource planners will need to have person org access to the support orgs).
   *
   * @tags Planning
   * @name GetAvailablePersonOrgs1
   * @summary Retrieves available person orgs
   * @request GET:/rest/planning/person/organizations
   * @secure */
  getAvailablePersonOrgs1 = (
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
      code?: string;
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/person/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    );

  /**
   * @description Retrieves list of available project orgs for planning, optionally filterable by org code using a double-ended wildcard search
   *
   * @tags Planning
   * @name GetAvailableProjectOrgs1
   * @summary Retrieves available project orgs
   * @request GET:/rest/planning/projects/organizations
   * @secure */
  getAvailableProjectOrgs1 = (
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
      code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/projects/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    );

  /**
   * @description Retrieves list of available project owning orgs for planning, optionally filterable by org code using a double-ended wildcard search
   *
   * @tags Planning
   * @name GetAvailableProjectOwningOrgs1
   * @summary Retrieves available project owning orgs
   * @request GET:/rest/planning/projects/owning-organizations
   * @secure */
  getAvailableProjectOwningOrgs1 = (
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
      code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/projects/owning-organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    );

  /**
   * @description Retrieves default plan values given a project, person, date
   *
   * @tags Planning
   * @name GetDefaults1
   * @summary Retrieves project planning defaults for a person and date
   * @request GET:/rest/planning/time/defaults/project/{id}/person/{personId}/{date}
   * @secure */
  getDefaults1 = (id: number, personId: number, date: string, params: RequestParams = {}) =>
    this.request<PlanDefaultsModel, ErrorResponse>(
      {
        path: `/rest/planning/time/defaults/project/${id}/person/${personId}/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlanDefaultsModel,
    );

  /**
   * @description Retrieves planned time allocation percentages for people within the given period(s).
   *
   * @tags Planning
   * @name PersonAllocation1
   * @summary Retrieves planned time allocation
   * @request POST:/rest/planning/time/people/allocation
   * @secure */
  personAllocation1 = (data: PeopleAllocationSearchModel, params: RequestParams = {}) =>
    this.request<SchedulingPersonAllocationModel, ErrorResponse>(
      {
        path: `/rest/planning/time/people/allocation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingPersonAllocationModel,
    );

  /**
   * @description Retrieves booked planned time, leave requests, and holidays for a given person and period.
   *
   * @tags Planning
   * @name PersonBooked
   * @summary Retrieves booked planned time
   * @request POST:/rest/planning/time/people/{id}/booked
   * @secure */
  personBooked = (id: number, data: PlannedTimeBookedSearchModel, params: RequestParams = {}) =>
    this.request<PlanningPersonBookedModel, ErrorResponse>(
      {
        path: `/rest/planning/time/people/${id}/booked`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PlanningPersonBookedModel,
    );

  /**
   * @description Retrieves planned time matrix data for project and people within the given period(s).
   *
   * @tags Planning
   * @name PlanningMatrix
   * @summary Retrieves planned matrix data
   * @request POST:/rest/planning/time/matrix
   * @secure */
  planningMatrix = (data: PlanningMatrixSearchModel, params: RequestParams = {}) =>
    this.request<PlanningMatrixModel, ErrorResponse>(
      {
        path: `/rest/planning/time/matrix`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PlanningMatrixModel,
    );

  /**
   * @description Search for a list of people based on resource plan criteria
   *
   * @tags Planning
   * @name SearchPeople1
   * @summary Search for people
   * @request POST:/rest/planning/people
   * @secure */
  searchPeople1 = (
    data: SchedulingPersonSearchModel,
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
    this.request<SchedulingPersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/people`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingPersonSummaryPagedResponse,
    );

  /**
   * @description Retrieves a paged list of planned time filtered by optional search criteria.
   *
   * @tags Planning
   * @name SearchPlannedTime
   * @summary Retrieves planned time
   * @request POST:/rest/planning/time/search
   * @secure */
  searchPlannedTime = (
    data: PlannedTimeSearchModel,
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
    this.request<PlannedTimePagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/time/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PlannedTimePagedResponse,
    );

  /**
   * @description Search for a list of eligible projects based on resource plan criteria
   *
   * @tags Planning
   * @name SearchProjects1
   * @summary Search for projects
   * @request POST:/rest/planning/projects
   * @secure */
  searchProjects1 = (
    data: SchedulingProjectSearchModel,
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
    this.request<SchedulingProjectSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/planning/projects`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingProjectSummaryPagedResponse,
    );
}
