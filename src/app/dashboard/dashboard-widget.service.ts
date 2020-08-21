import { Injectable } from "@angular/core";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { InvoiceDataService } from "../shared/services/invoice-data.service";
import { forkJoin } from "rxjs/observable/forkJoin";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DashboardWidgetService {
  private due: AsyncSubject<any>;
  private paid: AsyncSubject<any>;

  constructor(private invoiceDataService: InvoiceDataService) {}

  public getWidgetData(url: string): Observable<any> {
    this.due = new AsyncSubject();
    this.paid = new AsyncSubject();

    this.invoiceDataService.getInvoices(url).subscribe(res => {
      console.log({ url });

      this.broadcast(this.due, this.filterStatus(res, "due", 10));
      this.broadcast(this.paid, this.filterStatus(res, "paid", 3));
    });

    return this.combineObs(this.due, this.paid);
  }

  private combineObs(_due, _paid): Observable<any> {
    return forkJoin(_due, _paid, (due, paid) => {
      return { due, paid };
    });
  }
  private broadcast(subject: AsyncSubject<any>, value: any) {
    subject.next(value);
    subject.complete();
  }

  private filterStatus(res: any[], status: string, limit: number): any[] {
    // console.log('filterStatus', res.filter(res => res['status'] === status).slice(0, limit));

    return res.filter(res => res["status"] === status).slice(0, limit);
  }
}
