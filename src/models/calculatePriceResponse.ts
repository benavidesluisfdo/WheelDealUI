import { FeeDetail } from "./feeDetail";

export class CalculatePriceResponse {
  totalPrice: number;
  feeDetails: FeeDetail[] = [];
}
