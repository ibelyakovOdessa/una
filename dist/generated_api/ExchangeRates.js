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
exports.ExchangeRates = void 0;
const http_client_1 = require("./http-client");
class ExchangeRates extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Create a new exchange rate
         *
         * @tags Exchange Rates
         * @name Create10
         * @summary Create exchange rate
         * @request POST:/rest/exchange-rates
         * @secure */
        this.create10 = (data, params = {}) => this.request({
            path: `/rest/exchange-rates`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of exchange rate types filtered by optional query parameters
         *
         * @tags Exchange Rates
         * @name GetTypes1
         * @summary Retrieves exchange rate types
         * @request GET:/rest/exchange-rates/types
         * @secure */
        this.getTypes1 = (query, params = {}) => this.request({
            path: `/rest/exchange-rates/types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExchangeRateTypePagedResponse);
        /**
         * @description Create a new exchange rate type
         *
         * @tags Exchange Rates
         * @name CreateType
         * @summary Create exchange rate type
         * @request POST:/rest/exchange-rates/types
         * @secure */
        this.createType = (data, params = {}) => this.request({
            path: `/rest/exchange-rates/types`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves an exchange rate given its ID
         *
         * @tags Exchange Rates
         * @name Get14
         * @summary Retrieves exchange rate by id
         * @request GET:/rest/exchange-rates/{id}
         * @secure */
        this.get14 = (id, params = {}) => this.request({
            path: `/rest/exchange-rates/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExchangeRateModel);
        /**
         * @description Update an existing exchange rate
         *
         * @tags Exchange Rates
         * @name Update11
         * @summary Update exchange rate
         * @request PUT:/rest/exchange-rates/{id}
         * @secure */
        this.update11 = (id, data, params = {}) => this.request({
            path: `/rest/exchange-rates/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing exchange rate
         *
         * @tags Exchange Rates
         * @name Delete10
         * @summary Delete exchange rate
         * @request DELETE:/rest/exchange-rates/{id}
         * @secure */
        this.delete10 = (id, params = {}) => this.request({
            path: `/rest/exchange-rates/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an exchange rate type by its id
         *
         * @tags Exchange Rates
         * @name GetTypeByKey
         * @summary Retrieves an exchange rate type by id
         * @request GET:/rest/exchange-rates/types/{id}
         * @secure */
        this.getTypeByKey = (id, params = {}) => this.request({
            path: `/rest/exchange-rates/types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ExchangeRateTypeModel);
        /**
         * @description Update an existing exchange rate type
         *
         * @tags Exchange Rates
         * @name UpdateType
         * @summary Update exchange rate type
         * @request PUT:/rest/exchange-rates/types/{id}
         * @secure */
        this.updateType = (id, data, params = {}) => this.request({
            path: `/rest/exchange-rates/types/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Delete an existing exchange rate type
         *
         * @tags Exchange Rates
         * @name DeleteType
         * @summary Delete exchange rate type
         * @request DELETE:/rest/exchange-rates/types/{id}
         * @secure */
        this.deleteType = (id, params = {}) => this.request({
            path: `/rest/exchange-rates/types/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves derived exchange rate matching from and to currencies for a given date
         *
         * @tags Exchange Rates
         * @name GetDerivedExchangeRateByCurrenciesForDate
         * @summary Retrieves derived exchange rate matching from and to currencies
         * @request GET:/rest/exchange-rates/{fromCurrencyId}/{toCurrencyId}/{date}
         * @secure */
        this.getDerivedExchangeRateByCurrenciesForDate = (fromCurrencyId, toCurrencyId, date, params = {}) => this.request({
            path: `/rest/exchange-rates/${fromCurrencyId}/${toCurrencyId}/${date}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, number);
        /**
         * @description Retrieves a paged list of exchange rates filtered by optional search criteria.
         *
         * @tags Exchange Rates
         * @name Search5
         * @summary Retrieves exchange rates
         * @request POST:/rest/exchange-rates/search
         * @secure */
        this.search5 = (data, query, params = {}) => this.request({
            path: `/rest/exchange-rates/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.ExchangeRatePagedResponse);
    }
}
exports.ExchangeRates = ExchangeRates;
