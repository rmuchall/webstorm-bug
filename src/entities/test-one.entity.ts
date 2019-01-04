import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {TestEntity} from "./test.entity";

@Entity()
export class TestOneEntity extends BaseEntity {
    @Column({unique: true})
    testId: string;
    @OneToOne(type => TestEntity, test => test.testOne)
    @JoinColumn()
    test: TestEntity;

    @Column()
    testOneString: string;
}
