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

import {
  CreatedResponseModel,
  ErrorResponse,
  InventoryItemCreateModel,
  InventoryItemModel,
  InventoryItemPagedResponse,
  InventoryItemSearchModel,
  ItemCreateModel,
  ItemModel,
  ItemPagedResponse,
  ItemUOMRateSetModel,
  ItemUomCreateModel,
  UOMRateCollectionCreateModel,
  UOMRateCollectionModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves inventory items for an item.
   *
   * @tags Items
   * @name GetInventoryItems
   * @summary Retrieves inventory items for an item
   * @request GET:/rest/items/{id}/inventory
   * @secure */
  getInventoryItems = (
    id: number,
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<InventoryItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/items/${id}/inventory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      InventoryItemPagedResponse,
    ) as InventoryItemPagedResponse;

  /**
   * @description Creates a new inventory item for an item.
   *
   * @tags Items
   * @name AddInventoryItem
   * @summary Creates a new inventory item for an item
   * @request POST:/rest/items/{id}/inventory
   * @secure */
  addInventoryItem = (id: number, data: InventoryItemCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/items/${id}/inventory`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description This route has been deprecated in favor of /rest/items/{id}/uoms. Retrieves unit of measure rates for an item.
   *
   * @tags Items
   * @name GetUomRatesByKey
   * @summary Retrieves unit of measure rates for an item
   * @request GET:/rest/items/{id}/uom-rates
   * @deprecated
   * @secure */
  getUomRatesByKey = (id: number, params: RequestParams = {}) =>
    this.request<ItemUOMRateSetModel, ErrorResponse>(
      {
        path: `/rest/items/${id}/uom-rates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ItemUOMRateSetModel,
    ) as ItemUOMRateSetModel;

  /**
   * @description This route has been deprecated in favor of /rest/items/{id}/uoms and /rest/items/{id}/uoms/{uomId}. Creates a new unit of measure rate for an item.
   *
   * @tags Items
   * @name AddUomRates
   * @summary Creates a new unit of measure rate for an item
   * @request POST:/rest/items/{id}/uom-rates
   * @deprecated
   * @secure */
  addUomRates = (id: number, data: UOMRateCollectionCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/items/${id}/uom-rates`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getUoms = (id: number, params: RequestParams = {}) =>
    this.request<UOMRateCollectionModel[], ErrorResponse>(
      {
        path: `/rest/items/${id}/uoms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      UOMRateCollectionModel,
    ) as UOMRateCollectionModel;

  /**
   * @description Adds a unit of measure and rates to an item. Bill rate and cost rate are in the instance currency.
   *
   * @tags Items
   * @name AddUom
   * @summary Adds a unit of measure to an item. Rates are in the instance currency.
   * @request POST:/rest/items/{id}/uoms
   * @secure */
  addUom = (id: number, data: ItemUomCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/items/${id}/uoms`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  get21 = (
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
      itemCode?: string;
      itemName?: string;
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ItemPagedResponse,
    ) as ItemPagedResponse;

  /**
   * @description Creates a new item.
   *
   * @tags Items
   * @name Create15
   * @summary Creates an item
   * @request POST:/rest/items
   * @secure */
  create15 = (data: ItemCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves an item by id.
   *
   * @tags Items
   * @name GetByKey17
   * @summary Retrieves an item
   * @request GET:/rest/items/{id}
   * @secure */
  getByKey17 = (id: number, params: RequestParams = {}) =>
    this.request<ItemModel, ErrorResponse>(
      {
        path: `/rest/items/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ItemModel,
    ) as ItemModel;

  /**
   * @description Updates an item
   *
   * @tags Items
   * @name Update15
   * @summary Updates an item
   * @request PUT:/rest/items/{id}
   * @secure */
  update15 = (id: number, data: ItemModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/items/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete14 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getInventoryItemByKey = (id: number, inventoryItemId: number, params: RequestParams = {}) =>
    this.request<InventoryItemModel, ErrorResponse>(
      {
        path: `/rest/items/${id}/inventory/${inventoryItemId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      InventoryItemModel,
    ) as InventoryItemModel;

  /**
   * @description Updates an inventory item for an item.
   *
   * @tags Items
   * @name UpdateInventoryItem
   * @summary Updates an inventory item for an item
   * @request PUT:/rest/items/{id}/inventory/{inventoryItemId}
   * @secure */
  updateInventoryItem = (id: number, inventoryItemId: number, data: InventoryItemModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/items/${id}/inventory/${inventoryItemId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteInventoryItem = (id: number, inventoryItemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  deleteUomRates = (id: number, uomId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  updateUom = (id: number, uomId: number, data: UOMRateCollectionModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/items/${id}/uoms/${uomId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteUom = (id: number, uomId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  searchInventoryItems = (
    id: number,
    data: InventoryItemSearchModel,
    query?: {
      /**
       * The page offset to return from total pages available.
       * @format int32
       * @min 0
       * @default 1
       */
      page?: number;
      /**
       * The maximum number of rows to return per page. Actual page size may be less when there are fewer rows available to return for the page.
       * @format int32
       * @min 1
       * @max 2000
       * @default 50
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<InventoryItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/items/${id}/inventory/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      InventoryItemPagedResponse,
    ) as InventoryItemPagedResponse;
}
