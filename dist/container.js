"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = api;
exports.factories = factories;
exports.fff = fff;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const TestApiClient_1 = require("./TestApiClient");
const PaymentTermFactory_1 = require("./factories/PaymentTerms/PaymentTermFactory");
const FactoriesFacade_1 = require("./factories/FactoriesFacade");
tsyringe_1.container.registerSingleton(TestApiClient_1.TestApiClient, TestApiClient_1.TestApiClient);
tsyringe_1.container.registerSingleton(FactoriesFacade_1.FactoriesFacade, FactoriesFacade_1.FactoriesFacade);
tsyringe_1.container.registerSingleton(PaymentTermFactory_1.PaymentTermFactory, PaymentTermFactory_1.PaymentTermFactory);
function api() {
    return tsyringe_1.container.resolve(TestApiClient_1.TestApiClient);
}
function factories() {
    return tsyringe_1.container.resolve(FactoriesFacade_1.FactoriesFacade);
}
function fff() {
    return tsyringe_1.container.resolve(PaymentTermFactory_1.PaymentTermFactory);
}
