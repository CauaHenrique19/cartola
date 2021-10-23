import { TeamUser } from "../../Entities/TeamUser";
import { ITeamUserRepository } from "../../Repositories/TeamUserRepository/ITeamUserRepository";
import { ICreateTeamUserDTO } from "./ICreateTeamUserDTO";

export class CreateTeamUserUseCase{
    constructor(private teamUserRepository : ITeamUserRepository){}

    async execute(team: ICreateTeamUserDTO) : Promise<TeamUser>{
        const now = new Date()
        const teamUserEntity = new TeamUser({ name: team.name, user_id: team.user_id, created_at: now })
        const returnedTeam = await this.teamUserRepository.save(teamUserEntity)
        return returnedTeam
    }   
}