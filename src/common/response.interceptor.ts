// src/common/interceptors/ajv-response.interceptor.ts
import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Ajv from 'ajv';

@Injectable()
export class AjvResponseInterceptor implements NestInterceptor {
    private ajv = new Ajv({
        allErrors: false,
        strict: false,
        removeAdditional: 'all',
        useDefaults: true,
    });

    constructor(private schema: object) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const validate = this.ajv.compile(this.schema);

        return next.handle().pipe(
            map((data) => {
                const valid = validate(data);
                if (!valid) {
                    throw new Error(
                        `Response validation failed: ${JSON.stringify(validate.errors)}`,
                    );
                }
                return data;
            }),
            catchError((err) => throwError(() => err)),
        );
    }
}
