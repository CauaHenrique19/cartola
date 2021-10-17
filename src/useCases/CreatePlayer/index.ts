import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { PlayerRepository } from "../../Repositories/PlayerRepository/PlayerRepository";
import { CreatePlayerController } from "./CreatePlayerController";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

const playerRepository = new PlayerRepository()
const awsUploadProvider = new AWSUploadProvider()
const createPlayerUseCase = new CreatePlayerUseCase(playerRepository, awsUploadProvider)
const createPlayerController = new CreatePlayerController(createPlayerUseCase)

export { createPlayerController }