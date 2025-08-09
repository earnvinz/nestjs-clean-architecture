import { Module } from '@nestjs/common';
import { CustomerModule } from '~features/customer/customer.module';

@Module({
    imports: [CustomerModule],
})
export class HttpModule {}
