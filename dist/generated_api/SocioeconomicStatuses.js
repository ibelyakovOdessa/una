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
exports.SocioeconomicStatuses = void 0;
const http_client_1 = require("./http-client");
class SocioeconomicStatuses extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a paged list of socioeconomic statuses.
         *
         * @tags Socioeconomic Statuses
         * @name Get36
         * @summary Retrieves socioeconomic statuses
         * @request GET:/rest/socioeconomic-statuses
         * @secure */
        this.get36 = (query, params = {}) => this.request({
            path: `/rest/socioeconomic-statuses`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SocioeconomicStatusPagedResponse);
        /**
         * @description Retrieves a socioeconomic status by key.
         *
         * @tags Socioeconomic Statuses
         * @name GetByKey36
         * @summary Retrieves a socioeconomic status
         * @request GET:/rest/socioeconomic-statuses/{id}
         * @secure */
        this.getByKey36 = (id, params = {}) => this.request({
            path: `/rest/socioeconomic-statuses/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.SocioeconomicStatusModel);
    }
}
exports.SocioeconomicStatuses = SocioeconomicStatuses;
