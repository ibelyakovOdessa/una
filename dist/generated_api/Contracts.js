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
exports.Contracts = void 0;
const http_client_1 = require("./http-client");
class Contracts extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of contract clause agencies, optionally filtered using query parameters.
         *
         * @tags Contracts
         * @name Get5
         * @summary Retrieves contract clause agencies
         * @request GET:/rest/contracts/contract-clauses/agencies
         * @secure */
        this.get5 = (query, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/agencies`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ClauseAgencyPagedResponse);
        /**
         * @description Creates a new contract clause agency.
         *
         * @tags Contracts
         * @name Create2
         * @summary Create contract clause agency.
         * @request POST:/rest/contracts/contract-clauses/agencies
         * @secure */
        this.create2 = (data, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/agencies`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a contract clause agency
         *
         * @tags Contracts
         * @name GetByKey3
         * @summary Retrieves a contract clause agency.
         * @request GET:/rest/contracts/contract-clauses/agencies/{id}
         * @secure */
        this.getByKey3 = (id, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/agencies/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ClauseAgencyModel);
        /**
         * @description Updates an existing contract clause agency.
         *
         * @tags Contracts
         * @name Update2
         * @summary Updates a contract clause agency.
         * @request PUT:/rest/contracts/contract-clauses/agencies/{id}
         * @secure */
        this.update2 = (id, data, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/agencies/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete2 = (id, params = {}) => this.request({
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
        this.get6 = (query, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractClausePagedResponse);
        /**
         * @description Creates a new contract clause.
         *
         * @tags Contracts
         * @name Create3
         * @summary Create contract clause
         * @request POST:/rest/contracts/contract-clauses
         * @secure */
        this.create3 = (data, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a contract clause
         *
         * @tags Contracts
         * @name GetByKey4
         * @summary Retrieves a contract clause.
         * @request GET:/rest/contracts/contract-clauses/{id}
         * @secure */
        this.getByKey4 = (id, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractClauseModel);
        /**
         * @description Updates an existing contract clause.
         *
         * @tags Contracts
         * @name Update3
         * @summary Updates a contract clause
         * @request PUT:/rest/contracts/contract-clauses/{id}
         * @secure */
        this.update3 = (id, data, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete3 = (id, params = {}) => this.request({
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
        this.getImportDefinition = (params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/import/definition`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ImportDefinitionModel);
        /**
         * @description Imports contract clauses file, using an HTTP multipart form post, in order to create new or update and delete existing contract clauses. * Form post must include a **file** form key/value specifying the file being uploaded* Feedback will be provided through a server push technology Server Send Events (SSE) - https://en.wikipedia.org/wiki/Server-sent_events * The import request consists of two stages: * File upload stage * Imported data processing stage * Client can request that in-progress feedback be sent by including a **enableProgressFeedback** query string parameter with the request. * If **enableProgressFeedback** = false, then all feedback information will be returned in a single SSE feedback event at the completion of the import. * During the file upload process, there will be no progress feedback. Clients can track the progress of the file upload on their end. * If the file upload fails, an HTTP 500 response is returned. * The first progress feedback will begin upon completion of the file upload. * Set query param '**dryrun**=true' in order to test the validity of an import file without performing any of the add, update or delete operations. Example request via curl: ``` curl --request POST 'http://localhost/unanet/rest/contracts/contract-clauses/import?enableProgressFeedback=true' --header 'Accept: text/event-stream' --header 'Authorization: Bearer xxx' --form 'file=@"cc_import.csv"' ``` ### Import File Contents The following fields are supported: ``` *clause_number, agency_code, title, description, status, delete ``` * The first non-comment row of an import file can include an optional header definition row that starts with an asterix '*' * If no header row is included in an import file, then the expected rows default to the above header definition. Comment lines are allowed provided they begin with '#'. * Contract Clause rows are uniquely defined by 'clause_number'. * If an import file provides a header definition row, the fields supplied by the import file can be in any order desired provided that the field order of the rows in the file all match the order of the fields in the header definition row. * Leading and trailing whitespace is allowed on fields and trimmed during import processing. * The minimum set of fields that are required for creating a new contract clause is: **clause_number, agency_code, title, description, status, description, class, status**. * A 'delete' column is supported to allow rows to be included that instruct the import to remove the specified entity as uniquely referenced by the 'clause_number' field value. If a 'delete' column is defined, it must be the last column in the row. To delete a specific contract clause, include a row containing a 'clause_number' field value and '!DELETE!' as the 'delete' field column value. * To see which fields can be blank or are required for additions and update, see the results of the **GET /import/definition** request. * For additional descriptions of supported fields, see the ContractClauseCreateModel model.
         *
         * @tags Contracts
         * @name ImportContractClauseFile
         * @summary Imports contract clauses file
         * @request POST:/rest/contracts/contract-clauses/import
         * @secure */
        this.importContractClauseFile = (data, query, params = {}) => this.request({
            path: `/rest/contracts/contract-clauses/import`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.FormData,
            format: "json",
            ...params,
        }, data_contracts_1.ImportProgressModel | data_contracts_1.ImportErrorModel);
        /**
         * @description Returns an ordered list of funding levels.
         *
         * @tags Contracts
         * @name Get7
         * @summary Get contract funding levels
         * @request GET:/rest/contracts/funding-levels
         * @secure */
        this.get7 = (params = {}) => this.request({
            path: `/rest/contracts/funding-levels`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractFundingLevelModel);
        /**
         * @description Updates a contract funding level hierarchy based on the ordered list passed in.
         *
         * @tags Contracts
         * @name Update4
         * @summary Updates a contract funding level hierarchy
         * @request PUT:/rest/contracts/funding-levels
         * @secure */
        this.update4 = (data, params = {}) => this.request({
            path: `/rest/contracts/funding-levels`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.get8 = (query, params = {}) => this.request({
            path: `/rest/contracts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractPagedResponse);
        /**
         * @description Creates a new contract.
         *
         * @tags Contracts
         * @name Create4
         * @summary Create contract
         * @request POST:/rest/contracts
         * @secure */
        this.create4 = (data, params = {}) => this.request({
            path: `/rest/contracts`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves all contract clauses included in a contract
         *
         * @tags Contracts
         * @name GetContractClauses
         * @summary Retrieve all clauses included in a contract
         * @request GET:/rest/contracts/{id}/contract-clauses
         * @secure */
        this.getContractClauses = (id, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/contract-clauses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IncludedContractClausePagedResponse);
        /**
         * @description Creates an included contract clause for a contract
         *
         * @tags Contracts
         * @name CreateContractClause
         * @summary Creates an included contract clause
         * @request POST:/rest/contracts/{id}/contract-clauses
         * @secure */
        this.createContractClause = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/contract-clauses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getContractMods = (id, params = {}) => this.request({
            path: `/rest/contracts/${id}/mods`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractModModel);
        /**
         * @description Creates a new contract mod.
         *
         * @tags Contracts
         * @name CreateContractMod
         * @summary Create a contract mod
         * @request POST:/rest/contracts/{id}/mods
         * @secure */
        this.createContractMod = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/mods`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.getContractProjectAssociations = (id, params = {}) => this.request({
            path: `/rest/contracts/${id}/projects`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ProjectContractModel);
        /**
         * @description Creates an association between a contract and a project.
         *
         * @tags Contracts
         * @name CreateContractProjectAssociation
         * @summary Project association
         * @request POST:/rest/contracts/{id}/projects
         * @secure */
        this.createContractProjectAssociation = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/projects`,
            method: "POST",
            body: data,
            secure: true,
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
        this.getContractStatuses = (query, params = {}) => this.request({
            path: `/rest/contracts/statuses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractStatusPagedResponse);
        /**
         * @description Creates a new contract status.
         *
         * @tags Contracts
         * @name CreateContractStatus
         * @summary Create contract status
         * @request POST:/rest/contracts/statuses
         * @secure */
        this.createContractStatus = (data, params = {}) => this.request({
            path: `/rest/contracts/statuses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of contract types filtered by optional query parameters
         *
         * @tags Contracts
         * @name GetContractTypes
         * @summary Retrieves contract types
         * @request GET:/rest/contracts/types
         * @secure */
        this.getContractTypes = (query, params = {}) => this.request({
            path: `/rest/contracts/types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractTypePagedResponse);
        /**
         * @description Creates a new contract type.
         *
         * @tags Contracts
         * @name CreateContractType
         * @summary Create contract type
         * @request POST:/rest/contracts/types
         * @secure */
        this.createContractType = (data, params = {}) => this.request({
            path: `/rest/contracts/types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves all associations between a contract and wage determination
         *
         * @tags Contracts
         * @name GetContractWageDeterminations
         * @summary Retrieve all wage determinations associated to a contract
         * @request GET:/rest/contracts/{id}/wage-determinations
         * @secure */
        this.getContractWageDeterminations = (id, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/wage-determinations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationContractPagedResponse);
        /**
         * @description Creates an association between a wage determination and a contract
         *
         * @tags Contracts
         * @name CreateContractWageDeterminationAssociation
         * @summary Create an association between a wage determination and a contract
         * @request POST:/rest/contracts/{id}/wage-determinations
         * @secure */
        this.createContractWageDeterminationAssociation = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/wage-determinations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves list of contract funding allocations.
         *
         * @tags Contracts
         * @name GetFundingAllocations
         * @summary Retrieves contract funding allocations.
         * @request GET:/rest/contracts/{id}/funding-allocations
         * @secure */
        this.getFundingAllocations = (id, params = {}) => this.request({
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
        this.createFundingAllocation = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/funding-allocations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of a contract
         *
         * @tags Contracts
         * @name GetByKey5
         * @summary Retrieves a contract.
         * @request GET:/rest/contracts/{id}
         * @secure */
        this.getByKey5 = (id, params = {}) => this.request({
            path: `/rest/contracts/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractModel);
        /**
         * @description Updates an existing contract given its key.
         *
         * @tags Contracts
         * @name Update5
         * @summary Updates a contract
         * @request PUT:/rest/contracts/{id}
         * @secure */
        this.update5 = (id, data, params = {}) => this.request({
            path: `/rest/contracts/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.delete4 = (id, params = {}) => this.request({
            path: `/rest/contracts/${id}`,
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
        this.getContractClause = (id, clauseId, params = {}) => this.request({
            path: `/rest/contracts/${id}/contract-clauses/${clauseId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.IncludedContractClauseModel);
        /**
         * @description Updates an included contract clause for a contract
         *
         * @tags Contracts
         * @name UpdateContractClause
         * @summary Update an included contract clause
         * @request PUT:/rest/contracts/{id}/contract-clauses/{clauseId}
         * @secure */
        this.updateContractClause = (id, clauseId, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/contract-clauses/${clauseId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteContractClause = (id, clauseId, params = {}) => this.request({
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
        this.getContractModByKey = (id, modNumber, params = {}) => this.request({
            path: `/rest/contracts/${id}/mods/${modNumber}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractModModel);
        /**
         * @description Updates an existing contract mod given its key.
         *
         * @tags Contracts
         * @name UpdateContractMod
         * @summary Updates a contract mod
         * @request PUT:/rest/contracts/{id}/mods/{modNumber}
         * @secure */
        this.updateContractMod = (id, modNumber, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/mods/${modNumber}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteContractMod = (id, modNumber, params = {}) => this.request({
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
        this.deleteContractProjectAssociation = (id, projectId, params = {}) => this.request({
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
        this.getContractStatusByKey = (id, params = {}) => this.request({
            path: `/rest/contracts/statuses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractStatusModel);
        /**
         * @description Updates an existing contract status given its key.
         *
         * @tags Contracts
         * @name UpdateContractStatus
         * @summary Updates a contract status
         * @request PUT:/rest/contracts/statuses/{id}
         * @secure */
        this.updateContractStatus = (id, data, params = {}) => this.request({
            path: `/rest/contracts/statuses/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteContractStatus = (id, params = {}) => this.request({
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
        this.getContractTypeByKey = (id, params = {}) => this.request({
            path: `/rest/contracts/types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractTypeModel);
        /**
         * @description Updates an existing contract type given its key.
         *
         * @tags Contracts
         * @name UpdateContractType
         * @summary Updates a contract type
         * @request PUT:/rest/contracts/types/{id}
         * @secure */
        this.updateContractType = (id, data, params = {}) => this.request({
            path: `/rest/contracts/types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteContractType = (id, params = {}) => this.request({
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
        this.getFundingAllocationByKey = (id, allocationId, params = {}) => this.request({
            path: `/rest/contracts/${id}/funding-allocations/${allocationId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractFundingAllocationModel);
        /**
         * @description Updates an existing contract funding allocation given its key.
         *
         * @tags Contracts
         * @name UpdateFundingAllocation
         * @summary Updates a contract funding allocation
         * @request PUT:/rest/contracts/{id}/funding-allocations/{allocationId}
         * @secure */
        this.updateFundingAllocation = (id, allocationId, data, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/funding-allocations/${allocationId}`,
            method: "PUT",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteFundingAllocation = (id, allocationId, params = {}) => this.request({
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
        this.getContractWageDetermination = (id, wageDeterminationId, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/wage-determinations/${wageDeterminationId}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationContractModel);
        /**
         * @description Updates a wage determination and a contract
         *
         * @tags Contracts
         * @name UpdateContractWageDeterminationAssociation
         * @summary Update a wage determination and contract assocation
         * @request PUT:/rest/contracts/{id}/wage-determinations/{wageDeterminationId}
         * @secure */
        this.updateContractWageDeterminationAssociation = (id, wageDeterminationId, data, params = {}) => this.request({
            path: `/rest/contracts/${id}/wage-determinations/${wageDeterminationId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteWageDeterminationContract = (id, wageDeterminationId, params = {}) => this.request({
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
        this.getAdditionalItemTypes = (query, params = {}) => this.request({
            path: `/rest/contracts/additional-item-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves list of available master contracts in an owning organization's organizational hierarchy.
         *
         * @tags Contracts
         * @name GetAvailableMasterContracts
         * @summary Retrieves available master contracts
         * @request GET:/rest/contracts/owning-organizations/{owningOrgId}/master-contracts
         * @secure */
        this.getAvailableMasterContracts = (owningOrgId, query, params = {}) => this.request({
            path: `/rest/contracts/owning-organizations/${owningOrgId}/master-contracts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModelPagedResponse);
        /**
         * @description Retrieves list of available owning organizations.
         *
         * @tags Contracts
         * @name GetAvailableOwningOrgs
         * @summary Retrieves available owning organizations
         * @request GET:/rest/contracts/owning-organizations
         * @secure */
        this.getAvailableOwningOrgs = (query, params = {}) => this.request({
            path: `/rest/contracts/owning-organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationListPagedResponse);
        /**
         * @description Retrieves a paged list of contract provisions
         *
         * @tags Contracts
         * @name GetContractProvisions
         * @summary Retrieves contract provisions
         * @request GET:/rest/contracts/provisions
         * @secure */
        this.getContractProvisions = (query, params = {}) => this.request({
            path: `/rest/contracts/provisions`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContractProvisionPagedResponse);
        /**
         * @description Retrieves a list of expense types available for contract project associations.
         *
         * @tags Contracts
         * @name GetProjectAssociationExpenseTypes
         * @summary Retrieves project expense types
         * @request GET:/rest/contracts/{id}/projects/available/expense-types
         * @secure */
        this.getProjectAssociationExpenseTypes = (id, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/projects/available/expense-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModel);
        /**
         * @description Retrieves a list of labor categories available for contract project associations.
         *
         * @tags Contracts
         * @name GetProjectAssociationLaborCategories
         * @summary Retrieves project labor categories
         * @request GET:/rest/contracts/{id}/projects/available/labor-categories
         * @secure */
        this.getProjectAssociationLaborCategories = (id, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/projects/available/labor-categories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameModel);
        /**
         * @description Retrieves a list of tasks available for contract project associations.
         *
         * @tags Contracts
         * @name GetProjectAssociationTasks
         * @summary Retrieves project tasks
         * @request GET:/rest/contracts/{id}/projects/available/tasks
         * @secure */
        this.getProjectAssociationTasks = (id, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/projects/available/tasks`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.TaskSummaryModel);
        /**
         * @description Retrieves a paged list of contracts filtered by optional query parameters
         *
         * @tags Contracts
         * @name Search2
         * @summary Retrieves contracts
         * @request POST:/rest/contracts/search
         * @secure */
        this.search2 = (data, query, params = {}) => this.request({
            path: `/rest/contracts/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ContractPagedResponse);
        /**
         * @description Search for wage determination and contract associations
         *
         * @tags Contracts
         * @name SearchContractWageDeterminations
         * @summary Search for wage determinations and contract associations
         * @request POST:/rest/contracts/{id}/wage-determinations/search
         * @secure */
        this.searchContractWageDeterminations = (id, data, query, params = {}) => this.request({
            path: `/rest/contracts/${id}/wage-determinations/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationContractPagedResponse);
        /**
         * @description Retrieves a paged list of users with roles for billing analysts
         *
         * @tags Contracts
         * @name GetBillingAnalysts
         * @summary Retrieves active billing analysts
         * @request GET:/rest/contracts/billing-analysts
         * @secure */
        this.getBillingAnalysts = (query, params = {}) => this.request({
            path: `/rest/contracts/billing-analysts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
        /**
         * @description Retrieves a paged list of users with roles for contract manager
         *
         * @tags Contracts
         * @name GetContractManagers
         * @summary Retrieves active contract managers
         * @request GET:/rest/contracts/contract-managers
         * @secure */
        this.getContractManagers = (query, params = {}) => this.request({
            path: `/rest/contracts/contract-managers`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonBasePagedResponse);
    }
}
exports.Contracts = Contracts;
