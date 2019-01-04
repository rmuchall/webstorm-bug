import {Exclude} from "class-transformer";
import {IBase} from "peardrop-shared/interfaces/base/ibase.interface";
import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export abstract class BaseEntity implements IBase {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    @Exclude()
    created: Date;

    @UpdateDateColumn()
    @Exclude()
    updated: Date;
}
