import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../domain/interfaces/customer.repository.interface';
import { ICreateCustomer } from './interfaces/create-customer.interface';
import { CreateCustomerInput } from './types/create-customer.type';
import { CustomerEnum } from '~src/enum/customer';

@Injectable()
export class CreateCustomerUseCase implements ICreateCustomer {
    constructor(
        @Inject(CustomerEnum.InjectionToken.ICustomerRepository)
        private readonly customerRepository: CustomerRepository,
    ) {}

    async execute(input: CreateCustomerInput): Promise<string> {
        const result = await this.customerRepository.create(input);
        return result;
    }
}
