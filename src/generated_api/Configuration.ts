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
  BillingTypeModel,
  BillingTypePagedResponse,
  CreatedResponseModel,
  ErrorResponse,
  GetLogoByTypeParamsLogoTypeEnum,
  ImageAttachmentModel,
  KeyFilterModel,
  KeyNameCodeModel,
  LicensedProductModel,
  MulticurrencySetupModel,
  PropertyTemplateCreateModel,
  PropertyTemplateHistoryPagedResponse,
  PropertyTemplateModel,
  PropertyTemplateOrgHistoryPagedResponse,
  PropertyTemplateOrgHistorySearchModel,
  PropertyTemplatePagedResponse,
  UdfMetadataListModel,
  UdfMetadataParamsEnum,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Configuration<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Gets a list of System Property Templates
   *
   * @tags Configuration
   * @name GetSystemPropertyTemplates
   * @summary Gets System Property Templates
   * @request GET:/rest/config/property-templates
   * @secure */
  getSystemPropertyTemplates = (
    query?: {
      /** @default false */
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PropertyTemplatePagedResponse, ErrorResponse>(
      {
        path: `/rest/config/property-templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PropertyTemplatePagedResponse,
    );

  /**
   * @description Create a system property template
   *
   * @tags Configuration
   * @name CreateSystemPropertyTemplate
   * @summary Create Property Template
   * @request POST:/rest/config/property-templates
   * @secure */
  createSystemPropertyTemplate = (data: PropertyTemplateCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/config/property-templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    );

  /**
   * @description Returns a system property template by key
   *
   * @tags Configuration
   * @name GetSystemPropertyTemplate
   * @summary Returns a Property Template
   * @request GET:/rest/config/property-templates/{id}
   * @secure */
  getSystemPropertyTemplate = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/property-templates/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });

  /**
   * @description Update a system property template
   *
   * @tags Configuration
   * @name UpdateSystemPropertyTemplate
   * @summary Update Property Template
   * @request PUT:/rest/config/property-templates/{id}
   * @secure */
  updateSystemPropertyTemplate = (id: number, data: PropertyTemplateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/property-templates/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a system property template that has not been used and/or assigned orgs.
   *
   * @tags Configuration
   * @name DeleteSystemPropertyTemplate
   * @summary Delete Property Template
   * @request DELETE:/rest/config/property-templates/{id}
   * @secure */
  deleteSystemPropertyTemplate = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/property-templates/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a Billing Type with the given id
   *
   * @tags Configuration
   * @name GetBillingType
   * @summary Retrieves a billing type
   * @request GET:/rest/config/billing-types/{id}
   * @secure */
  getBillingType = (id: number, params: RequestParams = {}) =>
    this.request<BillingTypeModel, ErrorResponse>(
      {
        path: `/rest/config/billing-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      BillingTypeModel,
    );

  /**
   * @description Retrieves a list of Billing Types
   *
   * @tags Configuration
   * @name GetBillingTypes
   * @summary Retrieves billing types
   * @request GET:/rest/config/billing-types
   * @secure */
  getBillingTypes = (
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
    this.request<BillingTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/config/billing-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      BillingTypePagedResponse,
    );

  /**
   * @description Retrieves a Logo by the type specified
   *
   * @tags Configuration
   * @name GetLogoByType
   * @summary Retrieves a logo
   * @request GET:/rest/config/logos
   * @secure */
  getLogoByType = (
    query?: {
      logoType?: GetLogoByTypeParamsLogoTypeEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImageAttachmentModel, ErrorResponse>(
      {
        path: `/rest/config/logos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ImageAttachmentModel,
    );

  /**
   * @description Gets the multi-currency settings of the instance: enabled/not enabled, instance currency
   *
   * @tags Configuration
   * @name GetMulticurrencySettings
   * @summary Gets the multi-currency settings
   * @request GET:/rest/config/multicurrency
   * @secure */
  getMulticurrencySettings = (params: RequestParams = {}) =>
    this.request<MulticurrencySetupModel, ErrorResponse>(
      {
        path: `/rest/config/multicurrency`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      MulticurrencySetupModel,
    );

  /**
   * @description Updates the multi-currency settings of the instance.
   *
   * @tags Configuration
   * @name SetMulticurrencySettings
   * @summary Updates multi-currency settings
   * @request PUT:/rest/config/multicurrency
   * @secure */
  setMulticurrencySettings = (data: MulticurrencySetupModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/multicurrency`,
      method: "PUT",
      body: data,
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a map of name/value pairs representing Unanet properties, consisting of properties defined in customer database, overridden with any properties defined in customer unanet.properties file.
   *
   * @tags Configuration
   * @name GetProperties
   * @summary Retrieves Unanet properties
   * @request POST:/rest/config/properties */
  getProperties = (
    data: KeyFilterModel,
    query?: {
      customerId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/properties`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * @description Retrieves a map of name/value pairs representing user interface labels keys included in request list.
   *
   * @tags Configuration
   * @name Labels
   * @summary Retrieves labels
   * @request POST:/rest/config/labels
   * @secure */
  labels = (data: KeyFilterModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/config/labels`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * @description Retrieves a list of licensed features for toggling UI elements and controlling application flow.
   *
   * @tags Configuration
   * @name License
   * @summary Retrieves licensed feature information
   * @request GET:/rest/config/license
   * @secure */
  license = (params: RequestParams = {}) =>
    this.request<string[], ErrorResponse>(
      {
        path: `/rest/config/license`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      string,
    );

  /**
   * @description Retrieves a list of licensed products and their current state.
   *
   * @tags Configuration
   * @name LicensedProducts
   * @summary Retrieves licensed product information
   * @request GET:/rest/config/license/products
   * @secure */
  licensedProducts = (params: RequestParams = {}) =>
    this.request<LicensedProductModel[], ErrorResponse>(
      {
        path: `/rest/config/license/products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      LicensedProductModel,
    );

  /**
   * @description Retrieves the login logo associated with the specified customer.
   *
   * @tags Configuration
   * @name LoginLogo
   * @summary Retrieves customer login logo
   * @request GET:/rest/config/logos/login */
  loginLogo = (
    query?: {
      customerId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImageAttachmentModel, any>(
      {
        path: `/rest/config/logos/login`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      },
      ImageAttachmentModel,
    );

  /**
   * @description Retrieves the portal logos associated with the specified customer.
   *
   * @tags Configuration
   * @name PortalLogo
   * @summary Retrieves customer portal logo
   * @request GET:/rest/config/logos/portal */
  portalLogo = (
    query?: {
      customerId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImageAttachmentModel, any>(
      {
        path: `/rest/config/logos/portal`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      },
      ImageAttachmentModel,
    );

  /**
   * @description View the history of a property template
   *
   * @tags Configuration
   * @name PropertyTemplateHistory
   * @summary View Property Template History
   * @request GET:/rest/config/property-templates/{id}/history
   * @secure */
  propertyTemplateHistory = (id: number, params: RequestParams = {}) =>
    this.request<PropertyTemplateHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/config/property-templates/${id}/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PropertyTemplateHistoryPagedResponse,
    );

  /**
   * @description Retrieves list of all person roles.
   *
   * @tags Configuration
   * @name Roles
   * @summary Retrieves person roles
   * @request GET:/rest/config/roles
   * @secure */
  roles = (params: RequestParams = {}) =>
    this.request<KeyNameCodeModel[], ErrorResponse>(
      {
        path: `/rest/config/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModel,
    );

  /**
   * @description Search the history of legal entity changes for a property template
   *
   * @tags Configuration
   * @name SearchPropertyTemplateOrgHistory
   * @summary Search Property Template Legal Entity History
   * @request POST:/rest/config/property-templates/legal-entities/history
   * @secure */
  searchPropertyTemplateOrgHistory = (data: PropertyTemplateOrgHistorySearchModel, params: RequestParams = {}) =>
    this.request<PropertyTemplateOrgHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/config/property-templates/legal-entities/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      PropertyTemplateOrgHistoryPagedResponse,
    );

  /**
   * @description View the history of legal entity changes for a property template
   *
   * @tags Configuration
   * @name SearchPropertyTemplateOrgHistory1
   * @summary View Property Template Legal Entity History
   * @request GET:/rest/config/property-templates/{id}/legal-entities/history
   * @secure */
  searchPropertyTemplateOrgHistory1 = (id: number, params: RequestParams = {}) =>
    this.request<PropertyTemplateOrgHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/config/property-templates/${id}/legal-entities/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PropertyTemplateOrgHistoryPagedResponse,
    );

  /**
   * @description Retrieves system information
   *
   * @tags Configuration
   * @name SystemInfo
   * @summary Retrieves system information
   * @request GET:/rest/config/system */
  systemInfo = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/rest/config/system`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Retrieves a list of all metadata for the requested UDF Type.
   *
   * @tags Configuration
   * @name UdfMetadata
   * @summary Retrieves UDF Metadata
   * @request GET:/rest/config/udf-metadata/{type}
   * @secure */
  udfMetadata = (type: UdfMetadataParamsEnum, params: RequestParams = {}) =>
    this.request<UdfMetadataListModel, ErrorResponse>(
      {
        path: `/rest/config/udf-metadata/${type}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      UdfMetadataListModel,
    );
}
