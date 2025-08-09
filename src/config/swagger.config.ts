import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()

    .setTitle('Test NestJS Clean Architecture API')
    .setVersion('1.0')
    .build();

export default swaggerConfig;
