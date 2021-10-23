import { Team } from "../../Entities/Team";

export interface ITeamRepository{
    save(team: Team) : Promise<Team>
    getAll() : Promise<Team[]>
    getById(id: string) : Promise<Team>
    update(team: Team) : Promise<Team>
    delete(id: string) : Promise<void>
}