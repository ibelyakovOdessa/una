"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_1 = __importDefault(require("playwright/test"));
const container_1 = require("../container");
(0, test_1.default)('second test', async ({ request }) => {
    await (0, container_1.api)().loginBy("admin");
    const a = await (0, container_1.api)().getApi().paymentTerms.get28();
    console.log(a);
    // const b = PaymentTermEntity.fromDto(a.items[0])
    // console.log(b)
    const c = await (0, container_1.fff)().create();
    console.log(c);
});
