import { PositionRepository } from "../../Repositories/PositionRepository/PositionRepository";
import { CreatePositionController } from "./CreatePositionController";
import { CreatePositionUseCase } from "./CreatePositionUseCase";

const positionRepository = new PositionRepository()
const createPositionUseCase = new CreatePositionUseCase(positionRepository)
const createPositionController = new CreatePositionController(createPositionUseCase)

export { createPositionController }