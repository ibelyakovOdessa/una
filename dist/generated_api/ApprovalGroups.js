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
exports.ApprovalGroups = void 0;
const http_client_1 = require("./http-client");
class ApprovalGroups extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of approvers for a given approval group key.
         *
         * @tags Approval Groups
         * @name Approvers
         * @summary Retrieves approval group approvers.
         * @request GET:/rest/approval-groups/{id}/approvers
         * @secure */
        this.approvers = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/approvers`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Replaces the approvers associated with an approval group with the provided list. The priority ordering of the approvers will be based on the order of the provided list.
         *
         * @tags Approval Groups
         * @name UpdateApprovers
         * @summary Updates the approvers associated with an approval group
         * @request PUT:/rest/approval-groups/{id}/approvers
         * @secure */
        this.updateApprovers = (id, data, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/approvers`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Adds one or more approvers, set with highest priority, to an approval group .
         *
         * @tags Approval Groups
         * @name AddApprovers
         * @summary Adds approvers to approval group
         * @request POST:/rest/approval-groups/{id}/approvers
         * @secure */
        this.addApprovers = (id, data, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/approvers`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Associates a submitting project with an Accounts Receivable Approval Group).If the project is already associated with another approval group, the other approval group will be replaced with this one.
         *
         * @tags Approval Groups
         * @name AddCiSubmittingProject
         * @summary Adds a customer invoice submitting project to an accounts receivable approval group
         * @request POST:/rest/approval-groups/{id}/ci-submitting-projects/{projectId}
         * @secure */
        this.addCiSubmittingProject = (id, projectId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/ci-submitting-projects/${projectId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Removes a customer invoice submitting project from an accounts receivable approval group.
         *
         * @tags Approval Groups
         * @name DeleteCiSubmittingProject
         * @summary Removes a customer invoice submitting project from an accounts receivable approval group
         * @request DELETE:/rest/approval-groups/{id}/ci-submitting-projects/{projectId}
         * @secure */
        this.deleteCiSubmittingProject = (id, projectId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/ci-submitting-projects/${projectId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds an expense report submitter to a time/expense approval group.
         *
         * @tags Approval Groups
         * @name AddExpenseReportSubmitter
         * @summary Adds an expense report submitter to a time/expense approval group
         * @request POST:/rest/approval-groups/{id}/expense-report-submitters/{personId}
         * @secure */
        this.addExpenseReportSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-report-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes an expense report submitter from a time/expense approval group
         *
         * @tags Approval Groups
         * @name DeleteExpenseReportSubmitter
         * @summary Deletes expense report submitter from a time/expense approval group
         * @request DELETE:/rest/approval-groups/{id}/expense-report-submitters/{personId}
         * @secure */
        this.deleteExpenseReportSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-report-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds an expense request submitter to a time/expense approval group.
         *
         * @tags Approval Groups
         * @name AddExpenseRequestSubmitter
         * @summary Adds an expense request submitter to a time/expense approval group
         * @request POST:/rest/approval-groups/{id}/expense-request-submitters/{personId}
         * @secure */
        this.addExpenseRequestSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-request-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes an expense request submitter from a time/expense approval group
         *
         * @tags Approval Groups
         * @name DeleteExpenseRequestSubmitter
         * @summary Deletes expense request submitter from a time/expense approval group
         * @request DELETE:/rest/approval-groups/{id}/expense-request-submitters/{personId}
         * @secure */
        this.deleteExpenseRequestSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-request-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds a leave request submitter to a time/expense approval group.
         *
         * @tags Approval Groups
         * @name AddLeaveSubmitter
         * @summary Adds a leave request submitter to time/expense approval group
         * @request POST:/rest/approval-groups/{id}/leave-submitters/{personId}
         * @secure */
        this.addLeaveSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/leave-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a leave request submitter from a time/expense approval group
         *
         * @tags Approval Groups
         * @name DeleteLeaveSubmitter
         * @summary Deletes a leave request submitter from a time/expense approval group
         * @request DELETE:/rest/approval-groups/{id}/leave-submitters/{personId}
         * @secure */
        this.deleteLeaveSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/leave-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds a purchase order submitter to a purchasing approval group.
         *
         * @tags Approval Groups
         * @name AddPoSubmitter
         * @summary Adds a purchase order submitter to a purchasing approval group
         * @request POST:/rest/approval-groups/{id}/po-submitters/{personId}
         * @secure */
        this.addPoSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/po-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a purchase order submitter from a purchasing approval group
         *
         * @tags Approval Groups
         * @name DeletePoSubmitter
         * @summary Deletes purchase order submitter from a purchasing approval group
         * @request DELETE:/rest/approval-groups/{id}/po-submitters/{personId}
         * @secure */
        this.deletePoSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/po-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds a purchase request submitter to a purchasing approval group.
         *
         * @tags Approval Groups
         * @name AddPrSubmitter
         * @summary Adds a purchase request submitter to a purchasing approval group
         * @request POST:/rest/approval-groups/{id}/pr-submitters/{personId}
         * @secure */
        this.addPrSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/pr-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a purchase request submitter from a purchasing approval group
         *
         * @tags Approval Groups
         * @name DeletePrSubmitter
         * @summary Deletes purchase request submitter from a purchasing approval group
         * @request DELETE:/rest/approval-groups/{id}/pr-submitters/{personId}
         * @secure */
        this.deletePrSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/pr-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds a time submitter to a time/expense approval group.
         *
         * @tags Approval Groups
         * @name AddTimeSubmitter
         * @summary Adds a time submitter to a time/expense approval group
         * @request POST:/rest/approval-groups/{id}/time-submitters/{personId}
         * @secure */
        this.addTimeSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/time-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a time submitter from a time/expense approval group
         *
         * @tags Approval Groups
         * @name DeleteTimeSubmitter
         * @summary Deletes a time submitter from a time/expense approval group
         * @request DELETE:/rest/approval-groups/{id}/time-submitters/{personId}
         * @secure */
        this.deleteTimeSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/time-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Adds a vendor invoice submitter to an accounts payable approval group.
         *
         * @tags Approval Groups
         * @name AddViSubmitter
         * @summary Adds a vendor invoice submitter to an accounts payable approval group
         * @request POST:/rest/approval-groups/{id}/vi-submitters/{personId}
         * @secure */
        this.addViSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/vi-submitters/${personId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a vendor invoice submitter from an accounts payable approval group
         *
         * @tags Approval Groups
         * @name DeleteViSubmitter
         * @summary Deletes vendor invoice submitter from an accounts payable approval group
         * @request DELETE:/rest/approval-groups/{id}/vi-submitters/{personId}
         * @secure */
        this.deleteViSubmitter = (id, personId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/vi-submitters/${personId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of approval groups filtered by optional approval group type.
         *
         * @tags Approval Groups
         * @name Get1
         * @summary Retrieves approval groups
         * @request GET:/rest/approval-groups
         * @secure */
        this.get1 = (query, params = {}) => this.request({
            path: `/rest/approval-groups`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApprovalGroupPagedResponse);
        /**
         * @description Creates a new approval group.
         *
         * @tags Approval Groups
         * @name Create
         * @summary Creates approval group
         * @request POST:/rest/approval-groups
         * @secure */
        this.create = (data, params = {}) => this.request({
            path: `/rest/approval-groups`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves an approval group by id.
         *
         * @tags Approval Groups
         * @name GetByKey
         * @summary Retrieves an approval group
         * @request GET:/rest/approval-groups/{id}
         * @secure */
        this.getByKey = (id, params = {}) => this.request({
            path: `/rest/approval-groups/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApprovalGroupModel);
        /**
         * @description Updates an approval group's modifiable details.
         *
         * @tags Approval Groups
         * @name Update
         * @summary Updates approval group
         * @request PUT:/rest/approval-groups/{id}
         * @secure */
        this.update = (id, data, params = {}) => this.request({
            path: `/rest/approval-groups/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an approval group.
         *
         * @tags Approval Groups
         * @name Delete
         * @summary Deletes an approval group
         * @request DELETE:/rest/approval-groups/{id}
         * @secure */
        this.delete = (id, params = {}) => this.request({
            path: `/rest/approval-groups/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of projects associated with an Accounts Receivable Approval Group)
         *
         * @tags Approval Groups
         * @name GetCiSubmittingProjects
         * @summary Retrieves customer invoice submitting projects.
         * @request GET:/rest/approval-groups/{id}/ci-submitting-projects
         * @secure */
        this.getCiSubmittingProjects = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/ci-submitting-projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ApprovalGroupSubmittingProjectPagedResponse);
        /**
         * @description Retrieves a paged list of expense report submitters.
         *
         * @tags Approval Groups
         * @name GetExpenseReportSubmitters
         * @summary Retrieves expense report submitters.
         * @request GET:/rest/approval-groups/{id}/expense-report-submitters
         * @secure */
        this.getExpenseReportSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-report-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of expense request submitters.
         *
         * @tags Approval Groups
         * @name GetExpenseRequestSubmitters
         * @summary Retrieves expense request submitters.
         * @request GET:/rest/approval-groups/{id}/expense-request-submitters
         * @secure */
        this.getExpenseRequestSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/expense-request-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of leave request submitters.
         *
         * @tags Approval Groups
         * @name GetLeaveSubmitters
         * @summary Retrieves leave request submitters.
         * @request GET:/rest/approval-groups/{id}/leave-submitters
         * @secure */
        this.getLeaveSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/leave-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of purchase order submitters.
         *
         * @tags Approval Groups
         * @name GetPoSubmitters
         * @summary Retrieves purchase order submitters.
         * @request GET:/rest/approval-groups/{id}/po-submitters
         * @secure */
        this.getPoSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/po-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of purchase request submitters.
         *
         * @tags Approval Groups
         * @name GetPrSubmitters
         * @summary Retrieves purchase request submitters.
         * @request GET:/rest/approval-groups/{id}/pr-submitters
         * @secure */
        this.getPrSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/pr-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of time/expense submitters.
         *
         * @tags Approval Groups
         * @name GetTimeSubmitters
         * @summary Retrieves time submitters.
         * @request GET:/rest/approval-groups/{id}/time-submitters
         * @secure */
        this.getTimeSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/time-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of vendor invoice submitters.
         *
         * @tags Approval Groups
         * @name GetViSubmitters
         * @summary Retrieves vendor invoice submitters.
         * @request GET:/rest/approval-groups/{id}/vi-submitters
         * @secure */
        this.getViSubmitters = (id, query, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/vi-submitters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Removes an approver from an approval group.
         *
         * @tags Approval Groups
         * @name RemoveApprover
         * @summary Removes approver from approval group
         * @request DELETE:/rest/approval-groups/{id}/approvers/{approverId}
         * @secure */
        this.removeApprover = (id, approverId, params = {}) => this.request({
            path: `/rest/approval-groups/${id}/approvers/${approverId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of approval groups filtered by optional search criteria.
         *
         * @tags Approval Groups
         * @name Search
         * @summary Retrieves approval groups
         * @request POST:/rest/approval-groups/search
         * @secure */
        this.search = (data, query, params = {}) => this.request({
            path: `/rest/approval-groups/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ApprovalGroupPagedResponse);
    }
}
exports.ApprovalGroups = ApprovalGroups;
