import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerRequest {
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ type: String, required: true })
    @IsEmail()
    email: string;
}
