import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSource } from './data-source';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...appDataSource.options,
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
