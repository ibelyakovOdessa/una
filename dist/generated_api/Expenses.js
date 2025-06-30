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
exports.Expenses = void 0;
const http_client_1 = require("./http-client");
class Expenses extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of attachments for a given expense.
         *
         * @tags Expenses
         * @name GetAttachments2
         * @summary Retrieves expense attachments
         * @request GET:/rest/expenses/{id}/attachments
         * @secure */
        this.getAttachments2 = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseDetailAttachmentListPagedResponse);
        /**
         * @description Uploads an attachment to an expense and optionally associates it with a specific expense detail.
         *
         * @tags Expenses
         * @name AddAttachment2
         * @summary Uploads attachment to expense
         * @request POST:/rest/expenses/{id}/attachments
         * @secure */
        this.addAttachment2 = (id, data, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/attachments`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Associates existing attachments with an expense detail.
         *
         * @tags Expenses
         * @name AssociateAttachmentsToDetail
         * @summary Associate existing attachments with an expense detail
         * @request POST:/rest/expenses/{id}/details/{detailId}/attachments
         * @secure */
        this.associateAttachmentsToDetail = (id, detailId, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/${detailId}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Creates a new expense
         *
         * @tags Expenses
         * @name Create11
         * @summary Creates an expense
         * @request POST:/rest/expenses
         * @secure */
        this.create11 = (data, query, params = {}) => this.request({
            path: `/rest/expenses`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Creates an expense detail for provided expense ID.
         *
         * @tags Expenses
         * @name CreateDetail2
         * @summary Creates an expense detail
         * @request POST:/rest/expenses/{id}/details
         * @secure */
        this.createDetail2 = (id, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/details`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a list of Value-Added Tax locations.
         *
         * @tags Expenses
         * @name GetVatLocations
         * @summary Retrieves VAT locations
         * @request GET:/rest/expenses/vat-locations
         * @secure */
        this.getVatLocations = (query, params = {}) => this.request({
            path: `/rest/expenses/vat-locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VatLocationPagedResponse);
        /**
         * @description Creates a new Value-Added Tax location.
         *
         * @tags Expenses
         * @name CreateVatLocation
         * @summary Create VAT location
         * @request POST:/rest/expenses/vat-locations
         * @secure */
        this.createVatLocation = (data, params = {}) => this.request({
            path: `/rest/expenses/vat-locations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.VatLocationCreateModel);
        /**
         * @description Retrieves details of an expense by its id.
         *
         * @tags Expenses
         * @name GetByKey13
         * @summary Retrieves an expense
         * @request GET:/rest/expenses/{id}
         * @secure */
        this.getByKey13 = (id, params = {}) => this.request({
            path: `/rest/expenses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseModel);
        /**
         * @description Updates an existing expense given its key.
         *
         * @tags Expenses
         * @name Update12
         * @summary Updates an expense
         * @request PUT:/rest/expenses/{id}
         * @secure */
        this.update12 = (id, data, params = {}) => this.request({
            path: `/rest/expenses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an expense given its key.
         *
         * @tags Expenses
         * @name Delete11
         * @summary Deletes an expense
         * @request DELETE:/rest/expenses/{id}
         * @secure */
        this.delete11 = (id, params = {}) => this.request({
            path: `/rest/expenses/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an attachment for a given expense
         *
         * @tags Expenses
         * @name GetAttachment2
         * @summary Retrieves expense attachment
         * @request GET:/rest/expenses/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment2 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/expenses/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Deletes an expense attachment and its associations.
         *
         * @tags Expenses
         * @name DeleteAttachment2
         * @summary Deletes expense attachment
         * @request DELETE:/rest/expenses/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment2 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/expenses/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an expense detail given it's expense ID and expense detail ID
         *
         * @tags Expenses
         * @name FindByDetailKey
         * @summary Retrieves an expense detail
         * @request GET:/rest/expenses/{id}/details/{detailId}
         * @secure */
        this.findByDetailKey = (id, detailId, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/${detailId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseDetailModel);
        /**
         * @description Updates an expense detail given its expense ID and expense detail ID.
         *
         * @tags Expenses
         * @name UpdateDetail2
         * @summary Updates an expense detail
         * @request PUT:/rest/expenses/{id}/details/{detailId}
         * @secure */
        this.updateDetail2 = (id, detailId, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/${detailId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an expense detail given its expense ID and expense detail ID.
         *
         * @tags Expenses
         * @name DeleteDetail2
         * @summary Deletes an expense detail
         * @request DELETE:/rest/expenses/{id}/details/{detailId}
         * @secure */
        this.deleteDetail2 = (id, detailId, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/${detailId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieve a Value-Added Tax location by ID.
         *
         * @tags Expenses
         * @name GetVatLocation
         * @summary Retrieves VAT location
         * @request GET:/rest/expenses/vat-locations/{id}
         * @secure */
        this.getVatLocation = (id, params = {}) => this.request({
            path: `/rest/expenses/vat-locations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VatLocationModel);
        /**
         * @description Update an existing Value-Added Tax location by id.
         *
         * @tags Expenses
         * @name UpdateVatLocation
         * @summary Update VAT location
         * @request PUT:/rest/expenses/vat-locations/{id}
         * @secure */
        this.updateVatLocation = (id, data, params = {}) => this.request({
            path: `/rest/expenses/vat-locations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing Value-Added Tax location by id.
         *
         * @tags Expenses
         * @name DeleteVatLocation
         * @summary Delete VAT location
         * @request DELETE:/rest/expenses/vat-locations/{id}
         * @secure */
        this.deleteVatLocation = (id, params = {}) => this.request({
            path: `/rest/expenses/vat-locations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Extracts an INUSE expense report, skipping approval workflows.
         *
         * @tags Expenses
         * @name Extract
         * @summary Extracts an expense report
         * @request POST:/rest/expenses/{id}/extract
         * @secure */
        this.extract = (id, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/extract`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of expense types available for an expense
         *
         * @tags Expenses
         * @name GetExpenseTypes
         * @summary Retrieves expense types
         * @request GET:/rest/expenses/{id}/expense-types
         * @secure */
        this.getExpenseTypes = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/expense-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseTypePagedResponse);
        /**
         * @description Retrieve Meal Caps for an expense
         *
         * @tags Expenses
         * @name GetMealsCap
         * @summary Retrieve Meals Caps
         * @request GET:/rest/expenses/{id}/meal-caps
         * @secure */
        this.getMealsCap = (id, params = {}) => this.request({
            path: `/rest/expenses/${id}/meal-caps`,
            method: "GET",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of payment methods available for an expense
         *
         * @tags Expenses
         * @name GetPaymentMethods
         * @summary Retrieves expense payment methods
         * @request GET:/rest/expenses/{id}/payment-methods
         * @secure */
        this.getPaymentMethods = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/payment-methods`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PaymentMethodPagedResponse);
        /**
         * @description Retrieves a paged list of project types available for an expense
         *
         * @tags Expenses
         * @name GetProjectTypes
         * @summary Retrieves expense project types
         * @request GET:/rest/expenses/{id}/project-types
         * @secure */
        this.getProjectTypes = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/project-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectTypePagedResponse);
        /**
         * @description Retrieves a paged list of projects available for a specific expense
         *
         * @tags Expenses
         * @name GetProjectsByExpenseReportKey
         * @summary Retrieves expense projects
         * @request GET:/rest/expenses/{id}/projects
         * @secure */
        this.getProjectsByExpenseReportKey = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseProjectPagedResponse);
        /**
         * @description Retrieves a paged list of projects available for all expenses associated with either an optionally specified ownerKey or the authenticated user.
         *
         * @tags Expenses
         * @name GetProjectsByOwnerKey
         * @summary Retrieves expense projects by owner
         * @request GET:/rest/expenses/projects
         * @secure */
        this.getProjectsByOwnerKey = (query, params = {}) => this.request({
            path: `/rest/expenses/projects`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseProjectPagedResponse);
        /**
         * @description Retrieves a paged list of status history for a given expense.
         *
         * @tags Expenses
         * @name GetStatusHistory
         * @summary Retrieves expense status history
         * @request GET:/rest/expenses/{id}/history
         * @secure */
        this.getStatusHistory = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/history`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseStatusHistoryPagedResponse);
        /**
         * @description Delete an attachment association from an expense detail.
         *
         * @tags Expenses
         * @name RemoveAttachmentAssociationFromDetail
         * @summary Delete an attachment association from an expense detail
         * @request DELETE:/rest/expenses/{id}/details/{detailId}/attachments/{attachmentId}
         * @secure */
        this.removeAttachmentAssociationFromDetail = (id, detailId, attachmentId, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/${detailId}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of expenses filtered by optional search criteria.
         *
         * @tags Expenses
         * @name Search6
         * @summary Retrieves expenses.
         * @request POST:/rest/expenses/search
         * @secure */
        this.search6 = (data, query, params = {}) => this.request({
            path: `/rest/expenses/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ExpensePagedResponse);
        /**
         * @description Submits an expense for approval.
         *
         * @tags Expenses
         * @name Submit2
         * @summary Submits an expense
         * @request POST:/rest/expenses/{id}/submit
         * @secure */
        this.submit2 = (id, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/submit`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Updates a collection of expense details for a given expense id.
         *
         * @tags Expenses
         * @name UpdateDetails
         * @summary Updates a collection of expense details
         * @request PUT:/rest/expenses/{id}/details/bulk
         * @secure */
        this.updateDetails = (id, data, params = {}) => this.request({
            path: `/rest/expenses/${id}/details/bulk`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Validates an expense for either a save or submit.
         *
         * @tags Expenses
         * @name Validate2
         * @summary Validates an expense
         * @request GET:/rest/expenses/{id}/validate
         * @secure */
        this.validate2 = (id, query, params = {}) => this.request({
            path: `/rest/expenses/${id}/validate`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExpenseValidationModel);
    }
}
exports.Expenses = Expenses;
