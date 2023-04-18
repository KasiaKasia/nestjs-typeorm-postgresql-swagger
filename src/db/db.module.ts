/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './db.config';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        TypeOrmModule.forRootAsync({
            inject: [dbConfig.KEY],
            imports: [ConfigModule.forFeature(dbConfig)],
            useFactory: (config: ConfigType<typeof dbConfig>) => {
                return {
                    ...config,
                    type: 'postgres',
                    migrations: [],
                };
            },
        }),
    ],
    exports: [TypeOrmModule]
})
export class DbModule { }