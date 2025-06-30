"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestApiClient = void 0;
require("reflect-metadata");
const ApiService_1 = require("./ApiService");
const dotenv_1 = __importDefault(require("dotenv"));
const tsyringe_1 = require("tsyringe");
dotenv_1.default.config();
let TestApiClient = class TestApiClient {
    constructor() {
        this.api = new ApiService_1.ApiService();
    }
    async loginBy(username) {
        // const authSerivce = new Authentication()
        // const response = await authSerivce.login({
        //     username: username,
        //     password: process.env.PASSWORD,
        // },
        // {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-Una-App': 'WEBAPP'
        //     }
        // })
        // // expect(response).toBe(UserTokenModel)
        // // const body = await response
        // if (!response.token) {
        //     throw new Error("Authenthication error");
        // }
        // this.api = new ApiService(response.token)
        // // return new TestApiClient(response.token); // initialize test api client
    }
    getApi() {
        return this.api;
    }
};
exports.TestApiClient = TestApiClient;
exports.TestApiClient = TestApiClient = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], TestApiClient);
