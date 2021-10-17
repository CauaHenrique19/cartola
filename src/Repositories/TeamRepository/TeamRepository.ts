import { Team } from "../../Entities/Team";
import { ITeamRepository } from './ITeamRepository'
import knex from '../../database/connection'

export class TeamRepository implements ITeamRepository{
    async save(team: Team) : Promise<Team>{
        const [returnedTeam] = await knex('teams')
            .insert(team, '*')

        return returnedTeam
    }

    async getAll() : Promise<Team[]>{
        const teams = await knex('teams')
            .select('*')

        return teams
    }

    async update(team: Team) : Promise<Team>{
        const [updatedTeam] = await knex('teams')
            .update(team, '*')
            .where({ id: team.id })

        return updatedTeam
    }

    async delete(id: string) : Promise<void>{
        await knex('teams')
            .delete()
            .where({ id })
    }
}