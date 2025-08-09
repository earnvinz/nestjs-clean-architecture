import { Body, Controller, Inject, Post, UseInterceptors } from '@nestjs/common';
import { AjvResponseInterceptor } from '../../../../../common/response.interceptor';
import { CustomerEnum } from '../../../../../enum/customer';
import { ICreateCustomer } from '../../../application/usecases/interfaces/create-customer.interface';
import { CreateCustomerRequest } from './customer.type';
import { customerResponseSchema } from './schema/customer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller({
    version: '1',
    path: 'customers',
})
export class CustomerController {
    constructor(
        @Inject(CustomerEnum.InjectionToken.ICreateCustomer)
        private readonly createCustomerUseCase: ICreateCustomer,
    ) {}

    @Post()
    @UseInterceptors(new AjvResponseInterceptor(customerResponseSchema))
    async createCustomer(@Body() createCustomerRequest: CreateCustomerRequest) {

        const result = await this.createCustomerUseCase.execute(createCustomerRequest);
        return {
            data: {
                id: result,
            }
        }
    }
}
