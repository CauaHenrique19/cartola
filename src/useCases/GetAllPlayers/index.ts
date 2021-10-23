import { PlayerRepository } from "../../Repositories/PlayerRepository/PlayerRepository";
import { GetAllPlayersController } from "./GetAllPlayersController";
import { GetAllPlayersUseCase } from "./GetAllPlayersUseCase";

const playerRepository = new PlayerRepository()
const getAllPlayersUseCase = new GetAllPlayersUseCase(playerRepository)
const getAllPlayersController = new GetAllPlayersController(getAllPlayersUseCase)

export { getAllPlayersController }