import { injectable } from "tsyringe";
import { ApiConfig, HttpClient } from "./generated_api/http-client";
import { PaymentTerms } from "./generated_api/PaymentTerms";
// import { PaymentTerms } from "./generated_api/PaymentTerms";
import { People } from "./generated_api/People";

@injectable()
export class ApiService {
  private apiConfig: ApiConfig;

  public people: People;
  
  public paymentTerms: PaymentTerms;

  constructor(token?: string) {
    this.apiConfig = {
      securityWorker: () => ({
        headers: {
        'Authorization': `Bearer ${token}`
      }})
    };

    this.people = new People(this.apiConfig);
    this.paymentTerms = new PaymentTerms(this.apiConfig);

  }
  
  setToken(token: string) {
    this.apiConfig.securityWorker = () => ({ headers: { Authorization: `Bearer ${token}` } });
  }
}