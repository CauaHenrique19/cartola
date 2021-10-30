import { PontuationInPlayerRepository } from "../../Repositories/PontuationInPlayerRepository/PontuationInPlayerRepository";
import { CreatePontuationInPlayerController } from "./CreatePontuationInPlayerController";
import { CreatePontuationInPlayerUseCase } from "./CreatePontuationInPlayerUseCase";

const pontuationInPlayerRepository = new PontuationInPlayerRepository()
const createPontuationInPlayerUseCase = new CreatePontuationInPlayerUseCase(pontuationInPlayerRepository)
const createPontuationInPlayerController = new CreatePontuationInPlayerController(createPontuationInPlayerUseCase)

export { createPontuationInPlayerController }