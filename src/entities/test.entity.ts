import {Column, Entity, JoinColumn, OneToMany, OneToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {UserEntity} from "./user.entity";
import {TestManyEntity} from "./test-many.entity";
import {TestOneEntity} from "./test-one.entity";

@Entity()
export class TestEntity extends BaseEntity {
    @Column({unique: true})
    userId: string;
    @OneToOne(type => UserEntity, userEntity => userEntity.test)
    @JoinColumn()
    user: UserEntity;

    @Column()
    testString: string;

    @OneToOne(type => TestOneEntity, testOne => testOne.test)
    testOne: TestOneEntity;

    @OneToMany(type => TestManyEntity, testMany => testMany.test)
    testMany: TestManyEntity[];
}
