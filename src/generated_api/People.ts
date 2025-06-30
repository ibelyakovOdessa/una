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
  AlternateKeyModel,
  AlternatePagedResponse,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  CreatedResponseModel,
  ErrorResponse,
  GetCurrentClassificationEnum,
  KeyNameModel,
  LeaveBalancePagedResponseModel,
  LeaveBalanceSearchModel,
  OrgAccessPersonSearchModel,
  PersonAccrualPlanCreateModel,
  PersonAccrualPlanModel,
  PersonAccrualPlanPagedResponse,
  PersonAccrualPlanUpdateModel,
  PersonBenefitsValueCreateModel,
  PersonBenefitsValueModel,
  PersonBenefitsValuePagedResponse,
  PersonCreateModel,
  PersonModel,
  PersonPagedResponse,
  PersonPayrollModel,
  PersonRateCreateModel,
  PersonRateModel,
  PersonSearchModel,
  PersonSkillKeysModel,
  PersonSkillPagedResponse,
  PersonSummaryPagedResponse,
  PersonTimeDataPagedResponse,
  PersonTimeDataSearchModel,
  ProjectAssignmentPagedResponse,
  ProjectPeopleAssignmentSearchModel,
  ProjectPersonAssignmentSearchModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class People<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves attachment details for a person.
   *
   * @tags People
   * @name Attachments2
   * @summary Retrieves person attachments
   * @request GET:/rest/people/{id}/attachments
   * @secure */
  attachments2 = (
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
        path: `/rest/people/${id}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Add an attachment for a person.
   *
   * @tags People
   * @name AddAttachment7
   * @summary Add person attachment
   * @request POST:/rest/people/{id}/attachments
   * @secure */
  addAttachment7 = (id: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/attachments`,
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
   * @description Retrieves a paged list of available alternate people filtered by optional search criteria.
   *
   * @tags People
   * @name AvailableAlternates
   * @summary Retrieves a list of available alternates
   * @request GET:/rest/people/{id}/available-alternates
   * @secure */
  availableAlternates = (
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
      name?: string;
      organizationKey?: number[];
      role?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/available-alternates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonSummaryPagedResponse,
    ) as PersonSummaryPagedResponse;

  /**
   * @description Retrieves a paged list of people filtered by optional 'name' and 'active' flag parameters.
   *
   * @tags People
   * @name Get29
   * @summary Retrieves people by name
   * @request GET:/rest/people
   * @secure */
  get29 = (
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
    this.request<PersonPagedResponse, ErrorResponse>(
      {
        path: `/rest/people`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonPagedResponse,
    ) as PersonPagedResponse;

  /**
   * @description Creates a new person.
   *
   * @tags People
   * @name Create25
   * @summary Creates a person
   * @request POST:/rest/people
   * @secure */
  create25 = (data: PersonCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/people`,
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
   * @description Retrieve list of accrual plans for a given person
   *
   * @tags People
   * @name GetAccrualPlans
   * @summary Retrieve list of accrual plans for a person
   * @request GET:/rest/people/{id}/accrual-plans
   * @secure */
  getAccrualPlans = (
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
       * Include results with accrual end date >= beginDate. beginDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      beginDate?: string;
      /**
       * Include results with accrual begin date <= endDate. endDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      endDate?: string;
      /**
       * Include results for a specific project.
       * @format int64
       * @min 1
       * @example 1
       */
      projectKey?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonAccrualPlanPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/accrual-plans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonAccrualPlanPagedResponse,
    ) as PersonAccrualPlanPagedResponse;

  /**
   * @description Creates an accrual plan for a person.
   *
   * @tags People
   * @name CreateAccrualPlan
   * @summary Creates a person's accrual plan
   * @request POST:/rest/people/{id}/accrual-plans
   * @secure */
  createAccrualPlan = (id: number, data: PersonAccrualPlanCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/accrual-plans`,
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
   * @description Retrieves a list of all SCA benefit package values for a person.
   *
   * @tags People
   * @name GetBenefitsValuesList
   * @summary Retrieves a person's SCA benefit package
   * @request GET:/rest/people/{id}/benefits-values
   * @secure */
  getBenefitsValuesList = (
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
    this.request<PersonBenefitsValuePagedResponse[], ErrorResponse>(
      {
        path: `/rest/people/${id}/benefits-values`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonBenefitsValuePagedResponse,
    ) as PersonBenefitsValuePagedResponse;

  /**
   * @description Creates an SCA benefit value for a person.
   *
   * @tags People
   * @name CreateBenefitsValue
   * @summary Creates a person's SCA benefit
   * @request POST:/rest/people/{id}/benefits-values
   * @secure */
  createBenefitsValue = (id: number, data: PersonBenefitsValueCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/benefits-values`,
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
   * @description Retrieves a list of all rates for a person.
   *
   * @tags People
   * @name Rates1
   * @summary Retrieves person rates
   * @request GET:/rest/people/{id}/rates
   * @secure */
  rates1 = (id: number, params: RequestParams = {}) =>
    this.request<PersonRateModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/rates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonRateModel,
    ) as PersonRateModel;

  /**
   * @description Adds rate and classification information for a person. This information is time bound by a begin and an end date.
   *
   * @tags People
   * @name CreateRate1
   * @summary Creates person rate
   * @request POST:/rest/people/{id}/rates
   * @secure */
  createRate1 = (
    id: number,
    data: PersonRateCreateModel,
    query?: {
      /** @default true */
      adjustExtractedTime?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/rates`,
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
   * @description Retrieve list of skills for a person given its key
   *
   * @tags People
   * @name GetSkills
   * @summary Retrieve list of skills for a person
   * @request GET:/rest/people/{id}/skills
   * @secure */
  getSkills = (
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
    this.request<PersonSkillPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/skills`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonSkillPagedResponse,
    ) as PersonSkillPagedResponse;

  /**
   * @description Associates a skill for a person.
   *
   * @tags People
   * @name CreateSkill
   * @summary Creates a person skill
   * @request POST:/rest/people/{id}/skills
   * @secure */
  createSkill = (id: number, data: PersonSkillKeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/skills`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves details of a person given their ID.
   *
   * @tags People
   * @name GetByKey28
   * @summary Retrieves a person
   * @request GET:/rest/people/{id}
   * @secure */
  getByKey28 = (id: number, params: RequestParams = {}) =>
    this.request<PersonModel, ErrorResponse>(
      {
        path: `/rest/people/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonModel,
    ) as PersonModel;

  /**
   * @description Updates an existing person matching id. 'id' parameter must match the 'person' model 'key' field.
   *
   * @tags People
   * @name Update25
   * @summary Updates a person
   * @request PUT:/rest/people/{id}
   * @secure */
  update25 = (id: number, data: PersonModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a person record.
   *
   * @tags People
   * @name Delete22
   * @summary Deletes a person
   * @request DELETE:/rest/people/{id}
   * @secure */
  delete22 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve an accrual plan for a person given its key
   *
   * @tags People
   * @name GetAccrualPlan
   * @summary Retrieve an accrual plan for a person
   * @request GET:/rest/people/{id}/accrual-plans/{personAccrualPlanId}
   * @secure */
  getAccrualPlan = (id: number, personAccrualPlanId: number, params: RequestParams = {}) =>
    this.request<PersonAccrualPlanModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/accrual-plans/${personAccrualPlanId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonAccrualPlanModel,
    ) as PersonAccrualPlanModel;

  /**
   * @description Updates a person's accrual plan.
   *
   * @tags People
   * @name UpdateAccrualPlan
   * @summary Updates a person's accrual plan
   * @request PUT:/rest/people/{id}/accrual-plans/{personAccrualPlanId}
   * @secure */
  updateAccrualPlan = (
    id: number,
    personAccrualPlanId: number,
    data: PersonAccrualPlanUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/accrual-plans/${personAccrualPlanId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing accrual plan for a person given its key.
   *
   * @tags People
   * @name DeleteAccrualPlan
   * @summary Delete a person's accrual plan
   * @request DELETE:/rest/people/{id}/accrual-plans/{personAccrualPlanId}
   * @secure */
  deleteAccrualPlan = (id: number, personAccrualPlanId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/accrual-plans/${personAccrualPlanId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an attachment for a person containing the full bytes of the attachment.
   *
   * @tags People
   * @name GetAttachment8
   * @summary Retrieves person attachment
   * @request GET:/rest/people/{id}/attachments/{attachmentId}
   * @secure */
  getAttachment8 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Removes an attachment for a person.
   *
   * @tags People
   * @name DeleteAttachment7
   * @summary Deletes person attachment
   * @request DELETE:/rest/people/{id}/attachments/{attachmentId}
   * @secure */
  deleteAttachment7 = (id: number, attachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a benefit package value for a person for the given key.
   *
   * @tags People
   * @name GetBenefitsValue
   * @summary Retrieves a person's SCA benefit package
   * @request GET:/rest/people/{id}/benefits-values/{benefitsValueId}
   * @secure */
  getBenefitsValue = (id: number, benefitsValueId: number, params: RequestParams = {}) =>
    this.request<PersonBenefitsValueModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/benefits-values/${benefitsValueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonBenefitsValueModel,
    ) as PersonBenefitsValueModel;

  /**
   * @description Updates a person's SCA benefit package.
   *
   * @tags People
   * @name UpdateBenefitsValue
   * @summary Updates a person's SCA benefit package
   * @request PUT:/rest/people/{id}/benefits-values/{benefitsValueId}
   * @secure */
  updateBenefitsValue = (
    id: number,
    benefitsValueId: number,
    data: PersonBenefitsValueModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/benefits-values/${benefitsValueId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing SCA benefit package for a person given its key.
   *
   * @tags People
   * @name DeleteBenefitsValue
   * @summary Delete a person's SCA benefit package
   * @request DELETE:/rest/people/{id}/benefits-values/{benefitsValueId}
   * @secure */
  deleteBenefitsValue = (id: number, benefitsValueId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/benefits-values/${benefitsValueId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Update a skill association for a person
   *
   * @tags People
   * @name UpdateSkill
   * @summary Update a person's skill association
   * @request PUT:/rest/people/{id}/skills/{skillId}
   * @secure */
  updateSkill = (id: number, skillId: number, data: PersonSkillKeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/skills/${skillId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a skill association for a person
   *
   * @tags People
   * @name DeleteSkill
   * @summary Delete a person's skill association
   * @request DELETE:/rest/people/{id}/skills/{skillId}
   * @secure */
  deleteSkill = (id: number, skillId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/skills/${skillId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve list of alternate approvers for a person given its key
   *
   * @tags People
   * @name GetAlternates1
   * @summary Retrieve list of alternate approvers
   * @request GET:/rest/people/{id}/alternates
   * @secure */
  getAlternates1 = (
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
    this.request<AlternatePagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/alternates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AlternatePagedResponse,
    ) as AlternatePagedResponse;

  /**
   * @description Update alternate approvers for a person given its key
   *
   * @tags People
   * @name UpdateAlternates1
   * @summary Update alternate approvers
   * @request PUT:/rest/people/{id}/alternates
   * @secure */
  updateAlternates1 = (id: number, data: AlternateKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/alternates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a person's current classification based on the requested date.
   *
   * @tags People
   * @name GetCurrentClassification
   * @summary Retrieves person classification
   * @request GET:/rest/people/{id}/classification/{date}
   * @secure */
  getCurrentClassification = (id: number, date: string, params: RequestParams = {}) =>
    this.request<GetCurrentClassificationEnum, ErrorResponse>(
      {
        path: `/rest/people/${id}/classification/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      GetCurrentClassificationEnum,
    ) as GetCurrentClassificationEnum;

  /**
   * @description Retrieves a list of all approval groups the person is an approver for.
   *
   * @tags People
   * @name GetGroupsUserIsApprover
   * @summary Retrieves person approver approval groups
   * @request GET:/rest/people/{id}/approval-groups/approver
   * @secure */
  getGroupsUserIsApprover = (id: number, params: RequestParams = {}) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/approval-groups/approver`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a list of all approval groups the person is an expense report submitter for.
   *
   * @tags People
   * @name GetGroupsUserIsExpenseReportSubmitter
   * @summary Retrieves person expense report submitter approval groups
   * @request GET:/rest/people/{id}/approval-groups/submitter/expense-report
   * @secure */
  getGroupsUserIsExpenseReportSubmitter = (id: number, params: RequestParams = {}) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/approval-groups/submitter/expense-report`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a list of all approval groups the person is an expense request submitter for.
   *
   * @tags People
   * @name GetGroupsUserIsExpenseRequestSubmitter
   * @summary Retrieves person expense request submitter approval groups
   * @request GET:/rest/people/{id}/approval-groups/submitter/expense-request
   * @secure */
  getGroupsUserIsExpenseRequestSubmitter = (id: number, params: RequestParams = {}) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/approval-groups/submitter/expense-request`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a list of all approval groups the person is a leave submitter for.
   *
   * @tags People
   * @name GetGroupsUserIsLeaveSubmitter
   * @summary Retrieves person leave submitter approval groups
   * @request GET:/rest/people/{id}/approval-groups/submitter/leave
   * @secure */
  getGroupsUserIsLeaveSubmitter = (id: number, params: RequestParams = {}) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/approval-groups/submitter/leave`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a list of all approval groups the person is a time submitter for.
   *
   * @tags People
   * @name GetGroupsUserIsTimeSubmitter
   * @summary Retrieves person time submitter approval groups
   * @request GET:/rest/people/{id}/approval-groups/submitter/time
   * @secure */
  getGroupsUserIsTimeSubmitter = (id: number, params: RequestParams = {}) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/approval-groups/submitter/time`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a paged list of assignments that match the given search criteria
   *
   * @tags People
   * @name GetMultiPersonProjectAssignments
   * @summary Retrieves project assignments for multiple people.
   * @request POST:/rest/people/assignments/search
   * @secure */
  getMultiPersonProjectAssignments = (
    data: ProjectPeopleAssignmentSearchModel,
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
    this.request<ProjectAssignmentPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/assignments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectAssignmentPagedResponse,
    ) as ProjectAssignmentPagedResponse;

  /**
   * @description Retrieves a person's payroll information details.
   *
   * @tags People
   * @name GetPersonPayroll
   * @summary Retrieves person payroll
   * @request GET:/rest/people/{id}/payroll
   * @secure */
  getPersonPayroll = (id: number, params: RequestParams = {}) =>
    this.request<PersonPayrollModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/payroll`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonPayrollModel,
    ) as PersonPayrollModel;

  /**
   * @description Updates a person's payroll information details.
   *
   * @tags People
   * @name UpdatePersonPayroll
   * @summary Updates person payroll
   * @request PUT:/rest/people/{id}/payroll
   * @secure */
  updatePersonPayroll = (id: number, data: PersonPayrollModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/payroll`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of assignments for a given person key
   *
   * @tags People
   * @name GetProjectAssignments
   * @summary Retrieves project assignments for a person.
   * @request POST:/rest/people/{id}/assignments/search
   * @secure */
  getProjectAssignments = (
    id: number,
    data: ProjectPersonAssignmentSearchModel,
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
    this.request<ProjectAssignmentPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/assignments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectAssignmentPagedResponse,
    ) as ProjectAssignmentPagedResponse;

  /**
   * @description Retrieves a rate by id for a person.
   *
   * @tags People
   * @name GetRateByKey
   * @summary Retrieves a person rate
   * @request GET:/rest/people/{id}/rates/{rateId}
   * @secure */
  getRateByKey = (id: number, rateId: number, params: RequestParams = {}) =>
    this.request<PersonRateModel[], ErrorResponse>(
      {
        path: `/rest/people/${id}/rates/${rateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonRateModel,
    ) as PersonRateModel;

  /**
   * @description Updates a rate on a person.
   *
   * @tags People
   * @name UpdateRate1
   * @summary Updates person rate
   * @request PUT:/rest/people/{id}/rates/{rateId}
   * @secure */
  updateRate1 = (
    id: number,
    rateId: number,
    data: PersonRateModel,
    query?: {
      /** @default true */
      adjustExtractedTime?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/people/${id}/rates/${rateId}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of all time actuals for a person.
   *
   * @tags People
   * @name GetUserTimeActuals
   * @summary Retrieves time actuals for a person
   * @request POST:/rest/people/{id}/actuals/time/search
   * @secure */
  getUserTimeActuals = (
    id: number,
    data: PersonTimeDataSearchModel,
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
    this.request<PersonTimeDataPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/${id}/actuals/time/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      PersonTimeDataPagedResponse,
    ) as PersonTimeDataPagedResponse;

  /**
   * @description Retrieves the timesheet user's Leave Balance
   *
   * @tags People
   * @name LeaveBalance1
   * @summary Retrieves the timesheet user's Leave Balance
   * @request POST:/rest/people/{id}/leave
   * @secure */
  leaveBalance1 = (id: number, data: LeaveBalanceSearchModel, params: RequestParams = {}) =>
    this.request<LeaveBalancePagedResponseModel, ErrorResponse>(
      {
        path: `/rest/people/${id}/leave`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      LeaveBalancePagedResponseModel,
    ) as LeaveBalancePagedResponseModel;

  /**
   * @description Retrieves a paged list of people filtered by optional search criteria.
   *
   * @tags People
   * @name Search12
   * @summary Retrieves people
   * @request POST:/rest/people/search
   * @secure */
  search12 = (
    data: PersonSearchModel,
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
    this.request<PersonPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PersonPagedResponse,
    ) as PersonPagedResponse;

  /**
   * @description Retrieves a paged list of people belonging to an organization in which the caller has org access, based on the provided org access criteria. Results are additionally filtered by optional 'name' search criteria.
   *
   * @tags People
   * @name SearchByOrgAccess
   * @summary Retrieves org access people
   * @request POST:/rest/people/search/org-access
   * @secure */
  searchByOrgAccess = (
    data: OrgAccessPersonSearchModel,
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
    this.request<PersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/search/org-access`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PersonSummaryPagedResponse,
    ) as PersonSummaryPagedResponse;

  /**
   * @description Retrieves a paged list of people summaries filtered by optional search criteria.
   *
   * @tags People
   * @name SearchSummaries
   * @summary Retrieves a list of people summaries
   * @request GET:/rest/people/list
   * @secure */
  searchSummaries = (
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
      personKey?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/people/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonSummaryPagedResponse,
    ) as PersonSummaryPagedResponse;
}
