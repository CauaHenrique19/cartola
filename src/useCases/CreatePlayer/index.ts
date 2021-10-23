import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { PlayerRepository } from "../../Repositories/PlayerRepository/PlayerRepository";
import { PositionRepository } from "../../Repositories/PositionRepository/PositionRepository";
import { TeamRepository } from "../../Repositories/TeamRepository/TeamRepository";
import { CreatePlayerController } from "./CreatePlayerController";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

const playerRepository = new PlayerRepository()
const teamRepository = new TeamRepository()
const positionRepository = new PositionRepository()
const awsUploadProvider = new AWSUploadProvider()
const createPlayerUseCase = new CreatePlayerUseCase(playerRepository, teamRepository, positionRepository, awsUploadProvider)
const createPlayerController = new CreatePlayerController(createPlayerUseCase)

export { createPlayerController }