import {Column, Entity, OneToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {TestEntity} from "./test.entity";

@Entity()
export class UserEntity extends BaseEntity {
    @Column({unique: true})
    userName: string;

    @Column()
    password: string;

    @Column({unique: true})
    email: string;

    @OneToOne(type => TestEntity, test => test.user)
    test: TestEntity;
}
