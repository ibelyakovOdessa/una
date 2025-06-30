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
  AssigningMatrixModel,
  AssigningMatrixSearchCriteriaModel,
  AssigningMatrixSearchModel,
  AssigningMatrixSearchPagedResponse,
  AssignmentDefaultsModel,
  CreateAssigningListCriteriaParamsDashboardEnum,
  CreatedResponseModel,
  DeleteAssigningListCriteriaFamilyEnum,
  DeleteAssigningSharedCriteriaFamilyEnum,
  ErrorResponse,
  KeyNameCodeModelPagedResponse,
  PeopleAllocationSearchModel,
  SchedulingPersonAllocationModel,
  SchedulingPersonSearchModel,
  SchedulingPersonSummaryPagedResponse,
  SchedulingProjectSearchModel,
  SchedulingProjectSummaryPagedResponse,
  UpdateAssigningListCriteriaByKeyParamsDashboardEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Assigning<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves assignment matrix data for project and people within the given period(s).
   *
   * @tags Assigning
   * @name AssignmentMatrix
   * @summary Retrieves assigment matrix data
   * @request POST:/rest/assigning/matrix
   * @secure */
  assignmentMatrix = (data: AssigningMatrixSearchModel, params: RequestParams = {}) =>
    this.request<AssigningMatrixModel, ErrorResponse>(
      {
        path: `/rest/assigning/matrix`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      AssigningMatrixModel,
    ) as AssigningMatrixModel;

  /**
   * @description Retrieves a paged list of filter sets saved by the authenticated user.
   *
   * @tags Assigning
   * @name GetAssigningListCriteria
   * @summary Retrieves saved assigning filters.
   * @request GET:/rest/assigning/matrix/criteria
   * @secure */
  getAssigningListCriteria = (params: RequestParams = {}) =>
    this.request<AssigningMatrixSearchPagedResponse, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssigningMatrixSearchPagedResponse,
    ) as AssigningMatrixSearchPagedResponse;

  /**
   * @description Saves a filter set for later use.
   *
   * @tags Assigning
   * @name CreateAssigningListCriteria
   * @summary Save a filter set.
   * @request POST:/rest/assigning/matrix/criteria
   * @secure */
  createAssigningListCriteria = (
    data: AssigningMatrixSearchCriteriaModel,
    query?: {
      /** Optional Dashboards filter will be added to. */
      dashboard?: CreateAssigningListCriteriaParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria`,
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
   * @description Retrieves a paged list of filter sets shared by the authenticated user.
   *
   * @tags Assigning
   * @name GetAssigningSharedCriteria
   * @summary Retrieves saved shared assigning filters.
   * @request GET:/rest/assigning/matrix/criteria/share
   * @secure */
  getAssigningSharedCriteria = (params: RequestParams = {}) =>
    this.request<AssigningMatrixSearchPagedResponse, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria/share`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssigningMatrixSearchPagedResponse,
    ) as AssigningMatrixSearchPagedResponse;

  /**
   * @description Saves a shared filter set for later use.
   *
   * @tags Assigning
   * @name CreateAssigningSharedCriteria
   * @summary Save a shared filter set.
   * @request POST:/rest/assigning/matrix/criteria/share
   * @secure */
  createAssigningSharedCriteria = (data: AssigningMatrixSearchCriteriaModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria/share`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a saved filter set by id.
   *
   * @tags Assigning
   * @name GetAssigningListCriteriaByKey
   * @summary Retrieves a saved assigning filter.
   * @request GET:/rest/assigning/matrix/criteria/{id}
   * @secure */
  getAssigningListCriteriaByKey = (id: number, params: RequestParams = {}) =>
    this.request<AssigningMatrixSearchCriteriaModel, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssigningMatrixSearchCriteriaModel,
    ) as AssigningMatrixSearchCriteriaModel;

  /**
   * @description Updates a saved filter set by id.
   *
   * @tags Assigning
   * @name UpdateAssigningListCriteriaByKey
   * @summary Updates a saved assigning filter.
   * @request PUT:/rest/assigning/matrix/criteria/{id}
   * @secure */
  updateAssigningListCriteriaByKey = (
    id: number,
    data: AssigningMatrixSearchCriteriaModel,
    query?: {
      /** Optional Dashboards filter will be added to. Overwrites existing assignments. */
      dashboard?: UpdateAssigningListCriteriaByKeyParamsDashboardEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/assigning/matrix/criteria/${id}`,
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
   * @tags Assigning
   * @name DeleteAssigningListCriteria
   * @summary Deletes a saved assigning filter.
   * @request DELETE:/rest/assigning/matrix/criteria/{id}
   * @secure */
  deleteAssigningListCriteria = (id: number, params: RequestParams = {}) =>
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
        headers?: Record<string, object[]>;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        /** @format int32 */
        status?: number;
        statusInfo?: {
          family?: DeleteAssigningListCriteriaFamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
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
      },
      ErrorResponse
    >(
      {
        path: `/rest/assigning/matrix/criteria/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    ) as string;

  /**
   * @description Retrieves a saved shared filter set by id.
   *
   * @tags Assigning
   * @name GetAssigningSharedCriteriaByKey
   * @summary Retrieves a saved shared assigning filter.
   * @request GET:/rest/assigning/matrix/criteria/{id}/share
   * @secure */
  getAssigningSharedCriteriaByKey = (id: number, params: RequestParams = {}) =>
    this.request<AssigningMatrixSearchModel, ErrorResponse>(
      {
        path: `/rest/assigning/matrix/criteria/${id}/share`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssigningMatrixSearchModel,
    ) as AssigningMatrixSearchModel;

  /**
   * @description Updates a saved shared filter set by id.
   *
   * @tags Assigning
   * @name UpdateAssigningSharedCriteriaByKey
   * @summary Updates a saved shared assigning filter.
   * @request PUT:/rest/assigning/matrix/criteria/{id}/share
   * @secure */
  updateAssigningSharedCriteriaByKey = (
    id: number,
    data: AssigningMatrixSearchCriteriaModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/assigning/matrix/criteria/${id}/share`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a shared filter set by id.
   *
   * @tags Assigning
   * @name DeleteAssigningSharedCriteria
   * @summary Deletes a saved shared assigning filter.
   * @request DELETE:/rest/assigning/matrix/criteria/{id}/share
   * @secure */
  deleteAssigningSharedCriteria = (id: number, params: RequestParams = {}) =>
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
        headers?: Record<string, object[]>;
        metadata?: Record<string, object[]>;
        mediaType?: {
          type?: string;
          subtype?: string;
          parameters?: Record<string, string>;
          wildcardType?: boolean;
          wildcardSubtype?: boolean;
        };
        /** @format int32 */
        status?: number;
        statusInfo?: {
          family?: DeleteAssigningSharedCriteriaFamilyEnum;
          /** @format int32 */
          statusCode?: number;
          reasonPhrase?: string;
        };
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
      },
      ErrorResponse
    >(
      {
        path: `/rest/assigning/matrix/criteria/${id}/share`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    ) as string;

  /**
   * @description Retrieves list of available person orgs for assigning, optionally filterable by org code (using a double-ended wildcard search) and project key. If project key is provided, and unanet.financials.use_financial_orgs is true, and the project has an owning org, the list of available person orgs will be further limited to those users whose person org's legal entity is the same as the legal entity of the project's owning org. An exception to this is that person orgs that are not marked as financial orgs will not be filtered out. Additionally, if unanet.multi_entity.enabled is true and the project has supporting orgs defined, person orgs from the supporting orgs will also appear (resource planners will need to have person org access to the support orgs).
   *
   * @tags Assigning
   * @name GetAvailablePersonOrgs
   * @summary Retrieves available person orgs
   * @request GET:/rest/assigning/person/organizations
   * @secure */
  getAvailablePersonOrgs = (
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
        path: `/rest/assigning/person/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves list of available project orgs for assigning, optionally filterable by org code using a double-ended wildcard search
   *
   * @tags Assigning
   * @name GetAvailableProjectOrgs
   * @summary Retrieves available project orgs
   * @request GET:/rest/assigning/projects/organizations
   * @secure */
  getAvailableProjectOrgs = (
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
        path: `/rest/assigning/projects/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves list of available project owning orgs for assigning, optionally filterable by org code using a double-ended wildcard search
   *
   * @tags Assigning
   * @name GetAvailableProjectOwningOrgs
   * @summary Retrieves available project owning orgs
   * @request GET:/rest/assigning/projects/owning-organizations
   * @secure */
  getAvailableProjectOwningOrgs = (
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
        path: `/rest/assigning/projects/owning-organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves default assignment values given a project, person, date
   *
   * @tags Assigning
   * @name GetDefaults
   * @summary Retrieves project assignment defaults for a person and date
   * @request GET:/rest/assigning/defaults/project/{id}/person/{personId}/{date}
   * @secure */
  getDefaults = (id: number, personId: number, date: string, params: RequestParams = {}) =>
    this.request<AssignmentDefaultsModel, ErrorResponse>(
      {
        path: `/rest/assigning/defaults/project/${id}/person/${personId}/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssignmentDefaultsModel,
    ) as AssignmentDefaultsModel;

  /**
   * @description Retrieves assignment allocation percentages for people within the given period(s).
   *
   * @tags Assigning
   * @name PersonAllocation
   * @summary Retrieves people assignment allocation
   * @request POST:/rest/assigning/people/allocation
   * @secure */
  personAllocation = (data: PeopleAllocationSearchModel, params: RequestParams = {}) =>
    this.request<SchedulingPersonAllocationModel, ErrorResponse>(
      {
        path: `/rest/assigning/people/allocation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingPersonAllocationModel,
    ) as SchedulingPersonAllocationModel;

  /**
   * @description Search for a list of people based on resource assignment criteria
   *
   * @tags Assigning
   * @name SearchPeople
   * @summary Search for people
   * @request POST:/rest/assigning/people
   * @secure */
  searchPeople = (
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
        path: `/rest/assigning/people`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingPersonSummaryPagedResponse,
    ) as SchedulingPersonSummaryPagedResponse;

  /**
   * @description Search for a list of eligible projects based on resource assign criteria
   *
   * @tags Assigning
   * @name SearchProjects
   * @summary Search for projects
   * @request POST:/rest/assigning/projects
   * @secure */
  searchProjects = (
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
        path: `/rest/assigning/projects`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      SchedulingProjectSummaryPagedResponse,
    ) as SchedulingProjectSummaryPagedResponse;
}
