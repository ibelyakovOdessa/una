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
exports.People = void 0;
const data_contracts_1 = require("./data-contracts");
const http_client_1 = require("./http-client");
class People extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves attachment details for a person.
         *
         * @tags People
         * @name Attachments2
         * @summary Retrieves person attachments
         * @request GET:/rest/people/{id}/attachments
         * @secure */
        this.attachments2 = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Add an attachment for a person.
         *
         * @tags People
         * @name AddAttachment7
         * @summary Add person attachment
         * @request POST:/rest/people/{id}/attachments
         * @secure */
        this.addAttachment7 = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of available alternate people filtered by optional search criteria.
         *
         * @tags People
         * @name AvailableAlternates
         * @summary Retrieves a list of available alternates
         * @request GET:/rest/people/{id}/available-alternates
         * @secure */
        this.availableAlternates = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/available-alternates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSummaryPagedResponse);
        /**
         * @description Retrieves a paged list of people filtered by optional 'name' and 'active' flag parameters.
         *
         * @tags People
         * @name Get29
         * @summary Retrieves people by name
         * @request GET:/rest/people
         * @secure */
        this.get29 = (query, params = {}) => this.request({
            path: `/rest/people`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonPagedResponse);
        /**
         * @description Creates a new person.
         *
         * @tags People
         * @name Create25
         * @summary Creates a person
         * @request POST:/rest/people
         * @secure */
        this.create25 = (data, params = {}) => this.request({
            path: `/rest/people`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve list of accrual plans for a given person
         *
         * @tags People
         * @name GetAccrualPlans
         * @summary Retrieve list of accrual plans for a person
         * @request GET:/rest/people/{id}/accrual-plans
         * @secure */
        this.getAccrualPlans = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/accrual-plans`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonAccrualPlanPagedResponse);
        /**
         * @description Creates an accrual plan for a person.
         *
         * @tags People
         * @name CreateAccrualPlan
         * @summary Creates a person's accrual plan
         * @request POST:/rest/people/{id}/accrual-plans
         * @secure */
        this.createAccrualPlan = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/accrual-plans`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a list of all SCA benefit package values for a person.
         *
         * @tags People
         * @name GetBenefitsValuesList
         * @summary Retrieves a person's SCA benefit package
         * @request GET:/rest/people/{id}/benefits-values
         * @secure */
        this.getBenefitsValuesList = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/benefits-values`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBenefitsValuePagedResponse);
        /**
         * @description Creates an SCA benefit value for a person.
         *
         * @tags People
         * @name CreateBenefitsValue
         * @summary Creates a person's SCA benefit
         * @request POST:/rest/people/{id}/benefits-values
         * @secure */
        this.createBenefitsValue = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/benefits-values`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a list of all rates for a person.
         *
         * @tags People
         * @name Rates1
         * @summary Retrieves person rates
         * @request GET:/rest/people/{id}/rates
         * @secure */
        this.rates1 = (id, params = {}) => this.request({
            path: `/rest/people/${id}/rates`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonRateModel);
        /**
         * @description Adds rate and classification information for a person. This information is time bound by a begin and an end date.
         *
         * @tags People
         * @name CreateRate1
         * @summary Creates person rate
         * @request POST:/rest/people/{id}/rates
         * @secure */
        this.createRate1 = (id, data, query, params = {}) => this.request({
            path: `/rest/people/${id}/rates`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieve list of skills for a person given its key
         *
         * @tags People
         * @name GetSkills
         * @summary Retrieve list of skills for a person
         * @request GET:/rest/people/{id}/skills
         * @secure */
        this.getSkills = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/skills`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSkillPagedResponse);
        /**
         * @description Associates a skill for a person.
         *
         * @tags People
         * @name CreateSkill
         * @summary Creates a person skill
         * @request POST:/rest/people/{id}/skills
         * @secure */
        this.createSkill = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/skills`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getByKey28 = (id, params = {}) => this.request({
            path: `/rest/people/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonModel);
        /**
         * @description Updates an existing person matching id. 'id' parameter must match the 'person' model 'key' field.
         *
         * @tags People
         * @name Update25
         * @summary Updates a person
         * @request PUT:/rest/people/{id}
         * @secure */
        this.update25 = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete22 = (id, params = {}) => this.request({
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
        this.getAccrualPlan = (id, personAccrualPlanId, params = {}) => this.request({
            path: `/rest/people/${id}/accrual-plans/${personAccrualPlanId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonAccrualPlanModel);
        /**
         * @description Updates a person's accrual plan.
         *
         * @tags People
         * @name UpdateAccrualPlan
         * @summary Updates a person's accrual plan
         * @request PUT:/rest/people/{id}/accrual-plans/{personAccrualPlanId}
         * @secure */
        this.updateAccrualPlan = (id, personAccrualPlanId, data, params = {}) => this.request({
            path: `/rest/people/${id}/accrual-plans/${personAccrualPlanId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteAccrualPlan = (id, personAccrualPlanId, params = {}) => this.request({
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
        this.getAttachment8 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/people/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Removes an attachment for a person.
         *
         * @tags People
         * @name DeleteAttachment7
         * @summary Deletes person attachment
         * @request DELETE:/rest/people/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment7 = (id, attachmentId, params = {}) => this.request({
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
        this.getBenefitsValue = (id, benefitsValueId, params = {}) => this.request({
            path: `/rest/people/${id}/benefits-values/${benefitsValueId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBenefitsValueModel);
        /**
         * @description Updates a person's SCA benefit package.
         *
         * @tags People
         * @name UpdateBenefitsValue
         * @summary Updates a person's SCA benefit package
         * @request PUT:/rest/people/{id}/benefits-values/{benefitsValueId}
         * @secure */
        this.updateBenefitsValue = (id, benefitsValueId, data, params = {}) => this.request({
            path: `/rest/people/${id}/benefits-values/${benefitsValueId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteBenefitsValue = (id, benefitsValueId, params = {}) => this.request({
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
        this.updateSkill = (id, skillId, data, params = {}) => this.request({
            path: `/rest/people/${id}/skills/${skillId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteSkill = (id, skillId, params = {}) => this.request({
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
        this.getAlternates1 = (id, query, params = {}) => this.request({
            path: `/rest/people/${id}/alternates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AlternatePagedResponse);
        /**
         * @description Update alternate approvers for a person given its key
         *
         * @tags People
         * @name UpdateAlternates1
         * @summary Update alternate approvers
         * @request PUT:/rest/people/{id}/alternates
         * @secure */
        this.updateAlternates1 = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/alternates`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getCurrentClassification = (id, date, params = {}) => this.request({
            path: `/rest/people/${id}/classification/${date}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.GetCurrentClassificationEnum);
        /**
         * @description Retrieves a list of all approval groups the person is an approver for.
         *
         * @tags People
         * @name GetGroupsUserIsApprover
         * @summary Retrieves person approver approval groups
         * @request GET:/rest/people/{id}/approval-groups/approver
         * @secure */
        this.getGroupsUserIsApprover = (id, params = {}) => this.request({
            path: `/rest/people/${id}/approval-groups/approver`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a list of all approval groups the person is an expense report submitter for.
         *
         * @tags People
         * @name GetGroupsUserIsExpenseReportSubmitter
         * @summary Retrieves person expense report submitter approval groups
         * @request GET:/rest/people/{id}/approval-groups/submitter/expense-report
         * @secure */
        this.getGroupsUserIsExpenseReportSubmitter = (id, params = {}) => this.request({
            path: `/rest/people/${id}/approval-groups/submitter/expense-report`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a list of all approval groups the person is an expense request submitter for.
         *
         * @tags People
         * @name GetGroupsUserIsExpenseRequestSubmitter
         * @summary Retrieves person expense request submitter approval groups
         * @request GET:/rest/people/{id}/approval-groups/submitter/expense-request
         * @secure */
        this.getGroupsUserIsExpenseRequestSubmitter = (id, params = {}) => this.request({
            path: `/rest/people/${id}/approval-groups/submitter/expense-request`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a list of all approval groups the person is a leave submitter for.
         *
         * @tags People
         * @name GetGroupsUserIsLeaveSubmitter
         * @summary Retrieves person leave submitter approval groups
         * @request GET:/rest/people/{id}/approval-groups/submitter/leave
         * @secure */
        this.getGroupsUserIsLeaveSubmitter = (id, params = {}) => this.request({
            path: `/rest/people/${id}/approval-groups/submitter/leave`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a list of all approval groups the person is a time submitter for.
         *
         * @tags People
         * @name GetGroupsUserIsTimeSubmitter
         * @summary Retrieves person time submitter approval groups
         * @request GET:/rest/people/{id}/approval-groups/submitter/time
         * @secure */
        this.getGroupsUserIsTimeSubmitter = (id, params = {}) => this.request({
            path: `/rest/people/${id}/approval-groups/submitter/time`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a paged list of assignments that match the given search criteria
         *
         * @tags People
         * @name GetMultiPersonProjectAssignments
         * @summary Retrieves project assignments for multiple people.
         * @request POST:/rest/people/assignments/search
         * @secure */
        this.getMultiPersonProjectAssignments = (data, query, params = {}) => this.request({
            path: `/rest/people/assignments/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectAssignmentPagedResponse);
        /**
         * @description Retrieves a person's payroll information details.
         *
         * @tags People
         * @name GetPersonPayroll
         * @summary Retrieves person payroll
         * @request GET:/rest/people/{id}/payroll
         * @secure */
        this.getPersonPayroll = (id, params = {}) => this.request({
            path: `/rest/people/${id}/payroll`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonPayrollModel);
        /**
         * @description Updates a person's payroll information details.
         *
         * @tags People
         * @name UpdatePersonPayroll
         * @summary Updates person payroll
         * @request PUT:/rest/people/{id}/payroll
         * @secure */
        this.updatePersonPayroll = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/payroll`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getProjectAssignments = (id, data, query, params = {}) => this.request({
            path: `/rest/people/${id}/assignments/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectAssignmentPagedResponse);
        /**
         * @description Retrieves a rate by id for a person.
         *
         * @tags People
         * @name GetRateByKey
         * @summary Retrieves a person rate
         * @request GET:/rest/people/{id}/rates/{rateId}
         * @secure */
        this.getRateByKey = (id, rateId, params = {}) => this.request({
            path: `/rest/people/${id}/rates/${rateId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonRateModel);
        /**
         * @description Updates a rate on a person.
         *
         * @tags People
         * @name UpdateRate1
         * @summary Updates person rate
         * @request PUT:/rest/people/{id}/rates/{rateId}
         * @secure */
        this.updateRate1 = (id, rateId, data, query, params = {}) => this.request({
            path: `/rest/people/${id}/rates/${rateId}`,
            method: "PUT",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getUserTimeActuals = (id, data, query, params = {}) => this.request({
            path: `/rest/people/${id}/actuals/time/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonTimeDataPagedResponse);
        /**
         * @description Retrieves the timesheet user's Leave Balance
         *
         * @tags People
         * @name LeaveBalance1
         * @summary Retrieves the timesheet user's Leave Balance
         * @request POST:/rest/people/{id}/leave
         * @secure */
        this.leaveBalance1 = (id, data, params = {}) => this.request({
            path: `/rest/people/${id}/leave`,
            method: "POST",
            body: data,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LeaveBalancePagedResponseModel);
        /**
         * @description Retrieves a paged list of people filtered by optional search criteria.
         *
         * @tags People
         * @name Search12
         * @summary Retrieves people
         * @request POST:/rest/people/search
         * @secure */
        this.search12 = (data, query, params = {}) => this.request({
            path: `/rest/people/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PersonPagedResponse);
        /**
         * @description Retrieves a paged list of people belonging to an organization in which the caller has org access, based on the provided org access criteria. Results are additionally filtered by optional 'name' search criteria.
         *
         * @tags People
         * @name SearchByOrgAccess
         * @summary Retrieves org access people
         * @request POST:/rest/people/search/org-access
         * @secure */
        this.searchByOrgAccess = (data, query, params = {}) => this.request({
            path: `/rest/people/search/org-access`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSummaryPagedResponse);
        /**
         * @description Retrieves a paged list of people summaries filtered by optional search criteria.
         *
         * @tags People
         * @name SearchSummaries
         * @summary Retrieves a list of people summaries
         * @request GET:/rest/people/list
         * @secure */
        this.searchSummaries = (query, params = {}) => this.request({
            path: `/rest/people/list`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSummaryPagedResponse);
    }
}
exports.People = People;
