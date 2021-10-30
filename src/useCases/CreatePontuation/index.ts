import { PontuationRepository } from "../../Repositories/PontuationRepository/PontuationRepository";
import { CreatePontuationController } from "./CreatePontuationController";
import { CreatePontuationUseCase } from "./CreatePontuationUseCase";

const pontuationRepository = new PontuationRepository()
const createPontuationUseCase = new CreatePontuationUseCase(pontuationRepository)
const createPontuationController = new CreatePontuationController(createPontuationUseCase)

export { createPontuationController }