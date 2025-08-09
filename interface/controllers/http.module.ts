import { Module } from '@nestjs/common';
import { CustomerController } from './customer';

@Module({
    // imports: [CustomerModule],
    controllers: [CustomerController],
})
export class HttpModule {}
