import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { Invoice } from "../../invoice/model/Invoice";
import {
  CURRENCY_REGEX,
  DEPOSIT_DEFAULT,
  SET_INVOICE_YEAR,
  CONVERT_INVOICE_DATE,
  GET_NUMBER,
  SET_NEW_DATE,
} from "../../shared/constants/constants";
import {
  ActivatedRoute,
  Router,
} from "../../../../node_modules/@angular/router";
import { Service } from "../model/Service";
import { InvoiceDataService } from "../../shared/services/invoice-data.service";
import { InvoiceUrlPipe } from "../../shared/pipes/invoice-url-pipe";

@Component({
  selector: "app-create-invoice",
  templateUrl: "./create-invoice.component.html",
  styleUrls: ["./create-invoice.component.scss"],
})
export class CreateInvoiceComponent implements OnInit {
  public invoiceForm: FormGroup;
  public services: FormArray;
  public statuses = ["due", "paid", "canceled"];
  public servicesTotals: number[] = [];
  public subTotal: number = 0;
  public total: number = this.subTotal;
  public deposit: number;
  private depositAdded: boolean;
  private currentInvoice: Invoice;
  public editing: boolean;

  constructor(
    private fb: FormBuilder,
    private dataService: InvoiceDataService,
    route: ActivatedRoute,
    private router: Router
  ) {
    route.data.subscribe((data) => {
      this.currentInvoice = data["invoice"]
        ? this.getInvoiceFromData(data["invoice"][0])
        : this.freshInvoice();
      this.configureForm();
    });
  }

  private configureForm() {
    this.invoiceForm = this.fb.group({
      date: [SET_NEW_DATE(this.currentInvoice.date), Validators.required],
      clientId: [this.currentInvoice.clientId, Validators.required],
      status: [this.currentInvoice.status, Validators.required],
      client: this.fb.group({
        name: [this.currentInvoice.client.name, Validators.required],
        contact: [this.currentInvoice.client.contact, Validators.required],
        address: this.fb.group({
          street: this.currentInvoice.client.address.street,
          city: [
            this.currentInvoice.client.address.city,
            Validators.minLength(10),
          ],
        }),
      }),
      notes: this.currentInvoice.notes,
      linkedInvoice: this.currentInvoice.linkedInvoice,
      // phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
      // email: ['', [Validators.email, Validators.required]]
      services: this.fb.array([]),
      depositCheckbox: this.currentInvoice.depositCheckbox,
      depositAmt: this.currentInvoice.depositAmt,
    });
  }

  private freshInvoice(): Invoice {
    return new Invoice(
      null,
      "",
      null,
      { name: "", contact: "", address: { street: "", city: "" } },
      [new Service()],
      null,
      null,
      "due",
      false,
      null,
      "",
      "",
      ""
    );
  }

  private getInvoiceFromData(data: any): Invoice {
    return new Invoice(
      data.id,
      data.clientId,
      data.date,
      data.client,
      data.services,
      data.totalCost,
      data.balance,
      data.status,
      data.depositCheckbox,
      data.depositAmt,
      data.year,
      data.notes,
      data.linkedInvoice
    );
  }

  ngOnInit() {
    this.depositAdded = this.currentInvoice.depositCheckbox;
    this.deposit = this.currentInvoice.depositAmt;
    this.editing = this.currentInvoice.id ? true : false;
    this.setServices();
    this.subscribeToCheckbox();
    this.updateTotal();
    // this.setDepositAmt(this.depositAdded)
    // console.log(this.invoiceForm);
    // console.log(this.invoiceForm.get('services')['controls']);
  }

  private createNewItem(s?: Service): FormGroup {
    let service = s ? s : this.freshService();
    return this.fb.group({
      item: [service.item, Validators.required],
      unitCost: [service.unitCost, Validators.required],
      quantity: [service.quantity, Validators.required],
      total: [service.total, Validators.pattern(CURRENCY_REGEX)],
    });
  }

