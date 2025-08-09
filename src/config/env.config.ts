export const envConfig = {
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dbDatabase: process.env.DB_DATABASE,
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};
