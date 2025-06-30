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
exports.Configuration = void 0;
const http_client_1 = require("./http-client");
class Configuration extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Gets a list of System Property Templates
         *
         * @tags Configuration
         * @name GetSystemPropertyTemplates
         * @summary Gets System Property Templates
         * @request GET:/rest/config/property-templates
         * @secure */
        this.getSystemPropertyTemplates = (query, params = {}) => this.request({
            path: `/rest/config/property-templates`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PropertyTemplatePagedResponse);
        /**
         * @description Create a system property template
         *
         * @tags Configuration
         * @name CreateSystemPropertyTemplate
         * @summary Create Property Template
         * @request POST:/rest/config/property-templates
         * @secure */
        this.createSystemPropertyTemplate = (data, params = {}) => this.request({
            path: `/rest/config/property-templates`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Returns a system property template by key
         *
         * @tags Configuration
         * @name GetSystemPropertyTemplate
         * @summary Returns a Property Template
         * @request GET:/rest/config/property-templates/{id}
         * @secure */
        this.getSystemPropertyTemplate = (id, params = {}) => this.request({
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
        this.updateSystemPropertyTemplate = (id, data, params = {}) => this.request({
            path: `/rest/config/property-templates/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.deleteSystemPropertyTemplate = (id, params = {}) => this.request({
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
        this.getBillingType = (id, params = {}) => this.request({
            path: `/rest/config/billing-types/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.BillingTypeModel);
        /**
         * @description Retrieves a list of Billing Types
         *
         * @tags Configuration
         * @name GetBillingTypes
         * @summary Retrieves billing types
         * @request GET:/rest/config/billing-types
         * @secure */
        this.getBillingTypes = (query, params = {}) => this.request({
            path: `/rest/config/billing-types`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.BillingTypePagedResponse);
        /**
         * @description Retrieves a Logo by the type specified
         *
         * @tags Configuration
         * @name GetLogoByType
         * @summary Retrieves a logo
         * @request GET:/rest/config/logos
         * @secure */
        this.getLogoByType = (query, params = {}) => this.request({
            path: `/rest/config/logos`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ImageAttachmentModel);
        /**
         * @description Gets the multi-currency settings of the instance: enabled/not enabled, instance currency
         *
         * @tags Configuration
         * @name GetMulticurrencySettings
         * @summary Gets the multi-currency settings
         * @request GET:/rest/config/multicurrency
         * @secure */
        this.getMulticurrencySettings = (params = {}) => this.request({
            path: `/rest/config/multicurrency`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.MulticurrencySetupModel);
        /**
         * @description Updates the multi-currency settings of the instance.
         *
         * @tags Configuration
         * @name SetMulticurrencySettings
         * @summary Updates multi-currency settings
         * @request PUT:/rest/config/multicurrency
         * @secure */
        this.setMulticurrencySettings = (data, params = {}) => this.request({
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
        this.getProperties = (data, query, params = {}) => this.request({
            path: `/rest/config/properties`,
            method: "POST",
            query: query,
            body: data,
            type: http_client_1.ContentType.Json,
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
        this.labels = (data, params = {}) => this.request({
            path: `/rest/config/labels`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
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
        this.license = (params = {}) => this.request({
            path: `/rest/config/license`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, string);
        /**
         * @description Retrieves a list of licensed products and their current state.
         *
         * @tags Configuration
         * @name LicensedProducts
         * @summary Retrieves licensed product information
         * @request GET:/rest/config/license/products
         * @secure */
        this.licensedProducts = (params = {}) => this.request({
            path: `/rest/config/license/products`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.LicensedProductModel);
        /**
         * @description Retrieves the login logo associated with the specified customer.
         *
         * @tags Configuration
         * @name LoginLogo
         * @summary Retrieves customer login logo
         * @request GET:/rest/config/logos/login */
        this.loginLogo = (query, params = {}) => this.request({
            path: `/rest/config/logos/login`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }, data_contracts_1.ImageAttachmentModel);
        /**
         * @description Retrieves the portal logos associated with the specified customer.
         *
         * @tags Configuration
         * @name PortalLogo
         * @summary Retrieves customer portal logo
         * @request GET:/rest/config/logos/portal */
        this.portalLogo = (query, params = {}) => this.request({
            path: `/rest/config/logos/portal`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }, data_contracts_1.ImageAttachmentModel);
        /**
         * @description View the history of a property template
         *
         * @tags Configuration
         * @name PropertyTemplateHistory
         * @summary View Property Template History
         * @request GET:/rest/config/property-templates/{id}/history
         * @secure */
        this.propertyTemplateHistory = (id, params = {}) => this.request({
            path: `/rest/config/property-templates/${id}/history`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PropertyTemplateHistoryPagedResponse);
        /**
         * @description Retrieves list of all person roles.
         *
         * @tags Configuration
         * @name Roles
         * @summary Retrieves person roles
         * @request GET:/rest/config/roles
         * @secure */
        this.roles = (params = {}) => this.request({
            path: `/rest/config/roles`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModel);
        /**
         * @description Search the history of legal entity changes for a property template
         *
         * @tags Configuration
         * @name SearchPropertyTemplateOrgHistory
         * @summary Search Property Template Legal Entity History
         * @request POST:/rest/config/property-templates/legal-entities/history
         * @secure */
        this.searchPropertyTemplateOrgHistory = (data, params = {}) => this.request({
            path: `/rest/config/property-templates/legal-entities/history`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.PropertyTemplateOrgHistoryPagedResponse);
        /**
         * @description View the history of legal entity changes for a property template
         *
         * @tags Configuration
         * @name SearchPropertyTemplateOrgHistory1
         * @summary View Property Template Legal Entity History
         * @request GET:/rest/config/property-templates/{id}/legal-entities/history
         * @secure */
        this.searchPropertyTemplateOrgHistory1 = (id, params = {}) => this.request({
            path: `/rest/config/property-templates/${id}/legal-entities/history`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PropertyTemplateOrgHistoryPagedResponse);
        /**
         * @description Retrieves system information
         *
         * @tags Configuration
         * @name SystemInfo
         * @summary Retrieves system information
         * @request GET:/rest/config/system */
        this.systemInfo = (params = {}) => this.request({
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
        this.udfMetadata = (type, params = {}) => this.request({
            path: `/rest/config/udf-metadata/${type}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.UdfMetadataListModel);
    }
}
exports.Configuration = Configuration;
