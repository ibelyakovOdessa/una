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
  AccountCategoryModel,
  CategoryAccountModel,
  ContactBaseModel,
  ContactCreateModel,
  ContactModel,
  CreatedResponseModel,
  CustomerProfileCreateModel,
  CustomerProfileModel,
  CustomerProfilePagedResponse,
  ErrorResponse,
  GetAccountsParamsCategoryEnum,
  KeyNameCodeModel,
  OrganizationAddressCreateModel,
  OrganizationAddressModel,
  OrganizationContactSummaryPagedResponse,
  OrganizationCreateModel,
  OrganizationLogoModel,
  OrganizationModel,
  OrganizationPagedResponse,
  OrganizationSearchModel,
  PersonNameModel,
  VendorProfileCreateModel,
  VendorProfileModel,
  VendorProfilePagedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Organizations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a logo for an organization.
   *
   * @tags Organizations
   * @name GetOrgLogo
   * @summary Retrieves an organization's logo
   * @request GET:/rest/organizations/{id}/logos
   * @secure */
  getOrgLogo = (id: number, params: RequestParams = {}) =>
    this.request<OrganizationLogoModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/logos`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationLogoModel,
    ) as OrganizationLogoModel;

  /**
   * @description Create or Update a logo for an organization.
   *
   * @tags Organizations
   * @name CreateUpdateLogo
   * @summary Updates an organization's logo
   * @request PUT:/rest/organizations/{id}/logos
   * @secure */
  createUpdateLogo = (id: number, data: OrganizationLogoModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  deleteLogo = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  get26 = (
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
      name?: string;
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/organizations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    ) as OrganizationPagedResponse;

  /**
   * @description Creates a new organization.
   *
   * @tags Organizations
   * @name Create22
   * @summary Creates organization
   * @request POST:/rest/organizations
   * @secure */
  create22 = (data: OrganizationCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/organizations`,
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
   * @description Retrieves the addresses associated with an organization.
   *
   * @tags Organizations
   * @name GetAddresses
   * @summary Retrieves organization addresses
   * @request GET:/rest/organizations/{id}/addresses
   * @secure */
  getAddresses = (id: number, params: RequestParams = {}) =>
    this.request<OrganizationAddressModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/addresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationAddressModel,
    ) as OrganizationAddressModel;

  /**
   * @description Creates a new organization address.
   *
   * @tags Organizations
   * @name CreateAddress
   * @summary Creates organization address
   * @request POST:/rest/organizations/{id}/addresses
   * @secure */
  createAddress = (id: number, data: OrganizationAddressCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/addresses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getContacts = (
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
    this.request<OrganizationContactSummaryPagedResponse[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationContactSummaryPagedResponse,
    ) as OrganizationContactSummaryPagedResponse;

  /**
   * @description Creates a new organization contact.
   *
   * @tags Organizations
   * @name CreateContact
   * @summary Creates organization contact
   * @request POST:/rest/organizations/{id}/contacts
   * @secure */
  createContact = (id: number, data: ContactCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/contacts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  getCustomerProfilesByOrganization = (
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
    this.request<CustomerProfilePagedResponse, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/customer-profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CustomerProfilePagedResponse,
    ) as CustomerProfilePagedResponse;

  /**
   * @description Adds a customer profile to an organization.
   *
   * @tags Organizations
   * @name CreateCustomerProfile
   * @summary Creates customer profile
   * @request POST:/rest/organizations/{id}/customer-profiles
   * @secure */
  createCustomerProfile = (id: number, data: CustomerProfileCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/customer-profiles`,
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
   * @description Retrieves a paged list of vendor profiles for an Organization.
   *
   * @tags Organizations
   * @name GetVendorProfilesByOrganization
   * @summary Retrieves organization vendor profiles
   * @request GET:/rest/organizations/{id}/vendor-profiles
   * @secure */
  getVendorProfilesByOrganization = (
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
    this.request<VendorProfilePagedResponse, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/vendor-profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      VendorProfilePagedResponse,
    ) as VendorProfilePagedResponse;

  /**
   * @description Adds a vendor profile to an existing organization.
   *
   * @tags Organizations
   * @name CreateVendorProfileOnOrganization
   * @summary Creates vendor profile
   * @request POST:/rest/organizations/{id}/vendor-profiles
   * @secure */
  createVendorProfileOnOrganization = (id: number, data: VendorProfileCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/vendor-profiles`,
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
   * @description Retrieves an organization by id.
   *
   * @tags Organizations
   * @name GetByKey25
   * @summary Retrieves an organization
   * @request GET:/rest/organizations/{id}
   * @secure */
  getByKey25 = (id: number, params: RequestParams = {}) =>
    this.request<OrganizationModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationModel,
    ) as OrganizationModel;

  /**
   * @description Updates an existing organization matching id. 'id' parameter must match the 'organization' model 'key' field.
   *
   * @tags Organizations
   * @name Update22
   * @summary Updates organization
   * @request PUT:/rest/organizations/{id}
   * @secure */
  update22 = (id: number, data: OrganizationModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  delete19 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAddress = (id: number, addressId: number, params: RequestParams = {}) =>
    this.request<OrganizationAddressModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/addresses/${addressId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      OrganizationAddressModel,
    ) as OrganizationAddressModel;

  /**
   * @description Updates an existing organization address matching addressId. 'id' parameter must match the 'organization' key field and 'addressId' parameter must match the 'Organizationaddress' model 'key' field
   *
   * @tags Organizations
   * @name UpdateAddress
   * @summary Updates organization address
   * @request PUT:/rest/organizations/{id}/addresses/{addressId}
   * @secure */
  updateAddress = (id: number, addressId: number, data: OrganizationAddressModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/addresses/${addressId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteAddress = (id: number, addressId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getContact = (id: number, contactId: number, params: RequestParams = {}) =>
    this.request<ContactModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/contacts/${contactId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ContactModel,
    ) as ContactModel;

  /**
   * @description Updates an existing organization contact matching contactId. 'id' parameter must match the 'organization' key field and 'contactId' parameter must match the 'contact' model 'key' field
   *
   * @tags Organizations
   * @name UpdateContact
   * @summary Updates organization contact
   * @request PUT:/rest/organizations/{id}/contacts/{contactId}
   * @secure */
  updateContact = (id: number, contactId: number, data: ContactModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/contacts/${contactId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteContact = (id: number, contactId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getCustomerProfile = (id: number, profileId: number, params: RequestParams = {}) =>
    this.request<CustomerProfileModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/customer-profiles/${profileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CustomerProfileModel,
    ) as CustomerProfileModel;

  /**
   * @description Updates an existing customer profile.
   *
   * @tags Organizations
   * @name UpdateCustomerProfile
   * @summary Updates organization
   * @request PUT:/rest/organizations/{id}/customer-profiles/{profileId}
   * @secure */
  updateCustomerProfile = (id: number, profileId: number, data: CustomerProfileModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/customer-profiles/${profileId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteCustomerProfile = (id: number, profileId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getVendorProfileByOrganization = (id: number, vendorProfileId: number, params: RequestParams = {}) =>
    this.request<VendorProfileModel, ErrorResponse>(
      {
        path: `/rest/organizations/${id}/vendor-profiles/${vendorProfileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      VendorProfileModel,
    ) as VendorProfileModel;

  /**
   * @description Updates an existing vendor profile for an organization.
   *
   * @tags Organizations
   * @name UpdateVendorProfileOnOrganization
   * @summary Updates vendor profile
   * @request PUT:/rest/organizations/{id}/vendor-profiles/{vendorProfileId}
   * @secure */
  updateVendorProfileOnOrganization = (
    id: number,
    vendorProfileId: number,
    data: VendorProfileModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/organizations/${id}/vendor-profiles/${vendorProfileId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
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
  deleteVendorProfileFromOrganization = (id: number, vendorProfileId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
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
  getAccountCategories = (params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/organizations/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    ) as AccountCategoryModel;

  /**
   * @description This route has been deprecated in favor of /rest/organizations/account-categories. Retrieves a list of available account categories for an organization.
   *
   * @tags Organizations
   * @name GetAccountCategories1
   * @summary Retrieves a list of account categories. Note this route has been deprecated in favor of /rest/organizations/account-categories
   * @request GET:/rest/organizations/{id}/account-categories
   * @deprecated
   * @secure */
  getAccountCategories1 = (id: number, params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    ) as AccountCategoryModel;

  /**
   * @description Retrieves a list of the accounts associated with an organization (summarized data).
   *
   * @tags Organizations
   * @name GetAccounts
   * @summary Retrieves a list of organization accounts
   * @request GET:/rest/organizations/{id}/accounts
   * @secure */
  getAccounts = (
    id: number,
    query?: {
      category?: GetAccountsParamsCategoryEnum;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryAccountModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      CategoryAccountModel,
    ) as CategoryAccountModel;

  /**
   * @description Retrieves a list of activation approvers for all vendor profiles of an organization.
   *
   * @tags Organizations
   * @name GetVendorProfileActivationApprovers
   * @summary Retrieves activation approvers
   * @request GET:/rest/organizations/{id}/activation-approvers
   * @secure */
  getVendorProfileActivationApprovers = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/activation-approvers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Retrieves a list of simple organization data filtered by active status.
   *
   * @tags Organizations
   * @name List1
   * @summary Retrieves organization list
   * @request GET:/rest/organizations/list
   * @secure */
  list1 = (
    query?: {
      /** @default true */
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<KeyNameCodeModel[], ErrorResponse>(
      {
        path: `/rest/organizations/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModel,
    ) as KeyNameCodeModel;

  /**
   * @description Retrieves a list of simple contact data filtered by active status.
   *
   * @tags Organizations
   * @name ListContacts
   * @summary Retrieves contact list
   * @request GET:/rest/organizations/{id}/contacts/list
   * @secure */
  listContacts = (
    id: number,
    query?: {
      active?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ContactBaseModel[], ErrorResponse>(
      {
        path: `/rest/organizations/${id}/contacts/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ContactBaseModel,
    ) as ContactBaseModel;

  /**
   * @description Retrieves a paged list of organizations filtered by optional search criteria
   *
   * @tags Organizations
   * @name Search10
   * @summary Retrieves organizations
   * @request POST:/rest/organizations/search
   * @secure */
  search10 = (
    data: OrganizationSearchModel,
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
    this.request<OrganizationPagedResponse, ErrorResponse>(
      {
        path: `/rest/organizations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      OrganizationPagedResponse,
    ) as OrganizationPagedResponse;
}
