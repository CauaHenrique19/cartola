import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { TeamRepository } from "../../Repositories/TeamRepository/TeamRepository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const teamRepository = new TeamRepository()
const awsUploadProvider = new AWSUploadProvider()
const createTeamUseCase = new CreateTeamUseCase(teamRepository, awsUploadProvider)
const createTeamController = new CreateTeamController(createTeamUseCase)

export { createTeamController }