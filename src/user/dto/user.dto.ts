/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/db/entities/user.entity';

export class UserAddDto {
    @ApiProperty({ example: 'Piotr' })
    firstName: string;

    @ApiProperty({ example: 'piotr@gmail.com' })
    email: string;

    @ApiProperty({ example: 'Nowak' })
    lastName: string;
}

export class UserAddDtoResponse {
    user: UserEntity;
}