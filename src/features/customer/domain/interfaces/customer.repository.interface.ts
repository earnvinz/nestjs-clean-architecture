import { Customer } from '../entities/customer.entity';

export interface CustomerRepository {
    create(customer: Omit<Partial<Customer>, 'id'>): Promise<string>;
}
