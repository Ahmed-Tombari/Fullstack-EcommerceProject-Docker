export class PaymentInfo {
  amount: number = 0; // Default value
  currency: string = 'USD'; // Default value
  receiptEmail: string = ''; // Default value

  constructor(paymentInfo?: Partial<PaymentInfo>) {
      if (paymentInfo) {
          this.amount = paymentInfo.amount || this.amount;
          this.currency = paymentInfo.currency || this.currency;
          this.receiptEmail = paymentInfo.receiptEmail || this.receiptEmail;
      }
  }
}
