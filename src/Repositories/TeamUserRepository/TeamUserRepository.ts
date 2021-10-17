import knex from "../../database/connection";
import { TeamUser } from "../../Entities/TeamUser";
import { ITeamUserRepository } from "./ITeamUserRepository";

export class TeamUserRepository implements ITeamUserRepository{
    async save(team: TeamUser) : Promise<TeamUser>{
        const [returnedTeam] = await knex('teams_users')
            .insert(team, '*')
        
        return returnedTeam
    }
}