import knex from "../../database/connection";
import { IPlayerRepository } from "./IPlayerRepository";
import { Player } from "../../Entities/Player";
import { Position } from "../../Entities/Position";
import { Team } from "../../Entities/Team";

export class PlayerRepository implements IPlayerRepository{
    async save(player: Player) : Promise<Player>{

        const [returnedPlayer] = await knex<Player, Player>('players')
            .insert(player, '*')

        const team = await knex<Team, Team>('teams')
            .select('name', 'abbreviation', 'url_image')
            .where({ id: returnedPlayer.team_id })
            .first()

        const position = await knex<Position, Position>('positions')
            .select('name', 'abbreviation')
            .where({ id: returnedPlayer.position_id })
            .first()

        returnedPlayer.team = team
        returnedPlayer.position = position

        return returnedPlayer

    }
}