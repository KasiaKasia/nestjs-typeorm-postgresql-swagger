/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { PostgresErrorCode } from 'src/db/postgres-error-code.enum';
import { Repository } from 'typeorm';
import { UserAddDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>) {}

    async add(userData: UserAddDto): Promise<UserEntity> {
        try {
            const newUser = await this.usersRepository.create({
                ...userData,
            });
            await this.usersRepository.save(newUser);
            return newUser;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException(
                    'User with that email already exists',
                    HttpStatus.BAD_REQUEST,
                );
            }
            throw error;
        }
    }
}
