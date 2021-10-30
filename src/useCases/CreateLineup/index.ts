import { LineupRepository } from "../../Repositories/LineupRepository/LineupRepository";
import { PlayerInLineupRepository } from "../../Repositories/PlayerInLineupRepository/PlayerInLineupRepository";
import { PlayerRepository } from "../../Repositories/PlayerRepository/PlayerRepository";
import { CreateLineupController } from "./CreateLineupController";
import { CreateLineupUseCase } from "./CreateLineupUseCase";

const lineupRepository = new LineupRepository()
const playerInLineupRepository = new PlayerInLineupRepository()
const playerRepository = new PlayerRepository()
const createLineupUseCase = new CreateLineupUseCase(lineupRepository, playerInLineupRepository, playerRepository)
const createLineupController = new CreateLineupController(createLineupUseCase)

export { createLineupController }