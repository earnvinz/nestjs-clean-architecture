import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database/typeorm/database.module';
import { CustomerModule } from '~features/customer/customer.module';
import { HttpModule } from '~features/http.module';


@Module({
    imports: [DatabaseModule,HttpModule],
    
})
export class AppModule {}
