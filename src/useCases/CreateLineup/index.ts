import { LineupRepository } from "../../Repositories/LineupRepository/LineupRepository";
import { CreateLineupController } from "./CreateLineupController";
import { CreateLineupUseCase } from "./CreateLineupUseCase";

const lineupRepository = new LineupRepository()
const createLineupUseCase = new CreateLineupUseCase(lineupRepository)
const createLineupController = new CreateLineupController(createLineupUseCase)

export { createLineupController }