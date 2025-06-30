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
exports.SkillTypes = void 0;
const http_client_1 = require("./http-client");
class SkillTypes extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a list of Skill Types
         *
         * @tags Skill Types
         * @name List3
         * @summary Retrieves skill types
         * @request GET:/rest/skill-types
         * @secure */
        this.list3 = (query, params = {}) => this.request({
            path: `/rest/skill-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SkillTypePagedResponse);
        /**
         * @description Creates a new Skill Type
         *
         * @tags Skill Types
         * @name Create39
         * @summary Creates a new skill type
         * @request POST:/rest/skill-types
         * @secure */
        this.create39 = (data, params = {}) => this.request({
            path: `/rest/skill-types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a Skill Type for the key provided
         *
         * @tags Skill Types
         * @name Get35
         * @summary Retrieves a skill type
         * @request GET:/rest/skill-types/{id}
         * @secure */
        this.get35 = (id, params = {}) => this.request({
            path: `/rest/skill-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SkillTypeModel);
        /**
         * @description Update the attributes of a skill type.
         *
         * @tags Skill Types
         * @name Update39
         * @summary Update an existing skill type
         * @request PUT:/rest/skill-types/{id}
         * @secure */
        this.update39 = (id, data, params = {}) => this.request({
            path: `/rest/skill-types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing skill type.
         *
         * @tags Skill Types
         * @name Delete36
         * @summary Delete an existing skill type
         * @request DELETE:/rest/skill-types/{id}
         * @secure */
        this.delete36 = (id, params = {}) => this.request({
            path: `/rest/skill-types/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.SkillTypes = SkillTypes;
