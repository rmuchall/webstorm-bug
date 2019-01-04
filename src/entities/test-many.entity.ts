import {Column, Entity, ManyToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {TestEntity} from "./test.entity";

@Entity()
export class TestManyEntity extends BaseEntity {
    @Column()
    testId: string;
    @ManyToOne(type => TestEntity, test => test.testMany)
    test: TestEntity;

    @Column()
    testManyString: string;
}
