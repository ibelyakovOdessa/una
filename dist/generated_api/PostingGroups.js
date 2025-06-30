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
exports.PostingGroups = void 0;
const http_client_1 = require("./http-client");
class PostingGroups extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of posting groups filtered by optional query parameters
         *
         * @tags Posting Groups
         * @name Get31
         * @summary Retrieves posting groups
         * @request GET:/rest/posting-groups
         * @secure */
        this.get31 = (query, params = {}) => this.request({
            path: `/rest/posting-groups`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PostingGroupPagedResponse);
        /**
         * @description Create a new custom posting group
         *
         * @tags Posting Groups
         * @name Create28
         * @summary Create posting group
         * @request POST:/rest/posting-groups
         * @secure */
        this.create28 = (data, params = {}) => this.request({
            path: `/rest/posting-groups`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PostingGroupCreateModel);
        /**
         * @description Retrieves details of a posting group
         *
         * @tags Posting Groups
         * @name GetByKey30
         * @summary Retrieves a posting group.
         * @request GET:/rest/posting-groups/{id}
         * @secure */
        this.getByKey30 = (id, params = {}) => this.request({
            path: `/rest/posting-groups/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PostingGroupModel);
        /**
         * @description Update a custom posting group
         *
         * @tags Posting Groups
         * @name Update28
         * @summary Update posting group
         * @request PUT:/rest/posting-groups/{id}
         * @secure */
        this.update28 = (id, data, params = {}) => this.request({
            path: `/rest/posting-groups/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete a custom posting group
         *
         * @tags Posting Groups
         * @name Delete25
         * @summary Delete posting group
         * @request DELETE:/rest/posting-groups/{id}
         * @secure */
        this.delete25 = (id, params = {}) => this.request({
            path: `/rest/posting-groups/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves default account sources for a posting group
         *
         * @tags Posting Groups
         * @name GetSources
         * @summary Retrieves a posting group's default account sources
         * @request GET:/rest/posting-groups/{id}/posting-defaults
         * @secure */
        this.getSources = (id, params = {}) => this.request({
            path: `/rest/posting-groups/${id}/posting-defaults`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PostingGroupSourceModel);
        /**
         * @description Update default account sources for a posting group
         *
         * @tags Posting Groups
         * @name UpdateSources
         * @summary Update a posting group's default account sources
         * @request PUT:/rest/posting-groups/{id}/posting-defaults/{category}
         * @secure */
        this.updateSources = (id, category, data, params = {}) => this.request({
            path: `/rest/posting-groups/${id}/posting-defaults/${category}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
    }
}
exports.PostingGroups = PostingGroups;
