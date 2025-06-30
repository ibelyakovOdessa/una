"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assigning = void 0;
const http_client_1 = require("./http-client");
class Assigning extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves assignment matrix data for project and people within the given period(s).
         *
         * @tags Assigning
         * @name AssignmentMatrix
         * @summary Retrieves assigment matrix data
         * @request POST:/rest/assigning/matrix
         * @secure */
        this.assignmentMatrix = (data, params = {}) => this.request({
            path: `/rest/assigning/matrix`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.AssigningMatrixModel);
        /**
         * @description Retrieves a paged list of filter sets saved by the authenticated user.
         *
         * @tags Assigning
         * @name GetAssigningListCriteria
         * @summary Retrieves saved assigning filters.
         * @request GET:/rest/assigning/matrix/criteria
         * @secure */
        this.getAssigningListCriteria = (params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AssigningMatrixSearchPagedResponse);
        /**
         * @description Saves a filter set for later use.
         *
         * @tags Assigning
         * @name CreateAssigningListCriteria
         * @summary Save a filter set.
         * @request POST:/rest/assigning/matrix/criteria
         * @secure */
        this.createAssigningListCriteria = (data, query, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of filter sets shared by the authenticated user.
         *
         * @tags Assigning
         * @name GetAssigningSharedCriteria
         * @summary Retrieves saved shared assigning filters.
         * @request GET:/rest/assigning/matrix/criteria/share
         * @secure */
        this.getAssigningSharedCriteria = (params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/share`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AssigningMatrixSearchPagedResponse);
        /**
         * @description Saves a shared filter set for later use.
         *
         * @tags Assigning
         * @name CreateAssigningSharedCriteria
         * @summary Save a shared filter set.
         * @request POST:/rest/assigning/matrix/criteria/share
         * @secure */
        this.createAssigningSharedCriteria = (data, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/share`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a saved filter set by id.
         *
         * @tags Assigning
         * @name GetAssigningListCriteriaByKey
         * @summary Retrieves a saved assigning filter.
         * @request GET:/rest/assigning/matrix/criteria/{id}
         * @secure */
        this.getAssigningListCriteriaByKey = (id, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AssigningMatrixSearchCriteriaModel);
        /**
         * @description Updates a saved filter set by id.
         *
         * @tags Assigning
         * @name UpdateAssigningListCriteriaByKey
         * @summary Updates a saved assigning filter.
         * @request PUT:/rest/assigning/matrix/criteria/{id}
         * @secure */
        this.updateAssigningListCriteriaByKey = (id, data, query, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}`,
            method: "PUT",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteAssigningListCriteria = (id, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves a saved shared filter set by id.
         *
         * @tags Assigning
         * @name GetAssigningSharedCriteriaByKey
         * @summary Retrieves a saved shared assigning filter.
         * @request GET:/rest/assigning/matrix/criteria/{id}/share
         * @secure */
        this.getAssigningSharedCriteriaByKey = (id, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}/share`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AssigningMatrixSearchModel);
        /**
         * @description Updates a saved shared filter set by id.
         *
         * @tags Assigning
         * @name UpdateAssigningSharedCriteriaByKey
         * @summary Updates a saved shared assigning filter.
         * @request PUT:/rest/assigning/matrix/criteria/{id}/share
         * @secure */
        this.updateAssigningSharedCriteriaByKey = (id, data, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}/share`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteAssigningSharedCriteria = (id, params = {}) => this.request({
            path: `/rest/assigning/matrix/criteria/${id}/share`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves list of available person orgs for assigning, optionally filterable by org code (using a double-ended wildcard search) and project key. If project key is provided, and unanet.financials.use_financial_orgs is true, and the project has an owning org, the list of available person orgs will be further limited to those users whose person org's legal entity is the same as the legal entity of the project's owning org. An exception to this is that person orgs that are not marked as financial orgs will not be filtered out. Additionally, if unanet.multi_entity.enabled is true and the project has supporting orgs defined, person orgs from the supporting orgs will also appear (resource planners will need to have person org access to the support orgs).
         *
         * @tags Assigning
         * @name GetAvailablePersonOrgs
         * @summary Retrieves available person orgs
         * @request GET:/rest/assigning/person/organizations
         * @secure */
        this.getAvailablePersonOrgs = (query, params = {}) => this.request({
            path: `/rest/assigning/person/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves list of available project orgs for assigning, optionally filterable by org code using a double-ended wildcard search
         *
         * @tags Assigning
         * @name GetAvailableProjectOrgs
         * @summary Retrieves available project orgs
         * @request GET:/rest/assigning/projects/organizations
         * @secure */
        this.getAvailableProjectOrgs = (query, params = {}) => this.request({
            path: `/rest/assigning/projects/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves list of available project owning orgs for assigning, optionally filterable by org code using a double-ended wildcard search
         *
         * @tags Assigning
         * @name GetAvailableProjectOwningOrgs
         * @summary Retrieves available project owning orgs
         * @request GET:/rest/assigning/projects/owning-organizations
         * @secure */
        this.getAvailableProjectOwningOrgs = (query, params = {}) => this.request({
            path: `/rest/assigning/projects/owning-organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves default assignment values given a project, person, date
         *
         * @tags Assigning
         * @name GetDefaults
         * @summary Retrieves project assignment defaults for a person and date
         * @request GET:/rest/assigning/defaults/project/{id}/person/{personId}/{date}
         * @secure */
        this.getDefaults = (id, personId, date, params = {}) => this.request({
            path: `/rest/assigning/defaults/project/${id}/person/${personId}/${date}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AssignmentDefaultsModel);
        /**
         * @description Retrieves assignment allocation percentages for people within the given period(s).
         *
         * @tags Assigning
         * @name PersonAllocation
         * @summary Retrieves people assignment allocation
         * @request POST:/rest/assigning/people/allocation
         * @secure */
        this.personAllocation = (data, params = {}) => this.request({
            path: `/rest/assigning/people/allocation`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SchedulingPersonAllocationModel);
        /**
         * @description Search for a list of people based on resource assignment criteria
         *
         * @tags Assigning
         * @name SearchPeople
         * @summary Search for people
         * @request POST:/rest/assigning/people
         * @secure */
        this.searchPeople = (data, query, params = {}) => this.request({
            path: `/rest/assigning/people`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SchedulingPersonSummaryPagedResponse);
        /**
         * @description Search for a list of eligible projects based on resource assign criteria
         *
         * @tags Assigning
         * @name SearchProjects
         * @summary Search for projects
         * @request POST:/rest/assigning/projects
         * @secure */
        this.searchProjects = (data, query, params = {}) => this.request({
            path: `/rest/assigning/projects`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SchedulingProjectSummaryPagedResponse);
    }
}
exports.Assigning = Assigning;
