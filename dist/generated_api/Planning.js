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
exports.Planning = void 0;
const http_client_1 = require("./http-client");
class Planning extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of planned time and if they are assignable.
         *
         * @tags Planning
         * @name AssignablePlannedTime
         * @summary Retrieves assignable planned time
         * @request POST:/rest/planning/time/assignable
         * @secure */
        this.assignablePlannedTime = (data, query, params = {}) => this.request({
            path: `/rest/planning/time/assignable`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.AssignablePlannedTimePagedResponse);
        /**
         * @description Creates a new planned time record.
         *
         * @tags Planning
         * @name Create26
         * @summary Creates planned time
         * @request POST:/rest/planning/time
         * @secure */
        this.create26 = (data, params = {}) => this.request({
            path: `/rest/planning/time`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of filter sets saved by the authenticated user.
         *
         * @tags Planning
         * @name GetMatrixListCriteria
         * @summary Retrieves saved filters.
         * @request GET:/rest/planning/time/matrix/criteria
         * @secure */
        this.getMatrixListCriteria = (query, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningMatrixFilterPagedResponse);
        /**
         * @description Saves a filter set for later use.
         *
         * @tags Planning
         * @name CreateMatrixListCriteria
         * @summary Save a filter set.
         * @request POST:/rest/planning/time/matrix/criteria
         * @secure */
        this.createMatrixListCriteria = (data, query, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of shared filter sets saved by the authenticated user.
         *
         * @tags Planning
         * @name GetMatrixSharedCriteria
         * @summary Retrieves saved shared filters.
         * @request GET:/rest/planning/time/matrix/criteria/share
         * @secure */
        this.getMatrixSharedCriteria = (query, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/share`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningMatrixFilterPagedResponse);
        /**
         * @description Saves a shared filter set for later use.
         *
         * @tags Planning
         * @name CreateMatrixSharedCriteria
         * @summary Save a shared filter set.
         * @request POST:/rest/planning/time/matrix/criteria/share
         * @secure */
        this.createMatrixSharedCriteria = (data, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/share`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a planned time record.
         *
         * @tags Planning
         * @name GetPlannedTimeByKey
         * @summary Retrieves planned time
         * @request GET:/rest/planning/time/{id}
         * @secure */
        this.getPlannedTimeByKey = (id, params = {}) => this.request({
            path: `/rest/planning/time/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlannedTimeModel);
        /**
         * @description Updates an existing planned time record.
         *
         * @tags Planning
         * @name Update26
         * @summary Updates planned time
         * @request PUT:/rest/planning/time/{id}
         * @secure */
        this.update26 = (id, data, params = {}) => this.request({
            path: `/rest/planning/time/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete23 = (id, params = {}) => this.request({
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
        this.getMatrixListCriteriaByKey = (id, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningMatrixSearchCriteriaReadModel);
        /**
         * @description Updates a saved filter set by id.
         *
         * @tags Planning
         * @name UpdateMatrixListCriteriaByKey
         * @summary Updates a saved filter.
         * @request PUT:/rest/planning/time/matrix/criteria/{id}
         * @secure */
        this.updateMatrixListCriteriaByKey = (id, data, query, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}`,
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
         * @tags Planning
         * @name DeleteMatrixListCriteria
         * @summary Deletes a saved filter.
         * @request DELETE:/rest/planning/time/matrix/criteria/{id}
         * @secure */
        this.deleteMatrixListCriteria = (id, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves a saved shared filter set by id.
         *
         * @tags Planning
         * @name GetMatrixSharedCriteriaByKey
         * @summary Retrieves a saved shared filter.
         * @request GET:/rest/planning/time/matrix/criteria/{id}/share
         * @secure */
        this.getMatrixSharedCriteriaByKey = (id, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}/share`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningMatrixSearchCriteriaReadModel);
        /**
         * @description Updates a saved shared filter set by id.
         *
         * @tags Planning
         * @name UpdateMatrixSharedCriteriaByKey
         * @summary Updates a saved shared filter.
         * @request PUT:/rest/planning/time/matrix/criteria/{id}/share
         * @secure */
        this.updateMatrixSharedCriteriaByKey = (id, data, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}/share`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteMatrixSharedCriteria = (id, params = {}) => this.request({
            path: `/rest/planning/time/matrix/criteria/${id}/share`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves list of available person orgs for planning, optionally filterable by org code (using a double-ended wildcard search) and project key. If project key is provided, and unanet.financials.use_financial_orgs is true, and the project has an owning org, the list of available person orgs will be further limited to those users whose person org's legal entity is the same as the legal entity of the project's owning org. An exception to this is that person orgs that are not marked as financial orgs will not be filtered out. Additionally, if unanet.multi_entity.enabled is true and the project has supporting orgs defined, person orgs from the supporting orgs will also appear (resource planners will need to have person org access to the support orgs).
         *
         * @tags Planning
         * @name GetAvailablePersonOrgs1
         * @summary Retrieves available person orgs
         * @request GET:/rest/planning/person/organizations
         * @secure */
        this.getAvailablePersonOrgs1 = (query, params = {}) => this.request({
            path: `/rest/planning/person/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves list of available project orgs for planning, optionally filterable by org code using a double-ended wildcard search
         *
         * @tags Planning
         * @name GetAvailableProjectOrgs1
         * @summary Retrieves available project orgs
         * @request GET:/rest/planning/projects/organizations
         * @secure */
        this.getAvailableProjectOrgs1 = (query, params = {}) => this.request({
            path: `/rest/planning/projects/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves list of available project owning orgs for planning, optionally filterable by org code using a double-ended wildcard search
         *
         * @tags Planning
         * @name GetAvailableProjectOwningOrgs1
         * @summary Retrieves available project owning orgs
         * @request GET:/rest/planning/projects/owning-organizations
         * @secure */
        this.getAvailableProjectOwningOrgs1 = (query, params = {}) => this.request({
            path: `/rest/planning/projects/owning-organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves default plan values given a project, person, date
         *
         * @tags Planning
         * @name GetDefaults1
         * @summary Retrieves project planning defaults for a person and date
         * @request GET:/rest/planning/time/defaults/project/{id}/person/{personId}/{date}
         * @secure */
        this.getDefaults1 = (id, personId, date, params = {}) => this.request({
            path: `/rest/planning/time/defaults/project/${id}/person/${personId}/${date}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PlanDefaultsModel);
        /**
         * @description Retrieves planned time allocation percentages for people within the given period(s).
         *
         * @tags Planning
         * @name PersonAllocation1
         * @summary Retrieves planned time allocation
         * @request POST:/rest/planning/time/people/allocation
         * @secure */
        this.personAllocation1 = (data, params = {}) => this.request({
            path: `/rest/planning/time/people/allocation`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SchedulingPersonAllocationModel);
        /**
         * @description Retrieves booked planned time, leave requests, and holidays for a given person and period.
         *
         * @tags Planning
         * @name PersonBooked
         * @summary Retrieves booked planned time
         * @request POST:/rest/planning/time/people/{id}/booked
         * @secure */
        this.personBooked = (id, data, params = {}) => this.request({
            path: `/rest/planning/time/people/${id}/booked`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningPersonBookedModel);
        /**
         * @description Retrieves planned time matrix data for project and people within the given period(s).
         *
         * @tags Planning
         * @name PlanningMatrix
         * @summary Retrieves planned matrix data
         * @request POST:/rest/planning/time/matrix
         * @secure */
        this.planningMatrix = (data, params = {}) => this.request({
            path: `/rest/planning/time/matrix`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PlanningMatrixModel);
        /**
         * @description Search for a list of people based on resource plan criteria
         *
         * @tags Planning
         * @name SearchPeople1
         * @summary Search for people
         * @request POST:/rest/planning/people
         * @secure */
        this.searchPeople1 = (data, query, params = {}) => this.request({
            path: `/rest/planning/people`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SchedulingPersonSummaryPagedResponse);
        /**
         * @description Retrieves a paged list of planned time filtered by optional search criteria.
         *
         * @tags Planning
         * @name SearchPlannedTime
         * @summary Retrieves planned time
         * @request POST:/rest/planning/time/search
         * @secure */
        this.searchPlannedTime = (data, query, params = {}) => this.request({
            path: `/rest/planning/time/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PlannedTimePagedResponse);
        /**
         * @description Search for a list of eligible projects based on resource plan criteria
         *
         * @tags Planning
         * @name SearchProjects1
         * @summary Search for projects
         * @request POST:/rest/planning/projects
         * @secure */
        this.searchProjects1 = (data, query, params = {}) => this.request({
            path: `/rest/planning/projects`,
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
exports.Planning = Planning;
