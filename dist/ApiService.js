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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const tsyringe_1 = require("tsyringe");
const PaymentTerms_1 = require("./generated_api/PaymentTerms");
// import { PaymentTerms } from "./generated_api/PaymentTerms";
const People_1 = require("./generated_api/People");
let ApiService = class ApiService {
    constructor(token) {
        this.apiConfig = {
            securityWorker: () => ({
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        };
        this.people = new People_1.People(this.apiConfig);
        this.paymentTerms = new PaymentTerms_1.PaymentTerms(this.apiConfig);
    }
    setToken(token) {
        this.apiConfig.securityWorker = () => ({ headers: { Authorization: `Bearer ${token}` } });
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [String])
], ApiService);
