/* eslint-disable prettier/prettier */
import {
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;
}
