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

import { AttachmentCreateModel, ErrorResponse, ScanResult } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Scan<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Scans a receipt and extracts data lines.
   *
   * @tags Scan
   * @name ScanReceipt
   * @summary Scan and extract a receipt.
   * @request POST:/rest/scan/receipt
   * @secure */
  scanReceipt = (data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<ScanResult, ErrorResponse>(
      {
        path: `/rest/scan/receipt`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ScanResult,
    ) as ScanResult;
}
