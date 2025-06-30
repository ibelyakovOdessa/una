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
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  ErrorResponse,
  KeysModel,
  LocationPagedResponse,
  WageDeterminationCreateModel,
  WageDeterminationModel,
  WageDeterminationOccupationCreateModel,
  WageDeterminationOccupationModel,
  WageDeterminationOccupationPagedResponse,
  WageDeterminationPagedResponse,
  WageDeterminationSearchModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class WageDeterminations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of attachments for a given wage determination.
   *
   * @tags Wage Determinations
   * @name GetAttachments11
   * @summary Retrieves wage determination attachments
   * @request GET:/rest/wage-determinations/{id}/attachments
   * @secure */
  getAttachments11 = (
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
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Uploads an attachment to an wage determination.
   *
   * @tags Wage Determinations
   * @name AddAttachment14
   * @summary Uploads attachment to wage determination
   * @request POST:/rest/wage-determinations/{id}/attachments
   * @secure */
  addAttachment14 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/attachments`,
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
   * @description Adds a location to a wage determination to limit which locations are available for charging.
   *
   * @tags Wage Determinations
   * @name AddLocation1
   * @summary Adds a location to a wage determination
   * @request POST:/rest/wage-determinations/{id}/locations/{locationId}
   * @secure */
  addLocation1 = (id: number, locationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/locations/${locationId}`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Removes an association between a wage determination and a location
   *
   * @tags Wage Determinations
   * @name DeleteLocation2
   * @summary Removes an association between a wage determination and a location
   * @request DELETE:/rest/wage-determinations/{id}/locations/{locationId}
   * @secure */
  deleteLocation2 = (id: number, locationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/locations/${locationId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of occupations for a given wage determination key
   *
   * @tags Wage Determinations
   * @name GetWageDeterminationOccupations
   * @summary Retrieves wage determination occupations
   * @request GET:/rest/wage-determinations/{id}/occupations
   * @secure */
  getWageDeterminationOccupations = (
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
    this.request<WageDeterminationOccupationPagedResponse, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/occupations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      WageDeterminationOccupationPagedResponse,
    ) as WageDeterminationOccupationPagedResponse;

  /**
   * @description Adds an occupation to a wage determination to limit which locations are available for charging.
   *
   * @tags Wage Determinations
   * @name AddOccupation
   * @summary Adds an occupation to a wage determination
   * @request POST:/rest/wage-determinations/{id}/occupations
   * @secure */
  addOccupation = (id: number, data: WageDeterminationOccupationCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/occupations`,
      method: "POST",
      body: data,
      secure: true,
      ...params,
    });

  /**
   * @description Creates a new SCA Wage Determination.
   *
   * @tags Wage Determinations
   * @name Create46
   * @summary Creates an SCA Wage Determination
   * @request POST:/rest/wage-determinations
   * @secure */
  create46 = (data: WageDeterminationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations`,
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
   * @description Retrieves details of an SCA wage determination.
   *
   * @tags Wage Determinations
   * @name GetByKey42
   * @summary Retrieves an wage determination.
   * @request GET:/rest/wage-determinations/{id}
   * @secure */
  getByKey42 = (id: number, params: RequestParams = {}) =>
    this.request<WageDeterminationModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      WageDeterminationModel,
    ) as WageDeterminationModel;

  /**
   * @description Updates an existing SCA wage determination given its key. The wage determination name and active flag are updateable fields, but code is not.
   *
   * @tags Wage Determinations
   * @name Update45
   * @summary Updates an SCA wage determination
   * @request PUT:/rest/wage-determinations/{id}
   * @secure */
  update45 = (id: number, data: WageDeterminationModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing SCA wage determination given its key.
   *
   * @tags Wage Determinations
   * @name Delete41
   * @summary Delete an SCA wage determination
   * @request DELETE:/rest/wage-determinations/{id}
   * @secure */
  delete41 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a given wage determination
   *
   * @tags Wage Determinations
   * @name GetAttachment15
   * @summary Retrieves wage determination attachment
   * @request GET:/rest/wage-determinations/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment15 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Deletes an wage determination attachment and its associations.
   *
   * @tags Wage Determinations
   * @name DeleteAttachment14
   * @summary Deletes wage determination attachment
   * @request DELETE:/rest/wage-determinations/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment14 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a Wage Determination Occupation
   *
   * @tags Wage Determinations
   * @name GetWageDeterminationOccupation
   * @summary Retrieves a wage determination occupation
   * @request GET:/rest/wage-determinations/{id}/occupations/{occupationId}
   * @secure */
  getWageDeterminationOccupation = (id: number, occupationId: number, params: RequestParams = {}) =>
    this.request<WageDeterminationOccupationModel, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      WageDeterminationOccupationModel,
    ) as WageDeterminationOccupationModel;

  /**
   * @description Update an occupation associated to a wage determination.
   *
   * @tags Wage Determinations
   * @name UpdateOccupation
   * @summary Update an occupation associated to a wage determination
   * @request PUT:/rest/wage-determinations/{id}/occupations/{occupationId}
   * @secure */
  updateOccupation = (
    id: number,
    occupationId: number,
    data: WageDeterminationOccupationModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
      method: "PUT",
      body: data,
      secure: true,
      ...params,
    });

  /**
   * @description Delete an occupation associated to a wage determination.
   *
   * @tags Wage Determinations
   * @name DeleteOccupation
   * @summary Delete an occupation associated to a wage determination
   * @request DELETE:/rest/wage-determinations/{id}/occupations/{occupationId}
   * @secure */
  deleteOccupation = (id: number, occupationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of locations for a given wage determination key
   *
   * @tags Wage Determinations
   * @name GetLocations3
   * @summary Retrieves wage determination locations
   * @request GET:/rest/wage-determinations/{id}/locations
   * @secure */
  getLocations3 = (
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
    this.request<LocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/wage-determinations/${id}/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LocationPagedResponse,
    ) as LocationPagedResponse;

  /**
   * @description Updates the locations associated with a wage determination. The list will be overridden with the supplied list of location keys.
   *
   * @tags Wage Determinations
   * @name UpdateLocations1
   * @summary Updates the locations associated with a wage determination
   * @request PUT:/rest/wage-determinations/{id}/locations
   * @secure */
  updateLocations1 = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/wage-determinations/${id}/locations`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of SCA wage determinations filtered by optional search criteria.
   *
   * @tags Wage Determinations
   * @name Search24
   * @summary Retrieves wage determinations
   * @request POST:/rest/wage-determinations/search
   * @secure */
  search24 = (
    data: WageDeterminationSearchModel,
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
    this.request<WageDeterminationPagedResponse, ErrorResponse>(
      {
        path: `/rest/wage-determinations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      WageDeterminationPagedResponse,
    ) as WageDeterminationPagedResponse;
}
