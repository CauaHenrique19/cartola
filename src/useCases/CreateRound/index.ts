import { RoundRepository } from "../../Repositories/RoundRepository/RoundRepository";
import { CreateRoundController } from "./CreateRoundController";
import { CreateRoundUseCase } from "./CreateRoundUseCase";

const roundRepository = new RoundRepository()
const createRoundUseCase = new CreateRoundUseCase(roundRepository)
const createRoundController = new CreateRoundController(createRoundUseCase)

export { createRoundController }