import { TeamUser } from "../../Entities/TeamUser";

export interface ITeamUserRepository{
    save(team: TeamUser) : Promise<TeamUser>
}