import { DataSource } from 'typeorm';
import * as path from 'path';
import { CustomerEntity } from '~features/customer/infrastructure/database/entities/customer.entity';

export const appDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_DATABASE || 'postgres',
    entities: [
        CustomerEntity
    ],
    migrations: [path.join(__dirname, '/../migrations/*.{ts,js}')],
});
