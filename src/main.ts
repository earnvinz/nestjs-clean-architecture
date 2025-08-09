import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from '~src/config/env.config';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from '~src/config/swagger.config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            schemes: ['https', 'http'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    });

    app.enableVersioning({
        type: VersioningType.URI,
    });

    app.setGlobalPrefix('api');

    await app.listen(process.env.PORT ?? 3000);

    console.log(`Application is running on port: ${envConfig.port}`);
}
bootstrap();
