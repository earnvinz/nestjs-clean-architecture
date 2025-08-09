import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { CustomerRepository } from '../../domain/interfaces/customer.repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRepositoryImplement implements CustomerRepository {
    constructor(
        @InjectRepository(CustomerEntity)
        private readonly repo: Repository<CustomerEntity>,
    ) {}

    async create(
        customer: Omit<Partial<CustomerEntity>, 'id'>,
    ): Promise<string> {
        console.log(
            '🚀 ~ CustomerRepositoryImplement ~ create ~ customer:',
            customer,
        );
        const result = await this.repo.insert(customer);
        return result.identifiers[0].id.toString();
    }
}
