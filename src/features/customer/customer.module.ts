import { Module } from '@nestjs/common';
import { CustomerEnum } from '../../enum/customer';
import { CreateCustomerUseCase } from './application/usecases/create-customer';
import { CustomerController } from './presentation/controllers/customer/customer';
import { CustomerRepositoryImplement } from '~features/customer/infrastructure/database/customer.repository.implement';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '~features/customer/infrastructure/database/entities/customer.entity';
import { DatabaseModule } from '~infrastructure/database/typeorm/database.module';

const injects = [
    {
        provide: CustomerEnum.InjectionToken.ICreateCustomer,
        useClass: CreateCustomerUseCase,
    },
    {
        provide: CustomerEnum.InjectionToken.ICustomerRepository,
        useClass: CustomerRepositoryImplement,
    },
];

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([CustomerEntity])],
    controllers: [CustomerController],
    providers: [CreateCustomerUseCase, ...injects],
})
export class CustomerModule {}
