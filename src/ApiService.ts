import { injectable } from "tsyringe";
import { ApiConfig, HttpClient } from "./generated_api/http-client";
import { PaymentTerms } from "./generated_api/PaymentTerms";
// import { PaymentTerms } from "./generated_api/PaymentTerms";
import { People } from "./generated_api/People";
import { PurchaseOrders } from "./generated_api/PurchaseOrders";
import { ReceivingDocuments } from "./generated_api/ReceivingDocuments";

@injectable()
export class ApiService {
  private apiConfig: ApiConfig;

  public people: People;
  
  public paymentTerms: PaymentTerms;

  public purchaseOrders: PurchaseOrders;

  public receivingDocuments: ReceivingDocuments;

  constructor(token?: string) {
    this.apiConfig = {
      securityWorker: () => ({
        headers: {
        'Authorization': `Bearer ${token}`
      }})
    };

    this.people = new People(this.apiConfig);
    this.paymentTerms = new PaymentTerms(this.apiConfig);
    this.purchaseOrders = new PurchaseOrders(this.apiConfig);
    this.receivingDocuments = new ReceivingDocuments(this.apiConfig);

  }
  
  setToken(token: string) {
    this.apiConfig.securityWorker = () => ({ headers: { Authorization: `Bearer ${token}` } });
  }
}