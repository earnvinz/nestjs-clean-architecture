import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from 'src/config/env.config';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: envConfig.dbHost,
            port: envConfig.dbPort || 5432,
            username: envConfig.dbUsername,
            password: envConfig.dbPassword,
            database: envConfig.dbDatabase,
            entities: [__dirname + '/../**/*.entity{.ts}'],
            synchronize: true,
        }),
    ],
})
export class DatabaseModule {}
