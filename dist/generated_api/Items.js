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
exports.Items = void 0;
const http_client_1 = require("./http-client");
class Items extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves inventory items for an item.
         *
         * @tags Items
         * @name GetInventoryItems
         * @summary Retrieves inventory items for an item
         * @request GET:/rest/items/{id}/inventory
         * @secure */
        this.getInventoryItems = (id, query, params = {}) => this.request({
            path: `/rest/items/${id}/inventory`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InventoryItemPagedResponse);
        /**
         * @description Creates a new inventory item for an item.
         *
         * @tags Items
         * @name AddInventoryItem
         * @summary Creates a new inventory item for an item
         * @request POST:/rest/items/{id}/inventory
         * @secure */
        this.addInventoryItem = (id, data, params = {}) => this.request({
            path: `/rest/items/${id}/inventory`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description This route has been deprecated in favor of /rest/items/{id}/uoms. Retrieves unit of measure rates for an item.
         *
         * @tags Items
         * @name GetUomRatesByKey
         * @summary Retrieves unit of measure rates for an item
         * @request GET:/rest/items/{id}/uom-rates
         * @deprecated
         * @secure */
        this.getUomRatesByKey = (id, params = {}) => this.request({
            path: `/rest/items/${id}/uom-rates`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ItemUOMRateSetModel);
        /**
         * @description This route has been deprecated in favor of /rest/items/{id}/uoms and /rest/items/{id}/uoms/{uomId}. Creates a new unit of measure rate for an item.
         *
         * @tags Items
         * @name AddUomRates
         * @summary Creates a new unit of measure rate for an item
         * @request POST:/rest/items/{id}/uom-rates
         * @deprecated
         * @secure */
        this.addUomRates = (id, data, params = {}) => this.request({
            path: `/rest/items/${id}/uom-rates`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves units of measure and rates for an item. Bill rate and cost rate are in the instance currency.
         *
         * @tags Items
         * @name GetUoms
         * @summary Retrieves units of measure and rates for an item. Rates are in the instance currency.
         * @request GET:/rest/items/{id}/uoms
         * @secure */
        this.getUoms = (id, params = {}) => this.request({
            path: `/rest/items/${id}/uoms`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UOMRateCollectionModel);
        /**
         * @description Adds a unit of measure and rates to an item. Bill rate and cost rate are in the instance currency.
         *
         * @tags Items
         * @name AddUom
         * @summary Adds a unit of measure to an item. Rates are in the instance currency.
         * @request POST:/rest/items/{id}/uoms
         * @secure */
        this.addUom = (id, data, params = {}) => this.request({
            path: `/rest/items/${id}/uoms`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of items filtered by optional active, itemCode and itemName criteria. The itemCode criteria will find an exact match and itemName will return items that contain the itemName value.
         *
         * @tags Items
         * @name Get21
         * @summary Retrieves items
         * @request GET:/rest/items
         * @secure */
        this.get21 = (query, params = {}) => this.request({
            path: `/rest/items`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ItemPagedResponse);
        /**
         * @description Creates a new item.
         *
         * @tags Items
         * @name Create15
         * @summary Creates an item
         * @request POST:/rest/items
         * @secure */
        this.create15 = (data, params = {}) => this.request({
            path: `/rest/items`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves an item by id.
         *
         * @tags Items
         * @name GetByKey17
         * @summary Retrieves an item
         * @request GET:/rest/items/{id}
         * @secure */
        this.getByKey17 = (id, params = {}) => this.request({
            path: `/rest/items/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ItemModel);
        /**
         * @description Updates an item
         *
         * @tags Items
         * @name Update15
         * @summary Updates an item
         * @request PUT:/rest/items/{id}
         * @secure */
        this.update15 = (id, data, params = {}) => this.request({
            path: `/rest/items/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an item
         *
         * @tags Items
         * @name Delete14
         * @summary Removes an item
         * @request DELETE:/rest/items/{id}
         * @secure */
        this.delete14 = (id, params = {}) => this.request({
            path: `/rest/items/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves an inventory item for an item.
         *
         * @tags Items
         * @name GetInventoryItemByKey
         * @summary Retrieves an inventory item for an item
         * @request GET:/rest/items/{id}/inventory/{inventoryItemId}
         * @secure */
        this.getInventoryItemByKey = (id, inventoryItemId, params = {}) => this.request({
            path: `/rest/items/${id}/inventory/${inventoryItemId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.InventoryItemModel);
        /**
         * @description Updates an inventory item for an item.
         *
         * @tags Items
         * @name UpdateInventoryItem
         * @summary Updates an inventory item for an item
         * @request PUT:/rest/items/{id}/inventory/{inventoryItemId}
         * @secure */
        this.updateInventoryItem = (id, inventoryItemId, data, params = {}) => this.request({
            path: `/rest/items/${id}/inventory/${inventoryItemId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an inventory item for an item.
         *
         * @tags Items
         * @name DeleteInventoryItem
         * @summary Removes an inventory item for an item
         * @request DELETE:/rest/items/{id}/inventory/{inventoryItemId}
         * @secure */
        this.deleteInventoryItem = (id, inventoryItemId, params = {}) => this.request({
            path: `/rest/items/${id}/inventory/${inventoryItemId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description This route has been deprecated in favor of /rest/items/{id}/uoms/{uomId}. Removes a unit of measure rate for an item.
         *
         * @tags Items
         * @name DeleteUomRates
         * @summary Removes a unit of measure rate for an item
         * @request DELETE:/rest/items/{id}/uom-rates/{uomId}
         * @deprecated
         * @secure */
        this.deleteUomRates = (id, uomId, params = {}) => this.request({
            path: `/rest/items/${id}/uom-rates/${uomId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Replaces a unit of measure's rates for an item. Bill rate and cost rate are in the instance currency.
         *
         * @tags Items
         * @name UpdateUom
         * @summary Replaces a unit of measure's rates for an item. Rates are in the instance currency.
         * @request PUT:/rest/items/{id}/uoms/{uomId}
         * @secure */
        this.updateUom = (id, uomId, data, params = {}) => this.request({
            path: `/rest/items/${id}/uoms/${uomId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes a unit of measure and its rate from an item.
         *
         * @tags Items
         * @name DeleteUom
         * @summary Removes a unit of measure from an item
         * @request DELETE:/rest/items/{id}/uoms/{uomId}
         * @secure */
        this.deleteUom = (id, uomId, params = {}) => this.request({
            path: `/rest/items/${id}/uoms/${uomId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Search inventory items for an item.
         *
         * @tags Items
         * @name SearchInventoryItems
         * @summary Search inventory items for an item
         * @request POST:/rest/items/{id}/inventory/search
         * @secure */
        this.searchInventoryItems = (id, data, query, params = {}) => this.request({
            path: `/rest/items/${id}/inventory/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.InventoryItemPagedResponse);
    }
}
exports.Items = Items;
