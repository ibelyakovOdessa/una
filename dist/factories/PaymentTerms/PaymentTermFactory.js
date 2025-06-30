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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTermFactory = void 0;
const tsyringe_1 = require("tsyringe");
const PaymentTermEntity_1 = require("../../entities/PaymentTerms/PaymentTermEntity");
const TestApiClient_1 = require("../../TestApiClient");
let PaymentTermFactory = class PaymentTermFactory {
    constructor(api) {
        this.api = api;
    }
    async create(overrides = {}) {
        return new PaymentTermEntity_1.PaymentTermEntity(overrides.key ?? null, overrides.code ?? Math.random().toString(36).substring(0, 25), overrides.description ?? Math.random().toString(36).substring(0, 128), overrides.days ?? Math.floor(Math.random() * 1000), overrides.defaultSelected ?? false, overrides.active ?? true, overrides.days ?? 1, overrides.discountPercent ?? overrides.days ?? 10, overrides.payWhenPaid ?? false);
    }
};
exports.PaymentTermFactory = PaymentTermFactory;
exports.PaymentTermFactory = PaymentTermFactory = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(TestApiClient_1.TestApiClient)),
    __metadata("design:paramtypes", [TestApiClient_1.TestApiClient])
], PaymentTermFactory);