  private freshService(): Service {
    return new Service();
  }

  public addService() {
    this.services.push(this.createNewItem());
    this.servicesTotals.push(this.freshService().total); // set default total to $0
  }

  private setServices() {
    this.services = this.invoiceForm.get("services") as FormArray;
    this.currentInvoice.services.forEach((service) => {
      let serviceGroup = this.createNewItem(service);
      this.services.push(serviceGroup);
      this.servicesTotals.push(service.total);
    });
  }

  public removeService(i: number) {
    this.services.removeAt(i);
    this.servicesTotals.splice(i, 1);
    this.updateTotal();
  }

  public calculateItem(i: number) {
    let total =
      this.services.controls[i]["controls"]["quantity"].value *
      this.services.controls[i]["controls"]["unitCost"].value;
    this.servicesTotals[i] = isNaN(total) ? 0 : GET_NUMBER(total.toFixed(2));
    this.updateTotal();
  }

  private percentageOf(num: number, per: number): number {
    return (num / 100) * per;
  }

  private reversePercentage(num: number, per: number): number {
    return (num * 100) / per;
  }

  private updateTotal() {
    this.subTotal = this.servicesTotals.reduce((total, serviceCost) => {
      return total + serviceCost;
    }, 0);

    if (this.depositAdded) {
      this.total = this.percentageOf(this.subTotal, this.deposit);
    } else {
      this.total =
        this.deposit > 0 && this.deposit < 100
          ? this.reversePercentage(this.subTotal, this.deposit)
          : this.subTotal;
    }
  }

  public onDepositKeyUp() {
    this.depositAdded = this.deposit > 0 && this.deposit < 100 ? true : false; // check if valid deposit amount
    this.updateTotal();
  }

  private subscribeToCheckbox() {
    let depositCheckbox = this.invoiceForm.get("depositCheckbox");
    depositCheckbox.valueChanges.subscribe((checked) => {
      this.setDepositAmt(checked);
      this.setDepositField(checked);
    });
  }

  private setDepositAmt(checked: boolean = true) {
    if (checked) {
      this.deposit = !this.deposit ? DEPOSIT_DEFAULT : this.deposit;
      this.depositAdded = true;
    } else {
      this.deposit = 0;
      this.depositAdded = false;
    }
    this.updateTotal();
  }

  private setDepositField(enabled: boolean) {
    let depositAmtField = this.invoiceForm.get("depositAmt");
    if (enabled) {
      depositAmtField.enable();
      depositAmtField.setValidators([
        Validators.required,
        Validators.pattern(CURRENCY_REGEX),
      ]);
    } else {
      depositAmtField.disable();
      depositAmtField.clearValidators();
    }
    depositAmtField.updateValueAndValidity();
  }

  public saveInvoice() {
    // console.log('form value:', this.invoiceForm.value);
    const id = this.currentInvoice.id;
    this.currentInvoice = this.getInvoiceFromData(this.invoiceForm.value);
    this.currentInvoice.id = id;
    this.currentInvoice.date = CONVERT_INVOICE_DATE(this.currentInvoice.date);
    this.currentInvoice.year = SET_INVOICE_YEAR(this.currentInvoice.date);
    this.currentInvoice.balance = this.total;
    this.currentInvoice.totalCost = this.subTotal;
    // console.log('this.currentInvoice:', this.currentInvoice);
    this.editing ? this.updateInvoice() : this.postNewInvoice();
  }

  private postNewInvoice() {
    this.dataService
      .postInvoice(this.currentInvoice)
      .subscribe((res) => this.gotoSavedInvoiced(res));
  }

  private updateInvoice() {
    this.dataService
      .updateInvoice(this.currentInvoice)
      .subscribe((res) => this.gotoSavedInvoiced(res));
  }

  private gotoSavedInvoiced(invoice: Invoice) {
    const url = new InvoiceUrlPipe().transform(invoice);
    this.router.navigate([url]);
  }
}
