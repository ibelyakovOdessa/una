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
exports.CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum = exports.CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum = exports.CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum = exports.CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum = exports.CostPlusInvoiceSectionFormatCreateModelTypeEnum = exports.CostElementModelTypeEnum = exports.ContractModelSecurityClearanceEnum = exports.ContractModelBusinessSizeClassificationEnum = exports.ContractModelScaRateFlagEnum = exports.ContractModelPrimeOrSubEnum = exports.ContractListModelSecurityClearanceEnum = exports.ContractListModelBusinessSizeClassificationEnum = exports.ContractListModelScaRateFlagEnum = exports.ContractListModelPrimeOrSubEnum = exports.ContractFundingAllocationModelCalculationMethodEnum = exports.ContractCreateModelSecurityClearanceEnum = exports.ContractCreateModelBusinessSizeClassificationEnum = exports.ContractCreateModelScaRateFlagEnum = exports.ContractCreateModelPrimeOrSubEnum = exports.CategoryAccountModelCategoryEnum = exports.CategoryAccountKeyModelCategoryEnum = exports.BillingTypeModelTypeEnum = exports.BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum = exports.BankAccountModelTypeEnum = exports.AuditDataSearchModelUpdateSuppressionTypeEnum = exports.AuditDataSearchModelCategoriesEnum = exports.AssignmentDefaultsModelBillRateSourceEnum = exports.AssignmentDefaultsModelCostRateSourceEnum = exports.AssigningMatrixSearchModelUnitTypeEnum = exports.AssigningMatrixSearchCriteriaReadModelDashboardsEnum = exports.AssigningMatrixSearchCriteriaReadModelUnitTypeEnum = exports.AssigningMatrixSearchCriteriaModelUnitTypeEnum = exports.AssignablePlannedTimeSearchModelUnitTypeEnum = exports.AssignablePlannedTimeModelCostRateSourceEnum = exports.AssignablePlannedTimeModelBillRateSourceEnum = exports.ApproverAlternateModelApprovalTypesEnum = exports.ApprovalGroupSearchModelApprovalGroupTypesEnum = exports.ApprovalGroupModelTypeEnum = exports.ApprovalGroupCreateModelTypeEnum = exports.AlertPrefsModelTotalBillAlertDenomEnum = exports.AlertPrefsModelExpenseCostAlertDenomEnum = exports.AlertPrefsModelLaborCostAlertDenomEnum = exports.AlertPrefsModelTotalCostAlertDenomEnum = exports.AlertPrefsModelHoursAlertDenomEnum = exports.AccountSourceSupplierModelSupplierEnum = exports.AccountSourceSupplierModelAccountSourceEnum = exports.AccountModelTypeEnum = exports.AccountExpenseTypeModelTypeEnum = exports.AccountCategoryModelCategoryEnum = exports.IntegrationUserType = void 0;
exports.FinancialDocumentStatusHistoryModelStatusEnum = exports.ExpenseTypeSummaryModelWizardTypeEnum = exports.ExpenseTypeModelWizardTypeEnum = exports.ExpenseStatusHistoryModelStatusEnum = exports.ExpenseSearchModelVoucherTypeEnum = exports.ExpenseSearchModelStatusesEnum = exports.ExpenseModelVoucherTypeEnum = exports.ExpenseModelStatusEnum = exports.ExpenseLineModelLineTypeEnum = exports.ExpenseInvoiceSectionFormatModelCol4FieldEnum = exports.ExpenseInvoiceSectionFormatModelCol3FieldEnum = exports.ExpenseInvoiceSectionFormatModelCol2FieldEnum = exports.ExpenseInvoiceSectionFormatModelCol1FieldEnum = exports.ExpenseInvoiceSectionFormatModelTypeEnum = exports.ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum = exports.ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum = exports.ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum = exports.ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum = exports.ExpenseInvoiceSectionFormatCreateModelTypeEnum = exports.ExpenseCreateModelVoucherTypeEnum = exports.ExpenseBaseModelVoucherTypeEnum = exports.ExpenseBaseModelStatusEnum = exports.ErrorResponseCodeEnum = exports.ErrorInstanceCodeEnum = exports.EntertainmentWizardModelTookPlaceEnum = exports.EmailTemplateModelTypeEnum = exports.DepositSummaryModelStatusEnum = exports.DepositSummaryModelDocumentTypeEnum = exports.DepositSearchModelStatusesEnum = exports.DataLakeCriteriaFieldsModelPeriodTypeEnum = exports.DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum = exports.DashboardTypePagedResponseItemsEnum = exports.CustomerPaymentSearchModelStatusesEnum = exports.CustomerPaymentModelStatusEnum = exports.CustomerPaymentModelDocumentTypeEnum = exports.CustomerPaymentIncludedModelIncludedDocumentTypeEnum = exports.CustomLinkModelApplicationTypeEnum = exports.CustomLinkModelLinkTypeEnum = exports.CustomLinkListModelApplicationTypeEnum = exports.CustomLinkListModelLinkTypeEnum = exports.CostStructPoolRateUpdateModelRateTypeEnum = exports.CostStructPoolRateModelRateTypeEnum = exports.CostReportElementModelValueFormatEnum = exports.CostPlusInvoiceSectionFormatModelQuantityToShowEnum = exports.CostPlusInvoiceSectionFormatModelCol4FieldEnum = exports.CostPlusInvoiceSectionFormatModelCol3FieldEnum = exports.CostPlusInvoiceSectionFormatModelCol2FieldEnum = exports.CostPlusInvoiceSectionFormatModelCol1FieldEnum = exports.CostPlusInvoiceSectionFormatModelTypeEnum = exports.CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum = void 0;
exports.InvoiceStatusHistoryModelStatusEnum = exports.InvoiceModelStatusEnum = exports.InvoiceModelInvoiceOptionEnum = exports.InvoiceListModelInvoiceOptionEnum = exports.InvoiceFormatModelTaskGroupLevelEnum = exports.InvoiceFormatCreateModelTaskGroupLevelEnum = exports.IntegrationValueModelTypeEnum = exports.IntegrationUserSearchModelIntegrationUserTypeEnum = exports.ImportedExpenseSearchModelStatusEnum = exports.ImportErrorModelErrorCodeEnum = exports.ImportDefinitionColumnModelTypeEnum = exports.FundingAllocationFundedProjectLaborFundingOptionEnum = exports.FundingAllocationFundedProjectItemFundingOptionEnum = exports.FundingAllocationFundedProjectExpenseFundingOptionEnum = exports.FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum = exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum = exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum = exports.FundedProjectLaborFundingOptionEnum = exports.FundedProjectItemFundingOptionEnum = exports.FundedProjectExpenseFundingOptionEnum = exports.FixedPriceItemModelRevenueRecognitionMethodEnum = exports.FixedPriceItemCreateModelRevenueRecognitionMethodEnum = exports.FixedPriceInvoiceSectionFormatModelCol4FieldEnum = exports.FixedPriceInvoiceSectionFormatModelCol3FieldEnum = exports.FixedPriceInvoiceSectionFormatModelCol2FieldEnum = exports.FixedPriceInvoiceSectionFormatModelCol1FieldEnum = exports.FixedPriceInvoiceSectionFormatModelTypeEnum = exports.FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum = exports.FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum = exports.FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum = exports.FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum = exports.FixedPriceInvoiceSectionFormatCreateModelTypeEnum = exports.FixedAssetSearchReadModelDashboardsEnum = exports.FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum = exports.FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum = exports.FixedAssetModelAveragingMethodEnum = exports.FixedAssetModelDepreciationMethodEnum = exports.FixedAssetModelDisposalTypeEnum = exports.FixedAssetJournalEntryModelCategoryEnum = exports.FixedAssetCreateModelAveragingMethodEnum = exports.FixedAssetCreateModelDepreciationMethodEnum = exports.FixedAssetCreateModelDisposalTypeEnum = exports.FixedAssetAlertModelFeatureEnum = void 0;
exports.PoItemLineFromApprovedCreateModelViOverageEnum = exports.PoItemLineCreateModelViOverageEnum = exports.PoFormatOptionsModelDetailLevelsEnum = exports.PoFormatOptionsModelDeliveryOptionEnum = exports.PoExpenseLineModelViOverageEnum = exports.PoExpenseLineModelLineTypeEnum = exports.PoExpenseLineFromApprovedCreateModelViOverageEnum = exports.PoExpenseLineCreateModelViOverageEnum = exports.PoDetailLineTypeEnum = exports.PoAlertPreferencesModelAlertLevelEnum = exports.OrganizationSummaryModelFederalTaxIdTypeEnum = exports.OrganizationModelFederalTaxIdTypeEnum = exports.OrganizationCreateModelFederalTaxIdTypeEnum = exports.OrgAccessPersonSearchModelOrgAccessTypeEnum = exports.OnetimeInvoiceSectionFormatModelCol4FieldEnum = exports.OnetimeInvoiceSectionFormatModelCol3FieldEnum = exports.OnetimeInvoiceSectionFormatModelCol2FieldEnum = exports.OnetimeInvoiceSectionFormatModelCol1FieldEnum = exports.OnetimeInvoiceSectionFormatModelTypeEnum = exports.OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum = exports.OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum = exports.OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum = exports.OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum = exports.OnetimeInvoiceSectionFormatCreateModelTypeEnum = exports.MileageRateSetModelUnitEnum = exports.MeTimesheetSearchModelSortOrderEnum = exports.MeTimesheetSearchModelAdjustmentStatusesEnum = exports.MeTimesheetSearchModelStatusesEnum = exports.MatrixPersonModelCurrentClassificationEnum = exports.LogMessageModelLevelEnum = exports.LeaveStatusHistoryModelStatusEnum = exports.LeaveRequestModelStatusEnum = exports.LaborInvoiceSectionFormatModelCol4FieldEnum = exports.LaborInvoiceSectionFormatModelCol3FieldEnum = exports.LaborInvoiceSectionFormatModelCol2FieldEnum = exports.LaborInvoiceSectionFormatModelCol1FieldEnum = exports.LaborInvoiceSectionFormatModelTypeEnum = exports.LaborInvoiceSectionFormatCreateModelCol4FieldEnum = exports.LaborInvoiceSectionFormatCreateModelCol3FieldEnum = exports.LaborInvoiceSectionFormatCreateModelCol2FieldEnum = exports.LaborInvoiceSectionFormatCreateModelCol1FieldEnum = exports.LaborInvoiceSectionFormatCreateModelTypeEnum = exports.JournalEntrySummaryModelStatusEnum = exports.JournalEntrySummaryModelDocumentTypeEnum = exports.JournalEntrySearchModelSortOrderEnum = exports.JournalEntrySearchModelStatusesEnum = exports.JournalEntryItemDetailModelDetailTypeEnum = exports.JournalEntryExpenseDetailModelDetailTypeEnum = exports.ItemModelBillByEnum = exports.ItemCreateModelBillByEnum = void 0;
exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum = exports.PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum = exports.PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum = exports.PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum = exports.PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum = exports.PrebilledLaborInvoiceSectionFormatModelTypeEnum = exports.PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum = exports.PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum = exports.PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum = exports.PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum = exports.PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum = exports.PostingGroupSourceModelOrganizationSourceEnum = exports.PostingGroupSourceModelAccountSourceTypeEnum = exports.PostingGroupSourceModelCategoryEnum = exports.PostingGroupModelTypeEnum = exports.PlanningMatrixSearchModelUnitTypeEnum = exports.PlanningMatrixSearchCriteriaReadModelDashboardsEnum = exports.PlanningMatrixSearchCriteriaReadModelUnitTypeEnum = exports.PlanningMatrixSearchCriteriaModelUnitTypeEnum = exports.PlannedTimeSearchModelSortOrderEnum = exports.PlannedTimeModelCostRateSourceEnum = exports.PlannedTimeModelBillRateSourceEnum = exports.PlannedTimeCreateModelCostRateSourceEnum = exports.PlannedTimeCreateModelBillRateSourceEnum = exports.PlanSetAuditModelEventEnum = exports.PlanDefaultsModelBillRateSourceEnum = exports.PlanDefaultsModelCostRateSourceEnum = exports.PersonSearchModelClassificationEnum = exports.PersonSearchModelApprovalTypesEnum = exports.PersonRateModelClassificationEnum = exports.PersonRateCreateModelClassificationEnum = exports.PersonRateBaseModelClassificationEnum = exports.PersonModelTitoRequiredEnum = exports.PersonCreateModelTitoRequiredEnum = exports.PaymentMethodModelArPaymentTypeEnum = exports.PaymentMethodModelApPaymentTypeEnum = exports.PayableVendorDocumentModelDocumentTypeEnum = exports.PayableCustomerDocumentModelDocumentTypeEnum = exports.PayCodeModelExemptUsageEnum = exports.PaidVendorDocumentModelDocumentTypeEnum = exports.PaidCustomerDocumentModelDocumentTypeEnum = exports.PrLaborLineModelLineTypeEnum = exports.PrItemLineModelLineTypeEnum = exports.PrExpenseLineModelLineTypeEnum = exports.PoLaborLineModelViOverageEnum = exports.PoLaborLineModelLineTypeEnum = exports.PoLaborLineFromApprovedCreateModelViOverageEnum = exports.PoLaborLineCreateModelViOverageEnum = exports.PoItemLineModelViOverageEnum = exports.PoItemLineModelLineTypeEnum = void 0;
exports.ProjectUpdateModelCostRateSourceEnum = exports.ProjectUpdateModelBillRateSourceEnum = exports.ProjectUpdateModelTitoRequiredEnum = exports.ProjectUpdateModelAllowSelfPlanEnum = exports.ProjectUpdateModelPctComplRuleEnum = exports.ProjectUpdateModelProjectColorEnum = exports.ProjectPeopleAssignmentSearchModelClassificationEnum = exports.ProjectModelUseLaborCategoryEnum = exports.ProjectModelCostRateSourceEnum = exports.ProjectModelBillRateSourceEnum = exports.ProjectModelTitoRequiredEnum = exports.ProjectModelAllowSelfPlanEnum = exports.ProjectModelPctComplRuleEnum = exports.ProjectModelProjectColorEnum = exports.ProjectItemUpdateModelBillByEnum = exports.ProjectInvoiceModelDeliveryOptionEnum = exports.ProjectInvoiceModelInvoiceOptionEnum = exports.ProjectInvoiceCreateModelDeliveryOptionEnum = exports.ProjectInvoiceCreateModelInvoiceOptionEnum = exports.ProjectFeeModelFeeFactorTypeEnum = exports.ProjectFeeCreateModelFeeFactorTypeEnum = exports.ProjectCreateModelUseLaborCategoryEnum = exports.ProjectCreateModelCostRateSourceEnum = exports.ProjectCreateModelBillRateSourceEnum = exports.ProjectCreateModelTitoRequiredEnum = exports.ProjectCreateModelAllowSelfPlanEnum = exports.ProjectCreateModelPctComplRuleEnum = exports.ProjectCreateModelProjectColorEnum = exports.ProjectControllerModelApprovalTypeEnum = exports.ProjectContractModelColorEnum = exports.ProjectBudgetHistoryModelPctComplRuleEnum = exports.ProjectAssignmentUpdateModelCostRateSourceEnum = exports.ProjectAssignmentUpdateModelBillRateSourceEnum = exports.ProjectAssignmentModelCostRateSourceEnum = exports.ProjectAssignmentModelBillRateSourceEnum = exports.ProjectAssignmentCreateModelCostRateSourceEnum = exports.ProjectAssignmentCreateModelBillRateSourceEnum = exports.ProjectApproverUpdateModelApprovalTypeEnum = exports.ProjectApproverModelApprovalTypeEnum = exports.ProjectAlertsModelTypeEnum = exports.ProjectAlertPrefsModelStateEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum = exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum = void 0;
exports.TaxInvoiceSectionFormatCreateModelCol1FieldEnum = exports.TaxInvoiceSectionFormatCreateModelTypeEnum = exports.TaskUpdateModelAllowItemsEnum = exports.TaskUpdateModelExpSubPoRequiredEnum = exports.TaskUpdateModelAllowExpenseEnum = exports.TaskUpdateModelTsSubPoRequiredEnum = exports.TaskUpdateModelAllowTimeEnum = exports.TaskMoveModelRelativePositionEnum = exports.TaskModelAllowItemsEnum = exports.TaskModelExpSubPoRequiredEnum = exports.TaskModelAllowExpenseEnum = exports.TaskModelTsSubPoRequiredEnum = exports.TaskModelAllowTimeEnum = exports.TaskDependencyModelTypeEnum = exports.TaskDependencyCreateModelTypeEnum = exports.TaskCreateModelExpSubPoRequiredEnum = exports.TaskCreateModelTsSubPoRequiredEnum = exports.TaskCreateModelAllowItemsEnum = exports.TaskCreateModelAllowExpenseEnum = exports.TaskCreateModelAllowTimeEnum = exports.SectionFilterTypeEnum = exports.SchedulingPersonSearchModelClassificationEnum = exports.SchedulingPersonSearchModelApprovalTypesEnum = exports.ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum = exports.ReceivingDocumentSearchModelStatusesEnum = exports.ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum = exports.ReceivingDocumentSearchModelDocumentNumberPredicateEnum = exports.ReceivingDocumentModelStatusEnum = exports.PurchasingBalanceModelStatusEnum = exports.PurchasingApprovalHistoryModelStatusEnum = exports.PurchaseRequisitionSummaryModelDocumentStatusEnum = exports.PurchaseRequisitionSearchModelDocumentStatusEnum = exports.PurchaseRequisitionOrigCreateModelAmountControlEnum = exports.PurchaseRequisitionModelAmountControlEnum = exports.PurchaseRequisitionModelStatusEnum = exports.PurchaseRequisitionModCreateModelAmountControlEnum = exports.PurchaseOrderSummaryModelStatusEnum = exports.PurchaseOrderSummaryModelDocumentStatusEnum = exports.PurchaseOrderSearchModelOriginalDocumentStatusEnum = exports.PurchaseOrderSearchModelDocumentStatusEnum = exports.PurchaseOrderSearchModelAssignmentTypeEnum = exports.PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum = exports.PurchaseOrderSearchModelDocumentNumberPredicateEnum = exports.PurchaseOrderModelViOverageEnum = exports.PurchaseOrderModelStatusEnum = exports.PurchaseOrderModModelViOverageEnum = exports.PurchaseOrderModModelStatusEnum = exports.PurchaseOrderModCreateModelViOverageEnum = exports.PurchaseOrderCreateModelViOverageEnum = exports.ProjectUpdateModelUseLaborCategoryEnum = void 0;
exports.VendorPaymentSearchModelStatusesEnum = exports.VendorPaymentModelStatusEnum = exports.VendorPaymentModelDocumentTypeEnum = exports.VendorPaymentIncludedModelDocumentTypeEnum = exports.VendorInvoiceSummaryModelStatusEnum = exports.VendorInvoiceSummaryModelDocumentTypeEnum = exports.VendorInvoiceSummaryListModelStatusEnum = exports.VendorInvoiceSummaryListModelDocumentTypeEnum = exports.VendorInvoiceSearchModelSortOrderEnum = exports.VendorInvoiceSearchModelStatusesEnum = exports.VendorInvoiceSearchModelReferencePredicateEnum = exports.VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum = exports.VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum = exports.VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum = exports.VendorInvoiceLaborProjectModelUseLaborCategoryEnum = exports.VendorInvoiceLaborModelPwpMatchingTypeEnum = exports.VendorInvoiceItemModelPwpMatchingTypeEnum = exports.VendorInvoiceFormatSectionTotalGroupModelTypeEnum = exports.VendorInvoiceFormatSectionModelCol4FieldEnum = exports.VendorInvoiceFormatSectionModelCol3FieldEnum = exports.VendorInvoiceFormatSectionModelCol2FieldEnum = exports.VendorInvoiceFormatSectionModelCol1FieldEnum = exports.VendorInvoiceFormatSectionModelTypeEnum = exports.VendorInvoiceExpenseModelPwpMatchingTypeEnum = exports.UdfMetadataModelVisibilityEnum = exports.UdfMetadataModelDataTypeEnum = exports.TimesheetUpdateModelLastDrawerStateEnum = exports.TimesheetSearchModelSortOrderEnum = exports.TimesheetSearchModelAdjustmentStatusesEnum = exports.TimesheetSearchModelStatusesEnum = exports.TimesheetProjectModelTitoRequiredEnum = exports.TimesheetProjectModelUseLaborCategoryEnum = exports.TimesheetOwnerModelTitoRequiredEnum = exports.TimesheetModelLastDrawerStateEnum = exports.TimesheetModelAdjustmentStatusEnum = exports.TimesheetModelStatusEnum = exports.TimesheetListModelAdjustmentStatusEnum = exports.TimesheetListModelStatusEnum = exports.TimeStatusHistoryModelAdjustmentStatusEnum = exports.TimeStatusHistoryModelStatusEnum = exports.TimePeriodSetupModelTypeEnum = exports.TimePeriodSetupCreateModelTypeEnum = exports.TaxInvoiceSectionFormatModelCol4FieldEnum = exports.TaxInvoiceSectionFormatModelCol3FieldEnum = exports.TaxInvoiceSectionFormatModelCol2FieldEnum = exports.TaxInvoiceSectionFormatModelCol1FieldEnum = exports.TaxInvoiceSectionFormatModelTypeEnum = exports.TaxInvoiceSectionFormatCreateModelCol4FieldEnum = exports.TaxInvoiceSectionFormatCreateModelCol3FieldEnum = exports.TaxInvoiceSectionFormatCreateModelCol2FieldEnum = void 0;
exports.UpdateSourcesParamsCategoryEnum = exports.Get31ParamsTypeEnum = exports.DeleteMatrixSharedCriteriaFamilyEnum = exports.DeleteMatrixListCriteriaFamilyEnum = exports.UpdateMatrixListCriteriaByKeyParamsDashboardEnum = exports.CreateMatrixListCriteriaParamsDashboardEnum = exports.GetCurrentClassificationEnum = exports.GetAccountsParamsCategoryEnum = exports.GetMileageRateSetsParamsUnitEnum = exports.AdjustmentsParamsTypeEnum = exports.MeTimeParamsSortOrderEnum = exports.MyLeaveRequestsParamsSortOrderEnum = exports.MyLeaveRequestsParamsStatusEnum = exports.MeExpenseParamsVoucherTypeEnum = exports.MeExpenseParamsStatusEnum = exports.LeaveRequestsParamsStatusEnum = exports.DeleteIntegrationValuesParamsEnum = exports.DeleteIntegrationValuesParamsTypeEnum = exports.GetIntegrationValueByKeyParamsEnum = exports.GetIntegrationValueByKeyParamsTypeEnum = exports.CreateIntegrationValueParamsEnum = exports.CreateIntegrationValueParamsTypeEnum = exports.GetIntegrationValuesParamsEnum = exports.GetIntegrationValuesParamsTypeEnum = exports.GetJournalEntriesByFixedAssetParamsCategoryEnum = exports.DeleteFixedAssetListCriteriaFamilyEnum = exports.UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum = exports.CreateFixedAssetListCriteriaParamsDashboardEnum = exports.Get15ParamsWizardTypeEnum = exports.GetProjectsByOwnerKeyParamsVoucherTypeEnum = exports.GetEmailTemplatesParamsTypeEnum = exports.Delete7FamilyEnum = exports.Get12ParamsLinkTypeEnum = exports.DeletePaidDocumentParamsEnum = exports.DeletePaidDocumentParamsTypeEnum = exports.GetPaidDocumentParamsEnum = exports.GetPaidDocumentParamsTypeEnum = exports.Get6ParamsTitlePredicateEnum = exports.Get6ParamsDescriptionPredicateEnum = exports.Get6ParamsClauseNumberPredicateEnum = exports.UdfMetadataParamsEnum = exports.UdfMetadataParamsTypeEnum = exports.GetLogoByTypeParamsLogoTypeEnum = exports.SearchAndDownloadFamilyEnum = exports.DeleteAssigningSharedCriteriaFamilyEnum = exports.DeleteAssigningListCriteriaFamilyEnum = exports.UpdateAssigningListCriteriaByKeyParamsDashboardEnum = exports.CreateAssigningListCriteriaParamsDashboardEnum = exports.Get1ParamsApprovalGroupTypeEnum = exports.GetParamsTypeEnum = void 0;
exports.GetMatchedLaborParamsSortByEnum = exports.GetMatchedItemsParamsSortByEnum = exports.GetMatchedExpensesParamsSortByEnum = exports.Adjustments1ParamsTypeEnum = exports.GetAttachment10ParamsTypeEnum = exports.GetByKey35ParamsTypeEnum = exports.GetLaborLinesForPrParamsTypeEnum = exports.GetItemLinesForPrParamsTypeEnum = exports.GetExpenseLinesForPrParamsTypeEnum = exports.GetAttachments7ParamsTypeEnum = exports.GetReportByKeyParamsTypeEnum = exports.GetReportByKeyParamsDetailLevelEnum = exports.GetLaborLinesHistoryForPoParamsTypeEnum = exports.GetItemLinesHistoryForPoParamsTypeEnum = exports.GetExpenseLinesHistoryForPoParamsTypeEnum = exports.GetAttachment9ParamsTypeEnum = exports.GetByKey33ParamsTypeEnum = exports.GetLaborLinesForPoParamsTypeEnum = exports.GetLaborLinesForPoParamsStateEnum = exports.GetItemLinesForPoParamsTypeEnum = exports.GetItemLinesForPoParamsStateEnum = exports.GetExpenseLinesForPoParamsTypeEnum = exports.GetExpenseLinesForPoParamsStateEnum = exports.GetAttachments6ParamsTypeEnum = exports.UpdateSourcesParamsEnum = void 0;
/** The type of integration user */
var IntegrationUserType;
(function (IntegrationUserType) {
    IntegrationUserType["VENDOR_INVOICE_AUTOMATION"] = "VENDOR_INVOICE_AUTOMATION";
    IntegrationUserType["PASSPORT_INTEGRATION_USER"] = "PASSPORT_INTEGRATION_USER";
})(IntegrationUserType || (exports.IntegrationUserType = IntegrationUserType = {}));
var AccountCategoryModelCategoryEnum;
(function (AccountCategoryModelCategoryEnum) {
    AccountCategoryModelCategoryEnum["BILLED"] = "BILLED";
    AccountCategoryModelCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    AccountCategoryModelCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    AccountCategoryModelCategoryEnum["TAX"] = "TAX";
    AccountCategoryModelCategoryEnum["UNBILLED"] = "UNBILLED";
    AccountCategoryModelCategoryEnum["LABOR_COST"] = "LABOR_COST";
    AccountCategoryModelCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    AccountCategoryModelCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    AccountCategoryModelCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    AccountCategoryModelCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    AccountCategoryModelCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    AccountCategoryModelCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    AccountCategoryModelCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    AccountCategoryModelCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    AccountCategoryModelCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    AccountCategoryModelCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    AccountCategoryModelCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    AccountCategoryModelCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    AccountCategoryModelCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    AccountCategoryModelCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    AccountCategoryModelCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    AccountCategoryModelCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    AccountCategoryModelCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    AccountCategoryModelCategoryEnum["NET_INCOME"] = "NET_INCOME";
    AccountCategoryModelCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    AccountCategoryModelCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    AccountCategoryModelCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    AccountCategoryModelCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    AccountCategoryModelCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    AccountCategoryModelCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    AccountCategoryModelCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    AccountCategoryModelCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    AccountCategoryModelCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    AccountCategoryModelCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    AccountCategoryModelCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    AccountCategoryModelCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    AccountCategoryModelCategoryEnum["PILOB"] = "PILOB";
    AccountCategoryModelCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    AccountCategoryModelCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    AccountCategoryModelCategoryEnum["DUE_TO"] = "DUE_TO";
    AccountCategoryModelCategoryEnum["DUE_FROM"] = "DUE_FROM";
    AccountCategoryModelCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    AccountCategoryModelCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    AccountCategoryModelCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    AccountCategoryModelCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    AccountCategoryModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    AccountCategoryModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    AccountCategoryModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    AccountCategoryModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    AccountCategoryModelCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    AccountCategoryModelCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(AccountCategoryModelCategoryEnum || (exports.AccountCategoryModelCategoryEnum = AccountCategoryModelCategoryEnum = {}));
var AccountExpenseTypeModelTypeEnum;
(function (AccountExpenseTypeModelTypeEnum) {
    AccountExpenseTypeModelTypeEnum["ASSET"] = "ASSET";
    AccountExpenseTypeModelTypeEnum["EXPENSE"] = "EXPENSE";
    AccountExpenseTypeModelTypeEnum["REVENUE"] = "REVENUE";
    AccountExpenseTypeModelTypeEnum["LIABILITY"] = "LIABILITY";
})(AccountExpenseTypeModelTypeEnum || (exports.AccountExpenseTypeModelTypeEnum = AccountExpenseTypeModelTypeEnum = {}));
var AccountModelTypeEnum;
(function (AccountModelTypeEnum) {
    AccountModelTypeEnum["ASSET"] = "ASSET";
    AccountModelTypeEnum["EXPENSE"] = "EXPENSE";
    AccountModelTypeEnum["REVENUE"] = "REVENUE";
    AccountModelTypeEnum["LIABILITY"] = "LIABILITY";
})(AccountModelTypeEnum || (exports.AccountModelTypeEnum = AccountModelTypeEnum = {}));
/** Account source. */
var AccountSourceSupplierModelAccountSourceEnum;
(function (AccountSourceSupplierModelAccountSourceEnum) {
    AccountSourceSupplierModelAccountSourceEnum["ORGANIZATION"] = "ORGANIZATION";
    AccountSourceSupplierModelAccountSourceEnum["PAY_CODE"] = "PAY_CODE";
    AccountSourceSupplierModelAccountSourceEnum["PAYMENT_METHOD"] = "PAYMENT_METHOD";
    AccountSourceSupplierModelAccountSourceEnum["PROJECT_TYPE"] = "PROJECT_TYPE";
    AccountSourceSupplierModelAccountSourceEnum["PROJECT"] = "PROJECT";
    AccountSourceSupplierModelAccountSourceEnum["TASK"] = "TASK";
    AccountSourceSupplierModelAccountSourceEnum["EMPLOYEE_TYPE"] = "EMPLOYEE_TYPE";
    AccountSourceSupplierModelAccountSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    AccountSourceSupplierModelAccountSourceEnum["COST_ELEMENT"] = "COST_ELEMENT";
    AccountSourceSupplierModelAccountSourceEnum["PERSON"] = "PERSON";
    AccountSourceSupplierModelAccountSourceEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    AccountSourceSupplierModelAccountSourceEnum["ADDITIONAL_ITEM_TYPE"] = "ADDITIONAL_ITEM_TYPE";
    AccountSourceSupplierModelAccountSourceEnum["FIXED_ASSET_CLASS"] = "FIXED_ASSET_CLASS";
})(AccountSourceSupplierModelAccountSourceEnum || (exports.AccountSourceSupplierModelAccountSourceEnum = AccountSourceSupplierModelAccountSourceEnum = {}));
/** Whether the account source is an account supplier. */
var AccountSourceSupplierModelSupplierEnum;
(function (AccountSourceSupplierModelSupplierEnum) {
    AccountSourceSupplierModelSupplierEnum["TRUE"] = "TRUE";
    AccountSourceSupplierModelSupplierEnum["FALSE"] = "FALSE";
    AccountSourceSupplierModelSupplierEnum["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(AccountSourceSupplierModelSupplierEnum || (exports.AccountSourceSupplierModelSupplierEnum = AccountSourceSupplierModelSupplierEnum = {}));
/** percent of budget or estimated total. */
var AlertPrefsModelHoursAlertDenomEnum;
(function (AlertPrefsModelHoursAlertDenomEnum) {
    AlertPrefsModelHoursAlertDenomEnum["BUDGET"] = "BUDGET";
    AlertPrefsModelHoursAlertDenomEnum["ESTIMATED_TOTAL"] = "ESTIMATED_TOTAL";
})(AlertPrefsModelHoursAlertDenomEnum || (exports.AlertPrefsModelHoursAlertDenomEnum = AlertPrefsModelHoursAlertDenomEnum = {}));
/** percent of budget or estimated total. */
var AlertPrefsModelTotalCostAlertDenomEnum;
(function (AlertPrefsModelTotalCostAlertDenomEnum) {
    AlertPrefsModelTotalCostAlertDenomEnum["BUDGET"] = "BUDGET";
    AlertPrefsModelTotalCostAlertDenomEnum["ESTIMATED_TOTAL"] = "ESTIMATED_TOTAL";
})(AlertPrefsModelTotalCostAlertDenomEnum || (exports.AlertPrefsModelTotalCostAlertDenomEnum = AlertPrefsModelTotalCostAlertDenomEnum = {}));
/** percent of budget or estimated total. */
var AlertPrefsModelLaborCostAlertDenomEnum;
(function (AlertPrefsModelLaborCostAlertDenomEnum) {
    AlertPrefsModelLaborCostAlertDenomEnum["BUDGET"] = "BUDGET";
    AlertPrefsModelLaborCostAlertDenomEnum["ESTIMATED_TOTAL"] = "ESTIMATED_TOTAL";
})(AlertPrefsModelLaborCostAlertDenomEnum || (exports.AlertPrefsModelLaborCostAlertDenomEnum = AlertPrefsModelLaborCostAlertDenomEnum = {}));
/** percent of budget or estimated total. */
var AlertPrefsModelExpenseCostAlertDenomEnum;
(function (AlertPrefsModelExpenseCostAlertDenomEnum) {
    AlertPrefsModelExpenseCostAlertDenomEnum["BUDGET"] = "BUDGET";
    AlertPrefsModelExpenseCostAlertDenomEnum["ESTIMATED_TOTAL"] = "ESTIMATED_TOTAL";
})(AlertPrefsModelExpenseCostAlertDenomEnum || (exports.AlertPrefsModelExpenseCostAlertDenomEnum = AlertPrefsModelExpenseCostAlertDenomEnum = {}));
/** percent of budget or estimated total. */
var AlertPrefsModelTotalBillAlertDenomEnum;
(function (AlertPrefsModelTotalBillAlertDenomEnum) {
    AlertPrefsModelTotalBillAlertDenomEnum["BUDGET"] = "BUDGET";
    AlertPrefsModelTotalBillAlertDenomEnum["ESTIMATED_TOTAL"] = "ESTIMATED_TOTAL";
})(AlertPrefsModelTotalBillAlertDenomEnum || (exports.AlertPrefsModelTotalBillAlertDenomEnum = AlertPrefsModelTotalBillAlertDenomEnum = {}));
/** Approval group type. */
var ApprovalGroupCreateModelTypeEnum;
(function (ApprovalGroupCreateModelTypeEnum) {
    ApprovalGroupCreateModelTypeEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    ApprovalGroupCreateModelTypeEnum["PURCHASING"] = "PURCHASING";
    ApprovalGroupCreateModelTypeEnum["TIME_AND_EXPENSE"] = "TIME_AND_EXPENSE";
    ApprovalGroupCreateModelTypeEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
})(ApprovalGroupCreateModelTypeEnum || (exports.ApprovalGroupCreateModelTypeEnum = ApprovalGroupCreateModelTypeEnum = {}));
/** Approval group type. */
var ApprovalGroupModelTypeEnum;
(function (ApprovalGroupModelTypeEnum) {
    ApprovalGroupModelTypeEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    ApprovalGroupModelTypeEnum["PURCHASING"] = "PURCHASING";
    ApprovalGroupModelTypeEnum["TIME_AND_EXPENSE"] = "TIME_AND_EXPENSE";
    ApprovalGroupModelTypeEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
})(ApprovalGroupModelTypeEnum || (exports.ApprovalGroupModelTypeEnum = ApprovalGroupModelTypeEnum = {}));
/** Approval group types. */
var ApprovalGroupSearchModelApprovalGroupTypesEnum;
(function (ApprovalGroupSearchModelApprovalGroupTypesEnum) {
    ApprovalGroupSearchModelApprovalGroupTypesEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    ApprovalGroupSearchModelApprovalGroupTypesEnum["PURCHASING"] = "PURCHASING";
    ApprovalGroupSearchModelApprovalGroupTypesEnum["TIME_AND_EXPENSE"] = "TIME_AND_EXPENSE";
    ApprovalGroupSearchModelApprovalGroupTypesEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
})(ApprovalGroupSearchModelApprovalGroupTypesEnum || (exports.ApprovalGroupSearchModelApprovalGroupTypesEnum = ApprovalGroupSearchModelApprovalGroupTypesEnum = {}));
/** List of approval types for which the person has pending approvals */
var ApproverAlternateModelApprovalTypesEnum;
(function (ApproverAlternateModelApprovalTypesEnum) {
    ApproverAlternateModelApprovalTypesEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    ApproverAlternateModelApprovalTypesEnum["TIME"] = "TIME";
    ApproverAlternateModelApprovalTypesEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    ApproverAlternateModelApprovalTypesEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ApproverAlternateModelApprovalTypesEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    ApproverAlternateModelApprovalTypesEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    ApproverAlternateModelApprovalTypesEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    ApproverAlternateModelApprovalTypesEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(ApproverAlternateModelApprovalTypesEnum || (exports.ApproverAlternateModelApprovalTypesEnum = ApproverAlternateModelApprovalTypesEnum = {}));
var AssignablePlannedTimeModelBillRateSourceEnum;
(function (AssignablePlannedTimeModelBillRateSourceEnum) {
    AssignablePlannedTimeModelBillRateSourceEnum["PERSON"] = "PERSON";
    AssignablePlannedTimeModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    AssignablePlannedTimeModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(AssignablePlannedTimeModelBillRateSourceEnum || (exports.AssignablePlannedTimeModelBillRateSourceEnum = AssignablePlannedTimeModelBillRateSourceEnum = {}));
var AssignablePlannedTimeModelCostRateSourceEnum;
(function (AssignablePlannedTimeModelCostRateSourceEnum) {
    AssignablePlannedTimeModelCostRateSourceEnum["PERSON"] = "PERSON";
    AssignablePlannedTimeModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    AssignablePlannedTimeModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(AssignablePlannedTimeModelCostRateSourceEnum || (exports.AssignablePlannedTimeModelCostRateSourceEnum = AssignablePlannedTimeModelCostRateSourceEnum = {}));
var AssignablePlannedTimeSearchModelUnitTypeEnum;
(function (AssignablePlannedTimeSearchModelUnitTypeEnum) {
    AssignablePlannedTimeSearchModelUnitTypeEnum["PROJECT"] = "PROJECT";
    AssignablePlannedTimeSearchModelUnitTypeEnum["TASK"] = "TASK";
    AssignablePlannedTimeSearchModelUnitTypeEnum["ALL"] = "ALL";
})(AssignablePlannedTimeSearchModelUnitTypeEnum || (exports.AssignablePlannedTimeSearchModelUnitTypeEnum = AssignablePlannedTimeSearchModelUnitTypeEnum = {}));
/** Type of assignment details to collect. Defaults to project only */
var AssigningMatrixSearchCriteriaModelUnitTypeEnum;
(function (AssigningMatrixSearchCriteriaModelUnitTypeEnum) {
    AssigningMatrixSearchCriteriaModelUnitTypeEnum["PROJECT"] = "PROJECT";
    AssigningMatrixSearchCriteriaModelUnitTypeEnum["TASK"] = "TASK";
    AssigningMatrixSearchCriteriaModelUnitTypeEnum["ALL"] = "ALL";
})(AssigningMatrixSearchCriteriaModelUnitTypeEnum || (exports.AssigningMatrixSearchCriteriaModelUnitTypeEnum = AssigningMatrixSearchCriteriaModelUnitTypeEnum = {}));
/** Type of assignment details to collect. Defaults to project only */
var AssigningMatrixSearchCriteriaReadModelUnitTypeEnum;
(function (AssigningMatrixSearchCriteriaReadModelUnitTypeEnum) {
    AssigningMatrixSearchCriteriaReadModelUnitTypeEnum["PROJECT"] = "PROJECT";
    AssigningMatrixSearchCriteriaReadModelUnitTypeEnum["TASK"] = "TASK";
    AssigningMatrixSearchCriteriaReadModelUnitTypeEnum["ALL"] = "ALL";
})(AssigningMatrixSearchCriteriaReadModelUnitTypeEnum || (exports.AssigningMatrixSearchCriteriaReadModelUnitTypeEnum = AssigningMatrixSearchCriteriaReadModelUnitTypeEnum = {}));
var AssigningMatrixSearchCriteriaReadModelDashboardsEnum;
(function (AssigningMatrixSearchCriteriaReadModelDashboardsEnum) {
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["HOME"] = "HOME";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["CONTRACTS"] = "CONTRACTS";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["CONTRACT"] = "CONTRACT";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["PROJECT"] = "PROJECT";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["PEOPLE"] = "PEOPLE";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["TIME"] = "TIME";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["EXPENSE"] = "EXPENSE";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["FORECAST"] = "FORECAST";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["FINANCIALS"] = "FINANCIALS";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["PURCHASING"] = "PURCHASING";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["BILLING"] = "BILLING";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["DOCUMENTS"] = "DOCUMENTS";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["ADMIN"] = "ADMIN";
    AssigningMatrixSearchCriteriaReadModelDashboardsEnum["REPORTS"] = "REPORTS";
})(AssigningMatrixSearchCriteriaReadModelDashboardsEnum || (exports.AssigningMatrixSearchCriteriaReadModelDashboardsEnum = AssigningMatrixSearchCriteriaReadModelDashboardsEnum = {}));
/** Type of assignment details to collect. Defaults to project only */
var AssigningMatrixSearchModelUnitTypeEnum;
(function (AssigningMatrixSearchModelUnitTypeEnum) {
    AssigningMatrixSearchModelUnitTypeEnum["PROJECT"] = "PROJECT";
    AssigningMatrixSearchModelUnitTypeEnum["TASK"] = "TASK";
    AssigningMatrixSearchModelUnitTypeEnum["ALL"] = "ALL";
})(AssigningMatrixSearchModelUnitTypeEnum || (exports.AssigningMatrixSearchModelUnitTypeEnum = AssigningMatrixSearchModelUnitTypeEnum = {}));
/** Default cost rate source for project. */
var AssignmentDefaultsModelCostRateSourceEnum;
(function (AssignmentDefaultsModelCostRateSourceEnum) {
    AssignmentDefaultsModelCostRateSourceEnum["PERSON"] = "PERSON";
    AssignmentDefaultsModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    AssignmentDefaultsModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(AssignmentDefaultsModelCostRateSourceEnum || (exports.AssignmentDefaultsModelCostRateSourceEnum = AssignmentDefaultsModelCostRateSourceEnum = {}));
/** Default bill rate source for project. */
var AssignmentDefaultsModelBillRateSourceEnum;
(function (AssignmentDefaultsModelBillRateSourceEnum) {
    AssignmentDefaultsModelBillRateSourceEnum["PERSON"] = "PERSON";
    AssignmentDefaultsModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    AssignmentDefaultsModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(AssignmentDefaultsModelBillRateSourceEnum || (exports.AssignmentDefaultsModelBillRateSourceEnum = AssignmentDefaultsModelBillRateSourceEnum = {}));
var AuditDataSearchModelCategoriesEnum;
(function (AuditDataSearchModelCategoriesEnum) {
    AuditDataSearchModelCategoriesEnum["ACCOUNTS"] = "ACCOUNTS";
    AuditDataSearchModelCategoriesEnum["ACCRUAL_PLANS"] = "ACCRUAL_PLANS";
    AuditDataSearchModelCategoriesEnum["ADDRESSES"] = "ADDRESSES";
    AuditDataSearchModelCategoriesEnum["APPROVALS"] = "APPROVALS";
    AuditDataSearchModelCategoriesEnum["APPROVAL_GROUPS"] = "APPROVAL_GROUPS";
    AuditDataSearchModelCategoriesEnum["APPROVAL_HISTORY"] = "APPROVAL_HISTORY";
    AuditDataSearchModelCategoriesEnum["APPROVERS"] = "APPROVERS";
    AuditDataSearchModelCategoriesEnum["BANK_ACCOUNTS"] = "BANK_ACCOUNTS";
    AuditDataSearchModelCategoriesEnum["BANK_RECONCILIATION"] = "BANK_RECONCILIATION";
    AuditDataSearchModelCategoriesEnum["BUDGETS"] = "BUDGETS";
    AuditDataSearchModelCategoriesEnum["BUSINESS_WEEKS"] = "BUSINESS_WEEKS";
    AuditDataSearchModelCategoriesEnum["CHANGE_REASONS"] = "CHANGE_REASONS";
    AuditDataSearchModelCategoriesEnum["CONTRACTS"] = "CONTRACTS";
    AuditDataSearchModelCategoriesEnum["CONTRACT_CLAUSES"] = "CONTRACT_CLAUSES";
    AuditDataSearchModelCategoriesEnum["CONTRACT_FUNDING"] = "CONTRACT_FUNDING";
    AuditDataSearchModelCategoriesEnum["CONTRACT_TYPES"] = "CONTRACT_TYPES";
    AuditDataSearchModelCategoriesEnum["COST_POOLS"] = "COST_POOLS";
    AuditDataSearchModelCategoriesEnum["CREDIT_CARDS"] = "CREDIT_CARDS";
    AuditDataSearchModelCategoriesEnum["CUSTOMER_PAYMENTS"] = "CUSTOMER_PAYMENTS";
    AuditDataSearchModelCategoriesEnum["CUSTOM_LINKS"] = "CUSTOM_LINKS";
    AuditDataSearchModelCategoriesEnum["DEPOSITS"] = "DEPOSITS";
    AuditDataSearchModelCategoriesEnum["EMAIL_TEMPLATES"] = "EMAIL_TEMPLATES";
    AuditDataSearchModelCategoriesEnum["EMPLOYEE_TYPES"] = "EMPLOYEE_TYPES";
    AuditDataSearchModelCategoriesEnum["EXCHANGE_RATES"] = "EXCHANGE_RATES";
    AuditDataSearchModelCategoriesEnum["EXPENSE_REPORTS"] = "EXPENSE_REPORTS";
    AuditDataSearchModelCategoriesEnum["EXPENSE_REQUESTS"] = "EXPENSE_REQUESTS";
    AuditDataSearchModelCategoriesEnum["EXPENSE_APPROVAL_HISTORY"] = "EXPENSE_APPROVAL_HISTORY";
    AuditDataSearchModelCategoriesEnum["EXPENSE_POLICIES"] = "EXPENSE_POLICIES";
    AuditDataSearchModelCategoriesEnum["EXPENSE_TYPES"] = "EXPENSE_TYPES";
    AuditDataSearchModelCategoriesEnum["FINANCIAL_DOCUMENTS"] = "FINANCIAL_DOCUMENTS";
    AuditDataSearchModelCategoriesEnum["FISCAL_YEAR"] = "FISCAL_YEAR";
    AuditDataSearchModelCategoriesEnum["FIXED_ASSETS"] = "FIXED_ASSETS";
    AuditDataSearchModelCategoriesEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    AuditDataSearchModelCategoriesEnum["HOLIDAYS"] = "HOLIDAYS";
    AuditDataSearchModelCategoriesEnum["IMPORTED_CREDIT_CARD"] = "IMPORTED_CREDIT_CARD";
    AuditDataSearchModelCategoriesEnum["IMPORTED_EXPENSES"] = "IMPORTED_EXPENSES";
    AuditDataSearchModelCategoriesEnum["INVENTORY"] = "INVENTORY";
    AuditDataSearchModelCategoriesEnum["INVOICING"] = "INVOICING";
    AuditDataSearchModelCategoriesEnum["ITEMS"] = "ITEMS";
    AuditDataSearchModelCategoriesEnum["JOURNAL_ENTRIES"] = "JOURNAL_ENTRIES";
    AuditDataSearchModelCategoriesEnum["LABOR_CATEGORIES"] = "LABOR_CATEGORIES";
    AuditDataSearchModelCategoriesEnum["LEAVE"] = "LEAVE";
    AuditDataSearchModelCategoriesEnum["LOCATIONS"] = "LOCATIONS";
    AuditDataSearchModelCategoriesEnum["MILEAGE_RATES"] = "MILEAGE_RATES";
    AuditDataSearchModelCategoriesEnum["MLE"] = "MLE";
    AuditDataSearchModelCategoriesEnum["OCCUPATIONS"] = "OCCUPATIONS";
    AuditDataSearchModelCategoriesEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    AuditDataSearchModelCategoriesEnum["ORGANIZATION_TYPES"] = "ORGANIZATION_TYPES";
    AuditDataSearchModelCategoriesEnum["PAY_CODES"] = "PAY_CODES";
    AuditDataSearchModelCategoriesEnum["PAYMENT_METHODS"] = "PAYMENT_METHODS";
    AuditDataSearchModelCategoriesEnum["PEOPLE"] = "PEOPLE";
    AuditDataSearchModelCategoriesEnum["PEOPLE_ASSIGNMENTS"] = "PEOPLE_ASSIGNMENTS";
    AuditDataSearchModelCategoriesEnum["PER_DIEMS"] = "PER_DIEMS";
    AuditDataSearchModelCategoriesEnum["PERSON_BENEFITS"] = "PERSON_BENEFITS";
    AuditDataSearchModelCategoriesEnum["PLAN_SETS"] = "PLAN_SETS";
    AuditDataSearchModelCategoriesEnum["PROJECTS"] = "PROJECTS";
    AuditDataSearchModelCategoriesEnum["PROJECT_NOTE_STATUSES"] = "PROJECT_NOTE_STATUSES";
    AuditDataSearchModelCategoriesEnum["PROJECT_NOTE_TYPES"] = "PROJECT_NOTE_TYPES";
    AuditDataSearchModelCategoriesEnum["PROJECT_STATUSES"] = "PROJECT_STATUSES";
    AuditDataSearchModelCategoriesEnum["PROJECT_TYPES"] = "PROJECT_TYPES";
    AuditDataSearchModelCategoriesEnum["PROPERTY_TEMPLATES"] = "PROPERTY_TEMPLATES";
    AuditDataSearchModelCategoriesEnum["PURCHASE_ORDERS"] = "PURCHASE_ORDERS";
    AuditDataSearchModelCategoriesEnum["PURCHASE_ORDER_ALERTS"] = "PURCHASE_ORDER_ALERTS";
    AuditDataSearchModelCategoriesEnum["PURCHASE_ORDER_ASSIGNMENTS"] = "PURCHASE_ORDER_ASSIGNMENTS";
    AuditDataSearchModelCategoriesEnum["PURCHASE_ORDER_REQUISITIONS"] = "PURCHASE_ORDER_REQUISITIONS";
    AuditDataSearchModelCategoriesEnum["RECEIVING"] = "RECEIVING";
    AuditDataSearchModelCategoriesEnum["RESOURCE_REQUESTS"] = "RESOURCE_REQUESTS";
    AuditDataSearchModelCategoriesEnum["SKILLS"] = "SKILLS";
    AuditDataSearchModelCategoriesEnum["SYSTEM_PROPERTIES"] = "SYSTEM_PROPERTIES";
    AuditDataSearchModelCategoriesEnum["TASKS"] = "TASKS";
    AuditDataSearchModelCategoriesEnum["TIMESHEETS"] = "TIMESHEETS";
    AuditDataSearchModelCategoriesEnum["TIME_PERIODS"] = "TIME_PERIODS";
    AuditDataSearchModelCategoriesEnum["UDFS"] = "UDFS";
    AuditDataSearchModelCategoriesEnum["UNKNOWN"] = "UNKNOWN";
    AuditDataSearchModelCategoriesEnum["VAT"] = "VAT";
    AuditDataSearchModelCategoriesEnum["VENDORS"] = "VENDORS";
    AuditDataSearchModelCategoriesEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    AuditDataSearchModelCategoriesEnum["VENDOR_PAYMENTS"] = "VENDOR_PAYMENTS";
    AuditDataSearchModelCategoriesEnum["WAGE_DETERMINATION"] = "WAGE_DETERMINATION";
    AuditDataSearchModelCategoriesEnum["WIZARDS"] = "WIZARDS";
})(AuditDataSearchModelCategoriesEnum || (exports.AuditDataSearchModelCategoriesEnum = AuditDataSearchModelCategoriesEnum = {}));
/** Determines what rows will be suppressed for an UPDATE record. Defaults to none. */
var AuditDataSearchModelUpdateSuppressionTypeEnum;
(function (AuditDataSearchModelUpdateSuppressionTypeEnum) {
    AuditDataSearchModelUpdateSuppressionTypeEnum["NONE"] = "NONE";
    AuditDataSearchModelUpdateSuppressionTypeEnum["EMPTY"] = "EMPTY";
    AuditDataSearchModelUpdateSuppressionTypeEnum["UNCHANGED"] = "UNCHANGED";
})(AuditDataSearchModelUpdateSuppressionTypeEnum || (exports.AuditDataSearchModelUpdateSuppressionTypeEnum = AuditDataSearchModelUpdateSuppressionTypeEnum = {}));
var BankAccountModelTypeEnum;
(function (BankAccountModelTypeEnum) {
    BankAccountModelTypeEnum["BANK_ACCOUNT"] = "BANK_ACCOUNT";
    BankAccountModelTypeEnum["UNDEPOSITED_FUNDS"] = "UNDEPOSITED_FUNDS";
    BankAccountModelTypeEnum["OTHER"] = "OTHER";
})(BankAccountModelTypeEnum || (exports.BankAccountModelTypeEnum = BankAccountModelTypeEnum = {}));
/**
 * Determines the type of search performed for a provided document number.
 * @default "CONTAINS"
 */
var BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum;
(function (BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum) {
    BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum || (exports.BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum = BasePurchasingDocumentSearchModelDocumentNumberPredicateEnum = {}));
/** The billing type */
var BillingTypeModelTypeEnum;
(function (BillingTypeModelTypeEnum) {
    BillingTypeModelTypeEnum["COST_PLUS"] = "COST_PLUS";
    BillingTypeModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    BillingTypeModelTypeEnum["TIME_AND_MATERIALS"] = "TIME_AND_MATERIALS";
    BillingTypeModelTypeEnum["NON_BILLABLE"] = "NON_BILLABLE";
})(BillingTypeModelTypeEnum || (exports.BillingTypeModelTypeEnum = BillingTypeModelTypeEnum = {}));
var CategoryAccountKeyModelCategoryEnum;
(function (CategoryAccountKeyModelCategoryEnum) {
    CategoryAccountKeyModelCategoryEnum["BILLED"] = "BILLED";
    CategoryAccountKeyModelCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    CategoryAccountKeyModelCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    CategoryAccountKeyModelCategoryEnum["TAX"] = "TAX";
    CategoryAccountKeyModelCategoryEnum["UNBILLED"] = "UNBILLED";
    CategoryAccountKeyModelCategoryEnum["LABOR_COST"] = "LABOR_COST";
    CategoryAccountKeyModelCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    CategoryAccountKeyModelCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    CategoryAccountKeyModelCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    CategoryAccountKeyModelCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    CategoryAccountKeyModelCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    CategoryAccountKeyModelCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    CategoryAccountKeyModelCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    CategoryAccountKeyModelCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    CategoryAccountKeyModelCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    CategoryAccountKeyModelCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    CategoryAccountKeyModelCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    CategoryAccountKeyModelCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    CategoryAccountKeyModelCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    CategoryAccountKeyModelCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    CategoryAccountKeyModelCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    CategoryAccountKeyModelCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    CategoryAccountKeyModelCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    CategoryAccountKeyModelCategoryEnum["NET_INCOME"] = "NET_INCOME";
    CategoryAccountKeyModelCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    CategoryAccountKeyModelCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    CategoryAccountKeyModelCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    CategoryAccountKeyModelCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    CategoryAccountKeyModelCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    CategoryAccountKeyModelCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    CategoryAccountKeyModelCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    CategoryAccountKeyModelCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    CategoryAccountKeyModelCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    CategoryAccountKeyModelCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    CategoryAccountKeyModelCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    CategoryAccountKeyModelCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    CategoryAccountKeyModelCategoryEnum["PILOB"] = "PILOB";
    CategoryAccountKeyModelCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    CategoryAccountKeyModelCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    CategoryAccountKeyModelCategoryEnum["DUE_TO"] = "DUE_TO";
    CategoryAccountKeyModelCategoryEnum["DUE_FROM"] = "DUE_FROM";
    CategoryAccountKeyModelCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    CategoryAccountKeyModelCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    CategoryAccountKeyModelCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    CategoryAccountKeyModelCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    CategoryAccountKeyModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    CategoryAccountKeyModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    CategoryAccountKeyModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    CategoryAccountKeyModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    CategoryAccountKeyModelCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    CategoryAccountKeyModelCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(CategoryAccountKeyModelCategoryEnum || (exports.CategoryAccountKeyModelCategoryEnum = CategoryAccountKeyModelCategoryEnum = {}));
var CategoryAccountModelCategoryEnum;
(function (CategoryAccountModelCategoryEnum) {
    CategoryAccountModelCategoryEnum["BILLED"] = "BILLED";
    CategoryAccountModelCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    CategoryAccountModelCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    CategoryAccountModelCategoryEnum["TAX"] = "TAX";
    CategoryAccountModelCategoryEnum["UNBILLED"] = "UNBILLED";
    CategoryAccountModelCategoryEnum["LABOR_COST"] = "LABOR_COST";
    CategoryAccountModelCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    CategoryAccountModelCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    CategoryAccountModelCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    CategoryAccountModelCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    CategoryAccountModelCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    CategoryAccountModelCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    CategoryAccountModelCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    CategoryAccountModelCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    CategoryAccountModelCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    CategoryAccountModelCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    CategoryAccountModelCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    CategoryAccountModelCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    CategoryAccountModelCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    CategoryAccountModelCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    CategoryAccountModelCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    CategoryAccountModelCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    CategoryAccountModelCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    CategoryAccountModelCategoryEnum["NET_INCOME"] = "NET_INCOME";
    CategoryAccountModelCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    CategoryAccountModelCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    CategoryAccountModelCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    CategoryAccountModelCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    CategoryAccountModelCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    CategoryAccountModelCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    CategoryAccountModelCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    CategoryAccountModelCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    CategoryAccountModelCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    CategoryAccountModelCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    CategoryAccountModelCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    CategoryAccountModelCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    CategoryAccountModelCategoryEnum["PILOB"] = "PILOB";
    CategoryAccountModelCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    CategoryAccountModelCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    CategoryAccountModelCategoryEnum["DUE_TO"] = "DUE_TO";
    CategoryAccountModelCategoryEnum["DUE_FROM"] = "DUE_FROM";
    CategoryAccountModelCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    CategoryAccountModelCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    CategoryAccountModelCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    CategoryAccountModelCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    CategoryAccountModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    CategoryAccountModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    CategoryAccountModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    CategoryAccountModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    CategoryAccountModelCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    CategoryAccountModelCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(CategoryAccountModelCategoryEnum || (exports.CategoryAccountModelCategoryEnum = CategoryAccountModelCategoryEnum = {}));
var ContractCreateModelPrimeOrSubEnum;
(function (ContractCreateModelPrimeOrSubEnum) {
    ContractCreateModelPrimeOrSubEnum["PRIME"] = "PRIME";
    ContractCreateModelPrimeOrSubEnum["SUB"] = "SUB";
    ContractCreateModelPrimeOrSubEnum["NONE"] = "NONE";
})(ContractCreateModelPrimeOrSubEnum || (exports.ContractCreateModelPrimeOrSubEnum = ContractCreateModelPrimeOrSubEnum = {}));
var ContractCreateModelScaRateFlagEnum;
(function (ContractCreateModelScaRateFlagEnum) {
    ContractCreateModelScaRateFlagEnum["BASE"] = "BASE";
    ContractCreateModelScaRateFlagEnum["WAGE"] = "WAGE";
})(ContractCreateModelScaRateFlagEnum || (exports.ContractCreateModelScaRateFlagEnum = ContractCreateModelScaRateFlagEnum = {}));
var ContractCreateModelBusinessSizeClassificationEnum;
(function (ContractCreateModelBusinessSizeClassificationEnum) {
    ContractCreateModelBusinessSizeClassificationEnum["LARGE"] = "LARGE";
    ContractCreateModelBusinessSizeClassificationEnum["SMALL"] = "SMALL";
    ContractCreateModelBusinessSizeClassificationEnum["NON_PROFIT"] = "NON_PROFIT";
    ContractCreateModelBusinessSizeClassificationEnum["FOREIGN_OR_OTHER"] = "FOREIGN_OR_OTHER";
})(ContractCreateModelBusinessSizeClassificationEnum || (exports.ContractCreateModelBusinessSizeClassificationEnum = ContractCreateModelBusinessSizeClassificationEnum = {}));
var ContractCreateModelSecurityClearanceEnum;
(function (ContractCreateModelSecurityClearanceEnum) {
    ContractCreateModelSecurityClearanceEnum["TOP_SECRET"] = "TOP_SECRET";
    ContractCreateModelSecurityClearanceEnum["SECRET"] = "SECRET";
    ContractCreateModelSecurityClearanceEnum["CONFIDENTIAL"] = "CONFIDENTIAL";
})(ContractCreateModelSecurityClearanceEnum || (exports.ContractCreateModelSecurityClearanceEnum = ContractCreateModelSecurityClearanceEnum = {}));
var ContractFundingAllocationModelCalculationMethodEnum;
(function (ContractFundingAllocationModelCalculationMethodEnum) {
    ContractFundingAllocationModelCalculationMethodEnum["FIFO"] = "FIFO";
    ContractFundingAllocationModelCalculationMethodEnum["SEQUENCE"] = "SEQUENCE";
    ContractFundingAllocationModelCalculationMethodEnum["RATIO"] = "RATIO";
})(ContractFundingAllocationModelCalculationMethodEnum || (exports.ContractFundingAllocationModelCalculationMethodEnum = ContractFundingAllocationModelCalculationMethodEnum = {}));
var ContractListModelPrimeOrSubEnum;
(function (ContractListModelPrimeOrSubEnum) {
    ContractListModelPrimeOrSubEnum["PRIME"] = "PRIME";
    ContractListModelPrimeOrSubEnum["SUB"] = "SUB";
    ContractListModelPrimeOrSubEnum["NONE"] = "NONE";
})(ContractListModelPrimeOrSubEnum || (exports.ContractListModelPrimeOrSubEnum = ContractListModelPrimeOrSubEnum = {}));
var ContractListModelScaRateFlagEnum;
(function (ContractListModelScaRateFlagEnum) {
    ContractListModelScaRateFlagEnum["BASE"] = "BASE";
    ContractListModelScaRateFlagEnum["WAGE"] = "WAGE";
})(ContractListModelScaRateFlagEnum || (exports.ContractListModelScaRateFlagEnum = ContractListModelScaRateFlagEnum = {}));
var ContractListModelBusinessSizeClassificationEnum;
(function (ContractListModelBusinessSizeClassificationEnum) {
    ContractListModelBusinessSizeClassificationEnum["LARGE"] = "LARGE";
    ContractListModelBusinessSizeClassificationEnum["SMALL"] = "SMALL";
    ContractListModelBusinessSizeClassificationEnum["NON_PROFIT"] = "NON_PROFIT";
    ContractListModelBusinessSizeClassificationEnum["FOREIGN_OR_OTHER"] = "FOREIGN_OR_OTHER";
})(ContractListModelBusinessSizeClassificationEnum || (exports.ContractListModelBusinessSizeClassificationEnum = ContractListModelBusinessSizeClassificationEnum = {}));
var ContractListModelSecurityClearanceEnum;
(function (ContractListModelSecurityClearanceEnum) {
    ContractListModelSecurityClearanceEnum["TOP_SECRET"] = "TOP_SECRET";
    ContractListModelSecurityClearanceEnum["SECRET"] = "SECRET";
    ContractListModelSecurityClearanceEnum["CONFIDENTIAL"] = "CONFIDENTIAL";
})(ContractListModelSecurityClearanceEnum || (exports.ContractListModelSecurityClearanceEnum = ContractListModelSecurityClearanceEnum = {}));
var ContractModelPrimeOrSubEnum;
(function (ContractModelPrimeOrSubEnum) {
    ContractModelPrimeOrSubEnum["PRIME"] = "PRIME";
    ContractModelPrimeOrSubEnum["SUB"] = "SUB";
    ContractModelPrimeOrSubEnum["NONE"] = "NONE";
})(ContractModelPrimeOrSubEnum || (exports.ContractModelPrimeOrSubEnum = ContractModelPrimeOrSubEnum = {}));
var ContractModelScaRateFlagEnum;
(function (ContractModelScaRateFlagEnum) {
    ContractModelScaRateFlagEnum["BASE"] = "BASE";
    ContractModelScaRateFlagEnum["WAGE"] = "WAGE";
})(ContractModelScaRateFlagEnum || (exports.ContractModelScaRateFlagEnum = ContractModelScaRateFlagEnum = {}));
var ContractModelBusinessSizeClassificationEnum;
(function (ContractModelBusinessSizeClassificationEnum) {
    ContractModelBusinessSizeClassificationEnum["LARGE"] = "LARGE";
    ContractModelBusinessSizeClassificationEnum["SMALL"] = "SMALL";
    ContractModelBusinessSizeClassificationEnum["NON_PROFIT"] = "NON_PROFIT";
    ContractModelBusinessSizeClassificationEnum["FOREIGN_OR_OTHER"] = "FOREIGN_OR_OTHER";
})(ContractModelBusinessSizeClassificationEnum || (exports.ContractModelBusinessSizeClassificationEnum = ContractModelBusinessSizeClassificationEnum = {}));
var ContractModelSecurityClearanceEnum;
(function (ContractModelSecurityClearanceEnum) {
    ContractModelSecurityClearanceEnum["TOP_SECRET"] = "TOP_SECRET";
    ContractModelSecurityClearanceEnum["SECRET"] = "SECRET";
    ContractModelSecurityClearanceEnum["CONFIDENTIAL"] = "CONFIDENTIAL";
})(ContractModelSecurityClearanceEnum || (exports.ContractModelSecurityClearanceEnum = ContractModelSecurityClearanceEnum = {}));
/** Type field will identify whether this cost element item is either Labor, Other Direct Cost or Indirect Cost. */
var CostElementModelTypeEnum;
(function (CostElementModelTypeEnum) {
    CostElementModelTypeEnum["LABOR"] = "LABOR";
    CostElementModelTypeEnum["ODC"] = "ODC";
    CostElementModelTypeEnum["POOL"] = "POOL";
})(CostElementModelTypeEnum || (exports.CostElementModelTypeEnum = CostElementModelTypeEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelTypeEnum;
(function (CostPlusInvoiceSectionFormatCreateModelTypeEnum) {
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    CostPlusInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(CostPlusInvoiceSectionFormatCreateModelTypeEnum || (exports.CostPlusInvoiceSectionFormatCreateModelTypeEnum = CostPlusInvoiceSectionFormatCreateModelTypeEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum) {
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum = CostPlusInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum) {
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum = CostPlusInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum) {
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum = CostPlusInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum) {
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum = CostPlusInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum;
(function (CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum) {
    CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum["HOURS"] = "HOURS";
    CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum["ITEM_QTY"] = "ITEM_QTY";
    CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum["BOTH"] = "BOTH";
})(CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum || (exports.CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum = CostPlusInvoiceSectionFormatCreateModelQuantityToShowEnum = {}));
var CostPlusInvoiceSectionFormatModelTypeEnum;
(function (CostPlusInvoiceSectionFormatModelTypeEnum) {
    CostPlusInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    CostPlusInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    CostPlusInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    CostPlusInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    CostPlusInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    CostPlusInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    CostPlusInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    CostPlusInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    CostPlusInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(CostPlusInvoiceSectionFormatModelTypeEnum || (exports.CostPlusInvoiceSectionFormatModelTypeEnum = CostPlusInvoiceSectionFormatModelTypeEnum = {}));
var CostPlusInvoiceSectionFormatModelCol1FieldEnum;
(function (CostPlusInvoiceSectionFormatModelCol1FieldEnum) {
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatModelCol1FieldEnum || (exports.CostPlusInvoiceSectionFormatModelCol1FieldEnum = CostPlusInvoiceSectionFormatModelCol1FieldEnum = {}));
var CostPlusInvoiceSectionFormatModelCol2FieldEnum;
(function (CostPlusInvoiceSectionFormatModelCol2FieldEnum) {
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatModelCol2FieldEnum || (exports.CostPlusInvoiceSectionFormatModelCol2FieldEnum = CostPlusInvoiceSectionFormatModelCol2FieldEnum = {}));
var CostPlusInvoiceSectionFormatModelCol3FieldEnum;
(function (CostPlusInvoiceSectionFormatModelCol3FieldEnum) {
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatModelCol3FieldEnum || (exports.CostPlusInvoiceSectionFormatModelCol3FieldEnum = CostPlusInvoiceSectionFormatModelCol3FieldEnum = {}));
var CostPlusInvoiceSectionFormatModelCol4FieldEnum;
(function (CostPlusInvoiceSectionFormatModelCol4FieldEnum) {
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    CostPlusInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(CostPlusInvoiceSectionFormatModelCol4FieldEnum || (exports.CostPlusInvoiceSectionFormatModelCol4FieldEnum = CostPlusInvoiceSectionFormatModelCol4FieldEnum = {}));
var CostPlusInvoiceSectionFormatModelQuantityToShowEnum;
(function (CostPlusInvoiceSectionFormatModelQuantityToShowEnum) {
    CostPlusInvoiceSectionFormatModelQuantityToShowEnum["HOURS"] = "HOURS";
    CostPlusInvoiceSectionFormatModelQuantityToShowEnum["ITEM_QTY"] = "ITEM_QTY";
    CostPlusInvoiceSectionFormatModelQuantityToShowEnum["BOTH"] = "BOTH";
})(CostPlusInvoiceSectionFormatModelQuantityToShowEnum || (exports.CostPlusInvoiceSectionFormatModelQuantityToShowEnum = CostPlusInvoiceSectionFormatModelQuantityToShowEnum = {}));
/**
 * Format of value
 * @minLength 0
 * @maxLength 1
 * @pattern ^\(.*\S.*\)$
 */
var CostReportElementModelValueFormatEnum;
(function (CostReportElementModelValueFormatEnum) {
    CostReportElementModelValueFormatEnum["PERCENT"] = "PERCENT";
    CostReportElementModelValueFormatEnum["NUMBER"] = "NUMBER";
})(CostReportElementModelValueFormatEnum || (exports.CostReportElementModelValueFormatEnum = CostReportElementModelValueFormatEnum = {}));
/** Cost pool rate type */
var CostStructPoolRateModelRateTypeEnum;
(function (CostStructPoolRateModelRateTypeEnum) {
    CostStructPoolRateModelRateTypeEnum["PROVISIONAL"] = "PROVISIONAL";
    CostStructPoolRateModelRateTypeEnum["TARGET"] = "TARGET";
})(CostStructPoolRateModelRateTypeEnum || (exports.CostStructPoolRateModelRateTypeEnum = CostStructPoolRateModelRateTypeEnum = {}));
/** Cost pool rate type */
var CostStructPoolRateUpdateModelRateTypeEnum;
(function (CostStructPoolRateUpdateModelRateTypeEnum) {
    CostStructPoolRateUpdateModelRateTypeEnum["PROVISIONAL"] = "PROVISIONAL";
    CostStructPoolRateUpdateModelRateTypeEnum["TARGET"] = "TARGET";
})(CostStructPoolRateUpdateModelRateTypeEnum || (exports.CostStructPoolRateUpdateModelRateTypeEnum = CostStructPoolRateUpdateModelRateTypeEnum = {}));
/** The custom link type */
var CustomLinkListModelLinkTypeEnum;
(function (CustomLinkListModelLinkTypeEnum) {
    CustomLinkListModelLinkTypeEnum["COMPANY"] = "COMPANY";
    CustomLinkListModelLinkTypeEnum["QUICK"] = "QUICK";
    CustomLinkListModelLinkTypeEnum["REPORT"] = "REPORT";
    CustomLinkListModelLinkTypeEnum["HOW_TO"] = "HOW_TO";
    CustomLinkListModelLinkTypeEnum["TIP"] = "TIP";
})(CustomLinkListModelLinkTypeEnum || (exports.CustomLinkListModelLinkTypeEnum = CustomLinkListModelLinkTypeEnum = {}));
/** the application type */
var CustomLinkListModelApplicationTypeEnum;
(function (CustomLinkListModelApplicationTypeEnum) {
    CustomLinkListModelApplicationTypeEnum["NONE"] = "NONE";
    CustomLinkListModelApplicationTypeEnum["WEBAPP"] = "WEBAPP";
    CustomLinkListModelApplicationTypeEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
    CustomLinkListModelApplicationTypeEnum["MOBILE"] = "MOBILE";
    CustomLinkListModelApplicationTypeEnum["CONNECT"] = "CONNECT";
    CustomLinkListModelApplicationTypeEnum["APAUTOMATION"] = "APAUTOMATION";
    CustomLinkListModelApplicationTypeEnum["CUSTOM"] = "CUSTOM";
    CustomLinkListModelApplicationTypeEnum["SIMPLY_WORK"] = "SIMPLY_WORK";
    CustomLinkListModelApplicationTypeEnum["COBBLESTONE"] = "COBBLESTONE";
    CustomLinkListModelApplicationTypeEnum["FORPROJECT"] = "FORPROJECT";
    CustomLinkListModelApplicationTypeEnum["PROLIANT"] = "PROLIANT";
    CustomLinkListModelApplicationTypeEnum["UNISON"] = "UNISON";
    CustomLinkListModelApplicationTypeEnum["CONTRAQER"] = "CONTRAQER";
})(CustomLinkListModelApplicationTypeEnum || (exports.CustomLinkListModelApplicationTypeEnum = CustomLinkListModelApplicationTypeEnum = {}));
/** The custom link type */
var CustomLinkModelLinkTypeEnum;
(function (CustomLinkModelLinkTypeEnum) {
    CustomLinkModelLinkTypeEnum["COMPANY"] = "COMPANY";
    CustomLinkModelLinkTypeEnum["QUICK"] = "QUICK";
    CustomLinkModelLinkTypeEnum["REPORT"] = "REPORT";
    CustomLinkModelLinkTypeEnum["HOW_TO"] = "HOW_TO";
    CustomLinkModelLinkTypeEnum["TIP"] = "TIP";
})(CustomLinkModelLinkTypeEnum || (exports.CustomLinkModelLinkTypeEnum = CustomLinkModelLinkTypeEnum = {}));
/** the application type */
var CustomLinkModelApplicationTypeEnum;
(function (CustomLinkModelApplicationTypeEnum) {
    CustomLinkModelApplicationTypeEnum["NONE"] = "NONE";
    CustomLinkModelApplicationTypeEnum["WEBAPP"] = "WEBAPP";
    CustomLinkModelApplicationTypeEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
    CustomLinkModelApplicationTypeEnum["MOBILE"] = "MOBILE";
    CustomLinkModelApplicationTypeEnum["CONNECT"] = "CONNECT";
    CustomLinkModelApplicationTypeEnum["APAUTOMATION"] = "APAUTOMATION";
    CustomLinkModelApplicationTypeEnum["CUSTOM"] = "CUSTOM";
    CustomLinkModelApplicationTypeEnum["SIMPLY_WORK"] = "SIMPLY_WORK";
    CustomLinkModelApplicationTypeEnum["COBBLESTONE"] = "COBBLESTONE";
    CustomLinkModelApplicationTypeEnum["FORPROJECT"] = "FORPROJECT";
    CustomLinkModelApplicationTypeEnum["PROLIANT"] = "PROLIANT";
    CustomLinkModelApplicationTypeEnum["UNISON"] = "UNISON";
    CustomLinkModelApplicationTypeEnum["CONTRAQER"] = "CONTRAQER";
})(CustomLinkModelApplicationTypeEnum || (exports.CustomLinkModelApplicationTypeEnum = CustomLinkModelApplicationTypeEnum = {}));
/** Document type of the included customer document (PAYMENT or INVOICE). */
var CustomerPaymentIncludedModelIncludedDocumentTypeEnum;
(function (CustomerPaymentIncludedModelIncludedDocumentTypeEnum) {
    CustomerPaymentIncludedModelIncludedDocumentTypeEnum["PAYMENT"] = "PAYMENT";
    CustomerPaymentIncludedModelIncludedDocumentTypeEnum["INVOICE"] = "INVOICE";
})(CustomerPaymentIncludedModelIncludedDocumentTypeEnum || (exports.CustomerPaymentIncludedModelIncludedDocumentTypeEnum = CustomerPaymentIncludedModelIncludedDocumentTypeEnum = {}));
var CustomerPaymentModelDocumentTypeEnum;
(function (CustomerPaymentModelDocumentTypeEnum) {
    CustomerPaymentModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    CustomerPaymentModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    CustomerPaymentModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    CustomerPaymentModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    CustomerPaymentModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(CustomerPaymentModelDocumentTypeEnum || (exports.CustomerPaymentModelDocumentTypeEnum = CustomerPaymentModelDocumentTypeEnum = {}));
var CustomerPaymentModelStatusEnum;
(function (CustomerPaymentModelStatusEnum) {
    CustomerPaymentModelStatusEnum["INUSE"] = "INUSE";
    CustomerPaymentModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    CustomerPaymentModelStatusEnum["POSTED"] = "POSTED";
    CustomerPaymentModelStatusEnum["APPROVED"] = "APPROVED";
    CustomerPaymentModelStatusEnum["APPROVING"] = "APPROVING";
    CustomerPaymentModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(CustomerPaymentModelStatusEnum || (exports.CustomerPaymentModelStatusEnum = CustomerPaymentModelStatusEnum = {}));
/** Search on a list of document statuses */
var CustomerPaymentSearchModelStatusesEnum;
(function (CustomerPaymentSearchModelStatusesEnum) {
    CustomerPaymentSearchModelStatusesEnum["INUSE"] = "INUSE";
    CustomerPaymentSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    CustomerPaymentSearchModelStatusesEnum["POSTED"] = "POSTED";
    CustomerPaymentSearchModelStatusesEnum["APPROVED"] = "APPROVED";
    CustomerPaymentSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    CustomerPaymentSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
})(CustomerPaymentSearchModelStatusesEnum || (exports.CustomerPaymentSearchModelStatusesEnum = CustomerPaymentSearchModelStatusesEnum = {}));
/** A list of items. */
var DashboardTypePagedResponseItemsEnum;
(function (DashboardTypePagedResponseItemsEnum) {
    DashboardTypePagedResponseItemsEnum["HOME"] = "HOME";
    DashboardTypePagedResponseItemsEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    DashboardTypePagedResponseItemsEnum["CONTRACTS"] = "CONTRACTS";
    DashboardTypePagedResponseItemsEnum["CONTRACT"] = "CONTRACT";
    DashboardTypePagedResponseItemsEnum["PROJECT"] = "PROJECT";
    DashboardTypePagedResponseItemsEnum["PEOPLE"] = "PEOPLE";
    DashboardTypePagedResponseItemsEnum["TIME"] = "TIME";
    DashboardTypePagedResponseItemsEnum["EXPENSE"] = "EXPENSE";
    DashboardTypePagedResponseItemsEnum["FORECAST"] = "FORECAST";
    DashboardTypePagedResponseItemsEnum["FINANCIALS"] = "FINANCIALS";
    DashboardTypePagedResponseItemsEnum["PURCHASING"] = "PURCHASING";
    DashboardTypePagedResponseItemsEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    DashboardTypePagedResponseItemsEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    DashboardTypePagedResponseItemsEnum["BILLING"] = "BILLING";
    DashboardTypePagedResponseItemsEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    DashboardTypePagedResponseItemsEnum["DOCUMENTS"] = "DOCUMENTS";
    DashboardTypePagedResponseItemsEnum["ADMIN"] = "ADMIN";
    DashboardTypePagedResponseItemsEnum["REPORTS"] = "REPORTS";
})(DashboardTypePagedResponseItemsEnum || (exports.DashboardTypePagedResponseItemsEnum = DashboardTypePagedResponseItemsEnum = {}));
var DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum;
(function (DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum) {
    DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum["RATE_ACTUAL"] = "RATE_ACTUAL";
    DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum["RATE_TYPE_PROVISIONAL"] = "RATE_TYPE_PROVISIONAL";
    DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum["RATE_TYPE_TARGET"] = "RATE_TYPE_TARGET";
})(DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum || (exports.DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum = DataLakeCriteriaFieldsModelIndirectCostRateTypeEnum = {}));
/** Specifies the reporting period interval, defaults to calendar month. Fiscal options are only available if fiscal calendar is enabled.  See ```unanet.fiscal_calendar.enabled``` */
var DataLakeCriteriaFieldsModelPeriodTypeEnum;
(function (DataLakeCriteriaFieldsModelPeriodTypeEnum) {
    DataLakeCriteriaFieldsModelPeriodTypeEnum["DAY"] = "DAY";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["CALENDAR_WEEK"] = "CALENDAR_WEEK";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["CALENDAR_SEMI_MONTH"] = "CALENDAR_SEMI_MONTH";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["CALENDAR_MONTH"] = "CALENDAR_MONTH";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["CALENDAR_QUARTER"] = "CALENDAR_QUARTER";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["CALENDAR_YEAR"] = "CALENDAR_YEAR";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["FISCAL_WEEK"] = "FISCAL_WEEK";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["FISCAL_MONTH"] = "FISCAL_MONTH";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["FISCAL_QUARTER"] = "FISCAL_QUARTER";
    DataLakeCriteriaFieldsModelPeriodTypeEnum["FISCAL_YEAR"] = "FISCAL_YEAR";
})(DataLakeCriteriaFieldsModelPeriodTypeEnum || (exports.DataLakeCriteriaFieldsModelPeriodTypeEnum = DataLakeCriteriaFieldsModelPeriodTypeEnum = {}));
/** Search on a list of document statuses */
var DepositSearchModelStatusesEnum;
(function (DepositSearchModelStatusesEnum) {
    DepositSearchModelStatusesEnum["INUSE"] = "INUSE";
    DepositSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    DepositSearchModelStatusesEnum["POSTED"] = "POSTED";
    DepositSearchModelStatusesEnum["APPROVED"] = "APPROVED";
    DepositSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    DepositSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
})(DepositSearchModelStatusesEnum || (exports.DepositSearchModelStatusesEnum = DepositSearchModelStatusesEnum = {}));
var DepositSummaryModelDocumentTypeEnum;
(function (DepositSummaryModelDocumentTypeEnum) {
    DepositSummaryModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    DepositSummaryModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    DepositSummaryModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    DepositSummaryModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    DepositSummaryModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(DepositSummaryModelDocumentTypeEnum || (exports.DepositSummaryModelDocumentTypeEnum = DepositSummaryModelDocumentTypeEnum = {}));
var DepositSummaryModelStatusEnum;
(function (DepositSummaryModelStatusEnum) {
    DepositSummaryModelStatusEnum["INUSE"] = "INUSE";
    DepositSummaryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    DepositSummaryModelStatusEnum["POSTED"] = "POSTED";
    DepositSummaryModelStatusEnum["APPROVED"] = "APPROVED";
    DepositSummaryModelStatusEnum["APPROVING"] = "APPROVING";
    DepositSummaryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(DepositSummaryModelStatusEnum || (exports.DepositSummaryModelStatusEnum = DepositSummaryModelStatusEnum = {}));
/** The email template type. */
var EmailTemplateModelTypeEnum;
(function (EmailTemplateModelTypeEnum) {
    EmailTemplateModelTypeEnum["NOTIFICATION"] = "NOTIFICATION";
    EmailTemplateModelTypeEnum["REMINDER_BROADCAST"] = "REMINDER_BROADCAST";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_CUST"] = "REMINDER_EXPENSE_CUST";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_MGR"] = "REMINDER_EXPENSE_MGR";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_PM"] = "REMINDER_EXPENSE_PM";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_CUST"] = "REMINDER_TIMESHEET_CUST";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_MGR"] = "REMINDER_TIMESHEET_MGR";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_PM"] = "REMINDER_TIMESHEET_PM";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_SUBMIT"] = "REMINDER_TIMESHEET_SUBMIT";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_MINIMUM"] = "REMINDER_TIMESHEET_MINIMUM";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_CUST_ALT"] = "REMINDER_EXPENSE_CUST_ALT";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_MGR_ALT"] = "REMINDER_EXPENSE_MGR_ALT";
    EmailTemplateModelTypeEnum["REMINDER_EXPENSE_PM_ALT"] = "REMINDER_EXPENSE_PM_ALT";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_CUST_ALT"] = "REMINDER_TIMESHEET_CUST_ALT";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_MGR_ALT"] = "REMINDER_TIMESHEET_MGR_ALT";
    EmailTemplateModelTypeEnum["REMINDER_TIMESHEET_PM_ALT"] = "REMINDER_TIMESHEET_PM_ALT";
    EmailTemplateModelTypeEnum["INVOICE_SEND"] = "INVOICE_SEND";
    EmailTemplateModelTypeEnum["PURCHASE_ORDER_SEND"] = "PURCHASE_ORDER_SEND";
    EmailTemplateModelTypeEnum["REMINDER_PO_CUST"] = "REMINDER_PO_CUST";
    EmailTemplateModelTypeEnum["REMINDER_PO_CUST_ALT"] = "REMINDER_PO_CUST_ALT";
    EmailTemplateModelTypeEnum["REMINDER_PO_MGR"] = "REMINDER_PO_MGR";
    EmailTemplateModelTypeEnum["REMINDER_PO_MGR_ALT"] = "REMINDER_PO_MGR_ALT";
    EmailTemplateModelTypeEnum["REMINDER_PO_PM"] = "REMINDER_PO_PM";
    EmailTemplateModelTypeEnum["REMINDER_PO_PM_ALT"] = "REMINDER_PO_PM_ALT";
    EmailTemplateModelTypeEnum["REMINDER_PR_CUST"] = "REMINDER_PR_CUST";
    EmailTemplateModelTypeEnum["REMINDER_PR_CUST_ALT"] = "REMINDER_PR_CUST_ALT";
    EmailTemplateModelTypeEnum["REMINDER_PR_MGR"] = "REMINDER_PR_MGR";
    EmailTemplateModelTypeEnum["REMINDER_PR_MGR_ALT"] = "REMINDER_PR_MGR_ALT";
    EmailTemplateModelTypeEnum["REMINDER_PR_PM"] = "REMINDER_PR_PM";
    EmailTemplateModelTypeEnum["REMINDER_PR_PM_ALT"] = "REMINDER_PR_PM_ALT";
    EmailTemplateModelTypeEnum["REMINDER_VI_CUST"] = "REMINDER_VI_CUST";
    EmailTemplateModelTypeEnum["REMINDER_VI_CUST_ALT"] = "REMINDER_VI_CUST_ALT";
    EmailTemplateModelTypeEnum["REMINDER_VI_MGR"] = "REMINDER_VI_MGR";
    EmailTemplateModelTypeEnum["REMINDER_VI_MGR_ALT"] = "REMINDER_VI_MGR_ALT";
    EmailTemplateModelTypeEnum["REMINDER_VI_PM"] = "REMINDER_VI_PM";
    EmailTemplateModelTypeEnum["REMINDER_VI_PM_ALT"] = "REMINDER_VI_PM_ALT";
    EmailTemplateModelTypeEnum["REMINDER_VI_RECEIVER_APPROVER"] = "REMINDER_VI_RECEIVER_APPROVER";
    EmailTemplateModelTypeEnum["REMINDER_VI_RECEIVER_APPROVER_ALT"] = "REMINDER_VI_RECEIVER_APPROVER_ALT";
    EmailTemplateModelTypeEnum["UNPAID_INVOICE_REMINDER"] = "UNPAID_INVOICE_REMINDER";
    EmailTemplateModelTypeEnum["SUBK_NOTIFICATION"] = "SUBK_NOTIFICATION";
})(EmailTemplateModelTypeEnum || (exports.EmailTemplateModelTypeEnum = EmailTemplateModelTypeEnum = {}));
/** Indicates where the entertainment event discussion took place (defaults to DURING). */
var EntertainmentWizardModelTookPlaceEnum;
(function (EntertainmentWizardModelTookPlaceEnum) {
    EntertainmentWizardModelTookPlaceEnum["BEFORE"] = "BEFORE";
    EntertainmentWizardModelTookPlaceEnum["DURING"] = "DURING";
    EntertainmentWizardModelTookPlaceEnum["AFTER"] = "AFTER";
})(EntertainmentWizardModelTookPlaceEnum || (exports.EntertainmentWizardModelTookPlaceEnum = EntertainmentWizardModelTookPlaceEnum = {}));
/** Machine-readable token that uniquely identifies the error that occurred. Clients should rely on 'code' for deciding what message to display to their end users. See route-specific documentation for possible code values returned for that route. */
var ErrorInstanceCodeEnum;
(function (ErrorInstanceCodeEnum) {
    ErrorInstanceCodeEnum["VALIDATION_GENERIC"] = "VALIDATION_GENERIC";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_PARAM"] = "VALIDATION_INVALID_PARAM";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_FIELD"] = "VALIDATION_INVALID_FIELD";
    ErrorInstanceCodeEnum["VALIDATION_BELOW_MIN"] = "VALIDATION_BELOW_MIN";
    ErrorInstanceCodeEnum["VALIDATION_EXCEEDS_MAX"] = "VALIDATION_EXCEEDS_MAX";
    ErrorInstanceCodeEnum["VALIDATION_DECIMAL_OUT_OF_BOUNDS"] = "VALIDATION_DECIMAL_OUT_OF_BOUNDS";
    ErrorInstanceCodeEnum["VALIDATION_EMAIL_BAD_FORMAT"] = "VALIDATION_EMAIL_BAD_FORMAT";
    ErrorInstanceCodeEnum["VALIDATION_MUST_NOT_BE_BLANK"] = "VALIDATION_MUST_NOT_BE_BLANK";
    ErrorInstanceCodeEnum["VALIDATION_MUST_NOT_BE_NULL"] = "VALIDATION_MUST_NOT_BE_NULL";
    ErrorInstanceCodeEnum["VALIDATION_MUST_BE_NULL_OR_NOT_BLANK"] = "VALIDATION_MUST_BE_NULL_OR_NOT_BLANK";
    ErrorInstanceCodeEnum["VALIDATION_MUST_NOT_BE_EMPTY"] = "VALIDATION_MUST_NOT_BE_EMPTY";
    ErrorInstanceCodeEnum["VALIDATION_MUST_CONTAIN_NO_WHITESPACE"] = "VALIDATION_MUST_CONTAIN_NO_WHITESPACE";
    ErrorInstanceCodeEnum["VALIDATION_MUST_BE_NULL"] = "VALIDATION_MUST_BE_NULL";
    ErrorInstanceCodeEnum["VALIDATION_PATTERN_MISMATCH"] = "VALIDATION_PATTERN_MISMATCH";
    ErrorInstanceCodeEnum["VALIDATION_MUST_BE_GREATER_THAN_ZERO"] = "VALIDATION_MUST_BE_GREATER_THAN_ZERO";
    ErrorInstanceCodeEnum["VALIDATION_MUST_BE_GREATER_THAN_EQUAL_ZERO"] = "VALIDATION_MUST_BE_GREATER_THAN_EQUAL_ZERO";
    ErrorInstanceCodeEnum["VALIDATION_MUST_NOT_BE_ZERO"] = "VALIDATION_MUST_NOT_BE_ZERO";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_SIZE"] = "VALIDATION_INVALID_SIZE";
    ErrorInstanceCodeEnum["VALIDATION_DATE_OUT_OF_RANGE"] = "VALIDATION_DATE_OUT_OF_RANGE";
    ErrorInstanceCodeEnum["VALIDATION_TIME_OUT_OF_RANGE"] = "VALIDATION_TIME_OUT_OF_RANGE";
    ErrorInstanceCodeEnum["VALIDATION_TIME_FIELDS_OUT_OF_ORDER"] = "VALIDATION_TIME_FIELDS_OUT_OF_ORDER";
    ErrorInstanceCodeEnum["VALIDATION_DATE_FIELDS_OUT_OF_ORDER"] = "VALIDATION_DATE_FIELDS_OUT_OF_ORDER";
    ErrorInstanceCodeEnum["VALIDATION_RESOURCE_ALREADY_EXISTS"] = "VALIDATION_RESOURCE_ALREADY_EXISTS";
    ErrorInstanceCodeEnum["VALIDATION_FIELD_ALREADY_EXISTS"] = "VALIDATION_FIELD_ALREADY_EXISTS";
    ErrorInstanceCodeEnum["VALIDATION_REQUIRED_FIELD"] = "VALIDATION_REQUIRED_FIELD";
    ErrorInstanceCodeEnum["VALIDATION_ORG_NOT_LEGAL_ENTITY"] = "VALIDATION_ORG_NOT_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["VALIDATION_ORG_NOT_FINANCIAL_ORG"] = "VALIDATION_ORG_NOT_FINANCIAL_ORG";
    ErrorInstanceCodeEnum["VALIDATION_NOT_BELONG_TO_LEGAL_ENTITY"] = "VALIDATION_NOT_BELONG_TO_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_ACCESS"] = "VALIDATION_INVALID_ACCESS";
    ErrorInstanceCodeEnum["VALIDATION_REFERENCE_NOT_FOUND"] = "VALIDATION_REFERENCE_NOT_FOUND";
    ErrorInstanceCodeEnum["VALIDATION_REFERENCE_EMPTY"] = "VALIDATION_REFERENCE_EMPTY";
    ErrorInstanceCodeEnum["VALIDATION_REFERENCE_MISMATCH"] = "VALIDATION_REFERENCE_MISMATCH";
    ErrorInstanceCodeEnum["VALIDATION_ASSOCIATION_EXISTS"] = "VALIDATION_ASSOCIATION_EXISTS";
    ErrorInstanceCodeEnum["VALIDATION_INCONSISTENT_FIELDS"] = "VALIDATION_INCONSISTENT_FIELDS";
    ErrorInstanceCodeEnum["VALIDATION_UNEXPECTED_VALUE"] = "VALIDATION_UNEXPECTED_VALUE";
    ErrorInstanceCodeEnum["VALIDATION_AT_LEAST_ONE_MUST_BE_TRUE"] = "VALIDATION_AT_LEAST_ONE_MUST_BE_TRUE";
    ErrorInstanceCodeEnum["VALIDATION_ONLY_ONE_OF_CAN_BE_SET"] = "VALIDATION_ONLY_ONE_OF_CAN_BE_SET";
    ErrorInstanceCodeEnum["VALIDATION_REQUIRED_WHEN_TRUE"] = "VALIDATION_REQUIRED_WHEN_TRUE";
    ErrorInstanceCodeEnum["VALIDATION_REQUIRED_WHEN_FALSE"] = "VALIDATION_REQUIRED_WHEN_FALSE";
    ErrorInstanceCodeEnum["VALIDATION_ONLY_VALID_WHEN_TRUE"] = "VALIDATION_ONLY_VALID_WHEN_TRUE";
    ErrorInstanceCodeEnum["VALIDATION_ONLY_VALID_WHEN_FALSE"] = "VALIDATION_ONLY_VALID_WHEN_FALSE";
    ErrorInstanceCodeEnum["VALIDATION_NOT_ACTIVE"] = "VALIDATION_NOT_ACTIVE";
    ErrorInstanceCodeEnum["VALIDATION_UNSUPPORTED_FIELD"] = "VALIDATION_UNSUPPORTED_FIELD";
    ErrorInstanceCodeEnum["VALIDATION_UNSUPPORTED_VALUE"] = "VALIDATION_UNSUPPORTED_VALUE";
    ErrorInstanceCodeEnum["VALIDATION_CANNOT_BE_SAME"] = "VALIDATION_CANNOT_BE_SAME";
    ErrorInstanceCodeEnum["VALIDATION_ONE_OF_REQUIRED"] = "VALIDATION_ONE_OF_REQUIRED";
    ErrorInstanceCodeEnum["VALIDATION_FEATURE_NOT_ENABLED"] = "VALIDATION_FEATURE_NOT_ENABLED";
    ErrorInstanceCodeEnum["VALIDATION_NOTHING_TO_UPDATE"] = "VALIDATION_NOTHING_TO_UPDATE";
    ErrorInstanceCodeEnum["VALIDATION_UPDATE_CANNOT_MODIFY_FIELD"] = "VALIDATION_UPDATE_CANNOT_MODIFY_FIELD";
    ErrorInstanceCodeEnum["VALIDATION_UPDATE_CANNOT_MODIFY_RESOURCE"] = "VALIDATION_UPDATE_CANNOT_MODIFY_RESOURCE";
    ErrorInstanceCodeEnum["VALIDATION_INSUFFICIENT_LICENSE"] = "VALIDATION_INSUFFICIENT_LICENSE";
    ErrorInstanceCodeEnum["VALIDATION_INSUFFICIENT_CONFIG"] = "VALIDATION_INSUFFICIENT_CONFIG";
    ErrorInstanceCodeEnum["VALIDATION_INSUFFICENT_PERMISSIONS"] = "VALIDATION_INSUFFICENT_PERMISSIONS";
    ErrorInstanceCodeEnum["VALIDATION_DUPLICATES"] = "VALIDATION_DUPLICATES";
    ErrorInstanceCodeEnum["VALIDATION_DELETE_NOT_ALLOWED"] = "VALIDATION_DELETE_NOT_ALLOWED";
    ErrorInstanceCodeEnum["VALIDATION_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES"] = "VALIDATION_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES";
    ErrorInstanceCodeEnum["VALIDATION_FISCAL_MONTH_NOT_FOUND"] = "VALIDATION_FISCAL_MONTH_NOT_FOUND";
    ErrorInstanceCodeEnum["VALIDATION_BYTE_LENGTH_MISMATCH"] = "VALIDATION_BYTE_LENGTH_MISMATCH";
    ErrorInstanceCodeEnum["VALIDATION_UDF_INPUT"] = "VALIDATION_UDF_INPUT";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_STATUS"] = "VALIDATION_INVALID_STATUS";
    ErrorInstanceCodeEnum["VALIDATION_CONFLICTING_SEARCH_PARAMETERS"] = "VALIDATION_CONFLICTING_SEARCH_PARAMETERS";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_VERIFICATION_CODE"] = "VALIDATION_INVALID_VERIFICATION_CODE";
    ErrorInstanceCodeEnum["VALIDATION_INVALID_MONETARY_AMOUNT"] = "VALIDATION_INVALID_MONETARY_AMOUNT";
    ErrorInstanceCodeEnum["INVALID_CONFIGURATION"] = "INVALID_CONFIGURATION";
    ErrorInstanceCodeEnum["CONSTRAINT_VIOLATION"] = "CONSTRAINT_VIOLATION";
    ErrorInstanceCodeEnum["PAYLOAD_TOO_LARGE"] = "PAYLOAD_TOO_LARGE";
    ErrorInstanceCodeEnum["JSON_PARSING_ERROR"] = "JSON_PARSING_ERROR";
    ErrorInstanceCodeEnum["JSON_MAPPING_ERROR"] = "JSON_MAPPING_ERROR";
    ErrorInstanceCodeEnum["LOGIN_ACCOUNT_LOCKED"] = "LOGIN_ACCOUNT_LOCKED";
    ErrorInstanceCodeEnum["LOGIN_INVALID_CREDENTIALS"] = "LOGIN_INVALID_CREDENTIALS";
    ErrorInstanceCodeEnum["LOGIN_EXPIRED_CREDENTIALS"] = "LOGIN_EXPIRED_CREDENTIALS";
    ErrorInstanceCodeEnum["NOT_DELETABLE"] = "NOT_DELETABLE";
    ErrorInstanceCodeEnum["REQUEST_BODY_NOT_READABLE"] = "REQUEST_BODY_NOT_READABLE";
    ErrorInstanceCodeEnum["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorInstanceCodeEnum["JWT_INVALID_TOKEN_SIGNATURE"] = "JWT_INVALID_TOKEN_SIGNATURE";
    ErrorInstanceCodeEnum["JWT_EXPIRED_TOKEN"] = "JWT_EXPIRED_TOKEN";
    ErrorInstanceCodeEnum["JWT_INVALID_CLAIM"] = "JWT_INVALID_CLAIM";
    ErrorInstanceCodeEnum["JWT_MISSING_TOKEN"] = "JWT_MISSING_TOKEN";
    ErrorInstanceCodeEnum["JWT_REVOKED_TOKEN"] = "JWT_REVOKED_TOKEN";
    ErrorInstanceCodeEnum["JWT_BADLY_FORMATTED_TOKEN"] = "JWT_BADLY_FORMATTED_TOKEN";
    ErrorInstanceCodeEnum["FORBIDDEN"] = "FORBIDDEN";
    ErrorInstanceCodeEnum["FORBIDDEN_INSUFFICIENT_LICENSE"] = "FORBIDDEN_INSUFFICIENT_LICENSE";
    ErrorInstanceCodeEnum["FORBIDDEN_INSUFFICIENT_CONFIGURATION"] = "FORBIDDEN_INSUFFICIENT_CONFIGURATION";
    ErrorInstanceCodeEnum["FORBIDDEN_INSUFFICIENT_ROLE"] = "FORBIDDEN_INSUFFICIENT_ROLE";
    ErrorInstanceCodeEnum["FORBIDDEN_NOT_OWNER"] = "FORBIDDEN_NOT_OWNER";
    ErrorInstanceCodeEnum["FORBIDDEN_NOT_MANAGER"] = "FORBIDDEN_NOT_MANAGER";
    ErrorInstanceCodeEnum["FORBIDDEN_NOT_PROJECT_MANAGER"] = "FORBIDDEN_NOT_PROJECT_MANAGER";
    ErrorInstanceCodeEnum["FORBIDDEN_CANNOT_ASSIGN_TO_PROJECT"] = "FORBIDDEN_CANNOT_ASSIGN_TO_PROJECT";
    ErrorInstanceCodeEnum["FORBIDDEN_NOT_HR_ADMIN"] = "FORBIDDEN_NOT_HR_ADMIN";
    ErrorInstanceCodeEnum["NOT_FOUND"] = "NOT_FOUND";
    ErrorInstanceCodeEnum["DUPLICATE"] = "DUPLICATE";
    ErrorInstanceCodeEnum["CONFLICT"] = "CONFLICT";
    ErrorInstanceCodeEnum["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    ErrorInstanceCodeEnum["INTERNAL_GENERIC"] = "INTERNAL_GENERIC";
    ErrorInstanceCodeEnum["EXTERNAL_GENERIC"] = "EXTERNAL_GENERIC";
    ErrorInstanceCodeEnum["EXTERNAL_UNAUTHORIZED"] = "EXTERNAL_UNAUTHORIZED";
    ErrorInstanceCodeEnum["EXTERNAL_FORBIDDEN"] = "EXTERNAL_FORBIDDEN";
    ErrorInstanceCodeEnum["EXTERNAL_NOT_FOUND"] = "EXTERNAL_NOT_FOUND";
    ErrorInstanceCodeEnum["INTERNAL_INSERT"] = "INTERNAL_INSERT";
    ErrorInstanceCodeEnum["INTERNAL_UPDATE"] = "INTERNAL_UPDATE";
    ErrorInstanceCodeEnum["INTERNAL_DELETE"] = "INTERNAL_DELETE";
    ErrorInstanceCodeEnum["UNAVAILABLE"] = "UNAVAILABLE";
    ErrorInstanceCodeEnum["AG_SELF_APPROVAL_DISABLED"] = "AG_SELF_APPROVAL_DISABLED";
    ErrorInstanceCodeEnum["AG_APPROVAL_REQUIRED"] = "AG_APPROVAL_REQUIRED";
    ErrorInstanceCodeEnum["AG_INVALID_APPROVAL_GROUP_TYPE"] = "AG_INVALID_APPROVAL_GROUP_TYPE";
    ErrorInstanceCodeEnum["AG_EXP_APPROVAL_UNAVAILABLE"] = "AG_EXP_APPROVAL_UNAVAILABLE";
    ErrorInstanceCodeEnum["AG_EXP_APPROVAL_FORBIDDEN"] = "AG_EXP_APPROVAL_FORBIDDEN";
    ErrorInstanceCodeEnum["AG_TIME_APPROVAL_UNAVAILABLE"] = "AG_TIME_APPROVAL_UNAVAILABLE";
    ErrorInstanceCodeEnum["AG_TIME_APPROVAL_FORBIDDEN"] = "AG_TIME_APPROVAL_FORBIDDEN";
    ErrorInstanceCodeEnum["AG_TYPE_MISMATCH"] = "AG_TYPE_MISMATCH";
    ErrorInstanceCodeEnum["AG_SUBMITTER_NOT_REMOVABLE"] = "AG_SUBMITTER_NOT_REMOVABLE";
    ErrorInstanceCodeEnum["AG_SUBMITTING_PROJECT_NOT_SETUP_FOR_INVOICING"] = "AG_SUBMITTING_PROJECT_NOT_SETUP_FOR_INVOICING";
    ErrorInstanceCodeEnum["AG_INVOICE_APPROVAL_UNAVAILABLE"] = "AG_INVOICE_APPROVAL_UNAVAILABLE";
    ErrorInstanceCodeEnum["AG_INVOICE_APPROVAL_FORBIDDEN"] = "AG_INVOICE_APPROVAL_FORBIDDEN";
    ErrorInstanceCodeEnum["ALTERNATE_CANNOT_ASSIGN_SAME_USER"] = "ALTERNATE_CANNOT_ASSIGN_SAME_USER";
    ErrorInstanceCodeEnum["ALTERNATE_RESTRICTED_TO_EMPLOYEES"] = "ALTERNATE_RESTRICTED_TO_EMPLOYEES";
    ErrorInstanceCodeEnum["ALTERNATE_RESTRICTED_TO_MANAGERS"] = "ALTERNATE_RESTRICTED_TO_MANAGERS";
    ErrorInstanceCodeEnum["ALTERNATE_RESTRICTED_TO_ROLE"] = "ALTERNATE_RESTRICTED_TO_ROLE";
    ErrorInstanceCodeEnum["CONTRACT_WAGE_DETERMINATION_START_DATE_BEFORE_CONTRACT_START_DATE"] = "CONTRACT_WAGE_DETERMINATION_START_DATE_BEFORE_CONTRACT_START_DATE";
    ErrorInstanceCodeEnum["CONTRACT_WAGE_DETERMINATION_END_DATE_AFTER_CONTRACT_END_DATE"] = "CONTRACT_WAGE_DETERMINATION_END_DATE_AFTER_CONTRACT_END_DATE";
    ErrorInstanceCodeEnum["CONTRACT_START_DATE_BEFORE_PREVIOUS_START_DATE"] = "CONTRACT_START_DATE_BEFORE_PREVIOUS_START_DATE";
    ErrorInstanceCodeEnum["CONTRACT_END_DATE_AFTER_NEXT_START_DATE"] = "CONTRACT_END_DATE_AFTER_NEXT_START_DATE";
    ErrorInstanceCodeEnum["CONTRACT_COVERAGE_MUST_BE_CONTINUOUS"] = "CONTRACT_COVERAGE_MUST_BE_CONTINUOUS";
    ErrorInstanceCodeEnum["CONTRACT_SCA_RATE_REQUIRED"] = "CONTRACT_SCA_RATE_REQUIRED";
    ErrorInstanceCodeEnum["CONTRACT_PRIME_CONTRACT_KEY_NOT_ALLOWED"] = "CONTRACT_PRIME_CONTRACT_KEY_NOT_ALLOWED";
    ErrorInstanceCodeEnum["CUSTOMER_PAYMENT_IS_APPLIED"] = "CUSTOMER_PAYMENT_IS_APPLIED";
    ErrorInstanceCodeEnum["CP_POSTED"] = "CP_POSTED";
    ErrorInstanceCodeEnum["CP_SUBMITTED"] = "CP_SUBMITTED";
    ErrorInstanceCodeEnum["DEPOSIT_POSTED"] = "DEPOSIT_POSTED";
    ErrorInstanceCodeEnum["DEPOSIT_SUBMITTED"] = "DEPOSIT_SUBMITTED";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_APPLIED"] = "DEPOSITED_DOC_APPLIED";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_NOT_POSTED"] = "DEPOSITED_DOC_NOT_POSTED";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_VOIDED"] = "DEPOSITED_DOC_VOIDED";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_VOIDING"] = "DEPOSITED_DOC_VOIDING";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_LEGAL_ENTITY_MISMATCH"] = "DEPOSITED_DOC_LEGAL_ENTITY_MISMATCH";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_ALREADY_INCLUDED"] = "DEPOSITED_DOC_ALREADY_INCLUDED";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_ZERO_AMOUNT"] = "DEPOSITED_DOC_ZERO_AMOUNT";
    ErrorInstanceCodeEnum["DEPOSITED_DOC_INVALID_BANK_ACCOUNT_TYPE"] = "DEPOSITED_DOC_INVALID_BANK_ACCOUNT_TYPE";
    ErrorInstanceCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_REMOVE_DEFAULT_STATUS"] = "EXCHANGE_RATE_TYPE_CANNOT_REMOVE_DEFAULT_STATUS";
    ErrorInstanceCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_DELETE_DEFAULT"] = "EXCHANGE_RATE_TYPE_CANNOT_DELETE_DEFAULT";
    ErrorInstanceCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_DELETE_IN_USE"] = "EXCHANGE_RATE_TYPE_CANNOT_DELETE_IN_USE";
    ErrorInstanceCodeEnum["EXCHANGE_RATE_SAME_FROM_TO_CURRENCY"] = "EXCHANGE_RATE_SAME_FROM_TO_CURRENCY";
    ErrorInstanceCodeEnum["EXCHANGE_RATE_NOT_FOUND"] = "EXCHANGE_RATE_NOT_FOUND";
    ErrorInstanceCodeEnum["EXPENSE_SUMMARY_REQUIRED_WHEN_WITH_WIZARD"] = "EXPENSE_SUMMARY_REQUIRED_WHEN_WITH_WIZARD";
    ErrorInstanceCodeEnum["EXPENSE_ATTACHMENT_NOT_ASSOCIATED_WITH_EXPENSE"] = "EXPENSE_ATTACHMENT_NOT_ASSOCIATED_WITH_EXPENSE";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_PROJECT_KEY_MUST_NOT_BE_NULL"] = "EXPENSE_PROJECT_ALLOCATION_PROJECT_KEY_MUST_NOT_BE_NULL";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_PROJECT_NOT_FOUND"] = "EXPENSE_PROJECT_ALLOCATION_PROJECT_NOT_FOUND";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_TASK_INVALID"] = "EXPENSE_PROJECT_ALLOCATION_TASK_INVALID";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_TASK_NOT_FOUND"] = "EXPENSE_PROJECT_ALLOCATION_TASK_NOT_FOUND";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_PERCENTAGE_MUST_NOT_BE_NULL"] = "EXPENSE_PROJECT_ALLOCATION_PERCENTAGE_MUST_NOT_BE_NULL";
    ErrorInstanceCodeEnum["EXPENSEPROJECTALLOCATIONPERCENTAGESMUSTTOTAL100"] = "EXPENSE_PROJECT_ALLOCATION_PERCENTAGES_MUST_TOTAL_100";
    ErrorInstanceCodeEnum["EXPENSE_PROJECT_ALLOCATION_DUPLICATIONS"] = "EXPENSE_PROJECT_ALLOCATION_DUPLICATIONS";
    ErrorInstanceCodeEnum["EXPENSE_REPORT_MULTI_ENTITY_NOT_ENABLED"] = "EXPENSE_REPORT_MULTI_ENTITY_NOT_ENABLED";
    ErrorInstanceCodeEnum["EXPENSE_REPORT_MULTI_ENTITY_NO_ASSIGNMENT"] = "EXPENSE_REPORT_MULTI_ENTITY_NO_ASSIGNMENT";
    ErrorInstanceCodeEnum["EXPENSE_DETAIL_AMOUNT_MISMATCH"] = "EXPENSE_DETAIL_AMOUNT_MISMATCH";
    ErrorInstanceCodeEnum["EXPENSE_DETAIL_EXCHANGE_RATE_MUST_BE_ONE"] = "EXPENSE_DETAIL_EXCHANGE_RATE_MUST_BE_ONE";
    ErrorInstanceCodeEnum["FA_DISPOSAL_FIELDS_REQUIRED"] = "FA_DISPOSAL_FIELDS_REQUIRED";
    ErrorInstanceCodeEnum["FA_DISPOSAL_BEFORE_DEPRECIATION_START"] = "FA_DISPOSAL_BEFORE_DEPRECIATION_START";
    ErrorInstanceCodeEnum["FA_DISPOSAL_BEFORE_FISCAL_PERIOD_BEGIN"] = "FA_DISPOSAL_BEFORE_FISCAL_PERIOD_BEGIN";
    ErrorInstanceCodeEnum["FA_DISPOSAL_BEFORE_FISCAL_PERIOD_END"] = "FA_DISPOSAL_BEFORE_FISCAL_PERIOD_END";
    ErrorInstanceCodeEnum["FA_DISPOSAL_EQUALS_FISCAL_PERIOD_END"] = "FA_DISPOSAL_EQUALS_FISCAL_PERIOD_END";
    ErrorInstanceCodeEnum["FA_JOURNAL_ENTRY_NOT_FOUND"] = "FA_JOURNAL_ENTRY_NOT_FOUND";
    ErrorInstanceCodeEnum["FA_HAS_POSTED_DISPOSAL"] = "FA_HAS_POSTED_DISPOSAL";
    ErrorInstanceCodeEnum["FA_HAS_POSTED_TRANSACTIONS"] = "FA_HAS_POSTED_TRANSACTIONS";
    ErrorInstanceCodeEnum["FA_NO_LONGER_POSTABLE"] = "FA_NO_LONGER_POSTABLE";
    ErrorInstanceCodeEnum["FA_TRANSACTION_ENTRY_NOT_ALLOWED_FOR_ACCOUNT"] = "FA_TRANSACTION_ENTRY_NOT_ALLOWED_FOR_ACCOUNT";
    ErrorInstanceCodeEnum["FA_PROJECT_REQUIRED_FOR_ACCOUNT"] = "FA_PROJECT_REQUIRED_FOR_ACCOUNT";
    ErrorInstanceCodeEnum["FA_LOCATION_CONFLICT"] = "FA_LOCATION_CONFLICT";
    ErrorInstanceCodeEnum["FAP_NO_ORG_FOR_FIXED_ASSET"] = "FAP_NO_ORG_FOR_FIXED_ASSET";
    ErrorInstanceCodeEnum["FAP_FISCAL_PERIOD_CLOSED"] = "FAP_FISCAL_PERIOD_CLOSED";
    ErrorInstanceCodeEnum["FAP_INCLUDED_IN_BANK_RECONCILIATION"] = "FAP_INCLUDED_IN_BANK_RECONCILIATION";
    ErrorInstanceCodeEnum["FAP_NOT_LATEST_POST_FOR_LEGAL_ENTITY"] = "FAP_NOT_LATEST_POST_FOR_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["FAP_STATUS_REQUIRED_WHEN_DISPOSED_ASSETS_INCLUDED"] = "FAP_STATUS_REQUIRED_WHEN_DISPOSED_ASSETS_INCLUDED";
    ErrorInstanceCodeEnum["FPI_EITHER_BILL_DATE_OR_BILL_ON_COMPLETION_REQUIRED"] = "FPI_EITHER_BILL_DATE_OR_BILL_ON_COMPLETION_REQUIRED";
    ErrorInstanceCodeEnum["FPI_BILL_AND_BILL_ON_COMPLETION_SET"] = "FPI_BILL_AND_BILL_ON_COMPLETION_SET";
    ErrorInstanceCodeEnum["FPI_INVALID_REV_RECOGNITION_METHOD_FOR_SCHEDULE"] = "FPI_INVALID_REV_RECOGNITION_METHOD_FOR_SCHEDULE";
    ErrorInstanceCodeEnum["FPI_ITEM_POSTED_FOR_BILLING"] = "FPI_ITEM_POSTED_FOR_BILLING";
    ErrorInstanceCodeEnum["FPI_ITEM_ON_COMPLETED_INVOICE"] = "FPI_ITEM_ON_COMPLETED_INVOICE";
    ErrorInstanceCodeEnum["IMPORTED_EXPENSE_EXPENSE_TYPE_INVALID"] = "IMPORTED_EXPENSE_EXPENSE_TYPE_INVALID";
    ErrorInstanceCodeEnum["IMPORTED_EXPENSE_NOT_AVAILABLE"] = "IMPORTED_EXPENSE_NOT_AVAILABLE";
    ErrorInstanceCodeEnum["INTEGRATION_USER_EXISTS"] = "INTEGRATION_USER_EXISTS";
    ErrorInstanceCodeEnum["INVENTORY_TASK_PROJECT_MISMATCH"] = "INVENTORY_TASK_PROJECT_MISMATCH";
    ErrorInstanceCodeEnum["INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_TASK_NOT_SUPPORTING_ITEMS"] = "INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_TASK_NOT_SUPPORTING_ITEMS";
    ErrorInstanceCodeEnum["INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_PROJECT_NOT_SUPPORTING_ITEMS"] = "INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_PROJECT_NOT_SUPPORTING_ITEMS";
    ErrorInstanceCodeEnum["INVENTORY_TASK_CONTAINS_PROJECT_NOT_ASSOCIATED_WITH_ITEM"] = "INVENTORY_TASK_CONTAINS_PROJECT_NOT_ASSOCIATED_WITH_ITEM";
    ErrorInstanceCodeEnum["INVOICE_PDF_NOT_FOUND"] = "INVOICE_PDF_NOT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_PDF_EXCEEDS_MAX_SIZE"] = "INVOICE_PDF_EXCEEDS_MAX_SIZE";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_NOT_BELONG_TO_OWNING_ORG"] = "INVOICE_PROJECT_NOT_BELONG_TO_OWNING_ORG";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_OWNING_ORG_NOT_FOUND"] = "INVOICE_PROJECT_OWNING_ORG_NOT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_NOT_FOUND"] = "INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_NOT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_HAS_NO_POSTING_ORG"] = "INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_HAS_NO_POSTING_ORG";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_NOT_VALID_FOR_LEGAL_ENTITY"] = "INVOICE_PROJECT_CUSTOMER_ORG_NOT_VALID_FOR_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_BANK_ACCOUNT"] = "INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_BANK_ACCOUNT";
    ErrorInstanceCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_FEE_ACCOUNT"] = "INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_FEE_ACCOUNT";
    ErrorInstanceCodeEnum["INVOICE_AUTO_PAYMENT_METHOD_NOT_FOUND"] = "INVOICE_AUTO_PAYMENT_METHOD_NOT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_PAYOUT_NOT_MATCH_DETAIL_SUM"] = "INVOICE_PAYOUT_NOT_MATCH_DETAIL_SUM";
    ErrorInstanceCodeEnum["INVOICE_MORE_THAN_ONE_PAYMENT_FOUND"] = "INVOICE_MORE_THAN_ONE_PAYMENT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_SINGLE_PAYOUT_FOR_MULTIPLE_LEGAL_ENTITIES"] = "INVOICE_SINGLE_PAYOUT_FOR_MULTIPLE_LEGAL_ENTITIES";
    ErrorInstanceCodeEnum["INVOICE_BANK_ACCOUNT_NOT_FOUND"] = "INVOICE_BANK_ACCOUNT_NOT_FOUND";
    ErrorInstanceCodeEnum["INVOICE_MULTIPLE_BANK_ACCOUNTS_FOUND"] = "INVOICE_MULTIPLE_BANK_ACCOUNTS_FOUND";
    ErrorInstanceCodeEnum["INVOICE_STATUS_NOT_ALLOW_SUBMIT"] = "INVOICE_STATUS_NOT_ALLOW_SUBMIT";
    ErrorInstanceCodeEnum["INVOICE_CANNOT_SUBMIT_DUE_TO_APPROVALS"] = "INVOICE_CANNOT_SUBMIT_DUE_TO_APPROVALS";
    ErrorInstanceCodeEnum["INVOICE_STATUS_NOT_ALLOW_COMPLETE"] = "INVOICE_STATUS_NOT_ALLOW_COMPLETE";
    ErrorInstanceCodeEnum["INVOICE_CANNOT_POST_COMPLETION"] = "INVOICE_CANNOT_POST_COMPLETION";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_WORK_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_WORK_DATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COMMENTS"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COMMENTS";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_DATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COMMENTS"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COMMENTS";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_PCT"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_PCT";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_MULT"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_MULT";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST_RATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST_RATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_BILL_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_BILL_DATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_INDV"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_INDV";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_ITEM_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_ITEM_DATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_MISSING"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_MISSING";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_HEADING"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_HEADING";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_DUPLICATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_DUPLICATE";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_QTY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_QTY";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_ITD_QTY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_ITD_QTY";
    ErrorInstanceCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_KEY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_KEY";
    ErrorInstanceCodeEnum["JOURNAL_PROJECT_REQUIRED_WHEN_FIELD_PROVIDED"] = "JOURNAL_PROJECT_REQUIRED_WHEN_FIELD_PROVIDED";
    ErrorInstanceCodeEnum["JOURNAL_FIELD_REQUIRED_WHEN_PROJECT_PROVIDED"] = "JOURNAL_FIELD_REQUIRED_WHEN_PROJECT_PROVIDED";
    ErrorInstanceCodeEnum["JOURNAL_REVERSING_DATE_MUST_BE_IN_FISCAL_PERIOD_AFTER_POST_DATE"] = "JOURNAL_REVERSING_DATE_MUST_BE_IN_FISCAL_PERIOD_AFTER_POST_DATE";
    ErrorInstanceCodeEnum["JOURNAL_TASK_PROJECT_MISMATCH"] = "JOURNAL_TASK_PROJECT_MISMATCH";
    ErrorInstanceCodeEnum["LOGO_TYPE_INVALID"] = "LOGO_TYPE_INVALID";
    ErrorInstanceCodeEnum["LEAVE_APPROVAL_QUEUE_INVALID_APPROVER"] = "LEAVE_APPROVAL_QUEUE_INVALID_APPROVER";
    ErrorInstanceCodeEnum["LEAVE_APPROVAL_UNAVAILABLE"] = "LEAVE_APPROVAL_UNAVAILABLE";
    ErrorInstanceCodeEnum["MAIL_UNABLE_TO_VERIFY_SIGNATURE"] = "MAIL_UNABLE_TO_VERIFY_SIGNATURE";
    ErrorInstanceCodeEnum["INSTANCE_CURRENCY_NOT_FOUND"] = "INSTANCE_CURRENCY_NOT_FOUND";
    ErrorInstanceCodeEnum["MULTICURRENCY_ALREADY_ACTIVATED"] = "MULTICURRENCY_ALREADY_ACTIVATED";
    ErrorInstanceCodeEnum["MULTICURRENCY_INSTANCE_CURRENCY_NOT_SET"] = "MULTICURRENCY_INSTANCE_CURRENCY_NOT_SET";
    ErrorInstanceCodeEnum["MULTICURRENCY_INSTANCE_CURRENCY_INVALID"] = "MULTICURRENCY_INSTANCE_CURRENCY_INVALID";
    ErrorInstanceCodeEnum["MULTICURRENCY_REQUIRES_CURRENCY_CODE"] = "MULTICURRENCY_REQUIRES_CURRENCY_CODE";
    ErrorInstanceCodeEnum["MULTICURRENCY_OPERATION_NOT_ENABLED"] = "MULTICURRENCY_OPERATION_NOT_ENABLED";
    ErrorInstanceCodeEnum["MULTICURRENCY_INVALID_PAYMENT_METHOD"] = "MULTICURRENCY_INVALID_PAYMENT_METHOD";
    ErrorInstanceCodeEnum["MULTICURRENCY_REQUIRES_USD"] = "MULTICURRENCY_REQUIRES_USD";
    ErrorInstanceCodeEnum["NOTIFICATION_TITLE_REQUIRES_ARGUMENTS"] = "NOTIFICATION_TITLE_REQUIRES_ARGUMENTS";
    ErrorInstanceCodeEnum["NOTIFICATION_MESSAGE_REQUIRES_ARGUMENTS"] = "NOTIFICATION_MESSAGE_REQUIRES_ARGUMENTS";
    ErrorInstanceCodeEnum["ORG_VENDOR_PROFILE_MISMATCH"] = "ORG_VENDOR_PROFILE_MISMATCH";
    ErrorInstanceCodeEnum["ORG_FEDERAL_TAX_ID_INVALID"] = "ORG_FEDERAL_TAX_ID_INVALID";
    ErrorInstanceCodeEnum["ORG_GL_POST_ORG_MISMATCH"] = "ORG_GL_POST_ORG_MISMATCH";
    ErrorInstanceCodeEnum["ORG_ACCOUNT_CATEGORY_INVALID"] = "ORG_ACCOUNT_CATEGORY_INVALID";
    ErrorInstanceCodeEnum["PERSON_PASSWORD_MISMATCH"] = "PERSON_PASSWORD_MISMATCH";
    ErrorInstanceCodeEnum["PERSON_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES"] = "PERSON_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES";
    ErrorInstanceCodeEnum["PERSON_NOT_FOUND"] = "PERSON_NOT_FOUND";
    ErrorInstanceCodeEnum["PERSON_ATTACHMENT_NOT_ASSOCIATED_WITH_PERSON"] = "PERSON_ATTACHMENT_NOT_ASSOCIATED_WITH_PERSON";
    ErrorInstanceCodeEnum["PERSON_PUNCH_CLOCK_USER_REQUIRES_TIMESHEET_USER_ROLE"] = "PERSON_PUNCH_CLOCK_USER_REQUIRES_TIMESHEET_USER_ROLE";
    ErrorInstanceCodeEnum["PERSON_RATE_HAS_EXTRACTED_TIME"] = "PERSON_RATE_HAS_EXTRACTED_TIME";
    ErrorInstanceCodeEnum["PERSON_RATE_EXEMPT_CANNOT_SET_SCA_WAGE_FLAG"] = "PERSON_RATE_EXEMPT_CANNOT_SET_SCA_WAGE_FLAG";
    ErrorInstanceCodeEnum["PLAN_SET_NAME_MUST_HAVE_SYS_DEFAULT"] = "PLAN_SET_NAME_MUST_HAVE_SYS_DEFAULT";
    ErrorInstanceCodeEnum["PO_PR_KEY_REQUIRED"] = "PO_PR_KEY_REQUIRED";
    ErrorInstanceCodeEnum["PO_PR_INVALID_STATUS"] = "PO_PR_INVALID_STATUS";
    ErrorInstanceCodeEnum["PO_COMMITMENT_DATE_NOT_IN_OPEN_FISCAL_PERIOD"] = "PO_COMMITMENT_DATE_NOT_IN_OPEN_FISCAL_PERIOD";
    ErrorInstanceCodeEnum["PO_LINE_NOT_IN_OPEN_STATE"] = "PO_LINE_NOT_IN_OPEN_STATE";
    ErrorInstanceCodeEnum["PO_MOD_NOT_ORIGINAL_PO"] = "PO_MOD_NOT_ORIGINAL_PO";
    ErrorInstanceCodeEnum["PO_MOD_NUMBER_REQUIRED"] = "PO_MOD_NUMBER_REQUIRED";
    ErrorInstanceCodeEnum["PO_MOD_INVALID_VI_OVERAGE"] = "PO_MOD_INVALID_VI_OVERAGE";
    ErrorInstanceCodeEnum["PO_MOD_CANNOT_UPDATE"] = "PO_MOD_CANNOT_UPDATE";
    ErrorInstanceCodeEnum["PO_NOT_IN_OPEN_STATE"] = "PO_NOT_IN_OPEN_STATE";
    ErrorInstanceCodeEnum["PO_NOT_MOD"] = "PO_NOT_MOD";
    ErrorInstanceCodeEnum["PO_NOT_ORIGINAL"] = "PO_NOT_ORIGINAL";
    ErrorInstanceCodeEnum["PO_SUBMIT_VALIDATION"] = "PO_SUBMIT_VALIDATION";
    ErrorInstanceCodeEnum["PO_STATUS_NOT_ALLOW_SUBMIT"] = "PO_STATUS_NOT_ALLOW_SUBMIT";
    ErrorInstanceCodeEnum["PO_WITH_EXISTING_DETAILS_INVALID_UPDATE"] = "PO_WITH_EXISTING_DETAILS_INVALID_UPDATE";
    ErrorInstanceCodeEnum["PO_PR_REFERENCE_MISMATCH"] = "PO_PR_REFERENCE_MISMATCH";
    ErrorInstanceCodeEnum["PO_CANNOT_SUBMIT_TO_APPROVAL_GROUP"] = "PO_CANNOT_SUBMIT_TO_APPROVAL_GROUP";
    ErrorInstanceCodeEnum["PO_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "PO_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ErrorInstanceCodeEnum["PO_DETAILS_INVALID_VALUE"] = "PO_DETAILS_INVALID_VALUE";
    ErrorInstanceCodeEnum["PO_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS"] = "PO_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS";
    ErrorInstanceCodeEnum["PO_DETAILS_ACCOUNT_INVALID"] = "PO_DETAILS_ACCOUNT_INVALID";
    ErrorInstanceCodeEnum["PO_DETAILS_TERMINAL_STATUS"] = "PO_DETAILS_TERMINAL_STATUS";
    ErrorInstanceCodeEnum["PO_DETAILS_REF_LINE_EXISTS"] = "PO_DETAILS_REF_LINE_EXISTS";
    ErrorInstanceCodeEnum["PO_DETAILS_PR_REFERENCE_MISMATCH"] = "PO_DETAILS_PR_REFERENCE_MISMATCH";
    ErrorInstanceCodeEnum["PO_DETAILS_PR_LINE_REFERENCE_MISMATCH"] = "PO_DETAILS_PR_LINE_REFERENCE_MISMATCH";
    ErrorInstanceCodeEnum["PO_WITH_DETAILS_CANNOT_UPDATE_VENDOR_WITH_DIFFERENT_CURRENCY"] = "PO_WITH_DETAILS_CANNOT_UPDATE_VENDOR_WITH_DIFFERENT_CURRENCY";
    ErrorInstanceCodeEnum["PD_AND_VENDOR_WITH_DIFFERENT_CURRENCIES"] = "PD_AND_VENDOR_WITH_DIFFERENT_CURRENCIES";
    ErrorInstanceCodeEnum["PO_ASSIGNMENT_OVERLAPS_EXISTING_ASSIGNMENT"] = "PO_ASSIGNMENT_OVERLAPS_EXISTING_ASSIGNMENT";
    ErrorInstanceCodeEnum["POSTING_GROUP_CANNOT_UPDATE_ACTIVE_STATUS"] = "POSTING_GROUP_CANNOT_UPDATE_ACTIVE_STATUS";
    ErrorInstanceCodeEnum["POSTING_GROUP_CANNOT_UPDATE_TYPE"] = "POSTING_GROUP_CANNOT_UPDATE_TYPE";
    ErrorInstanceCodeEnum["POSTING_GROUP_TYPE_MUST_BE_CUSTOM"] = "POSTING_GROUP_TYPE_MUST_BE_CUSTOM";
    ErrorInstanceCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_REQUIRED"] = "POSTING_GROUP_SOURCE_ACCOUNT_REQUIRED";
    ErrorInstanceCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID"] = "POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID";
    ErrorInstanceCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID_STATE"] = "POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID_STATE";
    ErrorInstanceCodeEnum["POSTING_GROUP_SOURCE_INVALID_ORGANIZATION_SOURCE"] = "POSTING_GROUP_SOURCE_INVALID_ORGANIZATION_SOURCE";
    ErrorInstanceCodeEnum["POSTING_GROUP_SOURCE_POSTING_GROUP_MISMATCH"] = "POSTING_GROUP_SOURCE_POSTING_GROUP_MISMATCH";
    ErrorInstanceCodeEnum["PR_MOD_CANNOT_UPDATE"] = "PR_MOD_CANNOT_UPDATE";
    ErrorInstanceCodeEnum["PR_WITH_EXISTING_DETAILS_INVALID_UPDATE"] = "PR_WITH_EXISTING_DETAILS_INVALID_UPDATE";
    ErrorInstanceCodeEnum["PR_TERMINAL_STATUS"] = "PR_TERMINAL_STATUS";
    ErrorInstanceCodeEnum["PR_NOT_TERMINAL_STATUS"] = "PR_NOT_TERMINAL_STATUS";
    ErrorInstanceCodeEnum["PR_NOT_MOD"] = "PR_NOT_MOD";
    ErrorInstanceCodeEnum["PR_NOT_ORIGINAL"] = "PR_NOT_ORIGINAL";
    ErrorInstanceCodeEnum["PR_MOD_NOT_ORIGINAL_PR"] = "PR_MOD_NOT_ORIGINAL_PR";
    ErrorInstanceCodeEnum["PR_NOT_IN_OPEN_STATE"] = "PR_NOT_IN_OPEN_STATE";
    ErrorInstanceCodeEnum["PR_MOD_NUMBER_REQUIRED"] = "PR_MOD_NUMBER_REQUIRED";
    ErrorInstanceCodeEnum["PR_DETAILS_TERMINAL_STATUS"] = "PR_DETAILS_TERMINAL_STATUS";
    ErrorInstanceCodeEnum["PR_DETAILS_REF_LINE_EXISTS"] = "PR_DETAILS_REF_LINE_EXISTS";
    ErrorInstanceCodeEnum["PR_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS"] = "PR_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS";
    ErrorInstanceCodeEnum["PR_CANNOT_SUBMIT"] = "PR_CANNOT_SUBMIT";
    ErrorInstanceCodeEnum["PR_DETAILS_CANNOT_UPDATE_CURRENCY"] = "PR_DETAILS_CANNOT_UPDATE_CURRENCY";
    ErrorInstanceCodeEnum["PD_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "PD_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ErrorInstanceCodeEnum["PD_DETAILS_ACCOUNT_INVALID"] = "PD_DETAILS_ACCOUNT_INVALID";
    ErrorInstanceCodeEnum["PD_DETAILS_EXCESS_REVERSE_VALUE"] = "PD_DETAILS_EXCESS_REVERSE_VALUE";
    ErrorInstanceCodeEnum["PROJECT_DUPLICATE_RATES"] = "PROJECT_DUPLICATE_RATES";
    ErrorInstanceCodeEnum["PROJECT_RATES_REQUIRED_WITH_NO_MASTER_RATES"] = "PROJECT_RATES_REQUIRED_WITH_NO_MASTER_RATES";
    ErrorInstanceCodeEnum["PROJECT_RATES_NOT_ALLOWED_WITH_MASTER_RATES"] = "PROJECT_RATES_NOT_ALLOWED_WITH_MASTER_RATES";
    ErrorInstanceCodeEnum["PROJECT_LOCATIONS_MISSING_PROJECT_DEFAULT"] = "PROJECT_LOCATIONS_MISSING_PROJECT_DEFAULT";
    ErrorInstanceCodeEnum["PROJECT_DEFAULT_PROJECT_LOCATION_DELETE_NOT_ALLOWED"] = "PROJECT_DEFAULT_PROJECT_LOCATION_DELETE_NOT_ALLOWED";
    ErrorInstanceCodeEnum["PROJECT_CUSTOM_RATE_UPDATE_NOT_ALLOWED"] = "PROJECT_CUSTOM_RATE_UPDATE_NOT_ALLOWED";
    ErrorInstanceCodeEnum["PROJECT_INACTIVE_USER"] = "PROJECT_INACTIVE_USER";
    ErrorInstanceCodeEnum["PROJECT_CONTRIBUTOR_INVOICE_MUST_HAVE_GENERATE_INVOICE_FLAG_SET"] = "PROJECT_CONTRIBUTOR_INVOICE_MUST_HAVE_GENERATE_INVOICE_FLAG_SET";
    ErrorInstanceCodeEnum["PROJECT_LEAD_PROJECT_REQUIRED_FOR_INVOICE_CONTRIBUTORS"] = "PROJECT_LEAD_PROJECT_REQUIRED_FOR_INVOICE_CONTRIBUTORS";
    ErrorInstanceCodeEnum["PROJECT_LEAD_PROJECT_MUST_BE_DIFFERENT_THAN_CONTRIBUTOR_PROJECT"] = "PROJECT_LEAD_PROJECT_MUST_BE_DIFFERENT_THAN_CONTRIBUTOR_PROJECT";
    ErrorInstanceCodeEnum["PROJECT_ORG_NOT_WITHIN_OWNING_ORG_LEGAL_ENTITY"] = "PROJECT_ORG_NOT_WITHIN_OWNING_ORG_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["PROJECT_LEAD_AND_CONTRIBUTOR_PROJECTS_MUST_HAVE_SAME_LEGAL_ENTITY"] = "PROJECT_LEAD_AND_CONTRIBUTOR_PROJECTS_MUST_HAVE_SAME_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["PROJECT_ADDRESS_REQUIRED_WHEN_DEFAULT_NOT_AVAILABLE"] = "PROJECT_ADDRESS_REQUIRED_WHEN_DEFAULT_NOT_AVAILABLE";
    ErrorInstanceCodeEnum["PROJECT_INVOICE_SETUP_NOT_FOUND_FOR_LEAD_PROJECT"] = "PROJECT_INVOICE_SETUP_NOT_FOUND_FOR_LEAD_PROJECT";
    ErrorInstanceCodeEnum["PROJECT_INVOICE_SETUP_INVALID_ACTION_DUE_TO_PENDING_APPROVALS"] = "PROJECT_INVOICE_SETUP_INVALID_ACTION_DUE_TO_PENDING_APPROVALS";
    ErrorInstanceCodeEnum["PROJECT_INVALID_LEAD_PROJECT_ASSIGNED_TO_INVOICE_GROUP"] = "PROJECT_INVALID_LEAD_PROJECT_ASSIGNED_TO_INVOICE_GROUP";
    ErrorInstanceCodeEnum["PROJECT_INVALID_CONTRIBUTOR_PROJECT_ASSIGNED_TO_INVOICE_GROUP"] = "PROJECT_INVALID_CONTRIBUTOR_PROJECT_ASSIGNED_TO_INVOICE_GROUP";
    ErrorInstanceCodeEnum["PROJECT_DUPLICATE_INVOICE_FORMATS_SPECIFIED"] = "PROJECT_DUPLICATE_INVOICE_FORMATS_SPECIFIED";
    ErrorInstanceCodeEnum["PROJECT_PAY_CODE_MISSING_PROJECT_DEFAULT"] = "PROJECT_PAY_CODE_MISSING_PROJECT_DEFAULT";
    ErrorInstanceCodeEnum["PROJECT_DEFAULT_PROJECT_PAY_CODE_DELETE_NOT_ALLOWED"] = "PROJECT_DEFAULT_PROJECT_PAY_CODE_DELETE_NOT_ALLOWED";
    ErrorInstanceCodeEnum["PROJECT_PAYMENT_OPTION_REQUIRED_WHEN_ELECTRONIC_PAYMENTS_ENABLED"] = "PROJECT_PAYMENT_OPTION_REQUIRED_WHEN_ELECTRONIC_PAYMENTS_ENABLED";
    ErrorInstanceCodeEnum["PROJECT_ACCOUNT_CATEGORY_INVALID"] = "PROJECT_ACCOUNT_CATEGORY_INVALID";
    ErrorInstanceCodeEnum["PROJECT_TASK_LEVEL_MUST_HAVE_TASK"] = "PROJECT_TASK_LEVEL_MUST_HAVE_TASK";
    ErrorInstanceCodeEnum["PROJECT_TASK_LEVEL_MUST_NOT_HAVE_TASK"] = "PROJECT_TASK_LEVEL_MUST_NOT_HAVE_TASK";
    ErrorInstanceCodeEnum["PROJECT_ASSIGNMENT"] = "PROJECT_ASSIGNMENT";
    ErrorInstanceCodeEnum["PROJECT_TASK_ASSIGNMENT"] = "PROJECT_TASK_ASSIGNMENT";
    ErrorInstanceCodeEnum["PROJECT_MUST_ASSIGN_TO_CONTRACT"] = "PROJECT_MUST_ASSIGN_TO_CONTRACT";
    ErrorInstanceCodeEnum["PROJECT_EXCEED_CONTRACT_CEILING_AMOUNT"] = "PROJECT_EXCEED_CONTRACT_CEILING_AMOUNT";
    ErrorInstanceCodeEnum["PROJECT_ALERT_THRESHOLD_PERCENTAGE_REQUIRED"] = "PROJECT_ALERT_THRESHOLD_PERCENTAGE_REQUIRED";
    ErrorInstanceCodeEnum["PROJECT_INTERCOMPANY_NOT_PROVIDED"] = "PROJECT_INTERCOMPANY_NOT_PROVIDED";
    ErrorInstanceCodeEnum["PROJECT_INTERCOMPANY_MUST_BE_ENABLED"] = "PROJECT_INTERCOMPANY_MUST_BE_ENABLED";
    ErrorInstanceCodeEnum["PROJECT_PRIMARY_APPROVER_REQUIRED_FOR_ALTERNATE"] = "PROJECT_PRIMARY_APPROVER_REQUIRED_FOR_ALTERNATE";
    ErrorInstanceCodeEnum["PROJECT_INVALID_PRIMARY_CONTROLLER"] = "PROJECT_INVALID_PRIMARY_CONTROLLER";
    ErrorInstanceCodeEnum["PROJECT_INVALID_ALTERNATE_CONTROLLER"] = "PROJECT_INVALID_ALTERNATE_CONTROLLER";
    ErrorInstanceCodeEnum["PROJECT_ORG_ASSIGNMENT_TASK_LEVEL"] = "PROJECT_ORG_ASSIGNMENT_TASK_LEVEL";
    ErrorInstanceCodeEnum["PROJECT_PREBILLED_LABOR_BALANCE"] = "PROJECT_PREBILLED_LABOR_BALANCE";
    ErrorInstanceCodeEnum["PROJECT_PREBILLED_LABOR_POSTED"] = "PROJECT_PREBILLED_LABOR_POSTED";
    ErrorInstanceCodeEnum["PROJECT_EXPENSE_PLAN_LOCKED_PLAN_SET"] = "PROJECT_EXPENSE_PLAN_LOCKED_PLAN_SET";
    ErrorInstanceCodeEnum["PROJECT_EXPENSE_PLAN_MULTIPLE_PLAN_SETS_NOT_ENABLED"] = "PROJECT_EXPENSE_PLAN_MULTIPLE_PLAN_SETS_NOT_ENABLED";
    ErrorInstanceCodeEnum["PROJECT_HAS_POSTED_TRANSACTIONS"] = "PROJECT_HAS_POSTED_TRANSACTIONS";
    ErrorInstanceCodeEnum["PROJECT_LABOR_CATEGORY_INVALID"] = "PROJECT_LABOR_CATEGORY_INVALID";
    ErrorInstanceCodeEnum["PROJECT_LABOR_CATEGORY_CANNOT_DEFAULT_TO_MASTER_RATE"] = "PROJECT_LABOR_CATEGORY_CANNOT_DEFAULT_TO_MASTER_RATE";
    ErrorInstanceCodeEnum["PROJECT_TYPE_ACCOUNT_CATEGORY_INVALID"] = "PROJECT_TYPE_ACCOUNT_CATEGORY_INVALID";
    ErrorInstanceCodeEnum["RECEIVING_DOCUMENT_ITEM_EXCEEDS_QUANTITY"] = "RECEIVING_DOCUMENT_ITEM_EXCEEDS_QUANTITY";
    ErrorInstanceCodeEnum["RECEIVING_DOCUMENT_NOT_RETRACTABLE"] = "RECEIVING_DOCUMENT_NOT_RETRACTABLE";
    ErrorInstanceCodeEnum["TASK_INVALID_PLAN"] = "TASK_INVALID_PLAN";
    ErrorInstanceCodeEnum["TASK_INVALID_ASSIGNMENT"] = "TASK_INVALID_ASSIGNMENT";
    ErrorInstanceCodeEnum["TASK_VALIDATION"] = "TASK_VALIDATION";
    ErrorInstanceCodeEnum["TASK_PROJECT_MISMATCH"] = "TASK_PROJECT_MISMATCH";
    ErrorInstanceCodeEnum["TASK_PARENT_TASK_PROJECT_MISMATCH"] = "TASK_PARENT_TASK_PROJECT_MISMATCH";
    ErrorInstanceCodeEnum["TASK_CANNOT_LIMIT_BILL_TO_FUNDED_WITHOUT_FUNDED_VALUE"] = "TASK_CANNOT_LIMIT_BILL_TO_FUNDED_WITHOUT_FUNDED_VALUE";
    ErrorInstanceCodeEnum["TASK_CANNOT_LIMIT_REVENUE_TO_FUNDED_WITHOUT_FUNDED_VALUE"] = "TASK_CANNOT_LIMIT_REVENUE_TO_FUNDED_WITHOUT_FUNDED_VALUE";
    ErrorInstanceCodeEnum["TASK_BILLING_TYPE_CANNOT_BE_SET_UNLESS_ALSO_SET_ON_PROJECT"] = "TASK_BILLING_TYPE_CANNOT_BE_SET_UNLESS_ALSO_SET_ON_PROJECT";
    ErrorInstanceCodeEnum["TASK_CANNOT_OVERRIDE_BILLING_TYPE"] = "TASK_CANNOT_OVERRIDE_BILLING_TYPE";
    ErrorInstanceCodeEnum["TASK_MODIFIED_RELATIVE_TASK_PROJECT_DOES_NOT_MATCH_MODIFIED_TASK_PROJECT"] = "TASK_MODIFIED_RELATIVE_TASK_PROJECT_DOES_NOT_MATCH_MODIFIED_TASK_PROJECT";
    ErrorInstanceCodeEnum["TASK_ACCOUNT_CATEGORY_INVALID"] = "TASK_ACCOUNT_CATEGORY_INVALID";
    ErrorInstanceCodeEnum["TASK_PREDECESSOR_NOT_AVAILABLE"] = "TASK_PREDECESSOR_NOT_AVAILABLE";
    ErrorInstanceCodeEnum["TASK_PREDECESSOR_INVALID_DATE_RANGE"] = "TASK_PREDECESSOR_INVALID_DATE_RANGE";
    ErrorInstanceCodeEnum["TIME_RATING_GENERIC"] = "TIME_RATING_GENERIC";
    ErrorInstanceCodeEnum["TIMESHEET_TIMESLIP_NOT_FOUND"] = "TIMESHEET_TIMESLIP_NOT_FOUND";
    ErrorInstanceCodeEnum["TIMESHEET_ITEM_ENTRY_NOT_FOUND"] = "TIMESHEET_ITEM_ENTRY_NOT_FOUND";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_NOT_FOUND"] = "TIMESHEET_TITO_NOT_FOUND";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_WITH_NULL_STOP_TIME"] = "TIMESHEET_TITO_WITH_NULL_STOP_TIME";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_OVERLAP"] = "TIMESHEET_TITO_OVERLAP";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_INVALID_TIME_UNITS"] = "TIMESHEET_TITO_INVALID_TIME_UNITS";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_NONWORK_HOURS_EXCEEDS_TITO_DURATION"] = "TIMESHEET_TITO_NONWORK_HOURS_EXCEEDS_TITO_DURATION";
    ErrorInstanceCodeEnum["TIMESHEET_TITO_DUPLICATE"] = "TIMESHEET_TITO_DUPLICATE";
    ErrorInstanceCodeEnum["TIMESHEET_DAILY_TITO_EMPTY"] = "TIMESHEET_DAILY_TITO_EMPTY";
    ErrorInstanceCodeEnum["TIMESHEET_OWNER_INSUFFICIENT_ROLES"] = "TIMESHEET_OWNER_INSUFFICIENT_ROLES";
    ErrorInstanceCodeEnum["TIMESHEET_OWNER_INVALID_TIME_PERIOD"] = "TIMESHEET_OWNER_INVALID_TIME_PERIOD";
    ErrorInstanceCodeEnum["TIMESHEET_TIME_PERIOD_NOT_FOUND"] = "TIMESHEET_TIME_PERIOD_NOT_FOUND";
    ErrorInstanceCodeEnum["TIMESHEET_DATE_OUT_OF_TIME_PERIOD_RANGE"] = "TIMESHEET_DATE_OUT_OF_TIME_PERIOD_RANGE";
    ErrorInstanceCodeEnum["TIMESHEET_TIME_PERIOD_PERMISSIONS"] = "TIMESHEET_TIME_PERIOD_PERMISSIONS";
    ErrorInstanceCodeEnum["TIMESHEET_DATE_REQUIRED_FOR_SEMIMONTHLY_TIME_PERIODS"] = "TIMESHEET_DATE_REQUIRED_FOR_SEMIMONTHLY_TIME_PERIODS";
    ErrorInstanceCodeEnum["TIMESHEET_DATE_INVALID_FOR_TIME_PERIOD_TYPE"] = "TIMESHEET_DATE_INVALID_FOR_TIME_PERIOD_TYPE";
    ErrorInstanceCodeEnum["TIMESHEET_TIME_PERIOD_DATES_MUST_BE_IN_SAME_MONTH_YEAR"] = "TIMESHEET_TIME_PERIOD_DATES_MUST_BE_IN_SAME_MONTH_YEAR";
    ErrorInstanceCodeEnum["TIMESHEET_DEFAULT_PAY_CODE_NOT_FOUND"] = "TIMESHEET_DEFAULT_PAY_CODE_NOT_FOUND";
    ErrorInstanceCodeEnum["TIMESHEET_INVALID_STATUS_FOR_SUBMISSION"] = "TIMESHEET_INVALID_STATUS_FOR_SUBMISSION";
    ErrorInstanceCodeEnum["TIMESHEET_SEARCH_ACTIVE_OR_STATUS_LISTS"] = "TIMESHEET_SEARCH_ACTIVE_OR_STATUS_LISTS";
    ErrorInstanceCodeEnum["TIMESHEET_TASK_REQUIRED_FOR_PROJECTS_WITH_TASK_LEVEL_ASSIGNMENT"] = "TIMESHEET_TASK_REQUIRED_FOR_PROJECTS_WITH_TASK_LEVEL_ASSIGNMENT";
    ErrorInstanceCodeEnum["JE_POSTED"] = "JE_POSTED";
    ErrorInstanceCodeEnum["VI_POSTED"] = "VI_POSTED";
    ErrorInstanceCodeEnum["VI_VOIDED"] = "VI_VOIDED";
    ErrorInstanceCodeEnum["VI_CANNOT_CHANGE_STATUS"] = "VI_CANNOT_CHANGE_STATUS";
    ErrorInstanceCodeEnum["VI_STATUS_NOT_ALLOW_SUBMIT"] = "VI_STATUS_NOT_ALLOW_SUBMIT";
    ErrorInstanceCodeEnum["VI_CANNOT_SUBMIT_TO_APPROVAL_GROUP"] = "VI_CANNOT_SUBMIT_TO_APPROVAL_GROUP";
    ErrorInstanceCodeEnum["VI_CANNOT_SUBMIT_DUE_TO_APPROVALS"] = "VI_CANNOT_SUBMIT_DUE_TO_APPROVALS";
    ErrorInstanceCodeEnum["VI_NO_PO_ASSIGNED"] = "VI_NO_PO_ASSIGNED";
    ErrorInstanceCodeEnum["VI_VENDOR_NOT_VALID_FOR_LEGAL_ENTITY"] = "VI_VENDOR_NOT_VALID_FOR_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["VI_PO_IS_A_MOD"] = "VI_PO_IS_A_MOD";
    ErrorInstanceCodeEnum["VI_PO_NOT_IN_OPEN_STATE"] = "VI_PO_NOT_IN_OPEN_STATE";
    ErrorInstanceCodeEnum["VI_AP_ORG_LEGAL_ENTITY_MISMATCH"] = "VI_AP_ORG_LEGAL_ENTITY_MISMATCH";
    ErrorInstanceCodeEnum["VI_PO_LEGAL_ENTITY_MISMATCH"] = "VI_PO_LEGAL_ENTITY_MISMATCH";
    ErrorInstanceCodeEnum["VI_PO_VENDOR_MISMATCH"] = "VI_PO_VENDOR_MISMATCH";
    ErrorInstanceCodeEnum["VI_ORG_NOT_ALLOW_TRANSACTION_ENTRY"] = "VI_ORG_NOT_ALLOW_TRANSACTION_ENTRY";
    ErrorInstanceCodeEnum["VI_FIELD_CHANGE_NOT_ALLOWED_WHEN_TRANSACTIONS_EXIST"] = "VI_FIELD_CHANGE_NOT_ALLOWED_WHEN_TRANSACTIONS_EXIST";
    ErrorInstanceCodeEnum["VI_NO_AP_ACCOUNT_FOR_LEGAL_ENTITY"] = "VI_NO_AP_ACCOUNT_FOR_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["VI_MUST_HAVE_PO_ASSIGNED"] = "VI_MUST_HAVE_PO_ASSIGNED";
    ErrorInstanceCodeEnum["VI_NO_AP_ORG_FOR_LEGAL_ENTITY"] = "VI_NO_AP_ORG_FOR_LEGAL_ENTITY";
    ErrorInstanceCodeEnum["VI_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "VI_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ErrorInstanceCodeEnum["VI_DETAILS_ACCOUNT_TXNS_DO_NOT_ALLOW_PROJECTS"] = "VI_DETAILS_ACCOUNT_TXNS_DO_NOT_ALLOW_PROJECTS";
    ErrorInstanceCodeEnum["VI_DETAILS_LABOR_REQ_PROJECTS"] = "VI_DETAILS_LABOR_REQ_PROJECTS";
    ErrorInstanceCodeEnum["VI_DETAILS_ACCOUNT_TXNS_REQUIRE_PROJECTS"] = "VI_DETAILS_ACCOUNT_TXNS_REQUIRE_PROJECTS";
    ErrorInstanceCodeEnum["VI_DETAILS_ACCOUNT_INVALID"] = "VI_DETAILS_ACCOUNT_INVALID";
    ErrorInstanceCodeEnum["VI_DETAILS_PO_FIELDS_BOTH_SET_OR_BLANK"] = "VI_DETAILS_PO_FIELDS_BOTH_SET_OR_BLANK";
    ErrorInstanceCodeEnum["VI_DETAILS_PROJECT_NOT_ALLOW_LABOR_CAT"] = "VI_DETAILS_PROJECT_NOT_ALLOW_LABOR_CAT";
    ErrorInstanceCodeEnum["VI_DETAILS_LABOR_CAT_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_LABOR_CAT_NOT_VALID_FOR_PROJECT";
    ErrorInstanceCodeEnum["VI_DETAILS_PROJECT_REQUIRES_LABOR_CAT"] = "VI_DETAILS_PROJECT_REQUIRES_LABOR_CAT";
    ErrorInstanceCodeEnum["VI_DETAILS_EXP_TYPE_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_EXP_TYPE_NOT_VALID_FOR_PROJECT";
    ErrorInstanceCodeEnum["VI_DETAILS_ITEM_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_ITEM_NOT_VALID_FOR_PROJECT";
    ErrorInstanceCodeEnum["VI_DETAILS_ACCT_NOT_VALID_FOR_EXP_TYPE"] = "VI_DETAILS_ACCT_NOT_VALID_FOR_EXP_TYPE";
    ErrorInstanceCodeEnum["VI_DETAILS_ACCT_NOT_VALID_FOR_ITEM_EXP_TYPE"] = "VI_DETAILS_ACCT_NOT_VALID_FOR_ITEM_EXP_TYPE";
    ErrorInstanceCodeEnum["VI_DETAILS_ITEM_INVENTORY_NOT_ALLOW_PROJ"] = "VI_DETAILS_ITEM_INVENTORY_NOT_ALLOW_PROJ";
    ErrorInstanceCodeEnum["VI_DETAILS_ITEM_REQUIRES_PROJ"] = "VI_DETAILS_ITEM_REQUIRES_PROJ";
    ErrorInstanceCodeEnum["JE_VOIDED"] = "JE_VOIDED";
    ErrorInstanceCodeEnum["VP_POSTED"] = "VP_POSTED";
    ErrorInstanceCodeEnum["VP_SUBMITTED"] = "VP_SUBMITTED";
    ErrorInstanceCodeEnum["VP_VOIDED"] = "VP_VOIDED";
    ErrorInstanceCodeEnum["VP_INVALID_PAYMENT_METHOD"] = "VP_INVALID_PAYMENT_METHOD";
    ErrorInstanceCodeEnum["PAID_DOC_NOT_POSTED"] = "PAID_DOC_NOT_POSTED";
    ErrorInstanceCodeEnum["PAID_DOC_VOIDED"] = "PAID_DOC_VOIDED";
    ErrorInstanceCodeEnum["PAID_DOC_VOIDING"] = "PAID_DOC_VOIDING";
    ErrorInstanceCodeEnum["PAID_DOC_LEGAL_ENTITY_MISMATCH"] = "PAID_DOC_LEGAL_ENTITY_MISMATCH";
    ErrorInstanceCodeEnum["PAID_DOC_VENDOR_MISMATCH"] = "PAID_DOC_VENDOR_MISMATCH";
    ErrorInstanceCodeEnum["PAID_DOC_OTHER_UNPOSTED"] = "PAID_DOC_OTHER_UNPOSTED";
    ErrorInstanceCodeEnum["PAID_DOC_OTHER_UNPOSTED_APP"] = "PAID_DOC_OTHER_UNPOSTED_APP";
    ErrorInstanceCodeEnum["PAID_DOC_ZERO_BALANCE"] = "PAID_DOC_ZERO_BALANCE";
    ErrorInstanceCodeEnum["PAID_DOC_ZERO_AMOUNTS"] = "PAID_DOC_ZERO_AMOUNTS";
    ErrorInstanceCodeEnum["PAID_DOC_PAYMENT_DISCOUNT"] = "PAID_DOC_PAYMENT_DISCOUNT";
    ErrorInstanceCodeEnum["PAID_DOC_EXCESS_DISCOUNT"] = "PAID_DOC_EXCESS_DISCOUNT";
    ErrorInstanceCodeEnum["PAID_DOC_CUSTOMER_MISMATCH"] = "PAID_DOC_CUSTOMER_MISMATCH";
    ErrorInstanceCodeEnum["PAID_DOC_PAYMENT_WRITEOFF"] = "PAID_DOC_PAYMENT_WRITEOFF";
    ErrorInstanceCodeEnum["PAID_DOC_EXCESS_WRITEOFF"] = "PAID_DOC_EXCESS_WRITEOFF";
    ErrorInstanceCodeEnum["PAID_DOC_INV_NOT_COMPLETED"] = "PAID_DOC_INV_NOT_COMPLETED";
    ErrorInstanceCodeEnum["PAID_DOC_POSTED_AFTER_POST_PERIOD_END_DATE"] = "PAID_DOC_POSTED_AFTER_POST_PERIOD_END_DATE";
    ErrorInstanceCodeEnum["PAID_DOC_PAYMENT_EXCEEDS_BALANCE"] = "PAID_DOC_PAYMENT_EXCEEDS_BALANCE";
})(ErrorInstanceCodeEnum || (exports.ErrorInstanceCodeEnum = ErrorInstanceCodeEnum = {}));
/**
 * This 'code' attribute is deprecated in favor of the 'code' attribute in the 'errors' list entities. A string token representing a more detailed error code than provided by the HTTP status code.
 * @deprecated
 */
var ErrorResponseCodeEnum;
(function (ErrorResponseCodeEnum) {
    ErrorResponseCodeEnum["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorResponseCodeEnum["EXPIRED_CREDENTIALS"] = "EXPIRED_CREDENTIALS";
    ErrorResponseCodeEnum["ACCOUNT_LOCKED"] = "ACCOUNT_LOCKED";
    ErrorResponseCodeEnum["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorResponseCodeEnum["FORBIDDEN"] = "FORBIDDEN";
    ErrorResponseCodeEnum["NOT_FOUND"] = "NOT_FOUND";
    ErrorResponseCodeEnum["CONFLICT"] = "CONFLICT";
    ErrorResponseCodeEnum["UNSUPPORTED"] = "UNSUPPORTED";
    ErrorResponseCodeEnum["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ErrorResponseCodeEnum["UNAVAILABLE"] = "UNAVAILABLE";
    ErrorResponseCodeEnum["INVALID_TOKEN"] = "INVALID_TOKEN";
    ErrorResponseCodeEnum["EXPIRED_TOKEN"] = "EXPIRED_TOKEN";
    ErrorResponseCodeEnum["INVALID_CLAIM"] = "INVALID_CLAIM";
    ErrorResponseCodeEnum["MISSING_TOKEN"] = "MISSING_TOKEN";
    ErrorResponseCodeEnum["REVOKED_TOKEN"] = "REVOKED_TOKEN";
    ErrorResponseCodeEnum["BAD_TOKEN"] = "BAD_TOKEN";
    ErrorResponseCodeEnum["REQUEST_VALIDATION"] = "REQUEST_VALIDATION";
    ErrorResponseCodeEnum["PAYLOAD_TOO_LARGE"] = "PAYLOAD_TOO_LARGE";
    ErrorResponseCodeEnum["JSON_PARSING_ERROR"] = "JSON_PARSING_ERROR";
    ErrorResponseCodeEnum["JSON_MAPPING_ERROR"] = "JSON_MAPPING_ERROR";
    ErrorResponseCodeEnum["INSUFFICIENT_LICENSE"] = "INSUFFICIENT_LICENSE";
    ErrorResponseCodeEnum["INSUFFICIENT_CONFIGURATION"] = "INSUFFICIENT_CONFIGURATION";
    ErrorResponseCodeEnum["INSUFFICIENT_ROLES"] = "INSUFFICIENT_ROLES";
})(ErrorResponseCodeEnum || (exports.ErrorResponseCodeEnum = ErrorResponseCodeEnum = {}));
/** Expense status */
var ExpenseBaseModelStatusEnum;
(function (ExpenseBaseModelStatusEnum) {
    ExpenseBaseModelStatusEnum["REQUESTING"] = "REQUESTING";
    ExpenseBaseModelStatusEnum["DENIED"] = "DENIED";
    ExpenseBaseModelStatusEnum["PREAPPROVING"] = "PREAPPROVING";
    ExpenseBaseModelStatusEnum["PREAPPROVED"] = "PREAPPROVED";
    ExpenseBaseModelStatusEnum["INUSE"] = "INUSE";
    ExpenseBaseModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    ExpenseBaseModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    ExpenseBaseModelStatusEnum["APPROVING"] = "APPROVING";
    ExpenseBaseModelStatusEnum["COMPLETED"] = "COMPLETED";
    ExpenseBaseModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    ExpenseBaseModelStatusEnum["LOCKED"] = "LOCKED";
    ExpenseBaseModelStatusEnum["PENDING_REVIEW"] = "PENDING_REVIEW";
    ExpenseBaseModelStatusEnum["REQUEST_SUBMITTED"] = "REQUEST_SUBMITTED";
})(ExpenseBaseModelStatusEnum || (exports.ExpenseBaseModelStatusEnum = ExpenseBaseModelStatusEnum = {}));
/** Expense voucher type */
var ExpenseBaseModelVoucherTypeEnum;
(function (ExpenseBaseModelVoucherTypeEnum) {
    ExpenseBaseModelVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ExpenseBaseModelVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(ExpenseBaseModelVoucherTypeEnum || (exports.ExpenseBaseModelVoucherTypeEnum = ExpenseBaseModelVoucherTypeEnum = {}));
/** Identifies the type of expense to be created.  Defaults to EXPENSE_REPORT. */
var ExpenseCreateModelVoucherTypeEnum;
(function (ExpenseCreateModelVoucherTypeEnum) {
    ExpenseCreateModelVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ExpenseCreateModelVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(ExpenseCreateModelVoucherTypeEnum || (exports.ExpenseCreateModelVoucherTypeEnum = ExpenseCreateModelVoucherTypeEnum = {}));
var ExpenseInvoiceSectionFormatCreateModelTypeEnum;
(function (ExpenseInvoiceSectionFormatCreateModelTypeEnum) {
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    ExpenseInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(ExpenseInvoiceSectionFormatCreateModelTypeEnum || (exports.ExpenseInvoiceSectionFormatCreateModelTypeEnum = ExpenseInvoiceSectionFormatCreateModelTypeEnum = {}));
var ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum) {
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum = ExpenseInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum) {
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum = ExpenseInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum) {
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum = ExpenseInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum) {
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum = ExpenseInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var ExpenseInvoiceSectionFormatModelTypeEnum;
(function (ExpenseInvoiceSectionFormatModelTypeEnum) {
    ExpenseInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    ExpenseInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    ExpenseInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    ExpenseInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    ExpenseInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    ExpenseInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    ExpenseInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    ExpenseInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    ExpenseInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(ExpenseInvoiceSectionFormatModelTypeEnum || (exports.ExpenseInvoiceSectionFormatModelTypeEnum = ExpenseInvoiceSectionFormatModelTypeEnum = {}));
var ExpenseInvoiceSectionFormatModelCol1FieldEnum;
(function (ExpenseInvoiceSectionFormatModelCol1FieldEnum) {
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatModelCol1FieldEnum || (exports.ExpenseInvoiceSectionFormatModelCol1FieldEnum = ExpenseInvoiceSectionFormatModelCol1FieldEnum = {}));
var ExpenseInvoiceSectionFormatModelCol2FieldEnum;
(function (ExpenseInvoiceSectionFormatModelCol2FieldEnum) {
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatModelCol2FieldEnum || (exports.ExpenseInvoiceSectionFormatModelCol2FieldEnum = ExpenseInvoiceSectionFormatModelCol2FieldEnum = {}));
var ExpenseInvoiceSectionFormatModelCol3FieldEnum;
(function (ExpenseInvoiceSectionFormatModelCol3FieldEnum) {
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatModelCol3FieldEnum || (exports.ExpenseInvoiceSectionFormatModelCol3FieldEnum = ExpenseInvoiceSectionFormatModelCol3FieldEnum = {}));
var ExpenseInvoiceSectionFormatModelCol4FieldEnum;
(function (ExpenseInvoiceSectionFormatModelCol4FieldEnum) {
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    ExpenseInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(ExpenseInvoiceSectionFormatModelCol4FieldEnum || (exports.ExpenseInvoiceSectionFormatModelCol4FieldEnum = ExpenseInvoiceSectionFormatModelCol4FieldEnum = {}));
/** Type of purchase */
var ExpenseLineModelLineTypeEnum;
(function (ExpenseLineModelLineTypeEnum) {
    ExpenseLineModelLineTypeEnum["LABOR"] = "LABOR";
    ExpenseLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    ExpenseLineModelLineTypeEnum["ITEM"] = "ITEM";
})(ExpenseLineModelLineTypeEnum || (exports.ExpenseLineModelLineTypeEnum = ExpenseLineModelLineTypeEnum = {}));
/** Expense status */
var ExpenseModelStatusEnum;
(function (ExpenseModelStatusEnum) {
    ExpenseModelStatusEnum["REQUESTING"] = "REQUESTING";
    ExpenseModelStatusEnum["DENIED"] = "DENIED";
    ExpenseModelStatusEnum["PREAPPROVING"] = "PREAPPROVING";
    ExpenseModelStatusEnum["PREAPPROVED"] = "PREAPPROVED";
    ExpenseModelStatusEnum["INUSE"] = "INUSE";
    ExpenseModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    ExpenseModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    ExpenseModelStatusEnum["APPROVING"] = "APPROVING";
    ExpenseModelStatusEnum["COMPLETED"] = "COMPLETED";
    ExpenseModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    ExpenseModelStatusEnum["LOCKED"] = "LOCKED";
    ExpenseModelStatusEnum["PENDING_REVIEW"] = "PENDING_REVIEW";
    ExpenseModelStatusEnum["REQUEST_SUBMITTED"] = "REQUEST_SUBMITTED";
})(ExpenseModelStatusEnum || (exports.ExpenseModelStatusEnum = ExpenseModelStatusEnum = {}));
/** Expense voucher type */
var ExpenseModelVoucherTypeEnum;
(function (ExpenseModelVoucherTypeEnum) {
    ExpenseModelVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ExpenseModelVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(ExpenseModelVoucherTypeEnum || (exports.ExpenseModelVoucherTypeEnum = ExpenseModelVoucherTypeEnum = {}));
/** Expense statuses */
var ExpenseSearchModelStatusesEnum;
(function (ExpenseSearchModelStatusesEnum) {
    ExpenseSearchModelStatusesEnum["REQUESTING"] = "REQUESTING";
    ExpenseSearchModelStatusesEnum["DENIED"] = "DENIED";
    ExpenseSearchModelStatusesEnum["PREAPPROVING"] = "PREAPPROVING";
    ExpenseSearchModelStatusesEnum["PREAPPROVED"] = "PREAPPROVED";
    ExpenseSearchModelStatusesEnum["INUSE"] = "INUSE";
    ExpenseSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    ExpenseSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
    ExpenseSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    ExpenseSearchModelStatusesEnum["COMPLETED"] = "COMPLETED";
    ExpenseSearchModelStatusesEnum["EXTRACTED"] = "EXTRACTED";
    ExpenseSearchModelStatusesEnum["LOCKED"] = "LOCKED";
    ExpenseSearchModelStatusesEnum["PENDING_REVIEW"] = "PENDING_REVIEW";
    ExpenseSearchModelStatusesEnum["REQUEST_SUBMITTED"] = "REQUEST_SUBMITTED";
})(ExpenseSearchModelStatusesEnum || (exports.ExpenseSearchModelStatusesEnum = ExpenseSearchModelStatusesEnum = {}));
/** Allows searching for expense reports or expense requests only. */
var ExpenseSearchModelVoucherTypeEnum;
(function (ExpenseSearchModelVoucherTypeEnum) {
    ExpenseSearchModelVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ExpenseSearchModelVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(ExpenseSearchModelVoucherTypeEnum || (exports.ExpenseSearchModelVoucherTypeEnum = ExpenseSearchModelVoucherTypeEnum = {}));
var ExpenseStatusHistoryModelStatusEnum;
(function (ExpenseStatusHistoryModelStatusEnum) {
    ExpenseStatusHistoryModelStatusEnum["REQUESTING"] = "REQUESTING";
    ExpenseStatusHistoryModelStatusEnum["DENIED"] = "DENIED";
    ExpenseStatusHistoryModelStatusEnum["PREAPPROVING"] = "PREAPPROVING";
    ExpenseStatusHistoryModelStatusEnum["PREAPPROVED"] = "PREAPPROVED";
    ExpenseStatusHistoryModelStatusEnum["INUSE"] = "INUSE";
    ExpenseStatusHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    ExpenseStatusHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    ExpenseStatusHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    ExpenseStatusHistoryModelStatusEnum["COMPLETED"] = "COMPLETED";
    ExpenseStatusHistoryModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    ExpenseStatusHistoryModelStatusEnum["LOCKED"] = "LOCKED";
    ExpenseStatusHistoryModelStatusEnum["PENDING_REVIEW"] = "PENDING_REVIEW";
    ExpenseStatusHistoryModelStatusEnum["REQUEST_SUBMITTED"] = "REQUEST_SUBMITTED";
})(ExpenseStatusHistoryModelStatusEnum || (exports.ExpenseStatusHistoryModelStatusEnum = ExpenseStatusHistoryModelStatusEnum = {}));
/** Wizard type */
var ExpenseTypeModelWizardTypeEnum;
(function (ExpenseTypeModelWizardTypeEnum) {
    ExpenseTypeModelWizardTypeEnum["ADVANCE"] = "ADVANCE";
    ExpenseTypeModelWizardTypeEnum["AIR"] = "AIR";
    ExpenseTypeModelWizardTypeEnum["CASH_RETURN"] = "CASH_RETURN";
    ExpenseTypeModelWizardTypeEnum["CELL_PHONE"] = "CELL_PHONE";
    ExpenseTypeModelWizardTypeEnum["COMPANY_CAR"] = "COMPANY_CAR";
    ExpenseTypeModelWizardTypeEnum["EMP_BUS_MTG"] = "EMP_BUS_MTG";
    ExpenseTypeModelWizardTypeEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    ExpenseTypeModelWizardTypeEnum["LODGING"] = "LODGING";
    ExpenseTypeModelWizardTypeEnum["LODGING_ALLOWABLE"] = "LODGING_ALLOWABLE";
    ExpenseTypeModelWizardTypeEnum["LODGING_PER_DIEM"] = "LODGING_PER_DIEM";
    ExpenseTypeModelWizardTypeEnum["MIE_ALLOWABLE"] = "MIE_ALLOWABLE";
    ExpenseTypeModelWizardTypeEnum["MIE_PER_DIEM"] = "MIE_PER_DIEM";
    ExpenseTypeModelWizardTypeEnum["MILEAGE"] = "MILEAGE";
})(ExpenseTypeModelWizardTypeEnum || (exports.ExpenseTypeModelWizardTypeEnum = ExpenseTypeModelWizardTypeEnum = {}));
/** Wizard type */
var ExpenseTypeSummaryModelWizardTypeEnum;
(function (ExpenseTypeSummaryModelWizardTypeEnum) {
    ExpenseTypeSummaryModelWizardTypeEnum["ADVANCE"] = "ADVANCE";
    ExpenseTypeSummaryModelWizardTypeEnum["AIR"] = "AIR";
    ExpenseTypeSummaryModelWizardTypeEnum["CASH_RETURN"] = "CASH_RETURN";
    ExpenseTypeSummaryModelWizardTypeEnum["CELL_PHONE"] = "CELL_PHONE";
    ExpenseTypeSummaryModelWizardTypeEnum["COMPANY_CAR"] = "COMPANY_CAR";
    ExpenseTypeSummaryModelWizardTypeEnum["EMP_BUS_MTG"] = "EMP_BUS_MTG";
    ExpenseTypeSummaryModelWizardTypeEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    ExpenseTypeSummaryModelWizardTypeEnum["LODGING"] = "LODGING";
    ExpenseTypeSummaryModelWizardTypeEnum["LODGING_ALLOWABLE"] = "LODGING_ALLOWABLE";
    ExpenseTypeSummaryModelWizardTypeEnum["LODGING_PER_DIEM"] = "LODGING_PER_DIEM";
    ExpenseTypeSummaryModelWizardTypeEnum["MIE_ALLOWABLE"] = "MIE_ALLOWABLE";
    ExpenseTypeSummaryModelWizardTypeEnum["MIE_PER_DIEM"] = "MIE_PER_DIEM";
    ExpenseTypeSummaryModelWizardTypeEnum["MILEAGE"] = "MILEAGE";
})(ExpenseTypeSummaryModelWizardTypeEnum || (exports.ExpenseTypeSummaryModelWizardTypeEnum = ExpenseTypeSummaryModelWizardTypeEnum = {}));
/** Status */
var FinancialDocumentStatusHistoryModelStatusEnum;
(function (FinancialDocumentStatusHistoryModelStatusEnum) {
    FinancialDocumentStatusHistoryModelStatusEnum["INUSE"] = "INUSE";
    FinancialDocumentStatusHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    FinancialDocumentStatusHistoryModelStatusEnum["POSTED"] = "POSTED";
    FinancialDocumentStatusHistoryModelStatusEnum["APPROVED"] = "APPROVED";
    FinancialDocumentStatusHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    FinancialDocumentStatusHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(FinancialDocumentStatusHistoryModelStatusEnum || (exports.FinancialDocumentStatusHistoryModelStatusEnum = FinancialDocumentStatusHistoryModelStatusEnum = {}));
/** Posting Feature that created the source document */
var FixedAssetAlertModelFeatureEnum;
(function (FixedAssetAlertModelFeatureEnum) {
    FixedAssetAlertModelFeatureEnum["VENDOR_INVOICE_POST"] = "VENDOR_INVOICE_POST";
    FixedAssetAlertModelFeatureEnum["VENDOR_PAYMENT_POST"] = "VENDOR_PAYMENT_POST";
    FixedAssetAlertModelFeatureEnum["CUSTOMER_PAYMENT_POST"] = "CUSTOMER_PAYMENT_POST";
    FixedAssetAlertModelFeatureEnum["DEPOSIT_POST"] = "DEPOSIT_POST";
    FixedAssetAlertModelFeatureEnum["JOURNAL_ENTRY_POST"] = "JOURNAL_ENTRY_POST";
    FixedAssetAlertModelFeatureEnum["BILLING_POST"] = "BILLING_POST";
    FixedAssetAlertModelFeatureEnum["INVOICE_POST"] = "INVOICE_POST";
    FixedAssetAlertModelFeatureEnum["LABOR_COST_POST"] = "LABOR_COST_POST";
    FixedAssetAlertModelFeatureEnum["EXPENSE_COST_POST"] = "EXPENSE_COST_POST";
    FixedAssetAlertModelFeatureEnum["GL_CLOSING"] = "GL_CLOSING";
    FixedAssetAlertModelFeatureEnum["COST_POOL_POST"] = "COST_POOL_POST";
    FixedAssetAlertModelFeatureEnum["COMMITMENT"] = "COMMITMENT";
    FixedAssetAlertModelFeatureEnum["FIXED_ASSET_POST"] = "FIXED_ASSET_POST";
    FixedAssetAlertModelFeatureEnum["PILOB"] = "PILOB";
    FixedAssetAlertModelFeatureEnum["INTERCOMPANY_POST"] = "INTERCOMPANY_POST";
    FixedAssetAlertModelFeatureEnum["AP_REVALUATION"] = "AP_REVALUATION";
    FixedAssetAlertModelFeatureEnum["AR_REVALUATION"] = "AR_REVALUATION";
})(FixedAssetAlertModelFeatureEnum || (exports.FixedAssetAlertModelFeatureEnum = FixedAssetAlertModelFeatureEnum = {}));
/** Required when disposing of the fixed asset */
var FixedAssetCreateModelDisposalTypeEnum;
(function (FixedAssetCreateModelDisposalTypeEnum) {
    FixedAssetCreateModelDisposalTypeEnum["SALE"] = "SALE";
    FixedAssetCreateModelDisposalTypeEnum["WRITE_OFF"] = "WRITE_OFF";
})(FixedAssetCreateModelDisposalTypeEnum || (exports.FixedAssetCreateModelDisposalTypeEnum = FixedAssetCreateModelDisposalTypeEnum = {}));
var FixedAssetCreateModelDepreciationMethodEnum;
(function (FixedAssetCreateModelDepreciationMethodEnum) {
    FixedAssetCreateModelDepreciationMethodEnum["STRAIGHT_LINE"] = "STRAIGHT_LINE";
    FixedAssetCreateModelDepreciationMethodEnum["NONE"] = "NONE";
})(FixedAssetCreateModelDepreciationMethodEnum || (exports.FixedAssetCreateModelDepreciationMethodEnum = FixedAssetCreateModelDepreciationMethodEnum = {}));
var FixedAssetCreateModelAveragingMethodEnum;
(function (FixedAssetCreateModelAveragingMethodEnum) {
    FixedAssetCreateModelAveragingMethodEnum["FISCAL_PERIOD"] = "FISCAL_PERIOD";
    FixedAssetCreateModelAveragingMethodEnum["DAILY"] = "DAILY";
})(FixedAssetCreateModelAveragingMethodEnum || (exports.FixedAssetCreateModelAveragingMethodEnum = FixedAssetCreateModelAveragingMethodEnum = {}));
var FixedAssetJournalEntryModelCategoryEnum;
(function (FixedAssetJournalEntryModelCategoryEnum) {
    FixedAssetJournalEntryModelCategoryEnum["BILLED"] = "BILLED";
    FixedAssetJournalEntryModelCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    FixedAssetJournalEntryModelCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    FixedAssetJournalEntryModelCategoryEnum["TAX"] = "TAX";
    FixedAssetJournalEntryModelCategoryEnum["UNBILLED"] = "UNBILLED";
    FixedAssetJournalEntryModelCategoryEnum["LABOR_COST"] = "LABOR_COST";
    FixedAssetJournalEntryModelCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    FixedAssetJournalEntryModelCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    FixedAssetJournalEntryModelCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    FixedAssetJournalEntryModelCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    FixedAssetJournalEntryModelCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    FixedAssetJournalEntryModelCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    FixedAssetJournalEntryModelCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    FixedAssetJournalEntryModelCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    FixedAssetJournalEntryModelCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    FixedAssetJournalEntryModelCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    FixedAssetJournalEntryModelCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    FixedAssetJournalEntryModelCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    FixedAssetJournalEntryModelCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    FixedAssetJournalEntryModelCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    FixedAssetJournalEntryModelCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    FixedAssetJournalEntryModelCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    FixedAssetJournalEntryModelCategoryEnum["NET_INCOME"] = "NET_INCOME";
    FixedAssetJournalEntryModelCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    FixedAssetJournalEntryModelCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    FixedAssetJournalEntryModelCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    FixedAssetJournalEntryModelCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    FixedAssetJournalEntryModelCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    FixedAssetJournalEntryModelCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    FixedAssetJournalEntryModelCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    FixedAssetJournalEntryModelCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    FixedAssetJournalEntryModelCategoryEnum["PILOB"] = "PILOB";
    FixedAssetJournalEntryModelCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    FixedAssetJournalEntryModelCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    FixedAssetJournalEntryModelCategoryEnum["DUE_TO"] = "DUE_TO";
    FixedAssetJournalEntryModelCategoryEnum["DUE_FROM"] = "DUE_FROM";
    FixedAssetJournalEntryModelCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    FixedAssetJournalEntryModelCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    FixedAssetJournalEntryModelCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    FixedAssetJournalEntryModelCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    FixedAssetJournalEntryModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    FixedAssetJournalEntryModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    FixedAssetJournalEntryModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    FixedAssetJournalEntryModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    FixedAssetJournalEntryModelCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    FixedAssetJournalEntryModelCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(FixedAssetJournalEntryModelCategoryEnum || (exports.FixedAssetJournalEntryModelCategoryEnum = FixedAssetJournalEntryModelCategoryEnum = {}));
var FixedAssetModelDisposalTypeEnum;
(function (FixedAssetModelDisposalTypeEnum) {
    FixedAssetModelDisposalTypeEnum["SALE"] = "SALE";
    FixedAssetModelDisposalTypeEnum["WRITE_OFF"] = "WRITE_OFF";
})(FixedAssetModelDisposalTypeEnum || (exports.FixedAssetModelDisposalTypeEnum = FixedAssetModelDisposalTypeEnum = {}));
var FixedAssetModelDepreciationMethodEnum;
(function (FixedAssetModelDepreciationMethodEnum) {
    FixedAssetModelDepreciationMethodEnum["STRAIGHT_LINE"] = "STRAIGHT_LINE";
    FixedAssetModelDepreciationMethodEnum["NONE"] = "NONE";
})(FixedAssetModelDepreciationMethodEnum || (exports.FixedAssetModelDepreciationMethodEnum = FixedAssetModelDepreciationMethodEnum = {}));
var FixedAssetModelAveragingMethodEnum;
(function (FixedAssetModelAveragingMethodEnum) {
    FixedAssetModelAveragingMethodEnum["FISCAL_PERIOD"] = "FISCAL_PERIOD";
    FixedAssetModelAveragingMethodEnum["DAILY"] = "DAILY";
})(FixedAssetModelAveragingMethodEnum || (exports.FixedAssetModelAveragingMethodEnum = FixedAssetModelAveragingMethodEnum = {}));
var FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum;
(function (FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum) {
    FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum["DETAIL"] = "DETAIL";
    FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum["SUMMARY"] = "SUMMARY";
})(FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum || (exports.FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum = FixedAssetPostDocumentModelGeneralLedgerExpensePostLevelEnum = {}));
var FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum;
(function (FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum) {
    FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum["DETAIL"] = "DETAIL";
    FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum["SUMMARY"] = "SUMMARY";
})(FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum || (exports.FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum = FixedAssetPostDocumentModelGeneralLedgerDepreciationPostLevelEnum = {}));
var FixedAssetSearchReadModelDashboardsEnum;
(function (FixedAssetSearchReadModelDashboardsEnum) {
    FixedAssetSearchReadModelDashboardsEnum["HOME"] = "HOME";
    FixedAssetSearchReadModelDashboardsEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    FixedAssetSearchReadModelDashboardsEnum["CONTRACTS"] = "CONTRACTS";
    FixedAssetSearchReadModelDashboardsEnum["CONTRACT"] = "CONTRACT";
    FixedAssetSearchReadModelDashboardsEnum["PROJECT"] = "PROJECT";
    FixedAssetSearchReadModelDashboardsEnum["PEOPLE"] = "PEOPLE";
    FixedAssetSearchReadModelDashboardsEnum["TIME"] = "TIME";
    FixedAssetSearchReadModelDashboardsEnum["EXPENSE"] = "EXPENSE";
    FixedAssetSearchReadModelDashboardsEnum["FORECAST"] = "FORECAST";
    FixedAssetSearchReadModelDashboardsEnum["FINANCIALS"] = "FINANCIALS";
    FixedAssetSearchReadModelDashboardsEnum["PURCHASING"] = "PURCHASING";
    FixedAssetSearchReadModelDashboardsEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    FixedAssetSearchReadModelDashboardsEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    FixedAssetSearchReadModelDashboardsEnum["BILLING"] = "BILLING";
    FixedAssetSearchReadModelDashboardsEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    FixedAssetSearchReadModelDashboardsEnum["DOCUMENTS"] = "DOCUMENTS";
    FixedAssetSearchReadModelDashboardsEnum["ADMIN"] = "ADMIN";
    FixedAssetSearchReadModelDashboardsEnum["REPORTS"] = "REPORTS";
})(FixedAssetSearchReadModelDashboardsEnum || (exports.FixedAssetSearchReadModelDashboardsEnum = FixedAssetSearchReadModelDashboardsEnum = {}));
var FixedPriceInvoiceSectionFormatCreateModelTypeEnum;
(function (FixedPriceInvoiceSectionFormatCreateModelTypeEnum) {
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    FixedPriceInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(FixedPriceInvoiceSectionFormatCreateModelTypeEnum || (exports.FixedPriceInvoiceSectionFormatCreateModelTypeEnum = FixedPriceInvoiceSectionFormatCreateModelTypeEnum = {}));
var FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum) {
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum = FixedPriceInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum) {
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum = FixedPriceInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum) {
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum = FixedPriceInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum) {
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum = FixedPriceInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var FixedPriceInvoiceSectionFormatModelTypeEnum;
(function (FixedPriceInvoiceSectionFormatModelTypeEnum) {
    FixedPriceInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    FixedPriceInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    FixedPriceInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    FixedPriceInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    FixedPriceInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    FixedPriceInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    FixedPriceInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    FixedPriceInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    FixedPriceInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(FixedPriceInvoiceSectionFormatModelTypeEnum || (exports.FixedPriceInvoiceSectionFormatModelTypeEnum = FixedPriceInvoiceSectionFormatModelTypeEnum = {}));
var FixedPriceInvoiceSectionFormatModelCol1FieldEnum;
(function (FixedPriceInvoiceSectionFormatModelCol1FieldEnum) {
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatModelCol1FieldEnum || (exports.FixedPriceInvoiceSectionFormatModelCol1FieldEnum = FixedPriceInvoiceSectionFormatModelCol1FieldEnum = {}));
var FixedPriceInvoiceSectionFormatModelCol2FieldEnum;
(function (FixedPriceInvoiceSectionFormatModelCol2FieldEnum) {
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatModelCol2FieldEnum || (exports.FixedPriceInvoiceSectionFormatModelCol2FieldEnum = FixedPriceInvoiceSectionFormatModelCol2FieldEnum = {}));
var FixedPriceInvoiceSectionFormatModelCol3FieldEnum;
(function (FixedPriceInvoiceSectionFormatModelCol3FieldEnum) {
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatModelCol3FieldEnum || (exports.FixedPriceInvoiceSectionFormatModelCol3FieldEnum = FixedPriceInvoiceSectionFormatModelCol3FieldEnum = {}));
var FixedPriceInvoiceSectionFormatModelCol4FieldEnum;
(function (FixedPriceInvoiceSectionFormatModelCol4FieldEnum) {
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FixedPriceInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FixedPriceInvoiceSectionFormatModelCol4FieldEnum || (exports.FixedPriceInvoiceSectionFormatModelCol4FieldEnum = FixedPriceInvoiceSectionFormatModelCol4FieldEnum = {}));
var FixedPriceItemCreateModelRevenueRecognitionMethodEnum;
(function (FixedPriceItemCreateModelRevenueRecognitionMethodEnum) {
    FixedPriceItemCreateModelRevenueRecognitionMethodEnum["ON_BILL"] = "ON_BILL";
    FixedPriceItemCreateModelRevenueRecognitionMethodEnum["PERCENT_COMPLETE"] = "PERCENT_COMPLETE";
    FixedPriceItemCreateModelRevenueRecognitionMethodEnum["ON_SCHEDULE"] = "ON_SCHEDULE";
})(FixedPriceItemCreateModelRevenueRecognitionMethodEnum || (exports.FixedPriceItemCreateModelRevenueRecognitionMethodEnum = FixedPriceItemCreateModelRevenueRecognitionMethodEnum = {}));
/** Editable only if both postHistoryKey and billablePostHistoryKey are null. */
var FixedPriceItemModelRevenueRecognitionMethodEnum;
(function (FixedPriceItemModelRevenueRecognitionMethodEnum) {
    FixedPriceItemModelRevenueRecognitionMethodEnum["ON_BILL"] = "ON_BILL";
    FixedPriceItemModelRevenueRecognitionMethodEnum["PERCENT_COMPLETE"] = "PERCENT_COMPLETE";
    FixedPriceItemModelRevenueRecognitionMethodEnum["ON_SCHEDULE"] = "ON_SCHEDULE";
})(FixedPriceItemModelRevenueRecognitionMethodEnum || (exports.FixedPriceItemModelRevenueRecognitionMethodEnum = FixedPriceItemModelRevenueRecognitionMethodEnum = {}));
var FundedProjectExpenseFundingOptionEnum;
(function (FundedProjectExpenseFundingOptionEnum) {
    FundedProjectExpenseFundingOptionEnum["ALL"] = "ALL";
    FundedProjectExpenseFundingOptionEnum["NONE"] = "NONE";
    FundedProjectExpenseFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundedProjectExpenseFundingOptionEnum || (exports.FundedProjectExpenseFundingOptionEnum = FundedProjectExpenseFundingOptionEnum = {}));
var FundedProjectItemFundingOptionEnum;
(function (FundedProjectItemFundingOptionEnum) {
    FundedProjectItemFundingOptionEnum["ALL"] = "ALL";
    FundedProjectItemFundingOptionEnum["NONE"] = "NONE";
    FundedProjectItemFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundedProjectItemFundingOptionEnum || (exports.FundedProjectItemFundingOptionEnum = FundedProjectItemFundingOptionEnum = {}));
var FundedProjectLaborFundingOptionEnum;
(function (FundedProjectLaborFundingOptionEnum) {
    FundedProjectLaborFundingOptionEnum["ALL"] = "ALL";
    FundedProjectLaborFundingOptionEnum["NONE"] = "NONE";
    FundedProjectLaborFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundedProjectLaborFundingOptionEnum || (exports.FundedProjectLaborFundingOptionEnum = FundedProjectLaborFundingOptionEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum) {
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum = FundedValueAdjustmentInvoiceSectionFormatCreateModelTypeEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum = FundedValueAdjustmentInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum = FundedValueAdjustmentInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum = FundedValueAdjustmentInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum = FundedValueAdjustmentInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum) {
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum = FundedValueAdjustmentInvoiceSectionFormatModelTypeEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum = FundedValueAdjustmentInvoiceSectionFormatModelCol1FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum = FundedValueAdjustmentInvoiceSectionFormatModelCol2FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum = FundedValueAdjustmentInvoiceSectionFormatModelCol3FieldEnum = {}));
var FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum;
(function (FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum) {
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum || (exports.FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum = FundedValueAdjustmentInvoiceSectionFormatModelCol4FieldEnum = {}));
var FundingAllocationFundedProjectExpenseFundingOptionEnum;
(function (FundingAllocationFundedProjectExpenseFundingOptionEnum) {
    FundingAllocationFundedProjectExpenseFundingOptionEnum["ALL"] = "ALL";
    FundingAllocationFundedProjectExpenseFundingOptionEnum["NONE"] = "NONE";
    FundingAllocationFundedProjectExpenseFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundingAllocationFundedProjectExpenseFundingOptionEnum || (exports.FundingAllocationFundedProjectExpenseFundingOptionEnum = FundingAllocationFundedProjectExpenseFundingOptionEnum = {}));
var FundingAllocationFundedProjectItemFundingOptionEnum;
(function (FundingAllocationFundedProjectItemFundingOptionEnum) {
    FundingAllocationFundedProjectItemFundingOptionEnum["ALL"] = "ALL";
    FundingAllocationFundedProjectItemFundingOptionEnum["NONE"] = "NONE";
    FundingAllocationFundedProjectItemFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundingAllocationFundedProjectItemFundingOptionEnum || (exports.FundingAllocationFundedProjectItemFundingOptionEnum = FundingAllocationFundedProjectItemFundingOptionEnum = {}));
var FundingAllocationFundedProjectLaborFundingOptionEnum;
(function (FundingAllocationFundedProjectLaborFundingOptionEnum) {
    FundingAllocationFundedProjectLaborFundingOptionEnum["ALL"] = "ALL";
    FundingAllocationFundedProjectLaborFundingOptionEnum["NONE"] = "NONE";
    FundingAllocationFundedProjectLaborFundingOptionEnum["SELECTED"] = "SELECTED";
})(FundingAllocationFundedProjectLaborFundingOptionEnum || (exports.FundingAllocationFundedProjectLaborFundingOptionEnum = FundingAllocationFundedProjectLaborFundingOptionEnum = {}));
/** Field value type */
var ImportDefinitionColumnModelTypeEnum;
(function (ImportDefinitionColumnModelTypeEnum) {
    ImportDefinitionColumnModelTypeEnum["CHAR"] = "CHAR";
    ImportDefinitionColumnModelTypeEnum["STRING"] = "STRING";
    ImportDefinitionColumnModelTypeEnum["DATE"] = "DATE";
    ImportDefinitionColumnModelTypeEnum["TIMESTAMP"] = "TIMESTAMP";
    ImportDefinitionColumnModelTypeEnum["NUMBER"] = "NUMBER";
    ImportDefinitionColumnModelTypeEnum["CURRENCY"] = "CURRENCY";
    ImportDefinitionColumnModelTypeEnum["RATE"] = "RATE";
    ImportDefinitionColumnModelTypeEnum["EXCHANGE_RATE"] = "EXCHANGE_RATE";
})(ImportDefinitionColumnModelTypeEnum || (exports.ImportDefinitionColumnModelTypeEnum = ImportDefinitionColumnModelTypeEnum = {}));
/** Enumerated code that categorizes the type of error. */
var ImportErrorModelErrorCodeEnum;
(function (ImportErrorModelErrorCodeEnum) {
    ImportErrorModelErrorCodeEnum["VALIDATION_GENERIC"] = "VALIDATION_GENERIC";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_PARAM"] = "VALIDATION_INVALID_PARAM";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_FIELD"] = "VALIDATION_INVALID_FIELD";
    ImportErrorModelErrorCodeEnum["VALIDATION_BELOW_MIN"] = "VALIDATION_BELOW_MIN";
    ImportErrorModelErrorCodeEnum["VALIDATION_EXCEEDS_MAX"] = "VALIDATION_EXCEEDS_MAX";
    ImportErrorModelErrorCodeEnum["VALIDATION_DECIMAL_OUT_OF_BOUNDS"] = "VALIDATION_DECIMAL_OUT_OF_BOUNDS";
    ImportErrorModelErrorCodeEnum["VALIDATION_EMAIL_BAD_FORMAT"] = "VALIDATION_EMAIL_BAD_FORMAT";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_NOT_BE_BLANK"] = "VALIDATION_MUST_NOT_BE_BLANK";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_NOT_BE_NULL"] = "VALIDATION_MUST_NOT_BE_NULL";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_BE_NULL_OR_NOT_BLANK"] = "VALIDATION_MUST_BE_NULL_OR_NOT_BLANK";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_NOT_BE_EMPTY"] = "VALIDATION_MUST_NOT_BE_EMPTY";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_CONTAIN_NO_WHITESPACE"] = "VALIDATION_MUST_CONTAIN_NO_WHITESPACE";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_BE_NULL"] = "VALIDATION_MUST_BE_NULL";
    ImportErrorModelErrorCodeEnum["VALIDATION_PATTERN_MISMATCH"] = "VALIDATION_PATTERN_MISMATCH";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_BE_GREATER_THAN_ZERO"] = "VALIDATION_MUST_BE_GREATER_THAN_ZERO";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_BE_GREATER_THAN_EQUAL_ZERO"] = "VALIDATION_MUST_BE_GREATER_THAN_EQUAL_ZERO";
    ImportErrorModelErrorCodeEnum["VALIDATION_MUST_NOT_BE_ZERO"] = "VALIDATION_MUST_NOT_BE_ZERO";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_SIZE"] = "VALIDATION_INVALID_SIZE";
    ImportErrorModelErrorCodeEnum["VALIDATION_DATE_OUT_OF_RANGE"] = "VALIDATION_DATE_OUT_OF_RANGE";
    ImportErrorModelErrorCodeEnum["VALIDATION_TIME_OUT_OF_RANGE"] = "VALIDATION_TIME_OUT_OF_RANGE";
    ImportErrorModelErrorCodeEnum["VALIDATION_TIME_FIELDS_OUT_OF_ORDER"] = "VALIDATION_TIME_FIELDS_OUT_OF_ORDER";
    ImportErrorModelErrorCodeEnum["VALIDATION_DATE_FIELDS_OUT_OF_ORDER"] = "VALIDATION_DATE_FIELDS_OUT_OF_ORDER";
    ImportErrorModelErrorCodeEnum["VALIDATION_RESOURCE_ALREADY_EXISTS"] = "VALIDATION_RESOURCE_ALREADY_EXISTS";
    ImportErrorModelErrorCodeEnum["VALIDATION_FIELD_ALREADY_EXISTS"] = "VALIDATION_FIELD_ALREADY_EXISTS";
    ImportErrorModelErrorCodeEnum["VALIDATION_REQUIRED_FIELD"] = "VALIDATION_REQUIRED_FIELD";
    ImportErrorModelErrorCodeEnum["VALIDATION_ORG_NOT_LEGAL_ENTITY"] = "VALIDATION_ORG_NOT_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["VALIDATION_ORG_NOT_FINANCIAL_ORG"] = "VALIDATION_ORG_NOT_FINANCIAL_ORG";
    ImportErrorModelErrorCodeEnum["VALIDATION_NOT_BELONG_TO_LEGAL_ENTITY"] = "VALIDATION_NOT_BELONG_TO_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_ACCESS"] = "VALIDATION_INVALID_ACCESS";
    ImportErrorModelErrorCodeEnum["VALIDATION_REFERENCE_NOT_FOUND"] = "VALIDATION_REFERENCE_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["VALIDATION_REFERENCE_EMPTY"] = "VALIDATION_REFERENCE_EMPTY";
    ImportErrorModelErrorCodeEnum["VALIDATION_REFERENCE_MISMATCH"] = "VALIDATION_REFERENCE_MISMATCH";
    ImportErrorModelErrorCodeEnum["VALIDATION_ASSOCIATION_EXISTS"] = "VALIDATION_ASSOCIATION_EXISTS";
    ImportErrorModelErrorCodeEnum["VALIDATION_INCONSISTENT_FIELDS"] = "VALIDATION_INCONSISTENT_FIELDS";
    ImportErrorModelErrorCodeEnum["VALIDATION_UNEXPECTED_VALUE"] = "VALIDATION_UNEXPECTED_VALUE";
    ImportErrorModelErrorCodeEnum["VALIDATION_AT_LEAST_ONE_MUST_BE_TRUE"] = "VALIDATION_AT_LEAST_ONE_MUST_BE_TRUE";
    ImportErrorModelErrorCodeEnum["VALIDATION_ONLY_ONE_OF_CAN_BE_SET"] = "VALIDATION_ONLY_ONE_OF_CAN_BE_SET";
    ImportErrorModelErrorCodeEnum["VALIDATION_REQUIRED_WHEN_TRUE"] = "VALIDATION_REQUIRED_WHEN_TRUE";
    ImportErrorModelErrorCodeEnum["VALIDATION_REQUIRED_WHEN_FALSE"] = "VALIDATION_REQUIRED_WHEN_FALSE";
    ImportErrorModelErrorCodeEnum["VALIDATION_ONLY_VALID_WHEN_TRUE"] = "VALIDATION_ONLY_VALID_WHEN_TRUE";
    ImportErrorModelErrorCodeEnum["VALIDATION_ONLY_VALID_WHEN_FALSE"] = "VALIDATION_ONLY_VALID_WHEN_FALSE";
    ImportErrorModelErrorCodeEnum["VALIDATION_NOT_ACTIVE"] = "VALIDATION_NOT_ACTIVE";
    ImportErrorModelErrorCodeEnum["VALIDATION_UNSUPPORTED_FIELD"] = "VALIDATION_UNSUPPORTED_FIELD";
    ImportErrorModelErrorCodeEnum["VALIDATION_UNSUPPORTED_VALUE"] = "VALIDATION_UNSUPPORTED_VALUE";
    ImportErrorModelErrorCodeEnum["VALIDATION_CANNOT_BE_SAME"] = "VALIDATION_CANNOT_BE_SAME";
    ImportErrorModelErrorCodeEnum["VALIDATION_ONE_OF_REQUIRED"] = "VALIDATION_ONE_OF_REQUIRED";
    ImportErrorModelErrorCodeEnum["VALIDATION_FEATURE_NOT_ENABLED"] = "VALIDATION_FEATURE_NOT_ENABLED";
    ImportErrorModelErrorCodeEnum["VALIDATION_NOTHING_TO_UPDATE"] = "VALIDATION_NOTHING_TO_UPDATE";
    ImportErrorModelErrorCodeEnum["VALIDATION_UPDATE_CANNOT_MODIFY_FIELD"] = "VALIDATION_UPDATE_CANNOT_MODIFY_FIELD";
    ImportErrorModelErrorCodeEnum["VALIDATION_UPDATE_CANNOT_MODIFY_RESOURCE"] = "VALIDATION_UPDATE_CANNOT_MODIFY_RESOURCE";
    ImportErrorModelErrorCodeEnum["VALIDATION_INSUFFICIENT_LICENSE"] = "VALIDATION_INSUFFICIENT_LICENSE";
    ImportErrorModelErrorCodeEnum["VALIDATION_INSUFFICIENT_CONFIG"] = "VALIDATION_INSUFFICIENT_CONFIG";
    ImportErrorModelErrorCodeEnum["VALIDATION_INSUFFICENT_PERMISSIONS"] = "VALIDATION_INSUFFICENT_PERMISSIONS";
    ImportErrorModelErrorCodeEnum["VALIDATION_DUPLICATES"] = "VALIDATION_DUPLICATES";
    ImportErrorModelErrorCodeEnum["VALIDATION_DELETE_NOT_ALLOWED"] = "VALIDATION_DELETE_NOT_ALLOWED";
    ImportErrorModelErrorCodeEnum["VALIDATION_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES"] = "VALIDATION_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES";
    ImportErrorModelErrorCodeEnum["VALIDATION_FISCAL_MONTH_NOT_FOUND"] = "VALIDATION_FISCAL_MONTH_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["VALIDATION_BYTE_LENGTH_MISMATCH"] = "VALIDATION_BYTE_LENGTH_MISMATCH";
    ImportErrorModelErrorCodeEnum["VALIDATION_UDF_INPUT"] = "VALIDATION_UDF_INPUT";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_STATUS"] = "VALIDATION_INVALID_STATUS";
    ImportErrorModelErrorCodeEnum["VALIDATION_CONFLICTING_SEARCH_PARAMETERS"] = "VALIDATION_CONFLICTING_SEARCH_PARAMETERS";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_VERIFICATION_CODE"] = "VALIDATION_INVALID_VERIFICATION_CODE";
    ImportErrorModelErrorCodeEnum["VALIDATION_INVALID_MONETARY_AMOUNT"] = "VALIDATION_INVALID_MONETARY_AMOUNT";
    ImportErrorModelErrorCodeEnum["INVALID_CONFIGURATION"] = "INVALID_CONFIGURATION";
    ImportErrorModelErrorCodeEnum["CONSTRAINT_VIOLATION"] = "CONSTRAINT_VIOLATION";
    ImportErrorModelErrorCodeEnum["PAYLOAD_TOO_LARGE"] = "PAYLOAD_TOO_LARGE";
    ImportErrorModelErrorCodeEnum["JSON_PARSING_ERROR"] = "JSON_PARSING_ERROR";
    ImportErrorModelErrorCodeEnum["JSON_MAPPING_ERROR"] = "JSON_MAPPING_ERROR";
    ImportErrorModelErrorCodeEnum["LOGIN_ACCOUNT_LOCKED"] = "LOGIN_ACCOUNT_LOCKED";
    ImportErrorModelErrorCodeEnum["LOGIN_INVALID_CREDENTIALS"] = "LOGIN_INVALID_CREDENTIALS";
    ImportErrorModelErrorCodeEnum["LOGIN_EXPIRED_CREDENTIALS"] = "LOGIN_EXPIRED_CREDENTIALS";
    ImportErrorModelErrorCodeEnum["NOT_DELETABLE"] = "NOT_DELETABLE";
    ImportErrorModelErrorCodeEnum["REQUEST_BODY_NOT_READABLE"] = "REQUEST_BODY_NOT_READABLE";
    ImportErrorModelErrorCodeEnum["UNAUTHORIZED"] = "UNAUTHORIZED";
    ImportErrorModelErrorCodeEnum["JWT_INVALID_TOKEN_SIGNATURE"] = "JWT_INVALID_TOKEN_SIGNATURE";
    ImportErrorModelErrorCodeEnum["JWT_EXPIRED_TOKEN"] = "JWT_EXPIRED_TOKEN";
    ImportErrorModelErrorCodeEnum["JWT_INVALID_CLAIM"] = "JWT_INVALID_CLAIM";
    ImportErrorModelErrorCodeEnum["JWT_MISSING_TOKEN"] = "JWT_MISSING_TOKEN";
    ImportErrorModelErrorCodeEnum["JWT_REVOKED_TOKEN"] = "JWT_REVOKED_TOKEN";
    ImportErrorModelErrorCodeEnum["JWT_BADLY_FORMATTED_TOKEN"] = "JWT_BADLY_FORMATTED_TOKEN";
    ImportErrorModelErrorCodeEnum["FORBIDDEN"] = "FORBIDDEN";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_INSUFFICIENT_LICENSE"] = "FORBIDDEN_INSUFFICIENT_LICENSE";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_INSUFFICIENT_CONFIGURATION"] = "FORBIDDEN_INSUFFICIENT_CONFIGURATION";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_INSUFFICIENT_ROLE"] = "FORBIDDEN_INSUFFICIENT_ROLE";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_NOT_OWNER"] = "FORBIDDEN_NOT_OWNER";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_NOT_MANAGER"] = "FORBIDDEN_NOT_MANAGER";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_NOT_PROJECT_MANAGER"] = "FORBIDDEN_NOT_PROJECT_MANAGER";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_CANNOT_ASSIGN_TO_PROJECT"] = "FORBIDDEN_CANNOT_ASSIGN_TO_PROJECT";
    ImportErrorModelErrorCodeEnum["FORBIDDEN_NOT_HR_ADMIN"] = "FORBIDDEN_NOT_HR_ADMIN";
    ImportErrorModelErrorCodeEnum["NOT_FOUND"] = "NOT_FOUND";
    ImportErrorModelErrorCodeEnum["DUPLICATE"] = "DUPLICATE";
    ImportErrorModelErrorCodeEnum["CONFLICT"] = "CONFLICT";
    ImportErrorModelErrorCodeEnum["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    ImportErrorModelErrorCodeEnum["INTERNAL_GENERIC"] = "INTERNAL_GENERIC";
    ImportErrorModelErrorCodeEnum["EXTERNAL_GENERIC"] = "EXTERNAL_GENERIC";
    ImportErrorModelErrorCodeEnum["EXTERNAL_UNAUTHORIZED"] = "EXTERNAL_UNAUTHORIZED";
    ImportErrorModelErrorCodeEnum["EXTERNAL_FORBIDDEN"] = "EXTERNAL_FORBIDDEN";
    ImportErrorModelErrorCodeEnum["EXTERNAL_NOT_FOUND"] = "EXTERNAL_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INTERNAL_INSERT"] = "INTERNAL_INSERT";
    ImportErrorModelErrorCodeEnum["INTERNAL_UPDATE"] = "INTERNAL_UPDATE";
    ImportErrorModelErrorCodeEnum["INTERNAL_DELETE"] = "INTERNAL_DELETE";
    ImportErrorModelErrorCodeEnum["UNAVAILABLE"] = "UNAVAILABLE";
    ImportErrorModelErrorCodeEnum["AG_SELF_APPROVAL_DISABLED"] = "AG_SELF_APPROVAL_DISABLED";
    ImportErrorModelErrorCodeEnum["AG_APPROVAL_REQUIRED"] = "AG_APPROVAL_REQUIRED";
    ImportErrorModelErrorCodeEnum["AG_INVALID_APPROVAL_GROUP_TYPE"] = "AG_INVALID_APPROVAL_GROUP_TYPE";
    ImportErrorModelErrorCodeEnum["AG_EXP_APPROVAL_UNAVAILABLE"] = "AG_EXP_APPROVAL_UNAVAILABLE";
    ImportErrorModelErrorCodeEnum["AG_EXP_APPROVAL_FORBIDDEN"] = "AG_EXP_APPROVAL_FORBIDDEN";
    ImportErrorModelErrorCodeEnum["AG_TIME_APPROVAL_UNAVAILABLE"] = "AG_TIME_APPROVAL_UNAVAILABLE";
    ImportErrorModelErrorCodeEnum["AG_TIME_APPROVAL_FORBIDDEN"] = "AG_TIME_APPROVAL_FORBIDDEN";
    ImportErrorModelErrorCodeEnum["AG_TYPE_MISMATCH"] = "AG_TYPE_MISMATCH";
    ImportErrorModelErrorCodeEnum["AG_SUBMITTER_NOT_REMOVABLE"] = "AG_SUBMITTER_NOT_REMOVABLE";
    ImportErrorModelErrorCodeEnum["AG_SUBMITTING_PROJECT_NOT_SETUP_FOR_INVOICING"] = "AG_SUBMITTING_PROJECT_NOT_SETUP_FOR_INVOICING";
    ImportErrorModelErrorCodeEnum["AG_INVOICE_APPROVAL_UNAVAILABLE"] = "AG_INVOICE_APPROVAL_UNAVAILABLE";
    ImportErrorModelErrorCodeEnum["AG_INVOICE_APPROVAL_FORBIDDEN"] = "AG_INVOICE_APPROVAL_FORBIDDEN";
    ImportErrorModelErrorCodeEnum["ALTERNATE_CANNOT_ASSIGN_SAME_USER"] = "ALTERNATE_CANNOT_ASSIGN_SAME_USER";
    ImportErrorModelErrorCodeEnum["ALTERNATE_RESTRICTED_TO_EMPLOYEES"] = "ALTERNATE_RESTRICTED_TO_EMPLOYEES";
    ImportErrorModelErrorCodeEnum["ALTERNATE_RESTRICTED_TO_MANAGERS"] = "ALTERNATE_RESTRICTED_TO_MANAGERS";
    ImportErrorModelErrorCodeEnum["ALTERNATE_RESTRICTED_TO_ROLE"] = "ALTERNATE_RESTRICTED_TO_ROLE";
    ImportErrorModelErrorCodeEnum["CONTRACT_WAGE_DETERMINATION_START_DATE_BEFORE_CONTRACT_START_DATE"] = "CONTRACT_WAGE_DETERMINATION_START_DATE_BEFORE_CONTRACT_START_DATE";
    ImportErrorModelErrorCodeEnum["CONTRACT_WAGE_DETERMINATION_END_DATE_AFTER_CONTRACT_END_DATE"] = "CONTRACT_WAGE_DETERMINATION_END_DATE_AFTER_CONTRACT_END_DATE";
    ImportErrorModelErrorCodeEnum["CONTRACT_START_DATE_BEFORE_PREVIOUS_START_DATE"] = "CONTRACT_START_DATE_BEFORE_PREVIOUS_START_DATE";
    ImportErrorModelErrorCodeEnum["CONTRACT_END_DATE_AFTER_NEXT_START_DATE"] = "CONTRACT_END_DATE_AFTER_NEXT_START_DATE";
    ImportErrorModelErrorCodeEnum["CONTRACT_COVERAGE_MUST_BE_CONTINUOUS"] = "CONTRACT_COVERAGE_MUST_BE_CONTINUOUS";
    ImportErrorModelErrorCodeEnum["CONTRACT_SCA_RATE_REQUIRED"] = "CONTRACT_SCA_RATE_REQUIRED";
    ImportErrorModelErrorCodeEnum["CONTRACT_PRIME_CONTRACT_KEY_NOT_ALLOWED"] = "CONTRACT_PRIME_CONTRACT_KEY_NOT_ALLOWED";
    ImportErrorModelErrorCodeEnum["CUSTOMER_PAYMENT_IS_APPLIED"] = "CUSTOMER_PAYMENT_IS_APPLIED";
    ImportErrorModelErrorCodeEnum["CP_POSTED"] = "CP_POSTED";
    ImportErrorModelErrorCodeEnum["CP_SUBMITTED"] = "CP_SUBMITTED";
    ImportErrorModelErrorCodeEnum["DEPOSIT_POSTED"] = "DEPOSIT_POSTED";
    ImportErrorModelErrorCodeEnum["DEPOSIT_SUBMITTED"] = "DEPOSIT_SUBMITTED";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_APPLIED"] = "DEPOSITED_DOC_APPLIED";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_NOT_POSTED"] = "DEPOSITED_DOC_NOT_POSTED";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_VOIDED"] = "DEPOSITED_DOC_VOIDED";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_VOIDING"] = "DEPOSITED_DOC_VOIDING";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_LEGAL_ENTITY_MISMATCH"] = "DEPOSITED_DOC_LEGAL_ENTITY_MISMATCH";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_ALREADY_INCLUDED"] = "DEPOSITED_DOC_ALREADY_INCLUDED";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_ZERO_AMOUNT"] = "DEPOSITED_DOC_ZERO_AMOUNT";
    ImportErrorModelErrorCodeEnum["DEPOSITED_DOC_INVALID_BANK_ACCOUNT_TYPE"] = "DEPOSITED_DOC_INVALID_BANK_ACCOUNT_TYPE";
    ImportErrorModelErrorCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_REMOVE_DEFAULT_STATUS"] = "EXCHANGE_RATE_TYPE_CANNOT_REMOVE_DEFAULT_STATUS";
    ImportErrorModelErrorCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_DELETE_DEFAULT"] = "EXCHANGE_RATE_TYPE_CANNOT_DELETE_DEFAULT";
    ImportErrorModelErrorCodeEnum["EXCHANGE_RATE_TYPE_CANNOT_DELETE_IN_USE"] = "EXCHANGE_RATE_TYPE_CANNOT_DELETE_IN_USE";
    ImportErrorModelErrorCodeEnum["EXCHANGE_RATE_SAME_FROM_TO_CURRENCY"] = "EXCHANGE_RATE_SAME_FROM_TO_CURRENCY";
    ImportErrorModelErrorCodeEnum["EXCHANGE_RATE_NOT_FOUND"] = "EXCHANGE_RATE_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["EXPENSE_SUMMARY_REQUIRED_WHEN_WITH_WIZARD"] = "EXPENSE_SUMMARY_REQUIRED_WHEN_WITH_WIZARD";
    ImportErrorModelErrorCodeEnum["EXPENSE_ATTACHMENT_NOT_ASSOCIATED_WITH_EXPENSE"] = "EXPENSE_ATTACHMENT_NOT_ASSOCIATED_WITH_EXPENSE";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_PROJECT_KEY_MUST_NOT_BE_NULL"] = "EXPENSE_PROJECT_ALLOCATION_PROJECT_KEY_MUST_NOT_BE_NULL";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_PROJECT_NOT_FOUND"] = "EXPENSE_PROJECT_ALLOCATION_PROJECT_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_TASK_INVALID"] = "EXPENSE_PROJECT_ALLOCATION_TASK_INVALID";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_TASK_NOT_FOUND"] = "EXPENSE_PROJECT_ALLOCATION_TASK_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_PERCENTAGE_MUST_NOT_BE_NULL"] = "EXPENSE_PROJECT_ALLOCATION_PERCENTAGE_MUST_NOT_BE_NULL";
    ImportErrorModelErrorCodeEnum["EXPENSEPROJECTALLOCATIONPERCENTAGESMUSTTOTAL100"] = "EXPENSE_PROJECT_ALLOCATION_PERCENTAGES_MUST_TOTAL_100";
    ImportErrorModelErrorCodeEnum["EXPENSE_PROJECT_ALLOCATION_DUPLICATIONS"] = "EXPENSE_PROJECT_ALLOCATION_DUPLICATIONS";
    ImportErrorModelErrorCodeEnum["EXPENSE_REPORT_MULTI_ENTITY_NOT_ENABLED"] = "EXPENSE_REPORT_MULTI_ENTITY_NOT_ENABLED";
    ImportErrorModelErrorCodeEnum["EXPENSE_REPORT_MULTI_ENTITY_NO_ASSIGNMENT"] = "EXPENSE_REPORT_MULTI_ENTITY_NO_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["EXPENSE_DETAIL_AMOUNT_MISMATCH"] = "EXPENSE_DETAIL_AMOUNT_MISMATCH";
    ImportErrorModelErrorCodeEnum["EXPENSE_DETAIL_EXCHANGE_RATE_MUST_BE_ONE"] = "EXPENSE_DETAIL_EXCHANGE_RATE_MUST_BE_ONE";
    ImportErrorModelErrorCodeEnum["FA_DISPOSAL_FIELDS_REQUIRED"] = "FA_DISPOSAL_FIELDS_REQUIRED";
    ImportErrorModelErrorCodeEnum["FA_DISPOSAL_BEFORE_DEPRECIATION_START"] = "FA_DISPOSAL_BEFORE_DEPRECIATION_START";
    ImportErrorModelErrorCodeEnum["FA_DISPOSAL_BEFORE_FISCAL_PERIOD_BEGIN"] = "FA_DISPOSAL_BEFORE_FISCAL_PERIOD_BEGIN";
    ImportErrorModelErrorCodeEnum["FA_DISPOSAL_BEFORE_FISCAL_PERIOD_END"] = "FA_DISPOSAL_BEFORE_FISCAL_PERIOD_END";
    ImportErrorModelErrorCodeEnum["FA_DISPOSAL_EQUALS_FISCAL_PERIOD_END"] = "FA_DISPOSAL_EQUALS_FISCAL_PERIOD_END";
    ImportErrorModelErrorCodeEnum["FA_JOURNAL_ENTRY_NOT_FOUND"] = "FA_JOURNAL_ENTRY_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["FA_HAS_POSTED_DISPOSAL"] = "FA_HAS_POSTED_DISPOSAL";
    ImportErrorModelErrorCodeEnum["FA_HAS_POSTED_TRANSACTIONS"] = "FA_HAS_POSTED_TRANSACTIONS";
    ImportErrorModelErrorCodeEnum["FA_NO_LONGER_POSTABLE"] = "FA_NO_LONGER_POSTABLE";
    ImportErrorModelErrorCodeEnum["FA_TRANSACTION_ENTRY_NOT_ALLOWED_FOR_ACCOUNT"] = "FA_TRANSACTION_ENTRY_NOT_ALLOWED_FOR_ACCOUNT";
    ImportErrorModelErrorCodeEnum["FA_PROJECT_REQUIRED_FOR_ACCOUNT"] = "FA_PROJECT_REQUIRED_FOR_ACCOUNT";
    ImportErrorModelErrorCodeEnum["FA_LOCATION_CONFLICT"] = "FA_LOCATION_CONFLICT";
    ImportErrorModelErrorCodeEnum["FAP_NO_ORG_FOR_FIXED_ASSET"] = "FAP_NO_ORG_FOR_FIXED_ASSET";
    ImportErrorModelErrorCodeEnum["FAP_FISCAL_PERIOD_CLOSED"] = "FAP_FISCAL_PERIOD_CLOSED";
    ImportErrorModelErrorCodeEnum["FAP_INCLUDED_IN_BANK_RECONCILIATION"] = "FAP_INCLUDED_IN_BANK_RECONCILIATION";
    ImportErrorModelErrorCodeEnum["FAP_NOT_LATEST_POST_FOR_LEGAL_ENTITY"] = "FAP_NOT_LATEST_POST_FOR_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["FAP_STATUS_REQUIRED_WHEN_DISPOSED_ASSETS_INCLUDED"] = "FAP_STATUS_REQUIRED_WHEN_DISPOSED_ASSETS_INCLUDED";
    ImportErrorModelErrorCodeEnum["FPI_EITHER_BILL_DATE_OR_BILL_ON_COMPLETION_REQUIRED"] = "FPI_EITHER_BILL_DATE_OR_BILL_ON_COMPLETION_REQUIRED";
    ImportErrorModelErrorCodeEnum["FPI_BILL_AND_BILL_ON_COMPLETION_SET"] = "FPI_BILL_AND_BILL_ON_COMPLETION_SET";
    ImportErrorModelErrorCodeEnum["FPI_INVALID_REV_RECOGNITION_METHOD_FOR_SCHEDULE"] = "FPI_INVALID_REV_RECOGNITION_METHOD_FOR_SCHEDULE";
    ImportErrorModelErrorCodeEnum["FPI_ITEM_POSTED_FOR_BILLING"] = "FPI_ITEM_POSTED_FOR_BILLING";
    ImportErrorModelErrorCodeEnum["FPI_ITEM_ON_COMPLETED_INVOICE"] = "FPI_ITEM_ON_COMPLETED_INVOICE";
    ImportErrorModelErrorCodeEnum["IMPORTED_EXPENSE_EXPENSE_TYPE_INVALID"] = "IMPORTED_EXPENSE_EXPENSE_TYPE_INVALID";
    ImportErrorModelErrorCodeEnum["IMPORTED_EXPENSE_NOT_AVAILABLE"] = "IMPORTED_EXPENSE_NOT_AVAILABLE";
    ImportErrorModelErrorCodeEnum["INTEGRATION_USER_EXISTS"] = "INTEGRATION_USER_EXISTS";
    ImportErrorModelErrorCodeEnum["INVENTORY_TASK_PROJECT_MISMATCH"] = "INVENTORY_TASK_PROJECT_MISMATCH";
    ImportErrorModelErrorCodeEnum["INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_TASK_NOT_SUPPORTING_ITEMS"] = "INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_TASK_NOT_SUPPORTING_ITEMS";
    ImportErrorModelErrorCodeEnum["INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_PROJECT_NOT_SUPPORTING_ITEMS"] = "INVENTORY_CANNOT_ASSOCIATE_ITEM_WITH_PROJECT_NOT_SUPPORTING_ITEMS";
    ImportErrorModelErrorCodeEnum["INVENTORY_TASK_CONTAINS_PROJECT_NOT_ASSOCIATED_WITH_ITEM"] = "INVENTORY_TASK_CONTAINS_PROJECT_NOT_ASSOCIATED_WITH_ITEM";
    ImportErrorModelErrorCodeEnum["INVOICE_PDF_NOT_FOUND"] = "INVOICE_PDF_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_PDF_EXCEEDS_MAX_SIZE"] = "INVOICE_PDF_EXCEEDS_MAX_SIZE";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_NOT_BELONG_TO_OWNING_ORG"] = "INVOICE_PROJECT_NOT_BELONG_TO_OWNING_ORG";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_OWNING_ORG_NOT_FOUND"] = "INVOICE_PROJECT_OWNING_ORG_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_NOT_FOUND"] = "INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_HAS_NO_POSTING_ORG"] = "INVOICE_PROJECT_OWNING_ORG_LEGAL_ENTITY_HAS_NO_POSTING_ORG";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_NOT_VALID_FOR_LEGAL_ENTITY"] = "INVOICE_PROJECT_CUSTOMER_ORG_NOT_VALID_FOR_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_BANK_ACCOUNT"] = "INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_BANK_ACCOUNT";
    ImportErrorModelErrorCodeEnum["INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_FEE_ACCOUNT"] = "INVOICE_PROJECT_CUSTOMER_ORG_HAS_NO_FEE_ACCOUNT";
    ImportErrorModelErrorCodeEnum["INVOICE_AUTO_PAYMENT_METHOD_NOT_FOUND"] = "INVOICE_AUTO_PAYMENT_METHOD_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_PAYOUT_NOT_MATCH_DETAIL_SUM"] = "INVOICE_PAYOUT_NOT_MATCH_DETAIL_SUM";
    ImportErrorModelErrorCodeEnum["INVOICE_MORE_THAN_ONE_PAYMENT_FOUND"] = "INVOICE_MORE_THAN_ONE_PAYMENT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_SINGLE_PAYOUT_FOR_MULTIPLE_LEGAL_ENTITIES"] = "INVOICE_SINGLE_PAYOUT_FOR_MULTIPLE_LEGAL_ENTITIES";
    ImportErrorModelErrorCodeEnum["INVOICE_BANK_ACCOUNT_NOT_FOUND"] = "INVOICE_BANK_ACCOUNT_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_MULTIPLE_BANK_ACCOUNTS_FOUND"] = "INVOICE_MULTIPLE_BANK_ACCOUNTS_FOUND";
    ImportErrorModelErrorCodeEnum["INVOICE_STATUS_NOT_ALLOW_SUBMIT"] = "INVOICE_STATUS_NOT_ALLOW_SUBMIT";
    ImportErrorModelErrorCodeEnum["INVOICE_CANNOT_SUBMIT_DUE_TO_APPROVALS"] = "INVOICE_CANNOT_SUBMIT_DUE_TO_APPROVALS";
    ImportErrorModelErrorCodeEnum["INVOICE_STATUS_NOT_ALLOW_COMPLETE"] = "INVOICE_STATUS_NOT_ALLOW_COMPLETE";
    ImportErrorModelErrorCodeEnum["INVOICE_CANNOT_POST_COMPLETION"] = "INVOICE_CANNOT_POST_COMPLETION";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_WORK_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_WORK_DATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COMMENTS"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COMMENTS";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_DATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COMMENTS"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COMMENTS";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_PCT"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_PCT";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_MULT"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP_MULT";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_MARKUP";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST_RATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_COST_RATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_BILL_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_BILL_DATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_INDV"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_INDV";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_ITEM_DATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SHOW_ITEM_DATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_MISSING"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_MISSING";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_HEADING"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_HEADING";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_DUPLICATE"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_COL_VALUE_DUPLICATE";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_QTY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_QTY";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_ITD_QTY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_SUB_ITD_QTY";
    ImportErrorModelErrorCodeEnum["INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_KEY"] = "INVOICE_FORMAT_OPTIONS_SECTION_VALIDATE_KEY";
    ImportErrorModelErrorCodeEnum["JOURNAL_PROJECT_REQUIRED_WHEN_FIELD_PROVIDED"] = "JOURNAL_PROJECT_REQUIRED_WHEN_FIELD_PROVIDED";
    ImportErrorModelErrorCodeEnum["JOURNAL_FIELD_REQUIRED_WHEN_PROJECT_PROVIDED"] = "JOURNAL_FIELD_REQUIRED_WHEN_PROJECT_PROVIDED";
    ImportErrorModelErrorCodeEnum["JOURNAL_REVERSING_DATE_MUST_BE_IN_FISCAL_PERIOD_AFTER_POST_DATE"] = "JOURNAL_REVERSING_DATE_MUST_BE_IN_FISCAL_PERIOD_AFTER_POST_DATE";
    ImportErrorModelErrorCodeEnum["JOURNAL_TASK_PROJECT_MISMATCH"] = "JOURNAL_TASK_PROJECT_MISMATCH";
    ImportErrorModelErrorCodeEnum["LOGO_TYPE_INVALID"] = "LOGO_TYPE_INVALID";
    ImportErrorModelErrorCodeEnum["LEAVE_APPROVAL_QUEUE_INVALID_APPROVER"] = "LEAVE_APPROVAL_QUEUE_INVALID_APPROVER";
    ImportErrorModelErrorCodeEnum["LEAVE_APPROVAL_UNAVAILABLE"] = "LEAVE_APPROVAL_UNAVAILABLE";
    ImportErrorModelErrorCodeEnum["MAIL_UNABLE_TO_VERIFY_SIGNATURE"] = "MAIL_UNABLE_TO_VERIFY_SIGNATURE";
    ImportErrorModelErrorCodeEnum["INSTANCE_CURRENCY_NOT_FOUND"] = "INSTANCE_CURRENCY_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_ALREADY_ACTIVATED"] = "MULTICURRENCY_ALREADY_ACTIVATED";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_INSTANCE_CURRENCY_NOT_SET"] = "MULTICURRENCY_INSTANCE_CURRENCY_NOT_SET";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_INSTANCE_CURRENCY_INVALID"] = "MULTICURRENCY_INSTANCE_CURRENCY_INVALID";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_REQUIRES_CURRENCY_CODE"] = "MULTICURRENCY_REQUIRES_CURRENCY_CODE";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_OPERATION_NOT_ENABLED"] = "MULTICURRENCY_OPERATION_NOT_ENABLED";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_INVALID_PAYMENT_METHOD"] = "MULTICURRENCY_INVALID_PAYMENT_METHOD";
    ImportErrorModelErrorCodeEnum["MULTICURRENCY_REQUIRES_USD"] = "MULTICURRENCY_REQUIRES_USD";
    ImportErrorModelErrorCodeEnum["NOTIFICATION_TITLE_REQUIRES_ARGUMENTS"] = "NOTIFICATION_TITLE_REQUIRES_ARGUMENTS";
    ImportErrorModelErrorCodeEnum["NOTIFICATION_MESSAGE_REQUIRES_ARGUMENTS"] = "NOTIFICATION_MESSAGE_REQUIRES_ARGUMENTS";
    ImportErrorModelErrorCodeEnum["ORG_VENDOR_PROFILE_MISMATCH"] = "ORG_VENDOR_PROFILE_MISMATCH";
    ImportErrorModelErrorCodeEnum["ORG_FEDERAL_TAX_ID_INVALID"] = "ORG_FEDERAL_TAX_ID_INVALID";
    ImportErrorModelErrorCodeEnum["ORG_GL_POST_ORG_MISMATCH"] = "ORG_GL_POST_ORG_MISMATCH";
    ImportErrorModelErrorCodeEnum["ORG_ACCOUNT_CATEGORY_INVALID"] = "ORG_ACCOUNT_CATEGORY_INVALID";
    ImportErrorModelErrorCodeEnum["PERSON_PASSWORD_MISMATCH"] = "PERSON_PASSWORD_MISMATCH";
    ImportErrorModelErrorCodeEnum["PERSON_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES"] = "PERSON_UNABLE_TO_DELETE_DUE_TO_EXISTING_DEPENDENCIES";
    ImportErrorModelErrorCodeEnum["PERSON_NOT_FOUND"] = "PERSON_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["PERSON_ATTACHMENT_NOT_ASSOCIATED_WITH_PERSON"] = "PERSON_ATTACHMENT_NOT_ASSOCIATED_WITH_PERSON";
    ImportErrorModelErrorCodeEnum["PERSON_PUNCH_CLOCK_USER_REQUIRES_TIMESHEET_USER_ROLE"] = "PERSON_PUNCH_CLOCK_USER_REQUIRES_TIMESHEET_USER_ROLE";
    ImportErrorModelErrorCodeEnum["PERSON_RATE_HAS_EXTRACTED_TIME"] = "PERSON_RATE_HAS_EXTRACTED_TIME";
    ImportErrorModelErrorCodeEnum["PERSON_RATE_EXEMPT_CANNOT_SET_SCA_WAGE_FLAG"] = "PERSON_RATE_EXEMPT_CANNOT_SET_SCA_WAGE_FLAG";
    ImportErrorModelErrorCodeEnum["PLAN_SET_NAME_MUST_HAVE_SYS_DEFAULT"] = "PLAN_SET_NAME_MUST_HAVE_SYS_DEFAULT";
    ImportErrorModelErrorCodeEnum["PO_PR_KEY_REQUIRED"] = "PO_PR_KEY_REQUIRED";
    ImportErrorModelErrorCodeEnum["PO_PR_INVALID_STATUS"] = "PO_PR_INVALID_STATUS";
    ImportErrorModelErrorCodeEnum["PO_COMMITMENT_DATE_NOT_IN_OPEN_FISCAL_PERIOD"] = "PO_COMMITMENT_DATE_NOT_IN_OPEN_FISCAL_PERIOD";
    ImportErrorModelErrorCodeEnum["PO_LINE_NOT_IN_OPEN_STATE"] = "PO_LINE_NOT_IN_OPEN_STATE";
    ImportErrorModelErrorCodeEnum["PO_MOD_NOT_ORIGINAL_PO"] = "PO_MOD_NOT_ORIGINAL_PO";
    ImportErrorModelErrorCodeEnum["PO_MOD_NUMBER_REQUIRED"] = "PO_MOD_NUMBER_REQUIRED";
    ImportErrorModelErrorCodeEnum["PO_MOD_INVALID_VI_OVERAGE"] = "PO_MOD_INVALID_VI_OVERAGE";
    ImportErrorModelErrorCodeEnum["PO_MOD_CANNOT_UPDATE"] = "PO_MOD_CANNOT_UPDATE";
    ImportErrorModelErrorCodeEnum["PO_NOT_IN_OPEN_STATE"] = "PO_NOT_IN_OPEN_STATE";
    ImportErrorModelErrorCodeEnum["PO_NOT_MOD"] = "PO_NOT_MOD";
    ImportErrorModelErrorCodeEnum["PO_NOT_ORIGINAL"] = "PO_NOT_ORIGINAL";
    ImportErrorModelErrorCodeEnum["PO_SUBMIT_VALIDATION"] = "PO_SUBMIT_VALIDATION";
    ImportErrorModelErrorCodeEnum["PO_STATUS_NOT_ALLOW_SUBMIT"] = "PO_STATUS_NOT_ALLOW_SUBMIT";
    ImportErrorModelErrorCodeEnum["PO_WITH_EXISTING_DETAILS_INVALID_UPDATE"] = "PO_WITH_EXISTING_DETAILS_INVALID_UPDATE";
    ImportErrorModelErrorCodeEnum["PO_PR_REFERENCE_MISMATCH"] = "PO_PR_REFERENCE_MISMATCH";
    ImportErrorModelErrorCodeEnum["PO_CANNOT_SUBMIT_TO_APPROVAL_GROUP"] = "PO_CANNOT_SUBMIT_TO_APPROVAL_GROUP";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "PO_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_INVALID_VALUE"] = "PO_DETAILS_INVALID_VALUE";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS"] = "PO_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_ACCOUNT_INVALID"] = "PO_DETAILS_ACCOUNT_INVALID";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_TERMINAL_STATUS"] = "PO_DETAILS_TERMINAL_STATUS";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_REF_LINE_EXISTS"] = "PO_DETAILS_REF_LINE_EXISTS";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_PR_REFERENCE_MISMATCH"] = "PO_DETAILS_PR_REFERENCE_MISMATCH";
    ImportErrorModelErrorCodeEnum["PO_DETAILS_PR_LINE_REFERENCE_MISMATCH"] = "PO_DETAILS_PR_LINE_REFERENCE_MISMATCH";
    ImportErrorModelErrorCodeEnum["PO_WITH_DETAILS_CANNOT_UPDATE_VENDOR_WITH_DIFFERENT_CURRENCY"] = "PO_WITH_DETAILS_CANNOT_UPDATE_VENDOR_WITH_DIFFERENT_CURRENCY";
    ImportErrorModelErrorCodeEnum["PD_AND_VENDOR_WITH_DIFFERENT_CURRENCIES"] = "PD_AND_VENDOR_WITH_DIFFERENT_CURRENCIES";
    ImportErrorModelErrorCodeEnum["PO_ASSIGNMENT_OVERLAPS_EXISTING_ASSIGNMENT"] = "PO_ASSIGNMENT_OVERLAPS_EXISTING_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_CANNOT_UPDATE_ACTIVE_STATUS"] = "POSTING_GROUP_CANNOT_UPDATE_ACTIVE_STATUS";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_CANNOT_UPDATE_TYPE"] = "POSTING_GROUP_CANNOT_UPDATE_TYPE";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_TYPE_MUST_BE_CUSTOM"] = "POSTING_GROUP_TYPE_MUST_BE_CUSTOM";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_REQUIRED"] = "POSTING_GROUP_SOURCE_ACCOUNT_REQUIRED";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID"] = "POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID_STATE"] = "POSTING_GROUP_SOURCE_ACCOUNT_SOURCE_INVALID_STATE";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_SOURCE_INVALID_ORGANIZATION_SOURCE"] = "POSTING_GROUP_SOURCE_INVALID_ORGANIZATION_SOURCE";
    ImportErrorModelErrorCodeEnum["POSTING_GROUP_SOURCE_POSTING_GROUP_MISMATCH"] = "POSTING_GROUP_SOURCE_POSTING_GROUP_MISMATCH";
    ImportErrorModelErrorCodeEnum["PR_MOD_CANNOT_UPDATE"] = "PR_MOD_CANNOT_UPDATE";
    ImportErrorModelErrorCodeEnum["PR_WITH_EXISTING_DETAILS_INVALID_UPDATE"] = "PR_WITH_EXISTING_DETAILS_INVALID_UPDATE";
    ImportErrorModelErrorCodeEnum["PR_TERMINAL_STATUS"] = "PR_TERMINAL_STATUS";
    ImportErrorModelErrorCodeEnum["PR_NOT_TERMINAL_STATUS"] = "PR_NOT_TERMINAL_STATUS";
    ImportErrorModelErrorCodeEnum["PR_NOT_MOD"] = "PR_NOT_MOD";
    ImportErrorModelErrorCodeEnum["PR_NOT_ORIGINAL"] = "PR_NOT_ORIGINAL";
    ImportErrorModelErrorCodeEnum["PR_MOD_NOT_ORIGINAL_PR"] = "PR_MOD_NOT_ORIGINAL_PR";
    ImportErrorModelErrorCodeEnum["PR_NOT_IN_OPEN_STATE"] = "PR_NOT_IN_OPEN_STATE";
    ImportErrorModelErrorCodeEnum["PR_MOD_NUMBER_REQUIRED"] = "PR_MOD_NUMBER_REQUIRED";
    ImportErrorModelErrorCodeEnum["PR_DETAILS_TERMINAL_STATUS"] = "PR_DETAILS_TERMINAL_STATUS";
    ImportErrorModelErrorCodeEnum["PR_DETAILS_REF_LINE_EXISTS"] = "PR_DETAILS_REF_LINE_EXISTS";
    ImportErrorModelErrorCodeEnum["PR_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS"] = "PR_DETAILS_ACCOUNT_MUST_REQUIRE_PROJECTS";
    ImportErrorModelErrorCodeEnum["PR_CANNOT_SUBMIT"] = "PR_CANNOT_SUBMIT";
    ImportErrorModelErrorCodeEnum["PR_DETAILS_CANNOT_UPDATE_CURRENCY"] = "PR_DETAILS_CANNOT_UPDATE_CURRENCY";
    ImportErrorModelErrorCodeEnum["PD_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "PD_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ImportErrorModelErrorCodeEnum["PD_DETAILS_ACCOUNT_INVALID"] = "PD_DETAILS_ACCOUNT_INVALID";
    ImportErrorModelErrorCodeEnum["PD_DETAILS_EXCESS_REVERSE_VALUE"] = "PD_DETAILS_EXCESS_REVERSE_VALUE";
    ImportErrorModelErrorCodeEnum["PROJECT_DUPLICATE_RATES"] = "PROJECT_DUPLICATE_RATES";
    ImportErrorModelErrorCodeEnum["PROJECT_RATES_REQUIRED_WITH_NO_MASTER_RATES"] = "PROJECT_RATES_REQUIRED_WITH_NO_MASTER_RATES";
    ImportErrorModelErrorCodeEnum["PROJECT_RATES_NOT_ALLOWED_WITH_MASTER_RATES"] = "PROJECT_RATES_NOT_ALLOWED_WITH_MASTER_RATES";
    ImportErrorModelErrorCodeEnum["PROJECT_LOCATIONS_MISSING_PROJECT_DEFAULT"] = "PROJECT_LOCATIONS_MISSING_PROJECT_DEFAULT";
    ImportErrorModelErrorCodeEnum["PROJECT_DEFAULT_PROJECT_LOCATION_DELETE_NOT_ALLOWED"] = "PROJECT_DEFAULT_PROJECT_LOCATION_DELETE_NOT_ALLOWED";
    ImportErrorModelErrorCodeEnum["PROJECT_CUSTOM_RATE_UPDATE_NOT_ALLOWED"] = "PROJECT_CUSTOM_RATE_UPDATE_NOT_ALLOWED";
    ImportErrorModelErrorCodeEnum["PROJECT_INACTIVE_USER"] = "PROJECT_INACTIVE_USER";
    ImportErrorModelErrorCodeEnum["PROJECT_CONTRIBUTOR_INVOICE_MUST_HAVE_GENERATE_INVOICE_FLAG_SET"] = "PROJECT_CONTRIBUTOR_INVOICE_MUST_HAVE_GENERATE_INVOICE_FLAG_SET";
    ImportErrorModelErrorCodeEnum["PROJECT_LEAD_PROJECT_REQUIRED_FOR_INVOICE_CONTRIBUTORS"] = "PROJECT_LEAD_PROJECT_REQUIRED_FOR_INVOICE_CONTRIBUTORS";
    ImportErrorModelErrorCodeEnum["PROJECT_LEAD_PROJECT_MUST_BE_DIFFERENT_THAN_CONTRIBUTOR_PROJECT"] = "PROJECT_LEAD_PROJECT_MUST_BE_DIFFERENT_THAN_CONTRIBUTOR_PROJECT";
    ImportErrorModelErrorCodeEnum["PROJECT_ORG_NOT_WITHIN_OWNING_ORG_LEGAL_ENTITY"] = "PROJECT_ORG_NOT_WITHIN_OWNING_ORG_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["PROJECT_LEAD_AND_CONTRIBUTOR_PROJECTS_MUST_HAVE_SAME_LEGAL_ENTITY"] = "PROJECT_LEAD_AND_CONTRIBUTOR_PROJECTS_MUST_HAVE_SAME_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["PROJECT_ADDRESS_REQUIRED_WHEN_DEFAULT_NOT_AVAILABLE"] = "PROJECT_ADDRESS_REQUIRED_WHEN_DEFAULT_NOT_AVAILABLE";
    ImportErrorModelErrorCodeEnum["PROJECT_INVOICE_SETUP_NOT_FOUND_FOR_LEAD_PROJECT"] = "PROJECT_INVOICE_SETUP_NOT_FOUND_FOR_LEAD_PROJECT";
    ImportErrorModelErrorCodeEnum["PROJECT_INVOICE_SETUP_INVALID_ACTION_DUE_TO_PENDING_APPROVALS"] = "PROJECT_INVOICE_SETUP_INVALID_ACTION_DUE_TO_PENDING_APPROVALS";
    ImportErrorModelErrorCodeEnum["PROJECT_INVALID_LEAD_PROJECT_ASSIGNED_TO_INVOICE_GROUP"] = "PROJECT_INVALID_LEAD_PROJECT_ASSIGNED_TO_INVOICE_GROUP";
    ImportErrorModelErrorCodeEnum["PROJECT_INVALID_CONTRIBUTOR_PROJECT_ASSIGNED_TO_INVOICE_GROUP"] = "PROJECT_INVALID_CONTRIBUTOR_PROJECT_ASSIGNED_TO_INVOICE_GROUP";
    ImportErrorModelErrorCodeEnum["PROJECT_DUPLICATE_INVOICE_FORMATS_SPECIFIED"] = "PROJECT_DUPLICATE_INVOICE_FORMATS_SPECIFIED";
    ImportErrorModelErrorCodeEnum["PROJECT_PAY_CODE_MISSING_PROJECT_DEFAULT"] = "PROJECT_PAY_CODE_MISSING_PROJECT_DEFAULT";
    ImportErrorModelErrorCodeEnum["PROJECT_DEFAULT_PROJECT_PAY_CODE_DELETE_NOT_ALLOWED"] = "PROJECT_DEFAULT_PROJECT_PAY_CODE_DELETE_NOT_ALLOWED";
    ImportErrorModelErrorCodeEnum["PROJECT_PAYMENT_OPTION_REQUIRED_WHEN_ELECTRONIC_PAYMENTS_ENABLED"] = "PROJECT_PAYMENT_OPTION_REQUIRED_WHEN_ELECTRONIC_PAYMENTS_ENABLED";
    ImportErrorModelErrorCodeEnum["PROJECT_ACCOUNT_CATEGORY_INVALID"] = "PROJECT_ACCOUNT_CATEGORY_INVALID";
    ImportErrorModelErrorCodeEnum["PROJECT_TASK_LEVEL_MUST_HAVE_TASK"] = "PROJECT_TASK_LEVEL_MUST_HAVE_TASK";
    ImportErrorModelErrorCodeEnum["PROJECT_TASK_LEVEL_MUST_NOT_HAVE_TASK"] = "PROJECT_TASK_LEVEL_MUST_NOT_HAVE_TASK";
    ImportErrorModelErrorCodeEnum["PROJECT_ASSIGNMENT"] = "PROJECT_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["PROJECT_TASK_ASSIGNMENT"] = "PROJECT_TASK_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["PROJECT_MUST_ASSIGN_TO_CONTRACT"] = "PROJECT_MUST_ASSIGN_TO_CONTRACT";
    ImportErrorModelErrorCodeEnum["PROJECT_EXCEED_CONTRACT_CEILING_AMOUNT"] = "PROJECT_EXCEED_CONTRACT_CEILING_AMOUNT";
    ImportErrorModelErrorCodeEnum["PROJECT_ALERT_THRESHOLD_PERCENTAGE_REQUIRED"] = "PROJECT_ALERT_THRESHOLD_PERCENTAGE_REQUIRED";
    ImportErrorModelErrorCodeEnum["PROJECT_INTERCOMPANY_NOT_PROVIDED"] = "PROJECT_INTERCOMPANY_NOT_PROVIDED";
    ImportErrorModelErrorCodeEnum["PROJECT_INTERCOMPANY_MUST_BE_ENABLED"] = "PROJECT_INTERCOMPANY_MUST_BE_ENABLED";
    ImportErrorModelErrorCodeEnum["PROJECT_PRIMARY_APPROVER_REQUIRED_FOR_ALTERNATE"] = "PROJECT_PRIMARY_APPROVER_REQUIRED_FOR_ALTERNATE";
    ImportErrorModelErrorCodeEnum["PROJECT_INVALID_PRIMARY_CONTROLLER"] = "PROJECT_INVALID_PRIMARY_CONTROLLER";
    ImportErrorModelErrorCodeEnum["PROJECT_INVALID_ALTERNATE_CONTROLLER"] = "PROJECT_INVALID_ALTERNATE_CONTROLLER";
    ImportErrorModelErrorCodeEnum["PROJECT_ORG_ASSIGNMENT_TASK_LEVEL"] = "PROJECT_ORG_ASSIGNMENT_TASK_LEVEL";
    ImportErrorModelErrorCodeEnum["PROJECT_PREBILLED_LABOR_BALANCE"] = "PROJECT_PREBILLED_LABOR_BALANCE";
    ImportErrorModelErrorCodeEnum["PROJECT_PREBILLED_LABOR_POSTED"] = "PROJECT_PREBILLED_LABOR_POSTED";
    ImportErrorModelErrorCodeEnum["PROJECT_EXPENSE_PLAN_LOCKED_PLAN_SET"] = "PROJECT_EXPENSE_PLAN_LOCKED_PLAN_SET";
    ImportErrorModelErrorCodeEnum["PROJECT_EXPENSE_PLAN_MULTIPLE_PLAN_SETS_NOT_ENABLED"] = "PROJECT_EXPENSE_PLAN_MULTIPLE_PLAN_SETS_NOT_ENABLED";
    ImportErrorModelErrorCodeEnum["PROJECT_HAS_POSTED_TRANSACTIONS"] = "PROJECT_HAS_POSTED_TRANSACTIONS";
    ImportErrorModelErrorCodeEnum["PROJECT_LABOR_CATEGORY_INVALID"] = "PROJECT_LABOR_CATEGORY_INVALID";
    ImportErrorModelErrorCodeEnum["PROJECT_LABOR_CATEGORY_CANNOT_DEFAULT_TO_MASTER_RATE"] = "PROJECT_LABOR_CATEGORY_CANNOT_DEFAULT_TO_MASTER_RATE";
    ImportErrorModelErrorCodeEnum["PROJECT_TYPE_ACCOUNT_CATEGORY_INVALID"] = "PROJECT_TYPE_ACCOUNT_CATEGORY_INVALID";
    ImportErrorModelErrorCodeEnum["RECEIVING_DOCUMENT_ITEM_EXCEEDS_QUANTITY"] = "RECEIVING_DOCUMENT_ITEM_EXCEEDS_QUANTITY";
    ImportErrorModelErrorCodeEnum["RECEIVING_DOCUMENT_NOT_RETRACTABLE"] = "RECEIVING_DOCUMENT_NOT_RETRACTABLE";
    ImportErrorModelErrorCodeEnum["TASK_INVALID_PLAN"] = "TASK_INVALID_PLAN";
    ImportErrorModelErrorCodeEnum["TASK_INVALID_ASSIGNMENT"] = "TASK_INVALID_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["TASK_VALIDATION"] = "TASK_VALIDATION";
    ImportErrorModelErrorCodeEnum["TASK_PROJECT_MISMATCH"] = "TASK_PROJECT_MISMATCH";
    ImportErrorModelErrorCodeEnum["TASK_PARENT_TASK_PROJECT_MISMATCH"] = "TASK_PARENT_TASK_PROJECT_MISMATCH";
    ImportErrorModelErrorCodeEnum["TASK_CANNOT_LIMIT_BILL_TO_FUNDED_WITHOUT_FUNDED_VALUE"] = "TASK_CANNOT_LIMIT_BILL_TO_FUNDED_WITHOUT_FUNDED_VALUE";
    ImportErrorModelErrorCodeEnum["TASK_CANNOT_LIMIT_REVENUE_TO_FUNDED_WITHOUT_FUNDED_VALUE"] = "TASK_CANNOT_LIMIT_REVENUE_TO_FUNDED_WITHOUT_FUNDED_VALUE";
    ImportErrorModelErrorCodeEnum["TASK_BILLING_TYPE_CANNOT_BE_SET_UNLESS_ALSO_SET_ON_PROJECT"] = "TASK_BILLING_TYPE_CANNOT_BE_SET_UNLESS_ALSO_SET_ON_PROJECT";
    ImportErrorModelErrorCodeEnum["TASK_CANNOT_OVERRIDE_BILLING_TYPE"] = "TASK_CANNOT_OVERRIDE_BILLING_TYPE";
    ImportErrorModelErrorCodeEnum["TASK_MODIFIED_RELATIVE_TASK_PROJECT_DOES_NOT_MATCH_MODIFIED_TASK_PROJECT"] = "TASK_MODIFIED_RELATIVE_TASK_PROJECT_DOES_NOT_MATCH_MODIFIED_TASK_PROJECT";
    ImportErrorModelErrorCodeEnum["TASK_ACCOUNT_CATEGORY_INVALID"] = "TASK_ACCOUNT_CATEGORY_INVALID";
    ImportErrorModelErrorCodeEnum["TASK_PREDECESSOR_NOT_AVAILABLE"] = "TASK_PREDECESSOR_NOT_AVAILABLE";
    ImportErrorModelErrorCodeEnum["TASK_PREDECESSOR_INVALID_DATE_RANGE"] = "TASK_PREDECESSOR_INVALID_DATE_RANGE";
    ImportErrorModelErrorCodeEnum["TIME_RATING_GENERIC"] = "TIME_RATING_GENERIC";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TIMESLIP_NOT_FOUND"] = "TIMESHEET_TIMESLIP_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["TIMESHEET_ITEM_ENTRY_NOT_FOUND"] = "TIMESHEET_ITEM_ENTRY_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_NOT_FOUND"] = "TIMESHEET_TITO_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_WITH_NULL_STOP_TIME"] = "TIMESHEET_TITO_WITH_NULL_STOP_TIME";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_OVERLAP"] = "TIMESHEET_TITO_OVERLAP";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_INVALID_TIME_UNITS"] = "TIMESHEET_TITO_INVALID_TIME_UNITS";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_NONWORK_HOURS_EXCEEDS_TITO_DURATION"] = "TIMESHEET_TITO_NONWORK_HOURS_EXCEEDS_TITO_DURATION";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TITO_DUPLICATE"] = "TIMESHEET_TITO_DUPLICATE";
    ImportErrorModelErrorCodeEnum["TIMESHEET_DAILY_TITO_EMPTY"] = "TIMESHEET_DAILY_TITO_EMPTY";
    ImportErrorModelErrorCodeEnum["TIMESHEET_OWNER_INSUFFICIENT_ROLES"] = "TIMESHEET_OWNER_INSUFFICIENT_ROLES";
    ImportErrorModelErrorCodeEnum["TIMESHEET_OWNER_INVALID_TIME_PERIOD"] = "TIMESHEET_OWNER_INVALID_TIME_PERIOD";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TIME_PERIOD_NOT_FOUND"] = "TIMESHEET_TIME_PERIOD_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["TIMESHEET_DATE_OUT_OF_TIME_PERIOD_RANGE"] = "TIMESHEET_DATE_OUT_OF_TIME_PERIOD_RANGE";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TIME_PERIOD_PERMISSIONS"] = "TIMESHEET_TIME_PERIOD_PERMISSIONS";
    ImportErrorModelErrorCodeEnum["TIMESHEET_DATE_REQUIRED_FOR_SEMIMONTHLY_TIME_PERIODS"] = "TIMESHEET_DATE_REQUIRED_FOR_SEMIMONTHLY_TIME_PERIODS";
    ImportErrorModelErrorCodeEnum["TIMESHEET_DATE_INVALID_FOR_TIME_PERIOD_TYPE"] = "TIMESHEET_DATE_INVALID_FOR_TIME_PERIOD_TYPE";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TIME_PERIOD_DATES_MUST_BE_IN_SAME_MONTH_YEAR"] = "TIMESHEET_TIME_PERIOD_DATES_MUST_BE_IN_SAME_MONTH_YEAR";
    ImportErrorModelErrorCodeEnum["TIMESHEET_DEFAULT_PAY_CODE_NOT_FOUND"] = "TIMESHEET_DEFAULT_PAY_CODE_NOT_FOUND";
    ImportErrorModelErrorCodeEnum["TIMESHEET_INVALID_STATUS_FOR_SUBMISSION"] = "TIMESHEET_INVALID_STATUS_FOR_SUBMISSION";
    ImportErrorModelErrorCodeEnum["TIMESHEET_SEARCH_ACTIVE_OR_STATUS_LISTS"] = "TIMESHEET_SEARCH_ACTIVE_OR_STATUS_LISTS";
    ImportErrorModelErrorCodeEnum["TIMESHEET_TASK_REQUIRED_FOR_PROJECTS_WITH_TASK_LEVEL_ASSIGNMENT"] = "TIMESHEET_TASK_REQUIRED_FOR_PROJECTS_WITH_TASK_LEVEL_ASSIGNMENT";
    ImportErrorModelErrorCodeEnum["JE_POSTED"] = "JE_POSTED";
    ImportErrorModelErrorCodeEnum["VI_POSTED"] = "VI_POSTED";
    ImportErrorModelErrorCodeEnum["VI_VOIDED"] = "VI_VOIDED";
    ImportErrorModelErrorCodeEnum["VI_CANNOT_CHANGE_STATUS"] = "VI_CANNOT_CHANGE_STATUS";
    ImportErrorModelErrorCodeEnum["VI_STATUS_NOT_ALLOW_SUBMIT"] = "VI_STATUS_NOT_ALLOW_SUBMIT";
    ImportErrorModelErrorCodeEnum["VI_CANNOT_SUBMIT_TO_APPROVAL_GROUP"] = "VI_CANNOT_SUBMIT_TO_APPROVAL_GROUP";
    ImportErrorModelErrorCodeEnum["VI_CANNOT_SUBMIT_DUE_TO_APPROVALS"] = "VI_CANNOT_SUBMIT_DUE_TO_APPROVALS";
    ImportErrorModelErrorCodeEnum["VI_NO_PO_ASSIGNED"] = "VI_NO_PO_ASSIGNED";
    ImportErrorModelErrorCodeEnum["VI_VENDOR_NOT_VALID_FOR_LEGAL_ENTITY"] = "VI_VENDOR_NOT_VALID_FOR_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["VI_PO_IS_A_MOD"] = "VI_PO_IS_A_MOD";
    ImportErrorModelErrorCodeEnum["VI_PO_NOT_IN_OPEN_STATE"] = "VI_PO_NOT_IN_OPEN_STATE";
    ImportErrorModelErrorCodeEnum["VI_AP_ORG_LEGAL_ENTITY_MISMATCH"] = "VI_AP_ORG_LEGAL_ENTITY_MISMATCH";
    ImportErrorModelErrorCodeEnum["VI_PO_LEGAL_ENTITY_MISMATCH"] = "VI_PO_LEGAL_ENTITY_MISMATCH";
    ImportErrorModelErrorCodeEnum["VI_PO_VENDOR_MISMATCH"] = "VI_PO_VENDOR_MISMATCH";
    ImportErrorModelErrorCodeEnum["VI_ORG_NOT_ALLOW_TRANSACTION_ENTRY"] = "VI_ORG_NOT_ALLOW_TRANSACTION_ENTRY";
    ImportErrorModelErrorCodeEnum["VI_FIELD_CHANGE_NOT_ALLOWED_WHEN_TRANSACTIONS_EXIST"] = "VI_FIELD_CHANGE_NOT_ALLOWED_WHEN_TRANSACTIONS_EXIST";
    ImportErrorModelErrorCodeEnum["VI_NO_AP_ACCOUNT_FOR_LEGAL_ENTITY"] = "VI_NO_AP_ACCOUNT_FOR_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["VI_MUST_HAVE_PO_ASSIGNED"] = "VI_MUST_HAVE_PO_ASSIGNED";
    ImportErrorModelErrorCodeEnum["VI_NO_AP_ORG_FOR_LEGAL_ENTITY"] = "VI_NO_AP_ORG_FOR_LEGAL_ENTITY";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_PROJECT_NOT_ALLOW_CHARGES"] = "VI_DETAILS_PROJECT_NOT_ALLOW_CHARGES";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ACCOUNT_TXNS_DO_NOT_ALLOW_PROJECTS"] = "VI_DETAILS_ACCOUNT_TXNS_DO_NOT_ALLOW_PROJECTS";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_LABOR_REQ_PROJECTS"] = "VI_DETAILS_LABOR_REQ_PROJECTS";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ACCOUNT_TXNS_REQUIRE_PROJECTS"] = "VI_DETAILS_ACCOUNT_TXNS_REQUIRE_PROJECTS";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ACCOUNT_INVALID"] = "VI_DETAILS_ACCOUNT_INVALID";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_PO_FIELDS_BOTH_SET_OR_BLANK"] = "VI_DETAILS_PO_FIELDS_BOTH_SET_OR_BLANK";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_PROJECT_NOT_ALLOW_LABOR_CAT"] = "VI_DETAILS_PROJECT_NOT_ALLOW_LABOR_CAT";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_LABOR_CAT_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_LABOR_CAT_NOT_VALID_FOR_PROJECT";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_PROJECT_REQUIRES_LABOR_CAT"] = "VI_DETAILS_PROJECT_REQUIRES_LABOR_CAT";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_EXP_TYPE_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_EXP_TYPE_NOT_VALID_FOR_PROJECT";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ITEM_NOT_VALID_FOR_PROJECT"] = "VI_DETAILS_ITEM_NOT_VALID_FOR_PROJECT";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ACCT_NOT_VALID_FOR_EXP_TYPE"] = "VI_DETAILS_ACCT_NOT_VALID_FOR_EXP_TYPE";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ACCT_NOT_VALID_FOR_ITEM_EXP_TYPE"] = "VI_DETAILS_ACCT_NOT_VALID_FOR_ITEM_EXP_TYPE";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ITEM_INVENTORY_NOT_ALLOW_PROJ"] = "VI_DETAILS_ITEM_INVENTORY_NOT_ALLOW_PROJ";
    ImportErrorModelErrorCodeEnum["VI_DETAILS_ITEM_REQUIRES_PROJ"] = "VI_DETAILS_ITEM_REQUIRES_PROJ";
    ImportErrorModelErrorCodeEnum["JE_VOIDED"] = "JE_VOIDED";
    ImportErrorModelErrorCodeEnum["VP_POSTED"] = "VP_POSTED";
    ImportErrorModelErrorCodeEnum["VP_SUBMITTED"] = "VP_SUBMITTED";
    ImportErrorModelErrorCodeEnum["VP_VOIDED"] = "VP_VOIDED";
    ImportErrorModelErrorCodeEnum["VP_INVALID_PAYMENT_METHOD"] = "VP_INVALID_PAYMENT_METHOD";
    ImportErrorModelErrorCodeEnum["PAID_DOC_NOT_POSTED"] = "PAID_DOC_NOT_POSTED";
    ImportErrorModelErrorCodeEnum["PAID_DOC_VOIDED"] = "PAID_DOC_VOIDED";
    ImportErrorModelErrorCodeEnum["PAID_DOC_VOIDING"] = "PAID_DOC_VOIDING";
    ImportErrorModelErrorCodeEnum["PAID_DOC_LEGAL_ENTITY_MISMATCH"] = "PAID_DOC_LEGAL_ENTITY_MISMATCH";
    ImportErrorModelErrorCodeEnum["PAID_DOC_VENDOR_MISMATCH"] = "PAID_DOC_VENDOR_MISMATCH";
    ImportErrorModelErrorCodeEnum["PAID_DOC_OTHER_UNPOSTED"] = "PAID_DOC_OTHER_UNPOSTED";
    ImportErrorModelErrorCodeEnum["PAID_DOC_OTHER_UNPOSTED_APP"] = "PAID_DOC_OTHER_UNPOSTED_APP";
    ImportErrorModelErrorCodeEnum["PAID_DOC_ZERO_BALANCE"] = "PAID_DOC_ZERO_BALANCE";
    ImportErrorModelErrorCodeEnum["PAID_DOC_ZERO_AMOUNTS"] = "PAID_DOC_ZERO_AMOUNTS";
    ImportErrorModelErrorCodeEnum["PAID_DOC_PAYMENT_DISCOUNT"] = "PAID_DOC_PAYMENT_DISCOUNT";
    ImportErrorModelErrorCodeEnum["PAID_DOC_EXCESS_DISCOUNT"] = "PAID_DOC_EXCESS_DISCOUNT";
    ImportErrorModelErrorCodeEnum["PAID_DOC_CUSTOMER_MISMATCH"] = "PAID_DOC_CUSTOMER_MISMATCH";
    ImportErrorModelErrorCodeEnum["PAID_DOC_PAYMENT_WRITEOFF"] = "PAID_DOC_PAYMENT_WRITEOFF";
    ImportErrorModelErrorCodeEnum["PAID_DOC_EXCESS_WRITEOFF"] = "PAID_DOC_EXCESS_WRITEOFF";
    ImportErrorModelErrorCodeEnum["PAID_DOC_INV_NOT_COMPLETED"] = "PAID_DOC_INV_NOT_COMPLETED";
    ImportErrorModelErrorCodeEnum["PAID_DOC_POSTED_AFTER_POST_PERIOD_END_DATE"] = "PAID_DOC_POSTED_AFTER_POST_PERIOD_END_DATE";
    ImportErrorModelErrorCodeEnum["PAID_DOC_PAYMENT_EXCEEDS_BALANCE"] = "PAID_DOC_PAYMENT_EXCEEDS_BALANCE";
})(ImportErrorModelErrorCodeEnum || (exports.ImportErrorModelErrorCodeEnum = ImportErrorModelErrorCodeEnum = {}));
/**
 * Filter by status of the imported expense's availabilitity for expense reports. Default is AVAILABLE. Ignored if filtering on expenseReportKeys.
 * * **AVAILABLE** (retrieve imported expenses that are available to use on an expense report)
 * * **USED** (retrieve expenses that have already been used on an expense report)
 * * **ALL** (retrieve all imported expenses)
 */
var ImportedExpenseSearchModelStatusEnum;
(function (ImportedExpenseSearchModelStatusEnum) {
    ImportedExpenseSearchModelStatusEnum["AVAILABLE"] = "AVAILABLE";
    ImportedExpenseSearchModelStatusEnum["USED"] = "USED";
    ImportedExpenseSearchModelStatusEnum["ALL"] = "ALL";
})(ImportedExpenseSearchModelStatusEnum || (exports.ImportedExpenseSearchModelStatusEnum = ImportedExpenseSearchModelStatusEnum = {}));
/** Integration User Type */
var IntegrationUserSearchModelIntegrationUserTypeEnum;
(function (IntegrationUserSearchModelIntegrationUserTypeEnum) {
    IntegrationUserSearchModelIntegrationUserTypeEnum["VENDOR_INVOICE_AUTOMATION"] = "VENDOR_INVOICE_AUTOMATION";
    IntegrationUserSearchModelIntegrationUserTypeEnum["PASSPORT_INTEGRATION_USER"] = "PASSPORT_INTEGRATION_USER";
})(IntegrationUserSearchModelIntegrationUserTypeEnum || (exports.IntegrationUserSearchModelIntegrationUserTypeEnum = IntegrationUserSearchModelIntegrationUserTypeEnum = {}));
/** Integration value type */
var IntegrationValueModelTypeEnum;
(function (IntegrationValueModelTypeEnum) {
    IntegrationValueModelTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    IntegrationValueModelTypeEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    IntegrationValueModelTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    IntegrationValueModelTypeEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    IntegrationValueModelTypeEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    IntegrationValueModelTypeEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    IntegrationValueModelTypeEnum["ITEM"] = "ITEM";
})(IntegrationValueModelTypeEnum || (exports.IntegrationValueModelTypeEnum = IntegrationValueModelTypeEnum = {}));
/** Task Group Level */
var InvoiceFormatCreateModelTaskGroupLevelEnum;
(function (InvoiceFormatCreateModelTaskGroupLevelEnum) {
    InvoiceFormatCreateModelTaskGroupLevelEnum["EVERY_TASK"] = "EVERY_TASK";
    InvoiceFormatCreateModelTaskGroupLevelEnum["TASKLEVEL1"] = "TASK_LEVEL_1";
    InvoiceFormatCreateModelTaskGroupLevelEnum["TASKLEVEL2"] = "TASK_LEVEL_2";
    InvoiceFormatCreateModelTaskGroupLevelEnum["TASKLEVEL3"] = "TASK_LEVEL_3";
    InvoiceFormatCreateModelTaskGroupLevelEnum["TASKLEVEL4"] = "TASK_LEVEL_4";
    InvoiceFormatCreateModelTaskGroupLevelEnum["TASKLEVEL5"] = "TASK_LEVEL_5";
})(InvoiceFormatCreateModelTaskGroupLevelEnum || (exports.InvoiceFormatCreateModelTaskGroupLevelEnum = InvoiceFormatCreateModelTaskGroupLevelEnum = {}));
/** Task Group Level */
var InvoiceFormatModelTaskGroupLevelEnum;
(function (InvoiceFormatModelTaskGroupLevelEnum) {
    InvoiceFormatModelTaskGroupLevelEnum["EVERY_TASK"] = "EVERY_TASK";
    InvoiceFormatModelTaskGroupLevelEnum["TASKLEVEL1"] = "TASK_LEVEL_1";
    InvoiceFormatModelTaskGroupLevelEnum["TASKLEVEL2"] = "TASK_LEVEL_2";
    InvoiceFormatModelTaskGroupLevelEnum["TASKLEVEL3"] = "TASK_LEVEL_3";
    InvoiceFormatModelTaskGroupLevelEnum["TASKLEVEL4"] = "TASK_LEVEL_4";
    InvoiceFormatModelTaskGroupLevelEnum["TASKLEVEL5"] = "TASK_LEVEL_5";
})(InvoiceFormatModelTaskGroupLevelEnum || (exports.InvoiceFormatModelTaskGroupLevelEnum = InvoiceFormatModelTaskGroupLevelEnum = {}));
var InvoiceListModelInvoiceOptionEnum;
(function (InvoiceListModelInvoiceOptionEnum) {
    InvoiceListModelInvoiceOptionEnum["STANDALONE"] = "STANDALONE";
    InvoiceListModelInvoiceOptionEnum["LEAD"] = "LEAD";
    InvoiceListModelInvoiceOptionEnum["CONTRIBUTOR"] = "CONTRIBUTOR";
})(InvoiceListModelInvoiceOptionEnum || (exports.InvoiceListModelInvoiceOptionEnum = InvoiceListModelInvoiceOptionEnum = {}));
var InvoiceModelInvoiceOptionEnum;
(function (InvoiceModelInvoiceOptionEnum) {
    InvoiceModelInvoiceOptionEnum["STANDALONE"] = "STANDALONE";
    InvoiceModelInvoiceOptionEnum["LEAD"] = "LEAD";
    InvoiceModelInvoiceOptionEnum["CONTRIBUTOR"] = "CONTRIBUTOR";
})(InvoiceModelInvoiceOptionEnum || (exports.InvoiceModelInvoiceOptionEnum = InvoiceModelInvoiceOptionEnum = {}));
var InvoiceModelStatusEnum;
(function (InvoiceModelStatusEnum) {
    InvoiceModelStatusEnum["DRAFT"] = "DRAFT";
    InvoiceModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    InvoiceModelStatusEnum["APPROVING"] = "APPROVING";
    InvoiceModelStatusEnum["APPROVED"] = "APPROVED";
    InvoiceModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    InvoiceModelStatusEnum["COMPLETED"] = "COMPLETED";
    InvoiceModelStatusEnum["EXTRACTED"] = "EXTRACTED";
})(InvoiceModelStatusEnum || (exports.InvoiceModelStatusEnum = InvoiceModelStatusEnum = {}));
/** Status */
var InvoiceStatusHistoryModelStatusEnum;
(function (InvoiceStatusHistoryModelStatusEnum) {
    InvoiceStatusHistoryModelStatusEnum["DRAFT"] = "DRAFT";
    InvoiceStatusHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    InvoiceStatusHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    InvoiceStatusHistoryModelStatusEnum["APPROVED"] = "APPROVED";
    InvoiceStatusHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    InvoiceStatusHistoryModelStatusEnum["COMPLETED"] = "COMPLETED";
    InvoiceStatusHistoryModelStatusEnum["EXTRACTED"] = "EXTRACTED";
})(InvoiceStatusHistoryModelStatusEnum || (exports.InvoiceStatusHistoryModelStatusEnum = InvoiceStatusHistoryModelStatusEnum = {}));
/** Item bill by */
var ItemCreateModelBillByEnum;
(function (ItemCreateModelBillByEnum) {
    ItemCreateModelBillByEnum["MARKUP"] = "MARKUP";
    ItemCreateModelBillByEnum["RATE"] = "RATE";
})(ItemCreateModelBillByEnum || (exports.ItemCreateModelBillByEnum = ItemCreateModelBillByEnum = {}));
/** Item bill by */
var ItemModelBillByEnum;
(function (ItemModelBillByEnum) {
    ItemModelBillByEnum["MARKUP"] = "MARKUP";
    ItemModelBillByEnum["RATE"] = "RATE";
})(ItemModelBillByEnum || (exports.ItemModelBillByEnum = ItemModelBillByEnum = {}));
var JournalEntryExpenseDetailModelDetailTypeEnum;
(function (JournalEntryExpenseDetailModelDetailTypeEnum) {
    JournalEntryExpenseDetailModelDetailTypeEnum["LABOR"] = "LABOR";
    JournalEntryExpenseDetailModelDetailTypeEnum["EXPENSE"] = "EXPENSE";
    JournalEntryExpenseDetailModelDetailTypeEnum["ITEM"] = "ITEM";
})(JournalEntryExpenseDetailModelDetailTypeEnum || (exports.JournalEntryExpenseDetailModelDetailTypeEnum = JournalEntryExpenseDetailModelDetailTypeEnum = {}));
var JournalEntryItemDetailModelDetailTypeEnum;
(function (JournalEntryItemDetailModelDetailTypeEnum) {
    JournalEntryItemDetailModelDetailTypeEnum["LABOR"] = "LABOR";
    JournalEntryItemDetailModelDetailTypeEnum["EXPENSE"] = "EXPENSE";
    JournalEntryItemDetailModelDetailTypeEnum["ITEM"] = "ITEM";
})(JournalEntryItemDetailModelDetailTypeEnum || (exports.JournalEntryItemDetailModelDetailTypeEnum = JournalEntryItemDetailModelDetailTypeEnum = {}));
var JournalEntrySearchModelStatusesEnum;
(function (JournalEntrySearchModelStatusesEnum) {
    JournalEntrySearchModelStatusesEnum["INUSE"] = "INUSE";
    JournalEntrySearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    JournalEntrySearchModelStatusesEnum["POSTED"] = "POSTED";
    JournalEntrySearchModelStatusesEnum["APPROVED"] = "APPROVED";
    JournalEntrySearchModelStatusesEnum["APPROVING"] = "APPROVING";
    JournalEntrySearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
})(JournalEntrySearchModelStatusesEnum || (exports.JournalEntrySearchModelStatusesEnum = JournalEntrySearchModelStatusesEnum = {}));
var JournalEntrySearchModelSortOrderEnum;
(function (JournalEntrySearchModelSortOrderEnum) {
    JournalEntrySearchModelSortOrderEnum["ASC"] = "ASC";
    JournalEntrySearchModelSortOrderEnum["DESC"] = "DESC";
})(JournalEntrySearchModelSortOrderEnum || (exports.JournalEntrySearchModelSortOrderEnum = JournalEntrySearchModelSortOrderEnum = {}));
var JournalEntrySummaryModelDocumentTypeEnum;
(function (JournalEntrySummaryModelDocumentTypeEnum) {
    JournalEntrySummaryModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    JournalEntrySummaryModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    JournalEntrySummaryModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    JournalEntrySummaryModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    JournalEntrySummaryModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(JournalEntrySummaryModelDocumentTypeEnum || (exports.JournalEntrySummaryModelDocumentTypeEnum = JournalEntrySummaryModelDocumentTypeEnum = {}));
var JournalEntrySummaryModelStatusEnum;
(function (JournalEntrySummaryModelStatusEnum) {
    JournalEntrySummaryModelStatusEnum["INUSE"] = "INUSE";
    JournalEntrySummaryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    JournalEntrySummaryModelStatusEnum["POSTED"] = "POSTED";
    JournalEntrySummaryModelStatusEnum["APPROVED"] = "APPROVED";
    JournalEntrySummaryModelStatusEnum["APPROVING"] = "APPROVING";
    JournalEntrySummaryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(JournalEntrySummaryModelStatusEnum || (exports.JournalEntrySummaryModelStatusEnum = JournalEntrySummaryModelStatusEnum = {}));
var LaborInvoiceSectionFormatCreateModelTypeEnum;
(function (LaborInvoiceSectionFormatCreateModelTypeEnum) {
    LaborInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    LaborInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    LaborInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    LaborInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    LaborInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    LaborInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    LaborInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    LaborInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    LaborInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(LaborInvoiceSectionFormatCreateModelTypeEnum || (exports.LaborInvoiceSectionFormatCreateModelTypeEnum = LaborInvoiceSectionFormatCreateModelTypeEnum = {}));
var LaborInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (LaborInvoiceSectionFormatCreateModelCol1FieldEnum) {
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.LaborInvoiceSectionFormatCreateModelCol1FieldEnum = LaborInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var LaborInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (LaborInvoiceSectionFormatCreateModelCol2FieldEnum) {
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.LaborInvoiceSectionFormatCreateModelCol2FieldEnum = LaborInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var LaborInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (LaborInvoiceSectionFormatCreateModelCol3FieldEnum) {
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.LaborInvoiceSectionFormatCreateModelCol3FieldEnum = LaborInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var LaborInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (LaborInvoiceSectionFormatCreateModelCol4FieldEnum) {
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.LaborInvoiceSectionFormatCreateModelCol4FieldEnum = LaborInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var LaborInvoiceSectionFormatModelTypeEnum;
(function (LaborInvoiceSectionFormatModelTypeEnum) {
    LaborInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    LaborInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    LaborInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    LaborInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    LaborInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    LaborInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    LaborInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    LaborInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    LaborInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(LaborInvoiceSectionFormatModelTypeEnum || (exports.LaborInvoiceSectionFormatModelTypeEnum = LaborInvoiceSectionFormatModelTypeEnum = {}));
var LaborInvoiceSectionFormatModelCol1FieldEnum;
(function (LaborInvoiceSectionFormatModelCol1FieldEnum) {
    LaborInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatModelCol1FieldEnum || (exports.LaborInvoiceSectionFormatModelCol1FieldEnum = LaborInvoiceSectionFormatModelCol1FieldEnum = {}));
var LaborInvoiceSectionFormatModelCol2FieldEnum;
(function (LaborInvoiceSectionFormatModelCol2FieldEnum) {
    LaborInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatModelCol2FieldEnum || (exports.LaborInvoiceSectionFormatModelCol2FieldEnum = LaborInvoiceSectionFormatModelCol2FieldEnum = {}));
var LaborInvoiceSectionFormatModelCol3FieldEnum;
(function (LaborInvoiceSectionFormatModelCol3FieldEnum) {
    LaborInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatModelCol3FieldEnum || (exports.LaborInvoiceSectionFormatModelCol3FieldEnum = LaborInvoiceSectionFormatModelCol3FieldEnum = {}));
var LaborInvoiceSectionFormatModelCol4FieldEnum;
(function (LaborInvoiceSectionFormatModelCol4FieldEnum) {
    LaborInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    LaborInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    LaborInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    LaborInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    LaborInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    LaborInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    LaborInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    LaborInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    LaborInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    LaborInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    LaborInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    LaborInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    LaborInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(LaborInvoiceSectionFormatModelCol4FieldEnum || (exports.LaborInvoiceSectionFormatModelCol4FieldEnum = LaborInvoiceSectionFormatModelCol4FieldEnum = {}));
var LeaveRequestModelStatusEnum;
(function (LeaveRequestModelStatusEnum) {
    LeaveRequestModelStatusEnum["INUSE"] = "INUSE";
    LeaveRequestModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    LeaveRequestModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    LeaveRequestModelStatusEnum["APPROVING"] = "APPROVING";
    LeaveRequestModelStatusEnum["COMPLETED"] = "COMPLETED";
    LeaveRequestModelStatusEnum["LOCKED"] = "LOCKED";
    LeaveRequestModelStatusEnum["CANCELED"] = "CANCELED";
})(LeaveRequestModelStatusEnum || (exports.LeaveRequestModelStatusEnum = LeaveRequestModelStatusEnum = {}));
/** Leave request status */
var LeaveStatusHistoryModelStatusEnum;
(function (LeaveStatusHistoryModelStatusEnum) {
    LeaveStatusHistoryModelStatusEnum["INUSE"] = "INUSE";
    LeaveStatusHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    LeaveStatusHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    LeaveStatusHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    LeaveStatusHistoryModelStatusEnum["COMPLETED"] = "COMPLETED";
    LeaveStatusHistoryModelStatusEnum["LOCKED"] = "LOCKED";
    LeaveStatusHistoryModelStatusEnum["CANCELED"] = "CANCELED";
})(LeaveStatusHistoryModelStatusEnum || (exports.LeaveStatusHistoryModelStatusEnum = LeaveStatusHistoryModelStatusEnum = {}));
var LogMessageModelLevelEnum;
(function (LogMessageModelLevelEnum) {
    LogMessageModelLevelEnum["ERROR"] = "ERROR";
    LogMessageModelLevelEnum["WARN"] = "WARN";
    LogMessageModelLevelEnum["INFO"] = "INFO";
    LogMessageModelLevelEnum["DEBUG"] = "DEBUG";
})(LogMessageModelLevelEnum || (exports.LogMessageModelLevelEnum = LogMessageModelLevelEnum = {}));
/** The person's classification based on their current rate. */
var MatrixPersonModelCurrentClassificationEnum;
(function (MatrixPersonModelCurrentClassificationEnum) {
    MatrixPersonModelCurrentClassificationEnum["EXEMPT"] = "EXEMPT";
    MatrixPersonModelCurrentClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    MatrixPersonModelCurrentClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    MatrixPersonModelCurrentClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(MatrixPersonModelCurrentClassificationEnum || (exports.MatrixPersonModelCurrentClassificationEnum = MatrixPersonModelCurrentClassificationEnum = {}));
var MeTimesheetSearchModelStatusesEnum;
(function (MeTimesheetSearchModelStatusesEnum) {
    MeTimesheetSearchModelStatusesEnum["NEW"] = "NEW";
    MeTimesheetSearchModelStatusesEnum["INUSE"] = "INUSE";
    MeTimesheetSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    MeTimesheetSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
    MeTimesheetSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    MeTimesheetSearchModelStatusesEnum["COMPLETED"] = "COMPLETED";
    MeTimesheetSearchModelStatusesEnum["EXTRACTED"] = "EXTRACTED";
    MeTimesheetSearchModelStatusesEnum["LOCKED"] = "LOCKED";
})(MeTimesheetSearchModelStatusesEnum || (exports.MeTimesheetSearchModelStatusesEnum = MeTimesheetSearchModelStatusesEnum = {}));
var MeTimesheetSearchModelAdjustmentStatusesEnum;
(function (MeTimesheetSearchModelAdjustmentStatusesEnum) {
    MeTimesheetSearchModelAdjustmentStatusesEnum["NEW"] = "NEW";
    MeTimesheetSearchModelAdjustmentStatusesEnum["INUSE"] = "INUSE";
    MeTimesheetSearchModelAdjustmentStatusesEnum["SUBMITTED"] = "SUBMITTED";
    MeTimesheetSearchModelAdjustmentStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
    MeTimesheetSearchModelAdjustmentStatusesEnum["APPROVING"] = "APPROVING";
    MeTimesheetSearchModelAdjustmentStatusesEnum["COMPLETED"] = "COMPLETED";
    MeTimesheetSearchModelAdjustmentStatusesEnum["EXTRACTED"] = "EXTRACTED";
    MeTimesheetSearchModelAdjustmentStatusesEnum["LOCKED"] = "LOCKED";
})(MeTimesheetSearchModelAdjustmentStatusesEnum || (exports.MeTimesheetSearchModelAdjustmentStatusesEnum = MeTimesheetSearchModelAdjustmentStatusesEnum = {}));
/** Order to apply for begin date sort. Defaults to ASC */
var MeTimesheetSearchModelSortOrderEnum;
(function (MeTimesheetSearchModelSortOrderEnum) {
    MeTimesheetSearchModelSortOrderEnum["ASC"] = "ASC";
    MeTimesheetSearchModelSortOrderEnum["DESC"] = "DESC";
})(MeTimesheetSearchModelSortOrderEnum || (exports.MeTimesheetSearchModelSortOrderEnum = MeTimesheetSearchModelSortOrderEnum = {}));
var MileageRateSetModelUnitEnum;
(function (MileageRateSetModelUnitEnum) {
    MileageRateSetModelUnitEnum["KILOMETERS"] = "KILOMETERS";
    MileageRateSetModelUnitEnum["MILES"] = "MILES";
})(MileageRateSetModelUnitEnum || (exports.MileageRateSetModelUnitEnum = MileageRateSetModelUnitEnum = {}));
var OnetimeInvoiceSectionFormatCreateModelTypeEnum;
(function (OnetimeInvoiceSectionFormatCreateModelTypeEnum) {
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    OnetimeInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(OnetimeInvoiceSectionFormatCreateModelTypeEnum || (exports.OnetimeInvoiceSectionFormatCreateModelTypeEnum = OnetimeInvoiceSectionFormatCreateModelTypeEnum = {}));
var OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum) {
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum = OnetimeInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum) {
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum = OnetimeInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum) {
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum = OnetimeInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum) {
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum = OnetimeInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var OnetimeInvoiceSectionFormatModelTypeEnum;
(function (OnetimeInvoiceSectionFormatModelTypeEnum) {
    OnetimeInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    OnetimeInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    OnetimeInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    OnetimeInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    OnetimeInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    OnetimeInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    OnetimeInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    OnetimeInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    OnetimeInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(OnetimeInvoiceSectionFormatModelTypeEnum || (exports.OnetimeInvoiceSectionFormatModelTypeEnum = OnetimeInvoiceSectionFormatModelTypeEnum = {}));
var OnetimeInvoiceSectionFormatModelCol1FieldEnum;
(function (OnetimeInvoiceSectionFormatModelCol1FieldEnum) {
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatModelCol1FieldEnum || (exports.OnetimeInvoiceSectionFormatModelCol1FieldEnum = OnetimeInvoiceSectionFormatModelCol1FieldEnum = {}));
var OnetimeInvoiceSectionFormatModelCol2FieldEnum;
(function (OnetimeInvoiceSectionFormatModelCol2FieldEnum) {
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatModelCol2FieldEnum || (exports.OnetimeInvoiceSectionFormatModelCol2FieldEnum = OnetimeInvoiceSectionFormatModelCol2FieldEnum = {}));
var OnetimeInvoiceSectionFormatModelCol3FieldEnum;
(function (OnetimeInvoiceSectionFormatModelCol3FieldEnum) {
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatModelCol3FieldEnum || (exports.OnetimeInvoiceSectionFormatModelCol3FieldEnum = OnetimeInvoiceSectionFormatModelCol3FieldEnum = {}));
var OnetimeInvoiceSectionFormatModelCol4FieldEnum;
(function (OnetimeInvoiceSectionFormatModelCol4FieldEnum) {
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    OnetimeInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(OnetimeInvoiceSectionFormatModelCol4FieldEnum || (exports.OnetimeInvoiceSectionFormatModelCol4FieldEnum = OnetimeInvoiceSectionFormatModelCol4FieldEnum = {}));
/** Type of Org Access */
var OrgAccessPersonSearchModelOrgAccessTypeEnum;
(function (OrgAccessPersonSearchModelOrgAccessTypeEnum) {
    OrgAccessPersonSearchModelOrgAccessTypeEnum["PERSON"] = "PERSON";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["PROJECT"] = "PROJECT";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["FINANCIAL"] = "FINANCIAL";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["CONTACT"] = "CONTACT";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["OWNING"] = "OWNING";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["DOCUMENT"] = "DOCUMENT";
    OrgAccessPersonSearchModelOrgAccessTypeEnum["VENDOR"] = "VENDOR";
})(OrgAccessPersonSearchModelOrgAccessTypeEnum || (exports.OrgAccessPersonSearchModelOrgAccessTypeEnum = OrgAccessPersonSearchModelOrgAccessTypeEnum = {}));
/** Federal tax id type enumeration */
var OrganizationCreateModelFederalTaxIdTypeEnum;
(function (OrganizationCreateModelFederalTaxIdTypeEnum) {
    OrganizationCreateModelFederalTaxIdTypeEnum["EIN"] = "EIN";
    OrganizationCreateModelFederalTaxIdTypeEnum["SSN"] = "SSN";
    OrganizationCreateModelFederalTaxIdTypeEnum["ITIN"] = "ITIN";
})(OrganizationCreateModelFederalTaxIdTypeEnum || (exports.OrganizationCreateModelFederalTaxIdTypeEnum = OrganizationCreateModelFederalTaxIdTypeEnum = {}));
/** Federal tax id type enumeration */
var OrganizationModelFederalTaxIdTypeEnum;
(function (OrganizationModelFederalTaxIdTypeEnum) {
    OrganizationModelFederalTaxIdTypeEnum["EIN"] = "EIN";
    OrganizationModelFederalTaxIdTypeEnum["SSN"] = "SSN";
    OrganizationModelFederalTaxIdTypeEnum["ITIN"] = "ITIN";
})(OrganizationModelFederalTaxIdTypeEnum || (exports.OrganizationModelFederalTaxIdTypeEnum = OrganizationModelFederalTaxIdTypeEnum = {}));
var OrganizationSummaryModelFederalTaxIdTypeEnum;
(function (OrganizationSummaryModelFederalTaxIdTypeEnum) {
    OrganizationSummaryModelFederalTaxIdTypeEnum["EIN"] = "EIN";
    OrganizationSummaryModelFederalTaxIdTypeEnum["SSN"] = "SSN";
    OrganizationSummaryModelFederalTaxIdTypeEnum["ITIN"] = "ITIN";
})(OrganizationSummaryModelFederalTaxIdTypeEnum || (exports.OrganizationSummaryModelFederalTaxIdTypeEnum = OrganizationSummaryModelFederalTaxIdTypeEnum = {}));
var PoAlertPreferencesModelAlertLevelEnum;
(function (PoAlertPreferencesModelAlertLevelEnum) {
    PoAlertPreferencesModelAlertLevelEnum["NONE"] = "NONE";
    PoAlertPreferencesModelAlertLevelEnum["CUSTOM"] = "CUSTOM";
})(PoAlertPreferencesModelAlertLevelEnum || (exports.PoAlertPreferencesModelAlertLevelEnum = PoAlertPreferencesModelAlertLevelEnum = {}));
/** PO Line Type */
var PoDetailLineTypeEnum;
(function (PoDetailLineTypeEnum) {
    PoDetailLineTypeEnum["LABOR"] = "LABOR";
    PoDetailLineTypeEnum["EXPENSE"] = "EXPENSE";
    PoDetailLineTypeEnum["ITEM"] = "ITEM";
})(PoDetailLineTypeEnum || (exports.PoDetailLineTypeEnum = PoDetailLineTypeEnum = {}));
var PoExpenseLineCreateModelViOverageEnum;
(function (PoExpenseLineCreateModelViOverageEnum) {
    PoExpenseLineCreateModelViOverageEnum["L"] = "L";
    PoExpenseLineCreateModelViOverageEnum["D"] = "D";
    PoExpenseLineCreateModelViOverageEnum["F"] = "F";
})(PoExpenseLineCreateModelViOverageEnum || (exports.PoExpenseLineCreateModelViOverageEnum = PoExpenseLineCreateModelViOverageEnum = {}));
var PoExpenseLineFromApprovedCreateModelViOverageEnum;
(function (PoExpenseLineFromApprovedCreateModelViOverageEnum) {
    PoExpenseLineFromApprovedCreateModelViOverageEnum["L"] = "L";
    PoExpenseLineFromApprovedCreateModelViOverageEnum["D"] = "D";
    PoExpenseLineFromApprovedCreateModelViOverageEnum["F"] = "F";
})(PoExpenseLineFromApprovedCreateModelViOverageEnum || (exports.PoExpenseLineFromApprovedCreateModelViOverageEnum = PoExpenseLineFromApprovedCreateModelViOverageEnum = {}));
/** Type of purchase */
var PoExpenseLineModelLineTypeEnum;
(function (PoExpenseLineModelLineTypeEnum) {
    PoExpenseLineModelLineTypeEnum["LABOR"] = "LABOR";
    PoExpenseLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PoExpenseLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PoExpenseLineModelLineTypeEnum || (exports.PoExpenseLineModelLineTypeEnum = PoExpenseLineModelLineTypeEnum = {}));
var PoExpenseLineModelViOverageEnum;
(function (PoExpenseLineModelViOverageEnum) {
    PoExpenseLineModelViOverageEnum["L"] = "L";
    PoExpenseLineModelViOverageEnum["D"] = "D";
    PoExpenseLineModelViOverageEnum["F"] = "F";
})(PoExpenseLineModelViOverageEnum || (exports.PoExpenseLineModelViOverageEnum = PoExpenseLineModelViOverageEnum = {}));
var PoFormatOptionsModelDeliveryOptionEnum;
(function (PoFormatOptionsModelDeliveryOptionEnum) {
    PoFormatOptionsModelDeliveryOptionEnum["NONE_SPECIFIED"] = "NONE_SPECIFIED";
    PoFormatOptionsModelDeliveryOptionEnum["EMAIL"] = "EMAIL";
    PoFormatOptionsModelDeliveryOptionEnum["PRINT_MAIL"] = "PRINT_MAIL";
})(PoFormatOptionsModelDeliveryOptionEnum || (exports.PoFormatOptionsModelDeliveryOptionEnum = PoFormatOptionsModelDeliveryOptionEnum = {}));
var PoFormatOptionsModelDetailLevelsEnum;
(function (PoFormatOptionsModelDetailLevelsEnum) {
    PoFormatOptionsModelDetailLevelsEnum["SINGLE"] = "SINGLE";
    PoFormatOptionsModelDetailLevelsEnum["CONSOLIDATED"] = "CONSOLIDATED";
    PoFormatOptionsModelDetailLevelsEnum["DETAIL"] = "DETAIL";
})(PoFormatOptionsModelDetailLevelsEnum || (exports.PoFormatOptionsModelDetailLevelsEnum = PoFormatOptionsModelDetailLevelsEnum = {}));
var PoItemLineCreateModelViOverageEnum;
(function (PoItemLineCreateModelViOverageEnum) {
    PoItemLineCreateModelViOverageEnum["L"] = "L";
    PoItemLineCreateModelViOverageEnum["D"] = "D";
    PoItemLineCreateModelViOverageEnum["F"] = "F";
})(PoItemLineCreateModelViOverageEnum || (exports.PoItemLineCreateModelViOverageEnum = PoItemLineCreateModelViOverageEnum = {}));
var PoItemLineFromApprovedCreateModelViOverageEnum;
(function (PoItemLineFromApprovedCreateModelViOverageEnum) {
    PoItemLineFromApprovedCreateModelViOverageEnum["L"] = "L";
    PoItemLineFromApprovedCreateModelViOverageEnum["D"] = "D";
    PoItemLineFromApprovedCreateModelViOverageEnum["F"] = "F";
})(PoItemLineFromApprovedCreateModelViOverageEnum || (exports.PoItemLineFromApprovedCreateModelViOverageEnum = PoItemLineFromApprovedCreateModelViOverageEnum = {}));
/** Type of purchase */
var PoItemLineModelLineTypeEnum;
(function (PoItemLineModelLineTypeEnum) {
    PoItemLineModelLineTypeEnum["LABOR"] = "LABOR";
    PoItemLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PoItemLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PoItemLineModelLineTypeEnum || (exports.PoItemLineModelLineTypeEnum = PoItemLineModelLineTypeEnum = {}));
var PoItemLineModelViOverageEnum;
(function (PoItemLineModelViOverageEnum) {
    PoItemLineModelViOverageEnum["L"] = "L";
    PoItemLineModelViOverageEnum["D"] = "D";
    PoItemLineModelViOverageEnum["F"] = "F";
})(PoItemLineModelViOverageEnum || (exports.PoItemLineModelViOverageEnum = PoItemLineModelViOverageEnum = {}));
var PoLaborLineCreateModelViOverageEnum;
(function (PoLaborLineCreateModelViOverageEnum) {
    PoLaborLineCreateModelViOverageEnum["L"] = "L";
    PoLaborLineCreateModelViOverageEnum["D"] = "D";
    PoLaborLineCreateModelViOverageEnum["F"] = "F";
})(PoLaborLineCreateModelViOverageEnum || (exports.PoLaborLineCreateModelViOverageEnum = PoLaborLineCreateModelViOverageEnum = {}));
var PoLaborLineFromApprovedCreateModelViOverageEnum;
(function (PoLaborLineFromApprovedCreateModelViOverageEnum) {
    PoLaborLineFromApprovedCreateModelViOverageEnum["L"] = "L";
    PoLaborLineFromApprovedCreateModelViOverageEnum["D"] = "D";
    PoLaborLineFromApprovedCreateModelViOverageEnum["F"] = "F";
})(PoLaborLineFromApprovedCreateModelViOverageEnum || (exports.PoLaborLineFromApprovedCreateModelViOverageEnum = PoLaborLineFromApprovedCreateModelViOverageEnum = {}));
/** Type of purchase */
var PoLaborLineModelLineTypeEnum;
(function (PoLaborLineModelLineTypeEnum) {
    PoLaborLineModelLineTypeEnum["LABOR"] = "LABOR";
    PoLaborLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PoLaborLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PoLaborLineModelLineTypeEnum || (exports.PoLaborLineModelLineTypeEnum = PoLaborLineModelLineTypeEnum = {}));
var PoLaborLineModelViOverageEnum;
(function (PoLaborLineModelViOverageEnum) {
    PoLaborLineModelViOverageEnum["L"] = "L";
    PoLaborLineModelViOverageEnum["D"] = "D";
    PoLaborLineModelViOverageEnum["F"] = "F";
})(PoLaborLineModelViOverageEnum || (exports.PoLaborLineModelViOverageEnum = PoLaborLineModelViOverageEnum = {}));
/** Type of purchase */
var PrExpenseLineModelLineTypeEnum;
(function (PrExpenseLineModelLineTypeEnum) {
    PrExpenseLineModelLineTypeEnum["LABOR"] = "LABOR";
    PrExpenseLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PrExpenseLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PrExpenseLineModelLineTypeEnum || (exports.PrExpenseLineModelLineTypeEnum = PrExpenseLineModelLineTypeEnum = {}));
/** Type of purchase */
var PrItemLineModelLineTypeEnum;
(function (PrItemLineModelLineTypeEnum) {
    PrItemLineModelLineTypeEnum["LABOR"] = "LABOR";
    PrItemLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PrItemLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PrItemLineModelLineTypeEnum || (exports.PrItemLineModelLineTypeEnum = PrItemLineModelLineTypeEnum = {}));
/** Type of purchase */
var PrLaborLineModelLineTypeEnum;
(function (PrLaborLineModelLineTypeEnum) {
    PrLaborLineModelLineTypeEnum["LABOR"] = "LABOR";
    PrLaborLineModelLineTypeEnum["EXPENSE"] = "EXPENSE";
    PrLaborLineModelLineTypeEnum["ITEM"] = "ITEM";
})(PrLaborLineModelLineTypeEnum || (exports.PrLaborLineModelLineTypeEnum = PrLaborLineModelLineTypeEnum = {}));
/** Document type of the customer document. */
var PaidCustomerDocumentModelDocumentTypeEnum;
(function (PaidCustomerDocumentModelDocumentTypeEnum) {
    PaidCustomerDocumentModelDocumentTypeEnum["PAYMENT"] = "PAYMENT";
    PaidCustomerDocumentModelDocumentTypeEnum["INVOICE"] = "INVOICE";
})(PaidCustomerDocumentModelDocumentTypeEnum || (exports.PaidCustomerDocumentModelDocumentTypeEnum = PaidCustomerDocumentModelDocumentTypeEnum = {}));
/** Document type of the vendor document. */
var PaidVendorDocumentModelDocumentTypeEnum;
(function (PaidVendorDocumentModelDocumentTypeEnum) {
    PaidVendorDocumentModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    PaidVendorDocumentModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
})(PaidVendorDocumentModelDocumentTypeEnum || (exports.PaidVendorDocumentModelDocumentTypeEnum = PaidVendorDocumentModelDocumentTypeEnum = {}));
/**
 * The values available for this field have several impacts depending on whether you are using dilution or not:
 * * Dilution Enabled -- If you are using dilution, then this field has 3 options:
 *   * REGULAR - This is the default value for a pay code and indicates that time charged to these pay codes will have its effective cost rate and effective hours values multiplied by the dilution factor. The Pay Code factor IS NOT applied when determining the effective cost rate (for salaried employees) when charging to these pay codes.
 *   * PREMIUM - Time charged to these pay codes is not included in the dilution calculations at all (the number of Available Hours, however, remains the same). These undiluted pay codes enable you to pay a salaried user wages for hours worked in addition to those hours considered under dilution (ie ability to pay for additional hours at a rate unaffected by dilution -- potentially affected by pay code factor).The Pay Code factor IS applied when determining the effective cost rate (for salaried employees) when charging to these pay codes.
 *   * EXCLUDE - Time charged to these pay code will reduce the number of Available Hours in the dilution calculations (e.g. these could be considered exception time and thus 8 hours charged to a leave project could be excluded making the dilution calculations based on a 32 hour week).  The time charged to these pay code will then be considered for straight time pay. The Pay Code factor IS NOT applied when determining the effective cost rate (for salaried employees) when charging to these pay codes. Keep in mind that dilution calculations are only valid for salaried users.  See the dilution help pages for additional information and examples.
 * * Dilution Disabled -- If you are not using dilution, then this field has 2 options:
 *   * REGULAR - The Pay Code factor IS NOT applied when determining the effective cost rate (for salaried employees) when charging to these pay codes.
 *   * PREMIUM - The Pay Code factor IS applied when determining the effective cost rate (for salaried employees) when charging to these pay codes.
 * * LWOP - When selecting Leave Without Pay option, the Cost Rate Factor and Additional Pay Per Hour Rate will both be defaulted to 0 and those fields will not be editable (whether or not Dilution is enabled).  See LWOP for additional information about handling Leave Without Pay.
 *
 * Note: Pay Code factor is always applied to Hourly & Non-Employee users.
 * @default "REGULAR"
 */
var PayCodeModelExemptUsageEnum;
(function (PayCodeModelExemptUsageEnum) {
    PayCodeModelExemptUsageEnum["REGULAR"] = "REGULAR";
    PayCodeModelExemptUsageEnum["PREMIUM"] = "PREMIUM";
    PayCodeModelExemptUsageEnum["EXCLUDE"] = "EXCLUDE";
    PayCodeModelExemptUsageEnum["LWOP"] = "LWOP";
})(PayCodeModelExemptUsageEnum || (exports.PayCodeModelExemptUsageEnum = PayCodeModelExemptUsageEnum = {}));
/** Document type of the customer document. */
var PayableCustomerDocumentModelDocumentTypeEnum;
(function (PayableCustomerDocumentModelDocumentTypeEnum) {
    PayableCustomerDocumentModelDocumentTypeEnum["PAYMENT"] = "PAYMENT";
    PayableCustomerDocumentModelDocumentTypeEnum["INVOICE"] = "INVOICE";
})(PayableCustomerDocumentModelDocumentTypeEnum || (exports.PayableCustomerDocumentModelDocumentTypeEnum = PayableCustomerDocumentModelDocumentTypeEnum = {}));
/** Document type of the vendor document. */
var PayableVendorDocumentModelDocumentTypeEnum;
(function (PayableVendorDocumentModelDocumentTypeEnum) {
    PayableVendorDocumentModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    PayableVendorDocumentModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
})(PayableVendorDocumentModelDocumentTypeEnum || (exports.PayableVendorDocumentModelDocumentTypeEnum = PayableVendorDocumentModelDocumentTypeEnum = {}));
/**
 * If a Payment Method has been designated as Allowed, you will be required to specify the type of Vendor payment that will be associated with that payment method. * Manual Check (users will need to specify a check number when initiating check printing)
 * * Other (may represent payments by credit card, EFT, etc.)
 * * System Check (system will generate check numbers)
 */
var PaymentMethodModelApPaymentTypeEnum;
(function (PaymentMethodModelApPaymentTypeEnum) {
    PaymentMethodModelApPaymentTypeEnum["MANUAL_CHECK"] = "MANUAL_CHECK";
    PaymentMethodModelApPaymentTypeEnum["OTHER"] = "OTHER";
    PaymentMethodModelApPaymentTypeEnum["SYSTEM_CHECK"] = "SYSTEM_CHECK";
})(PaymentMethodModelApPaymentTypeEnum || (exports.PaymentMethodModelApPaymentTypeEnum = PaymentMethodModelApPaymentTypeEnum = {}));
/** If a Payment Method has been designated as Allowed, you will be required to specify the type of Customer payment that will be associated with that payment method.  */
var PaymentMethodModelArPaymentTypeEnum;
(function (PaymentMethodModelArPaymentTypeEnum) {
    PaymentMethodModelArPaymentTypeEnum["CHECK"] = "CHECK";
    PaymentMethodModelArPaymentTypeEnum["OTHER"] = "OTHER";
})(PaymentMethodModelArPaymentTypeEnum || (exports.PaymentMethodModelArPaymentTypeEnum = PaymentMethodModelArPaymentTypeEnum = {}));
/**
 * Time in / time out requirement.
 * @default "NOT_REQUIRED"
 */
var PersonCreateModelTitoRequiredEnum;
(function (PersonCreateModelTitoRequiredEnum) {
    PersonCreateModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
    PersonCreateModelTitoRequiredEnum["PROJECT"] = "PROJECT";
    PersonCreateModelTitoRequiredEnum["DAILY"] = "DAILY";
})(PersonCreateModelTitoRequiredEnum || (exports.PersonCreateModelTitoRequiredEnum = PersonCreateModelTitoRequiredEnum = {}));
/**
 * Time in / time out requirement
 * @default "NOT_REQUIRED"
 */
var PersonModelTitoRequiredEnum;
(function (PersonModelTitoRequiredEnum) {
    PersonModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
    PersonModelTitoRequiredEnum["PROJECT"] = "PROJECT";
    PersonModelTitoRequiredEnum["DAILY"] = "DAILY";
})(PersonModelTitoRequiredEnum || (exports.PersonModelTitoRequiredEnum = PersonModelTitoRequiredEnum = {}));
/**
 * The Classification selection drives the following:
 * * Dilution - only applies to Salaried Classification.
 * * Person Organization - must be a Financial Organization if the Classification is Salaried or Hourly and the Use Financial Organizations (unanet.financials.use_financial_orgs) property is checked.
 *
 * Valid values for this field include:
 *
 * * Salaried: employees who are paid a fixed amount every period (in previous Unanet versions this was the Exempt option)
 * * Hourly: employees who are paid hourly (in previous Unanet versions this was the Non-Exempt option)
 * * Non-Employee: non-employees who are paid hourly
 * * Non-Employee (PO): non-employees whose timesheet cells and expense report lines will be mapped to a PO/PO Line if a PO Assignment has been created to do the mapping (only for Financial licenses); this will be the only available option if the user has Designate this user as subcontractor on the Roles tab selected
 *
 * Employee Classification impacts the labor cost calculations:
 * * for Salaried users if your Unanet application is configured to use Cost Rate Dilution
 * * for Hourly and Non-Employees (regarding the use of pay code factors)
 * * for Non-Employee (PO) (cost rate can be specified in the PO Assignment)
 */
var PersonRateBaseModelClassificationEnum;
(function (PersonRateBaseModelClassificationEnum) {
    PersonRateBaseModelClassificationEnum["EXEMPT"] = "EXEMPT";
    PersonRateBaseModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    PersonRateBaseModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    PersonRateBaseModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(PersonRateBaseModelClassificationEnum || (exports.PersonRateBaseModelClassificationEnum = PersonRateBaseModelClassificationEnum = {}));
/**
 * The Classification selection drives the following:
 * * Dilution - only applies to Salaried Classification.
 * * Person Organization - must be a Financial Organization if the Classification is Salaried or Hourly and the Use Financial Organizations (unanet.financials.use_financial_orgs) property is checked.
 *
 * Valid values for this field include:
 *
 * * Salaried: employees who are paid a fixed amount every period (in previous Unanet versions this was the Exempt option)
 * * Hourly: employees who are paid hourly (in previous Unanet versions this was the Non-Exempt option)
 * * Non-Employee: non-employees who are paid hourly
 * * Non-Employee (PO): non-employees whose timesheet cells and expense report lines will be mapped to a PO/PO Line if a PO Assignment has been created to do the mapping (only for Financial licenses); this will be the only available option if the user has Designate this user as subcontractor on the Roles tab selected
 *
 * Employee Classification impacts the labor cost calculations:
 * * for Salaried users if your Unanet application is configured to use Cost Rate Dilution
 * * for Hourly and Non-Employees (regarding the use of pay code factors)
 * * for Non-Employee (PO) (cost rate can be specified in the PO Assignment)
 */
var PersonRateCreateModelClassificationEnum;
(function (PersonRateCreateModelClassificationEnum) {
    PersonRateCreateModelClassificationEnum["EXEMPT"] = "EXEMPT";
    PersonRateCreateModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    PersonRateCreateModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    PersonRateCreateModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(PersonRateCreateModelClassificationEnum || (exports.PersonRateCreateModelClassificationEnum = PersonRateCreateModelClassificationEnum = {}));
/**
 * The Classification selection drives the following:
 * * Dilution - only applies to Salaried Classification.
 * * Person Organization - must be a Financial Organization if the Classification is Salaried or Hourly and the Use Financial Organizations (unanet.financials.use_financial_orgs) property is checked.
 *
 * Valid values for this field include:
 *
 * * Salaried: employees who are paid a fixed amount every period (in previous Unanet versions this was the Exempt option)
 * * Hourly: employees who are paid hourly (in previous Unanet versions this was the Non-Exempt option)
 * * Non-Employee: non-employees who are paid hourly
 * * Non-Employee (PO): non-employees whose timesheet cells and expense report lines will be mapped to a PO/PO Line if a PO Assignment has been created to do the mapping (only for Financial licenses); this will be the only available option if the user has Designate this user as subcontractor on the Roles tab selected
 *
 * Employee Classification impacts the labor cost calculations:
 * * for Salaried users if your Unanet application is configured to use Cost Rate Dilution
 * * for Hourly and Non-Employees (regarding the use of pay code factors)
 * * for Non-Employee (PO) (cost rate can be specified in the PO Assignment)
 */
var PersonRateModelClassificationEnum;
(function (PersonRateModelClassificationEnum) {
    PersonRateModelClassificationEnum["EXEMPT"] = "EXEMPT";
    PersonRateModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    PersonRateModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    PersonRateModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(PersonRateModelClassificationEnum || (exports.PersonRateModelClassificationEnum = PersonRateModelClassificationEnum = {}));
/** Types of approvals for listing approver's people */
var PersonSearchModelApprovalTypesEnum;
(function (PersonSearchModelApprovalTypesEnum) {
    PersonSearchModelApprovalTypesEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    PersonSearchModelApprovalTypesEnum["TIME"] = "TIME";
    PersonSearchModelApprovalTypesEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    PersonSearchModelApprovalTypesEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    PersonSearchModelApprovalTypesEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    PersonSearchModelApprovalTypesEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    PersonSearchModelApprovalTypesEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    PersonSearchModelApprovalTypesEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(PersonSearchModelApprovalTypesEnum || (exports.PersonSearchModelApprovalTypesEnum = PersonSearchModelApprovalTypesEnum = {}));
/** Person rate classification (exempt status) as of the effective date specified by the asOfDate field */
var PersonSearchModelClassificationEnum;
(function (PersonSearchModelClassificationEnum) {
    PersonSearchModelClassificationEnum["EXEMPT"] = "EXEMPT";
    PersonSearchModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    PersonSearchModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    PersonSearchModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(PersonSearchModelClassificationEnum || (exports.PersonSearchModelClassificationEnum = PersonSearchModelClassificationEnum = {}));
/** Default cost rate source for project. */
var PlanDefaultsModelCostRateSourceEnum;
(function (PlanDefaultsModelCostRateSourceEnum) {
    PlanDefaultsModelCostRateSourceEnum["PERSON"] = "PERSON";
    PlanDefaultsModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlanDefaultsModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlanDefaultsModelCostRateSourceEnum || (exports.PlanDefaultsModelCostRateSourceEnum = PlanDefaultsModelCostRateSourceEnum = {}));
/** Default bill rate source for project. */
var PlanDefaultsModelBillRateSourceEnum;
(function (PlanDefaultsModelBillRateSourceEnum) {
    PlanDefaultsModelBillRateSourceEnum["PERSON"] = "PERSON";
    PlanDefaultsModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlanDefaultsModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlanDefaultsModelBillRateSourceEnum || (exports.PlanDefaultsModelBillRateSourceEnum = PlanDefaultsModelBillRateSourceEnum = {}));
var PlanSetAuditModelEventEnum;
(function (PlanSetAuditModelEventEnum) {
    PlanSetAuditModelEventEnum["ACTIVATED"] = "ACTIVATED";
    PlanSetAuditModelEventEnum["DEACTIVATED"] = "DEACTIVATED";
    PlanSetAuditModelEventEnum["LOCKED"] = "LOCKED";
    PlanSetAuditModelEventEnum["CREATED"] = "CREATED";
    PlanSetAuditModelEventEnum["RENAMED"] = "RENAMED";
})(PlanSetAuditModelEventEnum || (exports.PlanSetAuditModelEventEnum = PlanSetAuditModelEventEnum = {}));
var PlannedTimeCreateModelBillRateSourceEnum;
(function (PlannedTimeCreateModelBillRateSourceEnum) {
    PlannedTimeCreateModelBillRateSourceEnum["PERSON"] = "PERSON";
    PlannedTimeCreateModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlannedTimeCreateModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlannedTimeCreateModelBillRateSourceEnum || (exports.PlannedTimeCreateModelBillRateSourceEnum = PlannedTimeCreateModelBillRateSourceEnum = {}));
var PlannedTimeCreateModelCostRateSourceEnum;
(function (PlannedTimeCreateModelCostRateSourceEnum) {
    PlannedTimeCreateModelCostRateSourceEnum["PERSON"] = "PERSON";
    PlannedTimeCreateModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlannedTimeCreateModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlannedTimeCreateModelCostRateSourceEnum || (exports.PlannedTimeCreateModelCostRateSourceEnum = PlannedTimeCreateModelCostRateSourceEnum = {}));
var PlannedTimeModelBillRateSourceEnum;
(function (PlannedTimeModelBillRateSourceEnum) {
    PlannedTimeModelBillRateSourceEnum["PERSON"] = "PERSON";
    PlannedTimeModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlannedTimeModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlannedTimeModelBillRateSourceEnum || (exports.PlannedTimeModelBillRateSourceEnum = PlannedTimeModelBillRateSourceEnum = {}));
var PlannedTimeModelCostRateSourceEnum;
(function (PlannedTimeModelCostRateSourceEnum) {
    PlannedTimeModelCostRateSourceEnum["PERSON"] = "PERSON";
    PlannedTimeModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PlannedTimeModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(PlannedTimeModelCostRateSourceEnum || (exports.PlannedTimeModelCostRateSourceEnum = PlannedTimeModelCostRateSourceEnum = {}));
/** Order to apply for date sort. Defaults to ASC */
var PlannedTimeSearchModelSortOrderEnum;
(function (PlannedTimeSearchModelSortOrderEnum) {
    PlannedTimeSearchModelSortOrderEnum["ASC"] = "ASC";
    PlannedTimeSearchModelSortOrderEnum["DESC"] = "DESC";
})(PlannedTimeSearchModelSortOrderEnum || (exports.PlannedTimeSearchModelSortOrderEnum = PlannedTimeSearchModelSortOrderEnum = {}));
/** Type of planning details to collect. Defaults to project only */
var PlanningMatrixSearchCriteriaModelUnitTypeEnum;
(function (PlanningMatrixSearchCriteriaModelUnitTypeEnum) {
    PlanningMatrixSearchCriteriaModelUnitTypeEnum["PROJECT"] = "PROJECT";
    PlanningMatrixSearchCriteriaModelUnitTypeEnum["TASK"] = "TASK";
    PlanningMatrixSearchCriteriaModelUnitTypeEnum["ALL"] = "ALL";
})(PlanningMatrixSearchCriteriaModelUnitTypeEnum || (exports.PlanningMatrixSearchCriteriaModelUnitTypeEnum = PlanningMatrixSearchCriteriaModelUnitTypeEnum = {}));
/** Type of planning details to collect. Defaults to project only */
var PlanningMatrixSearchCriteriaReadModelUnitTypeEnum;
(function (PlanningMatrixSearchCriteriaReadModelUnitTypeEnum) {
    PlanningMatrixSearchCriteriaReadModelUnitTypeEnum["PROJECT"] = "PROJECT";
    PlanningMatrixSearchCriteriaReadModelUnitTypeEnum["TASK"] = "TASK";
    PlanningMatrixSearchCriteriaReadModelUnitTypeEnum["ALL"] = "ALL";
})(PlanningMatrixSearchCriteriaReadModelUnitTypeEnum || (exports.PlanningMatrixSearchCriteriaReadModelUnitTypeEnum = PlanningMatrixSearchCriteriaReadModelUnitTypeEnum = {}));
var PlanningMatrixSearchCriteriaReadModelDashboardsEnum;
(function (PlanningMatrixSearchCriteriaReadModelDashboardsEnum) {
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["HOME"] = "HOME";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["CONTRACTS"] = "CONTRACTS";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["CONTRACT"] = "CONTRACT";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["PROJECT"] = "PROJECT";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["PEOPLE"] = "PEOPLE";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["TIME"] = "TIME";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["EXPENSE"] = "EXPENSE";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["FORECAST"] = "FORECAST";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["FINANCIALS"] = "FINANCIALS";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["PURCHASING"] = "PURCHASING";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["BILLING"] = "BILLING";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["DOCUMENTS"] = "DOCUMENTS";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["ADMIN"] = "ADMIN";
    PlanningMatrixSearchCriteriaReadModelDashboardsEnum["REPORTS"] = "REPORTS";
})(PlanningMatrixSearchCriteriaReadModelDashboardsEnum || (exports.PlanningMatrixSearchCriteriaReadModelDashboardsEnum = PlanningMatrixSearchCriteriaReadModelDashboardsEnum = {}));
/** Type of planning details to collect. Defaults to project only */
var PlanningMatrixSearchModelUnitTypeEnum;
(function (PlanningMatrixSearchModelUnitTypeEnum) {
    PlanningMatrixSearchModelUnitTypeEnum["PROJECT"] = "PROJECT";
    PlanningMatrixSearchModelUnitTypeEnum["TASK"] = "TASK";
    PlanningMatrixSearchModelUnitTypeEnum["ALL"] = "ALL";
})(PlanningMatrixSearchModelUnitTypeEnum || (exports.PlanningMatrixSearchModelUnitTypeEnum = PlanningMatrixSearchModelUnitTypeEnum = {}));
var PostingGroupModelTypeEnum;
(function (PostingGroupModelTypeEnum) {
    PostingGroupModelTypeEnum["DEFAULT"] = "DEFAULT";
    PostingGroupModelTypeEnum["CUSTOM"] = "CUSTOM";
})(PostingGroupModelTypeEnum || (exports.PostingGroupModelTypeEnum = PostingGroupModelTypeEnum = {}));
/** Account category. */
var PostingGroupSourceModelCategoryEnum;
(function (PostingGroupSourceModelCategoryEnum) {
    PostingGroupSourceModelCategoryEnum["BILLED"] = "BILLED";
    PostingGroupSourceModelCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    PostingGroupSourceModelCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    PostingGroupSourceModelCategoryEnum["TAX"] = "TAX";
    PostingGroupSourceModelCategoryEnum["UNBILLED"] = "UNBILLED";
    PostingGroupSourceModelCategoryEnum["LABOR_COST"] = "LABOR_COST";
    PostingGroupSourceModelCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    PostingGroupSourceModelCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    PostingGroupSourceModelCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    PostingGroupSourceModelCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    PostingGroupSourceModelCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    PostingGroupSourceModelCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    PostingGroupSourceModelCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    PostingGroupSourceModelCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    PostingGroupSourceModelCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    PostingGroupSourceModelCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    PostingGroupSourceModelCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    PostingGroupSourceModelCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    PostingGroupSourceModelCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    PostingGroupSourceModelCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    PostingGroupSourceModelCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    PostingGroupSourceModelCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    PostingGroupSourceModelCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    PostingGroupSourceModelCategoryEnum["NET_INCOME"] = "NET_INCOME";
    PostingGroupSourceModelCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    PostingGroupSourceModelCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    PostingGroupSourceModelCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    PostingGroupSourceModelCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    PostingGroupSourceModelCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    PostingGroupSourceModelCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    PostingGroupSourceModelCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    PostingGroupSourceModelCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    PostingGroupSourceModelCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    PostingGroupSourceModelCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    PostingGroupSourceModelCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    PostingGroupSourceModelCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    PostingGroupSourceModelCategoryEnum["PILOB"] = "PILOB";
    PostingGroupSourceModelCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    PostingGroupSourceModelCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    PostingGroupSourceModelCategoryEnum["DUE_TO"] = "DUE_TO";
    PostingGroupSourceModelCategoryEnum["DUE_FROM"] = "DUE_FROM";
    PostingGroupSourceModelCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    PostingGroupSourceModelCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    PostingGroupSourceModelCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    PostingGroupSourceModelCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    PostingGroupSourceModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    PostingGroupSourceModelCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    PostingGroupSourceModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    PostingGroupSourceModelCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    PostingGroupSourceModelCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    PostingGroupSourceModelCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(PostingGroupSourceModelCategoryEnum || (exports.PostingGroupSourceModelCategoryEnum = PostingGroupSourceModelCategoryEnum = {}));
/** Account source type. */
var PostingGroupSourceModelAccountSourceTypeEnum;
(function (PostingGroupSourceModelAccountSourceTypeEnum) {
    PostingGroupSourceModelAccountSourceTypeEnum["FIXED"] = "FIXED";
    PostingGroupSourceModelAccountSourceTypeEnum["VARIABLE"] = "VARIABLE";
})(PostingGroupSourceModelAccountSourceTypeEnum || (exports.PostingGroupSourceModelAccountSourceTypeEnum = PostingGroupSourceModelAccountSourceTypeEnum = {}));
/** Organization source. */
var PostingGroupSourceModelOrganizationSourceEnum;
(function (PostingGroupSourceModelOrganizationSourceEnum) {
    PostingGroupSourceModelOrganizationSourceEnum["LEGAL_ENTITY"] = "LEGAL_ENTITY";
    PostingGroupSourceModelOrganizationSourceEnum["PROJECT"] = "PROJECT";
    PostingGroupSourceModelOrganizationSourceEnum["PERSON"] = "PERSON";
    PostingGroupSourceModelOrganizationSourceEnum["NONE"] = "NONE";
    PostingGroupSourceModelOrganizationSourceEnum["FIXED_ASSET"] = "FIXED_ASSET";
})(PostingGroupSourceModelOrganizationSourceEnum || (exports.PostingGroupSourceModelOrganizationSourceEnum = PostingGroupSourceModelOrganizationSourceEnum = {}));
var PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum;
(function (PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum) {
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum || (exports.PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum = PrebilledLaborInvoiceSectionFormatCreateModelTypeEnum = {}));
var PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum) {
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum = PrebilledLaborInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum) {
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum = PrebilledLaborInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum) {
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum = PrebilledLaborInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum) {
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum = PrebilledLaborInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatModelTypeEnum;
(function (PrebilledLaborInvoiceSectionFormatModelTypeEnum) {
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    PrebilledLaborInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(PrebilledLaborInvoiceSectionFormatModelTypeEnum || (exports.PrebilledLaborInvoiceSectionFormatModelTypeEnum = PrebilledLaborInvoiceSectionFormatModelTypeEnum = {}));
var PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum) {
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum = PrebilledLaborInvoiceSectionFormatModelCol1FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum) {
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum = PrebilledLaborInvoiceSectionFormatModelCol2FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum) {
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum = PrebilledLaborInvoiceSectionFormatModelCol3FieldEnum = {}));
var PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum;
(function (PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum) {
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum || (exports.PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum = PrebilledLaborInvoiceSectionFormatModelCol4FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum = PrebilledLaborOffsetInvoiceSectionFormatCreateModelTypeEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum = PrebilledLaborOffsetInvoiceSectionFormatModelTypeEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatModelCol1FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatModelCol2FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatModelCol3FieldEnum = {}));
var PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum;
(function (PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum) {
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum || (exports.PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum = PrebilledLaborOffsetInvoiceSectionFormatModelCol4FieldEnum = {}));
/** The selected state: no alerts (NONE), use default preferences (DEFAULT) or use custom preferences (CUSTOM) */
var ProjectAlertPrefsModelStateEnum;
(function (ProjectAlertPrefsModelStateEnum) {
    ProjectAlertPrefsModelStateEnum["NONE"] = "NONE";
    ProjectAlertPrefsModelStateEnum["DEFAULT"] = "DEFAULT";
    ProjectAlertPrefsModelStateEnum["CUSTOM"] = "CUSTOM";
})(ProjectAlertPrefsModelStateEnum || (exports.ProjectAlertPrefsModelStateEnum = ProjectAlertPrefsModelStateEnum = {}));
var ProjectAlertsModelTypeEnum;
(function (ProjectAlertsModelTypeEnum) {
    ProjectAlertsModelTypeEnum["TIME"] = "TIME";
    ProjectAlertsModelTypeEnum["HOUR_BUDGET"] = "HOUR_BUDGET";
    ProjectAlertsModelTypeEnum["HOUR_EST_TOT"] = "HOUR_EST_TOT";
    ProjectAlertsModelTypeEnum["TOT_COST_BUDGET"] = "TOT_COST_BUDGET";
    ProjectAlertsModelTypeEnum["TOT_COST_EST_TOT"] = "TOT_COST_EST_TOT";
    ProjectAlertsModelTypeEnum["LABOR_COST_BUDGET"] = "LABOR_COST_BUDGET";
    ProjectAlertsModelTypeEnum["LABOR_COST_EST_TOT"] = "LABOR_COST_EST_TOT";
    ProjectAlertsModelTypeEnum["EXP_COST_BUDGET"] = "EXP_COST_BUDGET";
    ProjectAlertsModelTypeEnum["EXP_COST_EST_TOT"] = "EXP_COST_EST_TOT";
    ProjectAlertsModelTypeEnum["TOT_BILL_BUDGET"] = "TOT_BILL_BUDGET";
    ProjectAlertsModelTypeEnum["TOT_BILL_EST_TOT"] = "TOT_BILL_EST_TOT";
    ProjectAlertsModelTypeEnum["FUNDING_EXPENDED"] = "FUNDING_EXPENDED";
})(ProjectAlertsModelTypeEnum || (exports.ProjectAlertsModelTypeEnum = ProjectAlertsModelTypeEnum = {}));
var ProjectApproverModelApprovalTypeEnum;
(function (ProjectApproverModelApprovalTypeEnum) {
    ProjectApproverModelApprovalTypeEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    ProjectApproverModelApprovalTypeEnum["TIME"] = "TIME";
    ProjectApproverModelApprovalTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    ProjectApproverModelApprovalTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ProjectApproverModelApprovalTypeEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    ProjectApproverModelApprovalTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    ProjectApproverModelApprovalTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    ProjectApproverModelApprovalTypeEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(ProjectApproverModelApprovalTypeEnum || (exports.ProjectApproverModelApprovalTypeEnum = ProjectApproverModelApprovalTypeEnum = {}));
var ProjectApproverUpdateModelApprovalTypeEnum;
(function (ProjectApproverUpdateModelApprovalTypeEnum) {
    ProjectApproverUpdateModelApprovalTypeEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    ProjectApproverUpdateModelApprovalTypeEnum["TIME"] = "TIME";
    ProjectApproverUpdateModelApprovalTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    ProjectApproverUpdateModelApprovalTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ProjectApproverUpdateModelApprovalTypeEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    ProjectApproverUpdateModelApprovalTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    ProjectApproverUpdateModelApprovalTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    ProjectApproverUpdateModelApprovalTypeEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(ProjectApproverUpdateModelApprovalTypeEnum || (exports.ProjectApproverUpdateModelApprovalTypeEnum = ProjectApproverUpdateModelApprovalTypeEnum = {}));
/** Bill Rate Source */
var ProjectAssignmentCreateModelBillRateSourceEnum;
(function (ProjectAssignmentCreateModelBillRateSourceEnum) {
    ProjectAssignmentCreateModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentCreateModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentCreateModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentCreateModelBillRateSourceEnum || (exports.ProjectAssignmentCreateModelBillRateSourceEnum = ProjectAssignmentCreateModelBillRateSourceEnum = {}));
/** Cost Rate Source */
var ProjectAssignmentCreateModelCostRateSourceEnum;
(function (ProjectAssignmentCreateModelCostRateSourceEnum) {
    ProjectAssignmentCreateModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentCreateModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentCreateModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentCreateModelCostRateSourceEnum || (exports.ProjectAssignmentCreateModelCostRateSourceEnum = ProjectAssignmentCreateModelCostRateSourceEnum = {}));
/** Source of the bill rate */
var ProjectAssignmentModelBillRateSourceEnum;
(function (ProjectAssignmentModelBillRateSourceEnum) {
    ProjectAssignmentModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentModelBillRateSourceEnum || (exports.ProjectAssignmentModelBillRateSourceEnum = ProjectAssignmentModelBillRateSourceEnum = {}));
/** Source of the cost rate */
var ProjectAssignmentModelCostRateSourceEnum;
(function (ProjectAssignmentModelCostRateSourceEnum) {
    ProjectAssignmentModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentModelCostRateSourceEnum || (exports.ProjectAssignmentModelCostRateSourceEnum = ProjectAssignmentModelCostRateSourceEnum = {}));
/** Source of the bill rate */
var ProjectAssignmentUpdateModelBillRateSourceEnum;
(function (ProjectAssignmentUpdateModelBillRateSourceEnum) {
    ProjectAssignmentUpdateModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentUpdateModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentUpdateModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentUpdateModelBillRateSourceEnum || (exports.ProjectAssignmentUpdateModelBillRateSourceEnum = ProjectAssignmentUpdateModelBillRateSourceEnum = {}));
/** Source of the cost rate */
var ProjectAssignmentUpdateModelCostRateSourceEnum;
(function (ProjectAssignmentUpdateModelCostRateSourceEnum) {
    ProjectAssignmentUpdateModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectAssignmentUpdateModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectAssignmentUpdateModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectAssignmentUpdateModelCostRateSourceEnum || (exports.ProjectAssignmentUpdateModelCostRateSourceEnum = ProjectAssignmentUpdateModelCostRateSourceEnum = {}));
/** Estimate Completed Percent from */
var ProjectBudgetHistoryModelPctComplRuleEnum;
(function (ProjectBudgetHistoryModelPctComplRuleEnum) {
    ProjectBudgetHistoryModelPctComplRuleEnum["HOURS"] = "HOURS";
    ProjectBudgetHistoryModelPctComplRuleEnum["LABOR"] = "LABOR";
    ProjectBudgetHistoryModelPctComplRuleEnum["TOTAL"] = "TOTAL";
    ProjectBudgetHistoryModelPctComplRuleEnum["TOTAL_WITH_BURDEN"] = "TOTAL_WITH_BURDEN";
})(ProjectBudgetHistoryModelPctComplRuleEnum || (exports.ProjectBudgetHistoryModelPctComplRuleEnum = ProjectBudgetHistoryModelPctComplRuleEnum = {}));
/** Project condition */
var ProjectContractModelColorEnum;
(function (ProjectContractModelColorEnum) {
    ProjectContractModelColorEnum["GREEN"] = "GREEN";
    ProjectContractModelColorEnum["RED"] = "RED";
    ProjectContractModelColorEnum["YELLOW"] = "YELLOW";
})(ProjectContractModelColorEnum || (exports.ProjectContractModelColorEnum = ProjectContractModelColorEnum = {}));
/** Project approval type, non-null if administrator is project approver */
var ProjectControllerModelApprovalTypeEnum;
(function (ProjectControllerModelApprovalTypeEnum) {
    ProjectControllerModelApprovalTypeEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    ProjectControllerModelApprovalTypeEnum["TIME"] = "TIME";
    ProjectControllerModelApprovalTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    ProjectControllerModelApprovalTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    ProjectControllerModelApprovalTypeEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    ProjectControllerModelApprovalTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    ProjectControllerModelApprovalTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    ProjectControllerModelApprovalTypeEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(ProjectControllerModelApprovalTypeEnum || (exports.ProjectControllerModelApprovalTypeEnum = ProjectControllerModelApprovalTypeEnum = {}));
/** Project condition */
var ProjectCreateModelProjectColorEnum;
(function (ProjectCreateModelProjectColorEnum) {
    ProjectCreateModelProjectColorEnum["GREEN"] = "GREEN";
    ProjectCreateModelProjectColorEnum["RED"] = "RED";
    ProjectCreateModelProjectColorEnum["YELLOW"] = "YELLOW";
})(ProjectCreateModelProjectColorEnum || (exports.ProjectCreateModelProjectColorEnum = ProjectCreateModelProjectColorEnum = {}));
/** Estimate Completed Percent from */
var ProjectCreateModelPctComplRuleEnum;
(function (ProjectCreateModelPctComplRuleEnum) {
    ProjectCreateModelPctComplRuleEnum["HOURS"] = "HOURS";
    ProjectCreateModelPctComplRuleEnum["LABOR"] = "LABOR";
    ProjectCreateModelPctComplRuleEnum["TOTAL"] = "TOTAL";
    ProjectCreateModelPctComplRuleEnum["TOTAL_WITH_BURDEN"] = "TOTAL_WITH_BURDEN";
})(ProjectCreateModelPctComplRuleEnum || (exports.ProjectCreateModelPctComplRuleEnum = ProjectCreateModelPctComplRuleEnum = {}));
/** the self plan type */
var ProjectCreateModelAllowSelfPlanEnum;
(function (ProjectCreateModelAllowSelfPlanEnum) {
    ProjectCreateModelAllowSelfPlanEnum["OPEN"] = "OPEN";
    ProjectCreateModelAllowSelfPlanEnum["CLOSED"] = "CLOSED";
    ProjectCreateModelAllowSelfPlanEnum["ASSIGN"] = "ASSIGN";
})(ProjectCreateModelAllowSelfPlanEnum || (exports.ProjectCreateModelAllowSelfPlanEnum = ProjectCreateModelAllowSelfPlanEnum = {}));
/** Time In/Out. Edit access requires unatime license */
var ProjectCreateModelTitoRequiredEnum;
(function (ProjectCreateModelTitoRequiredEnum) {
    ProjectCreateModelTitoRequiredEnum["USER_SETTING"] = "USER_SETTING";
    ProjectCreateModelTitoRequiredEnum["REQUIRED"] = "REQUIRED";
    ProjectCreateModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
})(ProjectCreateModelTitoRequiredEnum || (exports.ProjectCreateModelTitoRequiredEnum = ProjectCreateModelTitoRequiredEnum = {}));
/** Bill Rate Source. Edit access requires unatime license. Currently, PERSON and LABOR_CATEGORY are the only valid rate source values for a project. */
var ProjectCreateModelBillRateSourceEnum;
(function (ProjectCreateModelBillRateSourceEnum) {
    ProjectCreateModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectCreateModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectCreateModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectCreateModelBillRateSourceEnum || (exports.ProjectCreateModelBillRateSourceEnum = ProjectCreateModelBillRateSourceEnum = {}));
/** Cost Rate Source. Edit access requires unatime license. Currently, PERSON and LABOR_CATEGORY are the only valid rate source values for a project. */
var ProjectCreateModelCostRateSourceEnum;
(function (ProjectCreateModelCostRateSourceEnum) {
    ProjectCreateModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectCreateModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectCreateModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectCreateModelCostRateSourceEnum || (exports.ProjectCreateModelCostRateSourceEnum = ProjectCreateModelCostRateSourceEnum = {}));
/** Labor Category Usage. Edit access requires unatime license */
var ProjectCreateModelUseLaborCategoryEnum;
(function (ProjectCreateModelUseLaborCategoryEnum) {
    ProjectCreateModelUseLaborCategoryEnum["REQUIRED"] = "REQUIRED";
    ProjectCreateModelUseLaborCategoryEnum["FORBIDDEN"] = "FORBIDDEN";
    ProjectCreateModelUseLaborCategoryEnum["OPTIONAL"] = "OPTIONAL";
})(ProjectCreateModelUseLaborCategoryEnum || (exports.ProjectCreateModelUseLaborCategoryEnum = ProjectCreateModelUseLaborCategoryEnum = {}));
/** Fee factor type */
var ProjectFeeCreateModelFeeFactorTypeEnum;
(function (ProjectFeeCreateModelFeeFactorTypeEnum) {
    ProjectFeeCreateModelFeeFactorTypeEnum["NUMBER"] = "NUMBER";
    ProjectFeeCreateModelFeeFactorTypeEnum["PERCENTAGE"] = "PERCENTAGE";
})(ProjectFeeCreateModelFeeFactorTypeEnum || (exports.ProjectFeeCreateModelFeeFactorTypeEnum = ProjectFeeCreateModelFeeFactorTypeEnum = {}));
/** Fee factor type */
var ProjectFeeModelFeeFactorTypeEnum;
(function (ProjectFeeModelFeeFactorTypeEnum) {
    ProjectFeeModelFeeFactorTypeEnum["NUMBER"] = "NUMBER";
    ProjectFeeModelFeeFactorTypeEnum["PERCENTAGE"] = "PERCENTAGE";
})(ProjectFeeModelFeeFactorTypeEnum || (exports.ProjectFeeModelFeeFactorTypeEnum = ProjectFeeModelFeeFactorTypeEnum = {}));
/** Defines whether project is being invoiced as a stand-alone project or whether it participates in an Invoice Group. */
var ProjectInvoiceCreateModelInvoiceOptionEnum;
(function (ProjectInvoiceCreateModelInvoiceOptionEnum) {
    ProjectInvoiceCreateModelInvoiceOptionEnum["STANDALONE"] = "STANDALONE";
    ProjectInvoiceCreateModelInvoiceOptionEnum["LEAD"] = "LEAD";
    ProjectInvoiceCreateModelInvoiceOptionEnum["CONTRIBUTOR"] = "CONTRIBUTOR";
})(ProjectInvoiceCreateModelInvoiceOptionEnum || (exports.ProjectInvoiceCreateModelInvoiceOptionEnum = ProjectInvoiceCreateModelInvoiceOptionEnum = {}));
/** Indicates the method to use for sending invoices. */
var ProjectInvoiceCreateModelDeliveryOptionEnum;
(function (ProjectInvoiceCreateModelDeliveryOptionEnum) {
    ProjectInvoiceCreateModelDeliveryOptionEnum["EMAIL"] = "EMAIL";
    ProjectInvoiceCreateModelDeliveryOptionEnum["PRINT_MAIL"] = "PRINT_MAIL";
})(ProjectInvoiceCreateModelDeliveryOptionEnum || (exports.ProjectInvoiceCreateModelDeliveryOptionEnum = ProjectInvoiceCreateModelDeliveryOptionEnum = {}));
/** Defines whether project is being invoiced as a stand-alone project or whether it participates in an Invoice Group. */
var ProjectInvoiceModelInvoiceOptionEnum;
(function (ProjectInvoiceModelInvoiceOptionEnum) {
    ProjectInvoiceModelInvoiceOptionEnum["STANDALONE"] = "STANDALONE";
    ProjectInvoiceModelInvoiceOptionEnum["LEAD"] = "LEAD";
    ProjectInvoiceModelInvoiceOptionEnum["CONTRIBUTOR"] = "CONTRIBUTOR";
})(ProjectInvoiceModelInvoiceOptionEnum || (exports.ProjectInvoiceModelInvoiceOptionEnum = ProjectInvoiceModelInvoiceOptionEnum = {}));
/** Indicates the method to use for sending invoices. */
var ProjectInvoiceModelDeliveryOptionEnum;
(function (ProjectInvoiceModelDeliveryOptionEnum) {
    ProjectInvoiceModelDeliveryOptionEnum["EMAIL"] = "EMAIL";
    ProjectInvoiceModelDeliveryOptionEnum["PRINT_MAIL"] = "PRINT_MAIL";
})(ProjectInvoiceModelDeliveryOptionEnum || (exports.ProjectInvoiceModelDeliveryOptionEnum = ProjectInvoiceModelDeliveryOptionEnum = {}));
/** Item bill by */
var ProjectItemUpdateModelBillByEnum;
(function (ProjectItemUpdateModelBillByEnum) {
    ProjectItemUpdateModelBillByEnum["MARKUP"] = "MARKUP";
    ProjectItemUpdateModelBillByEnum["RATE"] = "RATE";
})(ProjectItemUpdateModelBillByEnum || (exports.ProjectItemUpdateModelBillByEnum = ProjectItemUpdateModelBillByEnum = {}));
/** Project condition */
var ProjectModelProjectColorEnum;
(function (ProjectModelProjectColorEnum) {
    ProjectModelProjectColorEnum["GREEN"] = "GREEN";
    ProjectModelProjectColorEnum["RED"] = "RED";
    ProjectModelProjectColorEnum["YELLOW"] = "YELLOW";
})(ProjectModelProjectColorEnum || (exports.ProjectModelProjectColorEnum = ProjectModelProjectColorEnum = {}));
/** Estimate Completed Percent from */
var ProjectModelPctComplRuleEnum;
(function (ProjectModelPctComplRuleEnum) {
    ProjectModelPctComplRuleEnum["HOURS"] = "HOURS";
    ProjectModelPctComplRuleEnum["LABOR"] = "LABOR";
    ProjectModelPctComplRuleEnum["TOTAL"] = "TOTAL";
    ProjectModelPctComplRuleEnum["TOTAL_WITH_BURDEN"] = "TOTAL_WITH_BURDEN";
})(ProjectModelPctComplRuleEnum || (exports.ProjectModelPctComplRuleEnum = ProjectModelPctComplRuleEnum = {}));
/** the self plan type */
var ProjectModelAllowSelfPlanEnum;
(function (ProjectModelAllowSelfPlanEnum) {
    ProjectModelAllowSelfPlanEnum["OPEN"] = "OPEN";
    ProjectModelAllowSelfPlanEnum["CLOSED"] = "CLOSED";
    ProjectModelAllowSelfPlanEnum["ASSIGN"] = "ASSIGN";
})(ProjectModelAllowSelfPlanEnum || (exports.ProjectModelAllowSelfPlanEnum = ProjectModelAllowSelfPlanEnum = {}));
/** Time In/Out. View access requires unatime license */
var ProjectModelTitoRequiredEnum;
(function (ProjectModelTitoRequiredEnum) {
    ProjectModelTitoRequiredEnum["USER_SETTING"] = "USER_SETTING";
    ProjectModelTitoRequiredEnum["REQUIRED"] = "REQUIRED";
    ProjectModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
})(ProjectModelTitoRequiredEnum || (exports.ProjectModelTitoRequiredEnum = ProjectModelTitoRequiredEnum = {}));
/** Bill Rate Source. View access requires unatime license */
var ProjectModelBillRateSourceEnum;
(function (ProjectModelBillRateSourceEnum) {
    ProjectModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectModelBillRateSourceEnum || (exports.ProjectModelBillRateSourceEnum = ProjectModelBillRateSourceEnum = {}));
/** Cost Rate Source. View access requires unatime license */
var ProjectModelCostRateSourceEnum;
(function (ProjectModelCostRateSourceEnum) {
    ProjectModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectModelCostRateSourceEnum || (exports.ProjectModelCostRateSourceEnum = ProjectModelCostRateSourceEnum = {}));
/** Labor Category Usage. View access requires unatime license */
var ProjectModelUseLaborCategoryEnum;
(function (ProjectModelUseLaborCategoryEnum) {
    ProjectModelUseLaborCategoryEnum["REQUIRED"] = "REQUIRED";
    ProjectModelUseLaborCategoryEnum["FORBIDDEN"] = "FORBIDDEN";
    ProjectModelUseLaborCategoryEnum["OPTIONAL"] = "OPTIONAL";
})(ProjectModelUseLaborCategoryEnum || (exports.ProjectModelUseLaborCategoryEnum = ProjectModelUseLaborCategoryEnum = {}));
/** Filter by classification. Ignored if effectiveDate is not provided. */
var ProjectPeopleAssignmentSearchModelClassificationEnum;
(function (ProjectPeopleAssignmentSearchModelClassificationEnum) {
    ProjectPeopleAssignmentSearchModelClassificationEnum["EXEMPT"] = "EXEMPT";
    ProjectPeopleAssignmentSearchModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    ProjectPeopleAssignmentSearchModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    ProjectPeopleAssignmentSearchModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(ProjectPeopleAssignmentSearchModelClassificationEnum || (exports.ProjectPeopleAssignmentSearchModelClassificationEnum = ProjectPeopleAssignmentSearchModelClassificationEnum = {}));
/** Project condition */
var ProjectUpdateModelProjectColorEnum;
(function (ProjectUpdateModelProjectColorEnum) {
    ProjectUpdateModelProjectColorEnum["GREEN"] = "GREEN";
    ProjectUpdateModelProjectColorEnum["RED"] = "RED";
    ProjectUpdateModelProjectColorEnum["YELLOW"] = "YELLOW";
})(ProjectUpdateModelProjectColorEnum || (exports.ProjectUpdateModelProjectColorEnum = ProjectUpdateModelProjectColorEnum = {}));
/** Estimate Completed Percent from */
var ProjectUpdateModelPctComplRuleEnum;
(function (ProjectUpdateModelPctComplRuleEnum) {
    ProjectUpdateModelPctComplRuleEnum["HOURS"] = "HOURS";
    ProjectUpdateModelPctComplRuleEnum["LABOR"] = "LABOR";
    ProjectUpdateModelPctComplRuleEnum["TOTAL"] = "TOTAL";
    ProjectUpdateModelPctComplRuleEnum["TOTAL_WITH_BURDEN"] = "TOTAL_WITH_BURDEN";
})(ProjectUpdateModelPctComplRuleEnum || (exports.ProjectUpdateModelPctComplRuleEnum = ProjectUpdateModelPctComplRuleEnum = {}));
/** the self plan type */
var ProjectUpdateModelAllowSelfPlanEnum;
(function (ProjectUpdateModelAllowSelfPlanEnum) {
    ProjectUpdateModelAllowSelfPlanEnum["OPEN"] = "OPEN";
    ProjectUpdateModelAllowSelfPlanEnum["CLOSED"] = "CLOSED";
    ProjectUpdateModelAllowSelfPlanEnum["ASSIGN"] = "ASSIGN";
})(ProjectUpdateModelAllowSelfPlanEnum || (exports.ProjectUpdateModelAllowSelfPlanEnum = ProjectUpdateModelAllowSelfPlanEnum = {}));
/** Time In/Out. Edit access requires unatime license */
var ProjectUpdateModelTitoRequiredEnum;
(function (ProjectUpdateModelTitoRequiredEnum) {
    ProjectUpdateModelTitoRequiredEnum["USER_SETTING"] = "USER_SETTING";
    ProjectUpdateModelTitoRequiredEnum["REQUIRED"] = "REQUIRED";
    ProjectUpdateModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
})(ProjectUpdateModelTitoRequiredEnum || (exports.ProjectUpdateModelTitoRequiredEnum = ProjectUpdateModelTitoRequiredEnum = {}));
/** Bill Rate Source. Edit access requires unatime license. Currently, PERSON and LABOR_CATEGORY are the only valid rate source values for a project. */
var ProjectUpdateModelBillRateSourceEnum;
(function (ProjectUpdateModelBillRateSourceEnum) {
    ProjectUpdateModelBillRateSourceEnum["PERSON"] = "PERSON";
    ProjectUpdateModelBillRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectUpdateModelBillRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectUpdateModelBillRateSourceEnum || (exports.ProjectUpdateModelBillRateSourceEnum = ProjectUpdateModelBillRateSourceEnum = {}));
/** Cost Rate Source. Edit access requires unatime license. Currently, PERSON and LABOR_CATEGORY are the only valid rate source values for a project. */
var ProjectUpdateModelCostRateSourceEnum;
(function (ProjectUpdateModelCostRateSourceEnum) {
    ProjectUpdateModelCostRateSourceEnum["PERSON"] = "PERSON";
    ProjectUpdateModelCostRateSourceEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    ProjectUpdateModelCostRateSourceEnum["OVERRIDE"] = "OVERRIDE";
})(ProjectUpdateModelCostRateSourceEnum || (exports.ProjectUpdateModelCostRateSourceEnum = ProjectUpdateModelCostRateSourceEnum = {}));
/** Labor Category Usage. Edit access requires unatime license */
var ProjectUpdateModelUseLaborCategoryEnum;
(function (ProjectUpdateModelUseLaborCategoryEnum) {
    ProjectUpdateModelUseLaborCategoryEnum["REQUIRED"] = "REQUIRED";
    ProjectUpdateModelUseLaborCategoryEnum["FORBIDDEN"] = "FORBIDDEN";
    ProjectUpdateModelUseLaborCategoryEnum["OPTIONAL"] = "OPTIONAL";
})(ProjectUpdateModelUseLaborCategoryEnum || (exports.ProjectUpdateModelUseLaborCategoryEnum = ProjectUpdateModelUseLaborCategoryEnum = {}));
/** The vendor invoice overage option. */
var PurchaseOrderCreateModelViOverageEnum;
(function (PurchaseOrderCreateModelViOverageEnum) {
    PurchaseOrderCreateModelViOverageEnum["L"] = "L";
    PurchaseOrderCreateModelViOverageEnum["D"] = "D";
    PurchaseOrderCreateModelViOverageEnum["F"] = "F";
})(PurchaseOrderCreateModelViOverageEnum || (exports.PurchaseOrderCreateModelViOverageEnum = PurchaseOrderCreateModelViOverageEnum = {}));
/** The vendor invoice overage option. */
var PurchaseOrderModCreateModelViOverageEnum;
(function (PurchaseOrderModCreateModelViOverageEnum) {
    PurchaseOrderModCreateModelViOverageEnum["L"] = "L";
    PurchaseOrderModCreateModelViOverageEnum["D"] = "D";
    PurchaseOrderModCreateModelViOverageEnum["F"] = "F";
})(PurchaseOrderModCreateModelViOverageEnum || (exports.PurchaseOrderModCreateModelViOverageEnum = PurchaseOrderModCreateModelViOverageEnum = {}));
/** The purchasing document status. */
var PurchaseOrderModModelStatusEnum;
(function (PurchaseOrderModModelStatusEnum) {
    PurchaseOrderModModelStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderModModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderModModelStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderModModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderModModelStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderModModelStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderModModelStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderModModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderModModelStatusEnum || (exports.PurchaseOrderModModelStatusEnum = PurchaseOrderModModelStatusEnum = {}));
/** The vendor invoice overage option. */
var PurchaseOrderModModelViOverageEnum;
(function (PurchaseOrderModModelViOverageEnum) {
    PurchaseOrderModModelViOverageEnum["L"] = "L";
    PurchaseOrderModModelViOverageEnum["D"] = "D";
    PurchaseOrderModModelViOverageEnum["F"] = "F";
})(PurchaseOrderModModelViOverageEnum || (exports.PurchaseOrderModModelViOverageEnum = PurchaseOrderModModelViOverageEnum = {}));
/** The purchasing document status. */
var PurchaseOrderModelStatusEnum;
(function (PurchaseOrderModelStatusEnum) {
    PurchaseOrderModelStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderModelStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderModelStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderModelStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderModelStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderModelStatusEnum || (exports.PurchaseOrderModelStatusEnum = PurchaseOrderModelStatusEnum = {}));
/** The vendor invoice overage option. */
var PurchaseOrderModelViOverageEnum;
(function (PurchaseOrderModelViOverageEnum) {
    PurchaseOrderModelViOverageEnum["L"] = "L";
    PurchaseOrderModelViOverageEnum["D"] = "D";
    PurchaseOrderModelViOverageEnum["F"] = "F";
})(PurchaseOrderModelViOverageEnum || (exports.PurchaseOrderModelViOverageEnum = PurchaseOrderModelViOverageEnum = {}));
/**
 * Determines the type of search performed for a provided document number.
 * @default "CONTAINS"
 */
var PurchaseOrderSearchModelDocumentNumberPredicateEnum;
(function (PurchaseOrderSearchModelDocumentNumberPredicateEnum) {
    PurchaseOrderSearchModelDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    PurchaseOrderSearchModelDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    PurchaseOrderSearchModelDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    PurchaseOrderSearchModelDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    PurchaseOrderSearchModelDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(PurchaseOrderSearchModelDocumentNumberPredicateEnum || (exports.PurchaseOrderSearchModelDocumentNumberPredicateEnum = PurchaseOrderSearchModelDocumentNumberPredicateEnum = {}));
/**
 * Determines the type of search performed upon originalDocumentNumber.
 * @default "CONTAINS"
 */
var PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum;
(function (PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum) {
    PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum || (exports.PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum = PurchaseOrderSearchModelOriginalDocumentNumberPredicateEnum = {}));
/** Apply assignment based filters to only the specified type. */
var PurchaseOrderSearchModelAssignmentTypeEnum;
(function (PurchaseOrderSearchModelAssignmentTypeEnum) {
    PurchaseOrderSearchModelAssignmentTypeEnum["LABOR"] = "LABOR";
    PurchaseOrderSearchModelAssignmentTypeEnum["EXPENSE"] = "EXPENSE";
})(PurchaseOrderSearchModelAssignmentTypeEnum || (exports.PurchaseOrderSearchModelAssignmentTypeEnum = PurchaseOrderSearchModelAssignmentTypeEnum = {}));
/** Match any PO whose status is contained in the supplied collection. Defaults to OPEN, CLOSED */
var PurchaseOrderSearchModelDocumentStatusEnum;
(function (PurchaseOrderSearchModelDocumentStatusEnum) {
    PurchaseOrderSearchModelDocumentStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderSearchModelDocumentStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderSearchModelDocumentStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderSearchModelDocumentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderSearchModelDocumentStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderSearchModelDocumentStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderSearchModelDocumentStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderSearchModelDocumentStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderSearchModelDocumentStatusEnum || (exports.PurchaseOrderSearchModelDocumentStatusEnum = PurchaseOrderSearchModelDocumentStatusEnum = {}));
/** Match any PO whose original document status is contained in the supplied collection. */
var PurchaseOrderSearchModelOriginalDocumentStatusEnum;
(function (PurchaseOrderSearchModelOriginalDocumentStatusEnum) {
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderSearchModelOriginalDocumentStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderSearchModelOriginalDocumentStatusEnum || (exports.PurchaseOrderSearchModelOriginalDocumentStatusEnum = PurchaseOrderSearchModelOriginalDocumentStatusEnum = {}));
/** Status of the purchase order document */
var PurchaseOrderSummaryModelDocumentStatusEnum;
(function (PurchaseOrderSummaryModelDocumentStatusEnum) {
    PurchaseOrderSummaryModelDocumentStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderSummaryModelDocumentStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderSummaryModelDocumentStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderSummaryModelDocumentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderSummaryModelDocumentStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderSummaryModelDocumentStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderSummaryModelDocumentStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderSummaryModelDocumentStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderSummaryModelDocumentStatusEnum || (exports.PurchaseOrderSummaryModelDocumentStatusEnum = PurchaseOrderSummaryModelDocumentStatusEnum = {}));
/** Status of the purchase order original document */
var PurchaseOrderSummaryModelStatusEnum;
(function (PurchaseOrderSummaryModelStatusEnum) {
    PurchaseOrderSummaryModelStatusEnum["INUSE"] = "INUSE";
    PurchaseOrderSummaryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseOrderSummaryModelStatusEnum["APPROVING"] = "APPROVING";
    PurchaseOrderSummaryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseOrderSummaryModelStatusEnum["APPROVED"] = "APPROVED";
    PurchaseOrderSummaryModelStatusEnum["OPEN"] = "OPEN";
    PurchaseOrderSummaryModelStatusEnum["CLOSED"] = "CLOSED";
    PurchaseOrderSummaryModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseOrderSummaryModelStatusEnum || (exports.PurchaseOrderSummaryModelStatusEnum = PurchaseOrderSummaryModelStatusEnum = {}));
/** Controls the amounts on Purchase Orders (POs) created from this PR (summary level or detail lines level). */
var PurchaseRequisitionModCreateModelAmountControlEnum;
(function (PurchaseRequisitionModCreateModelAmountControlEnum) {
    PurchaseRequisitionModCreateModelAmountControlEnum["SUMMARY"] = "SUMMARY";
    PurchaseRequisitionModCreateModelAmountControlEnum["DETAIL"] = "DETAIL";
})(PurchaseRequisitionModCreateModelAmountControlEnum || (exports.PurchaseRequisitionModCreateModelAmountControlEnum = PurchaseRequisitionModCreateModelAmountControlEnum = {}));
/** The purchasing document status. */
var PurchaseRequisitionModelStatusEnum;
(function (PurchaseRequisitionModelStatusEnum) {
    PurchaseRequisitionModelStatusEnum["INUSE"] = "INUSE";
    PurchaseRequisitionModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseRequisitionModelStatusEnum["APPROVING"] = "APPROVING";
    PurchaseRequisitionModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseRequisitionModelStatusEnum["APPROVED"] = "APPROVED";
    PurchaseRequisitionModelStatusEnum["OPEN"] = "OPEN";
    PurchaseRequisitionModelStatusEnum["CLOSED"] = "CLOSED";
    PurchaseRequisitionModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseRequisitionModelStatusEnum || (exports.PurchaseRequisitionModelStatusEnum = PurchaseRequisitionModelStatusEnum = {}));
/** Controls the amounts on Purchase Orders (POs) created from this PR (summary level or detail lines level). */
var PurchaseRequisitionModelAmountControlEnum;
(function (PurchaseRequisitionModelAmountControlEnum) {
    PurchaseRequisitionModelAmountControlEnum["SUMMARY"] = "SUMMARY";
    PurchaseRequisitionModelAmountControlEnum["DETAIL"] = "DETAIL";
})(PurchaseRequisitionModelAmountControlEnum || (exports.PurchaseRequisitionModelAmountControlEnum = PurchaseRequisitionModelAmountControlEnum = {}));
/** Controls the amounts on Purchase Orders (POs) created from this PR (summary level or detail lines level). */
var PurchaseRequisitionOrigCreateModelAmountControlEnum;
(function (PurchaseRequisitionOrigCreateModelAmountControlEnum) {
    PurchaseRequisitionOrigCreateModelAmountControlEnum["SUMMARY"] = "SUMMARY";
    PurchaseRequisitionOrigCreateModelAmountControlEnum["DETAIL"] = "DETAIL";
})(PurchaseRequisitionOrigCreateModelAmountControlEnum || (exports.PurchaseRequisitionOrigCreateModelAmountControlEnum = PurchaseRequisitionOrigCreateModelAmountControlEnum = {}));
/** Match any PR whose status is contained in the supplied collection. Defaults to INUSE */
var PurchaseRequisitionSearchModelDocumentStatusEnum;
(function (PurchaseRequisitionSearchModelDocumentStatusEnum) {
    PurchaseRequisitionSearchModelDocumentStatusEnum["INUSE"] = "INUSE";
    PurchaseRequisitionSearchModelDocumentStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseRequisitionSearchModelDocumentStatusEnum["APPROVING"] = "APPROVING";
    PurchaseRequisitionSearchModelDocumentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseRequisitionSearchModelDocumentStatusEnum["APPROVED"] = "APPROVED";
    PurchaseRequisitionSearchModelDocumentStatusEnum["OPEN"] = "OPEN";
    PurchaseRequisitionSearchModelDocumentStatusEnum["CLOSED"] = "CLOSED";
    PurchaseRequisitionSearchModelDocumentStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseRequisitionSearchModelDocumentStatusEnum || (exports.PurchaseRequisitionSearchModelDocumentStatusEnum = PurchaseRequisitionSearchModelDocumentStatusEnum = {}));
/** Status of the purchase requisition document */
var PurchaseRequisitionSummaryModelDocumentStatusEnum;
(function (PurchaseRequisitionSummaryModelDocumentStatusEnum) {
    PurchaseRequisitionSummaryModelDocumentStatusEnum["INUSE"] = "INUSE";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["APPROVING"] = "APPROVING";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["APPROVED"] = "APPROVED";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["OPEN"] = "OPEN";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["CLOSED"] = "CLOSED";
    PurchaseRequisitionSummaryModelDocumentStatusEnum["CANCELED"] = "CANCELED";
})(PurchaseRequisitionSummaryModelDocumentStatusEnum || (exports.PurchaseRequisitionSummaryModelDocumentStatusEnum = PurchaseRequisitionSummaryModelDocumentStatusEnum = {}));
var PurchasingApprovalHistoryModelStatusEnum;
(function (PurchasingApprovalHistoryModelStatusEnum) {
    PurchasingApprovalHistoryModelStatusEnum["INUSE"] = "INUSE";
    PurchasingApprovalHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchasingApprovalHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    PurchasingApprovalHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchasingApprovalHistoryModelStatusEnum["APPROVED"] = "APPROVED";
    PurchasingApprovalHistoryModelStatusEnum["OPEN"] = "OPEN";
    PurchasingApprovalHistoryModelStatusEnum["CLOSED"] = "CLOSED";
    PurchasingApprovalHistoryModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchasingApprovalHistoryModelStatusEnum || (exports.PurchasingApprovalHistoryModelStatusEnum = PurchasingApprovalHistoryModelStatusEnum = {}));
var PurchasingBalanceModelStatusEnum;
(function (PurchasingBalanceModelStatusEnum) {
    PurchasingBalanceModelStatusEnum["INUSE"] = "INUSE";
    PurchasingBalanceModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    PurchasingBalanceModelStatusEnum["APPROVING"] = "APPROVING";
    PurchasingBalanceModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    PurchasingBalanceModelStatusEnum["APPROVED"] = "APPROVED";
    PurchasingBalanceModelStatusEnum["OPEN"] = "OPEN";
    PurchasingBalanceModelStatusEnum["CLOSED"] = "CLOSED";
    PurchasingBalanceModelStatusEnum["CANCELED"] = "CANCELED";
})(PurchasingBalanceModelStatusEnum || (exports.PurchasingBalanceModelStatusEnum = PurchasingBalanceModelStatusEnum = {}));
/** Status of the Receiving Document */
var ReceivingDocumentModelStatusEnum;
(function (ReceivingDocumentModelStatusEnum) {
    ReceivingDocumentModelStatusEnum["INUSE"] = "INUSE";
    ReceivingDocumentModelStatusEnum["COMPLETED"] = "COMPLETED";
    ReceivingDocumentModelStatusEnum["RETRACTED"] = "RETRACTED";
})(ReceivingDocumentModelStatusEnum || (exports.ReceivingDocumentModelStatusEnum = ReceivingDocumentModelStatusEnum = {}));
/**
 * Determines the type of search performed for a provided document number.
 * @default "EQUALS"
 */
var ReceivingDocumentSearchModelDocumentNumberPredicateEnum;
(function (ReceivingDocumentSearchModelDocumentNumberPredicateEnum) {
    ReceivingDocumentSearchModelDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    ReceivingDocumentSearchModelDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    ReceivingDocumentSearchModelDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    ReceivingDocumentSearchModelDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    ReceivingDocumentSearchModelDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(ReceivingDocumentSearchModelDocumentNumberPredicateEnum || (exports.ReceivingDocumentSearchModelDocumentNumberPredicateEnum = ReceivingDocumentSearchModelDocumentNumberPredicateEnum = {}));
/**
 * Determines the type of search performed for a provided PO document number.
 * @default "EQUALS"
 */
var ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum;
(function (ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum) {
    ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum || (exports.ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum = ReceivingDocumentSearchModelPoDocumentNumberPredicateEnum = {}));
/** A list of Receiving document statuses */
var ReceivingDocumentSearchModelStatusesEnum;
(function (ReceivingDocumentSearchModelStatusesEnum) {
    ReceivingDocumentSearchModelStatusesEnum["INUSE"] = "INUSE";
    ReceivingDocumentSearchModelStatusesEnum["COMPLETED"] = "COMPLETED";
    ReceivingDocumentSearchModelStatusesEnum["RETRACTED"] = "RETRACTED";
})(ReceivingDocumentSearchModelStatusesEnum || (exports.ReceivingDocumentSearchModelStatusesEnum = ReceivingDocumentSearchModelStatusesEnum = {}));
/**
 * Determines the type of search performed for a provided document number.
 * @default "CONTAINS"
 */
var ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum;
(function (ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum) {
    ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum["EQUALS"] = "EQUALS";
    ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum || (exports.ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum = ReceivingPurchaseOrderSearchModelDocumentNumberPredicateEnum = {}));
/** Types of approvals for listing approver's people */
var SchedulingPersonSearchModelApprovalTypesEnum;
(function (SchedulingPersonSearchModelApprovalTypesEnum) {
    SchedulingPersonSearchModelApprovalTypesEnum["LEAVE_REQUEST"] = "LEAVE_REQUEST";
    SchedulingPersonSearchModelApprovalTypesEnum["TIME"] = "TIME";
    SchedulingPersonSearchModelApprovalTypesEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
    SchedulingPersonSearchModelApprovalTypesEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    SchedulingPersonSearchModelApprovalTypesEnum["PURCHASE_REQUEST"] = "PURCHASE_REQUEST";
    SchedulingPersonSearchModelApprovalTypesEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    SchedulingPersonSearchModelApprovalTypesEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    SchedulingPersonSearchModelApprovalTypesEnum["CUSTOMER_INVOICE"] = "CUSTOMER_INVOICE";
})(SchedulingPersonSearchModelApprovalTypesEnum || (exports.SchedulingPersonSearchModelApprovalTypesEnum = SchedulingPersonSearchModelApprovalTypesEnum = {}));
/** Person rate classification (exempt status) as of the effective date specified by the asOfDate field */
var SchedulingPersonSearchModelClassificationEnum;
(function (SchedulingPersonSearchModelClassificationEnum) {
    SchedulingPersonSearchModelClassificationEnum["EXEMPT"] = "EXEMPT";
    SchedulingPersonSearchModelClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    SchedulingPersonSearchModelClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    SchedulingPersonSearchModelClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(SchedulingPersonSearchModelClassificationEnum || (exports.SchedulingPersonSearchModelClassificationEnum = SchedulingPersonSearchModelClassificationEnum = {}));
var SectionFilterTypeEnum;
(function (SectionFilterTypeEnum) {
    SectionFilterTypeEnum["NONE"] = "NONE";
    SectionFilterTypeEnum["COST_ELEMENT"] = "COST_ELEMENT";
    SectionFilterTypeEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    SectionFilterTypeEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    SectionFilterTypeEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    SectionFilterTypeEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    SectionFilterTypeEnum["BASE_COST_ELEMENT"] = "BASE_COST_ELEMENT";
    SectionFilterTypeEnum["BASE_COST_PLUS_ELEMENT_TYPE"] = "BASE_COST_PLUS_ELEMENT_TYPE";
    SectionFilterTypeEnum["DOCUMENT_TYPE"] = "DOCUMENT_TYPE";
    SectionFilterTypeEnum["BILL_BY_METHOD_TYPE"] = "BILL_BY_METHOD_TYPE";
})(SectionFilterTypeEnum || (exports.SectionFilterTypeEnum = SectionFilterTypeEnum = {}));
/**
 * Allow time reporting against this task.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskCreateModelAllowTimeEnum;
(function (TaskCreateModelAllowTimeEnum) {
    TaskCreateModelAllowTimeEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskCreateModelAllowTimeEnum["YES"] = "YES";
    TaskCreateModelAllowTimeEnum["NO"] = "NO";
})(TaskCreateModelAllowTimeEnum || (exports.TaskCreateModelAllowTimeEnum = TaskCreateModelAllowTimeEnum = {}));
/**
 * Allow expense reporting against this task.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskCreateModelAllowExpenseEnum;
(function (TaskCreateModelAllowExpenseEnum) {
    TaskCreateModelAllowExpenseEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskCreateModelAllowExpenseEnum["YES"] = "YES";
    TaskCreateModelAllowExpenseEnum["NO"] = "NO";
})(TaskCreateModelAllowExpenseEnum || (exports.TaskCreateModelAllowExpenseEnum = TaskCreateModelAllowExpenseEnum = {}));
/**
 * Allow item reporting against this task.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskCreateModelAllowItemsEnum;
(function (TaskCreateModelAllowItemsEnum) {
    TaskCreateModelAllowItemsEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskCreateModelAllowItemsEnum["YES"] = "YES";
    TaskCreateModelAllowItemsEnum["NO"] = "NO";
})(TaskCreateModelAllowItemsEnum || (exports.TaskCreateModelAllowItemsEnum = TaskCreateModelAllowItemsEnum = {}));
/**
 * Require PO for non-employee (PO) time.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskCreateModelTsSubPoRequiredEnum;
(function (TaskCreateModelTsSubPoRequiredEnum) {
    TaskCreateModelTsSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskCreateModelTsSubPoRequiredEnum["YES"] = "YES";
    TaskCreateModelTsSubPoRequiredEnum["NO"] = "NO";
})(TaskCreateModelTsSubPoRequiredEnum || (exports.TaskCreateModelTsSubPoRequiredEnum = TaskCreateModelTsSubPoRequiredEnum = {}));
/**
 * Require PO for non-employee (PO) expenses.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskCreateModelExpSubPoRequiredEnum;
(function (TaskCreateModelExpSubPoRequiredEnum) {
    TaskCreateModelExpSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskCreateModelExpSubPoRequiredEnum["YES"] = "YES";
    TaskCreateModelExpSubPoRequiredEnum["NO"] = "NO";
})(TaskCreateModelExpSubPoRequiredEnum || (exports.TaskCreateModelExpSubPoRequiredEnum = TaskCreateModelExpSubPoRequiredEnum = {}));
/** type of task dependency */
var TaskDependencyCreateModelTypeEnum;
(function (TaskDependencyCreateModelTypeEnum) {
    TaskDependencyCreateModelTypeEnum["FS"] = "FS";
    TaskDependencyCreateModelTypeEnum["SS"] = "SS";
    TaskDependencyCreateModelTypeEnum["FF"] = "FF";
    TaskDependencyCreateModelTypeEnum["SF"] = "SF";
})(TaskDependencyCreateModelTypeEnum || (exports.TaskDependencyCreateModelTypeEnum = TaskDependencyCreateModelTypeEnum = {}));
/** type of task dependency */
var TaskDependencyModelTypeEnum;
(function (TaskDependencyModelTypeEnum) {
    TaskDependencyModelTypeEnum["FS"] = "FS";
    TaskDependencyModelTypeEnum["SS"] = "SS";
    TaskDependencyModelTypeEnum["FF"] = "FF";
    TaskDependencyModelTypeEnum["SF"] = "SF";
})(TaskDependencyModelTypeEnum || (exports.TaskDependencyModelTypeEnum = TaskDependencyModelTypeEnum = {}));
/**
 * Flag indicating whether to allow time reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskModelAllowTimeEnum;
(function (TaskModelAllowTimeEnum) {
    TaskModelAllowTimeEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskModelAllowTimeEnum["YES"] = "YES";
    TaskModelAllowTimeEnum["NO"] = "NO";
})(TaskModelAllowTimeEnum || (exports.TaskModelAllowTimeEnum = TaskModelAllowTimeEnum = {}));
/**
 * Flag indicating whether to require PO for non-employee (PO) time. View access requires that financial orgs have been enabled.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskModelTsSubPoRequiredEnum;
(function (TaskModelTsSubPoRequiredEnum) {
    TaskModelTsSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskModelTsSubPoRequiredEnum["YES"] = "YES";
    TaskModelTsSubPoRequiredEnum["NO"] = "NO";
})(TaskModelTsSubPoRequiredEnum || (exports.TaskModelTsSubPoRequiredEnum = TaskModelTsSubPoRequiredEnum = {}));
/**
 * Flag indicating whether to allow expense reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskModelAllowExpenseEnum;
(function (TaskModelAllowExpenseEnum) {
    TaskModelAllowExpenseEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskModelAllowExpenseEnum["YES"] = "YES";
    TaskModelAllowExpenseEnum["NO"] = "NO";
})(TaskModelAllowExpenseEnum || (exports.TaskModelAllowExpenseEnum = TaskModelAllowExpenseEnum = {}));
/**
 * Flag indicating whether to require PO for non-employee (PO) expense. View access requires that financial orgs have been enabled.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskModelExpSubPoRequiredEnum;
(function (TaskModelExpSubPoRequiredEnum) {
    TaskModelExpSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskModelExpSubPoRequiredEnum["YES"] = "YES";
    TaskModelExpSubPoRequiredEnum["NO"] = "NO";
})(TaskModelExpSubPoRequiredEnum || (exports.TaskModelExpSubPoRequiredEnum = TaskModelExpSubPoRequiredEnum = {}));
/**
 * Flag indicating whether to allow item reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskModelAllowItemsEnum;
(function (TaskModelAllowItemsEnum) {
    TaskModelAllowItemsEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskModelAllowItemsEnum["YES"] = "YES";
    TaskModelAllowItemsEnum["NO"] = "NO";
})(TaskModelAllowItemsEnum || (exports.TaskModelAllowItemsEnum = TaskModelAllowItemsEnum = {}));
/** Relative position of the task after moving. */
var TaskMoveModelRelativePositionEnum;
(function (TaskMoveModelRelativePositionEnum) {
    TaskMoveModelRelativePositionEnum["CHILD"] = "CHILD";
    TaskMoveModelRelativePositionEnum["BEFORE"] = "BEFORE";
    TaskMoveModelRelativePositionEnum["AFTER"] = "AFTER";
})(TaskMoveModelRelativePositionEnum || (exports.TaskMoveModelRelativePositionEnum = TaskMoveModelRelativePositionEnum = {}));
/**
 * Flag indicating whether to allow time reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskUpdateModelAllowTimeEnum;
(function (TaskUpdateModelAllowTimeEnum) {
    TaskUpdateModelAllowTimeEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskUpdateModelAllowTimeEnum["YES"] = "YES";
    TaskUpdateModelAllowTimeEnum["NO"] = "NO";
})(TaskUpdateModelAllowTimeEnum || (exports.TaskUpdateModelAllowTimeEnum = TaskUpdateModelAllowTimeEnum = {}));
/**
 * Flag indicating whether to require PO for non-employee (PO) time. View access requires that financial orgs have been enabled.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskUpdateModelTsSubPoRequiredEnum;
(function (TaskUpdateModelTsSubPoRequiredEnum) {
    TaskUpdateModelTsSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskUpdateModelTsSubPoRequiredEnum["YES"] = "YES";
    TaskUpdateModelTsSubPoRequiredEnum["NO"] = "NO";
})(TaskUpdateModelTsSubPoRequiredEnum || (exports.TaskUpdateModelTsSubPoRequiredEnum = TaskUpdateModelTsSubPoRequiredEnum = {}));
/**
 * Flag indicating whether to allow expense reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskUpdateModelAllowExpenseEnum;
(function (TaskUpdateModelAllowExpenseEnum) {
    TaskUpdateModelAllowExpenseEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskUpdateModelAllowExpenseEnum["YES"] = "YES";
    TaskUpdateModelAllowExpenseEnum["NO"] = "NO";
})(TaskUpdateModelAllowExpenseEnum || (exports.TaskUpdateModelAllowExpenseEnum = TaskUpdateModelAllowExpenseEnum = {}));
/**
 * Flag indicating whether to require PO for non-employee (PO) expense. View access requires that financial orgs have been enabled.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskUpdateModelExpSubPoRequiredEnum;
(function (TaskUpdateModelExpSubPoRequiredEnum) {
    TaskUpdateModelExpSubPoRequiredEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskUpdateModelExpSubPoRequiredEnum["YES"] = "YES";
    TaskUpdateModelExpSubPoRequiredEnum["NO"] = "NO";
})(TaskUpdateModelExpSubPoRequiredEnum || (exports.TaskUpdateModelExpSubPoRequiredEnum = TaskUpdateModelExpSubPoRequiredEnum = {}));
/**
 * Flag indicating whether to allow item reporting.
 * @default "DEFAULT_TO_PROJECT"
 */
var TaskUpdateModelAllowItemsEnum;
(function (TaskUpdateModelAllowItemsEnum) {
    TaskUpdateModelAllowItemsEnum["DEFAULT_TO_PROJECT"] = "DEFAULT_TO_PROJECT";
    TaskUpdateModelAllowItemsEnum["YES"] = "YES";
    TaskUpdateModelAllowItemsEnum["NO"] = "NO";
})(TaskUpdateModelAllowItemsEnum || (exports.TaskUpdateModelAllowItemsEnum = TaskUpdateModelAllowItemsEnum = {}));
var TaxInvoiceSectionFormatCreateModelTypeEnum;
(function (TaxInvoiceSectionFormatCreateModelTypeEnum) {
    TaxInvoiceSectionFormatCreateModelTypeEnum["COST"] = "COST";
    TaxInvoiceSectionFormatCreateModelTypeEnum["EXPENSE"] = "EXPENSE";
    TaxInvoiceSectionFormatCreateModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    TaxInvoiceSectionFormatCreateModelTypeEnum["LABOR"] = "LABOR";
    TaxInvoiceSectionFormatCreateModelTypeEnum["ONETIME"] = "ONETIME";
    TaxInvoiceSectionFormatCreateModelTypeEnum["PREBILL"] = "PREBILL";
    TaxInvoiceSectionFormatCreateModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    TaxInvoiceSectionFormatCreateModelTypeEnum["TAX"] = "TAX";
    TaxInvoiceSectionFormatCreateModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(TaxInvoiceSectionFormatCreateModelTypeEnum || (exports.TaxInvoiceSectionFormatCreateModelTypeEnum = TaxInvoiceSectionFormatCreateModelTypeEnum = {}));
var TaxInvoiceSectionFormatCreateModelCol1FieldEnum;
(function (TaxInvoiceSectionFormatCreateModelCol1FieldEnum) {
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatCreateModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatCreateModelCol1FieldEnum || (exports.TaxInvoiceSectionFormatCreateModelCol1FieldEnum = TaxInvoiceSectionFormatCreateModelCol1FieldEnum = {}));
var TaxInvoiceSectionFormatCreateModelCol2FieldEnum;
(function (TaxInvoiceSectionFormatCreateModelCol2FieldEnum) {
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatCreateModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatCreateModelCol2FieldEnum || (exports.TaxInvoiceSectionFormatCreateModelCol2FieldEnum = TaxInvoiceSectionFormatCreateModelCol2FieldEnum = {}));
var TaxInvoiceSectionFormatCreateModelCol3FieldEnum;
(function (TaxInvoiceSectionFormatCreateModelCol3FieldEnum) {
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatCreateModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatCreateModelCol3FieldEnum || (exports.TaxInvoiceSectionFormatCreateModelCol3FieldEnum = TaxInvoiceSectionFormatCreateModelCol3FieldEnum = {}));
var TaxInvoiceSectionFormatCreateModelCol4FieldEnum;
(function (TaxInvoiceSectionFormatCreateModelCol4FieldEnum) {
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatCreateModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatCreateModelCol4FieldEnum || (exports.TaxInvoiceSectionFormatCreateModelCol4FieldEnum = TaxInvoiceSectionFormatCreateModelCol4FieldEnum = {}));
var TaxInvoiceSectionFormatModelTypeEnum;
(function (TaxInvoiceSectionFormatModelTypeEnum) {
    TaxInvoiceSectionFormatModelTypeEnum["COST"] = "COST";
    TaxInvoiceSectionFormatModelTypeEnum["EXPENSE"] = "EXPENSE";
    TaxInvoiceSectionFormatModelTypeEnum["FIXED_PRICE"] = "FIXED_PRICE";
    TaxInvoiceSectionFormatModelTypeEnum["LABOR"] = "LABOR";
    TaxInvoiceSectionFormatModelTypeEnum["ONETIME"] = "ONETIME";
    TaxInvoiceSectionFormatModelTypeEnum["PREBILL"] = "PREBILL";
    TaxInvoiceSectionFormatModelTypeEnum["PREBILL_OFFSET"] = "PREBILL_OFFSET";
    TaxInvoiceSectionFormatModelTypeEnum["TAX"] = "TAX";
    TaxInvoiceSectionFormatModelTypeEnum["FUNDED_VALUE_ADJUSTMENT"] = "FUNDED_VALUE_ADJUSTMENT";
})(TaxInvoiceSectionFormatModelTypeEnum || (exports.TaxInvoiceSectionFormatModelTypeEnum = TaxInvoiceSectionFormatModelTypeEnum = {}));
var TaxInvoiceSectionFormatModelCol1FieldEnum;
(function (TaxInvoiceSectionFormatModelCol1FieldEnum) {
    TaxInvoiceSectionFormatModelCol1FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatModelCol1FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatModelCol1FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatModelCol1FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatModelCol1FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatModelCol1FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatModelCol1FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatModelCol1FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatModelCol1FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatModelCol1FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatModelCol1FieldEnum || (exports.TaxInvoiceSectionFormatModelCol1FieldEnum = TaxInvoiceSectionFormatModelCol1FieldEnum = {}));
var TaxInvoiceSectionFormatModelCol2FieldEnum;
(function (TaxInvoiceSectionFormatModelCol2FieldEnum) {
    TaxInvoiceSectionFormatModelCol2FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatModelCol2FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatModelCol2FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatModelCol2FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatModelCol2FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatModelCol2FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatModelCol2FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatModelCol2FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatModelCol2FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatModelCol2FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatModelCol2FieldEnum || (exports.TaxInvoiceSectionFormatModelCol2FieldEnum = TaxInvoiceSectionFormatModelCol2FieldEnum = {}));
var TaxInvoiceSectionFormatModelCol3FieldEnum;
(function (TaxInvoiceSectionFormatModelCol3FieldEnum) {
    TaxInvoiceSectionFormatModelCol3FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatModelCol3FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatModelCol3FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatModelCol3FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatModelCol3FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatModelCol3FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatModelCol3FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatModelCol3FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatModelCol3FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatModelCol3FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatModelCol3FieldEnum || (exports.TaxInvoiceSectionFormatModelCol3FieldEnum = TaxInvoiceSectionFormatModelCol3FieldEnum = {}));
var TaxInvoiceSectionFormatModelCol4FieldEnum;
(function (TaxInvoiceSectionFormatModelCol4FieldEnum) {
    TaxInvoiceSectionFormatModelCol4FieldEnum["NONE"] = "NONE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["COST_ELEMENT"] = "COST_ELEMENT";
    TaxInvoiceSectionFormatModelCol4FieldEnum["COST_PLUS_ELEMENT_TYPE"] = "COST_PLUS_ELEMENT_TYPE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
    TaxInvoiceSectionFormatModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["FEE_METHOD_NAME"] = "FEE_METHOD_NAME";
    TaxInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    TaxInvoiceSectionFormatModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    TaxInvoiceSectionFormatModelCol4FieldEnum["LOCATION"] = "LOCATION";
    TaxInvoiceSectionFormatModelCol4FieldEnum["ONETIME_CHARGE_TYPE"] = "ONETIME_CHARGE_TYPE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["PAY_CODE"] = "PAY_CODE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["PERSON"] = "PERSON";
    TaxInvoiceSectionFormatModelCol4FieldEnum["PROJECT"] = "PROJECT";
    TaxInvoiceSectionFormatModelCol4FieldEnum["TASK"] = "TASK";
    TaxInvoiceSectionFormatModelCol4FieldEnum["VENDOR"] = "VENDOR";
    TaxInvoiceSectionFormatModelCol4FieldEnum["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    TaxInvoiceSectionFormatModelCol4FieldEnum["LOCATION_REFERENCE"] = "LOCATION_REFERENCE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["ITEM_CODE"] = "ITEM_CODE";
    TaxInvoiceSectionFormatModelCol4FieldEnum["ITEM_NAME"] = "ITEM_NAME";
})(TaxInvoiceSectionFormatModelCol4FieldEnum || (exports.TaxInvoiceSectionFormatModelCol4FieldEnum = TaxInvoiceSectionFormatModelCol4FieldEnum = {}));
/**
 * This field is used to specify which type of time period.  Current built-in values include:
 * * Weekly -- note that you can have multiple time periods of the same type if you like.  For example, you may have several weekly time periods defined either for the purposes of distributing system load or perhaps to allow for differing business rules (e.g. you don't want one group of users to have the End User Adjustment capability).  You may also choose to have multiple weekly time periods, for example, if one groups week begins on Sunday and another groups week begins on Monday.
 * * Every Two Weeks (aka bi-weekly)
 * * Twice a Month (aka semi-monthly) -- typically setup as the 1st through the 15th and then 16th through the end of the month.
 * * Monthly
 *
 * * Weekly Overlap  -- This period is a weekly period with the end date of one period and the beginning date of the next period overlapping/occurring on the same day.  This may be useful, for example, to organizations that provide for flexible schedules that include every other Friday off (yet still want to attempt to use dilution -- which would require 40 hours per week charged).  By using this type of weekly time period, you could, for example, run a weekly schedule from Friday noon to Friday noon.  These schemes are sometimes referred to as 9/80 or 36/44 schedules.
 * These users could record:
 *   * Week 1 = F-0, M-9, T-9, W-9, T-9, F-4 (first half of Friday)
 *
 *   * Week 2 = F-4 (second half of Friday), M-9, T-9, W-9, T-9, F-0
 *
 *   In this way, they could record 40 hours per week every week rather than 44 hours one week and 36 hours the next (which would help with dilution calculations).When working with weekly overlap time periods, you may want to consider enabling the following two properties:  Align Rates to Time Period for Weekly or Every Two Weeks Overlap (unatime.weekly_overlap.rate_align) and Prevent Posting on Weekly or Every Two Weeks Overlap Day (unatime.prevent_post_on_weekly_overlap).
 *
 * * Every Two Weeks Overlap  -- This period works like the Weekly Overlap period with the only difference being it is a 2 week period.
 */
var TimePeriodSetupCreateModelTypeEnum;
(function (TimePeriodSetupCreateModelTypeEnum) {
    TimePeriodSetupCreateModelTypeEnum["BIWEEKLY"] = "BIWEEKLY";
    TimePeriodSetupCreateModelTypeEnum["BIWEEKLY_OVERLAP"] = "BIWEEKLY_OVERLAP";
    TimePeriodSetupCreateModelTypeEnum["MONTHLY"] = "MONTHLY";
    TimePeriodSetupCreateModelTypeEnum["SEMIMONTHLY"] = "SEMIMONTHLY";
    TimePeriodSetupCreateModelTypeEnum["WEEKLY"] = "WEEKLY";
    TimePeriodSetupCreateModelTypeEnum["WEEKLY_OVERLAP"] = "WEEKLY_OVERLAP";
})(TimePeriodSetupCreateModelTypeEnum || (exports.TimePeriodSetupCreateModelTypeEnum = TimePeriodSetupCreateModelTypeEnum = {}));
/**
 * This field is used to specify which type of time period.  Current built-in values include:
 * * Weekly -- note that you can have multiple time periods of the same type if you like.  For example, you may have several weekly time periods defined either for the purposes of distributing system load or perhaps to allow for differing business rules (e.g. you don't want one group of users to have the End User Adjustment capability).  You may also choose to have multiple weekly time periods, for example, if one groups week begins on Sunday and another groups week begins on Monday.
 * * Every Two Weeks (aka bi-weekly)
 * * Twice a Month (aka semi-monthly) -- typically setup as the 1st through the 15th and then 16th through the end of the month.
 * * Monthly
 *
 * * Weekly Overlap  -- This period is a weekly period with the end date of one period and the beginning date of the next period overlapping/occurring on the same day.  This may be useful, for example, to organizations that provide for flexible schedules that include every other Friday off (yet still want to attempt to use dilution -- which would require 40 hours per week charged).  By using this type of weekly time period, you could, for example, run a weekly schedule from Friday noon to Friday noon.  These schemes are sometimes referred to as 9/80 or 36/44 schedules.
 * These users could record:
 *   * Week 1 = F-0, M-9, T-9, W-9, T-9, F-4 (first half of Friday)
 *
 *   * Week 2 = F-4 (second half of Friday), M-9, T-9, W-9, T-9, F-0
 *
 *   In this way, they could record 40 hours per week every week rather than 44 hours one week and 36 hours the next (which would help with dilution calculations).When working with weekly overlap time periods, you may want to consider enabling the following two properties:  Align Rates to Time Period for Weekly or Every Two Weeks Overlap (unatime.weekly_overlap.rate_align) and Prevent Posting on Weekly or Every Two Weeks Overlap Day (unatime.prevent_post_on_weekly_overlap).
 *
 * * Every Two Weeks Overlap  -- This period works like the Weekly Overlap period with the only difference being it is a 2 week period.
 */
var TimePeriodSetupModelTypeEnum;
(function (TimePeriodSetupModelTypeEnum) {
    TimePeriodSetupModelTypeEnum["BIWEEKLY"] = "BIWEEKLY";
    TimePeriodSetupModelTypeEnum["BIWEEKLY_OVERLAP"] = "BIWEEKLY_OVERLAP";
    TimePeriodSetupModelTypeEnum["MONTHLY"] = "MONTHLY";
    TimePeriodSetupModelTypeEnum["SEMIMONTHLY"] = "SEMIMONTHLY";
    TimePeriodSetupModelTypeEnum["WEEKLY"] = "WEEKLY";
    TimePeriodSetupModelTypeEnum["WEEKLY_OVERLAP"] = "WEEKLY_OVERLAP";
})(TimePeriodSetupModelTypeEnum || (exports.TimePeriodSetupModelTypeEnum = TimePeriodSetupModelTypeEnum = {}));
/** Timesheet status */
var TimeStatusHistoryModelStatusEnum;
(function (TimeStatusHistoryModelStatusEnum) {
    TimeStatusHistoryModelStatusEnum["NEW"] = "NEW";
    TimeStatusHistoryModelStatusEnum["INUSE"] = "INUSE";
    TimeStatusHistoryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimeStatusHistoryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimeStatusHistoryModelStatusEnum["APPROVING"] = "APPROVING";
    TimeStatusHistoryModelStatusEnum["COMPLETED"] = "COMPLETED";
    TimeStatusHistoryModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimeStatusHistoryModelStatusEnum["LOCKED"] = "LOCKED";
})(TimeStatusHistoryModelStatusEnum || (exports.TimeStatusHistoryModelStatusEnum = TimeStatusHistoryModelStatusEnum = {}));
/** Adjustment status */
var TimeStatusHistoryModelAdjustmentStatusEnum;
(function (TimeStatusHistoryModelAdjustmentStatusEnum) {
    TimeStatusHistoryModelAdjustmentStatusEnum["NEW"] = "NEW";
    TimeStatusHistoryModelAdjustmentStatusEnum["INUSE"] = "INUSE";
    TimeStatusHistoryModelAdjustmentStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimeStatusHistoryModelAdjustmentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimeStatusHistoryModelAdjustmentStatusEnum["APPROVING"] = "APPROVING";
    TimeStatusHistoryModelAdjustmentStatusEnum["COMPLETED"] = "COMPLETED";
    TimeStatusHistoryModelAdjustmentStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimeStatusHistoryModelAdjustmentStatusEnum["LOCKED"] = "LOCKED";
})(TimeStatusHistoryModelAdjustmentStatusEnum || (exports.TimeStatusHistoryModelAdjustmentStatusEnum = TimeStatusHistoryModelAdjustmentStatusEnum = {}));
var TimesheetListModelStatusEnum;
(function (TimesheetListModelStatusEnum) {
    TimesheetListModelStatusEnum["NEW"] = "NEW";
    TimesheetListModelStatusEnum["INUSE"] = "INUSE";
    TimesheetListModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetListModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetListModelStatusEnum["APPROVING"] = "APPROVING";
    TimesheetListModelStatusEnum["COMPLETED"] = "COMPLETED";
    TimesheetListModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetListModelStatusEnum["LOCKED"] = "LOCKED";
})(TimesheetListModelStatusEnum || (exports.TimesheetListModelStatusEnum = TimesheetListModelStatusEnum = {}));
var TimesheetListModelAdjustmentStatusEnum;
(function (TimesheetListModelAdjustmentStatusEnum) {
    TimesheetListModelAdjustmentStatusEnum["NEW"] = "NEW";
    TimesheetListModelAdjustmentStatusEnum["INUSE"] = "INUSE";
    TimesheetListModelAdjustmentStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetListModelAdjustmentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetListModelAdjustmentStatusEnum["APPROVING"] = "APPROVING";
    TimesheetListModelAdjustmentStatusEnum["COMPLETED"] = "COMPLETED";
    TimesheetListModelAdjustmentStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetListModelAdjustmentStatusEnum["LOCKED"] = "LOCKED";
})(TimesheetListModelAdjustmentStatusEnum || (exports.TimesheetListModelAdjustmentStatusEnum = TimesheetListModelAdjustmentStatusEnum = {}));
/** Timesheet status */
var TimesheetModelStatusEnum;
(function (TimesheetModelStatusEnum) {
    TimesheetModelStatusEnum["NEW"] = "NEW";
    TimesheetModelStatusEnum["INUSE"] = "INUSE";
    TimesheetModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetModelStatusEnum["APPROVING"] = "APPROVING";
    TimesheetModelStatusEnum["COMPLETED"] = "COMPLETED";
    TimesheetModelStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetModelStatusEnum["LOCKED"] = "LOCKED";
})(TimesheetModelStatusEnum || (exports.TimesheetModelStatusEnum = TimesheetModelStatusEnum = {}));
/** Adjustment status */
var TimesheetModelAdjustmentStatusEnum;
(function (TimesheetModelAdjustmentStatusEnum) {
    TimesheetModelAdjustmentStatusEnum["NEW"] = "NEW";
    TimesheetModelAdjustmentStatusEnum["INUSE"] = "INUSE";
    TimesheetModelAdjustmentStatusEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetModelAdjustmentStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetModelAdjustmentStatusEnum["APPROVING"] = "APPROVING";
    TimesheetModelAdjustmentStatusEnum["COMPLETED"] = "COMPLETED";
    TimesheetModelAdjustmentStatusEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetModelAdjustmentStatusEnum["LOCKED"] = "LOCKED";
})(TimesheetModelAdjustmentStatusEnum || (exports.TimesheetModelAdjustmentStatusEnum = TimesheetModelAdjustmentStatusEnum = {}));
/** Last used UI drawer for the timesheet */
var TimesheetModelLastDrawerStateEnum;
(function (TimesheetModelLastDrawerStateEnum) {
    TimesheetModelLastDrawerStateEnum["DURATION"] = "DURATION";
    TimesheetModelLastDrawerStateEnum["TITO"] = "TITO";
})(TimesheetModelLastDrawerStateEnum || (exports.TimesheetModelLastDrawerStateEnum = TimesheetModelLastDrawerStateEnum = {}));
/** Time in / time out requirement */
var TimesheetOwnerModelTitoRequiredEnum;
(function (TimesheetOwnerModelTitoRequiredEnum) {
    TimesheetOwnerModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
    TimesheetOwnerModelTitoRequiredEnum["PROJECT"] = "PROJECT";
    TimesheetOwnerModelTitoRequiredEnum["DAILY"] = "DAILY";
})(TimesheetOwnerModelTitoRequiredEnum || (exports.TimesheetOwnerModelTitoRequiredEnum = TimesheetOwnerModelTitoRequiredEnum = {}));
/** Labor category rule */
var TimesheetProjectModelUseLaborCategoryEnum;
(function (TimesheetProjectModelUseLaborCategoryEnum) {
    TimesheetProjectModelUseLaborCategoryEnum["REQUIRED"] = "REQUIRED";
    TimesheetProjectModelUseLaborCategoryEnum["FORBIDDEN"] = "FORBIDDEN";
    TimesheetProjectModelUseLaborCategoryEnum["OPTIONAL"] = "OPTIONAL";
})(TimesheetProjectModelUseLaborCategoryEnum || (exports.TimesheetProjectModelUseLaborCategoryEnum = TimesheetProjectModelUseLaborCategoryEnum = {}));
/** Time in/time out required */
var TimesheetProjectModelTitoRequiredEnum;
(function (TimesheetProjectModelTitoRequiredEnum) {
    TimesheetProjectModelTitoRequiredEnum["USER_SETTING"] = "USER_SETTING";
    TimesheetProjectModelTitoRequiredEnum["REQUIRED"] = "REQUIRED";
    TimesheetProjectModelTitoRequiredEnum["NOT_REQUIRED"] = "NOT_REQUIRED";
})(TimesheetProjectModelTitoRequiredEnum || (exports.TimesheetProjectModelTitoRequiredEnum = TimesheetProjectModelTitoRequiredEnum = {}));
var TimesheetSearchModelStatusesEnum;
(function (TimesheetSearchModelStatusesEnum) {
    TimesheetSearchModelStatusesEnum["NEW"] = "NEW";
    TimesheetSearchModelStatusesEnum["INUSE"] = "INUSE";
    TimesheetSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    TimesheetSearchModelStatusesEnum["COMPLETED"] = "COMPLETED";
    TimesheetSearchModelStatusesEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetSearchModelStatusesEnum["LOCKED"] = "LOCKED";
})(TimesheetSearchModelStatusesEnum || (exports.TimesheetSearchModelStatusesEnum = TimesheetSearchModelStatusesEnum = {}));
var TimesheetSearchModelAdjustmentStatusesEnum;
(function (TimesheetSearchModelAdjustmentStatusesEnum) {
    TimesheetSearchModelAdjustmentStatusesEnum["NEW"] = "NEW";
    TimesheetSearchModelAdjustmentStatusesEnum["INUSE"] = "INUSE";
    TimesheetSearchModelAdjustmentStatusesEnum["SUBMITTED"] = "SUBMITTED";
    TimesheetSearchModelAdjustmentStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
    TimesheetSearchModelAdjustmentStatusesEnum["APPROVING"] = "APPROVING";
    TimesheetSearchModelAdjustmentStatusesEnum["COMPLETED"] = "COMPLETED";
    TimesheetSearchModelAdjustmentStatusesEnum["EXTRACTED"] = "EXTRACTED";
    TimesheetSearchModelAdjustmentStatusesEnum["LOCKED"] = "LOCKED";
})(TimesheetSearchModelAdjustmentStatusesEnum || (exports.TimesheetSearchModelAdjustmentStatusesEnum = TimesheetSearchModelAdjustmentStatusesEnum = {}));
/** Order to apply for begin date sort. Defaults to ASC */
var TimesheetSearchModelSortOrderEnum;
(function (TimesheetSearchModelSortOrderEnum) {
    TimesheetSearchModelSortOrderEnum["ASC"] = "ASC";
    TimesheetSearchModelSortOrderEnum["DESC"] = "DESC";
})(TimesheetSearchModelSortOrderEnum || (exports.TimesheetSearchModelSortOrderEnum = TimesheetSearchModelSortOrderEnum = {}));
/** Last UI drawer used on the timesheet */
var TimesheetUpdateModelLastDrawerStateEnum;
(function (TimesheetUpdateModelLastDrawerStateEnum) {
    TimesheetUpdateModelLastDrawerStateEnum["DURATION"] = "DURATION";
    TimesheetUpdateModelLastDrawerStateEnum["TITO"] = "TITO";
})(TimesheetUpdateModelLastDrawerStateEnum || (exports.TimesheetUpdateModelLastDrawerStateEnum = TimesheetUpdateModelLastDrawerStateEnum = {}));
/** Defines the data type of a given UDF's value */
var UdfMetadataModelDataTypeEnum;
(function (UdfMetadataModelDataTypeEnum) {
    UdfMetadataModelDataTypeEnum["DATE"] = "DATE";
    UdfMetadataModelDataTypeEnum["NUMERIC"] = "NUMERIC";
    UdfMetadataModelDataTypeEnum["STRING"] = "STRING";
    UdfMetadataModelDataTypeEnum["LIST"] = "LIST";
    UdfMetadataModelDataTypeEnum["URL"] = "URL";
})(UdfMetadataModelDataTypeEnum || (exports.UdfMetadataModelDataTypeEnum = UdfMetadataModelDataTypeEnum = {}));
/** Show this label in UI? */
var UdfMetadataModelVisibilityEnum;
(function (UdfMetadataModelVisibilityEnum) {
    UdfMetadataModelVisibilityEnum["NONE"] = "NONE";
    UdfMetadataModelVisibilityEnum["DISABLED"] = "DISABLED";
    UdfMetadataModelVisibilityEnum["ENABLED"] = "ENABLED";
})(UdfMetadataModelVisibilityEnum || (exports.UdfMetadataModelVisibilityEnum = UdfMetadataModelVisibilityEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceExpenseModelPwpMatchingTypeEnum;
(function (VendorInvoiceExpenseModelPwpMatchingTypeEnum) {
    VendorInvoiceExpenseModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceExpenseModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceExpenseModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceExpenseModelPwpMatchingTypeEnum || (exports.VendorInvoiceExpenseModelPwpMatchingTypeEnum = VendorInvoiceExpenseModelPwpMatchingTypeEnum = {}));
var VendorInvoiceFormatSectionModelTypeEnum;
(function (VendorInvoiceFormatSectionModelTypeEnum) {
    VendorInvoiceFormatSectionModelTypeEnum["LABOR_DETAILS"] = "LABOR_DETAILS";
    VendorInvoiceFormatSectionModelTypeEnum["EXPENSE_DETAILS"] = "EXPENSE_DETAILS";
    VendorInvoiceFormatSectionModelTypeEnum["MATCHED_LABOR"] = "MATCHED_LABOR";
    VendorInvoiceFormatSectionModelTypeEnum["MATCHED_EXPENSES"] = "MATCHED_EXPENSES";
    VendorInvoiceFormatSectionModelTypeEnum["ITEM_DETAILS"] = "ITEM_DETAILS";
    VendorInvoiceFormatSectionModelTypeEnum["PO_FUNDING_CAP_ADJUSTMENTS"] = "PO_FUNDING_CAP_ADJUSTMENTS";
})(VendorInvoiceFormatSectionModelTypeEnum || (exports.VendorInvoiceFormatSectionModelTypeEnum = VendorInvoiceFormatSectionModelTypeEnum = {}));
var VendorInvoiceFormatSectionModelCol1FieldEnum;
(function (VendorInvoiceFormatSectionModelCol1FieldEnum) {
    VendorInvoiceFormatSectionModelCol1FieldEnum["NONE"] = "NONE";
    VendorInvoiceFormatSectionModelCol1FieldEnum["PERSON"] = "PERSON";
    VendorInvoiceFormatSectionModelCol1FieldEnum["PROJECT"] = "PROJECT";
    VendorInvoiceFormatSectionModelCol1FieldEnum["TASK"] = "TASK";
    VendorInvoiceFormatSectionModelCol1FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    VendorInvoiceFormatSectionModelCol1FieldEnum["EXPENSE_DOCUMENT_NUMBER"] = "EXPENSE_DOCUMENT_NUMBER";
    VendorInvoiceFormatSectionModelCol1FieldEnum["LABOR_CATEGORY_NAME"] = "LABOR_CATEGORY_NAME";
    VendorInvoiceFormatSectionModelCol1FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    VendorInvoiceFormatSectionModelCol1FieldEnum["LOCATION"] = "LOCATION";
    VendorInvoiceFormatSectionModelCol1FieldEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    VendorInvoiceFormatSectionModelCol1FieldEnum["PURCHASE_ORDER_LINE"] = "PURCHASE_ORDER_LINE";
    VendorInvoiceFormatSectionModelCol1FieldEnum["ITEM"] = "ITEM";
    VendorInvoiceFormatSectionModelCol1FieldEnum["DESCRIPTION"] = "DESCRIPTION";
})(VendorInvoiceFormatSectionModelCol1FieldEnum || (exports.VendorInvoiceFormatSectionModelCol1FieldEnum = VendorInvoiceFormatSectionModelCol1FieldEnum = {}));
var VendorInvoiceFormatSectionModelCol2FieldEnum;
(function (VendorInvoiceFormatSectionModelCol2FieldEnum) {
    VendorInvoiceFormatSectionModelCol2FieldEnum["NONE"] = "NONE";
    VendorInvoiceFormatSectionModelCol2FieldEnum["PERSON"] = "PERSON";
    VendorInvoiceFormatSectionModelCol2FieldEnum["PROJECT"] = "PROJECT";
    VendorInvoiceFormatSectionModelCol2FieldEnum["TASK"] = "TASK";
    VendorInvoiceFormatSectionModelCol2FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    VendorInvoiceFormatSectionModelCol2FieldEnum["EXPENSE_DOCUMENT_NUMBER"] = "EXPENSE_DOCUMENT_NUMBER";
    VendorInvoiceFormatSectionModelCol2FieldEnum["LABOR_CATEGORY_NAME"] = "LABOR_CATEGORY_NAME";
    VendorInvoiceFormatSectionModelCol2FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    VendorInvoiceFormatSectionModelCol2FieldEnum["LOCATION"] = "LOCATION";
    VendorInvoiceFormatSectionModelCol2FieldEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    VendorInvoiceFormatSectionModelCol2FieldEnum["PURCHASE_ORDER_LINE"] = "PURCHASE_ORDER_LINE";
    VendorInvoiceFormatSectionModelCol2FieldEnum["ITEM"] = "ITEM";
    VendorInvoiceFormatSectionModelCol2FieldEnum["DESCRIPTION"] = "DESCRIPTION";
})(VendorInvoiceFormatSectionModelCol2FieldEnum || (exports.VendorInvoiceFormatSectionModelCol2FieldEnum = VendorInvoiceFormatSectionModelCol2FieldEnum = {}));
var VendorInvoiceFormatSectionModelCol3FieldEnum;
(function (VendorInvoiceFormatSectionModelCol3FieldEnum) {
    VendorInvoiceFormatSectionModelCol3FieldEnum["NONE"] = "NONE";
    VendorInvoiceFormatSectionModelCol3FieldEnum["PERSON"] = "PERSON";
    VendorInvoiceFormatSectionModelCol3FieldEnum["PROJECT"] = "PROJECT";
    VendorInvoiceFormatSectionModelCol3FieldEnum["TASK"] = "TASK";
    VendorInvoiceFormatSectionModelCol3FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    VendorInvoiceFormatSectionModelCol3FieldEnum["EXPENSE_DOCUMENT_NUMBER"] = "EXPENSE_DOCUMENT_NUMBER";
    VendorInvoiceFormatSectionModelCol3FieldEnum["LABOR_CATEGORY_NAME"] = "LABOR_CATEGORY_NAME";
    VendorInvoiceFormatSectionModelCol3FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    VendorInvoiceFormatSectionModelCol3FieldEnum["LOCATION"] = "LOCATION";
    VendorInvoiceFormatSectionModelCol3FieldEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    VendorInvoiceFormatSectionModelCol3FieldEnum["PURCHASE_ORDER_LINE"] = "PURCHASE_ORDER_LINE";
    VendorInvoiceFormatSectionModelCol3FieldEnum["ITEM"] = "ITEM";
    VendorInvoiceFormatSectionModelCol3FieldEnum["DESCRIPTION"] = "DESCRIPTION";
})(VendorInvoiceFormatSectionModelCol3FieldEnum || (exports.VendorInvoiceFormatSectionModelCol3FieldEnum = VendorInvoiceFormatSectionModelCol3FieldEnum = {}));
var VendorInvoiceFormatSectionModelCol4FieldEnum;
(function (VendorInvoiceFormatSectionModelCol4FieldEnum) {
    VendorInvoiceFormatSectionModelCol4FieldEnum["NONE"] = "NONE";
    VendorInvoiceFormatSectionModelCol4FieldEnum["PERSON"] = "PERSON";
    VendorInvoiceFormatSectionModelCol4FieldEnum["PROJECT"] = "PROJECT";
    VendorInvoiceFormatSectionModelCol4FieldEnum["TASK"] = "TASK";
    VendorInvoiceFormatSectionModelCol4FieldEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    VendorInvoiceFormatSectionModelCol4FieldEnum["EXPENSE_DOCUMENT_NUMBER"] = "EXPENSE_DOCUMENT_NUMBER";
    VendorInvoiceFormatSectionModelCol4FieldEnum["LABOR_CATEGORY_NAME"] = "LABOR_CATEGORY_NAME";
    VendorInvoiceFormatSectionModelCol4FieldEnum["LABOR_CATEGORY_DESCRIPTION"] = "LABOR_CATEGORY_DESCRIPTION";
    VendorInvoiceFormatSectionModelCol4FieldEnum["LOCATION"] = "LOCATION";
    VendorInvoiceFormatSectionModelCol4FieldEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    VendorInvoiceFormatSectionModelCol4FieldEnum["PURCHASE_ORDER_LINE"] = "PURCHASE_ORDER_LINE";
    VendorInvoiceFormatSectionModelCol4FieldEnum["ITEM"] = "ITEM";
    VendorInvoiceFormatSectionModelCol4FieldEnum["DESCRIPTION"] = "DESCRIPTION";
})(VendorInvoiceFormatSectionModelCol4FieldEnum || (exports.VendorInvoiceFormatSectionModelCol4FieldEnum = VendorInvoiceFormatSectionModelCol4FieldEnum = {}));
var VendorInvoiceFormatSectionTotalGroupModelTypeEnum;
(function (VendorInvoiceFormatSectionTotalGroupModelTypeEnum) {
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["LABOR_DETAILS"] = "LABOR_DETAILS";
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["EXPENSE_DETAILS"] = "EXPENSE_DETAILS";
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["MATCHED_LABOR"] = "MATCHED_LABOR";
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["MATCHED_EXPENSES"] = "MATCHED_EXPENSES";
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["ITEM_DETAILS"] = "ITEM_DETAILS";
    VendorInvoiceFormatSectionTotalGroupModelTypeEnum["PO_FUNDING_CAP_ADJUSTMENTS"] = "PO_FUNDING_CAP_ADJUSTMENTS";
})(VendorInvoiceFormatSectionTotalGroupModelTypeEnum || (exports.VendorInvoiceFormatSectionTotalGroupModelTypeEnum = VendorInvoiceFormatSectionTotalGroupModelTypeEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceItemModelPwpMatchingTypeEnum;
(function (VendorInvoiceItemModelPwpMatchingTypeEnum) {
    VendorInvoiceItemModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceItemModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceItemModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceItemModelPwpMatchingTypeEnum || (exports.VendorInvoiceItemModelPwpMatchingTypeEnum = VendorInvoiceItemModelPwpMatchingTypeEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceLaborModelPwpMatchingTypeEnum;
(function (VendorInvoiceLaborModelPwpMatchingTypeEnum) {
    VendorInvoiceLaborModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceLaborModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceLaborModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceLaborModelPwpMatchingTypeEnum || (exports.VendorInvoiceLaborModelPwpMatchingTypeEnum = VendorInvoiceLaborModelPwpMatchingTypeEnum = {}));
/** how labor category should be used */
var VendorInvoiceLaborProjectModelUseLaborCategoryEnum;
(function (VendorInvoiceLaborProjectModelUseLaborCategoryEnum) {
    VendorInvoiceLaborProjectModelUseLaborCategoryEnum["REQUIRED"] = "REQUIRED";
    VendorInvoiceLaborProjectModelUseLaborCategoryEnum["FORBIDDEN"] = "FORBIDDEN";
    VendorInvoiceLaborProjectModelUseLaborCategoryEnum["OPTIONAL"] = "OPTIONAL";
})(VendorInvoiceLaborProjectModelUseLaborCategoryEnum || (exports.VendorInvoiceLaborProjectModelUseLaborCategoryEnum = VendorInvoiceLaborProjectModelUseLaborCategoryEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum;
(function (VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum) {
    VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum || (exports.VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum = VendorInvoiceMatchedExpenseElementModelPwpMatchingTypeEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum;
(function (VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum) {
    VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum || (exports.VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum = VendorInvoiceMatchedItemElementModelPwpMatchingTypeEnum = {}));
/** Pay-When-Paid customer invoice matching type. */
var VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum;
(function (VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum) {
    VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum["AUTO"] = "AUTO";
    VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum["MANUAL"] = "MANUAL";
    VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum["NA"] = "NA";
})(VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum || (exports.VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum = VendorInvoiceMatchedLaborElementModelPwpMatchingTypeEnum = {}));
/**
 * Determines the type of search performed for a provided reference number.
 * @default "EQUALS"
 */
var VendorInvoiceSearchModelReferencePredicateEnum;
(function (VendorInvoiceSearchModelReferencePredicateEnum) {
    VendorInvoiceSearchModelReferencePredicateEnum["EQUALS"] = "EQUALS";
    VendorInvoiceSearchModelReferencePredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    VendorInvoiceSearchModelReferencePredicateEnum["CONTAINS"] = "CONTAINS";
    VendorInvoiceSearchModelReferencePredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    VendorInvoiceSearchModelReferencePredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(VendorInvoiceSearchModelReferencePredicateEnum || (exports.VendorInvoiceSearchModelReferencePredicateEnum = VendorInvoiceSearchModelReferencePredicateEnum = {}));
var VendorInvoiceSearchModelStatusesEnum;
(function (VendorInvoiceSearchModelStatusesEnum) {
    VendorInvoiceSearchModelStatusesEnum["INUSE"] = "INUSE";
    VendorInvoiceSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    VendorInvoiceSearchModelStatusesEnum["POSTED"] = "POSTED";
    VendorInvoiceSearchModelStatusesEnum["APPROVED"] = "APPROVED";
    VendorInvoiceSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    VendorInvoiceSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
})(VendorInvoiceSearchModelStatusesEnum || (exports.VendorInvoiceSearchModelStatusesEnum = VendorInvoiceSearchModelStatusesEnum = {}));
/** Order to apply for document number sort. Defaults to ASC */
var VendorInvoiceSearchModelSortOrderEnum;
(function (VendorInvoiceSearchModelSortOrderEnum) {
    VendorInvoiceSearchModelSortOrderEnum["ASC"] = "ASC";
    VendorInvoiceSearchModelSortOrderEnum["DESC"] = "DESC";
})(VendorInvoiceSearchModelSortOrderEnum || (exports.VendorInvoiceSearchModelSortOrderEnum = VendorInvoiceSearchModelSortOrderEnum = {}));
var VendorInvoiceSummaryListModelDocumentTypeEnum;
(function (VendorInvoiceSummaryListModelDocumentTypeEnum) {
    VendorInvoiceSummaryListModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    VendorInvoiceSummaryListModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    VendorInvoiceSummaryListModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    VendorInvoiceSummaryListModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    VendorInvoiceSummaryListModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(VendorInvoiceSummaryListModelDocumentTypeEnum || (exports.VendorInvoiceSummaryListModelDocumentTypeEnum = VendorInvoiceSummaryListModelDocumentTypeEnum = {}));
var VendorInvoiceSummaryListModelStatusEnum;
(function (VendorInvoiceSummaryListModelStatusEnum) {
    VendorInvoiceSummaryListModelStatusEnum["INUSE"] = "INUSE";
    VendorInvoiceSummaryListModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    VendorInvoiceSummaryListModelStatusEnum["POSTED"] = "POSTED";
    VendorInvoiceSummaryListModelStatusEnum["APPROVED"] = "APPROVED";
    VendorInvoiceSummaryListModelStatusEnum["APPROVING"] = "APPROVING";
    VendorInvoiceSummaryListModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(VendorInvoiceSummaryListModelStatusEnum || (exports.VendorInvoiceSummaryListModelStatusEnum = VendorInvoiceSummaryListModelStatusEnum = {}));
var VendorInvoiceSummaryModelDocumentTypeEnum;
(function (VendorInvoiceSummaryModelDocumentTypeEnum) {
    VendorInvoiceSummaryModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    VendorInvoiceSummaryModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    VendorInvoiceSummaryModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    VendorInvoiceSummaryModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    VendorInvoiceSummaryModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(VendorInvoiceSummaryModelDocumentTypeEnum || (exports.VendorInvoiceSummaryModelDocumentTypeEnum = VendorInvoiceSummaryModelDocumentTypeEnum = {}));
var VendorInvoiceSummaryModelStatusEnum;
(function (VendorInvoiceSummaryModelStatusEnum) {
    VendorInvoiceSummaryModelStatusEnum["INUSE"] = "INUSE";
    VendorInvoiceSummaryModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    VendorInvoiceSummaryModelStatusEnum["POSTED"] = "POSTED";
    VendorInvoiceSummaryModelStatusEnum["APPROVED"] = "APPROVED";
    VendorInvoiceSummaryModelStatusEnum["APPROVING"] = "APPROVING";
    VendorInvoiceSummaryModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(VendorInvoiceSummaryModelStatusEnum || (exports.VendorInvoiceSummaryModelStatusEnum = VendorInvoiceSummaryModelStatusEnum = {}));
/** Document type of the included vendor document. */
var VendorPaymentIncludedModelDocumentTypeEnum;
(function (VendorPaymentIncludedModelDocumentTypeEnum) {
    VendorPaymentIncludedModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    VendorPaymentIncludedModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
})(VendorPaymentIncludedModelDocumentTypeEnum || (exports.VendorPaymentIncludedModelDocumentTypeEnum = VendorPaymentIncludedModelDocumentTypeEnum = {}));
var VendorPaymentModelDocumentTypeEnum;
(function (VendorPaymentModelDocumentTypeEnum) {
    VendorPaymentModelDocumentTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    VendorPaymentModelDocumentTypeEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    VendorPaymentModelDocumentTypeEnum["CUSTOMER_PAYMENT"] = "CUSTOMER_PAYMENT";
    VendorPaymentModelDocumentTypeEnum["DEPOSIT"] = "DEPOSIT";
    VendorPaymentModelDocumentTypeEnum["JOURNAL_ENTRY"] = "JOURNAL_ENTRY";
})(VendorPaymentModelDocumentTypeEnum || (exports.VendorPaymentModelDocumentTypeEnum = VendorPaymentModelDocumentTypeEnum = {}));
var VendorPaymentModelStatusEnum;
(function (VendorPaymentModelStatusEnum) {
    VendorPaymentModelStatusEnum["INUSE"] = "INUSE";
    VendorPaymentModelStatusEnum["SUBMITTED"] = "SUBMITTED";
    VendorPaymentModelStatusEnum["POSTED"] = "POSTED";
    VendorPaymentModelStatusEnum["APPROVED"] = "APPROVED";
    VendorPaymentModelStatusEnum["APPROVING"] = "APPROVING";
    VendorPaymentModelStatusEnum["DISAPPROVED"] = "DISAPPROVED";
})(VendorPaymentModelStatusEnum || (exports.VendorPaymentModelStatusEnum = VendorPaymentModelStatusEnum = {}));
/** Search on a list of document statuses */
var VendorPaymentSearchModelStatusesEnum;
(function (VendorPaymentSearchModelStatusesEnum) {
    VendorPaymentSearchModelStatusesEnum["INUSE"] = "INUSE";
    VendorPaymentSearchModelStatusesEnum["SUBMITTED"] = "SUBMITTED";
    VendorPaymentSearchModelStatusesEnum["POSTED"] = "POSTED";
    VendorPaymentSearchModelStatusesEnum["APPROVED"] = "APPROVED";
    VendorPaymentSearchModelStatusesEnum["APPROVING"] = "APPROVING";
    VendorPaymentSearchModelStatusesEnum["DISAPPROVED"] = "DISAPPROVED";
})(VendorPaymentSearchModelStatusesEnum || (exports.VendorPaymentSearchModelStatusesEnum = VendorPaymentSearchModelStatusesEnum = {}));
var GetParamsTypeEnum;
(function (GetParamsTypeEnum) {
    GetParamsTypeEnum["ASSET"] = "ASSET";
    GetParamsTypeEnum["EXPENSE"] = "EXPENSE";
    GetParamsTypeEnum["REVENUE"] = "REVENUE";
    GetParamsTypeEnum["LIABILITY"] = "LIABILITY";
})(GetParamsTypeEnum || (exports.GetParamsTypeEnum = GetParamsTypeEnum = {}));
/** Optional approval group type search criterion. */
var Get1ParamsApprovalGroupTypeEnum;
(function (Get1ParamsApprovalGroupTypeEnum) {
    Get1ParamsApprovalGroupTypeEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    Get1ParamsApprovalGroupTypeEnum["PURCHASING"] = "PURCHASING";
    Get1ParamsApprovalGroupTypeEnum["TIME_AND_EXPENSE"] = "TIME_AND_EXPENSE";
    Get1ParamsApprovalGroupTypeEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
})(Get1ParamsApprovalGroupTypeEnum || (exports.Get1ParamsApprovalGroupTypeEnum = Get1ParamsApprovalGroupTypeEnum = {}));
var CreateAssigningListCriteriaParamsDashboardEnum;
(function (CreateAssigningListCriteriaParamsDashboardEnum) {
    CreateAssigningListCriteriaParamsDashboardEnum["HOME"] = "HOME";
    CreateAssigningListCriteriaParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    CreateAssigningListCriteriaParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    CreateAssigningListCriteriaParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    CreateAssigningListCriteriaParamsDashboardEnum["PROJECT"] = "PROJECT";
    CreateAssigningListCriteriaParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    CreateAssigningListCriteriaParamsDashboardEnum["TIME"] = "TIME";
    CreateAssigningListCriteriaParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    CreateAssigningListCriteriaParamsDashboardEnum["FORECAST"] = "FORECAST";
    CreateAssigningListCriteriaParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    CreateAssigningListCriteriaParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    CreateAssigningListCriteriaParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    CreateAssigningListCriteriaParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    CreateAssigningListCriteriaParamsDashboardEnum["BILLING"] = "BILLING";
    CreateAssigningListCriteriaParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    CreateAssigningListCriteriaParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    CreateAssigningListCriteriaParamsDashboardEnum["ADMIN"] = "ADMIN";
    CreateAssigningListCriteriaParamsDashboardEnum["REPORTS"] = "REPORTS";
})(CreateAssigningListCriteriaParamsDashboardEnum || (exports.CreateAssigningListCriteriaParamsDashboardEnum = CreateAssigningListCriteriaParamsDashboardEnum = {}));
var UpdateAssigningListCriteriaByKeyParamsDashboardEnum;
(function (UpdateAssigningListCriteriaByKeyParamsDashboardEnum) {
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["HOME"] = "HOME";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["PROJECT"] = "PROJECT";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["TIME"] = "TIME";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["FORECAST"] = "FORECAST";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["BILLING"] = "BILLING";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["ADMIN"] = "ADMIN";
    UpdateAssigningListCriteriaByKeyParamsDashboardEnum["REPORTS"] = "REPORTS";
})(UpdateAssigningListCriteriaByKeyParamsDashboardEnum || (exports.UpdateAssigningListCriteriaByKeyParamsDashboardEnum = UpdateAssigningListCriteriaByKeyParamsDashboardEnum = {}));
var DeleteAssigningListCriteriaFamilyEnum;
(function (DeleteAssigningListCriteriaFamilyEnum) {
    DeleteAssigningListCriteriaFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    DeleteAssigningListCriteriaFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    DeleteAssigningListCriteriaFamilyEnum["REDIRECTION"] = "REDIRECTION";
    DeleteAssigningListCriteriaFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    DeleteAssigningListCriteriaFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    DeleteAssigningListCriteriaFamilyEnum["OTHER"] = "OTHER";
})(DeleteAssigningListCriteriaFamilyEnum || (exports.DeleteAssigningListCriteriaFamilyEnum = DeleteAssigningListCriteriaFamilyEnum = {}));
var DeleteAssigningSharedCriteriaFamilyEnum;
(function (DeleteAssigningSharedCriteriaFamilyEnum) {
    DeleteAssigningSharedCriteriaFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    DeleteAssigningSharedCriteriaFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    DeleteAssigningSharedCriteriaFamilyEnum["REDIRECTION"] = "REDIRECTION";
    DeleteAssigningSharedCriteriaFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    DeleteAssigningSharedCriteriaFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    DeleteAssigningSharedCriteriaFamilyEnum["OTHER"] = "OTHER";
})(DeleteAssigningSharedCriteriaFamilyEnum || (exports.DeleteAssigningSharedCriteriaFamilyEnum = DeleteAssigningSharedCriteriaFamilyEnum = {}));
var SearchAndDownloadFamilyEnum;
(function (SearchAndDownloadFamilyEnum) {
    SearchAndDownloadFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    SearchAndDownloadFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    SearchAndDownloadFamilyEnum["REDIRECTION"] = "REDIRECTION";
    SearchAndDownloadFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    SearchAndDownloadFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    SearchAndDownloadFamilyEnum["OTHER"] = "OTHER";
})(SearchAndDownloadFamilyEnum || (exports.SearchAndDownloadFamilyEnum = SearchAndDownloadFamilyEnum = {}));
var GetLogoByTypeParamsLogoTypeEnum;
(function (GetLogoByTypeParamsLogoTypeEnum) {
    GetLogoByTypeParamsLogoTypeEnum["FINANCIAL_FORMS"] = "FINANCIAL_FORMS";
    GetLogoByTypeParamsLogoTypeEnum["LOGIN_SCREEN"] = "LOGIN_SCREEN";
    GetLogoByTypeParamsLogoTypeEnum["REPORT"] = "REPORT";
    GetLogoByTypeParamsLogoTypeEnum["TIMESHEET_PREVIEW"] = "TIMESHEET_PREVIEW";
    GetLogoByTypeParamsLogoTypeEnum["CUSTOMER_LOGO"] = "CUSTOMER_LOGO";
})(GetLogoByTypeParamsLogoTypeEnum || (exports.GetLogoByTypeParamsLogoTypeEnum = GetLogoByTypeParamsLogoTypeEnum = {}));
var UdfMetadataParamsTypeEnum;
(function (UdfMetadataParamsTypeEnum) {
    UdfMetadataParamsTypeEnum["ORGANIZATION"] = "ORGANIZATION";
    UdfMetadataParamsTypeEnum["PERSON"] = "PERSON";
    UdfMetadataParamsTypeEnum["PROJECT"] = "PROJECT";
    UdfMetadataParamsTypeEnum["TASK"] = "TASK";
    UdfMetadataParamsTypeEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    UdfMetadataParamsTypeEnum["PROJECT_NOTE"] = "PROJECT_NOTE";
    UdfMetadataParamsTypeEnum["CUSTOMER_ORG"] = "CUSTOMER_ORG";
    UdfMetadataParamsTypeEnum["VENDOR_ORG"] = "VENDOR_ORG";
    UdfMetadataParamsTypeEnum["ORG_CONTACT"] = "ORG_CONTACT";
    UdfMetadataParamsTypeEnum["SHARED_DOC"] = "SHARED_DOC";
    UdfMetadataParamsTypeEnum["PURCHASE_REQUISITION"] = "PURCHASE_REQUISITION";
    UdfMetadataParamsTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    UdfMetadataParamsTypeEnum["FIXED_ASSET"] = "FIXED_ASSET";
    UdfMetadataParamsTypeEnum["CONTRACT"] = "CONTRACT";
})(UdfMetadataParamsTypeEnum || (exports.UdfMetadataParamsTypeEnum = UdfMetadataParamsTypeEnum = {}));
var UdfMetadataParamsEnum;
(function (UdfMetadataParamsEnum) {
    UdfMetadataParamsEnum["ORGANIZATION"] = "ORGANIZATION";
    UdfMetadataParamsEnum["PERSON"] = "PERSON";
    UdfMetadataParamsEnum["PROJECT"] = "PROJECT";
    UdfMetadataParamsEnum["TASK"] = "TASK";
    UdfMetadataParamsEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    UdfMetadataParamsEnum["PROJECT_NOTE"] = "PROJECT_NOTE";
    UdfMetadataParamsEnum["CUSTOMER_ORG"] = "CUSTOMER_ORG";
    UdfMetadataParamsEnum["VENDOR_ORG"] = "VENDOR_ORG";
    UdfMetadataParamsEnum["ORG_CONTACT"] = "ORG_CONTACT";
    UdfMetadataParamsEnum["SHARED_DOC"] = "SHARED_DOC";
    UdfMetadataParamsEnum["PURCHASE_REQUISITION"] = "PURCHASE_REQUISITION";
    UdfMetadataParamsEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    UdfMetadataParamsEnum["FIXED_ASSET"] = "FIXED_ASSET";
    UdfMetadataParamsEnum["CONTRACT"] = "CONTRACT";
})(UdfMetadataParamsEnum || (exports.UdfMetadataParamsEnum = UdfMetadataParamsEnum = {}));
/**
 * Determines the type of search performed upon clause number.
 * @default "CONTAINS"
 */
var Get6ParamsClauseNumberPredicateEnum;
(function (Get6ParamsClauseNumberPredicateEnum) {
    Get6ParamsClauseNumberPredicateEnum["EQUALS"] = "EQUALS";
    Get6ParamsClauseNumberPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    Get6ParamsClauseNumberPredicateEnum["CONTAINS"] = "CONTAINS";
    Get6ParamsClauseNumberPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    Get6ParamsClauseNumberPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(Get6ParamsClauseNumberPredicateEnum || (exports.Get6ParamsClauseNumberPredicateEnum = Get6ParamsClauseNumberPredicateEnum = {}));
/**
 * Determines the type of search performed upon description.
 * @default "CONTAINS"
 */
var Get6ParamsDescriptionPredicateEnum;
(function (Get6ParamsDescriptionPredicateEnum) {
    Get6ParamsDescriptionPredicateEnum["EQUALS"] = "EQUALS";
    Get6ParamsDescriptionPredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    Get6ParamsDescriptionPredicateEnum["CONTAINS"] = "CONTAINS";
    Get6ParamsDescriptionPredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    Get6ParamsDescriptionPredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(Get6ParamsDescriptionPredicateEnum || (exports.Get6ParamsDescriptionPredicateEnum = Get6ParamsDescriptionPredicateEnum = {}));
/**
 * Determines the type of search performed upon title.
 * @default "CONTAINS"
 */
var Get6ParamsTitlePredicateEnum;
(function (Get6ParamsTitlePredicateEnum) {
    Get6ParamsTitlePredicateEnum["EQUALS"] = "EQUALS";
    Get6ParamsTitlePredicateEnum["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    Get6ParamsTitlePredicateEnum["CONTAINS"] = "CONTAINS";
    Get6ParamsTitlePredicateEnum["STARTS_WITH"] = "STARTS_WITH";
    Get6ParamsTitlePredicateEnum["ENDS_WITH"] = "ENDS_WITH";
})(Get6ParamsTitlePredicateEnum || (exports.Get6ParamsTitlePredicateEnum = Get6ParamsTitlePredicateEnum = {}));
var GetPaidDocumentParamsTypeEnum;
(function (GetPaidDocumentParamsTypeEnum) {
    GetPaidDocumentParamsTypeEnum["PAYMENT"] = "PAYMENT";
    GetPaidDocumentParamsTypeEnum["INVOICE"] = "INVOICE";
})(GetPaidDocumentParamsTypeEnum || (exports.GetPaidDocumentParamsTypeEnum = GetPaidDocumentParamsTypeEnum = {}));
var GetPaidDocumentParamsEnum;
(function (GetPaidDocumentParamsEnum) {
    GetPaidDocumentParamsEnum["PAYMENT"] = "PAYMENT";
    GetPaidDocumentParamsEnum["INVOICE"] = "INVOICE";
})(GetPaidDocumentParamsEnum || (exports.GetPaidDocumentParamsEnum = GetPaidDocumentParamsEnum = {}));
var DeletePaidDocumentParamsTypeEnum;
(function (DeletePaidDocumentParamsTypeEnum) {
    DeletePaidDocumentParamsTypeEnum["PAYMENT"] = "PAYMENT";
    DeletePaidDocumentParamsTypeEnum["INVOICE"] = "INVOICE";
})(DeletePaidDocumentParamsTypeEnum || (exports.DeletePaidDocumentParamsTypeEnum = DeletePaidDocumentParamsTypeEnum = {}));
var DeletePaidDocumentParamsEnum;
(function (DeletePaidDocumentParamsEnum) {
    DeletePaidDocumentParamsEnum["PAYMENT"] = "PAYMENT";
    DeletePaidDocumentParamsEnum["INVOICE"] = "INVOICE";
})(DeletePaidDocumentParamsEnum || (exports.DeletePaidDocumentParamsEnum = DeletePaidDocumentParamsEnum = {}));
var Get12ParamsLinkTypeEnum;
(function (Get12ParamsLinkTypeEnum) {
    Get12ParamsLinkTypeEnum["COMPANY"] = "COMPANY";
    Get12ParamsLinkTypeEnum["QUICK"] = "QUICK";
    Get12ParamsLinkTypeEnum["REPORT"] = "REPORT";
    Get12ParamsLinkTypeEnum["HOW_TO"] = "HOW_TO";
    Get12ParamsLinkTypeEnum["TIP"] = "TIP";
})(Get12ParamsLinkTypeEnum || (exports.Get12ParamsLinkTypeEnum = Get12ParamsLinkTypeEnum = {}));
var Delete7FamilyEnum;
(function (Delete7FamilyEnum) {
    Delete7FamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    Delete7FamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    Delete7FamilyEnum["REDIRECTION"] = "REDIRECTION";
    Delete7FamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    Delete7FamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    Delete7FamilyEnum["OTHER"] = "OTHER";
})(Delete7FamilyEnum || (exports.Delete7FamilyEnum = Delete7FamilyEnum = {}));
var GetEmailTemplatesParamsTypeEnum;
(function (GetEmailTemplatesParamsTypeEnum) {
    GetEmailTemplatesParamsTypeEnum["NOTIFICATION"] = "NOTIFICATION";
    GetEmailTemplatesParamsTypeEnum["REMINDER_BROADCAST"] = "REMINDER_BROADCAST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_CUST"] = "REMINDER_EXPENSE_CUST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_MGR"] = "REMINDER_EXPENSE_MGR";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_PM"] = "REMINDER_EXPENSE_PM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_CUST"] = "REMINDER_TIMESHEET_CUST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_MGR"] = "REMINDER_TIMESHEET_MGR";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_PM"] = "REMINDER_TIMESHEET_PM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_SUBMIT"] = "REMINDER_TIMESHEET_SUBMIT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_MINIMUM"] = "REMINDER_TIMESHEET_MINIMUM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_CUST_ALT"] = "REMINDER_EXPENSE_CUST_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_MGR_ALT"] = "REMINDER_EXPENSE_MGR_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_EXPENSE_PM_ALT"] = "REMINDER_EXPENSE_PM_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_CUST_ALT"] = "REMINDER_TIMESHEET_CUST_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_MGR_ALT"] = "REMINDER_TIMESHEET_MGR_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_TIMESHEET_PM_ALT"] = "REMINDER_TIMESHEET_PM_ALT";
    GetEmailTemplatesParamsTypeEnum["INVOICE_SEND"] = "INVOICE_SEND";
    GetEmailTemplatesParamsTypeEnum["PURCHASE_ORDER_SEND"] = "PURCHASE_ORDER_SEND";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_CUST"] = "REMINDER_PO_CUST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_CUST_ALT"] = "REMINDER_PO_CUST_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_MGR"] = "REMINDER_PO_MGR";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_MGR_ALT"] = "REMINDER_PO_MGR_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_PM"] = "REMINDER_PO_PM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PO_PM_ALT"] = "REMINDER_PO_PM_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_CUST"] = "REMINDER_PR_CUST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_CUST_ALT"] = "REMINDER_PR_CUST_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_MGR"] = "REMINDER_PR_MGR";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_MGR_ALT"] = "REMINDER_PR_MGR_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_PM"] = "REMINDER_PR_PM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_PR_PM_ALT"] = "REMINDER_PR_PM_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_CUST"] = "REMINDER_VI_CUST";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_CUST_ALT"] = "REMINDER_VI_CUST_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_MGR"] = "REMINDER_VI_MGR";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_MGR_ALT"] = "REMINDER_VI_MGR_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_PM"] = "REMINDER_VI_PM";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_PM_ALT"] = "REMINDER_VI_PM_ALT";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_RECEIVER_APPROVER"] = "REMINDER_VI_RECEIVER_APPROVER";
    GetEmailTemplatesParamsTypeEnum["REMINDER_VI_RECEIVER_APPROVER_ALT"] = "REMINDER_VI_RECEIVER_APPROVER_ALT";
    GetEmailTemplatesParamsTypeEnum["UNPAID_INVOICE_REMINDER"] = "UNPAID_INVOICE_REMINDER";
    GetEmailTemplatesParamsTypeEnum["SUBK_NOTIFICATION"] = "SUBK_NOTIFICATION";
})(GetEmailTemplatesParamsTypeEnum || (exports.GetEmailTemplatesParamsTypeEnum = GetEmailTemplatesParamsTypeEnum = {}));
/**
 * Optional voucher type to distinguish between projects for expense reports or expense requests, defaults to expense reports.
 * @default "EXPENSE_REPORT"
 */
var GetProjectsByOwnerKeyParamsVoucherTypeEnum;
(function (GetProjectsByOwnerKeyParamsVoucherTypeEnum) {
    GetProjectsByOwnerKeyParamsVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    GetProjectsByOwnerKeyParamsVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(GetProjectsByOwnerKeyParamsVoucherTypeEnum || (exports.GetProjectsByOwnerKeyParamsVoucherTypeEnum = GetProjectsByOwnerKeyParamsVoucherTypeEnum = {}));
/**  filter by wizard type. */
var Get15ParamsWizardTypeEnum;
(function (Get15ParamsWizardTypeEnum) {
    Get15ParamsWizardTypeEnum["ADVANCE"] = "ADVANCE";
    Get15ParamsWizardTypeEnum["AIR"] = "AIR";
    Get15ParamsWizardTypeEnum["CASH_RETURN"] = "CASH_RETURN";
    Get15ParamsWizardTypeEnum["CELL_PHONE"] = "CELL_PHONE";
    Get15ParamsWizardTypeEnum["COMPANY_CAR"] = "COMPANY_CAR";
    Get15ParamsWizardTypeEnum["EMP_BUS_MTG"] = "EMP_BUS_MTG";
    Get15ParamsWizardTypeEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    Get15ParamsWizardTypeEnum["LODGING"] = "LODGING";
    Get15ParamsWizardTypeEnum["LODGING_ALLOWABLE"] = "LODGING_ALLOWABLE";
    Get15ParamsWizardTypeEnum["LODGING_PER_DIEM"] = "LODGING_PER_DIEM";
    Get15ParamsWizardTypeEnum["MIE_ALLOWABLE"] = "MIE_ALLOWABLE";
    Get15ParamsWizardTypeEnum["MIE_PER_DIEM"] = "MIE_PER_DIEM";
    Get15ParamsWizardTypeEnum["MILEAGE"] = "MILEAGE";
})(Get15ParamsWizardTypeEnum || (exports.Get15ParamsWizardTypeEnum = Get15ParamsWizardTypeEnum = {}));
var CreateFixedAssetListCriteriaParamsDashboardEnum;
(function (CreateFixedAssetListCriteriaParamsDashboardEnum) {
    CreateFixedAssetListCriteriaParamsDashboardEnum["HOME"] = "HOME";
    CreateFixedAssetListCriteriaParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    CreateFixedAssetListCriteriaParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    CreateFixedAssetListCriteriaParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    CreateFixedAssetListCriteriaParamsDashboardEnum["PROJECT"] = "PROJECT";
    CreateFixedAssetListCriteriaParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    CreateFixedAssetListCriteriaParamsDashboardEnum["TIME"] = "TIME";
    CreateFixedAssetListCriteriaParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    CreateFixedAssetListCriteriaParamsDashboardEnum["FORECAST"] = "FORECAST";
    CreateFixedAssetListCriteriaParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    CreateFixedAssetListCriteriaParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    CreateFixedAssetListCriteriaParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    CreateFixedAssetListCriteriaParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    CreateFixedAssetListCriteriaParamsDashboardEnum["BILLING"] = "BILLING";
    CreateFixedAssetListCriteriaParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    CreateFixedAssetListCriteriaParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    CreateFixedAssetListCriteriaParamsDashboardEnum["ADMIN"] = "ADMIN";
    CreateFixedAssetListCriteriaParamsDashboardEnum["REPORTS"] = "REPORTS";
})(CreateFixedAssetListCriteriaParamsDashboardEnum || (exports.CreateFixedAssetListCriteriaParamsDashboardEnum = CreateFixedAssetListCriteriaParamsDashboardEnum = {}));
var UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum;
(function (UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum) {
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["HOME"] = "HOME";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["PROJECT"] = "PROJECT";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["TIME"] = "TIME";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["FORECAST"] = "FORECAST";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["BILLING"] = "BILLING";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["ADMIN"] = "ADMIN";
    UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum["REPORTS"] = "REPORTS";
})(UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum || (exports.UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum = UpdateFixedAssetListCriteriaByKeyParamsDashboardEnum = {}));
var DeleteFixedAssetListCriteriaFamilyEnum;
(function (DeleteFixedAssetListCriteriaFamilyEnum) {
    DeleteFixedAssetListCriteriaFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    DeleteFixedAssetListCriteriaFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    DeleteFixedAssetListCriteriaFamilyEnum["REDIRECTION"] = "REDIRECTION";
    DeleteFixedAssetListCriteriaFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    DeleteFixedAssetListCriteriaFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    DeleteFixedAssetListCriteriaFamilyEnum["OTHER"] = "OTHER";
})(DeleteFixedAssetListCriteriaFamilyEnum || (exports.DeleteFixedAssetListCriteriaFamilyEnum = DeleteFixedAssetListCriteriaFamilyEnum = {}));
var GetJournalEntriesByFixedAssetParamsCategoryEnum;
(function (GetJournalEntriesByFixedAssetParamsCategoryEnum) {
    GetJournalEntriesByFixedAssetParamsCategoryEnum["BILLED"] = "BILLED";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["TAX"] = "TAX";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["UNBILLED"] = "UNBILLED";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["LABOR_COST"] = "LABOR_COST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["NET_INCOME"] = "NET_INCOME";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["PILOB"] = "PILOB";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["DUE_TO"] = "DUE_TO";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["DUE_FROM"] = "DUE_FROM";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    GetJournalEntriesByFixedAssetParamsCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(GetJournalEntriesByFixedAssetParamsCategoryEnum || (exports.GetJournalEntriesByFixedAssetParamsCategoryEnum = GetJournalEntriesByFixedAssetParamsCategoryEnum = {}));
var GetIntegrationValuesParamsTypeEnum;
(function (GetIntegrationValuesParamsTypeEnum) {
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    GetIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    GetIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    GetIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    GetIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    GetIntegrationValuesParamsTypeEnum["ITEM"] = "ITEM";
})(GetIntegrationValuesParamsTypeEnum || (exports.GetIntegrationValuesParamsTypeEnum = GetIntegrationValuesParamsTypeEnum = {}));
var GetIntegrationValuesParamsEnum;
(function (GetIntegrationValuesParamsEnum) {
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    GetIntegrationValuesParamsEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    GetIntegrationValuesParamsEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    GetIntegrationValuesParamsEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    GetIntegrationValuesParamsEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    GetIntegrationValuesParamsEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    GetIntegrationValuesParamsEnum["ITEM"] = "ITEM";
})(GetIntegrationValuesParamsEnum || (exports.GetIntegrationValuesParamsEnum = GetIntegrationValuesParamsEnum = {}));
var CreateIntegrationValueParamsTypeEnum;
(function (CreateIntegrationValueParamsTypeEnum) {
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    CreateIntegrationValueParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    CreateIntegrationValueParamsTypeEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    CreateIntegrationValueParamsTypeEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    CreateIntegrationValueParamsTypeEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    CreateIntegrationValueParamsTypeEnum["ITEM"] = "ITEM";
})(CreateIntegrationValueParamsTypeEnum || (exports.CreateIntegrationValueParamsTypeEnum = CreateIntegrationValueParamsTypeEnum = {}));
var CreateIntegrationValueParamsEnum;
(function (CreateIntegrationValueParamsEnum) {
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    CreateIntegrationValueParamsEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    CreateIntegrationValueParamsEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    CreateIntegrationValueParamsEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    CreateIntegrationValueParamsEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    CreateIntegrationValueParamsEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    CreateIntegrationValueParamsEnum["ITEM"] = "ITEM";
})(CreateIntegrationValueParamsEnum || (exports.CreateIntegrationValueParamsEnum = CreateIntegrationValueParamsEnum = {}));
var GetIntegrationValueByKeyParamsTypeEnum;
(function (GetIntegrationValueByKeyParamsTypeEnum) {
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    GetIntegrationValueByKeyParamsTypeEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    GetIntegrationValueByKeyParamsTypeEnum["ITEM"] = "ITEM";
})(GetIntegrationValueByKeyParamsTypeEnum || (exports.GetIntegrationValueByKeyParamsTypeEnum = GetIntegrationValueByKeyParamsTypeEnum = {}));
var GetIntegrationValueByKeyParamsEnum;
(function (GetIntegrationValueByKeyParamsEnum) {
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    GetIntegrationValueByKeyParamsEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    GetIntegrationValueByKeyParamsEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    GetIntegrationValueByKeyParamsEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    GetIntegrationValueByKeyParamsEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    GetIntegrationValueByKeyParamsEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    GetIntegrationValueByKeyParamsEnum["ITEM"] = "ITEM";
})(GetIntegrationValueByKeyParamsEnum || (exports.GetIntegrationValueByKeyParamsEnum = GetIntegrationValueByKeyParamsEnum = {}));
var DeleteIntegrationValuesParamsTypeEnum;
(function (DeleteIntegrationValuesParamsTypeEnum) {
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    DeleteIntegrationValuesParamsTypeEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsTypeEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    DeleteIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    DeleteIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    DeleteIntegrationValuesParamsTypeEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    DeleteIntegrationValuesParamsTypeEnum["ITEM"] = "ITEM";
})(DeleteIntegrationValuesParamsTypeEnum || (exports.DeleteIntegrationValuesParamsTypeEnum = DeleteIntegrationValuesParamsTypeEnum = {}));
var DeleteIntegrationValuesParamsEnum;
(function (DeleteIntegrationValuesParamsEnum) {
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER"] = "PURCHASE_ORDER";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_ITEM_LINE"] = "PURCHASE_ORDER_ITEM_LINE";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_ITEM_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_LABOR_LINE"] = "PURCHASE_ORDER_LABOR_LINE";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_LABOR_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_EXPENSE_LINE"] = "PURCHASE_ORDER_EXPENSE_LINE";
    DeleteIntegrationValuesParamsEnum["PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR"] = "PURCHASE_ORDER_EXPENSE_LINE_DESCRIPTOR";
    DeleteIntegrationValuesParamsEnum["VENDOR_INVOICE"] = "VENDOR_INVOICE";
    DeleteIntegrationValuesParamsEnum["VENDOR_INVOICE_ITEM_LINE"] = "VENDOR_INVOICE_ITEM_LINE";
    DeleteIntegrationValuesParamsEnum["VENDOR_INVOICE_LABOR_LINE"] = "VENDOR_INVOICE_LABOR_LINE";
    DeleteIntegrationValuesParamsEnum["VENDOR_INVOICE_EXPENSE_LINE"] = "VENDOR_INVOICE_EXPENSE_LINE";
    DeleteIntegrationValuesParamsEnum["ITEM"] = "ITEM";
})(DeleteIntegrationValuesParamsEnum || (exports.DeleteIntegrationValuesParamsEnum = DeleteIntegrationValuesParamsEnum = {}));
var LeaveRequestsParamsStatusEnum;
(function (LeaveRequestsParamsStatusEnum) {
    LeaveRequestsParamsStatusEnum["INUSE"] = "INUSE";
    LeaveRequestsParamsStatusEnum["SUBMITTED"] = "SUBMITTED";
    LeaveRequestsParamsStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    LeaveRequestsParamsStatusEnum["APPROVING"] = "APPROVING";
    LeaveRequestsParamsStatusEnum["COMPLETED"] = "COMPLETED";
    LeaveRequestsParamsStatusEnum["LOCKED"] = "LOCKED";
    LeaveRequestsParamsStatusEnum["CANCELED"] = "CANCELED";
})(LeaveRequestsParamsStatusEnum || (exports.LeaveRequestsParamsStatusEnum = LeaveRequestsParamsStatusEnum = {}));
var MeExpenseParamsStatusEnum;
(function (MeExpenseParamsStatusEnum) {
    MeExpenseParamsStatusEnum["REQUESTING"] = "REQUESTING";
    MeExpenseParamsStatusEnum["DENIED"] = "DENIED";
    MeExpenseParamsStatusEnum["PREAPPROVING"] = "PREAPPROVING";
    MeExpenseParamsStatusEnum["PREAPPROVED"] = "PREAPPROVED";
    MeExpenseParamsStatusEnum["INUSE"] = "INUSE";
    MeExpenseParamsStatusEnum["SUBMITTED"] = "SUBMITTED";
    MeExpenseParamsStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    MeExpenseParamsStatusEnum["APPROVING"] = "APPROVING";
    MeExpenseParamsStatusEnum["COMPLETED"] = "COMPLETED";
    MeExpenseParamsStatusEnum["EXTRACTED"] = "EXTRACTED";
    MeExpenseParamsStatusEnum["LOCKED"] = "LOCKED";
    MeExpenseParamsStatusEnum["PENDING_REVIEW"] = "PENDING_REVIEW";
    MeExpenseParamsStatusEnum["REQUEST_SUBMITTED"] = "REQUEST_SUBMITTED";
})(MeExpenseParamsStatusEnum || (exports.MeExpenseParamsStatusEnum = MeExpenseParamsStatusEnum = {}));
var MeExpenseParamsVoucherTypeEnum;
(function (MeExpenseParamsVoucherTypeEnum) {
    MeExpenseParamsVoucherTypeEnum["EXPENSE_REPORT"] = "EXPENSE_REPORT";
    MeExpenseParamsVoucherTypeEnum["EXPENSE_REQUEST"] = "EXPENSE_REQUEST";
})(MeExpenseParamsVoucherTypeEnum || (exports.MeExpenseParamsVoucherTypeEnum = MeExpenseParamsVoucherTypeEnum = {}));
var MyLeaveRequestsParamsStatusEnum;
(function (MyLeaveRequestsParamsStatusEnum) {
    MyLeaveRequestsParamsStatusEnum["INUSE"] = "INUSE";
    MyLeaveRequestsParamsStatusEnum["SUBMITTED"] = "SUBMITTED";
    MyLeaveRequestsParamsStatusEnum["DISAPPROVED"] = "DISAPPROVED";
    MyLeaveRequestsParamsStatusEnum["APPROVING"] = "APPROVING";
    MyLeaveRequestsParamsStatusEnum["COMPLETED"] = "COMPLETED";
    MyLeaveRequestsParamsStatusEnum["LOCKED"] = "LOCKED";
    MyLeaveRequestsParamsStatusEnum["CANCELED"] = "CANCELED";
})(MyLeaveRequestsParamsStatusEnum || (exports.MyLeaveRequestsParamsStatusEnum = MyLeaveRequestsParamsStatusEnum = {}));
/**
 * Order to apply for begin date sort. Defaults to ASC
 * @default "ASC"
 */
var MyLeaveRequestsParamsSortOrderEnum;
(function (MyLeaveRequestsParamsSortOrderEnum) {
    MyLeaveRequestsParamsSortOrderEnum["ASC"] = "ASC";
    MyLeaveRequestsParamsSortOrderEnum["DESC"] = "DESC";
})(MyLeaveRequestsParamsSortOrderEnum || (exports.MyLeaveRequestsParamsSortOrderEnum = MyLeaveRequestsParamsSortOrderEnum = {}));
/**
 * Order to apply for begin date sort. Defaults to ASC
 * @default "ASC"
 */
var MeTimeParamsSortOrderEnum;
(function (MeTimeParamsSortOrderEnum) {
    MeTimeParamsSortOrderEnum["ASC"] = "ASC";
    MeTimeParamsSortOrderEnum["DESC"] = "DESC";
})(MeTimeParamsSortOrderEnum || (exports.MeTimeParamsSortOrderEnum = MeTimeParamsSortOrderEnum = {}));
var AdjustmentsParamsTypeEnum;
(function (AdjustmentsParamsTypeEnum) {
    AdjustmentsParamsTypeEnum["PENDING"] = "PENDING";
    AdjustmentsParamsTypeEnum["COMPLETED"] = "COMPLETED";
    AdjustmentsParamsTypeEnum["COMPLETED_UNEXTRACTED"] = "COMPLETED_UNEXTRACTED";
    AdjustmentsParamsTypeEnum["NONE"] = "NONE";
    AdjustmentsParamsTypeEnum["ALL"] = "ALL";
})(AdjustmentsParamsTypeEnum || (exports.AdjustmentsParamsTypeEnum = AdjustmentsParamsTypeEnum = {}));
var GetMileageRateSetsParamsUnitEnum;
(function (GetMileageRateSetsParamsUnitEnum) {
    GetMileageRateSetsParamsUnitEnum["KILOMETERS"] = "KILOMETERS";
    GetMileageRateSetsParamsUnitEnum["MILES"] = "MILES";
})(GetMileageRateSetsParamsUnitEnum || (exports.GetMileageRateSetsParamsUnitEnum = GetMileageRateSetsParamsUnitEnum = {}));
var GetAccountsParamsCategoryEnum;
(function (GetAccountsParamsCategoryEnum) {
    GetAccountsParamsCategoryEnum["BILLED"] = "BILLED";
    GetAccountsParamsCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    GetAccountsParamsCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    GetAccountsParamsCategoryEnum["TAX"] = "TAX";
    GetAccountsParamsCategoryEnum["UNBILLED"] = "UNBILLED";
    GetAccountsParamsCategoryEnum["LABOR_COST"] = "LABOR_COST";
    GetAccountsParamsCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    GetAccountsParamsCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    GetAccountsParamsCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    GetAccountsParamsCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    GetAccountsParamsCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    GetAccountsParamsCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    GetAccountsParamsCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    GetAccountsParamsCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    GetAccountsParamsCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    GetAccountsParamsCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    GetAccountsParamsCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    GetAccountsParamsCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    GetAccountsParamsCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    GetAccountsParamsCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    GetAccountsParamsCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    GetAccountsParamsCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    GetAccountsParamsCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    GetAccountsParamsCategoryEnum["NET_INCOME"] = "NET_INCOME";
    GetAccountsParamsCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    GetAccountsParamsCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    GetAccountsParamsCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    GetAccountsParamsCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    GetAccountsParamsCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    GetAccountsParamsCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    GetAccountsParamsCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    GetAccountsParamsCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    GetAccountsParamsCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    GetAccountsParamsCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    GetAccountsParamsCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    GetAccountsParamsCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    GetAccountsParamsCategoryEnum["PILOB"] = "PILOB";
    GetAccountsParamsCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    GetAccountsParamsCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    GetAccountsParamsCategoryEnum["DUE_TO"] = "DUE_TO";
    GetAccountsParamsCategoryEnum["DUE_FROM"] = "DUE_FROM";
    GetAccountsParamsCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    GetAccountsParamsCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    GetAccountsParamsCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    GetAccountsParamsCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    GetAccountsParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    GetAccountsParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    GetAccountsParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    GetAccountsParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    GetAccountsParamsCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    GetAccountsParamsCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(GetAccountsParamsCategoryEnum || (exports.GetAccountsParamsCategoryEnum = GetAccountsParamsCategoryEnum = {}));
/**
 * The Classification selection drives the following:
 * * Dilution - only applies to Salaried Classification.
 * * Person Organization - must be a Financial Organization if the Classification is Salaried or Hourly and the Use Financial Organizations (unanet.financials.use_financial_orgs) property is checked.
 *
 * Valid values for this field include:
 *
 * * Salaried: employees who are paid a fixed amount every period (in previous Unanet versions this was the Exempt option)
 * * Hourly: employees who are paid hourly (in previous Unanet versions this was the Non-Exempt option)
 * * Non-Employee: non-employees who are paid hourly
 * * Non-Employee (PO): non-employees whose timesheet cells and expense report lines will be mapped to a PO/PO Line if a PO Assignment has been created to do the mapping (only for Financial licenses); this will be the only available option if the user has Designate this user as subcontractor on the Roles tab selected
 *
 * Employee Classification impacts the labor cost calculations:
 * * for Salaried users if your Unanet application is configured to use Cost Rate Dilution
 * * for Hourly and Non-Employees (regarding the use of pay code factors)
 * * for Non-Employee (PO) (cost rate can be specified in the PO Assignment)
 */
var GetCurrentClassificationEnum;
(function (GetCurrentClassificationEnum) {
    GetCurrentClassificationEnum["EXEMPT"] = "EXEMPT";
    GetCurrentClassificationEnum["NON_EXEMPT"] = "NON_EXEMPT";
    GetCurrentClassificationEnum["NON_EMPLOYEE"] = "NON_EMPLOYEE";
    GetCurrentClassificationEnum["SUBCONTRACTOR"] = "SUBCONTRACTOR";
})(GetCurrentClassificationEnum || (exports.GetCurrentClassificationEnum = GetCurrentClassificationEnum = {}));
var CreateMatrixListCriteriaParamsDashboardEnum;
(function (CreateMatrixListCriteriaParamsDashboardEnum) {
    CreateMatrixListCriteriaParamsDashboardEnum["HOME"] = "HOME";
    CreateMatrixListCriteriaParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    CreateMatrixListCriteriaParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    CreateMatrixListCriteriaParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    CreateMatrixListCriteriaParamsDashboardEnum["PROJECT"] = "PROJECT";
    CreateMatrixListCriteriaParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    CreateMatrixListCriteriaParamsDashboardEnum["TIME"] = "TIME";
    CreateMatrixListCriteriaParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    CreateMatrixListCriteriaParamsDashboardEnum["FORECAST"] = "FORECAST";
    CreateMatrixListCriteriaParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    CreateMatrixListCriteriaParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    CreateMatrixListCriteriaParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    CreateMatrixListCriteriaParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    CreateMatrixListCriteriaParamsDashboardEnum["BILLING"] = "BILLING";
    CreateMatrixListCriteriaParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    CreateMatrixListCriteriaParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    CreateMatrixListCriteriaParamsDashboardEnum["ADMIN"] = "ADMIN";
    CreateMatrixListCriteriaParamsDashboardEnum["REPORTS"] = "REPORTS";
})(CreateMatrixListCriteriaParamsDashboardEnum || (exports.CreateMatrixListCriteriaParamsDashboardEnum = CreateMatrixListCriteriaParamsDashboardEnum = {}));
var UpdateMatrixListCriteriaByKeyParamsDashboardEnum;
(function (UpdateMatrixListCriteriaByKeyParamsDashboardEnum) {
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["HOME"] = "HOME";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["ORGANIZATIONS"] = "ORGANIZATIONS";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["CONTRACTS"] = "CONTRACTS";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["CONTRACT"] = "CONTRACT";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["PROJECT"] = "PROJECT";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["PEOPLE"] = "PEOPLE";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["TIME"] = "TIME";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["EXPENSE"] = "EXPENSE";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["FORECAST"] = "FORECAST";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["FINANCIALS"] = "FINANCIALS";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["PURCHASING"] = "PURCHASING";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["ACCOUNTS_RECEIVABLE"] = "ACCOUNTS_RECEIVABLE";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["BILLING"] = "BILLING";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["GENERAL_LEDGER"] = "GENERAL_LEDGER";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["DOCUMENTS"] = "DOCUMENTS";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["ADMIN"] = "ADMIN";
    UpdateMatrixListCriteriaByKeyParamsDashboardEnum["REPORTS"] = "REPORTS";
})(UpdateMatrixListCriteriaByKeyParamsDashboardEnum || (exports.UpdateMatrixListCriteriaByKeyParamsDashboardEnum = UpdateMatrixListCriteriaByKeyParamsDashboardEnum = {}));
var DeleteMatrixListCriteriaFamilyEnum;
(function (DeleteMatrixListCriteriaFamilyEnum) {
    DeleteMatrixListCriteriaFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    DeleteMatrixListCriteriaFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    DeleteMatrixListCriteriaFamilyEnum["REDIRECTION"] = "REDIRECTION";
    DeleteMatrixListCriteriaFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    DeleteMatrixListCriteriaFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    DeleteMatrixListCriteriaFamilyEnum["OTHER"] = "OTHER";
})(DeleteMatrixListCriteriaFamilyEnum || (exports.DeleteMatrixListCriteriaFamilyEnum = DeleteMatrixListCriteriaFamilyEnum = {}));
var DeleteMatrixSharedCriteriaFamilyEnum;
(function (DeleteMatrixSharedCriteriaFamilyEnum) {
    DeleteMatrixSharedCriteriaFamilyEnum["INFORMATIONAL"] = "INFORMATIONAL";
    DeleteMatrixSharedCriteriaFamilyEnum["SUCCESSFUL"] = "SUCCESSFUL";
    DeleteMatrixSharedCriteriaFamilyEnum["REDIRECTION"] = "REDIRECTION";
    DeleteMatrixSharedCriteriaFamilyEnum["CLIENT_ERROR"] = "CLIENT_ERROR";
    DeleteMatrixSharedCriteriaFamilyEnum["SERVER_ERROR"] = "SERVER_ERROR";
    DeleteMatrixSharedCriteriaFamilyEnum["OTHER"] = "OTHER";
})(DeleteMatrixSharedCriteriaFamilyEnum || (exports.DeleteMatrixSharedCriteriaFamilyEnum = DeleteMatrixSharedCriteriaFamilyEnum = {}));
/** @pattern ^\(.*\S.*\)$ */
var Get31ParamsTypeEnum;
(function (Get31ParamsTypeEnum) {
    Get31ParamsTypeEnum["DEFAULT"] = "DEFAULT";
    Get31ParamsTypeEnum["CUSTOM"] = "CUSTOM";
})(Get31ParamsTypeEnum || (exports.Get31ParamsTypeEnum = Get31ParamsTypeEnum = {}));
var UpdateSourcesParamsCategoryEnum;
(function (UpdateSourcesParamsCategoryEnum) {
    UpdateSourcesParamsCategoryEnum["BILLED"] = "BILLED";
    UpdateSourcesParamsCategoryEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    UpdateSourcesParamsCategoryEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    UpdateSourcesParamsCategoryEnum["TAX"] = "TAX";
    UpdateSourcesParamsCategoryEnum["UNBILLED"] = "UNBILLED";
    UpdateSourcesParamsCategoryEnum["LABOR_COST"] = "LABOR_COST";
    UpdateSourcesParamsCategoryEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    UpdateSourcesParamsCategoryEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    UpdateSourcesParamsCategoryEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    UpdateSourcesParamsCategoryEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    UpdateSourcesParamsCategoryEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    UpdateSourcesParamsCategoryEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    UpdateSourcesParamsCategoryEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    UpdateSourcesParamsCategoryEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    UpdateSourcesParamsCategoryEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    UpdateSourcesParamsCategoryEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    UpdateSourcesParamsCategoryEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    UpdateSourcesParamsCategoryEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    UpdateSourcesParamsCategoryEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    UpdateSourcesParamsCategoryEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    UpdateSourcesParamsCategoryEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    UpdateSourcesParamsCategoryEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    UpdateSourcesParamsCategoryEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    UpdateSourcesParamsCategoryEnum["NET_INCOME"] = "NET_INCOME";
    UpdateSourcesParamsCategoryEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    UpdateSourcesParamsCategoryEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    UpdateSourcesParamsCategoryEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    UpdateSourcesParamsCategoryEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    UpdateSourcesParamsCategoryEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    UpdateSourcesParamsCategoryEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    UpdateSourcesParamsCategoryEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    UpdateSourcesParamsCategoryEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    UpdateSourcesParamsCategoryEnum["FIXED_ASSET"] = "FIXED_ASSET";
    UpdateSourcesParamsCategoryEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    UpdateSourcesParamsCategoryEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    UpdateSourcesParamsCategoryEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    UpdateSourcesParamsCategoryEnum["PILOB"] = "PILOB";
    UpdateSourcesParamsCategoryEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    UpdateSourcesParamsCategoryEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    UpdateSourcesParamsCategoryEnum["DUE_TO"] = "DUE_TO";
    UpdateSourcesParamsCategoryEnum["DUE_FROM"] = "DUE_FROM";
    UpdateSourcesParamsCategoryEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    UpdateSourcesParamsCategoryEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    UpdateSourcesParamsCategoryEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    UpdateSourcesParamsCategoryEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    UpdateSourcesParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    UpdateSourcesParamsCategoryEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    UpdateSourcesParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    UpdateSourcesParamsCategoryEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    UpdateSourcesParamsCategoryEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    UpdateSourcesParamsCategoryEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(UpdateSourcesParamsCategoryEnum || (exports.UpdateSourcesParamsCategoryEnum = UpdateSourcesParamsCategoryEnum = {}));
var UpdateSourcesParamsEnum;
(function (UpdateSourcesParamsEnum) {
    UpdateSourcesParamsEnum["BILLED"] = "BILLED";
    UpdateSourcesParamsEnum["DEFERRED_REVENUE"] = "DEFERRED_REVENUE";
    UpdateSourcesParamsEnum["RECOGNIZED_REVENUE"] = "RECOGNIZED_REVENUE";
    UpdateSourcesParamsEnum["TAX"] = "TAX";
    UpdateSourcesParamsEnum["UNBILLED"] = "UNBILLED";
    UpdateSourcesParamsEnum["LABOR_COST"] = "LABOR_COST";
    UpdateSourcesParamsEnum["LABOR_COST_OFFSET_EMPLOYEES"] = "LABOR_COST_OFFSET_EMPLOYEES";
    UpdateSourcesParamsEnum["REVENUE_WRITE_OFF"] = "REVENUE_WRITE_OFF";
    UpdateSourcesParamsEnum["FUNDING_CAP_ADJUSTMENT_REVENUE"] = "FUNDING_CAP_ADJUSTMENT_REVENUE";
    UpdateSourcesParamsEnum["AR_DISCOUNT_TAKEN"] = "AR_DISCOUNT_TAKEN";
    UpdateSourcesParamsEnum["AR_SMALL_BALANCE_WRITE_OFF"] = "AR_SMALL_BALANCE_WRITE_OFF";
    UpdateSourcesParamsEnum["AR_UNAPPLIED_PAYMENT_ACCOUNT"] = "AR_UNAPPLIED_PAYMENT_ACCOUNT";
    UpdateSourcesParamsEnum["ACCOUNTS_PAYABLE"] = "ACCOUNTS_PAYABLE";
    UpdateSourcesParamsEnum["AP_DISCOUNT_TAKEN"] = "AP_DISCOUNT_TAKEN";
    UpdateSourcesParamsEnum["AP_UNAPPLIED_PAYMENT_ACCOUNT"] = "AP_UNAPPLIED_PAYMENT_ACCOUNT";
    UpdateSourcesParamsEnum["EXPENSE_REPORT_COST"] = "EXPENSE_REPORT_COST";
    UpdateSourcesParamsEnum["EXPENSE_REPORT_OFFSET_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_REIMBURSABLE";
    UpdateSourcesParamsEnum["EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE"] = "EXPENSE_REPORT_OFFSET_NON_REIMBURSABLE";
    UpdateSourcesParamsEnum["LABOR_COST_OFFSET_SUBCONTRACTORS"] = "LABOR_COST_OFFSET_SUBCONTRACTORS";
    UpdateSourcesParamsEnum["CROSS_CHARGE_LABOR"] = "CROSS_CHARGE_LABOR";
    UpdateSourcesParamsEnum["CROSS_CHARGE_LABOR_OFFSET"] = "CROSS_CHARGE_LABOR_OFFSET";
    UpdateSourcesParamsEnum["FIXED_FEE_ADJUSTMENT_REVENUE"] = "FIXED_FEE_ADJUSTMENT_REVENUE";
    UpdateSourcesParamsEnum["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
    UpdateSourcesParamsEnum["NET_INCOME"] = "NET_INCOME";
    UpdateSourcesParamsEnum["INVALID_LEGAL_ENTITY_BILLING_POST"] = "INVALID_LEGAL_ENTITY_BILLING_POST";
    UpdateSourcesParamsEnum["INVALID_LEGAL_ENTITY_INVOICE_COMPLETION"] = "INVALID_LEGAL_ENTITY_INVOICE_COMPLETION";
    UpdateSourcesParamsEnum["INVALID_LEGAL_ENTITY_LABOR_COST_POST"] = "INVALID_LEGAL_ENTITY_LABOR_COST_POST";
    UpdateSourcesParamsEnum["INVALID_LEGAL_ENTITY_EXPENSE_COST_POST"] = "INVALID_LEGAL_ENTITY_EXPENSE_COST_POST";
    UpdateSourcesParamsEnum["VI_FUNDING_CAP_ADJUSTMENT"] = "VI_FUNDING_CAP_ADJUSTMENT";
    UpdateSourcesParamsEnum["INVENTORY_ASSET_ACCOUNT"] = "INVENTORY_ASSET_ACCOUNT";
    UpdateSourcesParamsEnum["INVENTORY_SHRINKAGE_ACCOUNT"] = "INVENTORY_SHRINKAGE_ACCOUNT";
    UpdateSourcesParamsEnum["INVENTORY_PAYABLE_ACCOUNT"] = "INVENTORY_PAYABLE_ACCOUNT";
    UpdateSourcesParamsEnum["FIXED_ASSET"] = "FIXED_ASSET";
    UpdateSourcesParamsEnum["FIXED_ASSET_DEPRECIATION_EXPENSE"] = "FIXED_ASSET_DEPRECIATION_EXPENSE";
    UpdateSourcesParamsEnum["FIXED_ASSET_ACCUMULATED_DEPRECIATION"] = "FIXED_ASSET_ACCUMULATED_DEPRECIATION";
    UpdateSourcesParamsEnum["FIXED_ASSET_DISPOSAL"] = "FIXED_ASSET_DISPOSAL";
    UpdateSourcesParamsEnum["PILOB"] = "PILOB";
    UpdateSourcesParamsEnum["FIXED_ASSET_CASH_PROCEEDS"] = "FIXED_ASSET_CASH_PROCEEDS";
    UpdateSourcesParamsEnum["PILOB_COST_OFFSET"] = "PILOB_COST_OFFSET";
    UpdateSourcesParamsEnum["DUE_TO"] = "DUE_TO";
    UpdateSourcesParamsEnum["DUE_FROM"] = "DUE_FROM";
    UpdateSourcesParamsEnum["INTERCOMPANY_REVENUE"] = "INTERCOMPANY_REVENUE";
    UpdateSourcesParamsEnum["INTERCOMPANY_LABOR_COST"] = "INTERCOMPANY_LABOR_COST";
    UpdateSourcesParamsEnum["INTERCOMPANY_EXPENSE_REPORT_COST"] = "INTERCOMPANY_EXPENSE_REPORT_COST";
    UpdateSourcesParamsEnum["INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO"] = "INTERCOMPANY_COST_ALLOCATION_DUE_FROM_DUE_TO";
    UpdateSourcesParamsEnum["UNREALIZED_FOREIGN_EXCHANGE_GAIN"] = "UNREALIZED_FOREIGN_EXCHANGE_GAIN";
    UpdateSourcesParamsEnum["UNREALIZED_FOREIGN_EXCHANGE_LOSS"] = "UNREALIZED_FOREIGN_EXCHANGE_LOSS";
    UpdateSourcesParamsEnum["REALIZED_FOREIGN_EXCHANGE_GAIN"] = "REALIZED_FOREIGN_EXCHANGE_GAIN";
    UpdateSourcesParamsEnum["REALIZED_FOREIGN_EXCHANGE_LOSS"] = "REALIZED_FOREIGN_EXCHANGE_LOSS";
    UpdateSourcesParamsEnum["AP_REVALUATION_OFFSET"] = "AP_REVALUATION_OFFSET";
    UpdateSourcesParamsEnum["AR_REVALUATION_OFFSET"] = "AR_REVALUATION_OFFSET";
})(UpdateSourcesParamsEnum || (exports.UpdateSourcesParamsEnum = UpdateSourcesParamsEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetAttachments6ParamsTypeEnum;
(function (GetAttachments6ParamsTypeEnum) {
    GetAttachments6ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetAttachments6ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetAttachments6ParamsTypeEnum || (exports.GetAttachments6ParamsTypeEnum = GetAttachments6ParamsTypeEnum = {}));
var GetExpenseLinesForPoParamsStateEnum;
(function (GetExpenseLinesForPoParamsStateEnum) {
    GetExpenseLinesForPoParamsStateEnum["OPEN"] = "OPEN";
    GetExpenseLinesForPoParamsStateEnum["CLOSED"] = "CLOSED";
})(GetExpenseLinesForPoParamsStateEnum || (exports.GetExpenseLinesForPoParamsStateEnum = GetExpenseLinesForPoParamsStateEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetExpenseLinesForPoParamsTypeEnum;
(function (GetExpenseLinesForPoParamsTypeEnum) {
    GetExpenseLinesForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetExpenseLinesForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetExpenseLinesForPoParamsTypeEnum || (exports.GetExpenseLinesForPoParamsTypeEnum = GetExpenseLinesForPoParamsTypeEnum = {}));
var GetItemLinesForPoParamsStateEnum;
(function (GetItemLinesForPoParamsStateEnum) {
    GetItemLinesForPoParamsStateEnum["OPEN"] = "OPEN";
    GetItemLinesForPoParamsStateEnum["CLOSED"] = "CLOSED";
})(GetItemLinesForPoParamsStateEnum || (exports.GetItemLinesForPoParamsStateEnum = GetItemLinesForPoParamsStateEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetItemLinesForPoParamsTypeEnum;
(function (GetItemLinesForPoParamsTypeEnum) {
    GetItemLinesForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetItemLinesForPoParamsTypeEnum["CONSOLIDATED_ALL"] = "CONSOLIDATED_ALL";
    GetItemLinesForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetItemLinesForPoParamsTypeEnum || (exports.GetItemLinesForPoParamsTypeEnum = GetItemLinesForPoParamsTypeEnum = {}));
var GetLaborLinesForPoParamsStateEnum;
(function (GetLaborLinesForPoParamsStateEnum) {
    GetLaborLinesForPoParamsStateEnum["OPEN"] = "OPEN";
    GetLaborLinesForPoParamsStateEnum["CLOSED"] = "CLOSED";
})(GetLaborLinesForPoParamsStateEnum || (exports.GetLaborLinesForPoParamsStateEnum = GetLaborLinesForPoParamsStateEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetLaborLinesForPoParamsTypeEnum;
(function (GetLaborLinesForPoParamsTypeEnum) {
    GetLaborLinesForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetLaborLinesForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetLaborLinesForPoParamsTypeEnum || (exports.GetLaborLinesForPoParamsTypeEnum = GetLaborLinesForPoParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetByKey33ParamsTypeEnum;
(function (GetByKey33ParamsTypeEnum) {
    GetByKey33ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetByKey33ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetByKey33ParamsTypeEnum || (exports.GetByKey33ParamsTypeEnum = GetByKey33ParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetAttachment9ParamsTypeEnum;
(function (GetAttachment9ParamsTypeEnum) {
    GetAttachment9ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetAttachment9ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetAttachment9ParamsTypeEnum || (exports.GetAttachment9ParamsTypeEnum = GetAttachment9ParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetExpenseLinesHistoryForPoParamsTypeEnum;
(function (GetExpenseLinesHistoryForPoParamsTypeEnum) {
    GetExpenseLinesHistoryForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetExpenseLinesHistoryForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetExpenseLinesHistoryForPoParamsTypeEnum || (exports.GetExpenseLinesHistoryForPoParamsTypeEnum = GetExpenseLinesHistoryForPoParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetItemLinesHistoryForPoParamsTypeEnum;
(function (GetItemLinesHistoryForPoParamsTypeEnum) {
    GetItemLinesHistoryForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetItemLinesHistoryForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetItemLinesHistoryForPoParamsTypeEnum || (exports.GetItemLinesHistoryForPoParamsTypeEnum = GetItemLinesHistoryForPoParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetLaborLinesHistoryForPoParamsTypeEnum;
(function (GetLaborLinesHistoryForPoParamsTypeEnum) {
    GetLaborLinesHistoryForPoParamsTypeEnum["CURRENT"] = "CURRENT";
    GetLaborLinesHistoryForPoParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetLaborLinesHistoryForPoParamsTypeEnum || (exports.GetLaborLinesHistoryForPoParamsTypeEnum = GetLaborLinesHistoryForPoParamsTypeEnum = {}));
/** @default "SINGLE" */
var GetReportByKeyParamsDetailLevelEnum;
(function (GetReportByKeyParamsDetailLevelEnum) {
    GetReportByKeyParamsDetailLevelEnum["SINGLE"] = "SINGLE";
    GetReportByKeyParamsDetailLevelEnum["CONSOLIDATED"] = "CONSOLIDATED";
    GetReportByKeyParamsDetailLevelEnum["DETAIL"] = "DETAIL";
})(GetReportByKeyParamsDetailLevelEnum || (exports.GetReportByKeyParamsDetailLevelEnum = GetReportByKeyParamsDetailLevelEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetReportByKeyParamsTypeEnum;
(function (GetReportByKeyParamsTypeEnum) {
    GetReportByKeyParamsTypeEnum["CURRENT"] = "CURRENT";
    GetReportByKeyParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetReportByKeyParamsTypeEnum || (exports.GetReportByKeyParamsTypeEnum = GetReportByKeyParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetAttachments7ParamsTypeEnum;
(function (GetAttachments7ParamsTypeEnum) {
    GetAttachments7ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetAttachments7ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetAttachments7ParamsTypeEnum || (exports.GetAttachments7ParamsTypeEnum = GetAttachments7ParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetExpenseLinesForPrParamsTypeEnum;
(function (GetExpenseLinesForPrParamsTypeEnum) {
    GetExpenseLinesForPrParamsTypeEnum["CURRENT"] = "CURRENT";
    GetExpenseLinesForPrParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetExpenseLinesForPrParamsTypeEnum || (exports.GetExpenseLinesForPrParamsTypeEnum = GetExpenseLinesForPrParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetItemLinesForPrParamsTypeEnum;
(function (GetItemLinesForPrParamsTypeEnum) {
    GetItemLinesForPrParamsTypeEnum["CURRENT"] = "CURRENT";
    GetItemLinesForPrParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetItemLinesForPrParamsTypeEnum || (exports.GetItemLinesForPrParamsTypeEnum = GetItemLinesForPrParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetLaborLinesForPrParamsTypeEnum;
(function (GetLaborLinesForPrParamsTypeEnum) {
    GetLaborLinesForPrParamsTypeEnum["CURRENT"] = "CURRENT";
    GetLaborLinesForPrParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetLaborLinesForPrParamsTypeEnum || (exports.GetLaborLinesForPrParamsTypeEnum = GetLaborLinesForPrParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetByKey35ParamsTypeEnum;
(function (GetByKey35ParamsTypeEnum) {
    GetByKey35ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetByKey35ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetByKey35ParamsTypeEnum || (exports.GetByKey35ParamsTypeEnum = GetByKey35ParamsTypeEnum = {}));
/** @default "CONSOLIDATED_APPROVED" */
var GetAttachment10ParamsTypeEnum;
(function (GetAttachment10ParamsTypeEnum) {
    GetAttachment10ParamsTypeEnum["CURRENT"] = "CURRENT";
    GetAttachment10ParamsTypeEnum["CONSOLIDATED_APPROVED"] = "CONSOLIDATED_APPROVED";
})(GetAttachment10ParamsTypeEnum || (exports.GetAttachment10ParamsTypeEnum = GetAttachment10ParamsTypeEnum = {}));
var Adjustments1ParamsTypeEnum;
(function (Adjustments1ParamsTypeEnum) {
    Adjustments1ParamsTypeEnum["PENDING"] = "PENDING";
    Adjustments1ParamsTypeEnum["COMPLETED"] = "COMPLETED";
    Adjustments1ParamsTypeEnum["COMPLETED_UNEXTRACTED"] = "COMPLETED_UNEXTRACTED";
    Adjustments1ParamsTypeEnum["NONE"] = "NONE";
    Adjustments1ParamsTypeEnum["ALL"] = "ALL";
})(Adjustments1ParamsTypeEnum || (exports.Adjustments1ParamsTypeEnum = Adjustments1ParamsTypeEnum = {}));
/** @default "PERSON" */
var GetMatchedExpensesParamsSortByEnum;
(function (GetMatchedExpensesParamsSortByEnum) {
    GetMatchedExpensesParamsSortByEnum["PO_LINE_NUM"] = "PO_LINE_NUM";
    GetMatchedExpensesParamsSortByEnum["PROJECT"] = "PROJECT";
    GetMatchedExpensesParamsSortByEnum["TASK"] = "TASK";
    GetMatchedExpensesParamsSortByEnum["EXPENSE_TYPE"] = "EXPENSE_TYPE";
    GetMatchedExpensesParamsSortByEnum["PROJECT_TYPE"] = "PROJECT_TYPE";
    GetMatchedExpensesParamsSortByEnum["PERSON"] = "PERSON";
    GetMatchedExpensesParamsSortByEnum["VENDOR"] = "VENDOR";
    GetMatchedExpensesParamsSortByEnum["EXPENSE_DATE"] = "EXPENSE_DATE";
    GetMatchedExpensesParamsSortByEnum["EXPENSE_REPORT_NUMBER"] = "EXPENSE_REPORT_NUMBER";
    GetMatchedExpensesParamsSortByEnum["AMOUNT"] = "AMOUNT";
})(GetMatchedExpensesParamsSortByEnum || (exports.GetMatchedExpensesParamsSortByEnum = GetMatchedExpensesParamsSortByEnum = {}));
/** @default "PO_LINE_NUM" */
var GetMatchedItemsParamsSortByEnum;
(function (GetMatchedItemsParamsSortByEnum) {
    GetMatchedItemsParamsSortByEnum["PO_LINE_NUM"] = "PO_LINE_NUM";
    GetMatchedItemsParamsSortByEnum["ACCOUNT"] = "ACCOUNT";
    GetMatchedItemsParamsSortByEnum["ORGANIZATION"] = "ORGANIZATION";
    GetMatchedItemsParamsSortByEnum["PROJECT"] = "PROJECT";
    GetMatchedItemsParamsSortByEnum["TASK"] = "TASK";
    GetMatchedItemsParamsSortByEnum["PROJECT_TYPE"] = "PROJECT_TYPE";
    GetMatchedItemsParamsSortByEnum["PERSON"] = "PERSON";
    GetMatchedItemsParamsSortByEnum["RECEIPT_DATE"] = "RECEIPT_DATE";
    GetMatchedItemsParamsSortByEnum["ITEM"] = "ITEM";
    GetMatchedItemsParamsSortByEnum["QUANTITY"] = "QUANTITY";
    GetMatchedItemsParamsSortByEnum["UOM"] = "UOM";
    GetMatchedItemsParamsSortByEnum["RATE"] = "RATE";
    GetMatchedItemsParamsSortByEnum["AMOUNT"] = "AMOUNT";
})(GetMatchedItemsParamsSortByEnum || (exports.GetMatchedItemsParamsSortByEnum = GetMatchedItemsParamsSortByEnum = {}));
/** @default "PERSON" */
var GetMatchedLaborParamsSortByEnum;
(function (GetMatchedLaborParamsSortByEnum) {
    GetMatchedLaborParamsSortByEnum["PO_LINE_NUM"] = "PO_LINE_NUM";
    GetMatchedLaborParamsSortByEnum["PROJECT"] = "PROJECT";
    GetMatchedLaborParamsSortByEnum["TASK"] = "TASK";
    GetMatchedLaborParamsSortByEnum["LABOR_CATEGORY"] = "LABOR_CATEGORY";
    GetMatchedLaborParamsSortByEnum["LOCATION"] = "LOCATION";
    GetMatchedLaborParamsSortByEnum["PROJECT_TYPE"] = "PROJECT_TYPE";
    GetMatchedLaborParamsSortByEnum["PAY_CODE"] = "PAY_CODE";
    GetMatchedLaborParamsSortByEnum["PERSON"] = "PERSON";
    GetMatchedLaborParamsSortByEnum["WORK_DATE"] = "WORK_DATE";
    GetMatchedLaborParamsSortByEnum["RATE"] = "RATE";
    GetMatchedLaborParamsSortByEnum["HOURS"] = "HOURS";
    GetMatchedLaborParamsSortByEnum["AMOUNT"] = "AMOUNT";
})(GetMatchedLaborParamsSortByEnum || (exports.GetMatchedLaborParamsSortByEnum = GetMatchedLaborParamsSortByEnum = {}));
