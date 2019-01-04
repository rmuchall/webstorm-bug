import {getManager, Repository} from "typeorm";
import {TestEntity} from "./entities/test.entity";

export class ExampleBug {
    testRepository: Repository<TestEntity> = getManager().getRepository(TestEntity);

    async broken(): Promise<void> {
        // The combination of the following 2 lines of code cause the code analysis to hang and thrash the CPU.
        // Uncomment to recreate the problem.
        // const testEntity: TestEntity = this.testRepository.create();
        // this.testRepository.save(testEntity);
    }
}
