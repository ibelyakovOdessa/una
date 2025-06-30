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
exports.Skills = void 0;
const http_client_1 = require("./http-client");
class Skills extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Creates a new Skill
         *
         * @tags Skills
         * @name Create37
         * @summary Creates a new skill
         * @request POST:/rest/skills
         * @secure */
        this.create37 = (data, params = {}) => this.request({
            path: `/rest/skills`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a Skill for the key provided
         *
         * @tags Skills
         * @name Get33
         * @summary Retrieves a skill
         * @request GET:/rest/skills/{id}
         * @secure */
        this.get33 = (id, params = {}) => this.request({
            path: `/rest/skills/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SkillModel);
        /**
         * @description Update the attributes of a skill.
         *
         * @tags Skills
         * @name Update37
         * @summary Update an existing skill
         * @request PUT:/rest/skills/{id}
         * @secure */
        this.update37 = (id, data, params = {}) => this.request({
            path: `/rest/skills/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing skill.
         *
         * @tags Skills
         * @name Delete34
         * @summary Delete an existing skill
         * @request DELETE:/rest/skills/{id}
         * @secure */
        this.delete34 = (id, params = {}) => this.request({
            path: `/rest/skills/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a list of Skills filtered by optional parameters.
         *
         * @tags Skills
         * @name Search19
         * @summary Retrieves skills
         * @request POST:/rest/skills/search
         * @secure */
        this.search19 = (data, query, params = {}) => this.request({
            path: `/rest/skills/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.SkillPagedResponse);
    }
}
exports.Skills = Skills;
