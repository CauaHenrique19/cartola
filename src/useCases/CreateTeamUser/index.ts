import { TeamUserRepository } from "../../Repositories/TeamUserRepository/TeamUserRepository";
import { CreateTeamUserController } from "./CreateTeamUserController";
import { CreateTeamUserUseCase } from "./CreateTeamUserUseCase";

const teamUserRepository = new TeamUserRepository()
const createTeamUserUseCase = new CreateTeamUserUseCase(teamUserRepository)
const createTeamUserController = new CreateTeamUserController(createTeamUserUseCase)

export { createTeamUserController }