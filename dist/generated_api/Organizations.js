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
exports.Organizations = void 0;
const http_client_1 = require("./http-client");
class Organizations extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Retrieves a logo for an organization.
         *
         * @tags Organizations
         * @name GetOrgLogo
         * @summary Retrieves an organization's logo
         * @request GET:/rest/organizations/{id}/logos
         * @secure */
        this.getOrgLogo = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}/logos`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationLogoModel);
        /**
         * @description Create or Update a logo for an organization.
         *
         * @tags Organizations
         * @name CreateUpdateLogo
         * @summary Updates an organization's logo
         * @request PUT:/rest/organizations/{id}/logos
         * @secure */
        this.createUpdateLogo = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/logos`,
            method: "PUT",
            body: data,
            secure: true,
            ...params,
        });
        /**
         * @description Deletes a logo for an organization.
         *
         * @tags Organizations
         * @name DeleteLogo
         * @summary Deletes an organization's logo
         * @request DELETE:/rest/organizations/{id}/logos
         * @secure */
        this.deleteLogo = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}/logos`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a paged list of organizations filtered by optional name or active status.
         *
         * @tags Organizations
         * @name Get26
         * @summary Retrieves organizations
         * @request GET:/rest/organizations
         * @secure */
        this.get26 = (query, params = {}) => this.request({
            path: `/rest/organizations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
        /**
         * @description Creates a new organization.
         *
         * @tags Organizations
         * @name Create22
         * @summary Creates organization
         * @request POST:/rest/organizations
         * @secure */
        this.create22 = (data, params = {}) => this.request({
            path: `/rest/organizations`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves the addresses associated with an organization.
         *
         * @tags Organizations
         * @name GetAddresses
         * @summary Retrieves organization addresses
         * @request GET:/rest/organizations/{id}/addresses
         * @secure */
        this.getAddresses = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}/addresses`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationAddressModel);
        /**
         * @description Creates a new organization address.
         *
         * @tags Organizations
         * @name CreateAddress
         * @summary Creates organization address
         * @request POST:/rest/organizations/{id}/addresses
         * @secure */
        this.createAddress = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/addresses`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a list of the contacts associated with an organization (summarized data).
         *
         * @tags Organizations
         * @name GetContacts
         * @summary Retrieves a list of organization contacts
         * @request GET:/rest/organizations/{id}/contacts
         * @secure */
        this.getContacts = (id, query, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationContactSummaryPagedResponse);
        /**
         * @description Creates a new organization contact.
         *
         * @tags Organizations
         * @name CreateContact
         * @summary Creates organization contact
         * @request POST:/rest/organizations/{id}/contacts
         * @secure */
        this.createContact = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Retrieves a paged list of customer profiles for an Organization.
         *
         * @tags Organizations
         * @name GetCustomerProfilesByOrganization
         * @summary Retrieves organization customer profiles
         * @request GET:/rest/organizations/{id}/customer-profiles
         * @secure */
        this.getCustomerProfilesByOrganization = (id, query, params = {}) => this.request({
            path: `/rest/organizations/${id}/customer-profiles`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerProfilePagedResponse);
        /**
         * @description Adds a customer profile to an organization.
         *
         * @tags Organizations
         * @name CreateCustomerProfile
         * @summary Creates customer profile
         * @request POST:/rest/organizations/{id}/customer-profiles
         * @secure */
        this.createCustomerProfile = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/customer-profiles`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves a paged list of vendor profiles for an Organization.
         *
         * @tags Organizations
         * @name GetVendorProfilesByOrganization
         * @summary Retrieves organization vendor profiles
         * @request GET:/rest/organizations/{id}/vendor-profiles
         * @secure */
        this.getVendorProfilesByOrganization = (id, query, params = {}) => this.request({
            path: `/rest/organizations/${id}/vendor-profiles`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorProfilePagedResponse);
        /**
         * @description Adds a vendor profile to an existing organization.
         *
         * @tags Organizations
         * @name CreateVendorProfileOnOrganization
         * @summary Creates vendor profile
         * @request POST:/rest/organizations/{id}/vendor-profiles
         * @secure */
        this.createVendorProfileOnOrganization = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/vendor-profiles`,
            method: "POST",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.CreatedResponseModel);
        /**
         * @description Retrieves an organization by id.
         *
         * @tags Organizations
         * @name GetByKey25
         * @summary Retrieves an organization
         * @request GET:/rest/organizations/{id}
         * @secure */
        this.getByKey25 = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationModel);
        /**
         * @description Updates an existing organization matching id. 'id' parameter must match the 'organization' model 'key' field.
         *
         * @tags Organizations
         * @name Update22
         * @summary Updates organization
         * @request PUT:/rest/organizations/{id}
         * @secure */
        this.update22 = (id, data, params = {}) => this.request({
            path: `/rest/organizations/${id}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Deletes an organization matching id.
         *
         * @tags Organizations
         * @name Delete19
         * @summary Deletes an organization
         * @request DELETE:/rest/organizations/{id}
         * @secure */
        this.delete19 = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves the address associated with an organization by its key.
         *
         * @tags Organizations
         * @name GetAddress
         * @summary Retrieves an organization address by key
         * @request GET:/rest/organizations/{id}/addresses/{addressId}
         * @secure */
        this.getAddress = (id, addressId, params = {}) => this.request({
            path: `/rest/organizations/${id}/addresses/${addressId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationAddressModel);
        /**
         * @description Updates an existing organization address matching addressId. 'id' parameter must match the 'organization' key field and 'addressId' parameter must match the 'Organizationaddress' model 'key' field
         *
         * @tags Organizations
         * @name UpdateAddress
         * @summary Updates organization address
         * @request PUT:/rest/organizations/{id}/addresses/{addressId}
         * @secure */
        this.updateAddress = (id, addressId, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/addresses/${addressId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an existing organization address.
         *
         * @tags Organizations
         * @name DeleteAddress
         * @summary Deletes an organization address
         * @request DELETE:/rest/organizations/{id}/addresses/{addressId}
         * @secure */
        this.deleteAddress = (id, addressId, params = {}) => this.request({
            path: `/rest/organizations/${id}/addresses/${addressId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves the contact associated with an organization by its key.
         *
         * @tags Organizations
         * @name GetContact
         * @summary Retrieves an organization contact by key
         * @request GET:/rest/organizations/{id}/contacts/{contactId}
         * @secure */
        this.getContact = (id, contactId, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts/${contactId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactModel);
        /**
         * @description Updates an existing organization contact matching contactId. 'id' parameter must match the 'organization' key field and 'contactId' parameter must match the 'contact' model 'key' field
         *
         * @tags Organizations
         * @name UpdateContact
         * @summary Updates organization contact
         * @request PUT:/rest/organizations/{id}/contacts/{contactId}
         * @secure */
        this.updateContact = (id, contactId, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts/${contactId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an existing organization contact.
         *
         * @tags Organizations
         * @name DeleteContact
         * @summary Deletes an organization contact
         * @request DELETE:/rest/organizations/{id}/contacts/{contactId}
         * @secure */
        this.deleteContact = (id, contactId, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts/${contactId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a specific customer profile associated with organization.
         *
         * @tags Organizations
         * @name GetCustomerProfile
         * @summary Retrieves organization customer profile
         * @request GET:/rest/organizations/{id}/customer-profiles/{profileId}
         * @secure */
        this.getCustomerProfile = (id, profileId, params = {}) => this.request({
            path: `/rest/organizations/${id}/customer-profiles/${profileId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CustomerProfileModel);
        /**
         * @description Updates an existing customer profile.
         *
         * @tags Organizations
         * @name UpdateCustomerProfile
         * @summary Updates organization
         * @request PUT:/rest/organizations/{id}/customer-profiles/{profileId}
         * @secure */
        this.updateCustomerProfile = (id, profileId, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/customer-profiles/${profileId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes an existing customer profile.
         *
         * @tags Organizations
         * @name DeleteCustomerProfile
         * @summary Deletes customer profile
         * @request DELETE:/rest/organizations/{id}/customer-profiles/{profileId}
         * @secure */
        this.deleteCustomerProfile = (id, profileId, params = {}) => this.request({
            path: `/rest/organizations/${id}/customer-profiles/${profileId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a vendor profile for an organization.
         *
         * @tags Organizations
         * @name GetVendorProfileByOrganization
         * @summary Retrieves organization vendor profile
         * @request GET:/rest/organizations/{id}/vendor-profiles/{vendorProfileId}
         * @secure */
        this.getVendorProfileByOrganization = (id, vendorProfileId, params = {}) => this.request({
            path: `/rest/organizations/${id}/vendor-profiles/${vendorProfileId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.VendorProfileModel);
        /**
         * @description Updates an existing vendor profile for an organization.
         *
         * @tags Organizations
         * @name UpdateVendorProfileOnOrganization
         * @summary Updates vendor profile
         * @request PUT:/rest/organizations/{id}/vendor-profiles/{vendorProfileId}
         * @secure */
        this.updateVendorProfileOnOrganization = (id, vendorProfileId, data, params = {}) => this.request({
            path: `/rest/organizations/${id}/vendor-profiles/${vendorProfileId}`,
            method: "PUT",
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            ...params,
        });
        /**
         * @description Removes a vendor profile from an existing organization.
         *
         * @tags Organizations
         * @name DeleteVendorProfileFromOrganization
         * @summary Deletes vendor profile
         * @request DELETE:/rest/organizations/{id}/vendor-profiles/{vendorProfileId}
         * @secure */
        this.deleteVendorProfileFromOrganization = (id, vendorProfileId, params = {}) => this.request({
            path: `/rest/organizations/${id}/vendor-profiles/${vendorProfileId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        /**
         * @description Retrieves a list of available organization account categories.
         *
         * @tags Organizations
         * @name GetAccountCategories
         * @summary Retrieves a list of organization account categories
         * @request GET:/rest/organizations/account-categories
         * @secure */
        this.getAccountCategories = (params = {}) => this.request({
            path: `/rest/organizations/account-categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountCategoryModel);
        /**
         * @description This route has been deprecated in favor of /rest/organizations/account-categories. Retrieves a list of available account categories for an organization.
         *
         * @tags Organizations
         * @name GetAccountCategories1
         * @summary Retrieves a list of account categories. Note this route has been deprecated in favor of /rest/organizations/account-categories
         * @request GET:/rest/organizations/{id}/account-categories
         * @deprecated
         * @secure */
        this.getAccountCategories1 = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}/account-categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.AccountCategoryModel);
        /**
         * @description Retrieves a list of the accounts associated with an organization (summarized data).
         *
         * @tags Organizations
         * @name GetAccounts
         * @summary Retrieves a list of organization accounts
         * @request GET:/rest/organizations/{id}/accounts
         * @secure */
        this.getAccounts = (id, query, params = {}) => this.request({
            path: `/rest/organizations/${id}/accounts`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.CategoryAccountModel);
        /**
         * @description Retrieves a list of activation approvers for all vendor profiles of an organization.
         *
         * @tags Organizations
         * @name GetVendorProfileActivationApprovers
         * @summary Retrieves activation approvers
         * @request GET:/rest/organizations/{id}/activation-approvers
         * @secure */
        this.getVendorProfileActivationApprovers = (id, params = {}) => this.request({
            path: `/rest/organizations/${id}/activation-approvers`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.PersonNameModel);
        /**
         * @description Retrieves a list of simple organization data filtered by active status.
         *
         * @tags Organizations
         * @name List1
         * @summary Retrieves organization list
         * @request GET:/rest/organizations/list
         * @secure */
        this.list1 = (query, params = {}) => this.request({
            path: `/rest/organizations/list`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.KeyNameCodeModel);
        /**
         * @description Retrieves a list of simple contact data filtered by active status.
         *
         * @tags Organizations
         * @name ListContacts
         * @summary Retrieves contact list
         * @request GET:/rest/organizations/{id}/contacts/list
         * @secure */
        this.listContacts = (id, query, params = {}) => this.request({
            path: `/rest/organizations/${id}/contacts/list`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }, data_contracts_1.ContactBaseModel);
        /**
         * @description Retrieves a paged list of organizations filtered by optional search criteria
         *
         * @tags Organizations
         * @name Search10
         * @summary Retrieves organizations
         * @request POST:/rest/organizations/search
         * @secure */
        this.search10 = (data, query, params = {}) => this.request({
            path: `/rest/organizations/search`,
            method: "POST",
            query: query,
            body: data,
            secure: true,
            type: http_client_1.ContentType.Json,
            format: "json",
            ...params,
        }, data_contracts_1.OrganizationPagedResponse);
    }
}
exports.Organizations = Organizations;
