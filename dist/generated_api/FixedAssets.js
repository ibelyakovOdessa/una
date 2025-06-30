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
exports.FixedAssets = void 0;
const http_client_1 = require("./http-client");
class FixedAssets extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of attachments for a given fixed asset.
         *
         * @tags Fixed Assets
         * @name GetAttachments3
         * @summary Retrieves fixed asset attachments
         * @request GET:/rest/fixed-assets/{id}/attachments
         * @secure */
        this.getAttachments3 = (id, query, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Uploads an attachment to an fixed asset.
         *
         * @tags Fixed Assets
         * @name AddAttachment3
         * @summary Uploads attachment to a fixed asset
         * @request POST:/rest/fixed-assets/{id}/attachments
         * @secure */
        this.addAttachment3 = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of fixed asset classes filtered by optional query parameters.
         *
         * @tags Fixed Assets
         * @name GetClasses
         * @summary Retrieves fixed asset classes.
         * @request GET:/rest/fixed-assets/classes
         * @secure */
        this.getClasses = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/classes`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetClassPagedResponse);
        /**
         * @description Creates a new fixed asset class.
         *
         * @tags Fixed Assets
         * @name CreateClass
         * @summary Creates a fixed asset class.
         * @request POST:/rest/fixed-assets/classes
         * @secure */
        this.createClass = (data, params = {}) => this.request({
            path: `/rest/fixed-assets/classes`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of fixed assets filtered by optional query parameters.
         *
         * @tags Fixed Assets
         * @name GetFixedAssets
         * @summary Retrieves fixed assets.
         * @request GET:/rest/fixed-assets
         * @secure */
        this.getFixedAssets = (query, params = {}) => this.request({
            path: `/rest/fixed-assets`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetPagedResponse);
        /**
         * @description Creates a new fixed asset.
         *
         * @tags Fixed Assets
         * @name CreateFixedAsset
         * @summary Creates a fixed asset.
         * @request POST:/rest/fixed-assets
         * @secure */
        this.createFixedAsset = (data, query, params = {}) => this.request({
            path: `/rest/fixed-assets`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of filter sets saved by the authenticated user.
         *
         * @tags Fixed Assets
         * @name GetFixedAssetListCriteria
         * @summary Retrieves saved fixed asset filters.
         * @request GET:/rest/fixed-assets/search/criteria
         * @secure */
        this.getFixedAssetListCriteria = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/search/criteria`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetFilterPagedResponse);
        /**
         * @description Saves a filter set for later use.
         *
         * @tags Fixed Assets
         * @name CreateFixedAssetListCriteria
         * @summary Save a filter set.
         * @request POST:/rest/fixed-assets/search/criteria
         * @secure */
        this.createFixedAssetListCriteria = (data, query, params = {}) => this.request({
            path: `/rest/fixed-assets/search/criteria`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of fixed asset locations for the given fixedAssetId.
         *
         * @tags Fixed Assets
         * @name GetLocations
         * @summary Retrieves fixed asset locations
         * @request GET:/rest/fixed-assets/{fixedAssetId}/locations
         * @secure */
        this.getLocations = (fixedAssetId, query, params = {}) => this.request({
            path: `/rest/fixed-assets/${fixedAssetId}/locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetLocationPagedResponse);
        /**
         * @description Creates a new fixed asset location associated with fixedAssetId.
         *
         * @tags Fixed Assets
         * @name CreateLocation
         * @summary Creates new fixed asset location
         * @request POST:/rest/fixed-assets/{fixedAssetId}/locations
         * @secure */
        this.createLocation = (fixedAssetId, data, params = {}) => this.request({
            path: `/rest/fixed-assets/${fixedAssetId}/locations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of fixed asset statuses filtered by optional query parameters.
         *
         * @tags Fixed Assets
         * @name GetStatuses
         * @summary Retrieves fixed asset statuses.
         * @request GET:/rest/fixed-assets/statuses
         * @secure */
        this.getStatuses = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/statuses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetStatusPagedResponse);
        /**
         * @description Creates a new fixed asset status.
         *
         * @tags Fixed Assets
         * @name CreateStatus
         * @summary Creates a fixed asset status.
         * @request POST:/rest/fixed-assets/statuses
         * @secure */
        this.createStatus = (data, params = {}) => this.request({
            path: `/rest/fixed-assets/statuses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves an attachment for a given fixed asset.
         *
         * @tags Fixed Assets
         * @name GetAttachment3
         * @summary Retrieves a fixed asset attachment
         * @request GET:/rest/fixed-assets/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment3 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Deletes a fixed asset attachment and its associations.
         *
         * @tags Fixed Assets
         * @name DeleteAttachment3
         * @summary Deletes fixed asset attachment
         * @request DELETE:/rest/fixed-assets/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment3 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a fixed asset class.
         *
         * @tags Fixed Assets
         * @name GetClassByKey
         * @summary Retrieves a fixed asset class.
         * @request GET:/rest/fixed-assets/classes/{id}
         * @secure */
        this.getClassByKey = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/classes/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetClassModel);
        /**
         * @description Updates a fixed asset class.
         *
         * @tags Fixed Assets
         * @name UpdateClass
         * @summary update a fixed asset class.
         * @request PUT:/rest/fixed-assets/classes/{id}
         * @secure */
        this.updateClass = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/classes/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a fixed asset class.
         *
         * @tags Fixed Assets
         * @name DeleteClass
         * @summary Delete a fixed asset class.
         * @request DELETE:/rest/fixed-assets/classes/{id}
         * @secure */
        this.deleteClass = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/classes/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a fixed asset.
         *
         * @tags Fixed Assets
         * @name GetFixedAssetByKey
         * @summary Retrieves a fixed asset.
         * @request GET:/rest/fixed-assets/{id}
         * @secure */
        this.getFixedAssetByKey = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetModel);
        /**
         * @description Updates a fixed asset.
         *
         * @tags Fixed Assets
         * @name UpdateFixedAsset
         * @summary Update a fixed asset.
         * @request PUT:/rest/fixed-assets/{id}
         * @secure */
        this.updateFixedAsset = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a fixed asset.
         *
         * @tags Fixed Assets
         * @name DeleteFixedAsset
         * @summary Delete a fixed asset.
         * @request DELETE:/rest/fixed-assets/{id}
         * @secure */
        this.deleteFixedAsset = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Updates the read status of an alert for the authenticated user.
         *
         * @tags Fixed Assets
         * @name UpdateFixedAssetAlert
         * @summary Update the read status of an alert
         * @request PUT:/rest/fixed-assets/alerts/{id}
         * @secure */
        this.updateFixedAssetAlert = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/alerts/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a fixed asset alert for the authenticated user.
         *
         * @tags Fixed Assets
         * @name DeleteFixedAssetAlert
         * @summary Delete an alert
         * @request DELETE:/rest/fixed-assets/alerts/{id}
         * @secure */
        this.deleteFixedAssetAlert = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/alerts/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a saved filter set by id.
         *
         * @tags Fixed Assets
         * @name GetFixedAssetListCriteriaByKey
         * @summary Retrieves a saved fixed asset filter.
         * @request GET:/rest/fixed-assets/search/criteria/{id}
         * @secure */
        this.getFixedAssetListCriteriaByKey = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/search/criteria/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetSearchModel);
        /**
         * @description Updates a saved filter set by id.
         *
         * @tags Fixed Assets
         * @name UpdateFixedAssetListCriteriaByKey
         * @summary Updates a saved fixed asset filter.
         * @request PUT:/rest/fixed-assets/search/criteria/{id}
         * @secure */
        this.updateFixedAssetListCriteriaByKey = (id, data, query, params = {}) => this.request({
            path: `/rest/fixed-assets/search/criteria/${id}`,
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
         * @tags Fixed Assets
         * @name DeleteFixedAssetListCriteria
         * @summary Deletes a saved fixed asset filter.
         * @request DELETE:/rest/fixed-assets/search/criteria/{id}
         * @secure */
        this.deleteFixedAssetListCriteria = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/search/criteria/${id}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Updates an existing fixed asset location.
         *
         * @tags Fixed Assets
         * @name UpdateLocation
         * @summary Updates fixed asset location
         * @request PUT:/rest/fixed-assets/{fixedAssetId}/locations/{id}
         * @secure */
        this.updateLocation = (fixedAssetId, id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/${fixedAssetId}/locations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a fixed asset location.
         *
         * @tags Fixed Assets
         * @name DeleteLocation
         * @summary Deletes fixed asset location
         * @request DELETE:/rest/fixed-assets/{fixedAssetId}/locations/{id}
         * @secure */
        this.deleteLocation = (fixedAssetId, id, params = {}) => this.request({
            path: `/rest/fixed-assets/${fixedAssetId}/locations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a fixed asset status.
         *
         * @tags Fixed Assets
         * @name GetStatusByKey
         * @summary Retrieves a fixed asset status.
         * @request GET:/rest/fixed-assets/statuses/{id}
         * @secure */
        this.getStatusByKey = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/statuses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetStatusModel);
        /**
         * @description Updates a fixed asset status.
         *
         * @tags Fixed Assets
         * @name UpdateStatus
         * @summary update a fixed asset status.
         * @request PUT:/rest/fixed-assets/statuses/{id}
         * @secure */
        this.updateStatus = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/statuses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes a fixed asset status.
         *
         * @tags Fixed Assets
         * @name DeleteStatus
         * @summary Delete a fixed asset status.
         * @request DELETE:/rest/fixed-assets/statuses/{id}
         * @secure */
        this.deleteStatus = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/statuses/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a list of fixed asset class account categories.
         *
         * @tags Fixed Assets
         * @name GetClassAccountCategories
         * @summary Retrieves available account categories.
         * @request GET:/rest/fixed-assets/classes/account-categories
         * @secure */
        this.getClassAccountCategories = (params = {}) => this.request({
            path: `/rest/fixed-assets/classes/account-categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountCategoryModel);
        /**
         * @description Retrieves details of a fixed asset class account setup.
         *
         * @tags Fixed Assets
         * @name GetClassAccounts
         * @summary Retrieves a fixed asset class accounts.
         * @request GET:/rest/fixed-assets/classes/{id}/accounts
         * @secure */
        this.getClassAccounts = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/classes/${id}/accounts`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CategoryAccountModel);
        /**
         * @description Update a fixed asset class account setup.
         *
         * @tags Fixed Assets
         * @name UpdateClassAccount
         * @summary Update a fixed asset class accounts.
         * @request PUT:/rest/fixed-assets/classes/{id}/accounts
         * @secure */
        this.updateClassAccount = (id, data, params = {}) => this.request({
            path: `/rest/fixed-assets/classes/${id}/accounts`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of fixed asset alerts for the authenticated user.
         *
         * @tags Fixed Assets
         * @name GetFixedAssetAlerts
         * @summary Retrieves fixed asset alerts
         * @request GET:/rest/fixed-assets/alerts
         * @secure */
        this.getFixedAssetAlerts = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/alerts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetAlertPagedResponse);
        /**
         * @description Retrieves a list of import field definitions.
         *
         * @tags Fixed Assets
         * @name GetImportDefinition1
         * @summary Retrieves the import field definition.
         * @request GET:/rest/fixed-assets/import/definition
         * @secure */
        this.getImportDefinition1 = (params = {}) => this.request({
            path: `/rest/fixed-assets/import/definition`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ImportDefinitionModel);
        /**
         * @description Retrieves a list of fixed asset journal entries.
         *
         * @tags Fixed Assets
         * @name GetJournalEntriesByFixedAsset
         * @summary Retrieves fixed asset journal entries.
         * @request GET:/rest/fixed-assets/{id}/journal-entries
         * @secure */
        this.getJournalEntriesByFixedAsset = (id, query, params = {}) => this.request({
            path: `/rest/fixed-assets/${id}/journal-entries`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetJournalEntryPagedResponse);
        /**
         * @description Retrieves a paged list of legal entities available to the tokened user for fixed assets, filtered by an optional active flag
         *
         * @tags Fixed Assets
         * @name GetLegalEntities
         * @summary Retrieves legal entities available for fixed assets.
         * @request GET:/rest/fixed-assets/legal-entities
         * @secure */
        this.getLegalEntities = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/legal-entities`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Retrieves fixed asset balances for a legal entity for 12 rolling fiscal periods (i.e. period containing current date and up to 11 prior fiscal periods).
         *
         * @tags Fixed Assets
         * @name GetLegalEntityBalances
         * @summary Retrieves fixed asset balances for a legal entity.
         * @request GET:/rest/fixed-assets/legal-entities/{id}/balances
         * @secure */
        this.getLegalEntityBalances = (id, params = {}) => this.request({
            path: `/rest/fixed-assets/legal-entities/${id}/balances`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetBalancePeriodModel);
        /**
         * @description Retrieves a paged list of fiscal periods tied to the legal entity.
         *
         * @tags Fixed Assets
         * @name GetLegalEntityFiscalPeriods
         * @summary Retrieves legal entity fiscal periods.
         * @request GET:/rest/fixed-assets/legal-entities/{id}/fiscal-periods
         * @secure */
        this.getLegalEntityFiscalPeriods = (id, query, params = {}) => this.request({
            path: `/rest/fixed-assets/legal-entities/${id}/fiscal-periods`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FiscalPeriodPagedResponse);
        /**
         * @description Retrieves a paged list of organizations tied to the legal entity.
         *
         * @tags Fixed Assets
         * @name GetLegalEntityOrgs
         * @summary Retrieves legal entity organizations.
         * @request GET:/rest/fixed-assets/legal-entities/{id}/organizations
         * @secure */
        this.getLegalEntityOrgs = (id, query, params = {}) => this.request({
            path: `/rest/fixed-assets/legal-entities/${id}/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Retrieves a paged list of people who have posted for fixed assets.
         *
         * @tags Fixed Assets
         * @name GetPosters
         * @summary Retrieves posters
         * @request GET:/rest/fixed-assets/posts/posters
         * @secure */
        this.getPosters = (query, params = {}) => this.request({
            path: `/rest/fixed-assets/posts/posters`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonSummaryPagedResponse);
        /**
         * @description Retrieves a paged list of fixed asset depreciation schedules for the given fixedAssetId.
         *
         * @tags Fixed Assets
         * @name GetSchedules
         * @summary Retrieves fixed asset depreciation schedules
         * @request GET:/rest/fixed-assets/{fixedAssetId}/schedules
         * @secure */
        this.getSchedules = (fixedAssetId, query, params = {}) => this.request({
            path: `/rest/fixed-assets/${fixedAssetId}/schedules`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetSchedulePagedResponse);
        /**
         * @description Imports fixed assets file, using an HTTP multipart form post, in order to create new or update and delete existing fixed assets. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add, update or delete operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/fixed-assets/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"fa_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *fixed_asset_number, legal_entity, owner, serial_number, name, description, class, status, acquisition_date, acquisition_value, disposal_date, disposal_value, disposal_type, placed_in_service_date, useful_life, salvage_value, depreciation_start_date, prior_depreciation_balance, depreciation_method, depreciation_averaging_method, location, location_begin_date, asset_org, expense_org, user01, user02, user03, user04, user05, user06, user07, user08, user09, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, delete ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * Fixed Asset rows are uniquely defined by 'fixed_asset_number'. If no 'fixed_asset_number' field is defined, or the row is empty, the import assumes this is a new fixed asset and will assign a 'fixed_asset_number' to the newly created fixed asset. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * To clear (set to null) the value of a field during update, include '!BLANK!' as the field value. This is only supported for optional fields. * The minimum set of fields that are required for creating a new fixed asset is: **legal_entity, name, class, status, acquisition_value, placed_in_service_date, useful_life**. NOTE: **placed_in_service_date** is optional if **acquisition_date** is defined. * A 'delete' column is supported to allow rows to be included that instruct the import to remove the specified entity as uniquely referenced by the 'fixed_asset_number' field value. If a 'delete' column is defined, it must be the last column in the row. To delete a specific fixed asset, include a row containing a 'fixed_asset_number' field value and '!DELETE!' as the 'delete' field column value. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request. * For additional descriptions of supported fields, see the FixedAssetCreateModel model.
         *
         * @tags Fixed Assets
         * @name ImportFixedAssetFile
         * @summary Imports fixed assets file
         * @request POST:/rest/fixed-assets/import
         * @secure */
        this.importFixedAssetFile = (data, query, params = {}) => this.request({
            path: `/rest/fixed-assets/import`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.FormData,
            format: "json",
            ...params,
        }, data_contracts_1.ImportProgressModel | data_contracts_1.ImportErrorModel);
        /**
         * @description Posts fixed asset depreciation and disposal.
         *
         * @tags Fixed Assets
         * @name Post2
         * @summary Posts fixed assets.
         * @request POST:/rest/fixed-assets/posts
         * @secure */
        this.post2 = (data, params = {}) => this.request({
            path: `/rest/fixed-assets/posts`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetPostResponseModel);
        /**
         * @description Retrieves a paged list of fixed assets filtered by search criteria.
         *
         * @tags Fixed Assets
         * @name SearchFixedAssets
         * @summary Retrieves fixed assets.
         * @request POST:/rest/fixed-assets/search
         * @secure */
        this.searchFixedAssets = (data, query, params = {}) => this.request({
            path: `/rest/fixed-assets/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetPagedResponse);
        /**
         * @description Retrieves a paged list of fixed asset posting documents.
         *
         * @tags Fixed Assets
         * @name SearchPostDocuments
         * @summary Retrieves fixed asset post documents.
         * @request POST:/rest/fixed-assets/posts/search
         * @secure */
        this.searchPostDocuments = (data, query, params = {}) => this.request({
            path: `/rest/fixed-assets/posts/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.FixedAssetPostDocumentPagedResponse);
        /**
         * @description Unposts a fixed asset depreciation and disposal post.
         *
         * @tags Fixed Assets
         * @name Unpost
         * @summary Unposts a fixed asset post.
         * @request DELETE:/rest/fixed-assets/posts/{id}
         * @secure */
        this.unpost = (id, query, params = {}) => this.request({
            path: `/rest/fixed-assets/posts/${id}`,
            method: "DELETE",
            query: query,
            secure: true,
            ...params,
        });
    }
}
exports.FixedAssets = FixedAssets;
