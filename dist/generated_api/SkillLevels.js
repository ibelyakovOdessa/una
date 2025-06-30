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
exports.SkillLevels = void 0;
const http_client_1 = require("./http-client");
class SkillLevels extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a list of Skill Levels filtered by optional parameters.
         *
         * @tags Skill Levels
         * @name Search20
         * @summary Retrieves skill levels
         * @request GET:/rest/skill-levels
         * @secure */
        this.search20 = (query, params = {}) => this.request({
            path: `/rest/skill-levels`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SkillLevelPagedResponse);
        /**
         * @description Creates a new Skill Level
         *
         * @tags Skill Levels
         * @name Create38
         * @summary Creates a new skill level
         * @request POST:/rest/skill-levels
         * @secure */
        this.create38 = (data, params = {}) => this.request({
            path: `/rest/skill-levels`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a Skill Level for the key provided
         *
         * @tags Skill Levels
         * @name Get34
         * @summary Retrieves a skill level
         * @request GET:/rest/skill-levels/{id}
         * @secure */
        this.get34 = (id, params = {}) => this.request({
            path: `/rest/skill-levels/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SkillLevelModel);
        /**
         * @description Update the attributes of a skill level.
         *
         * @tags Skill Levels
         * @name Update38
         * @summary Update an existing skill level
         * @request PUT:/rest/skill-levels/{id}
         * @secure */
        this.update38 = (id, data, params = {}) => this.request({
            path: `/rest/skill-levels/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing skill level.
         *
         * @tags Skill Levels
         * @name Delete35
         * @summary Delete an existing skill level
         * @request DELETE:/rest/skill-levels/{id}
         * @secure */
        this.delete35 = (id, params = {}) => this.request({
            path: `/rest/skill-levels/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
    }
}
exports.SkillLevels = SkillLevels;
