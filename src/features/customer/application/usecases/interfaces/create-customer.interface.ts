import { CreateCustomerInput } from '../types/create-customer.type';

export interface ICreateCustomer {
    execute(input: CreateCustomerInput): Promise<string>;
}
