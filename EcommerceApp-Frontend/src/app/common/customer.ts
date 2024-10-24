export class Customer {
  firstName: string;
  lastName: string;
  email: string;

  // Updated constructor to accept optional arguments
  constructor(customer?: Partial<Customer>) {
    this.firstName = customer?.firstName || '';
    this.lastName = customer?.lastName || '';
    this.email = customer?.email || '';
  }
}
