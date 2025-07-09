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
  ApprovalGroupPagedResponse,
  AssignedLaborCategoryCreateModel,
  AssignedLaborCategoryModelPagedResponse,
  AssignedLaborCategoryRateModel,
  AssignedLaborCategoryRateModelPagedResponse,
  AssignedLaborCategoryUpdateModel,
  AssignmentDefaultsModel,
  AttachmentCreateModel,
  AttachmentModel,
  AttachmentPagedResponseModel,
  BudgetSnapshotBulkCreateModel,
  BudgetSnapshotCreateModel,
  BudgetSnapshotModel,
  BudgetSnapshotPagedResponse,
  BudgetSnapshotSearchModel,
  CategoryAccountKeyModel,
  CategoryAccountModel,
  CostStructPoolRateModel,
  CostStructPoolRateUpdateModel,
  CreatedResponseModel,
  ErrorResponse,
  ExpenseBudgetCreateModel,
  ExpenseBudgetSearchModel,
  ExpenseBudgetUpdateModel,
  ExpensePlanCreateModel,
  ExpensePlanSearchModel,
  FixedPriceItemCreateModel,
  FixedPriceItemModel,
  FixedPriceItemPagedResponse,
  ItemModel,
  ItemPagedResponse,
  KeyModel,
  KeyNameCodeModelPagedResponse,
  KeysModel,
  LocationPagedResponse,
  PayCodePagedResponse,
  PersonNameModel,
  PersonNameModelPagedResponse,
  PlanSetAuditPagedResponse,
  PlanSetCreateModel,
  PlanSetModel,
  PlanSetPagedResponse,
  PlannedTimeCreateModel,
  PlannedTimeModel,
  PreBilledLaborCreateModel,
  PrebilledLaborModel,
  PrebilledLaborPagedResponse,
  ProjectAdminAlternateUpdateModel,
  ProjectAlertPrefsModel,
  ProjectAlertsPagedResponse,
  ProjectApproverAdminModel,
  ProjectApproverAdminUpdateModel,
  ProjectApproverGroupModel,
  ProjectApproverGroupUpdateModel,
  ProjectAssignmentCreateModel,
  ProjectAssignmentModel,
  ProjectAssignmentPagedResponse,
  ProjectAssignmentSearchModel,
  ProjectAssignmentUpdateModel,
  ProjectBudgetHistoryPagedResponse,
  ProjectCreateModel,
  ProjectCustomerAdminModel,
  ProjectCustomerAdminUpdateModel,
  ProjectDisplayNamePagedResponse,
  ProjectExpenseBudgetPagedResponse,
  ProjectExpenseTypeAssignmentModel,
  ProjectExpenseTypeModel,
  ProjectExpenseTypePagedResponse,
  ProjectFeeCreateModel,
  ProjectFeeModel,
  ProjectInvoiceAvailProjSearchModel,
  ProjectInvoiceContactAddressModel,
  ProjectInvoiceContactModel,
  ProjectInvoiceCreateModel,
  ProjectInvoiceModel,
  ProjectItemUpdateModel,
  ProjectModel,
  ProjectNoteCommentCreateModel,
  ProjectNoteCommentModel,
  ProjectNoteCommentPagedResponse,
  ProjectNoteCreateModel,
  ProjectNoteModel,
  ProjectNotePagedResponse,
  ProjectPlanPagedResponse,
  ProjectPlanSearchModel,
  ProjectSearchModel,
  ProjectSummaryPagedResponse,
  ProjectUpdateModel,
  ScheduledExpenseItemBaseModel,
  ScheduledExpenseItemModel,
  ScheduledExpenseItemPagedResponse,
  TaskBudgetHistoryPagedResponse,
  TaskCreateModel,
  TaskDependencyCreateModel,
  TaskDependencyModel,
  TaskDependencyModelPagedResponse,
  TaskModel,
  TaskMoveModel,
  TaskSearchModel,
  TaskSummaryPagedResponse,
  TaskUpdateModel,
  UOMRateCollectionModel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Projects<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of cost rates for a specified project
   *
   * @tags Projects
   * @name GetProjectCostRates
   * @summary Retrieve project cost rates
   * @request GET:/rest/projects/{id}/cost-rates
   * @secure */
  getProjectCostRates = (id: number, params: RequestParams = {}) =>
    this.request<CostStructPoolRateModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/cost-rates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CostStructPoolRateModel,
    ) as CostStructPoolRateModel;

  /**
   * @description Update a project's cost rates.
   *
   * @tags Projects
   * @name UpdateProjectCostRates
   * @summary Update a project's cost rates
   * @request PUT:/rest/projects/{id}/cost-rates
   * @secure */
  updateProjectCostRates = (id: number, data: CostStructPoolRateUpdateModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/cost-rates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of cost rates for a specified task
   *
   * @tags Projects
   * @name GetTaskCostRates
   * @summary Retrieve task cost rates
   * @request GET:/rest/projects/{id}/tasks/{taskId}/cost-rates
   * @secure */
  getTaskCostRates = (id: number, taskId: number, params: RequestParams = {}) =>
    this.request<CostStructPoolRateModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/cost-rates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CostStructPoolRateModel,
    ) as CostStructPoolRateModel;

  /**
   * @description Update a task's cost rates.
   *
   * @tags Projects
   * @name UpdateTaskCostRates
   * @summary Update a task's cost rates
   * @request PUT:/rest/projects/{id}/tasks/{taskId}/cost-rates
   * @secure */
  updateTaskCostRates = (
    id: number,
    taskId: number,
    data: CostStructPoolRateUpdateModel[],
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/cost-rates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of fees for a specified project
   *
   * @tags Projects
   * @name GetFees
   * @summary Retrieve project fees
   * @request GET:/rest/projects/{id}/fees
   * @secure */
  getFees = (id: number, params: RequestParams = {}) =>
    this.request<ProjectFeeModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/fees`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectFeeModel,
    ) as ProjectFeeModel;

  /**
   * @description Creates a new fee for a specified project.
   *
   * @tags Projects
   * @name CreateFee
   * @summary Create a project fee
   * @request POST:/rest/projects/{id}/fees
   * @secure */
  createFee = (id: number, data: ProjectFeeCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/fees`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a fee for a specified project and fee method
   *
   * @tags Projects
   * @name GetFee
   * @summary Retrieve a project fee
   * @request GET:/rest/projects/{id}/fees/{feeMethodId}
   * @secure */
  getFee = (id: number, feeMethodId: number, params: RequestParams = {}) =>
    this.request<ProjectFeeModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/fees/${feeMethodId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectFeeModel,
    ) as ProjectFeeModel;

  /**
   * @description Updates a fee for a specified project and fee method
   *
   * @tags Projects
   * @name UpdateFee
   * @summary Update a project fee
   * @request PUT:/rest/projects/{id}/fees/{feeMethodId}
   * @secure */
  updateFee = (id: number, feeMethodId: number, data: ProjectFeeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/fees/${feeMethodId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing fee from a project.
   *
   * @tags Projects
   * @name DeleteFee
   * @summary Delete a project fee
   * @request DELETE:/rest/projects/{id}/fees/{feeMethodId}
   * @secure */
  deleteFee = (id: number, feeMethodId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/fees/${feeMethodId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of attachments for a Project Note.
   *
   * @tags Projects
   * @name GetProjectNoteAttachments
   * @summary Retrieve project note attachments
   * @request GET:/rest/projects/{id}/notes/{noteId}/attachments
   * @secure */
  getProjectNoteAttachments = (id: number, noteId: number, params: RequestParams = {}) =>
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Create an attachment on an existing note.
   *
   * @tags Projects
   * @name CreateProjectNoteAttachment
   * @summary Create a Note Attachment
   * @request POST:/rest/projects/{id}/notes/{noteId}/attachments
   * @secure */
  createProjectNoteAttachment = (id: number, noteId: number, data: AttachmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/attachments`,
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
   * @description Retrieves an attachment for a Project Note.
   *
   * @tags Projects
   * @name GetProjectNoteAttachment
   * @summary Retrieve a project note attachment
   * @request GET:/rest/projects/{id}/notes/{noteId}/attachments/{noteAttachmentId}
   * @secure */
  getProjectNoteAttachment = (id: number, noteId: number, noteAttachmentId: number, params: RequestParams = {}) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/attachments/${noteAttachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an existing attachment on a note.
   *
   * @tags Projects
   * @name DeleteProjectNoteAttachment
   * @summary Delete a Note Attachment
   * @request DELETE:/rest/projects/{id}/notes/{noteId}/attachments/{noteAttachmentId}
   * @secure */
  deleteProjectNoteAttachment = (id: number, noteId: number, noteAttachmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}/attachments/${noteAttachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of attachments for a Project Note Comment.
   *
   * @tags Projects
   * @name GetProjectNoteCommentAttachments
   * @summary Retrieve project note comment attachments
   * @request GET:/rest/projects/{id}/notes/{noteId}/comments/{commentId}/attachments
   * @secure */
  getProjectNoteCommentAttachments = (id: number, noteId: number, commentId: number, params: RequestParams = {}) =>
    this.request<AttachmentPagedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments/${commentId}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentPagedResponseModel,
    ) as AttachmentPagedResponseModel;

  /**
   * @description Create an attachment on an existing note comment.
   *
   * @tags Projects
   * @name CreateProjectNoteCommentAttachment
   * @summary Create a Note Comment Attachment
   * @request POST:/rest/projects/{id}/notes/{noteId}/comments/{commentId}/attachments
   * @secure */
  createProjectNoteCommentAttachment = (
    id: number,
    noteId: number,
    commentId: number,
    data: AttachmentCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments/${commentId}/attachments`,
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
   * @description Retrieves an attachment for a Project Note Comment.
   *
   * @tags Projects
   * @name GetProjectNoteCommentAttachment
   * @summary Retrieve a project note comment attachment
   * @request GET:/rest/projects/{id}/notes/{noteId}/comments/{commentId}/attachments/{attachmentId}
   * @secure */
  getProjectNoteCommentAttachment = (
    id: number,
    noteId: number,
    commentId: number,
    attachmentId: number,
    params: RequestParams = {},
  ) =>
    this.request<AttachmentModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments/${commentId}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AttachmentModel,
    ) as AttachmentModel;

  /**
   * @description Delete an existing attachment on a note comment.
   *
   * @tags Projects
   * @name DeleteProjectNoteAttachment1
   * @summary Delete a Note Comment Attachment
   * @request DELETE:/rest/projects/{id}/notes/{noteId}/comments/{commentId}/attachments/{attachmentId}
   * @secure */
  deleteProjectNoteAttachment1 = (
    id: number,
    noteId: number,
    commentId: number,
    attachmentId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}/comments/${commentId}/attachments/${attachmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of comments for a Project Note.
   *
   * @tags Projects
   * @name GetProjectNoteComments
   * @summary Retrieve project note comments
   * @request GET:/rest/projects/{id}/notes/{noteId}/comments
   * @secure */
  getProjectNoteComments = (id: number, noteId: number, params: RequestParams = {}) =>
    this.request<ProjectNoteCommentPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectNoteCommentPagedResponse,
    ) as ProjectNoteCommentPagedResponse;

  /**
   * @description Create a comment on an existing note.
   *
   * @tags Projects
   * @name CreateProjectNoteComment
   * @summary Create a Note Comment
   * @request POST:/rest/projects/{id}/notes/{noteId}/comments
   * @secure */
  createProjectNoteComment = (
    id: number,
    noteId: number,
    data: ProjectNoteCommentCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments`,
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
   * @description Retrieves a comment for a Project Note.
   *
   * @tags Projects
   * @name GetProjectNoteComment
   * @summary Retrieve a project note comments
   * @request GET:/rest/projects/{id}/notes/{noteId}/comments/{noteCommentId}
   * @secure */
  getProjectNoteComment = (id: number, noteId: number, noteCommentId: number, params: RequestParams = {}) =>
    this.request<ProjectNoteCommentModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/comments/${noteCommentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectNoteCommentModel,
    ) as ProjectNoteCommentModel;

  /**
   * @description Update an existing comment on a note.
   *
   * @tags Projects
   * @name UpdateProjectNoteComment
   * @summary Update a Note Comment
   * @request PUT:/rest/projects/{id}/notes/{noteId}/comments/{noteCommentId}
   * @secure */
  updateProjectNoteComment = (
    id: number,
    noteId: number,
    noteCommentId: number,
    data: ProjectNoteCommentModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}/comments/${noteCommentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing comment on a note.
   *
   * @tags Projects
   * @name DeleteProjectNoteComment
   * @summary Delete a Note Comment
   * @request DELETE:/rest/projects/{id}/notes/{noteId}/comments/{noteCommentId}
   * @secure */
  deleteProjectNoteComment = (id: number, noteId: number, noteCommentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}/comments/${noteCommentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of notes for a specified project
   *
   * @tags Projects
   * @name GetNotes
   * @summary Retrieves project notes
   * @request GET:/rest/projects/{id}/notes
   * @secure */
  getNotes = (id: number, params: RequestParams = {}) =>
    this.request<ProjectNotePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectNotePagedResponse,
    ) as ProjectNotePagedResponse;

  /**
   * @description Creates a new note for a specified project.
   *
   * @tags Projects
   * @name CreateNote
   * @summary Creates a project note
   * @request POST:/rest/projects/{id}/notes
   * @secure */
  createNote = (id: number, data: ProjectNoteCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      CreatedResponseModel,
    ) as CreatedResponseModel;

  /**
   * @description Retrieves a note for a specified project
   *
   * @tags Projects
   * @name GetNote
   * @summary Retrieves a project note
   * @request GET:/rest/projects/{id}/notes/{noteId}
   * @secure */
  getNote = (id: number, noteId: number, params: RequestParams = {}) =>
    this.request<ProjectNoteModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectNoteModel,
    ) as ProjectNoteModel;

  /**
   * @description Retrieves a note for a specified project
   *
   * @tags Projects
   * @name UpdateNote
   * @summary Retrieves a project note
   * @request PUT:/rest/projects/{id}/notes/{noteId}
   * @secure */
  updateNote = (id: number, noteId: number, data: ProjectNoteModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}`,
      method: "PUT",
      body: data,
      secure: true,
      ...params,
    });

  /**
   * @description Delete an existing note from a project.
   *
   * @tags Projects
   * @name DeleteNote
   * @summary Delete project note
   * @request DELETE:/rest/projects/{id}/notes/{noteId}
   * @secure */
  deleteNote = (id: number, noteId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/notes/${noteId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of all audit entries for a project note. The history entry will contain the project note info prior to the change. Nothing is returned if the note's audit fields have never been modified.
   *
   * @tags Projects
   * @name GetHistory
   * @summary Retrieves a list of all audit entries for a project note
   * @request GET:/rest/projects/{id}/notes/{noteId}/audit
   * @secure */
  getHistory = (
    id: number,
    noteId: number,
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
    this.request<ProjectNotePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/notes/${noteId}/audit`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectNotePagedResponse,
    ) as ProjectNotePagedResponse;

  /**
   * @description Retrieves a list of pre-billed labor items for a specified project
   *
   * @tags Projects
   * @name GetPreBilledLabor
   * @summary Retrieves pre-billed labor
   * @request GET:/rest/projects/{id}/pre-billed-labor
   * @secure */
  getPreBilledLabor = (id: number, params: RequestParams = {}) =>
    this.request<PrebilledLaborPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/pre-billed-labor`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PrebilledLaborPagedResponse,
    ) as PrebilledLaborPagedResponse;

  /**
   * @description Creates a new pre-billed labor item for a project.
   *
   * @tags Projects
   * @name CreatePreBilledLabor
   * @summary Create Pre-billed Labor
   * @request POST:/rest/projects/{id}/pre-billed-labor
   * @secure */
  createPreBilledLabor = (id: number, data: PreBilledLaborCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/pre-billed-labor`,
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
   * @description Update an existing pre-billed labor item for a project.
   *
   * @tags Projects
   * @name UpdatePreBilledLabor
   * @summary Update pre-billed labor
   * @request PUT:/rest/projects/{id}/pre-billed-labor/{preBilledLaborItemId}
   * @secure */
  updatePreBilledLabor = (
    id: number,
    preBilledLaborItemId: number,
    data: PrebilledLaborModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/pre-billed-labor/${preBilledLaborItemId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an existing pre-billed labor for a project.
   *
   * @tags Projects
   * @name DeletePreBilledLabor
   * @summary Delete pre-billed labor
   * @request DELETE:/rest/projects/{id}/pre-billed-labor/{preBilledLaborItemId}
   * @secure */
  deletePreBilledLabor = (id: number, preBilledLaborItemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/pre-billed-labor/${preBilledLaborItemId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a pre-billed labor item by id.
   *
   * @tags Projects
   * @name GetPreBilledLabor1
   * @summary Retrieves a pre-billed labor
   * @request GET:/rest/projects/{id}/pre-billed-labor/{preBilledLaborId}
   * @secure */
  getPreBilledLabor1 = (id: number, preBilledLaborId: number, params: RequestParams = {}) =>
    this.request<PrebilledLaborModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/pre-billed-labor/${preBilledLaborId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PrebilledLaborModel,
    ) as PrebilledLaborModel;

  /**
   * @description Creates project snapshots in bulk for a project and its tasks.
   *
   * @tags Projects
   * @name AddBulkBudgetSnapshots
   * @summary Creates project snapshots for a project and its tasks
   * @request POST:/rest/projects/{id}/budget-snapshots/snapshot
   * @secure */
  addBulkBudgetSnapshots = (id: number, data: BudgetSnapshotBulkCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/budget-snapshots/snapshot`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves an expense type for a given project key and expense type key
   *
   * @tags Projects
   * @name GetExpenseType
   * @summary Retrieves a project expense type
   * @request GET:/rest/projects/{id}/expense-types/{expenseTypeId}
   * @secure */
  getExpenseType = (id: number, expenseTypeId: number, params: RequestParams = {}) =>
    this.request<ProjectExpenseTypeModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-types/${expenseTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectExpenseTypeModel,
    ) as ProjectExpenseTypeModel;

  /**
   * @description Updates an existing project expense type.
   *
   * @tags Projects
   * @name UpdateExpenseType
   * @summary Updates a project expense type
   * @request PUT:/rest/projects/{id}/expense-types/{expenseTypeId}
   * @secure */
  updateExpenseType = (
    id: number,
    expenseTypeId: number,
    data: ProjectExpenseTypeAssignmentModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-types/${expenseTypeId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Adds an expense type to a project to limit which expense types are available for charging.
   *
   * @tags Projects
   * @name AddExpenseType
   * @summary Adds an expense type to a project
   * @request POST:/rest/projects/{id}/expense-types/{expenseTypeId}
   * @secure */
  addExpenseType = (
    id: number,
    expenseTypeId: number,
    data: ProjectExpenseTypeAssignmentModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-types/${expenseTypeId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes an association between a project and an expense type
   *
   * @tags Projects
   * @name DeleteExpenseType
   * @summary Removes an association between a project and an expense type
   * @request DELETE:/rest/projects/{id}/expense-types/{expenseTypeId}
   * @secure */
  deleteExpenseType = (id: number, expenseTypeId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-types/${expenseTypeId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of fixed price items for a given project key.
   *
   * @tags Projects
   * @name GetFixedPriceItems
   * @summary Retrieves project fixed price items
   * @request GET:/rest/projects/{id}/fixed-price-items
   * @secure */
  getFixedPriceItems = (
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
    this.request<FixedPriceItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/fixed-price-items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedPriceItemPagedResponse,
    ) as FixedPriceItemPagedResponse;

  /**
   * @description Adds a fixed price item to a project.
   *
   * @tags Projects
   * @name AddFixedPriceItem
   * @summary Adds a fixed price item to a project
   * @request POST:/rest/projects/{id}/fixed-price-items
   * @secure */
  addFixedPriceItem = (id: number, data: FixedPriceItemCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/fixed-price-items`,
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
   * @description Retrieves a project item for a given project key and item key.
   *
   * @tags Projects
   * @name GetItem
   * @summary Retrieves a project item
   * @request GET:/rest/projects/{id}/items/{itemId}
   * @secure */
  getItem = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<ItemModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/items/${itemId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ItemModel,
    ) as ItemModel;

  /**
   * @description Updates a project item (non-rate data).
   *
   * @tags Projects
   * @name UpdateItem
   * @summary Updates a project item.
   * @request PUT:/rest/projects/{id}/items/{itemId}
   * @secure */
  updateItem = (id: number, itemId: number, data: ProjectItemUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/items/${itemId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Adds an item to a project.
   *
   * @tags Projects
   * @name AddItem
   * @summary Adds an item to a project
   * @request POST:/rest/projects/{id}/items/{itemId}
   * @secure */
  addItem = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/items/${itemId}`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Removes an association between a project and an item
   *
   * @tags Projects
   * @name DeleteItem
   * @summary Removes an association between a project and an item
   * @request DELETE:/rest/projects/{id}/items/{itemId}
   * @secure */
  deleteItem = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/items/${itemId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Adds a location to a project to limit which locations are available for charging.
   *
   * @tags Projects
   * @name AddLocation
   * @summary Adds a location to a project
   * @request POST:/rest/projects/{id}/locations/{locationId}
   * @secure */
  addLocation = (id: number, locationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/locations/${locationId}`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Removes an association between a project and a location
   *
   * @tags Projects
   * @name DeleteLocation1
   * @summary Removes an association between a project and a location
   * @request DELETE:/rest/projects/{id}/locations/{locationId}
   * @secure */
  deleteLocation1 = (id: number, locationId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/locations/${locationId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Adds an organization assignment to a project. For non-administrators, only organizations user has access to are assignable.
   *
   * @tags Projects
   * @name AddOrgAssignment
   * @summary Adds an organization assignment to a project
   * @request POST:/rest/projects/{id}/organization-assignments/{orgId}
   * @secure */
  addOrgAssignment = (id: number, orgId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/organization-assignments/${orgId}`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Removes an organization assignment from a project. For non-administrators, only organizations user has access to are removable.
   *
   * @tags Projects
   * @name DeleteOrgAssignment
   * @summary Removes an association between a project and a location
   * @request DELETE:/rest/projects/{id}/organization-assignments/{orgId}
   * @secure */
  deleteOrgAssignment = (id: number, orgId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/organization-assignments/${orgId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Adds a pay code to a project to limit which pay codes are available.
   *
   * @tags Projects
   * @name AddPayCode
   * @summary Adds a pay code to a project
   * @request POST:/rest/projects/{id}/pay-codes/{payCodeId}
   * @secure */
  addPayCode = (id: number, payCodeId: number, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/pay-codes/${payCodeId}`,
        method: "POST",
        secure: true,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes an association between a project and a pay code
   *
   * @tags Projects
   * @name DeletePayCode
   * @summary Removes an association between a project and a pay code
   * @request DELETE:/rest/projects/{id}/pay-codes/{payCodeId}
   * @secure */
  deletePayCode = (id: number, payCodeId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/pay-codes/${payCodeId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a paged list of plan sets for a given project key
   *
   * @tags Projects
   * @name GetPlanSets
   * @summary Retrieves project plan sets
   * @request GET:/rest/projects/{id}/plan-sets
   * @secure */
  getPlanSets = (
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
    this.request<PlanSetPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/plan-sets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PlanSetPagedResponse,
    ) as PlanSetPagedResponse;

  /**
   * @description Adds a plan set to a project.
   *
   * @tags Projects
   * @name AddPlanSet
   * @summary Adds a plan set to a project
   * @request POST:/rest/projects/{id}/plan-sets
   * @secure */
  addPlanSet = (id: number, data: PlanSetCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/plan-sets`,
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
   * @description Retrieves a list of predecessors for the given taskId.
   *
   * @tags Projects
   * @name GetTaskPredecessors
   * @summary Retrieves a list of task predecessors
   * @request GET:/rest/projects/{id}/tasks/{taskId}/predecessors
   * @secure */
  getTaskPredecessors = (
    id: number,
    taskId: number,
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
    this.request<TaskDependencyModelPagedResponse[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/predecessors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TaskDependencyModelPagedResponse,
    ) as TaskDependencyModelPagedResponse;

  /**
   * @description Adds a predecessor to a task.
   *
   * @tags Projects
   * @name AddTaskPredecessor
   * @summary Adds a predecessor to a task
   * @request POST:/rest/projects/{id}/tasks/{taskId}/predecessors
   * @secure */
  addTaskPredecessor = (id: number, taskId: number, data: TaskDependencyCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/predecessors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of labor categories for a given project key
   *
   * @tags Projects
   * @name GetLaborCategories
   * @summary Retrieves project labor categories
   * @request GET:/rest/projects/{id}/labor-categories
   * @secure */
  getLaborCategories = (
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
      /**
       * asOfDate must be in RFC 3339 format (YYYY-MM-DD).
       * @format date
       * @example "2020-11-20"
       */
      asOfDate?: string;
      laborCategoryId?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<AssignedLaborCategoryModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/labor-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AssignedLaborCategoryModelPagedResponse,
    ) as AssignedLaborCategoryModelPagedResponse;

  /**
   * @description Assigns a labor category to a project.
   *
   * @tags Projects
   * @name AssignLaborCategory
   * @summary Assigns a labor category to a project
   * @request POST:/rest/projects/{id}/labor-categories
   * @secure */
  assignLaborCategory = (id: number, data: AssignedLaborCategoryCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/labor-categories`,
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
   * @description Creates a project
   *
   * @tags Projects
   * @name Create29
   * @summary Creates a project
   * @request POST:/rest/projects
   * @secure */
  create29 = (data: ProjectCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects`,
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
   * @description Add a project expense budget item.
   *
   * @tags Projects
   * @name CreateExpenseBudgetItem
   * @summary Add a project expense budget item
   * @request POST:/rest/projects/{id}/expense-budgets
   * @secure */
  createExpenseBudgetItem = (id: number, data: ExpenseBudgetCreateModel, params: RequestParams = {}) =>
    this.request<ExpenseBudgetCreateModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-budgets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ExpenseBudgetCreateModel,
    ) as ExpenseBudgetCreateModel;

  /**
   * @description Add a project expense plan.
   *
   * @tags Projects
   * @name CreateExpensePlan
   * @summary Add a project expense plan
   * @request POST:/rest/projects/{id}/expense-plans
   * @secure */
  createExpensePlan = (id: number, data: ExpensePlanCreateModel, params: RequestParams = {}) =>
    this.request<ExpensePlanCreateModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-plans`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ExpensePlanCreateModel,
    ) as ExpensePlanCreateModel;

  /**
   * @description Retrieves project invoice setup details
   *
   * @tags Projects
   * @name GetInvoiceSetup
   * @summary Retrieves project invoice setup details
   * @request GET:/rest/projects/{id}/invoice-setup
   * @secure */
  getInvoiceSetup = (id: number, params: RequestParams = {}) =>
    this.request<ProjectInvoiceModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/invoice-setup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectInvoiceModel,
    ) as ProjectInvoiceModel;

  /**
   * @description Updates an existing project invoice setup.
   *
   * @tags Projects
   * @name UpdateInvoiceSetup
   * @summary Updates a project's invoice setup
   * @request PUT:/rest/projects/{id}/invoice-setup
   * @secure */
  updateInvoiceSetup = (id: number, data: ProjectInvoiceModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/invoice-setup`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Creates invoice setup for a project. If setting the project as a contributor for an invoice group, the lead project is required and the lead project's values are used for the contributor, except for description and memo fields.
   *
   * @tags Projects
   * @name CreateInvoiceSetup
   * @summary Creates invoice setup for a project
   * @request POST:/rest/projects/{id}/invoice-setup
   * @secure */
  createInvoiceSetup = (id: number, data: ProjectInvoiceCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/invoice-setup`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Gets a list of custom rates for a project's labor category assignment.
   *
   * @tags Projects
   * @name GetLaborCategoryAssignmentRates
   * @summary Get a list of rates for a project's labor category assignment.
   * @request GET:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}/rates
   * @secure */
  getLaborCategoryAssignmentRates = (
    id: number,
    laborCatAssignmentId: number,
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
    this.request<AssignedLaborCategoryRateModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}/rates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      AssignedLaborCategoryRateModelPagedResponse,
    ) as AssignedLaborCategoryRateModelPagedResponse;

  /**
   * @description Updates an existing custom rate on a project's labor category assignment.
   *
   * @tags Projects
   * @name UpdateLaborCategoryAssignmentRate
   * @summary Updates an existing custom rate on a project's labor category assignment.
   * @request PUT:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}/rates
   * @secure */
  updateLaborCategoryAssignmentRate = (
    id: number,
    laborCatAssignmentId: number,
    data: AssignedLaborCategoryRateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}/rates`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Adds a custom rate to a project's labor category assignment. The labor category assignment must be flagged to use custom rates instead of default master rates.
   *
   * @tags Projects
   * @name CreateLaborCategoryAssigmentRate
   * @summary Adds a custom rate to a project's labor category assignment.
   * @request POST:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}/rates
   * @secure */
  createLaborCategoryAssigmentRate = (
    id: number,
    laborCatAssignmentId: number,
    data: AssignedLaborCategoryRateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}/rates`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Create a project plan
   *
   * @tags Projects
   * @name CreatePlan
   * @summary Create project plan
   * @request POST:/rest/projects/{id}/people-plans
   * @secure */
  createPlan = (id: number, data: PlannedTimeCreateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/people-plans`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Create a new project assignment
   *
   * @tags Projects
   * @name CreateProjectAssignment
   * @summary Create new project assignments
   * @request POST:/rest/projects/{id}/people-assignments
   * @secure */
  createProjectAssignment = (id: number, data: ProjectAssignmentCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-assignments`,
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
   * @description Add a project-level budget snapshot.
   *
   * @tags Projects
   * @name CreateProjectBudgetSnapshot
   * @summary Add a project budget snapshot
   * @request POST:/rest/projects/{id}/budget-snapshots
   * @secure */
  createProjectBudgetSnapshot = (id: number, data: BudgetSnapshotCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/budget-snapshots`,
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
   * @description Retrieves a paged list of tasks for a given project key and optional billingTypeCode. If billingTypeCode is specified, the tasks that are returned will be based on the billingTypeCode matching the billing type specified on either the task, or the billing type specified on the project, if the task has no specified billing type override.
   *
   * @tags Projects
   * @name GetTasks
   * @summary Retrieves project tasks
   * @request GET:/rest/projects/{id}/tasks
   * @secure */
  getTasks = (
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
      billingTypeCode?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TaskSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TaskSummaryPagedResponse,
    ) as TaskSummaryPagedResponse;

  /**
   * @description Adds a new task to a project's task hierarchy
   *
   * @tags Projects
   * @name CreateTask
   * @summary Adds project task
   * @request POST:/rest/projects/{id}/tasks
   * @secure */
  createTask = (id: number, data: TaskCreateModel, params: RequestParams = {}) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks`,
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
   * @description Add a task-level budget snapshot.
   *
   * @tags Projects
   * @name CreateTaskBudgetSnapshot
   * @summary Add a task budget snapshot
   * @request POST:/rest/projects/{id}/tasks/{taskId}/budget-snapshots
   * @secure */
  createTaskBudgetSnapshot = (
    id: number,
    taskId: number,
    data: BudgetSnapshotCreateModel,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResponseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/budget-snapshots`,
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
   * @description Retrieves details of a project by its id.
   *
   * @tags Projects
   * @name GetDetailsByKey2
   * @summary Retrieves a project
   * @request GET:/rest/projects/{id}
   * @secure */
  getDetailsByKey2 = (id: number, params: RequestParams = {}) =>
    this.request<ProjectModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectModel,
    ) as ProjectModel;

  /**
   * @description Updates an existing project. Project leads are restricted to updating a subset of fields and all other edits are ignored.
   *
   * @tags Projects
   * @name Update29
   * @summary Updates a project
   * @request PUT:/rest/projects/{id}
   * @secure */
  update29 = (id: number, data: ProjectUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a project given a project id.
   *
   * @tags Projects
   * @name Delete27
   * @summary Deletes a project
   * @request DELETE:/rest/projects/{id}
   * @secure */
  delete27 = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an expense budget item for a given project key and expense budget key
   *
   * @tags Projects
   * @name GetExpenseBudgetItem
   * @summary Retrieves project expense budget item
   * @request GET:/rest/projects/{id}/expense-budgets/{expBudgetId}
   * @secure */
  getExpenseBudgetItem = (
    id: number,
    expBudgetId: number,
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
    this.request<ScheduledExpenseItemBaseModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-budgets/${expBudgetId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ScheduledExpenseItemBaseModel,
    ) as ScheduledExpenseItemBaseModel;

  /**
   * @description Update a project expense budget item.
   *
   * @tags Projects
   * @name UpdateExpenseBudgetItem
   * @summary Update a project expense budget item
   * @request PUT:/rest/projects/{id}/expense-budgets/{expBudgetId}
   * @secure */
  updateExpenseBudgetItem = (
    id: number,
    expBudgetId: number,
    data: ExpenseBudgetUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-budgets/${expBudgetId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing project expense budget item given its key.
   *
   * @tags Projects
   * @name DeleteExpenseBudgetItem
   * @summary Delete a project expense budget item
   * @request DELETE:/rest/projects/{id}/expense-budgets/{expBudgetId}
   * @secure */
  deleteExpenseBudgetItem = (id: number, expBudgetId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-budgets/${expBudgetId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an expense plan for a given project key and expense plan key
   *
   * @tags Projects
   * @name GetExpensePlan
   * @summary Retrieves project expense plan
   * @request GET:/rest/projects/{id}/expense-plans/{expPlanId}
   * @secure */
  getExpensePlan = (
    id: number,
    expPlanId: number,
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
    this.request<ScheduledExpenseItemModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-plans/${expPlanId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ScheduledExpenseItemModel,
    ) as ScheduledExpenseItemModel;

  /**
   * @description Update a project expense plan.
   *
   * @tags Projects
   * @name UpdateExpensePlan
   * @summary Update a project expense plan
   * @request PUT:/rest/projects/{id}/expense-plans/{expPlanId}
   * @secure */
  updateExpensePlan = (id: number, expPlanId: number, data: ScheduledExpenseItemModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-plans/${expPlanId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing project expense plan given its key.
   *
   * @tags Projects
   * @name DeleteExpensePlan
   * @summary Delete a project expense plan
   * @request DELETE:/rest/projects/{id}/expense-plans/{expPlanId}
   * @secure */
  deleteExpensePlan = (id: number, expPlanId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/expense-plans/${expPlanId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a project's fixed price items. Setting optional 'includeMetadata' flag to true results in the inclusion of response headers (X-Not-Deletable, X-Unmodifiable-Fields) describing the mutability of response entity.
   *
   * @tags Projects
   * @name GetFixedPriceItem
   * @summary Retrieves a project fixed price item
   * @request GET:/rest/projects/{id}/fixed-price-items/{fixedPriceItemId}
   * @secure */
  getFixedPriceItem = (
    id: number,
    fixedPriceItemId: number,
    query?: {
      /** @default false */
      includeMetadata?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FixedPriceItemModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/fixed-price-items/${fixedPriceItemId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      FixedPriceItemModel,
    ) as FixedPriceItemModel;

  /**
   * @description Updates an existing fixed price item.
   *
   * @tags Projects
   * @name UpdateFixedPriceItem
   * @summary Updates a fixed price item
   * @request PUT:/rest/projects/{id}/fixed-price-items/{fixedPriceItemId}
   * @secure */
  updateFixedPriceItem = (
    id: number,
    fixedPriceItemId: number,
    data: FixedPriceItemModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/fixed-price-items/${fixedPriceItemId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a fixed priced item from project.
   *
   * @tags Projects
   * @name DeleteFixedPriceItem
   * @summary Removes a fixed priced item
   * @request DELETE:/rest/projects/{id}/fixed-price-items/{fixedPriceItemId}
   * @secure */
  deleteFixedPriceItem = (id: number, fixedPriceItemId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/fixed-price-items/${fixedPriceItemId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Updates a labor category assignment for a project. If custom rates are supplied, any existing custom rates will be replaced with the supplied custom rates. The 'defaultToMasterRates' flag must be set to false to set custom rates.
   *
   * @tags Projects
   * @name UpdateLaborCategoryAssignment
   * @summary Updates a project's labor category assignment
   * @request PUT:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}
   * @secure */
  updateLaborCategoryAssignment = (
    id: number,
    laborCatAssignmentId: number,
    data: AssignedLaborCategoryUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Deletes an existing project labor category assignment given its key.
   *
   * @tags Projects
   * @name DeleteLaborCategoryAssignment
   * @summary Delete a project's labor category assignment
   * @request DELETE:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}
   * @secure */
  deleteLaborCategoryAssignment = (id: number, laborCatAssignmentId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Deletes a custom rate on a project's labor category assignment. The rate is based on the labor category assignment id and the begin date.
   *
   * @tags Projects
   * @name DeleteLaborCategoryAssignmentRate
   * @summary Deletes an existing custom rate on a project's labor category assignment.
   * @request DELETE:/rest/projects/{id}/labor-categories/{laborCatAssignmentId}/rates/{date}
   * @secure */
  deleteLaborCategoryAssignmentRate = (
    id: number,
    laborCatAssignmentId: number,
    date: string,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/labor-categories/${laborCatAssignmentId}/rates/${date}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a plan for the specified project.
   *
   * @tags Projects
   * @name GetPeoplePlan
   * @summary Retrieve a Project Plan
   * @request GET:/rest/projects/{id}/people-plans/{planId}
   * @secure */
  getPeoplePlan = (id: number, planId: number, params: RequestParams = {}) =>
    this.request<PlannedTimeModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-plans/${planId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PlannedTimeModel,
    ) as PlannedTimeModel;

  /**
   * @description Update a project plan
   *
   * @tags Projects
   * @name UpdatePlan
   * @summary Update project plan
   * @request PUT:/rest/projects/{id}/people-plans/{planId}
   * @secure */
  updatePlan = (id: number, planId: number, data: PlannedTimeModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/people-plans/${planId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a project plan
   *
   * @tags Projects
   * @name DeletePlan
   * @summary Delete project plan
   * @request DELETE:/rest/projects/{id}/people-plans/{planId}
   * @secure */
  deletePlan = (id: number, planId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/people-plans/${planId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Updates an existing plan set. If the plan set is locked, the name and description are not modifiable; only the active status can be updated.
   *
   * @tags Projects
   * @name UpdatePlanSet
   * @summary Updates a plan set
   * @request PUT:/rest/projects/{id}/plan-sets/{planSetId}
   * @secure */
  updatePlanSet = (id: number, planSetId: number, data: PlanSetModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/plan-sets/${planSetId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a project plan set. Locked plan sets and active plan sets cannot be removed
   *
   * @tags Projects
   * @name DeletePlanSet
   * @summary Removes a project plan set
   * @request DELETE:/rest/projects/{id}/plan-sets/{planSetId}
   * @secure */
  deletePlanSet = (id: number, planSetId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/plan-sets/${planSetId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves an assignment by key for a given project key
   *
   * @tags Projects
   * @name GetAssignmentByKey
   * @summary Retrieves a project assignment
   * @request GET:/rest/projects/{id}/people-assignments/{assignId}
   * @secure */
  getAssignmentByKey = (
    id: number,
    assignId: number,
    query?: {
      /** @default false */
      includeInactive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectAssignmentModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-assignments/${assignId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectAssignmentModel,
    ) as ProjectAssignmentModel;

  /**
   * @description Update a project assignment
   *
   * @tags Projects
   * @name UpdateProjectAssignment
   * @summary Update project assignments
   * @request PUT:/rest/projects/{id}/people-assignments/{assignId}
   * @secure */
  updateProjectAssignment = (
    id: number,
    assignId: number,
    data: ProjectAssignmentUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/people-assignments/${assignId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a project assignment
   *
   * @tags Projects
   * @name DeleteProjectAssignment
   * @summary Delete project assignments
   * @request DELETE:/rest/projects/{id}/people-assignments/{assignId}
   * @secure */
  deleteProjectAssignment = (id: number, assignId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/people-assignments/${assignId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project-level budget snapshot for a given project key and budget snapshot key
   *
   * @tags Projects
   * @name GetProjectBudgetSnapshot
   * @summary Retrieves project budget snapshot
   * @request GET:/rest/projects/{id}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  getProjectBudgetSnapshot = (id: number, budgetSnapshotId: number, params: RequestParams = {}) =>
    this.request<BudgetSnapshotModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/budget-snapshots/${budgetSnapshotId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      BudgetSnapshotModel,
    ) as BudgetSnapshotModel;

  /**
   * @description Update a project-level budget snapshot.
   *
   * @tags Projects
   * @name UpdateProjectBudgetSnapshot
   * @summary Update a project budget snapshot
   * @request PUT:/rest/projects/{id}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  updateProjectBudgetSnapshot = (
    id: number,
    budgetSnapshotId: number,
    data: BudgetSnapshotModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/budget-snapshots/${budgetSnapshotId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a project-level budget snapshot given a project id and budget snapshot id.
   *
   * @tags Projects
   * @name DeleteProjectBudgetSnapshot
   * @summary Deletes a project budget snapshot
   * @request DELETE:/rest/projects/{id}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  deleteProjectBudgetSnapshot = (id: number, budgetSnapshotId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/budget-snapshots/${budgetSnapshotId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves details of a project's task by its ID.
   *
   * @tags Projects
   * @name GetTaskDetail
   * @summary Retrieves project task
   * @request GET:/rest/projects/{id}/tasks/{taskId}
   * @secure */
  getTaskDetail = (id: number, taskId: number, params: RequestParams = {}) =>
    this.request<TaskModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      TaskModel,
    ) as TaskModel;

  /**
   * @description Updates an existing project task.  Note that if the task has predecessor " + "dependencies, the revised begin and end dates may be modified to account for the dependency unless the " + "'makeFixedDateAndRemovePredecessors' flag is set to true. The duration will be computed based on the " + "difference between the revised begin and end dates."
   *
   * @tags Projects
   * @name UpdateTask
   * @summary Updates a task
   * @request PUT:/rest/projects/{id}/tasks/{taskId}
   * @secure */
  updateTask = (id: number, taskId: number, data: TaskUpdateModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a project's task given a project and task ids.
   *
   * @tags Projects
   * @name DeleteTask
   * @summary Deletes project task
   * @request DELETE:/rest/projects/{id}/tasks/{taskId}
   * @secure */
  deleteTask = (id: number, taskId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a task-level budget snapshot for a given project key, task key and budget snapshot key
   *
   * @tags Projects
   * @name GetTaskBudgetSnapshot
   * @summary Retrieves task budget snapshot
   * @request GET:/rest/projects/{id}/tasks/{taskId}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  getTaskBudgetSnapshot = (id: number, taskId: number, budgetSnapshotId: number, params: RequestParams = {}) =>
    this.request<BudgetSnapshotModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/budget-snapshots/${budgetSnapshotId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      BudgetSnapshotModel,
    ) as BudgetSnapshotModel;

  /**
   * @description Update a task-level budget snapshot.
   *
   * @tags Projects
   * @name UpdateTaskBudgetSnapshot
   * @summary Update a task budget snapshot
   * @request PUT:/rest/projects/{id}/tasks/{taskId}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  updateTaskBudgetSnapshot = (
    id: number,
    taskId: number,
    budgetSnapshotId: number,
    data: BudgetSnapshotModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/budget-snapshots/${budgetSnapshotId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a task-level budget snapshot given a project id and budget snapshot id.
   *
   * @tags Projects
   * @name DeleteTaskBudgetSnapshots
   * @summary Deletes a task budget snapshot
   * @request DELETE:/rest/projects/{id}/tasks/{taskId}/budget-snapshots/{budgetSnapshotId}
   * @secure */
  deleteTaskBudgetSnapshots = (id: number, taskId: number, budgetSnapshotId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/budget-snapshots/${budgetSnapshotId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Updates a tasks's existing predecessor.
   *
   * @tags Projects
   * @name UpdateTaskPredecessor
   * @summary Updates a task's predecessor
   * @request PUT:/rest/projects/{id}/tasks/{successorId}/predecessors/{predecessorId}
   * @secure */
  updateTaskPredecessor = (
    id: number,
    successorId: number,
    predecessorId: number,
    data: TaskDependencyModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${successorId}/predecessors/${predecessorId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Removes a predecessor task from the successor task's list of predecessors.
   *
   * @tags Projects
   * @name DeleteTaskPredecessor
   * @summary Remove a predecessor from a task
   * @request DELETE:/rest/projects/{id}/tasks/{successorId}/predecessors/{predecessorId}
   * @secure */
  deleteTaskPredecessor = (id: number, successorId: number, predecessorId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${successorId}/predecessors/${predecessorId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a list of available project account categories.
   *
   * @tags Projects
   * @name GetAccountCategories2
   * @summary Retrieves a list of project account categories
   * @request GET:/rest/projects/account-categories
   * @secure */
  getAccountCategories2 = (params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/projects/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    ) as AccountCategoryModel;

  /**
   * @description This route has been deprecated in favor of /rest/projects/account-categories. Retrieves a list of project account categories.
   *
   * @tags Projects
   * @name GetAccountCategories3
   * @summary Retrieves a list of account categories. Note this route has been deprecated in favor of /rest/projects/account-categories
   * @request GET:/rest/projects/{id}/account-categories
   * @deprecated
   * @secure */
  getAccountCategories3 = (id: number, params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    ) as AccountCategoryModel;

  /**
   * @description Retrieves a list of project account.
   *
   * @tags Projects
   * @name GetAccounts1
   * @summary Retrieves a list of project accounts
   * @request GET:/rest/projects/{id}/accounts
   * @secure */
  getAccounts1 = (id: number, params: RequestParams = {}) =>
    this.request<CategoryAccountModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CategoryAccountModel,
    ) as CategoryAccountModel;

  /**
   * @description Update a project's account setup.
   *
   * @tags Projects
   * @name UpdateAccount
   * @summary Update a project's accounts
   * @request PUT:/rest/projects/{id}/accounts
   * @secure */
  updateAccount = (id: number, data: CategoryAccountKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/accounts`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate billing managers.
   *
   * @tags Projects
   * @name GetAdminBillingManagerAlternates
   * @summary Retrieve a project's alternate billing managers
   * @request GET:/rest/projects/{id}/admin/billing-managers/alternate
   * @secure */
  getAdminBillingManagerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/billing-managers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate billing managers.
   *
   * @tags Projects
   * @name SetAdminBillingManagerAlternates
   * @summary Update a project's alternate billing managers
   * @request PUT:/rest/projects/{id}/admin/billing-managers/alternate
   * @secure */
  setAdminBillingManagerAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/billing-managers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary billing manager.
   *
   * @tags Projects
   * @name GetAdminBillingManagerPrimary
   * @summary Retrieve a project's primary billing manager
   * @request GET:/rest/projects/{id}/admin/billing-managers/primary
   * @secure */
  getAdminBillingManagerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/billing-managers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary billing manager.
   *
   * @tags Projects
   * @name SetAdminBillingManagerPrimary
   * @summary Update a project's primary billing manager
   * @request PUT:/rest/projects/{id}/admin/billing-managers/primary
   * @secure */
  setAdminBillingManagerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/billing-managers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary billing manager.
   *
   * @tags Projects
   * @name RemoveAdminBillingManagerPrimary
   * @summary Remove a project's primary billing manager
   * @request DELETE:/rest/projects/{id}/admin/billing-managers/primary
   * @secure */
  removeAdminBillingManagerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/billing-managers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate billing viewers.
   *
   * @tags Projects
   * @name GetAdminBillingViewerAlternates
   * @summary Retrieve a project's alternate billing viewers
   * @request GET:/rest/projects/{id}/admin/billing-viewers/alternate
   * @secure */
  getAdminBillingViewerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/billing-viewers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate billing viewers.
   *
   * @tags Projects
   * @name SetAdminBillingViewerAlternates
   * @summary Update a project's alternate billing viewers
   * @request PUT:/rest/projects/{id}/admin/billing-viewers/alternate
   * @secure */
  setAdminBillingViewerAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/billing-viewers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary billing viewer.
   *
   * @tags Projects
   * @name GetAdminBillingViewerPrimary
   * @summary Retrieve a project's primary billing viewer
   * @request GET:/rest/projects/{id}/admin/billing-viewers/primary
   * @secure */
  getAdminBillingViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/billing-viewers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary billing viewer.
   *
   * @tags Projects
   * @name SetAdminBillingViewerPrimary
   * @summary Update a project's primary billing viewer
   * @request PUT:/rest/projects/{id}/admin/billing-viewers/primary
   * @secure */
  setAdminBillingViewerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/billing-viewers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary billing viewer.
   *
   * @tags Projects
   * @name RemoveAdminBillingViewerPrimary
   * @summary Remove a project's primary billing viewer
   * @request DELETE:/rest/projects/{id}/admin/billing-viewers/primary
   * @secure */
  removeAdminBillingViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/billing-viewers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieve a project's alternate customer administrators.
   *
   * @tags Projects
   * @name GetAdminCustomerAlternates
   * @summary Retrieve a project's alternate customer administrators
   * @request GET:/rest/projects/{id}/admin/customers/alternates
   * @secure */
  getAdminCustomerAlternates = (id: number, params: RequestParams = {}) =>
    this.request<ProjectApproverGroupModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/customers/alternates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectApproverGroupModel,
    ) as ProjectApproverGroupModel;

  /**
   * @description Update a project's alternate customer administrators.
   *
   * @tags Projects
   * @name SetAdminCustomerAlternates
   * @summary Update a project's alternate customer administrators
   * @request PUT:/rest/projects/{id}/admin/customers/alternates
   * @secure */
  setAdminCustomerAlternates = (id: number, data: ProjectApproverGroupUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/customers/alternates`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieve a project's primary customer administrator.
   *
   * @tags Projects
   * @name GetAdminCustomerPrimary
   * @summary Retrieve a project's primary customer administrator
   * @request GET:/rest/projects/{id}/admin/customers/primary
   * @secure */
  getAdminCustomerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<ProjectCustomerAdminModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/customers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectCustomerAdminModel,
    ) as ProjectCustomerAdminModel;

  /**
   * @description Update a project's primary customer administrator.
   *
   * @tags Projects
   * @name SetAdminCustomerPrimary
   * @summary Update a project's primary customer administrator
   * @request PUT:/rest/projects/{id}/admin/customers/primary
   * @secure */
  setAdminCustomerPrimary = (id: number, data: ProjectCustomerAdminUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/customers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's alternate document viewers.
   *
   * @tags Projects
   * @name GetAdminDocumentViewerAlternates
   * @summary Retrieve a project's alternate document viewers
   * @request GET:/rest/projects/{id}/admin/document-viewers/alternate
   * @secure */
  getAdminDocumentViewerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/document-viewers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate document viewers.
   *
   * @tags Projects
   * @name SetAdminDocumentViewerAlternates
   * @summary Update a project's alternate document viewers
   * @request PUT:/rest/projects/{id}/admin/document-viewers/alternate
   * @secure */
  setAdminDocumentViewerAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/document-viewers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary document viewer.
   *
   * @tags Projects
   * @name GetAdminDocumentViewerPrimary
   * @summary Retrieve a project's primary document viewer
   * @request GET:/rest/projects/{id}/admin/document-viewers/primary
   * @secure */
  getAdminDocumentViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/document-viewers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary document viewer.
   *
   * @tags Projects
   * @name SetAdminDocumentViewerPrimary
   * @summary Update a project's primary document viewer
   * @request PUT:/rest/projects/{id}/admin/document-viewers/primary
   * @secure */
  setAdminDocumentViewerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/document-viewers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary document viewer.
   *
   * @tags Projects
   * @name RemoveAdminDocumentViewerPrimary
   * @summary Remove a project's primary document viewer
   * @request DELETE:/rest/projects/{id}/admin/document-viewers/primary
   * @secure */
  removeAdminDocumentViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/document-viewers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate leads.
   *
   * @tags Projects
   * @name GetAdminLeadAlternates
   * @summary Retrieve a project's alternate leads
   * @request GET:/rest/projects/{id}/admin/leads/alternate
   * @secure */
  getAdminLeadAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/leads/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate leads.
   *
   * @tags Projects
   * @name SetAdminLeadAlternates
   * @summary Update a project's alternate leads
   * @request PUT:/rest/projects/{id}/admin/leads/alternate
   * @secure */
  setAdminLeadAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/leads/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary lead.
   *
   * @tags Projects
   * @name GetAdminLeadPrimary
   * @summary Retrieve a project's primary lead
   * @request GET:/rest/projects/{id}/admin/leads/primary
   * @secure */
  getAdminLeadPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/leads/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary lead.
   *
   * @tags Projects
   * @name SetAdminLeadPrimary
   * @summary Update a project's primary lead
   * @request PUT:/rest/projects/{id}/admin/leads/primary
   * @secure */
  setAdminLeadPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/leads/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary lead.
   *
   * @tags Projects
   * @name RemoveAdminLeadPrimary
   * @summary Remove a project's primary lead
   * @request DELETE:/rest/projects/{id}/admin/leads/primary
   * @secure */
  removeAdminLeadPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/leads/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate managers.
   *
   * @tags Projects
   * @name GetAdminManagerAlternates
   * @summary Retrieve a project's alternate managers
   * @request GET:/rest/projects/{id}/admin/managers/alternate
   * @secure */
  getAdminManagerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/managers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate managers.
   *
   * @tags Projects
   * @name SetAdminManagerAlternates
   * @summary Update a project's alternate managers
   * @request PUT:/rest/projects/{id}/admin/managers/alternate
   * @secure */
  setAdminManagerAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/managers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary manager.
   *
   * @tags Projects
   * @name GetAdminManagerPrimary
   * @summary Retrieve a project's primary manager
   * @request GET:/rest/projects/{id}/admin/managers/primary
   * @secure */
  getAdminManagerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/managers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary manager.
   *
   * @tags Projects
   * @name SetAdminManagerPrimary
   * @summary Update a project's primary manager
   * @request PUT:/rest/projects/{id}/admin/managers/primary
   * @secure */
  setAdminManagerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/managers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary manager.
   *
   * @tags Projects
   * @name RemoveAdminManagerPrimary
   * @summary Remove a project's primary manager
   * @request DELETE:/rest/projects/{id}/admin/managers/primary
   * @secure */
  removeAdminManagerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/managers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate project approvers.
   *
   * @tags Projects
   * @name GetAdminProjectApproverAlternates
   * @summary Retrieve a project's alternate project approvers
   * @request GET:/rest/projects/{id}/admin/project-approvers/alternates
   * @secure */
  getAdminProjectApproverAlternates = (id: number, params: RequestParams = {}) =>
    this.request<ProjectApproverGroupModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/project-approvers/alternates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectApproverGroupModel,
    ) as ProjectApproverGroupModel;

  /**
   * @description Update a project's alternate project approvers.
   *
   * @tags Projects
   * @name SetAdminProjectApproverAlternates
   * @summary Update a project's alternate project approvers
   * @request PUT:/rest/projects/{id}/admin/project-approvers/alternates
   * @secure */
  setAdminProjectApproverAlternates = (id: number, data: ProjectApproverGroupUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/project-approvers/alternates`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary project approver.
   *
   * @tags Projects
   * @name GetAdminProjectApproverPrimary
   * @summary Retrieve a project's primary project approver
   * @request GET:/rest/projects/{id}/admin/project-approvers/primary
   * @secure */
  getAdminProjectApproverPrimary = (id: number, params: RequestParams = {}) =>
    this.request<ProjectApproverAdminModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/project-approvers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectApproverAdminModel,
    ) as ProjectApproverAdminModel;

  /**
   * @description Update a project's primary project approvers.
   *
   * @tags Projects
   * @name SetAdminProjectApproversPrimary
   * @summary Update a project's primary project approvers
   * @request PUT:/rest/projects/{id}/admin/project-approvers/primary
   * @secure */
  setAdminProjectApproversPrimary = (id: number, data: ProjectApproverAdminUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/project-approvers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's alternate purchase order viewers.
   *
   * @tags Projects
   * @name GetAdminPurchaseOrderViewerAlternates
   * @summary Retrieve a project's alternate purchase order viewers
   * @request GET:/rest/projects/{id}/admin/po-viewers/alternate
   * @secure */
  getAdminPurchaseOrderViewerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/po-viewers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate purchase order viewers.
   *
   * @tags Projects
   * @name SetAdminPurchaseOrderViewerAlternates
   * @summary Update a project's alternate purchase order viewers
   * @request PUT:/rest/projects/{id}/admin/po-viewers/alternate
   * @secure */
  setAdminPurchaseOrderViewerAlternates = (
    id: number,
    data: ProjectAdminAlternateUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/po-viewers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary purchase order viewer.
   *
   * @tags Projects
   * @name GetAdminPurchaseOrderViewerPrimary
   * @summary Retrieve a project's primary purchase order viewer
   * @request GET:/rest/projects/{id}/admin/po-viewers/primary
   * @secure */
  getAdminPurchaseOrderViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/po-viewers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary purchase order viewer.
   *
   * @tags Projects
   * @name SetAdminPurchaseOrderViewerPrimary
   * @summary Update a project's primary purchase order viewer
   * @request PUT:/rest/projects/{id}/admin/po-viewers/primary
   * @secure */
  setAdminPurchaseOrderViewerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/po-viewers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary purchase order viewer.
   *
   * @tags Projects
   * @name RemoveAdminPurchaseOrderViewerPrimary
   * @summary Remove a project's primary purchase order viewer
   * @request DELETE:/rest/projects/{id}/admin/po-viewers/primary
   * @secure */
  removeAdminPurchaseOrderViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/po-viewers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate purchase requisition viewers.
   *
   * @tags Projects
   * @name GetAdminPurchaseRequisitionViewerAlternates
   * @summary Retrieve a project's alternate purchase requisition viewers
   * @request GET:/rest/projects/{id}/admin/pr-viewers/alternate
   * @secure */
  getAdminPurchaseRequisitionViewerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/pr-viewers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate purchase requisition viewers.
   *
   * @tags Projects
   * @name SetAdminPurchaseRequisitionViewerAlternates
   * @summary Update a project's alternate purchase requisition viewers
   * @request PUT:/rest/projects/{id}/admin/pr-viewers/alternate
   * @secure */
  setAdminPurchaseRequisitionViewerAlternates = (
    id: number,
    data: ProjectAdminAlternateUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/pr-viewers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary purchase requisition viewer.
   *
   * @tags Projects
   * @name GetAdminPurchaseRequisitionViewerPrimary
   * @summary Retrieve a project's primary purchase requisition viewer
   * @request GET:/rest/projects/{id}/admin/pr-viewers/primary
   * @secure */
  getAdminPurchaseRequisitionViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/pr-viewers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary purchase requisition viewer.
   *
   * @tags Projects
   * @name SetAdminPurchaseRequisitionViewerPrimary
   * @summary Update a project's primary purchase requisition viewer
   * @request PUT:/rest/projects/{id}/admin/pr-viewers/primary
   * @secure */
  setAdminPurchaseRequisitionViewerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/pr-viewers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary purchase requisition viewer.
   *
   * @tags Projects
   * @name RemoveAdminPurchaseRequisitionViewerPrimary
   * @summary Remove a project's primary purchase requisition viewer
   * @request DELETE:/rest/projects/{id}/admin/pr-viewers/primary
   * @secure */
  removeAdminPurchaseRequisitionViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/pr-viewers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate resource assigners.
   *
   * @tags Projects
   * @name GetAdminResourceAssignerAlternates
   * @summary Retrieve a project's alternate resource assigners
   * @request GET:/rest/projects/{id}/admin/resource-assigners/alternate
   * @secure */
  getAdminResourceAssignerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-assigners/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate resource assigners.
   *
   * @tags Projects
   * @name SetAdminResourceAssignerAlternates
   * @summary Update a project's alternate resource assigners
   * @request PUT:/rest/projects/{id}/admin/resource-assigners/alternate
   * @secure */
  setAdminResourceAssignerAlternates = (
    id: number,
    data: ProjectAdminAlternateUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-assigners/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary resource assigner.
   *
   * @tags Projects
   * @name GetAdminResourceAssignerPrimary
   * @summary Retrieve a project's primary resource assigner
   * @request GET:/rest/projects/{id}/admin/resource-assigners/primary
   * @secure */
  getAdminResourceAssignerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-assigners/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary resource assigner.
   *
   * @tags Projects
   * @name SetAdminResourceAssignerPrimary
   * @summary Update a project's primary resource assigner
   * @request PUT:/rest/projects/{id}/admin/resource-assigners/primary
   * @secure */
  setAdminResourceAssignerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-assigners/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary resource assigner.
   *
   * @tags Projects
   * @name RemoveAdminResourceAssignerPrimary
   * @summary Remove a project's primary resource assigner
   * @request DELETE:/rest/projects/{id}/admin/resource-assigners/primary
   * @secure */
  removeAdminResourceAssignerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/resource-assigners/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate resource planners.
   *
   * @tags Projects
   * @name GetAdminResourcePlannerAlternates
   * @summary Retrieve a project's alternate resource planners
   * @request GET:/rest/projects/{id}/admin/resource-planners/alternate
   * @secure */
  getAdminResourcePlannerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-planners/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate resource planners.
   *
   * @tags Projects
   * @name SetAdminResourcePlannerAlternates
   * @summary Update a project's alternate resource planners
   * @request PUT:/rest/projects/{id}/admin/resource-planners/alternate
   * @secure */
  setAdminResourcePlannerAlternates = (
    id: number,
    data: ProjectAdminAlternateUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-planners/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary resource planner.
   *
   * @tags Projects
   * @name GetAdminResourcePlannerPrimary
   * @summary Retrieve a project's primary resource planner
   * @request GET:/rest/projects/{id}/admin/resource-planners/primary
   * @secure */
  getAdminResourcePlannerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-planners/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary resource planner.
   *
   * @tags Projects
   * @name SetAdminResourcePlannerPrimary
   * @summary Update a project's primary resource planner
   * @request PUT:/rest/projects/{id}/admin/resource-planners/primary
   * @secure */
  setAdminResourcePlannerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-planners/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary resource planner.
   *
   * @tags Projects
   * @name RemoveAdminResourcePlannerPrimary
   * @summary Remove a project's primary resource planner
   * @request DELETE:/rest/projects/{id}/admin/resource-planners/primary
   * @secure */
  removeAdminResourcePlannerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/resource-planners/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate resource requestors.
   *
   * @tags Projects
   * @name GetAdminResourceRequestorAlternates
   * @summary Retrieve a project's alternate resource requestors
   * @request GET:/rest/projects/{id}/admin/resource-requestors/alternate
   * @secure */
  getAdminResourceRequestorAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-requestors/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate resource requestors.
   *
   * @tags Projects
   * @name SetAdminResourceRequestorAlternates
   * @summary Update a project's alternate resource requestors
   * @request PUT:/rest/projects/{id}/admin/resource-requestors/alternate
   * @secure */
  setAdminResourceRequestorAlternates = (
    id: number,
    data: ProjectAdminAlternateUpdateModel,
    params: RequestParams = {},
  ) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-requestors/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary resource requestor.
   *
   * @tags Projects
   * @name GetAdminResourceRequestorPrimary
   * @summary Retrieve a project's primary resource requestor
   * @request GET:/rest/projects/{id}/admin/resource-requestors/primary
   * @secure */
  getAdminResourceRequestorPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/resource-requestors/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary resource requestor.
   *
   * @tags Projects
   * @name SetAdminResourceRequestorPrimary
   * @summary Update a project's primary resource requestor
   * @request PUT:/rest/projects/{id}/admin/resource-requestors/primary
   * @secure */
  setAdminResourceRequestorPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/resource-requestors/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary resource requestor.
   *
   * @tags Projects
   * @name RemoveAdminResourceRequestorPrimary
   * @summary Remove a project's primary resource requestor
   * @request DELETE:/rest/projects/{id}/admin/resource-requestors/primary
   * @secure */
  removeAdminResourceRequestorPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/resource-requestors/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves a project's alternate viewers.
   *
   * @tags Projects
   * @name GetAdminViewerAlternates
   * @summary Retrieve a project's alternate viewers
   * @request GET:/rest/projects/{id}/admin/viewers/alternate
   * @secure */
  getAdminViewerAlternates = (
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
    this.request<PersonNameModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/viewers/alternate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModelPagedResponse,
    ) as PersonNameModelPagedResponse;

  /**
   * @description Update a project's alternate viewers.
   *
   * @tags Projects
   * @name SetAdminViewerAlternates
   * @summary Update a project's alternate viewers
   * @request PUT:/rest/projects/{id}/admin/viewers/alternate
   * @secure */
  setAdminViewerAlternates = (id: number, data: ProjectAdminAlternateUpdateModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/viewers/alternate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Retrieves a project's primary viewer.
   *
   * @tags Projects
   * @name GetAdminViewerPrimary
   * @summary Retrieve a project's primary viewer
   * @request GET:/rest/projects/{id}/admin/viewers/primary
   * @secure */
  getAdminViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<PersonNameModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/admin/viewers/primary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      PersonNameModel,
    ) as PersonNameModel;

  /**
   * @description Update a project's primary viewer.
   *
   * @tags Projects
   * @name SetAdminViewerPrimary
   * @summary Update a project's primary viewer
   * @request PUT:/rest/projects/{id}/admin/viewers/primary
   * @secure */
  setAdminViewerPrimary = (id: number, data: KeyModel, params: RequestParams = {}) =>
    this.request<any, ErrorResponse | void>(
      {
        path: `/rest/projects/${id}/admin/viewers/primary`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      },
      any,
    ) as any;

  /**
   * @description Removes a project's primary viewer.
   *
   * @tags Projects
   * @name RemoveAdminViewerPrimary
   * @summary Remove a project's primary viewer
   * @request DELETE:/rest/projects/{id}/admin/viewers/primary
   * @secure */
  removeAdminViewerPrimary = (id: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/admin/viewers/primary`,
      method: "DELETE",
      secure: true,
      ...params,
    });

  /**
   * @description Retrieves project alert preferences by project id.
   *
   * @tags Projects
   * @name GetAlertPrefs
   * @summary Retrieves project alert preferences
   * @request GET:/rest/projects/{id}/alert-config
   * @secure */
  getAlertPrefs = (id: number, params: RequestParams = {}) =>
    this.request<ProjectAlertPrefsModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/alert-config`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectAlertPrefsModel,
    ) as ProjectAlertPrefsModel;

  /**
   * @description Updates the performance alert preferences associated with a project. Select NONE, DEFAULT, or CUSTOM. If DEFAULT is selected, the project uses the project manager's alert preferences instead of saving it's own preferences.
   *
   * @tags Projects
   * @name UpdateAlertPrefs
   * @summary Updates performance alert preferences for a project
   * @request PUT:/rest/projects/{id}/alert-config
   * @secure */
  updateAlertPrefs = (id: number, data: ProjectAlertPrefsModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/alert-config`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves all project alerts for the requesting Project Manager, Lead, or Approver user.
   *
   * @tags Projects
   * @name GetAllAlerts
   * @summary Retrieves project alerts for the requesting user
   * @request GET:/rest/projects/alerts
   * @secure */
  getAllAlerts = (
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
    this.request<ProjectAlertsPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/alerts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectAlertsPagedResponse,
    ) as ProjectAlertsPagedResponse;

  /**
   * @description Retrieves a paged list of all available accounts receivable approval groups.
   *
   * @tags Projects
   * @name GetApprovalGroupsForInvoiceSetup
   * @summary Retrieves accounts receivable approval groups
   * @request GET:/rest/projects/invoice-setup/approval-groups
   * @secure */
  getApprovalGroupsForInvoiceSetup = (
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
    this.request<ApprovalGroupPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/invoice-setup/approval-groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ApprovalGroupPagedResponse,
    ) as ApprovalGroupPagedResponse;

  /**
   * @description Retrieves default assignment values given a project, person, date
   *
   * @tags Projects
   * @name GetAssignmentDefaults
   * @summary Retrieves project assignment defaults for a person and date
   * @request GET:/rest/projects/{id}/people-assignments/defaults/person/{personId}/{date}
   * @secure */
  getAssignmentDefaults = (id: number, personId: number, date: string, params: RequestParams = {}) =>
    this.request<AssignmentDefaultsModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-assignments/defaults/person/${personId}/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AssignmentDefaultsModel,
    ) as AssignmentDefaultsModel;

  /**
   * @description Retrieves available contributor projects a lead project can add to its invoice group, filterable by project code and/or project org code. The list is affected by user role access restrictions and the value of the unanet.financials.use_financial_orgs property. Note that projects already assigned to another invoice group are not included.
   *
   * @tags Projects
   * @name GetAvailableContributorsForInvoiceSetup
   * @summary Retrieves available contributor projects a lead project can add to its invoice group
   * @request POST:/rest/projects/{id}/invoice-setup/available-contributors
   * @secure */
  getAvailableContributorsForInvoiceSetup = (
    id: number,
    data: ProjectInvoiceAvailProjSearchModel,
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
    this.request<ProjectDisplayNamePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/invoice-setup/available-contributors`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectDisplayNamePagedResponse,
    ) as ProjectDisplayNamePagedResponse;

  /**
   * @description Retrieves available lead projects a contributor project can assign to its invoice group, filterable by project code and/or project org code. The currently assigned lead project will always be returned. The list is affected by user role access restrictions and the value of the unanet.financials.use_financial_orgs property.
   *
   * @tags Projects
   * @name GetAvailableLeadsForInvoiceSetup
   * @summary Retrieves available lead projects a contributor project can assign to its invoice group
   * @request POST:/rest/projects/{id}/invoice-setup/available-leads
   * @secure */
  getAvailableLeadsForInvoiceSetup = (
    id: number,
    data: ProjectInvoiceAvailProjSearchModel,
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
    this.request<ProjectDisplayNamePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/invoice-setup/available-leads`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectDisplayNamePagedResponse,
    ) as ProjectDisplayNamePagedResponse;

  /**
   * @description Retrieves a paged list of budget history for a given project.
   *
   * @tags Projects
   * @name GetBudgetHistory
   * @summary Retrieves project budget history
   * @request GET:/rest/projects/{id}/budget-history
   * @secure */
  getBudgetHistory = (
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
    this.request<ProjectBudgetHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/budget-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectBudgetHistoryPagedResponse,
    ) as ProjectBudgetHistoryPagedResponse;

  /**
   * @description Retrieves a paged list of budget snapshots for a given project key matching the given search criteria.
   *
   * @tags Projects
   * @name GetBudgetSnapshots
   * @summary Retrieves project and task budget snapshots
   * @request POST:/rest/projects/{id}/budget-snapshots/search
   * @secure */
  getBudgetSnapshots = (
    id: number,
    data: BudgetSnapshotSearchModel,
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
    this.request<BudgetSnapshotPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/budget-snapshots/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      BudgetSnapshotPagedResponse,
    ) as BudgetSnapshotPagedResponse;

  /**
   * @description Retrieves a paged list of expense budgets for a given project key matching the given search criteria.
   *
   * @tags Projects
   * @name GetExpenseBudgets
   * @summary Retrieves project expense budgets
   * @request POST:/rest/projects/{id}/expense-budgets/search
   * @secure */
  getExpenseBudgets = (
    id: number,
    data: ExpenseBudgetSearchModel,
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
    this.request<ProjectExpenseBudgetPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-budgets/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectExpenseBudgetPagedResponse,
    ) as ProjectExpenseBudgetPagedResponse;

  /**
   * @description Retrieves a paged list of expense plans for a given project key matching the given search criteria.
   *
   * @tags Projects
   * @name GetExpensePlans
   * @summary Retrieves project expense plans
   * @request POST:/rest/projects/{id}/expense-plans/search
   * @secure */
  getExpensePlans = (
    id: number,
    data: ExpensePlanSearchModel,
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
    this.request<ScheduledExpenseItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-plans/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ScheduledExpenseItemPagedResponse,
    ) as ScheduledExpenseItemPagedResponse;

  /**
   * @description Retrieves a paged list of expense types for a given project key
   *
   * @tags Projects
   * @name GetExpenseTypes1
   * @summary Retrieves project expense types
   * @request GET:/rest/projects/{id}/expense-types
   * @secure */
  getExpenseTypes1 = (
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
    this.request<ProjectExpenseTypePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/expense-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectExpenseTypePagedResponse,
    ) as ProjectExpenseTypePagedResponse;

  /**
   * @description Retrieves units of measure and rates for a project item
   *
   * @tags Projects
   * @name GetItemUoms
   * @summary Retrieves units of measure and rates for a project item
   * @request GET:/rest/projects/{id}/items/{itemId}/uoms
   * @secure */
  getItemUoms = (id: number, itemId: number, params: RequestParams = {}) =>
    this.request<UOMRateCollectionModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/items/${itemId}/uoms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      UOMRateCollectionModel,
    ) as UOMRateCollectionModel;

  /**
   * @description Retrieves a paged list of items for a given project key, sorted by 'code'.
   *
   * @tags Projects
   * @name GetItems
   * @summary Retrieves project items
   * @request GET:/rest/projects/{id}/items
   * @secure */
  getItems = (
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
    this.request<ItemPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ItemPagedResponse,
    ) as ItemPagedResponse;

  /**
   * @description Retrieves a paged list of locations for a given project key
   *
   * @tags Projects
   * @name GetLocations1
   * @summary Retrieves project locations
   * @request GET:/rest/projects/{id}/locations
   * @secure */
  getLocations1 = (
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
    this.request<LocationPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      LocationPagedResponse,
    ) as LocationPagedResponse;

  /**
   * @description Updates the locations associated with a project. The list will be overridden with the supplied list of location keys.
   *
   * @tags Projects
   * @name UpdateLocations
   * @summary Updates the locations associated with a project
   * @request PUT:/rest/projects/{id}/locations
   * @secure */
  updateLocations = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/locations`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of organization assignments for a given project key. For non-administrators, only organizations user has access to view will be visible.
   *
   * @tags Projects
   * @name GetOrganizationAssignments
   * @summary Retrieves project organization assignments
   * @request GET:/rest/projects/{id}/organization-assignments
   * @secure */
  getOrganizationAssignments = (
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
    this.request<KeyNameCodeModelPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/organization-assignments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      KeyNameCodeModelPagedResponse,
    ) as KeyNameCodeModelPagedResponse;

  /**
   * @description Updates the organization assignments associated with a project. For non-administrators, only organizations user has access to are updateable.
   *
   * @tags Projects
   * @name UpdateOrgAssignments
   * @summary Updates the organization-assignments associated with a project
   * @request PUT:/rest/projects/{id}/organization-assignments
   * @secure */
  updateOrgAssignments = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/organization-assignments`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of plan set audit events for a given project key and plan set key
   *
   * @tags Projects
   * @name GetPlanSetHistory
   * @summary View audit trail for a plan set
   * @request GET:/rest/projects/{id}/plan-sets/{planSetId}/history
   * @secure */
  getPlanSetHistory = (
    id: number,
    planSetId: number,
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
    this.request<PlanSetAuditPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/plan-sets/${planSetId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PlanSetAuditPagedResponse,
    ) as PlanSetAuditPagedResponse;

  /**
   * @description Retrieves project alerts for a specific project for the requesting Project Manager, Lead or Approver user.
   *
   * @tags Projects
   * @name GetProjectAlerts
   * @summary Retrieves project alerts by project ID for the requesting user
   * @request GET:/rest/projects/{id}/alerts
   * @secure */
  getProjectAlerts = (
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
    this.request<ProjectAlertsPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/alerts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectAlertsPagedResponse,
    ) as ProjectAlertsPagedResponse;

  /**
   * @description Retrieves a paged list of assignments for a given project key
   *
   * @tags Projects
   * @name GetProjectAssignments1
   * @summary Retrieves project assignments
   * @request POST:/rest/projects/{id}/people-assignments/search
   * @secure */
  getProjectAssignments1 = (
    id: number,
    data: ProjectAssignmentSearchModel,
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
    this.request<ProjectAssignmentPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-assignments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectAssignmentPagedResponse,
    ) as ProjectAssignmentPagedResponse;

  /**
   * @description Retrieves a list of project pay codes for a given project key
   *
   * @tags Projects
   * @name GetProjectPayCodes
   * @summary Retrieves a list of project pay codes
   * @request GET:/rest/projects/{id}/pay-codes
   * @secure */
  getProjectPayCodes = (
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
    this.request<PayCodePagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/pay-codes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      PayCodePagedResponse,
    ) as PayCodePagedResponse;

  /**
   * @description Updates the pay codes associated with a project. The list will be overridden with the supplied list of pay code keys.
   *
   * @tags Projects
   * @name UpdatePayCodes
   * @summary Updates the pay codes associated with a project
   * @request PUT:/rest/projects/{id}/pay-codes
   * @secure */
  updatePayCodes = (id: number, data: KeysModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/pay-codes`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a list of available task account categories.
   *
   * @tags Projects
   * @name GetTaskAccountCategories
   * @summary Retrieves a list of task account categories
   * @request GET:/rest/projects/tasks/account-categories
   * @secure */
  getTaskAccountCategories = (params: RequestParams = {}) =>
    this.request<AccountCategoryModel[], ErrorResponse>(
      {
        path: `/rest/projects/tasks/account-categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      AccountCategoryModel,
    ) as AccountCategoryModel;

  /**
   * @description Retrieves a list of task accounts.
   *
   * @tags Projects
   * @name GetTaskAccounts
   * @summary Retrieves a list of task accounts
   * @request GET:/rest/projects/{id}/tasks/{taskId}/accounts
   * @secure */
  getTaskAccounts = (id: number, taskId: number, params: RequestParams = {}) =>
    this.request<CategoryAccountModel[], ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      CategoryAccountModel,
    ) as CategoryAccountModel;

  /**
   * @description Update a task's account setup.
   *
   * @tags Projects
   * @name UpdateTaskAccounts
   * @summary Update a task's accounts
   * @request PUT:/rest/projects/{id}/tasks/{taskId}/accounts
   * @secure */
  updateTaskAccounts = (id: number, taskId: number, data: CategoryAccountKeyModel[], params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/accounts`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of budget history for a given task.
   *
   * @tags Projects
   * @name GetTaskBudgetHistory
   * @summary Retrieves task budget history
   * @request GET:/rest/projects/{id}/tasks/{taskId}/budget-history
   * @secure */
  getTaskBudgetHistory = (
    id: number,
    taskId: number,
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
    this.request<TaskBudgetHistoryPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/tasks/${taskId}/budget-history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      },
      TaskBudgetHistoryPagedResponse,
    ) as TaskBudgetHistoryPagedResponse;

  /**
   * @description Retrieves a list of valid contact addresses a lead or standalone project can assign to it's bill to/ship to/remit to fields,
   *
   * @tags Projects
   * @name GetValidContactAddressesForInvoiceSetup
   * @summary Retrieves list of valid contact addresses for project invoice setup.
   * @request GET:/rest/projects/{id}/invoice-setup/valid-addresses
   * @secure */
  getValidContactAddressesForInvoiceSetup = (id: number, params: RequestParams = {}) =>
    this.request<ProjectInvoiceContactAddressModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/invoice-setup/valid-addresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectInvoiceContactAddressModel,
    ) as ProjectInvoiceContactAddressModel;

  /**
   * @description Retrieves valid contacts a lead or standalone project can assign to it's bill to/ship to/remit to fields,
   *
   * @tags Projects
   * @name GetValidContactsForInvoiceSetup
   * @summary Retrieves list of valid contacts for project invoice setup.
   * @request GET:/rest/projects/{id}/invoice-setup/valid-contacts
   * @secure */
  getValidContactsForInvoiceSetup = (id: number, params: RequestParams = {}) =>
    this.request<ProjectInvoiceContactModel, ErrorResponse>(
      {
        path: `/rest/projects/${id}/invoice-setup/valid-contacts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
      ProjectInvoiceContactModel,
    ) as ProjectInvoiceContactModel;

  /**
   * @description Locks a project plan set.
   *
   * @tags Projects
   * @name LockPlanSet
   * @summary Locks a project plan set
   * @request POST:/rest/projects/{id}/plan-sets/{planSetId}/lock
   * @secure */
  lockPlanSet = (id: number, planSetId: number, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/plan-sets/${planSetId}/lock`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * @description Moves a task within a project. The task will be repositioned to be either before, after, or as the last child of the provided relative task.
   *
   * @tags Projects
   * @name MoveTask
   * @summary Moves project task
   * @request PUT:/rest/projects/{id}/tasks/{taskId}/move
   * @secure */
  moveTask = (id: number, taskId: number, data: TaskMoveModel, params: RequestParams = {}) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/tasks/${taskId}/move`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Retrieves a paged list of projects optionally filtered by the search criteria.
   *
   * @tags Projects
   * @name Search13
   * @summary Retrieves projects
   * @request POST:/rest/projects/search
   * @secure */
  search13 = (
    data: ProjectSearchModel,
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
    this.request<ProjectSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      ProjectSummaryPagedResponse,
    ) as ProjectSummaryPagedResponse;

  /**
   * @description Search for a project plan.
   *
   * @tags Projects
   * @name SearchPeoplePlans
   * @summary Search for project plans
   * @request POST:/rest/projects/{id}/people-plans/search
   * @secure */
  searchPeoplePlans = (
    id: number,
    data: ProjectPlanSearchModel,
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
    this.request<ProjectPlanPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/${id}/people-plans/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        format: "json",
        ...params,
      },
      ProjectPlanPagedResponse,
    ) as ProjectPlanPagedResponse;

  /**
   * @description Retrieves a paged list of tasks optionally filtered by the search criteria.
   *
   * @tags Projects
   * @name TaskSearch
   * @summary Retrieves tasks
   * @request POST:/rest/projects/tasks/search
   * @secure */
  taskSearch = (
    data: TaskSearchModel,
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
    this.request<TaskSummaryPagedResponse, ErrorResponse>(
      {
        path: `/rest/projects/tasks/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
      TaskSummaryPagedResponse,
    ) as TaskSummaryPagedResponse;

  /**
   * @description Updates/replaces a unit of measure's rates for a project item (or resets the rates if 'custom' flag is set to false).
   *
   * @tags Projects
   * @name UpdateItemUom
   * @summary Updates a unit of measure's rates for a project item
   * @request PUT:/rest/projects/{id}/items/{itemId}/uoms/{uomId}
   * @secure */
  updateItemUom = (
    id: number,
    itemId: number,
    uomId: number,
    data: UOMRateCollectionModel,
    params: RequestParams = {},
  ) =>
    this.request<void, ErrorResponse>({
      path: `/rest/projects/${id}/items/${itemId}/uoms/${uomId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
