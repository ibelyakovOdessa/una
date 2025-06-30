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
exports.WageDeterminations = void 0;
const http_client_1 = require("./http-client");
class WageDeterminations extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of attachments for a given wage determination.
         *
         * @tags Wage Determinations
         * @name GetAttachments11
         * @summary Retrieves wage determination attachments
         * @request GET:/rest/wage-determinations/{id}/attachments
         * @secure */
        this.getAttachments11 = (id, query, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/attachments`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentPagedResponseModel);
        /**
         * @description Uploads an attachment to an wage determination.
         *
         * @tags Wage Determinations
         * @name AddAttachment14
         * @summary Uploads attachment to wage determination
         * @request POST:/rest/wage-determinations/{id}/attachments
         * @secure */
        this.addAttachment14 = (id, data, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/attachments`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Adds a location to a wage determination to limit which locations are available for charging.
         *
         * @tags Wage Determinations
         * @name AddLocation1
         * @summary Adds a location to a wage determination
         * @request POST:/rest/wage-determinations/{id}/locations/{locationId}
         * @secure */
        this.addLocation1 = (id, locationId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/locations/${locationId}`,
            method: "POST",
            secure: true,
            ...params,
        });
        /**
         * @description Removes an association between a wage determination and a location
         *
         * @tags Wage Determinations
         * @name DeleteLocation2
         * @summary Removes an association between a wage determination and a location
         * @request DELETE:/rest/wage-determinations/{id}/locations/{locationId}
         * @secure */
        this.deleteLocation2 = (id, locationId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/locations/${locationId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of occupations for a given wage determination key
         *
         * @tags Wage Determinations
         * @name GetWageDeterminationOccupations
         * @summary Retrieves wage determination occupations
         * @request GET:/rest/wage-determinations/{id}/occupations
         * @secure */
        this.getWageDeterminationOccupations = (id, query, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/occupations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationOccupationPagedResponse);
        /**
         * @description Adds an occupation to a wage determination to limit which locations are available for charging.
         *
         * @tags Wage Determinations
         * @name AddOccupation
         * @summary Adds an occupation to a wage determination
         * @request POST:/rest/wage-determinations/{id}/occupations
         * @secure */
        this.addOccupation = (id, data, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/occupations`,
            method: "POST",
            body: data,
            secure: true,
            ...params,
        });
        /**
         * @description Creates a new SCA Wage Determination.
         *
         * @tags Wage Determinations
         * @name Create46
         * @summary Creates an SCA Wage Determination
         * @request POST:/rest/wage-determinations
         * @secure */
        this.create46 = (data, params = {}) => this.request({
            path: `/rest/wage-determinations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves details of an SCA wage determination.
         *
         * @tags Wage Determinations
         * @name GetByKey42
         * @summary Retrieves an wage determination.
         * @request GET:/rest/wage-determinations/{id}
         * @secure */
        this.getByKey42 = (id, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationModel);
        /**
         * @description Updates an existing SCA wage determination given its key. The wage determination name and active flag are updateable fields, but code is not.
         *
         * @tags Wage Determinations
         * @name Update45
         * @summary Updates an SCA wage determination
         * @request PUT:/rest/wage-determinations/{id}
         * @secure */
        this.update45 = (id, data, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an existing SCA wage determination given its key.
         *
         * @tags Wage Determinations
         * @name Delete41
         * @summary Delete an SCA wage determination
         * @request DELETE:/rest/wage-determinations/{id}
         * @secure */
        this.delete41 = (id, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an attachment for a given wage determination
         *
         * @tags Wage Determinations
         * @name GetAttachment15
         * @summary Retrieves wage determination attachment
         * @request GET:/rest/wage-determinations/{id}/attachments/{attachmentId}
         * @secure */
        this.getAttachment15 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/attachments/${attachmentId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AttachmentModel);
        /**
         * @description Deletes an wage determination attachment and its associations.
         *
         * @tags Wage Determinations
         * @name DeleteAttachment14
         * @summary Deletes wage determination attachment
         * @request DELETE:/rest/wage-determinations/{id}/attachments/{attachmentId}
         * @secure */
        this.deleteAttachment14 = (id, attachmentId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/attachments/${attachmentId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves details of a Wage Determination Occupation
         *
         * @tags Wage Determinations
         * @name GetWageDeterminationOccupation
         * @summary Retrieves a wage determination occupation
         * @request GET:/rest/wage-determinations/{id}/occupations/{occupationId}
         * @secure */
        this.getWageDeterminationOccupation = (id, occupationId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationOccupationModel);
        /**
         * @description Update an occupation associated to a wage determination.
         *
         * @tags Wage Determinations
         * @name UpdateOccupation
         * @summary Update an occupation associated to a wage determination
         * @request PUT:/rest/wage-determinations/{id}/occupations/{occupationId}
         * @secure */
        this.updateOccupation = (id, occupationId, data, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
            method: "PUT",
            body: data,
            secure: true,
            ...params,
        });
        /**
         * @description Delete an occupation associated to a wage determination.
         *
         * @tags Wage Determinations
         * @name DeleteOccupation
         * @summary Delete an occupation associated to a wage determination
         * @request DELETE:/rest/wage-determinations/{id}/occupations/{occupationId}
         * @secure */
        this.deleteOccupation = (id, occupationId, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/occupations/${occupationId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of locations for a given wage determination key
         *
         * @tags Wage Determinations
         * @name GetLocations3
         * @summary Retrieves wage determination locations
         * @request GET:/rest/wage-determinations/{id}/locations
         * @secure */
        this.getLocations3 = (id, query, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/locations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LocationPagedResponse);
        /**
         * @description Updates the locations associated with a wage determination. The list will be overridden with the supplied list of location keys.
         *
         * @tags Wage Determinations
         * @name UpdateLocations1
         * @summary Updates the locations associated with a wage determination
         * @request PUT:/rest/wage-determinations/{id}/locations
         * @secure */
        this.updateLocations1 = (id, data, params = {}) => this.request({
            path: `/rest/wage-determinations/${id}/locations`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of SCA wage determinations filtered by optional search criteria.
         *
         * @tags Wage Determinations
         * @name Search24
         * @summary Retrieves wage determinations
         * @request POST:/rest/wage-determinations/search
         * @secure */
        this.search24 = (data, query, params = {}) => this.request({
            path: `/rest/wage-determinations/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.WageDeterminationPagedResponse);
    }
}
exports.WageDeterminations = WageDeterminations;
