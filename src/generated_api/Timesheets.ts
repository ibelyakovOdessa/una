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
  Adjustments1ParamsTypeEnum,
  AdjustmentsModel,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  ErrorResponse,
  Get38ParamsSortByEnum,
  Get38ParamsSortOrderEnum,
  ItemEntryHistoryPagedResponse,
  LaborCategoryPagedResponse,
  LocationPagedResponse,
  OfflineTimesheetModel,
  ProjectTypePagedResponse,
  TimeCompleteModel,
  TimeExtractModel,
  TimeRowCreateModel,
  TimeRowPagedResponse,
  TimeStatusHistoryPagedResponse,
  TimeValidationModel,
  TimesheetAdjustmentReasonModel,
  TimesheetAuditCommentModel,
  TimesheetCreateModel,
  TimesheetModel,
  TimesheetPagedResponse,
  TimesheetProjectPagedResponse,
  TimesheetSearchModel,
  TimesheetSubmitModel,
  TimesheetUpdateModel,
  TimesheetUpdateResponseModel,
  TimeslipDefaultRequestModel,
  TimeslipHistoryPagedResponse,
  TimeslipPropertyModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Timesheets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Saves timesheet attachment and associate it with a timesheet
   *
   * @tags Timesheets
   * @name AddAttachment11
   * @summary Uploads timesheet attachment
   * @request POST:/rest/time/{id}/attachment
   * @secure */
  addAttachment11 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/attachment`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieve adjustments for a given timesheet and project. * Optional parameter __type__ allows requesting only specific adjustment variants.
   *
   * @tags Timesheets
   * @name Adjustments1
   * @summary Retrieve timesheet adjustments
   * @request GET:/rest/time/{id}/adjustments
   * @secure */
  adjustments1 = (
    id: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
      type?: Adjustments1ParamsTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<AdjustmentsModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/adjustments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AdjustmentsModel,
    ) as AdjustmentsModel;

  /**
   * @description Retrieves attachment details for a timesheet
   *
   * @tags Timesheets
   * @name Attachments3
   * @summary Retrieves timesheet attachments
   * @request GET:/rest/time/{id}/attachments
   * @secure */
  attachments3 = (
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
        path: `/rest/time/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Completes a timesheet. * If __bulkApprove__ is __true__ an INUSE, SUBMITTED or APPROVING timesheet will be completed using the bulk approval work flow. * If __bulkApprove__ is __false__, only an INUSE timesheets will be completed and the process will skip the approval workflows. Completed timesheets will automatically move to LOCKED status if time auto-lock is enabled.
   *
   * @tags Timesheets
   * @name Complete2
   * @summary Completes timesheet
   * @request POST:/rest/time/{id}/complete
   * @secure */
  complete2 = (id: number, data: TimeCompleteModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/time/${id}/complete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of timesheets filtered by optional query parameters.
   *
   * @tags Timesheets
   * @name Get38
   * @summary Retrieves timesheets
   * @request GET:/rest/time
   * @secure */
  get38 = (
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
      /** @format int64 */
      personKey?: number;
      /**
       * Field on which to apply sort. Defaults to beginDate
       * @default "BEGIN_DATE"
       */
      sortBy?: Get38ParamsSortByEnum;
      /**
       * Order to apply for given sort. Defaults to ASC
       * @default "ASC"
       */
      sortOrder?: Get38ParamsSortOrderEnum;
      /** @default true */
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimesheetPagedResponse, ErrorResponse>(
      {
        path: `/rest/time`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimesheetPagedResponse,
    ) as TimesheetPagedResponse;

  /**
   * @description Adds a new timesheet.
   *
   * @tags Timesheets
   * @name Create41
   * @summary Adds timesheet
   * @request POST:/rest/time
   * @secure */
  create41 = (
    data: TimesheetCreateModel,
    query?: {
      /**
       * Owner ID to override default of authenticated user.
       * @format int64
       * @min 1
       * @example 1
       */
      ownerKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/time`,
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
   * @description Retrieve time rows from the previous timesheet for autofill
   *
   * @tags Timesheets
   * @name TimesheetAutoFill
   * @summary Retrieve Time Rows for Autofill
   * @request GET:/rest/time/{id}/auto-fill
   * @secure */
  timesheetAutoFill = (id: number, params: RequestParams = {}) =>
    this.request<TimeRowPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/auto-fill`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      TimeRowPagedResponse,
    ) as TimeRowPagedResponse;

  /**
   * @description Create an autofill record that has been removed from a timesheet
   *
   * @tags Timesheets
   * @name CreateAutofillRow
   * @summary Create Autofill Row
   * @request POST:/rest/time/{id}/auto-fill
   * @secure */
  createAutofillRow = (id: number, data: TimeRowCreateModel, params: RequestParams = {}) =>
    this.request<TimeRowPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/auto-fill`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TimeRowPagedResponse,
    ) as TimeRowPagedResponse;

  /**
   * @description Retrieves specified attachment for a timesheet
   *
   * @tags Timesheets
   * @name GetAttachment12
   * @summary Retrieves timesheet attachment
   * @request GET:/rest/time/{id}/attachment/{attachmentId}
   * @secure */
  getAttachment12 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/attachment/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an attachment associated with a give timesheet
   *
   * @tags Timesheets
   * @name DeleteAttachment11
   * @summary Delete timesheet attachment
   * @request DELETE:/rest/time/{id}/attachment/{attachmentId}
   * @secure */
  deleteAttachment11 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/time/${id}/attachment/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of an timesheet by its ID.
   *
   * @tags Timesheets
   * @name GetByKey38
   * @summary Retrieves a timesheet
   * @request GET:/rest/time/{id}
   * @secure */
  getByKey38 = (id: number, params: RequestParams = {}) =>
    this.request<TimesheetModel, ErrorResponse>(
      {
        path: `/rest/time/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      TimesheetModel,
    ) as TimesheetModel;

  /**
   * @description Updates details of an existing timesheet.
   *
   * @tags Timesheets
   * @name Update40
   * @summary Updates timesheet
   * @request PUT:/rest/time/{id}
   * @secure */
  update40 = (id: number, data: TimesheetUpdateModel, params: RequestParams = {}) =>
    this.request<TimesheetUpdateResponseModel, ErrorResponse>(
      {
        path: `/rest/time/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TimesheetUpdateResponseModel,
    ) as TimesheetUpdateResponseModel;

  /**
   * @description Removes a timesheet and its associated records.
   *
   * @tags Timesheets
   * @name DeleteByKey1
   * @summary Deletes timesheet
   * @request DELETE:/rest/time/{id}
   * @secure */
  deleteByKey1 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/time/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description The time slips and item entries which are extracted for the timesheet can be controlled as follows: * __adjustmentOption__ * __NONE__ - Only original time entries are to be included and marked extracted. Adjustment time entries are left unchanged. * __INCLUDE__ - Original time entries and adjustments are to be included and marked as extracted. * __ONLY__ - Original time entries and adjustments are to be included and marked as extracted. * __includePreviouslyExtractAdjustments__ - Only applicable when adjustment option is other than _NONE_. When true previously extracted adjustments are include, when false they are ignored. * __includePreviouslyExtractAdjustments__ - Only applicable when adjustment option is other than _NONE_. When true only the initial unextracted reversing adjustment and the last establishing adjustment in the history of adjustments are include. When false the entire history of adjustments is included. Timesheet must be in either COMPLETED, LOCKED, or EXTRACTED status to be extracted. Timesheet will be diluted prior to attempting the extract if necessary. Upon successful completion the batch key associated with the extracted time slips/item entries will be returned.
   *
   * @tags Timesheets
   * @name Extract1
   * @summary Extracts a timesheet
   * @request POST:/rest/time/{id}/extract
   * @secure */
  extract1 = (id: number, data: TimeExtractModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/extract`,
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
   * @description Retrieves a paged list of item audit entries associated with a timesheet.
   *
   * @tags Timesheets
   * @name GetItemEntryHistory
   * @summary Retrieves timesheet item audit history
   * @request GET:/rest/time/{id}/items/audit
   * @secure */
  getItemEntryHistory = (
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
    this.request<ItemEntryHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/items/audit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ItemEntryHistoryPagedResponse,
    ) as ItemEntryHistoryPagedResponse;

  /**
   * @description Retrieve a paged list of labor categories associated with a timesheet project.
   *
   * @tags Timesheets
   * @name GetLaborCategories1
   * @summary Retrieve timesheet project labor categories
   * @request GET:/rest/time/{id}/projects/{projectId}/labor-categories
   * @secure */
  getLaborCategories1 = (
    id: number,
    projectId: number,
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
    this.request<LaborCategoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/projects/${projectId}/labor-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LaborCategoryPagedResponse,
    ) as LaborCategoryPagedResponse;

  /**
   * @description Retrieves a paged list of labor categories associated with a timesheet task.
   *
   * @tags Timesheets
   * @name GetLaborCategoriesByTask
   * @summary Retrieves timesheet task labor categories
   * @request GET:/rest/time/{id}/tasks/{taskId}/labor-categories
   * @secure */
  getLaborCategoriesByTask = (
    id: number,
    taskId: number,
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
    this.request<LaborCategoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/tasks/${taskId}/labor-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LaborCategoryPagedResponse,
    ) as LaborCategoryPagedResponse;

  /**
   * @description Retrieves a paged list of locations associated with a timesheet project.
   *
   * @tags Timesheets
   * @name GetLocations2
   * @summary Retrieves timesheet project locations
   * @request GET:/rest/time/{id}/projects/{projectId}/locations
   * @secure */
  getLocations2 = (
    id: number,
    projectId: number,
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
        path: `/rest/time/${id}/projects/${projectId}/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LocationPagedResponse,
    ) as LocationPagedResponse;

  /**
   * @description Retrieves a paged list of locations associated with a timesheet task.
   *
   * @tags Timesheets
   * @name GetLocationsByTask
   * @summary Retrieve timesheet task locations
   * @request GET:/rest/time/{id}/tasks/{taskId}/locations
   * @secure */
  getLocationsByTask = (
    id: number,
    taskId: number,
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
        path: `/rest/time/${id}/tasks/${taskId}/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LocationPagedResponse,
    ) as LocationPagedResponse;

  /**
   * @description Retrieves details of an timesheet for offline use.
   *
   * @tags Timesheets
   * @name GetOfflineTimesheet
   * @summary Retrieves offline timesheet data
   * @request GET:/rest/time/{id}/offline
   * @secure */
  getOfflineTimesheet = (id: number, params: RequestParams = {}) =>
    this.request<OfflineTimesheetModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/offline`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OfflineTimesheetModel,
    ) as OfflineTimesheetModel;

  /**
   * @description Retrieve a paged list of project types associated with a timesheet.
   *
   * @tags Timesheets
   * @name GetProjectTypes1
   * @summary Retrieves timesheet project types
   * @request GET:/rest/time/{id}/project-types
   * @secure */
  getProjectTypes1 = (
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
    this.request<ProjectTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/project-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectTypePagedResponse,
    ) as ProjectTypePagedResponse;

  /**
   * @description Retrieve a paged list of projects associated with a timesheet.
   *
   * @tags Timesheets
   * @name GetProjects1
   * @summary Retrieves timesheet projects
   * @request GET:/rest/time/{id}/projects
   * @secure */
  getProjects1 = (
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
    this.request<TimesheetProjectPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimesheetProjectPagedResponse,
    ) as TimesheetProjectPagedResponse;

  /**
   * @description Retrieves status history list for a given timesheet.
   *
   * @tags Timesheets
   * @name GetStatusHistory6
   * @summary Retrieves timesheet status history
   * @request GET:/rest/time/{id}/history
   * @secure */
  getStatusHistory6 = (
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
    this.request<TimeStatusHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeStatusHistoryPagedResponse,
    ) as TimeStatusHistoryPagedResponse;

  /**
   * @description Retrieve a paged list of audit history entries associated with a timesheet timeslip.
   *
   * @tags Timesheets
   * @name GetTimeslipHistory
   * @summary Retrieves timeslip audit history
   * @request GET:/rest/time/{id}/audit
   * @secure */
  getTimeslipHistory = (
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
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeslipHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/audit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeslipHistoryPagedResponse,
    ) as TimeslipHistoryPagedResponse;

  /**
   * @description Retrieves a paged list of timesheets filtered by optional search criteria. * Search for active timesheets, by setting __active__ flag to _true_. * Search for historical timesheets (not active), by setting __active__ flag to _false_. * Omit the __active__ flag and alternatively specify a list of timesheet __statuses__ or __adjustmentStatus__ to include in list. * If search criteria include both __statuses__ and __adjustmentStatuses__, the result is an OR of the two criteria. For example, if criteria include a status of _EXTRACTED_ and adjustmentStatus of _SUBMITTED_, then search will look for timesheets that include either a status of _EXTRACTED_ or an adjustmentStatus of _SUBMITTED_. * Regardless of the above criteria settings, one can optionally specify the list of __personKeys__ by which to filter timesheets. * __beginDateStart__ and __beginDateEnd__ can be used to filter timesheets by their beginDate. Alternatively, __workDate__ can be used to match any timesheet where workDate is within the timesheet's designated time period. If both __beginDateStart__ and __workDate__ are not specified, search will be limited to the last 30 days. If both the __active__ flag is specified and either __statuses__ or __adjustmentStatuses__ contains entries, an HTTP 400 (BAD REQUEST) will be returned.
   *
   * @tags Timesheets
   * @name Search21
   * @summary Retrieves timesheets
   * @request POST:/rest/time/search
   * @secure */
  search21 = (
    data: TimesheetSearchModel,
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
    this.request<TimesheetPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TimesheetPagedResponse,
    ) as TimesheetPagedResponse;

  /**
   * @description Submits a timesheet for approval.
   *
   * @tags Timesheets
   * @name Submit10
   * @summary Submits timesheet
   * @request POST:/rest/time/{id}/submit
   * @secure */
  submit10 = (id: number, data: TimesheetSubmitModel, params: RequestParams = {}) =>
    this.request<void, TimeValidationModel | ErrorResponse>({
      path: `/rest/time/${id}/submit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieve deleted autofill time rows
   *
   * @tags Timesheets
   * @name TimesheetDeletedAutofillRows
   * @summary Retrieve Deleted Autofill Time Rows
   * @request GET:/rest/time/{id}/auto-fill/deleted
   * @secure */
  timesheetDeletedAutofillRows = (id: number, params: RequestParams = {}) =>
    this.request<TimeRowPagedResponse, ErrorResponse>(
      {
        path: `/rest/time/${id}/auto-fill/deleted`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      TimeRowPagedResponse,
    ) as TimeRowPagedResponse;

  /**
   * @description Retrieves potential defaults for timeslip fields when a new record would be created. Fields that return null may still be required for insertion but no default could be derived.
   *
   * @tags Timesheets
   * @name TimeslipDefaults
   * @summary Retrieves timeslip defaults
   * @request POST:/rest/time/{id}/timeslip-defaults
   * @secure */
  timeslipDefaults = (id: number, data: TimeslipDefaultRequestModel, params: RequestParams = {}) =>
    this.request<TimeslipPropertyModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/timeslip-defaults`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TimeslipPropertyModel,
    ) as TimeslipPropertyModel;

  /**
   * @description Updates a collection of timeslip, item entries, and TITOs with adjustment reasons.
   *
   * @tags Timesheets
   * @name UpdateAdjustmentReasons1
   * @summary Updates timesheet adjustment reasons
   * @request POST:/rest/time/{id}/adjustments/reason
   * @secure */
  updateAdjustmentReasons1 = (id: number, data: TimesheetAdjustmentReasonModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/time/${id}/adjustments/reason`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Updates a collection of timeslip and item entries with audit comments. Unanet property 'unatime.audit' must be enabled in order to update timesheet audit comments
   *
   * @tags Timesheets
   * @name UpdateAuditComments1
   * @summary Updates timesheet audit comments
   * @request POST:/rest/time/{id}/audit/comment
   * @secure */
  updateAuditComments1 = (id: number, data: TimesheetAuditCommentModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/time/${id}/audit/comment`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Validate a timesheet for save or submittal based on 'submitValidation' flag.
   *
   * @tags Timesheets
   * @name Validate5
   * @summary Validates timesheet
   * @request GET:/rest/time/{id}/validate
   * @secure */
  validate5 = (
    id: number,
    query?: {
      /** @default false */
      submitValidation?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TimeValidationModel, ErrorResponse>(
      {
        path: `/rest/time/${id}/validate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TimeValidationModel,
    ) as TimeValidationModel;
}
