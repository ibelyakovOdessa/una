"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.ContentType = void 0;
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)(pino_1.default.transport({
    target: 'pino-pretty',
    options: { colorize: true }
}));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "https://autoaur254.int.unanet.io/platform";
        this.securityData = null;
        this.abortControllers = new Map();
        this.customFetch = (...fetchParams) => fetch(...fetchParams);
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.Text]: (input) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(key, property instanceof Blob
                    ? property
                    : typeof property === "object" && property !== null
                        ? JSON.stringify(property)
                        : `${property}`);
                return formData;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
            HttpClient.requestNum++;
            const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            const responseFormat = format || requestParams.format;
            const url = `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`;
            logger.info(`[${HttpClient.requestNum}] Request: ` + params.method + " " + url);
            if (body) {
                logger.info('Payload: \n' + JSON.stringify(body, null, 2));
            }
            return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                },
                signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response.clone();
                r.data = null;
                r.error = null;
                const data = !responseFormat
                    ? r
                    : await response[responseFormat]()
                        .then((data) => {
                        if (r.ok) {
                            r.data = data;
                        }
                        else {
                            r.error = data;
                        }
                        return r;
                    })
                        .catch((e) => {
                        r.error = e;
                        return r;
                    });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok) {
                    logger.info(`[${HttpClient.requestNum}] Response: ${data.status} \n` + JSON.stringify(data, null, 2));
                    return data.error;
                }
                else {
                    logger.info(`[${HttpClient.requestNum}] Response: ${data.status}`);
                    return data.data;
                }
                // return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
exports.HttpClient = HttpClient;
HttpClient.requestNum = 0;
