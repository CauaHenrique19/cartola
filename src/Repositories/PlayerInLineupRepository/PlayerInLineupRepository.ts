import knex from '../../database/connection'
import { PlayerInLineup } from "../../Entities/PlayerInLineup";
import { IPlayerInLineupRepository } from "./IPlayerInLineupRepository";

export class PlayerInLineupRepository implements IPlayerInLineupRepository{
    async save(playerInLineup: PlayerInLineup[]) : Promise<void>{
        await knex('players_in_lineups')
            .insert(playerInLineup)
    }
}