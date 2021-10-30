import knex from "../../database/connection";
import { IPlayerRepository } from "./IPlayerRepository";
import { Player } from "../../Entities/Player";

export class PlayerRepository implements IPlayerRepository{
    async save(player: Player) : Promise<Player>{
        const [returnedPlayer] = await knex<Player, Player>('players')
            .insert(player, '*')

        return returnedPlayer
    }

    async getAll() : Promise<Player[]>{
        const players = await knex('players')
            .select('players.*', 'teams.name as team_name', 'teams.url_image as team_url_image', 
                'teams.abbreviation as team_abbreviation', 'positions.name as position_name', 'positions.abbreviation as position_abbreviation')
            .join('teams', 'teams.id', 'players.team_id')
            .join('positions', 'positions.id', 'players.position_id')

        return players
    }

    async findAllPlayersById(ids: string[]) : Promise<Player[]>{
        const players = await knex('players')
            .select('players.*', 'teams.name as team_name', 'teams.url_image as team_url_image', 
                'teams.abbreviation as team_abbreviation', 'positions.name as position_name', 'positions.abbreviation as position_abbreviation')
            .join('teams', 'teams.id', 'players.team_id')
            .join('positions', 'positions.id', 'players.position_id')
            .whereIn('players.id', ids)

        return players
    }
}