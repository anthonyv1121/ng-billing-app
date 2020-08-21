import { InvoiceDate } from "../classes/InvoiceDate";

//API Params
export const DEFAULT_LATEST_RESULTS = "&_sort=date&_order=desc";
export const DEFAULT_RESULTS_LIMIT = "20";
export const GET_DEFAULT_RESULTS = () => "_limit=" + DEFAULT_RESULTS_LIMIT;
export const GET_LATEST_RESULTS = () =>
  GET_DEFAULT_RESULTS() + DEFAULT_LATEST_RESULTS;

// Invoice Constants
export const CURRENCY_REGEX = /(?=.*?\d)^[0-9](([1-9]\d{0,2})|\d+)?(\.\d{1,2})?$/;
export const DEPOSIT_DEFAULT = 50;
export const NOTES_TO_CLIENT = {
  deposit:
    "Deposit is non-refundable. The remaining balance will be due once the project is complete.",
  payment: "Payment is due on receipt. Please make check payable and mail to: ",
  thankYou: "Thank you for your business."
};

// Invoice Functions
export const CONVERT_INVOICE_DATE = (iso: string) =>
  new InvoiceDate(iso).invoiceDate;
export const SET_INVOICE_YEAR = (iso: string) => new InvoiceDate(iso).year;
export const SET_NEW_DATE = (str: string) => (str ? new Date(str) : new Date());

// General Functions
export const GET_CSS_VALUE = (element: Element, prop: string) =>
  getComputedStyle(element).getPropertyValue(prop);
export const CONSTRUCT_INVOICE_URL = (paths: string[]) =>
  "/invoices/" + paths.join().replace(/,/g, "/");
export const GET_NUMBER = (value: string) => Number(value);

// Invoice Service Table Functions
export const SERVICE_TABLE_FIRST_ROW_WIDTH = parseInt(
  GET_CSS_VALUE(document.documentElement, "--service-table-first-col-width")
);
export const SINGLE_ROW_TABLE_FIRST_CELL_WIDTH = (rows: number = 4) => {
  const firstRowW = SERVICE_TABLE_FIRST_ROW_WIDTH;
  return firstRowW + ((100 - firstRowW) / (rows - 1)) * (rows - 2);
};
