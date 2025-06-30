"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTermEntity = void 0;
class PaymentTermEntity {
    constructor(key = null, code = null, description = null, days = null, defaultSelected = null, active = null, discountDays = null, discountPercent = null, payWhenPaid = null) {
        this.key = key;
        this.code = code;
        this.description = description;
        this.days = days;
        this.defaultSelected = defaultSelected;
        this.active = active;
        this.discountDays = discountDays;
        this.discountPercent = discountPercent;
        this.payWhenPaid = payWhenPaid;
    }
    toDto() {
        return {
            code: this.code,
            description: this.description,
            days: this.days,
            defaultSelected: this.defaultSelected,
            active: this.active,
            discountDays: this.discountDays,
            payWhenPaid: this.payWhenPaid
        };
    }
    static fromDto(dto) {
        return new PaymentTermEntity(dto.key ?? null, dto.code ?? null, dto.description ?? null, dto.days ?? null, dto.defaultSelected ?? null, dto.active ?? null, dto.discountDays ?? null, dto.discountPercent ?? null, dto.payWhenPaid ?? null);
    }
}
exports.PaymentTermEntity = PaymentTermEntity;
