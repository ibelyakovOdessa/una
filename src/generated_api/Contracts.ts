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
  ClauseAgencyCreateModel,
  ClauseAgencyModel,
  ClauseAgencyPagedResponse,
  ContractAlertPreferencesModel,
  ContractClauseCreateModel,
  ContractClauseModel,
  ContractClausePagedResponse,
  ContractCreateModel,
  ContractFundingAlertPagedResponse,
  ContractFundingAlertUpdateModel,
  ContractFundingAllocationCreateModel,
  ContractFundingAllocationModel,
  ContractFundingLevelModel,
  ContractModCreateModel,
  ContractModModel,
  ContractModel,
  ContractPagedResponse,
  ContractProjectCreateModel,
  ContractProvisionPagedResponse,
  ContractSearchModel,
  ContractStatusModel,
  ContractStatusPagedResponse,
  ContractTypeModel,
  ContractTypePagedResponse,
  CreatedResponseModel,
  ErrorResponse,
  FormDataContentDisposition,
  Get6ParamsClauseNumberPredicateEnum,
  Get6ParamsDescriptionPredicateEnum,
  Get6ParamsTitlePredicateEnum,
  ImportDefinitionModel,
  ImportErrorModel,
  ImportProgressModel,
  IncludedContractClauseCreateModel,
  IncludedContractClauseModel,
  IncludedContractClausePagedResponse,
  KeyNameCodeModel,
  KeyNameCodeModelPagedResponse,
  KeyNameModel,
  OrganizationListPagedResponse,
  PersonBasePagedResponse,
  ProjectContractModel,
  TaskSummaryModel,
  WageDeterminationContractCreateModel,
  WageDeterminationContractModel,
  WageDeterminationContractPagedResponse,
  WageDeterminationContractSearchModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Contracts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a paged list of contract clause agencies, optionally filtered using query parameters.
   *
   * @tags Contracts
   * @name Get5
   * @summary Retrieves contract clause agencies
   * @request GET:/rest/contracts/contract-clauses/agencies
   * @secure */
  get5 = (
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
      /** Optional filter for active/inactive contract clause agencies. */
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ClauseAgencyPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/agencies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ClauseAgencyPagedResponse,
    ) as ClauseAgencyPagedResponse;

  /**
   * @description Creates a new contract clause agency.
   *
   * @tags Contracts
   * @name Create2
   * @summary Create contract clause agency.
   * @request POST:/rest/contracts/contract-clauses/agencies
   * @secure */
  create2 = (data: ClauseAgencyCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/agencies`,
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
   * @description Retrieves details of a contract clause agency
   *
   * @tags Contracts
   * @name GetByKey3
   * @summary Retrieves a contract clause agency.
   * @request GET:/rest/contracts/contract-clauses/agencies/{id}
   * @secure */
  getByKey3 = (id: number, params: RequestParams = {}) =>
    this.request<ClauseAgencyModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/agencies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ClauseAgencyModel,
    ) as ClauseAgencyModel;

  /**
   * @description Updates an existing contract clause agency.
   *
   * @tags Contracts
   * @name Update2
   * @summary Updates a contract clause agency.
   * @request PUT:/rest/contracts/contract-clauses/agencies/{id}
   * @secure */
  update2 = (id: number, data: ClauseAgencyModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/contract-clauses/agencies/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract clause agency.
   *
   * @tags Contracts
   * @name Delete2
   * @summary Delete contract clause agency.
   * @request DELETE:/rest/contracts/contract-clauses/agencies/{id}
   * @secure */
  delete2 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/contract-clauses/agencies/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of contract clauses, optionally filtered using query parameters.
   *
   * @tags Contracts
   * @name Get6
   * @summary Retrieves contract clauses
   * @request GET:/rest/contracts/contract-clauses
   * @secure */
  get6 = (
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
      /** Optional filter for active/inactive contract clauses. */
      active?: boolean;
      /** Optional filter for contract clause number. */
      clauseNumber?: string;
      /**
       * Determines the type of search performed upon clause number.
       * @default "CONTAINS"
       */
      clauseNumberPredicate?: Get6ParamsClauseNumberPredicateEnum;
      /** Optional filter for contract clause description. */
      description?: string;
      /**
       * Determines the type of search performed upon description.
       * @default "CONTAINS"
       */
      descriptionPredicate?: Get6ParamsDescriptionPredicateEnum;
      /** Optional filter for contract clause title. */
      title?: string;
      /**
       * Determines the type of search performed upon title.
       * @default "CONTAINS"
       */
      titlePredicate?: Get6ParamsTitlePredicateEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ContractClausePagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractClausePagedResponse,
    ) as ContractClausePagedResponse;

  /**
   * @description Creates a new contract clause.
   *
   * @tags Contracts
   * @name Create3
   * @summary Create contract clause
   * @request POST:/rest/contracts/contract-clauses
   * @secure */
  create3 = (data: ContractClauseCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses`,
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
   * @description Retrieves details of a contract clause
   *
   * @tags Contracts
   * @name GetByKey4
   * @summary Retrieves a contract clause.
   * @request GET:/rest/contracts/contract-clauses/{id}
   * @secure */
  getByKey4 = (id: number, params: RequestParams = {}) =>
    this.request<ContractClauseModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractClauseModel,
    ) as ContractClauseModel;

  /**
   * @description Updates an existing contract clause.
   *
   * @tags Contracts
   * @name Update3
   * @summary Updates a contract clause
   * @request PUT:/rest/contracts/contract-clauses/{id}
   * @secure */
  update3 = (id: number, data: ContractClauseModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/contract-clauses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract clause.
   *
   * @tags Contracts
   * @name Delete3
   * @summary Delete contract clause
   * @request DELETE:/rest/contracts/contract-clauses/{id}
   * @secure */
  delete3 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/contract-clauses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of import field definitions.
   *
   * @tags Contracts
   * @name GetImportDefinition
   * @summary Retrieves the import field definition.
   * @request GET:/rest/contracts/contract-clauses/import/definition
   * @secure */
  getImportDefinition = (params: RequestParams = {}) =>
    this.request<ImportDefinitionModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/import/definition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ImportDefinitionModel,
    ) as ImportDefinitionModel;

  /**
   * @description Imports contract clauses file, using an HTTP multipart form post, in order to create new or update and delete existing contract clauses. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add, update or delete operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/contracts/contract-clauses/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"cc_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *clause_number, agency_code, title, description, status, delete ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * Contract Clause rows are uniquely defined by 'clause_number'. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * The minimum set of fields that are required for creating a new contract clause is: **clause_number, agency_code, title, description, status, description, class, status**. * A 'delete' column is supported to allow rows to be included that instruct the import to remove the specified entity as uniquely referenced by the 'clause_number' field value. If a 'delete' column is defined, it must be the last column in the row. To delete a specific contract clause, include a row containing a 'clause_number' field value and '!DELETE!' as the 'delete' field column value. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request. * For additional descriptions of supported fields, see the ContractClauseCreateModel model.
   *
   * @tags Contracts
   * @name ImportContractClauseFile
   * @summary Imports contract clauses file
   * @request POST:/rest/contracts/contract-clauses/import
   * @secure */
  importContractClauseFile = (
    data: {
      file?: FormDataContentDisposition;
    },
    query?: {
      /**
       * Set to 'true' in order to get live progress feedback at regular intervals
       * @default false
       */
      enableProgressFeedback?: boolean;
      /**
       * Set to 'true' to perform a dry-run of the import file without performing any of the add, update or delete operations. This allows one to see all of the validation errors that may arise during an import. NOTE: Having a successful dry run does not guarantee a successful real import as conditions can change in the database.
       * @default false
       */
      dryRun?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImportProgressModel | ImportErrorModel, ErrorResponse>(
      {
        path: `/rest/contracts/contract-clauses/import`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      },
      ImportProgressModel | ImportErrorModel,
    ) as ImportProgressModel | ImportErrorModel;

  /**
   * @description Returns an ordered list of funding levels.
   *
   * @tags Contracts
   * @name Get7
   * @summary Get contract funding levels
   * @request GET:/rest/contracts/funding-levels
   * @secure */
  get7 = (params: RequestParams = {}) =>
    this.request<ContractFundingLevelModel[], ErrorResponse>(
      {
        path: `/rest/contracts/funding-levels`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractFundingLevelModel,
    ) as ContractFundingLevelModel;

  /**
   * @description Updates a contract funding level hierarchy based on the ordered list passed in.
   *
   * @tags Contracts
   * @name Update4
   * @summary Updates a contract funding level hierarchy
   * @request PUT:/rest/contracts/funding-levels
   * @secure */
  update4 = (data: ContractFundingLevelModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/funding-levels`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of contracts filtered by optional query parameters
   *
   * @tags Contracts
   * @name Get8
   * @summary Retrieves contracts
   * @request GET:/rest/contracts
   * @secure */
  get8 = (
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
      /** @uniqueItems true */
      id?: number[];
      /** @uniqueItems true */
      typeId?: number[];
      /** @uniqueItems true */
      statusId?: number[];
      /** @uniqueItems true */
      orgId?: number[];
      /** @uniqueItems true */
      primaryNaicsCodeId?: number[];
      /** @uniqueItems true */
      supportingNaicsCodeId?: number[];
      /** @uniqueItems true */
      billingAnalystId?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<ContractPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractPagedResponse,
    ) as ContractPagedResponse;

  /**
   * @description Creates a new contract.
   *
   * @tags Contracts
   * @name Create4
   * @summary Create contract
   * @request POST:/rest/contracts
   * @secure */
  create4 = (data: ContractCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts`,
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
   * @description Retrieves all contract clauses included in a contract
   *
   * @tags Contracts
   * @name GetContractClauses
   * @summary Retrieve all clauses included in a contract
   * @request GET:/rest/contracts/{id}/contract-clauses
   * @secure */
  getContractClauses = (
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
    this.request<IncludedContractClausePagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/contract-clauses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      IncludedContractClausePagedResponse,
    ) as IncludedContractClausePagedResponse;

  /**
   * @description Creates an included contract clause for a contract
   *
   * @tags Contracts
   * @name CreateContractClause
   * @summary Creates an included contract clause
   * @request POST:/rest/contracts/{id}/contract-clauses
   * @secure */
  createContractClause = (id: number, data: IncludedContractClauseCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/contract-clauses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves list of contract mods.
   *
   * @tags Contracts
   * @name GetContractMods
   * @summary Retrieves contract mods.
   * @request GET:/rest/contracts/{id}/mods
   * @secure */
  getContractMods = (id: number, params: RequestParams = {}) =>
    this.request<ContractModModel[], ErrorResponse>(
      {
        path: `/rest/contracts/${id}/mods`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractModModel,
    ) as ContractModModel;

  /**
   * @description Creates a new contract mod.
   *
   * @tags Contracts
   * @name CreateContractMod
   * @summary Create a contract mod
   * @request POST:/rest/contracts/{id}/mods
   * @secure */
  createContractMod = (id: number, data: ContractModCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/mods`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of project associations for a contract.
   *
   * @tags Contracts
   * @name GetContractProjectAssociations
   * @summary Retrieves project associations
   * @request GET:/rest/contracts/{id}/projects
   * @secure */
  getContractProjectAssociations = (id: number, params: RequestParams = {}) =>
    this.request<ProjectContractModel[], ErrorResponse>(
      {
        path: `/rest/contracts/${id}/projects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectContractModel,
    ) as ProjectContractModel;

  /**
   * @description Creates an association between a contract and a project.
   *
   * @tags Contracts
   * @name CreateContractProjectAssociation
   * @summary Project association
   * @request POST:/rest/contracts/{id}/projects
   * @secure */
  createContractProjectAssociation = (id: number, data: ContractProjectCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/projects`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of contract statuses filtered by optional query parameters
   *
   * @tags Contracts
   * @name GetContractStatuses
   * @summary Retrieves contract statuses
   * @request GET:/rest/contracts/statuses
   * @secure */
  getContractStatuses = (
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
    this.request<ContractStatusPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractStatusPagedResponse,
    ) as ContractStatusPagedResponse;

  /**
   * @description Creates a new contract status.
   *
   * @tags Contracts
   * @name CreateContractStatus
   * @summary Create contract status
   * @request POST:/rest/contracts/statuses
   * @secure */
  createContractStatus = (data: ContractStatusModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/statuses`,
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
   * @description Retrieves a paged list of contract types filtered by optional query parameters
   *
   * @tags Contracts
   * @name GetContractTypes
   * @summary Retrieves contract types
   * @request GET:/rest/contracts/types
   * @secure */
  getContractTypes = (
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
    this.request<ContractTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractTypePagedResponse,
    ) as ContractTypePagedResponse;

  /**
   * @description Creates a new contract type.
   *
   * @tags Contracts
   * @name CreateContractType
   * @summary Create contract type
   * @request POST:/rest/contracts/types
   * @secure */
  createContractType = (data: ContractTypeModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/types`,
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
   * @description Retrieves all associations between a contract and wage determination
   *
   * @tags Contracts
   * @name GetContractWageDeterminations
   * @summary Retrieve all wage determinations associated to a contract
   * @request GET:/rest/contracts/{id}/wage-determinations
   * @secure */
  getContractWageDeterminations = (
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
      /** @default false */
      includeLocations?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WageDeterminationContractPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/wage-determinations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      WageDeterminationContractPagedResponse,
    ) as WageDeterminationContractPagedResponse;

  /**
   * @description Creates an association between a wage determination and a contract
   *
   * @tags Contracts
   * @name CreateContractWageDeterminationAssociation
   * @summary Create an association between a wage determination and a contract
   * @request POST:/rest/contracts/{id}/wage-determinations
   * @secure */
  createContractWageDeterminationAssociation = (
    id: number,
    data: WageDeterminationContractCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/wage-determinations`,
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
   * @description Retrieves list of contract funding allocations.
   *
   * @tags Contracts
   * @name GetFundingAllocations
   * @summary Retrieves contract funding allocations.
   * @request GET:/rest/contracts/{id}/funding-allocations
   * @secure */
  getFundingAllocations = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/funding-allocations`,
      method: "GET",
      secure: true,
      ...params,
    });

  /**
   * @description Creates a new contract funding allocation.
   *
   * @tags Contracts
   * @name CreateFundingAllocation
   * @summary Create a contract funding allocation
   * @request POST:/rest/contracts/{id}/funding-allocations
   * @secure */
  createFundingAllocation = (id: number, data: ContractFundingAllocationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/funding-allocations`,
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
   * @description Retrieves details of a contract
   *
   * @tags Contracts
   * @name GetByKey5
   * @summary Retrieves a contract.
   * @request GET:/rest/contracts/{id}
   * @secure */
  getByKey5 = (id: number, params: RequestParams = {}) =>
    this.request<ContractModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractModel,
    ) as ContractModel;

  /**
   * @description Updates an existing contract given its key.
   *
   * @tags Contracts
   * @name Update5
   * @summary Updates a contract
   * @request PUT:/rest/contracts/{id}
   * @secure */
  update5 = (id: number, data: ContractModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract given its key.
   *
   * @tags Contracts
   * @name Delete4
   * @summary Delete contract
   * @request DELETE:/rest/contracts/{id}
   * @secure */
  delete4 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves alert preference details
   *
   * @tags Contracts
   * @name GetAlertPreferences
   * @summary Retrieves alert preferences
   * @request GET:/rest/contracts/alert-preferences
   * @secure */
  getAlertPreferences = (params: RequestParams = {}) =>
    this.request<ContractAlertPreferencesModel, ErrorResponse>(
      {
        path: `/rest/contracts/alert-preferences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractAlertPreferencesModel,
    ) as ContractAlertPreferencesModel;

  /**
   * @description Update alert preferences
   *
   * @tags Contracts
   * @name UpdateAlertPreferences
   * @summary Update alert preferences
   * @request PUT:/rest/contracts/alert-preferences
   * @secure */
  updateAlertPreferences = (data: ContractAlertPreferencesModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/alert-preferences`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes alert preference details for the user
   *
   * @tags Contracts
   * @name DeleteAlertPreferences
   * @summary Delete alert preferences
   * @request DELETE:/rest/contracts/alert-preferences
   * @secure */
  deleteAlertPreferences = (params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/alert-preferences`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Updates the read status of a contract funding alert for the authenticated user.
   *
   * @tags Contracts
   * @name UpdateContractAlert
   * @summary Update the read status of an alert
   * @request PUT:/rest/contracts/alerts/{id}
   * @secure */
  updateContractAlert = (id: number, data: ContractFundingAlertUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/alerts/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes a contract funding alert for the authenticated user.
   *
   * @tags Contracts
   * @name DeleteContractAlert
   * @summary Delete an alert
   * @request DELETE:/rest/contracts/alerts/{id}
   * @secure */
  deleteContractAlert = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/alerts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a contract clause included in a contract
   *
   * @tags Contracts
   * @name GetContractClause
   * @summary Retrieve an included contract clause
   * @request GET:/rest/contracts/{id}/contract-clauses/{clauseId}
   * @secure */
  getContractClause = (id: number, clauseId: number, params: RequestParams = {}) =>
    this.request<IncludedContractClauseModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/contract-clauses/${clauseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      IncludedContractClauseModel,
    ) as IncludedContractClauseModel;

  /**
   * @description Updates an included contract clause for a contract
   *
   * @tags Contracts
   * @name UpdateContractClause
   * @summary Update an included contract clause
   * @request PUT:/rest/contracts/{id}/contract-clauses/{clauseId}
   * @secure */
  updateContractClause = (
    id: number,
    clauseId: number,
    data: IncludedContractClauseModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/contract-clauses/${clauseId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an included contract clause.
   *
   * @tags Contracts
   * @name DeleteContractClause
   * @summary Delete included contract clause
   * @request DELETE:/rest/contracts/{id}/contract-clauses/{clauseId}
   * @secure */
  deleteContractClause = (id: number, clauseId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/contract-clauses/${clauseId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a contract mod
   *
   * @tags Contracts
   * @name GetContractModByKey
   * @summary Retrieves a contract mod.
   * @request GET:/rest/contracts/{id}/mods/{modNumber}
   * @secure */
  getContractModByKey = (id: number, modNumber: number, params: RequestParams = {}) =>
    this.request<ContractModModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/mods/${modNumber}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractModModel,
    ) as ContractModModel;

  /**
   * @description Updates an existing contract mod given its key.
   *
   * @tags Contracts
   * @name UpdateContractMod
   * @summary Updates a contract mod
   * @request PUT:/rest/contracts/{id}/mods/{modNumber}
   * @secure */
  updateContractMod = (id: number, modNumber: number, data: ContractModModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/mods/${modNumber}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract mod given its key.
   *
   * @tags Contracts
   * @name DeleteContractMod
   * @summary Delete a contract mod
   * @request DELETE:/rest/contracts/{id}/mods/{modNumber}
   * @secure */
  deleteContractMod = (id: number, modNumber: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/mods/${modNumber}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Deletes an existing association between a contract and a project.
   *
   * @tags Contracts
   * @name DeleteContractProjectAssociation
   * @summary Delete project association
   * @request DELETE:/rest/contracts/{id}/projects/{projectId}
   * @secure */
  deleteContractProjectAssociation = (id: number, projectId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/projects/${projectId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a contract status
   *
   * @tags Contracts
   * @name GetContractStatusByKey
   * @summary Retrieves a contract status.
   * @request GET:/rest/contracts/statuses/{id}
   * @secure */
  getContractStatusByKey = (id: number, params: RequestParams = {}) =>
    this.request<ContractStatusModel, ErrorResponse>(
      {
        path: `/rest/contracts/statuses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractStatusModel,
    ) as ContractStatusModel;

  /**
   * @description Updates an existing contract status given its key.
   *
   * @tags Contracts
   * @name UpdateContractStatus
   * @summary Updates a contract status
   * @request PUT:/rest/contracts/statuses/{id}
   * @secure */
  updateContractStatus = (id: number, data: ContractStatusModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/statuses/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract status given its key.
   *
   * @tags Contracts
   * @name DeleteContractStatus
   * @summary Delete contract status
   * @request DELETE:/rest/contracts/statuses/{id}
   * @secure */
  deleteContractStatus = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/statuses/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a contract type
   *
   * @tags Contracts
   * @name GetContractTypeByKey
   * @summary Retrieves a contract type.
   * @request GET:/rest/contracts/types/{id}
   * @secure */
  getContractTypeByKey = (id: number, params: RequestParams = {}) =>
    this.request<ContractTypeModel, ErrorResponse>(
      {
        path: `/rest/contracts/types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractTypeModel,
    ) as ContractTypeModel;

  /**
   * @description Updates an existing contract type given its key.
   *
   * @tags Contracts
   * @name UpdateContractType
   * @summary Updates a contract type
   * @request PUT:/rest/contracts/types/{id}
   * @secure */
  updateContractType = (id: number, data: ContractTypeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/types/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract type given its key.
   *
   * @tags Contracts
   * @name DeleteContractType
   * @summary Delete contract type
   * @request DELETE:/rest/contracts/types/{id}
   * @secure */
  deleteContractType = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/types/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a contract funding allocation
   *
   * @tags Contracts
   * @name GetFundingAllocationByKey
   * @summary Retrieves a contract funding allocation.
   * @request GET:/rest/contracts/{id}/funding-allocations/{allocationId}
   * @secure */
  getFundingAllocationByKey = (id: number, allocationId: number, params: RequestParams = {}) =>
    this.request<ContractFundingAllocationModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/funding-allocations/${allocationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContractFundingAllocationModel,
    ) as ContractFundingAllocationModel;

  /**
   * @description Updates an existing contract funding allocation given its key.
   *
   * @tags Contracts
   * @name UpdateFundingAllocation
   * @summary Updates a contract funding allocation
   * @request PUT:/rest/contracts/{id}/funding-allocations/{allocationId}
   * @secure */
  updateFundingAllocation = (
    id: number,
    allocationId: number,
    data: ContractFundingAllocationModel,
    query?: {
      /** @default false */
      reorder?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/funding-allocations/${allocationId}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing contract funding allocation given its key.
   *
   * @tags Contracts
   * @name DeleteFundingAllocation
   * @summary Delete a contract funding allocation
   * @request DELETE:/rest/contracts/{id}/funding-allocations/{allocationId}
   * @secure */
  deleteFundingAllocation = (id: number, allocationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/funding-allocations/${allocationId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an association between a contract and wage determination
   *
   * @tags Contracts
   * @name GetContractWageDetermination
   * @summary Retrieve associated contract to wage determination
   * @request GET:/rest/contracts/{id}/wage-determinations/{wageDeterminationId}
   * @secure */
  getContractWageDetermination = (
    id: number,
    wageDeterminationId: number,
    query?: {
      /** @default false */
      includeLocations?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WageDeterminationContractModel, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/wage-determinations/${wageDeterminationId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      WageDeterminationContractModel,
    ) as WageDeterminationContractModel;

  /**
   * @description Updates a wage determination and a contract
   *
   * @tags Contracts
   * @name UpdateContractWageDeterminationAssociation
   * @summary Update a wage determination and contract assocation
   * @request PUT:/rest/contracts/{id}/wage-determinations/{wageDeterminationId}
   * @secure */
  updateContractWageDeterminationAssociation = (
    id: number,
    wageDeterminationId: number,
    data: WageDeterminationContractModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/wage-determinations/${wageDeterminationId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing wage determination contract given its contract key and wage determination key.
   *
   * @tags Contracts
   * @name DeleteWageDeterminationContract
   * @summary Delete wage determination contract
   * @request DELETE:/rest/contracts/{id}/wage-determinations/{wageDeterminationId}
   * @secure */
  deleteWageDeterminationContract = (id: number, wageDeterminationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/contracts/${id}/wage-determinations/${wageDeterminationId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves list of available additional item types.
   *
   * @tags Contracts
   * @name GetAdditionalItemTypes
   * @summary Retrieves available additional item types
   * @request GET:/rest/contracts/additional-item-types
   * @secure */
  getAdditionalItemTypes = (
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
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/contracts/additional-item-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves list of available master contracts in an owning organization's organizational hierarchy.
   *
   * @tags Contracts
   * @name GetAvailableMasterContracts
   * @summary Retrieves available master contracts
   * @request GET:/rest/contracts/owning-organizations/{owningOrgId}/master-contracts
   * @secure */
  getAvailableMasterContracts = (
    owningOrgId: number,
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
       * Optional contract ID of contract for which master contract options are being retrieved.
       * @format int64
       * @min 1
       * @example 1
       */
      contractKey?: number;
      /** Optional contract code to filter master contract results. */
      contractCode?: string;
      /** Optional contract title to filter master contract results. */
      contractTitle?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/owning-organizations/${owningOrgId}/master-contracts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Retrieves list of available owning organizations.
   *
   * @tags Contracts
   * @name GetAvailableOwningOrgs
   * @summary Retrieves available owning organizations
   * @request GET:/rest/contracts/owning-organizations
   * @secure */
  getAvailableOwningOrgs = (
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
      code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrganizationListPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/owning-organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationListPagedResponse,
    ) as OrganizationListPagedResponse;

  /**
   * @description Retrieves a paged list of contract funding alerts for the authenticated user.
   *
   * @tags Contracts
   * @name GetContractAlerts
   * @summary Retrieves alerts
   * @request GET:/rest/contracts/alerts
   * @secure */
  getContractAlerts = (
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
    this.request<ContractFundingAlertPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/alerts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractFundingAlertPagedResponse,
    ) as ContractFundingAlertPagedResponse;

  /**
   * @description Retrieves a paged list of contract provisions
   *
   * @tags Contracts
   * @name GetContractProvisions
   * @summary Retrieves contract provisions
   * @request GET:/rest/contracts/provisions
   * @secure */
  getContractProvisions = (
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
    this.request<ContractProvisionPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/provisions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContractProvisionPagedResponse,
    ) as ContractProvisionPagedResponse;

  /**
   * @description Retrieves a list of expense types available for contract project associations.
   *
   * @tags Contracts
   * @name GetProjectAssociationExpenseTypes
   * @summary Retrieves project expense types
   * @request GET:/rest/contracts/{id}/projects/available/expense-types
   * @secure */
  getProjectAssociationExpenseTypes = (
    id: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModel[], ErrorResponse>(
      {
        path: `/rest/contracts/${id}/projects/available/expense-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModel,
    ) as KeyNameCodeModel;

  /**
   * @description Retrieves a list of labor categories available for contract project associations.
   *
   * @tags Contracts
   * @name GetProjectAssociationLaborCategories
   * @summary Retrieves project labor categories
   * @request GET:/rest/contracts/{id}/projects/available/labor-categories
   * @secure */
  getProjectAssociationLaborCategories = (
    id: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameModel[], ErrorResponse>(
      {
        path: `/rest/contracts/${id}/projects/available/labor-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameModel,
    ) as KeyNameModel;

  /**
   * @description Retrieves a list of tasks available for contract project associations.
   *
   * @tags Contracts
   * @name GetProjectAssociationTasks
   * @summary Retrieves project tasks
   * @request GET:/rest/contracts/{id}/projects/available/tasks
   * @secure */
  getProjectAssociationTasks = (
    id: number,
    query?: {
      /**
       * @format int64
       * @min 1
       * @example 1
       */
      projectId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TaskSummaryModel[], ErrorResponse>(
      {
        path: `/rest/contracts/${id}/projects/available/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TaskSummaryModel,
    ) as TaskSummaryModel;

  /**
   * @description Retrieves a paged list of contracts filtered by optional query parameters
   *
   * @tags Contracts
   * @name Search2
   * @summary Retrieves contracts
   * @request POST:/rest/contracts/search
   * @secure */
  search2 = (
    data: ContractSearchModel,
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
    this.request<ContractPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ContractPagedResponse,
    ) as ContractPagedResponse;

  /**
   * @description Search for wage determination and contract associations
   *
   * @tags Contracts
   * @name SearchContractWageDeterminations
   * @summary Search for wage determinations and contract associations
   * @request POST:/rest/contracts/{id}/wage-determinations/search
   * @secure */
  searchContractWageDeterminations = (
    id: number,
    data: WageDeterminationContractSearchModel,
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
    this.request<WageDeterminationContractPagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/${id}/wage-determinations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      WageDeterminationContractPagedResponse,
    ) as WageDeterminationContractPagedResponse;

  /**
   * @description Retrieves a paged list of users with roles for billing analysts
   *
   * @tags Contracts
   * @name GetBillingAnalysts
   * @summary Retrieves active billing analysts
   * @request GET:/rest/contracts/billing-analysts
   * @secure */
  getBillingAnalysts = (
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
      /** @default false */
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonBasePagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/billing-analysts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonBasePagedResponse,
    ) as PersonBasePagedResponse;

  /**
   * @description Retrieves a paged list of users with roles for contract manager
   *
   * @tags Contracts
   * @name GetContractManagers
   * @summary Retrieves active contract managers
   * @request GET:/rest/contracts/contract-managers
   * @secure */
  getContractManagers = (
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
      /** @default false */
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PersonBasePagedResponse, ErrorResponse>(
      {
        path: `/rest/contracts/contract-managers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonBasePagedResponse,
    ) as PersonBasePagedResponse;
}
